import React, { useEffect, useState } from 'react';
import { Coin, ICoin } from '../@types/ICoin';
import { formatVolume } from 'utils/formatVolume';
import FavoriteIcon from './icons/FavoriteIcon';
import { LineWave } from 'react-loader-spinner';
import ApexCharts from 'apexcharts';

import chartImg from 'chart.png';
import ReactApexChart from 'react-apexcharts';

function TableHeader() {
  return (
    <thead>
      <tr className='border border-[#08397E] bg-gradient-to-r from-custom-green from-20% via-black to-black'>
        <td className='px-2 py-1'>Product</td>
        <td className='px-2 py-1'>Price</td>
        <td className='px-2 py-1'>24h Change</td>
        <td className='px-2 py-1'>Market</td>
        <td className='px-2 py-1'>24h baseVolume</td>
        <td className='px-2 py-1'>quoteVolume</td>
        <td className='px-2 py-1'>Actions</td>
      </tr>
    </thead>
  );
}

function TableRow({ coinSymbol, coin }: { coinSymbol: string; coin: Coin }) {
  const logoUrl = `https://api.bgcrypto.io/logo/${coinSymbol}.png`;
  // Define your chart series and options here
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    // Update priceData state whenever coin.last changes
    // @ts-ignore
    setPriceData((prevData) => [...prevData, coin.last]);
  }, [coin.last]);

  const series = [{ data: priceData }];
  const options = {
    chart: {
      zoom: { enabled: false },
      menu: {
        enabled: false,
      },
      toolbar: {
        show: false,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          customIcons: [],
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    stroke: {
      colors: ['#008000'],
      width: 1,
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false, // This will hide the x-axis labels
      },
      axisBorder: {
        show: false, // This will hide the x-axis border
      },
      axisTicks: {
        show: false, // This will hide the x-axis ticks
      },
    },
    yaxis: {
      labels: {
        show: false, // This will hide the y-axis labels
      },
      axisBorder: {
        show: false, // This will hide the y-axis border
      },
      axisTicks: {
        show: false, // This will hide the y-axis ticks
      },
    },
  };
  return (
    <tr key={coinSymbol}>
      <td className='px-2 pt-2'>
        <div className='flex items-center gap-2'>
          <FavoriteIcon className='cursor-pointer' />
          <img src={logoUrl} height={18} width={18} alt={coinSymbol} />
          <span>{coinSymbol.toUpperCase()}</span>
        </div>
      </td>
      <td className='px-2'>{coin.last}</td>
      <td
        className={`px-2 ${
          parseFloat(coin.info.priceChangePercent) < 0
            ? 'text-red-600'
            : 'text-green-600'
        }`}
      >
        {parseFloat(coin.info.priceChangePercent).toFixed(2)}%
      </td>
      <td className='px-2'>
        {/* <img width={100} height={60} src={chartImg} alt='chart'></img> */}
        <ReactApexChart
          options={options}
          series={series}
          type='line'
          height={100}
          width={150}
        />
      </td>
      <td className='px-2'>{formatVolume(coin.baseVolume)}</td>
      <td className='px-2'>{formatVolume(coin.quoteVolume)}</td>
      <td className='px-2'>Trade</td>
    </tr>
  );
}

export default function Table({
  data,
  currentItems,
  loading,
}: {
  data: ICoin;
  currentItems: string[];
  loading: boolean;
}) {
  return (
    <div className='w-full'>
      <table className='relative w-full'>
        <TableHeader />
        {loading ? (
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1 transform'>
            <LineWave
              height='100'
              width='100'
              color='white'
              ariaLabel='line-wave'
              wrapperStyle={{}}
              wrapperClass=''
              visible={true}
              firstLineColor=''
              middleLineColor=''
              lastLineColor=''
            />
          </div>
        ) : (
          <tbody>
            {data &&
              currentItems.map((coinSymbol) => {
                const coin = data.data[coinSymbol];
                return <TableRow coinSymbol={coinSymbol} coin={coin} />;
              })}
          </tbody>
        )}
      </table>
    </div>
  );
}

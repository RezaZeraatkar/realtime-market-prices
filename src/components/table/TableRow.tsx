import React from 'react';
import { Coin } from 'types/ICoin';
import { formatVolume } from 'utils/formatVolume';
// import ReactApexChart from 'react-apexcharts';
// import { createCircularBuffer } from 'utils/createCirBuffer';
import FavoriteIcon from 'components/icons/FavoriteIcon';
import chartImg from 'chart.png';

export function TableRow({
  coinSymbol,
  coin,
}: {
  coinSymbol: string;
  coin: Coin;
}) {
  const logoUrl = `https://api.bgcrypto.io/logo/${coinSymbol}.png`;
  // Define your chart series and options here
  // const bufferRef = useRef(createCircularBuffer(1000));
  // const [priceData, setPriceData] = useState(bufferRef.current.toArray());

  // useEffect(() => {
  //   bufferRef.current.push(Number(coin.last));
  //   setPriceData(bufferRef.current.toArray());
  // }, [coin.last]);

  // const series = [{ data: priceData }];
  // const options = {
  //   chart: {
  //     zoom: { enabled: false },
  //     menu: {
  //       enabled: false,
  //     },
  //     toolbar: {
  //       show: false,
  //       tools: {
  //         download: false,
  //         selection: false,
  //         zoom: false,
  //         zoomin: false,
  //         zoomout: false,
  //         pan: false,
  //         customIcons: [],
  //       },
  //     },
  //   },
  //   tooltip: {
  //     enabled: false,
  //   },
  //   stroke: {
  //     colors: ['#008000'],
  //     width: 1,
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   grid: {
  //     show: false,
  //   },
  //   xaxis: {
  //     labels: {
  //       show: false, // This will hide the x-axis labels
  //     },
  //     axisBorder: {
  //       show: false, // This will hide the x-axis border
  //     },
  //     axisTicks: {
  //       show: false, // This will hide the x-axis ticks
  //     },
  //   },
  //   yaxis: {
  //     labels: {
  //       show: false, // This will hide the y-axis labels
  //     },
  //     axisBorder: {
  //       show: false, // This will hide the y-axis border
  //     },
  //     axisTicks: {
  //       show: false, // This will hide the y-axis ticks
  //     },
  //   },
  // };
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
        <img width={100} height={60} src={chartImg} alt='chart'></img>
        {/* <ReactApexChart
          options={options}
          series={series}
          type='line'
          height={100}
          width={150}
        /> */}
      </td>
      <td className='px-2'>{formatVolume(coin.baseVolume)}</td>
      <td className='px-2'>{formatVolume(coin.quoteVolume)}</td>
      <td className='px-2 text-green-600'>Trade</td>
    </tr>
  );
}

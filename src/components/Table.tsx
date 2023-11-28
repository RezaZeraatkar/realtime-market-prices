import { Data, IMarketData } from '../@types/IData';
import React from 'react';
import { formatVolume } from 'utils/formatVolume';
import FavoriteIcon from './icons/FavoriteIcon';
import { LineWave } from 'react-loader-spinner';

function TableHeader() {
  return (
    <thead>
      <tr className='from-custom-green border border-[#08397E] bg-gradient-to-r from-20% via-black to-black'>
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

function TableRow({
  coinSymbol,
  coinData,
}: {
  coinSymbol: string;
  coinData: Data;
}) {
  const logoUrl = `https://api.bgcrypto.io/logo/${coinSymbol}.png`;
  return (
    <tr key={coinSymbol}>
      <td className='px-2 pt-2'>
        <div className='flex items-center gap-2'>
          <FavoriteIcon className='cursor-pointer' />
          <img src={logoUrl} height={18} width={18} alt={coinSymbol} />
          <span>{coinSymbol.toUpperCase()}</span>
        </div>
      </td>
      <td className='px-2'>{coinData.last}</td>
      <td
        className={`px-2 ${
          parseFloat(coinData.info.priceChangePercent) < 0
            ? 'text-red-600'
            : 'text-green-600'
        }`}
      >
        {parseFloat(coinData.info.priceChangePercent).toFixed(2)}%
      </td>
      <td className='px-2'>Chart</td>
      <td className='px-2'>{formatVolume(coinData.baseVolume)}</td>
      <td className='px-2'>{formatVolume(coinData.quoteVolume)}</td>
      <td className='px-2'>Trade</td>
    </tr>
  );
}

export default function Table({
  data,
  currentItems,
  loading,
}: {
  data: IMarketData;
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
                const coinData = data.data[coinSymbol];
                return <TableRow coinSymbol={coinSymbol} coinData={coinData} />;
              })}
          </tbody>
        )}
      </table>
    </div>
  );
}

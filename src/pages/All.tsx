import { IMarketData } from '../@types/IData';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { setData, setReadyState } from 'store/slices/webSocketSlice';
import { formatVolume } from 'utils/formatVolume';

function FavoriteIcon({
  size = 6,
  stroke = 0,
  color = '#595D5A',
  className = '',
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={color}
      viewBox='0 0 24 24'
      strokeWidth={stroke}
      stroke='currentColor'
      className={`h-${size} w-${size} ${className}`}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
      />
    </svg>
  );
}

export default function All() {
  const dispatch = useDispatch();
  const socketUrl = 'wss://api.bgcrypto.io/v1/public/markets';
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      console.log(JSON.parse(lastMessage.data));
      dispatch(setData(JSON.parse(lastMessage.data)));
    }
    dispatch(setReadyState(readyState));
  }, [lastMessage, readyState, dispatch]);

  // @ts-ignore
  const data: IMarketData = useSelector((state) => state.webSocket.data);
  // @ts-ignore
  const currentReadyState = useSelector((state) => state.webSocket.readyState);

  return (
    <div className='w-full'>
      <table className='w-full'>
        <thead className='border border-red-50'>
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
        <tbody>
          {data &&
            Object.keys(data.data).map((coinSymbol) => {
              const coinData = data.data[coinSymbol];
              const logoUrl = `https://api.bgcrypto.io/logo/${coinSymbol}.png`;
              return (
                <tr key={coinSymbol}>
                  <td className='px-2 pt-2'>
                    <div className='flex items-center gap-2'>
                      <FavoriteIcon className='cursor-pointer' />
                      <img
                        src={logoUrl}
                        height={18}
                        width={18}
                        alt={coinSymbol}
                      />
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
            })}
        </tbody>
      </table>
    </div>
  );
}

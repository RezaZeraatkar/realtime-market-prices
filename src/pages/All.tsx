import React from 'react';

function FavoriteIcon({
  size = '6',
  stroke = '0',
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
  const coinSymbol = 'btc';
  const logoUrl = `https://api.bgcrypto.io/logo/${coinSymbol}.png`;
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
          <tr>
            <td className='px-2 pt-2'>
              <div className='flex items-center gap-2'>
                <span>
                  <FavoriteIcon className='cursor-pointer' />
                </span>
                <span>
                  <img src={logoUrl} height={18} width={18} alt={coinSymbol} />
                </span>
                <span>BTC</span>
              </div>
            </td>
            <td className='px-2'>37931.10</td>
            <td className='px-2 text-red-600'>-49.29%</td>
            <td className='px-2'>Chart</td>
            <td className='px-2'>267 M</td>
            <td className='px-2'>5 T</td>
            <td className='px-2'>Trade</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

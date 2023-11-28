import React from 'react';

function SearchIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='h-4 w-4'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
      />
    </svg>
  );
}

export default function Search() {
  return (
    <div className='flex items-center rounded-md border border-gray-400'>
      <div className='pl-2'>
        <SearchIcon />
      </div>
      <input
        className='text-white-blur bg-transparent px-2 py-1 text-sm font-bold outline-none'
        type='text'
        placeholder='Search'
      />
    </div>
  );
}

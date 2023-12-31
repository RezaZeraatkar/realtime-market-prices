import React from 'react';
import Navbar from 'components/Navbar';
import { Outlet } from 'react-router-dom';
import Search from 'components/Search';
import Filters from 'components/Filters';

const Layout = () => {
  return (
    <div className='flex min-h-screen w-full flex-col gap-8 overflow-hidden bg-black p-3 text-sm'>
      <div className='flex items-center justify-between'>
        <Navbar />
        <Search />
      </div>
      <div className='flex flex-col items-center justify-between gap-2 md:flex-row'>
        <Filters />
        <div className='flex items-center'>
          <div className='mr-1 h-4 w-4 rounded-[50%] border'></div>
          <div className='text-white-blur text-sm leading-none'>
            Available for trading
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-0'>
        <h1 className='font-bold leading-none'>BG Market Watch</h1>
        <p className='text-white-blur text-sm leading-none first-letter:capitalize'>
          find promising coins and great opportunities!
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;

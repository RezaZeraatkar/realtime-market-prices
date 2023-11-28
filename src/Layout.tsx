import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      Hello world
      <Outlet />
    </div>
  );
};

export default Layout;

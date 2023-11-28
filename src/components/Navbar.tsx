import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const activeLinkStyle = 'border-b-2 border-current';
  return (
    <div className='flex gap-5 capitalize'>
      <NavLink
        to='/favorites'
        className={({ isActive, isPending }) =>
          isActive ? activeLinkStyle : 'whitespace-nowrap'
        }
      >
        favorites
      </NavLink>
      <NavLink
        to='/all'
        className={({ isActive, isPending }) =>
          isActive ? activeLinkStyle : 'whitespace-nowrap'
        }
      >
        all
      </NavLink>
      <NavLink
        to='/spot'
        className={({ isActive, isPending }) =>
          isActive ? activeLinkStyle : 'whitespace-nowrap'
        }
      >
        spot
      </NavLink>
      <NavLink
        to='/futures'
        className={({ isActive, isPending }) =>
          isActive ? activeLinkStyle : 'whitespace-nowrap'
        }
      >
        futures
      </NavLink>
      <NavLink
        to='/newlistings'
        className={({ isActive, isPending }) =>
          isActive ? activeLinkStyle : 'whitespace-nowrap'
        }
      >
        new Listings
      </NavLink>
      <NavLink
        to='/rankings'
        className={({ isActive, isPending }) =>
          isActive ? activeLinkStyle : 'whitespace-nowrap'
        }
      >
        rankings
      </NavLink>
    </div>
  );
}

export default Navbar;

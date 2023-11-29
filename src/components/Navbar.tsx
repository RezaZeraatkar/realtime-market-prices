import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerIcon from './icons/hamburgerIcon';
import CloseIcon from './icons/CloseIcon';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeLinkStyle = 'border-b-2 border-current';

  return (
    <div>
      <button className='block md:hidden' onClick={() => setIsOpen(!isOpen)}>
        <HamburgerIcon />
      </button>
      {/* Mobile */}
      <div
        className={`fixed inset-0 transform px-1 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-50 overflow-hidden capitalize backdrop-blur-sm transition-transform duration-200 ease-in-out`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className='relative flex min-h-screen w-2/4 flex-col gap-5 bg-black p-2 py-8'
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className='absolute right-0 top-0 p-1'
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon />
          </button>
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
      </div>
      {/* descktop */}
      <div className={`hidden gap-5 overflow-hidden capitalize md:flex`}>
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
    </div>
  );
}

export default Navbar;

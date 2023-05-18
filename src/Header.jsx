import React from 'react';
import { useLocation, useNavigate } from 'react-router';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  function pathmatch(route) {
    return route === location.pathname;
  }

  const handleItemClick = (route) => {
    if (!pathmatch(route)) {
      navigate(route);
    }
  };

  return (
    <div className='bg-white border-b shadow-sm'>
      <header className='flex justify-between space-x-0 px-3 max-w-6xl  mr-auto'>
        <img
          src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg'
          alt='logo'
          className='h-5 cursor-pointer'
          onClick={() => handleItemClick('/')}
        />

        <div>
          <ul className='flex space-x-10 cursor-pointer'>
            <li
              className={`py-3 text-sm font-semibold ${
                pathmatch('/') ? 'border-b-[3px] border-transparent border-b-red-500' : ''
              }`}
              onClick={() => handleItemClick('/')}
            >
              Home
            </li>
            <li
              className={`py-3 text-sm font-semibold  ${
                pathmatch('/offers') ? 'border-b-[3px] border-transparent border-b-red-500' : ''
              }`}
              onClick={() => handleItemClick('/offers')}
            >
              Offers
            </li>
            <li
              className={`py-3 ${
                pathmatch('/sign-in') ? 'border-b-[3px] border-transparent border-b-red-500' : ''
              }`}
              onClick={() => handleItemClick('/sign-in')}
            >
              Sign-In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

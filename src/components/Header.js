import React from 'react';

//import components
import Logo from '../assets/img/logo.svg';
import Nav from './Nav';
import AccountBtns from './AccountBtns';

//importing icons
import { CgMenuRight } from 'react-icons/cg';


const Header = () => {
  return(
    <header className='py-[30px] lg:pt-[60px]'>
      <div className='container mx-auto flex items-center 
      justify between'>
        {/*logo */}
        <a href='#'>
          <img src={Logo} alt='' />
        </a>
        {/* nav  & btns */}
        <div className='hidden lg:flex gap-x-[55px]'>
          <Nav />
          <AccountBtns />
        </div>
        {/* open nav btn */}
        <div className='lg:hidden cursor-pointer'>
          <CgMenuRight className='text-2xl' />
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
// Components
import Brand from '../Brand/Brand';
import MenuMobile from '../MenuMobile/MenuMobile';
import NavBar from '../NavBar/NavBar';


const Header = () => {
  return (
    <header className='header'>
        <Brand />
        <NavBar/>
        <MenuMobile />
    </header>
  )
}

export default Header;
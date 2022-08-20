import React from 'react';
// Components
import Brand from '../Brand/Brand';
import MenuMobile from '../MenuMobile/MenuMobile';
import NavBar from '../NavBar/NavBar';


const Header = ({setProperties}) => {
  return (
    <header className='header'>
        <Brand />
        <NavBar setProperties={setProperties} />
        <MenuMobile setProperties={setProperties} />
    </header>
  )
}

export default Header;
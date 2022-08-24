import React from 'react';
import logo from '../../images/logo-redim.png';
import { Link } from 'react-router-dom';

const Brand = () => {
  const scrollToTop = () => {
    window.scroll(0, 0);
  }

  return (
    <Link className='header--brand' to='/' onClick={scrollToTop}>
      <img className='header--brand__img' src={logo} alt='Brusi Propiedades logo'/>
    </Link>
  )
}

export default Brand;
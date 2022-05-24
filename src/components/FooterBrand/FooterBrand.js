import React from 'react';
import footerLogo from '../../images/logo-brusi-propiedades-blanco.png';
import { Link } from 'react-router-dom';

const FooterBrand = () => {
  return (
    <Link className='footer--logo' to='/brusi-propiedades'>
        <img 
            className='footer--logo__img' 
            src={footerLogo} 
            alt='Brusi Propiedades logo del footer'
        />
    </Link>
  )
}

export default FooterBrand;
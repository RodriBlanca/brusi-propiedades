import React from 'react';
// Components
import FooterBrand from '../FooterBrand/FooterBrand';
import FooterLinks from '../FooterLinks/FooterLinks';

const Footer = () => {
  return (
    <footer className='footer'>
        <FooterBrand />
        <FooterLinks />
    </footer>
  )
}

export default Footer;
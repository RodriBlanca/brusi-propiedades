import React from 'react';
// Components
import FooterBrand from '../FooterBrand/FooterBrand';
import FooterLinks from '../FooterLinks/FooterLinks';

const Footer = ({setProperties}) => {
  return (
    <footer className='footer'>
        <FooterBrand />
        <FooterLinks setProperties={setProperties} />
    </footer>
  )
}

export default Footer;
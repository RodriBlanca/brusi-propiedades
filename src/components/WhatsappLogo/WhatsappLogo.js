import React from 'react';
import { Link } from 'react-router-dom';
import whatsapp from '../../images/whatsapp (3).png';

const WhatsappLogo = () => {
  return (
    <Link to={'https://wa.me/26517362'} className="whatsapp">
        <img className="whatsapp--image" src={whatsapp} alt='Link a whatsapp'/>
    </Link>
  )
}

export default WhatsappLogo;
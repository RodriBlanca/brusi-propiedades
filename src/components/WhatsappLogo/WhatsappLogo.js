import React from 'react';
import { Link } from 'react-router-dom';
import whatsapp from '../../images/whatsapp (3).png';

const WhatsappLogo = () => {
  return (
    <Link to={'/brusi-propiedades/contacto-whatsapp'} className="whatsapp">
        <img className="whatsapp--image" src={whatsapp} alt='Link a whatsapp'/>
    </Link>
  )
}

export default WhatsappLogo;
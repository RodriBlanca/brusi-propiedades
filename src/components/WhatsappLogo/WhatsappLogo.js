import React from 'react';
import whatsapp from '../../images/whatsapp (3).png';

const WhatsappLogo = () => {
  return (
    <a href={'https://api.whatsapp.com/send/?phone=36356829&text&app_absent=0'} target={'_blank'} rel={"noreferrer"}>
      <img className="whatsapp--image" src={whatsapp} alt='Link a whatsapp'/>
    </a>
  )
}

export default WhatsappLogo;
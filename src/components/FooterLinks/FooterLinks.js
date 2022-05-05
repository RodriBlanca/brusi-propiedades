import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks = () => {
  return (
    <div className='footer--links'>
        <div className='footer--links__section'>
            <p>Secciones</p>
            <ul>
                <li>
                    <Link className='footer--links__link' to={'/'}>Inicio</Link>
                </li>
                <li>
                <Link className='footer--links__link' to={'/brusi-propiedades/servicios'}>Servicios</Link>
                </li>
                <li>
                    <Link className='footer--links__link' to={'/brusi-propiedades/propiedades'}>Propiedades</Link>
                </li>
                <li>
                    <Link className='footer--links__link' to={'/brusi-propiedades/nosotros'}>Nosotros</Link>
                </li>
            </ul>
        </div>
        <div className='footer--links__section'>
            <p>Contacto</p>
            <ul>
                <li>Mail</li>
                <li>Número de teléfono</li>
            </ul>
        </div>
        <div className='footer--links__section'>
            <p>Redes</p>
            <ul>
                <li>
                    <a href={'https://api.whatsapp.com/send/?phone=26517362&text&app_absent=0'} target={'_blank'} rel={"noreferrer"} className='footer--links__link'>Whatsapp</a>
                </li>
                <li>
                    <a href={'https://www.instagram.com/jonathanbrusi/'} target={'_blank'} rel={"noreferrer"} className='footer--links__link'>Instagram</a>
                </li>
                <li>Facebook</li>
                <li>Tik Tok</li>
            </ul>
        </div>
    </div>
  )
}

export default FooterLinks;
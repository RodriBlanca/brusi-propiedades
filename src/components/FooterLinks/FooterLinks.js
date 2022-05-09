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
                <li>
                    <a href='https://www.youtube.com/channel/UCHGu6Bbln9NheEQVyAmYveA' target={'_blank'} rel={"noreferrer"} className='footer--links__link'>Youtube</a>
                </li>
                <li>
                    <a href='https://www.tiktok.com/@brusipropiedades?_d=secCgYIASAHKAESPgo8r6Q6faUHyuojDGe%2FQa48CRSLnkI42ubUuEh712RvKs6vxo2G%2F056KP7I35oTECeLfEZgBZpUsM2jX7gvGgA%3D&_r=1&checksum=87b44e810b738d2d13088eee1e4ee650c70a0d0b17e3a04d3a60ef89586cad2e&language=es&sec_uid=MS4wLjABAAAAbRm1i2s8vyqa86JAXk-mt4XcEhPX3OwJ-1u53QuIrFZb74uQHi12jUtpTZ-X_V0E&sec_user_id=MS4wLjABAAAAbRm1i2s8vyqa86JAXk-mt4XcEhPX3OwJ-1u53QuIrFZb74uQHi12jUtpTZ-X_V0E&share_app_id=1233&share_author_id=6726375007339693062&share_link_id=3E29E94D-3273-47F2-9272-6AACFBA88C29&source=h5_m&tt_from=copy&u_code=d7lbjcl9l2d4li&user_id=6726375007339693062&utm_campaign=client_share&utm_medium=ios&utm_source=copy' target={'_blank'} rel={"noreferrer"} className='footer--links__link'>TikTok</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default FooterLinks;
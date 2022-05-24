import React from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../../videos/_Don Bosco - video.mp4';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero--img-container'>
        <video loop autoPlay muted>
          <source src={backgroundVideo} type="video/mp4"/>
        </video>
      </div>
      <div className='hero--content'>
        <h1 className='hero--content__title'>Bienvenido a <br/>Brusi Propiedades</h1>
        <p className='hero--content__text'>Modernizamos el mercado inmobiliario</p>
        <p className='hero--content__text'>¿En qué podemos ayudarte?</p>
        <div className='hero--buttons'>
          <Link to='/brusi-propiedades/servicios'>
            <button className='hero--buttons__button' id='sell'><span>Quiero Vender</span></button>
          </Link>
          <Link to='/brusi-propiedades/propiedades'>
            <button className='hero--buttons__button' id='buy'><span>Quiero Comprar</span></button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero;
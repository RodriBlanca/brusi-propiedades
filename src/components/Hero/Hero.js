import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero--img-container'></div>
      <div className='hero--content'>
        <h1 className='hero--content__title'>¡Bienvenido a Brusi Propiedades!</h1>
        <p className='hero--content__text'>Modernizamos el mercado inmobiliario</p>
        <p className='hero--content__text'>¿En qué podemos ayudarte?</p>
        <div className='hero--buttons'>
          <Link to='/brusi-propiedades/servicios'>
            <button className='hero--buttons__button' id='sell'>Quiero Vender</button>
          </Link>
          <Link to='/brusi-propiedades/propiedades'>
            <button className='hero--buttons__button' id='buy'>Quiero Comprar</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero;
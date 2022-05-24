import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero--img-container'>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/7ViaLlx8nk8?start=5" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
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
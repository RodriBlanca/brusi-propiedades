import React from 'react';
import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom';
import backgroundVideo from '../../media/video-background.mp4';

const Hero = () => {

  const scrollToTop = () => {
    window.scroll(0, 0);
  }

  return (
    <div className='hero'>
      <div className='hero--img-container'>
        <video loop autoPlay muted>
          <source src={backgroundVideo} type="video/mp4"/>
        </video>
      </div>
      <div className='hero--content'>
        <h1 className='hero--content__title'><span className='name--first'>BRUSI</span> <span className='name--second'>PROPIEDADES</span></h1>
        <p className='hero--content__text'>Modernizamos el mercado inmobiliario</p>
        <div className='hero--buttons'>
          <p className='hero--buttons__text'>¿En qué podemos ayudarte?</p>
          <div>
            <ScrollLink to="form" spy={true} smooth={true} offset={50} duration={600}>
              <button className='hero--buttons__button' id='sell'><span>Quiero Vender</span></button>
            </ScrollLink>
            <Link to='/propiedades' onClick={scrollToTop}>
              <button className='hero--buttons__button' id='buy'><span>Quiero Comprar</span></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
import React from 'react';
import { Link } from 'react-router-dom';
import imgTest from '../../images/Barrio Brickland-63.jpg';

const Property = () => {
  return (
    <div className='property'>
      <div className='property--image'>
        <img className='property--image__pic' alt='propiedad' src={imgTest}/>
        <p className='property--image__title'>Laprida 1785, Lomas de Zamora</p>
      </div>
      <div className='property--details'>
        <p className='property--details__detail'>62 m² | 2 Hab | 1 Baño</p>
        <div>
          <p className='property--details__price'>USD 70.000</p>
          <Link to={'/brusi-propiedades/propiedades/propiedad:id'}>
            <button className='property--details__button'><span>Ver más</span></button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Property;
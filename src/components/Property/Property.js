import React from 'react';
import { Link } from 'react-router-dom';
import imgTest from '../../images/Barrio Brickland-63.jpg';
import Slider from '../Slider/Slider';

const Property = ({direccion, precio, localidad, baños, dormitorios, superficie, fotos}) => {
  return (
    <div className='property'>
      <div className='property--image'>
        {/* <img className='property--image__pic' alt='propiedad' src={imgTest}/> */}
        <Slider fotos={fotos}/>
        <p className='property--image__title'>{`${direccion}, ${localidad}`}</p>
      </div>
      <div className='property--details'>
        <p className='property--details__detail'>
          {`Sup Total ${superficie} m² | Dormitorios ${dormitorios} | Baños ${baños}`}
        </p>
        <div>
          <p className='property--details__price'>{`USD ${precio}`}</p>
          <Link to={'/brusi-propiedades/propiedades/propiedad:id'}>
            <button className='property--details__button'><span>Ver más</span></button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Property;
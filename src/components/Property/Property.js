import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';

const Property = ({direccion, precio, localidad, baños, dormitorios, superficie, fotos, properties}) => {
  return (
    <div className='property'>
      <div className='property--image'>
        <Slider properties={properties}/>
        <div className='property--image__title'>
          <p>{`${direccion}, ${localidad}`}</p>
        </div>
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
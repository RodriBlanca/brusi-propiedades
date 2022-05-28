import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';

const Property = ({/* direccion, precio, localidad, baños, dormitorios, superficie, fotos, id */ property}) => {

  const [propertyData, setPropertyData] = useState({});
  console.log(property.recursos.fotos)

  const handleProperty = (e) => {
    // e.preventDefault();

    // if() {
    //   setPropertyData()
    // }
  }
  
  return (
    <div className='property'>
      <div className='property--image'>
        <Slider fotos={property.recursos.fotos} direccion={property.direccion}/>
        <div className='property--image__title'>
          <p>{`${property.direccion}`}<br/>{`${property.localidad}`}</p>
        </div>
      </div>
      <div className='property--details'>
        <p className='property--details__detail'>
          {`Sup Total ${property.superficietotal} m² | Dormitorios ${property.dormitorios} | Baños ${property.baños}`}
        </p>
        <div>
          <p className='property--details__price'>{`USD ${property.precio}`}</p>
          <Link to={`/brusi-propiedades/propiedades/propiedad:${property.id}`}>
            <button className='property--details__button' onClick={handleProperty}><span>Ver más</span></button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Property;
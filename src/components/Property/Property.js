import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PropertyContext } from '../../contexts/PropertyContext';
import Slider from '../Slider/Slider';

const Property = ({/* direccion, precio, localidad, baños, dormitorios, superficie, fotos, id */ property}) => {

  const [propertyDetail, setPropertyDetail] = useContext(PropertyContext);

  console.log(property)

  const handleProperty = (e) => {
    // e.preventDefault();

    setPropertyDetail(property);
  }
  console.log(propertyDetail)
  
  return (
    <div className='property'>
      <div className='property--image'>
        <Slider fotos={property.recursos.fotos} id={property.id} direccion={property.direccion}/>
        <div className='property--image__title'>
          <p>{`${property.direccion}`}<br/>{`${property.localidad}`}</p>
        </div>
      </div>
      <div className='property--details'>
        <p className='property--details__detail'>
          {`Sup Total ${property.superficieTotal} m² | Dormitorios ${property.dormitorios} | Baños ${property.baños}`}
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
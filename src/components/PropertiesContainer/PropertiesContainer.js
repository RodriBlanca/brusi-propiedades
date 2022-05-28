import React from 'react';
import Property from '../Property/Property';

const PropertiesContainer = ({properties}) => {
  return (
    <div className='properties--container'>
        {
          properties.map(property => {
            return(
              // <Property 
              //   key={property.id}
              //   precio={property.precio}
              //   direccion={property.direccion}
              //   localidad={property.localidad}
              //   baños={property.baños}
              //   dormitorios={property.dormitorios}
              //   superficie={property.superficietotal}
              //   properties={properties}
              //   id={property.id}
              // />
              // console.log(property)
              <Property 
                key={property.id}
                property={property}
              />
            );
          })
        }
    </div>
  )
}

export default PropertiesContainer;
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
              //   fotos={property.fotos[0].fotos}
              // />
              <Property />
            );
          })
        }
    </div>
  )
}

export default PropertiesContainer;
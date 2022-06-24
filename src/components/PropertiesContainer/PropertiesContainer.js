import React from 'react';
import Property from '../Property/Property';

const PropertiesContainer = ({properties}) => {
  return (
    <div className='properties--container'>
        {
          properties.map(property => {
            return(
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
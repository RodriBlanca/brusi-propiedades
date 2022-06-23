import React from 'react';
import Property from '../Property/Property';
import MobileFilters from '../MobileFilters/MobileFilters';

const PropertiesContainer = ({properties, setProperties}) => {
  return (
    <div className='properties--container'>
        <MobileFilters properties={properties} setProperties={setProperties}/>
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
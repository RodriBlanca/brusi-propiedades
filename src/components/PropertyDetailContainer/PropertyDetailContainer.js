import React from 'react';
import PropertyDetail from '../PropertyDetail/PropertyDetail';

const PropertyDetailContainer = ({setProperties, properties}) => {
  return (
    <div>
      <PropertyDetail setProperties={setProperties} properties={properties}/>
    </div>
  )
}

export default PropertyDetailContainer;
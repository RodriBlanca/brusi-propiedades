import React, { useContext, useEffect } from 'react';
import PropertyDetailContainer from '../components/PropertyDetailContainer/PropertyDetailContainer';
import { Link } from 'react-router-dom';
import { PropertyContext } from '../contexts/PropertyContext';

const PropertyDetails = ({setProperties, properties}) => {

  const [propertyDetail, setPropertyDetail] = useContext(PropertyContext);

  useEffect(() => {
    const savedProperties = window.localStorage.getItem("propiedades");
    if(savedProperties) {
      const getSingleProperty = () => {
        const savedPropertiesData = JSON.parse(savedProperties);
        const savedProperty = window.localStorage.getItem("propiedad");
        const matchProperty = savedPropertiesData.filter(property => property.id === JSON.parse(savedProperty).id)
        
        if(matchProperty) {
          setPropertyDetail(matchProperty[0]);
        }
      }
      getSingleProperty();
    }
  }, [properties])
  
  return (
    <main className='properties-detail'>
        {
          propertyDetail !== {} ?
          <PropertyDetailContainer setProperties={setProperties} properties={properties} /> :
          <Link to={'/*'}/>
        }
    </main>
  );
}

export default PropertyDetails;
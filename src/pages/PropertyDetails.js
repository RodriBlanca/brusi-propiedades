import React, { useContext, useEffect } from 'react';
import PropertyDetailContainer from '../components/PropertyDetailContainer/PropertyDetailContainer';
import { Link } from 'react-router-dom';
import { PropertyContext } from '../contexts/PropertyContext';

const PropertyDetails = () => {

  const [propertyDetail, setPropertyDetail] = useContext(PropertyContext);

  const saved = window.localStorage.getItem('propiedad');

  useEffect(() => {
    
    if(saved === null) {
      window.localStorage.setItem('propiedad', JSON.stringify(propertyDetail))
    } else {
      setPropertyDetail(JSON.parse(saved));
    }
  }, []);

  return (
    <main className='properties-detail'>
        {
          propertyDetail !== {} ?
          <PropertyDetailContainer/> :
          <Link to={'/*'}/>
        }
    </main>
  );
}

export default PropertyDetails;
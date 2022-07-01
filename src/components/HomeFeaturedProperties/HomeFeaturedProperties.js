import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import PropertiesContainer from '../PropertiesContainer/PropertiesContainer';

const HomeFeaturedProperties = ({properties, loading}) => {
  console.log(properties)
  return (
    <div className='featured-properties'>
        <h2 className='featured-properties--title'>¿Estás interesado en comprar?</h2>
        <p className='featured-properties--text'>Conocé alguna de nuestras propiedades</p>
        {/* Componente contenedor de los productos */}
        {
            loading ? 
            <LoadingSpinner />
            :
            <PropertiesContainer properties={properties}/>
          }
    </div>
  )
}

export default HomeFeaturedProperties;
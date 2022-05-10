import React from 'react';
import PropertiesContainer from '../PropertiesContainer/PropertiesContainer';

const HomeFeaturedProperties = () => {
  return (
    <div className='featured-properties'>
        <h2 className='featured-properties--title'>¿Estás interesado en comprar?</h2>
        <p className='featured-properties--text'>Conocé alguna de nuestras propiedades</p>
        {/* Componente contenedor de los productos */}
        <PropertiesContainer />
    </div>
  )
}

export default HomeFeaturedProperties;
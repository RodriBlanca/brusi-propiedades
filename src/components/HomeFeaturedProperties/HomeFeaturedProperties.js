import React from 'react';
import PropertiesContainer from '../PropertiesContainer/PropertiesContainer';

const HomeFeaturedProperties = ({properties}) => {
  console.log(properties)
  return (
    <div className='featured-properties'>
        <h2 className='featured-properties--title'>¿Estás interesado en comprar?</h2>
        <p className='featured-properties--text'>Conocé alguna de nuestras propiedades</p>
        {/* Componente contenedor de los productos */}
        <PropertiesContainer properties={properties}/>
    </div>
  )
}

export default HomeFeaturedProperties;
import React from 'react';
import PropertiesContainer from '../components/PropertiesContainer/PropertiesContainer';
import PropertiesFilters from '../components/PropertiesFilters/PropertiesFilters';

const Properties = () => {
  return (
    <main className='properties'>
      <h1>Nuestras Propiedades</h1>
      <div>
        <PropertiesFilters />
        <PropertiesContainer />
      </div>
    </main>
  )
}

export default Properties;
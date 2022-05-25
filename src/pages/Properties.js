import React from 'react';
import PropertiesContainer from '../components/PropertiesContainer/PropertiesContainer';
import PropertiesFilters from '../components/PropertiesFilters/PropertiesFilters';

const Properties = () => {
  return (
    <main className='properties'>
      <div className='properties--title'>
        <h1 className='properties--title__text'>Propiedades</h1>
      </div>
      <div className='properties--content'>
        <PropertiesFilters />
        <PropertiesContainer />
      </div>
    </main>
  )
}

export default Properties;
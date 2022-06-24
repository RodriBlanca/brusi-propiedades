import React from 'react';
import MobileFilters from '../components/MobileFilters/MobileFilters';
import PropertiesContainer from '../components/PropertiesContainer/PropertiesContainer';
import PropertiesFilters from '../components/PropertiesFilters/PropertiesFilters';

const Properties = ({properties, setProperties}) => {
  return (
    <main className='properties'>
      <div className='properties--title'>
        <h1 className='properties--title__text'>Propiedades</h1>
      </div>
      <div className='properties--content'>
        <PropertiesFilters setProperties={setProperties}/>
        <MobileFilters setProperties={setProperties}/>
        <PropertiesContainer properties={properties} setProperties={setProperties}/>
      </div>
    </main>
  )
}

export default Properties;
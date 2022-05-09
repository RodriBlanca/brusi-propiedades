import React from 'react';
import PropertiesContainer from '../components/PropertiesContainer/PropertiesContainer';
import PropertiesFilters from '../components/PropertiesFilters/PropertiesFilters';

const Properties = () => {
  return (
    <main className='properties'>
        <div>
          <PropertiesFilters />
          <PropertiesContainer />
        </div>
    </main>
  )
}

export default Properties;
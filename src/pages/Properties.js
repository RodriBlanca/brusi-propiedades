import React from 'react';
import MobileFilters from '../components/MobileFilters/MobileFilters';
import PropertiesContainer from '../components/PropertiesContainer/PropertiesContainer';
import PropertiesFilters from '../components/PropertiesFilters/PropertiesFilters';
// React-helmet
import { Helmet } from 'react-helmet';

const Properties = ({properties, setProperties}) => {

  return (
    <>
      <Helmet>
        <title>Propiedades - Brusi Propiedades</title>
        <meta name='description' content='En esta sección vas a poder encontrar la propiedad que más se ajuste a vos. Podrás buscar a través de todas nuestras propiedades el inmueble que más coincida con tu búsqueda. Para ello puedes utilizar nuestro filtros y así realizar una búsqueda más específica, ya sea por precio, cantidad de ambientes, dormitorios o tipo de propiedad. ¡No te pierdas la posibilidad de encontar tu próximo hogar!'></meta>
      </Helmet>
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
    </>
  )
}

export default Properties;
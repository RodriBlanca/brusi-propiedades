import React from 'react';
// Components
import Hero from '../components/Hero/Hero';
import HomeServices from '../components/HomeServices/HomeServices';
import HomeFeaturedProperties from '../components/HomeFeaturedProperties/HomeFeaturedProperties';
import Form from '../components/Form/Form';
// React-helmet
import { Helmet } from 'react-helmet';

const Home = ({properties, loading}) => {
  return (
    <>
      <Helmet>
        <title>Compra y Venta de Propiedades - Brusi Propiedades</title>
        <meta name="description" content="Compra o vende tu propiedad asesorado por profesionales. En Brusi Propiedades modernizamos el mercado inmobiliario utilizando la tecnología para agilizar la compra o venta del inmueble. Realizamos tasaciónes reales, asesoramiento durante todo el proceso, tour 360° de la propiedad, fotos profesionales, videos, imagenes con drone y más. ¡No dudes en consultarnos! Conocé más de Brusi Propiedades ingresando al sitio"></meta>
      </Helmet>
      <main className='home'>
        <Hero />
        <HomeServices />
        <HomeFeaturedProperties properties={properties} loading={loading}/>
        <Form />
      </main>
    </>
  )
}

export default Home;
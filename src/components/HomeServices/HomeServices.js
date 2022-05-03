import React from 'react';
import homeServiceImg from '../../images/Barrio Brickland-53.jpg';

const HomeServices = () => {
  return (
    <div className='home--services'>
      <img src={homeServiceImg} alt='Imagen de la sección de servicios de la página de Inicio'/>
      <div className='home--services__text'>
        <h2>¿Sabías que una buena fotografía de tu propiedad puede ayudar a que el inmueble se venda antes?</h2>
        <p>En <strong>Brusi Propiedades</strong> contamos con la tecnología necesaria para facilitar la venta de tu inmueble.</p>
        <p>Realizamos fotos profesionales, videos a pie de toda la propiedad, tour virtual 360°, fotos y videos con drone para vistas aéreas de la propiedad, planos digitales y más para mostrar tu casa de la mejor manera.</p>
        <p>No dudes en visitar nuestra página de servicios para saber más sobre ellos.</p>
      </div>
    </div>
  )
}

export default HomeServices;
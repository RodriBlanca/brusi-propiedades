import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../images/undraw_notify_re_65on.svg';

const NotFoundPage = () => {
  return (
    <main className='not-found'>
        <div>
            <img src={notFound} alt="Imagen de página no encontrada"/>
        </div>
        <h1>Error 404<br/>La página que está buscando no existe o cambió de dirección</h1>
        <div className='not-found--cta'>
            <Link to={'/brusi-propiedades'}>
                <button className='not-found--cta__button'><span>Volver al Inicio</span></button>
            </Link>
        </div>
    </main>
  )
}

export default NotFoundPage;
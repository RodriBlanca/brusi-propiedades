import React from 'react';
import { Link } from 'react-router-dom';

const MenuMobile = () => {
  return (
    <>
        <input 
            type='checkbox' 
            className='header--menu-mobile__input' 
            id='menu-button'
        />
        <label className='header--menu-mobile__label' htmlFor='menu-button'/>
        <nav className='menu-container'>
          <ul>
              <li>
                  <Link className='menu-container__link' to={'/'}>Inicio</Link>
              </li>
              <li>
                  <Link className='menu-container__link' to={'/brusi-propiedades/servicios'}>Servicios</Link>
              </li>
              <li>
                  <Link className='menu-container__link' to={'/brusi-propiedades/propiedades'}>Propiedades</Link>
              </li>
              <li>
                  <Link className='menu-container__link' to={'/brusi-propiedades/nosotros'}>Nosotros</Link>
              </li>
          </ul>
        </nav>
    </>
  )
}

export default MenuMobile;
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
        <ul>
            <li className='navbar--item'>
                <Link className='navbar--item__link' to={'/'}>Inicio</Link>
            </li>
            <li className='navbar--item'>
                <Link className='navbar--item__link' to={'/brusi-propiedades/servicios'}>Servicios</Link>
            </li>
            <li className='navbar--item'>
                <Link className='navbar--item__link' to={'/brusi-propiedades/propiedades'}>Propiedades</Link>
            </li>
            <li className='navbar--item'>
                <Link className='navbar--item__link' to={'/brusi-propiedades/nosotros'}>Nosotros</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
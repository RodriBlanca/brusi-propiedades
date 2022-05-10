import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const scrollToTop = () => {
        window.scroll(0, 0);
    }

  return (
    <nav className='navbar'>
        <ul>
            <li className='navbar--item'>
                <Link className='navbar--item__link' to={'/brusi-propiedades'} onClick={scrollToTop}>Inicio</Link>
            </li>
            <li className='navbar--item'>
                <Link className='navbar--item__link' to={'/brusi-propiedades/servicios'} onClick={scrollToTop}>Servicios</Link>
            </li>
            <li className='navbar--item'>
                <Link className='navbar--item__link' to={'/brusi-propiedades/propiedades'} onClick={scrollToTop}>Propiedades</Link>
            </li>
            <li className='navbar--item'>
                <Link className='navbar--item__link' to={'/brusi-propiedades/nosotros'} onClick={scrollToTop}>Nosotros</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CheckButtonsContext } from '../../contexts/CheckButtonsContext';
// import { MenuSectionsContext } from '../../contexts/MenuSectionsContext';

const MenuMobile = () => {

    const [checkButtons, setCheckButtons] = useContext(CheckButtonsContext);
    // const [menuSection, ] = useContext(MenuSectionsContext);

    const closeMenu = () => {
        setCheckButtons({...checkButtons, menu: false});
        window.scroll(0, 0);
    }

    const handleMenuButton = () => {
        setCheckButtons({...checkButtons, menu: !checkButtons.menu});
    }

  return (
    <>
        <input 
            type='checkbox' 
            className='header--menu-mobile__input' 
            id='menu-button'
            checked={checkButtons.menu}
            onChange={handleMenuButton}
        />
        <label className='header--menu-mobile__label' htmlFor='menu-button'/>
        <nav className='menu-container'>
          <ul>
              <li>
                  <Link className='menu-container__link' to={'/brusi-propiedades'} onClick={closeMenu}>Inicio</Link>
              </li>
              <li>
                  <Link className='menu-container__link' to={'/brusi-propiedades/servicios'} onClick={closeMenu}>Servicios</Link>
              </li>
              <li>
                  <Link className='menu-container__link' to={'/brusi-propiedades/propiedades'} onClick={closeMenu}>Propiedades</Link>
              </li>
              <li>
                  <Link className='menu-container__link' to={'/brusi-propiedades/nosotros'} onClick={closeMenu}>Nosotros</Link>
              </li>
          </ul>
        </nav>
    </>
  )
}

export default MenuMobile;
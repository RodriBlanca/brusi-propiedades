import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CheckButtonsContext } from '../../contexts/CheckButtonsContext';
// Firebase
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";

const MenuMobile = ({setProperties}) => {

    const [checkButtons, setCheckButtons] = useContext(CheckButtonsContext);

    const closeMenu = () => {
        setCheckButtons({...checkButtons, menu: false});
        window.scroll(0, 0);
    }

    const handleMenuButton = () => {
        setCheckButtons({...checkButtons, menu: !checkButtons.menu});
    }

    const reloadProperties = () => {
        setCheckButtons({...checkButtons, menu: false});
        window.scroll(0, 0);
        const getProperties = async() => {
            const q = query(collection(db, "propiedades"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
                setProperties(docs);
            });
        };
        getProperties(); 
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
                  <Link className='menu-container__link' to={'/'} onClick={reloadProperties}>Inicio</Link>
              </li>
              <li>
                  <Link className='menu-container__link' to={'/servicios'} onClick={closeMenu}>Servicios</Link>
              </li>
              <li>
                  <Link className='menu-container__link' to={'/propiedades'} onClick={closeMenu}>Propiedades</Link>
              </li>
              <li>
                  <Link className='menu-container__link' to={'/nosotros'} onClick={closeMenu}>Nosotros</Link>
              </li>
          </ul>
        </nav>
    </>
  )
}

export default MenuMobile;
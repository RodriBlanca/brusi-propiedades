import React from 'react';
import { Link } from 'react-router-dom';
// Firebase
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";

const NavBar = ({setProperties}) => {
    const scrollToTop = () => {
        window.scroll(0, 0);
    }

    const reloadProperties = () => {
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
    <nav className='navbar'>
        <ul>
            <li className='navbar--item'>
                <Link className='navbar--item__link' to={'/'} onClick={reloadProperties}>Inicio</Link>
            </li>
            <li className='navbar--item'>
                <Link className='navbar--item__link' to={'/servicios'} onClick={scrollToTop}>Servicios</Link>
            </li>
            <li className='navbar--item'>
                <Link className='navbar--item__link' to={'/propiedades'} onClick={scrollToTop}>Propiedades</Link>
            </li>
            <li className='navbar--item'>
                <Link className='navbar--item__link' to={'/nosotros'} onClick={scrollToTop}>Nosotros</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
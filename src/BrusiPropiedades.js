import React from 'react';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// React Router Dom
import { Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Properties from './pages/Properties';
import About from './pages/About';

const BrusiPropiedades = () => {
  return (
    <div className='brusi-propiedades'>
        <Header/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/brusi-propiedades/servicios' element={<Services />}/>
            <Route path='/brusi-propiedades/propiedades' element={<Properties />}/>
            <Route path='/brusi-propiedades/nosotros' element={<About />}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default BrusiPropiedades;
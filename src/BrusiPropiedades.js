import React from 'react';
// Components
import Header from './components/Header/Header';
import WhatsappLogo from './components/WhatsappLogo/WhatsappLogo';
import Footer from './components/Footer/Footer';
// React Router Dom
import { Routes, Route, Navigate } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Properties from './pages/Properties';
import About from './pages/About';
// Contexts
import { CheckButtonsProvider } from './contexts/CheckButtonsContext';

const BrusiPropiedades = () => {

  return (
    <div className='brusi-propiedades'>
        <CheckButtonsProvider>
          <Header/>
          <Routes>
              <Route path='/brusi-propiedades' element={<Home />}/>
              <Route path='/brusi-propiedades/servicios' element={<Services />}/>
              <Route path='/brusi-propiedades/propiedades' element={<Properties />}/>
              <Route path='/brusi-propiedades/nosotros' element={<About />}/>
              <Route path='/brusi-propiedades/contacto' element={<Navigate to={'https://wa.me/26517362'} replace/>}/>
          </Routes>
          <WhatsappLogo />
          <Footer />
        </CheckButtonsProvider>
    </div>
  )
}

export default BrusiPropiedades;
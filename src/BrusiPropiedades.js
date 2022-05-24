import React from 'react';
// Components
import Header from './components/Header/Header';
import WhatsappLogo from './components/WhatsappLogo/WhatsappLogo';
import PropertyDetailContainer from './components/PropertyDetailContainer/PropertyDetailContainer';
import Footer from './components/Footer/Footer';
// React Router Dom
import { Routes, Route, Navigate } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Properties from './pages/Properties';
import About from './pages/About';
import NotFoundPage from './pages/NotFoundPage';
// Contexts
import { CheckButtonsProvider } from './contexts/CheckButtonsContext';
import { MenuSectionsProvider } from './contexts/MenuSectionsContext';

const BrusiPropiedades = () => {

  return (
    <div className='brusi-propiedades'>
        <CheckButtonsProvider>
          <MenuSectionsProvider>
            <Header/>
            <Routes>
                <Route path='*' element={<NotFoundPage />}/>
                <Route path='/brusi-propiedades' element={<Home />}/>
                <Route path='/brusi-propiedades/servicios' element={<Services />}/>
                <Route path='/brusi-propiedades/propiedades' element={<Properties />}/>
                <Route path='/brusi-propiedades/nosotros' element={<About />}/>
                <Route path='/brusi-propiedades/contacto' element={<Navigate to={'https://wa.me/26517362'} replace/>}/>
                <Route path='/brusi-propiedades/propiedades/propiedad:id' element={<PropertyDetailContainer />}/>
            </Routes>
            <WhatsappLogo />
            <Footer />
          </MenuSectionsProvider>
        </CheckButtonsProvider>
    </div>
  )
}

export default BrusiPropiedades;
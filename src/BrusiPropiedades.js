import React, { useEffect, useState } from 'react';
import logo from './images/logo-redim.png';
// Components
import Header from './components/Header/Header';
import WhatsappLogo from './components/WhatsappLogo/WhatsappLogo';
import Footer from './components/Footer/Footer';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
// React Router Dom
import { Routes, Route, Navigate } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Properties from './pages/Properties';
import About from './pages/About';
import NotFoundPage from './pages/NotFoundPage';
import PropertyDetails from './pages/PropertyDetails';
// Contexts
import { CheckButtonsProvider } from './contexts/CheckButtonsContext';
import { MenuSectionsProvider } from './contexts/MenuSectionsContext';
import { PropertyProvider } from './contexts/PropertyContext';
// Firebase
import { db } from './firebase/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";


const BrusiPropiedades = () => {

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener('load', (e) => {
      console.log(e);
      setDomLoaded(true);
    })
  }, []);

  useEffect(() => {
    setLoading(true);
    const getProperties = async() => {
        const q = query(collection(db, "propiedades"));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id});
            setProperties(docs);
            setLoading(false);
        });
    };
    getProperties();
  }, []);

  return (
    <div className='brusi-propiedades'>        
        {
          domLoaded === false ? 
          <div className='spinner'>
            <img src={logo} alt='Brusi Propiedades logo'/>
            <LoadingSpinner />
          </div>
          :
          <CheckButtonsProvider>
          <MenuSectionsProvider>
            <PropertyProvider>
              <Header/>
              <Routes>
                  <Route path='*' element={<NotFoundPage />}/>
                  <Route path='/brusi-propiedades' element={<Home properties={properties} loading={loading}/>}/>
                  <Route path='/brusi-propiedades/servicios' element={<Services />}/>
                  <Route path='/brusi-propiedades/propiedades' element={<Properties properties={properties} setProperties={setProperties} loading={loading} setLoading={setLoading} />}/>
                  <Route path='/brusi-propiedades/nosotros' element={<About />}/>
                  <Route path='/brusi-propiedades/contacto' element={<Navigate to={'https://wa.me/26517362'} replace/>}/>
                  <Route path='/brusi-propiedades/propiedad:id' element={<PropertyDetails setProperties={setProperties} properties={properties}/>}/>
                  <Route path='/brusi-propiedades/propiedades/propiedad:id' element={<PropertyDetails setProperties={setProperties} properties={properties}/>}/>
              </Routes>
              <WhatsappLogo />
              <Footer />
            </PropertyProvider>
          </MenuSectionsProvider>
        </CheckButtonsProvider>
        }
    </div>
  )
}

export default BrusiPropiedades;
import React, { useState, useEffect } from 'react';
import MobileFiltersModal from '../MobileFiltersModal/MobileFiltersModal';
// Filters
import TipoDePropiedadMobile from '../Filters/TipoDePropiedadMobile/TipoDePropiedadMobile';
import AmbientesMobile from '../Filters/AmbientesMobile/AmbientesMobile';
import DormitoriosMobile from '../Filters/DormitoriosMobile/DormitoriosMobile';
import Precio from '../Filters/Precio/Precio';
// Firebase
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";

const MobileFilters = ({setProperties}) => {

  const [modal, setModal] = useState(false);

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleModal = () => {
      setModal(!modal);
      window.scroll(0, 0);
  }

  const [ambientesList, setAmbientesList] = useState([
    {
      id: 1,
      type: 'Monoambiente',
      checked: false,
      value: 1
    },
    {
      id: 2,
      type: '2 Ambientes',
      checked: false,
      value: 2
    },
    {
      id: 3,
      type: '3 Ambientes',
      checked: false,
      value: 3
    },
    {
      id: 4,
      type: '4 Ambientes',
      checked: false,
      value: 4
    },
    {
      id: 5,
      type: '5 Ambientes',
      checked: false,
      value: 5
    },
    { 
      id: 6,
      type: '6 o más Ambientes',
      checked: false,
      value: 6
    }
  ]);

  const [tipoDePropiedadList, setTipoDePropiedadList] = useState([
    {
      id: 7,
      type: 'Casa',
      checked: false
    },
    {
      id: 8,
      type: 'Departamento',
      checked: false
    },
    {
      id: 9,
      type: 'Terreno',
      checked: false
    },
    {
      id: 10,
      type: 'Ph',
      checked: false
    },
    {
      id: 11,
      type: 'Quinta',
      checked: false
    },
    {
      id: 12,
      type: 'Galpón',
      checked: false
    },
    {
      id: 13,
      type: 'Local',
      checked: false
    }
  ]);

  const [dormitoriosList, setDormitoriosList] = useState([
    {
      id: 14,
      type: '1 Dormitorio',
      checked: false,
      value: 1
    },
    {
      id: 15,
      type: '2 Dormitorios',
      checked: false,
      value: 2
    },
    {
      id: 16,
      type: '3 Dormitorios',
      checked: false,
      value: 3
    },
    {
      id: 17,
      type: '4 Dormitorios',
      checked: false,
      value: 4
    },
    {
      id: 18,
      type: '5 Dormitorios',
      checked: false,
      value: 5
    },
    { 
      id: 19,
      type: '6 o más Dormitorios',
      checked: false,
      value: 6
    }
  ]);

  const handleTipoDePropiedad = (id) => {
    const tipoDePropiedadStateList = tipoDePropiedadList;
    const changeCheckedTipoDePropiedad = tipoDePropiedadStateList.map((propiedad) => propiedad.id === id ? {...propiedad, checked: !propiedad.checked}:propiedad);
    setTipoDePropiedadList(changeCheckedTipoDePropiedad);
  }

  const handleAmbientes = (id) => {
    const ambientesStateList = ambientesList;
    const changeCheckedAmbiente = ambientesStateList.map((ambiente) => ambiente.id === id ? {...ambiente, checked: !ambiente.checked}:ambiente);
    setAmbientesList(changeCheckedAmbiente);
  }

  const handleDormitorios = (id) => {
    const dormitoriosStateList = dormitoriosList;
    const changeCheckedDormitorio = dormitoriosStateList.map((dormitorio) => dormitorio.id === id ? {...dormitorio, checked: !dormitorio.checked}:dormitorio);
    setDormitoriosList(changeCheckedDormitorio);
  }

  const handleMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  }

  const handleMinPrice = (e) => {
    setMinPrice(e.target.value);
  }
  
  const filterFunction = (data) => {
    let updatedProperties = data;
    const ambientesChecked = ambientesList.filter(ambientes => ambientes.checked).map(ambientes => ambientes.value);
    const tiposDePropiedadChecked = tipoDePropiedadList.filter(tipo => tipo.checked).map(tipo => tipo.type.toLowerCase());
    const dormitoriosChecked = dormitoriosList.filter(dormitorios => dormitorios.checked).map(dormitorios => dormitorios.value);
    const priceRange = {
      min: minPrice,
      max: maxPrice
    }

    // Ambientes
    if(ambientesChecked.length) {
      updatedProperties = updatedProperties.filter(property => ambientesChecked.includes(property.amb));
    }

    // Tipo de propiedad
    if(tiposDePropiedadChecked.length) {
      updatedProperties = updatedProperties.filter(property => tiposDePropiedadChecked.includes(property.tipo));
    }

    // Dormitorios
    if(dormitoriosChecked.length) {
      updatedProperties = updatedProperties.filter(property => dormitoriosChecked.includes(property.dormitorios));
    }

    // Precio
    if(priceRange.min && priceRange.max) {
      updatedProperties = updatedProperties.filter(property => priceRange.min <= property.precio && priceRange.max >= property.precio);
    }

    setProperties(updatedProperties);
  }

  useEffect(() => {
    const getProperties = async() => {
      const q = query(collection(db, "propiedades"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), id: doc.id});
          setProperties(docs);
          filterFunction(docs);
      });
    };

    getProperties();
  }, [ambientesList, tipoDePropiedadList, dormitoriosList, minPrice, maxPrice]);

  return (
    <div className="mobile-filters">
        <button className="mobile-filters--button" onClick={handleModal}>Filtros</button>
        <MobileFiltersModal modal={modal} setModal={setModal} handleModal={handleModal}>
            <div>
                <h3>Precio</h3>
                <Precio minPrice={minPrice} maxPrice={maxPrice} handleMaxPrice={handleMaxPrice} handleMinPrice={handleMinPrice}/>
            </div>
            <div>
                <h3>Tipo de propiedad</h3>
                {tipoDePropiedadList.map(typeFilter => {
                return(
                    <TipoDePropiedadMobile 
                    key={typeFilter.id}
                    type={typeFilter.type}
                    id={typeFilter.id}
                    checked={typeFilter.checked}
                    handleTipoDePropiedad={()=>handleTipoDePropiedad(typeFilter.id)}
                    />
                );
                })}
            </div>
            <div>
                <h3>Ambientes</h3>
                {ambientesList.map(typeFilter => {
                return(
                    <AmbientesMobile 
                    key={typeFilter.id}
                    type={typeFilter.type}
                    id={typeFilter.id}
                    checked={typeFilter.checked}
                    handleAmbientes={()=>handleAmbientes(typeFilter.id)}
                    />
                );
                })}
            </div>
            <div>
                <h3>Dormitorios</h3>
                {dormitoriosList.map(typeFilter => {
                return(
                    <DormitoriosMobile 
                    key={typeFilter.id}
                    type={typeFilter.type}
                    id={typeFilter.id}
                    checked={typeFilter.checked}
                    handleDormitorios={()=>handleDormitorios(typeFilter.id)}
                    />
                )
                })}
            </div>
        </MobileFiltersModal>
    </div>
  )
}

export default MobileFilters;
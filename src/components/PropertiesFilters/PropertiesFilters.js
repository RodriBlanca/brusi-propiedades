import React, { useContext, useState } from 'react';
import { PropertyContext } from '../../contexts/PropertyContext';
import CheckBox from '../CheckBox/CheckBox';
// Firebase
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";

const PropertiesFilters = ({properties, setProperties}) => {

  console.log(properties)
  const [propertyDetail, setPropertyDetail] = useContext(PropertyContext);

  const [checked, setChecked] = useState([]);

  const filterFunction = (e) => {
    console.log(e.target)
    
    
    
    // setChecked(newChecked);
    
    /* Si está vacío que lo agregue, si se repite que lo elimine y si vuelve a estar vacío del todo que recargue todos las propiedades*/
    if(checked.length === 0) {

      setChecked([...checked, e.target.id])
      const newChecked = properties.filter(property => e.target.id.toLowerCase() === property.tipo);
      console.log(newChecked);
      setProperties(newChecked);
    } else if (checked.length > 0 && checked.length < 2) {
      console.log('mayor a 0')
      const validateCheckbox = checked.find(checkbox => checkbox === e.target.id);
      console.log(checked)
      console.log(e.target.id)
      console.log(validateCheckbox === true)
      if(validateCheckbox === e.target.id) {
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
        setChecked([]);
      } else {
        setChecked([...checked, e.target.id]);
        console.log(checked)
        // setProperties(checked)
      }
    } else {
      setChecked([...checked, e.target.id]);
      console.log(checked)
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
      // const validateCheckbox = checked.find(checkbox => checkbox === e.target.id);
      console.log(checked)
      checked.forEach(check => {
        const newChecked = properties.filter(property => property.tipo === check);
        console.log(newChecked)
        setProperties(newChecked);
      })
      // console.log(validateCheckbox);
      // setProperties(validateCheckbox);
    }
  }

  const typeFilter = (e) => {
    // console.log('funciona')
    // console.log(e.target.checked)
    // e.target.checked ? properties.filter(type => type.tipo === e.target.id) : properties;
    if(e.target.checked) {
      // properties.filter(type => console.log(type.tipo === e.target.id));
      console.log('checked')
      const filteredProperties = properties.filter(type => type.tipo === e.target.id);
      setProperties(filteredProperties);
    } else {

    }
  } 

  return (
    <div className='filters'>
      <ul>
        <h3>Filtros Activos</h3>
      </ul>
      <div>
        <h2 className='filters--title'>Precio</h2>
      </div>
      <div>
        <h2 className='filters--title'>Tipo de propiedad</h2>
        <div>
          {/* <div>
            <label htmlFor='departamento'>Departamento</label>
            <input type={'checkbox'} id="departamento" onClick={typeFilter}/>
          </div>
          <div>
            <label htmlFor='casa'>Casa</label>
            <input type={'checkbox'} id="casa" onClick={typeFilter}/>
          </div>
          <div>
            <label htmlFor='local'>Local</label>
            <input type={'checkbox'} id="local"/>
          </div>
          <div>
            <label htmlFor='ph'>PH</label>
            <input type={'checkbox'} id="ph"/>
          </div>
          <div>
            <label htmlFor='terreno'>Terreno</label>
            <input type={'checkbox'} id="terreno"/>
          </div>
          <div>
            <label htmlFor='galpón'>Galpón</label>
            <input type={'checkbox'} id="galpón"/>
          </div>
          <div>
            <label htmlFor='quinta'>Quinta</label>
            <input type={'checkbox'} id="quinta"/>
          </div> */}
          <CheckBox filterFunction={filterFunction}/>
        </div>
      </div>
      <div>
        <h2 className='filters--title'>Localidad</h2>
        <ul></ul>
      </div>
      <div>
        <h2 className='filters--title'>Ambientes</h2>
        <ul></ul>
      </div>
      <div>
        <h2 className='filters--title'>Dormitorios</h2>
        <ul></ul>
      </div>
    </div>
  )
}

export default PropertiesFilters;
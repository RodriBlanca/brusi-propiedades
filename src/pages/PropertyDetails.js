import React, { useContext, useEffect } from 'react';
import PropertyDetailContainer from '../components/PropertyDetailContainer/PropertyDetailContainer';
import { Link } from 'react-router-dom';
import { PropertyContext } from '../contexts/PropertyContext';
// Firebase
// import { db } from '../../firebase/firebaseConfig';
import { db } from '../firebase/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";

const PropertyDetails = ({setProperties, properties}) => {

  const [propertyDetail, setPropertyDetail] = useContext(PropertyContext);

  useEffect(() => {
    const getProperties = async () => {
      const q = query(collection(db, "propiedades"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), id: doc.id});
          setProperties(docs);
      });
      getProperties()
      console.log(properties)
    };
    }, []);

    // console.log(JSON.parse(saved))
    console.log(propertyDetail)
    console.log(properties)
    
    useEffect(() => {
      const saved = window.localStorage.getItem('propiedad');
      
    if(!saved) {
      window.localStorage.setItem('propiedad', JSON.stringify(propertyDetail))
    } else {
      setPropertyDetail(JSON.parse(saved));
    }
  }, []);

  return (
    <main className='properties-detail'>
        {
          propertyDetail !== {} ?
          <PropertyDetailContainer setProperties={setProperties} properties={properties} /> :
          <Link to={'/*'}/>
        }
    </main>
  );
}

export default PropertyDetails;
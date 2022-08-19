import React, { useContext, useEffect } from 'react';
import { PropertyContext } from '../../contexts/PropertyContext';
import Slider from '../Slider/Slider';
import MapView from '../MapView/MapView';
// Firebase
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";
// React-helmet
import { Helmet } from 'react-helmet';

const PropertyDetail = ({setProperties, properties}) => {

  const [propertyDetail, setPropertyDetail] = useContext(PropertyContext);
  
  // useEffect(() => {
  //   if(window.onbeforeunload) {
  //     const getProperties = async () => {
  //       const q = query(collection(db, "propiedades"));
  //       const docs = [];
  //       const querySnapshot = await getDocs(q);
  //       querySnapshot.forEach((doc) => {
  //           docs.push({...doc.data(), id: doc.id});
  //           setProperties(docs);
  //           console.log(properties)
  //       });
  //       getProperties()
  //     };
  //   }
    
  //   // getSingleProperty (getProperties);
  // }, []);

  // const getSingleProperty = async (cb) => {
  //   await cb()
  //   const savedProperty = window.localStorage.getItem("propiedad");
  //   console.log(savedProperty)

  //   const matchProperty = properties.filter(property => property.id === JSON.parse(savedProperty).id)
  //   console.log(matchProperty)
    
  //   if(matchProperty) {
  //     setPropertyDetail(matchProperty[0]);
  //   }
  // }

  const savedProperty = window.localStorage.getItem("propiedad");
  const matchProperty = properties.filter(property => /* property.id === JSON.parse(savedProperty).id */ console.log(property))
  console.log(matchProperty)
  console.log(properties)
  console.log(savedProperty)
  console.log(propertyDetail)

  return (
    <>
      <Helmet>
        <title>{`${propertyDetail.direccion} - Brusi Propiedades`}</title>
        <meta name='description' content={`${propertyDetail.descripcion}`}></meta>
      </Helmet>
      <div className='property-detail'>
        {/* Imagenes */}
        {
          !propertyDetail.recursos ? 
          <div>No existe</div>
          :
          <Slider fotos={propertyDetail.recursos.fotos} id={propertyDetail.id} direccion={propertyDetail.direccion}/> 
        }
        <div className='property-detail--information'>
          {
            propertyDetail ?
            <div>
              <h1>{propertyDetail.direccion}</h1>
              <h2>USD {propertyDetail.precio}</h2>
            </div>
            : 
            <div></div>
          }
        </div>
        <div className='property-detail--content'>
          {/* Detalles de la propiedad */}
          {
            propertyDetail.detalles/* [0] */ !== "" || !propertyDetail.detalles ?
            <div className='property-detail--feature'>
              <h3>Detalles de la propiedad</h3>
              <ul>
                {
                  propertyDetail.detalles.map(detalle => {
                    return(
                      <li key={detalle.id}>{detalle}</li>
                    );
                  })
                }
              </ul>
              <hr/>
            </div>
            :
            null
          }
          {/* Información Básica */}
          {
            propertyDetail.informacionBasica/* [0] */ !== "" || !propertyDetail.informacionBasica ? 
            <div className='property-detail--feature'>
              <h3>Información Básica</h3>
              <ul>
                {
                  propertyDetail.informacionBasica.map(informacion => {
                    return (
                      <li key={informacion.id}>{informacion}</li>
                    )
                  })
                }
              </ul>
              <hr/>
            </div>
            :
            null
          }
          {/* Superficies */}
          {
            propertyDetail.superficies/* [0] */ !== ""|| !propertyDetail.superficies ? 
            <div className='property-detail--feature'>
              <h3>Superficies y Medidad</h3>
              <ul>
                {
                  propertyDetail.superficies.map(superficie => {
                    return (
                      <li key={superficie.id}>{superficie}</li>
                    );
                  })
                }
              </ul>
              <hr/>
            </div>
            :
            null
          }
          {/* Descripción */}
          {
            propertyDetail.descripcion/* [0] */ !== ""|| !propertyDetail.descripcion ?
            <div className='property-detail--feature'>
              <h3>Descripción</h3>
              <div>
                {
                  propertyDetail.descripcion.map(desc => {
                    return(
                      <p key={desc.id}>{desc}</p>
                    );
                  })
                }
              </div>
              <hr/>
            </div>
            :
            null
          }
          {/* Servicios */}
          {
            propertyDetail.servicios/* [0] */ !== ""|| !propertyDetail.servicios ?
            <div className='property-detail--feature'>
              <h3>Servicios</h3>
              <ul>
                {
                  propertyDetail.servicios.map(servicio => {
                    return(
                      <li key={servicio.id}>{servicio}</li>
                    );
                  })
                }
              </ul>
              <hr/>
            </div>
            :
            null
          }
          {/* Ambientes */}
          {
            propertyDetail.ambientes[0] !== ""|| !propertyDetail.ambientes ?
            <div className='property-detail--feature'>
              <h3>Ambientes</h3>
              <ul>
                {
                  
                  propertyDetail.ambientes.map(ambiente => {
                    return(
                      <li key={ambiente.id}>{ambiente}</li>
                    );
                  })
                }
              </ul>
              <hr/>
            </div>
            :
            null
          }
          
          {/* Adicionales */}
          {
            propertyDetail.adicionales[0] !== ""|| !propertyDetail.adicionales ?
            <div className='property-detail--feature'>
              <h3>Adicionales</h3>
              <ul>
                {
                  
                  propertyDetail.adicionales.map(adicional => {
                    return(
                      <li key={adicional.id}>{adicional}</li>
                    );
                  })
                }
              </ul>
              <hr/>
            </div>
            :
            null
          }
        </div>
        {/* Video */}
        {
          propertyDetail.recursos.video ? 
          <div className='property-detail--feature'>
            <h3 className='property-detail--feature__title'>Video</h3>
            {
              <>
                <video src={`${propertyDetail.recursos.video}`} autoPlay controls muted />
                <hr/>
              </>
            }
          </div>
          :
          null
        }
        {/* Tour 360° */}
        {
          propertyDetail.recursos.tour !== '' ? 
          <div className='property-detail--tour'>
            <h3>Tour 360°</h3>
            <iframe src={propertyDetail.recursos.tour}></iframe>
            <hr/>
          </div>
          : 
          null
        }
        {/* Ubicación */}
        {
          propertyDetail.mapa ? 
          <div>
            <h3>Ubicación</h3>
            <MapView coords={propertyDetail.mapa}/>
          </div>
          :
          null
        }
      </div>
    </>
  )
}

export default PropertyDetail;
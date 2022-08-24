import React, { useContext, useState } from 'react';
import { PropertyContext } from '../../contexts/PropertyContext';
import Slider from '../Slider/Slider';
import MapView from '../MapView/MapView';
import VideoScreen from '../VideoScreen/VideoScreen';
// React-helmet
import { Helmet } from 'react-helmet';

const PropertyDetail = () => {

  const [propertyDetail] = useContext(PropertyContext);
  const [videoModal, setVideoModal] = useState(true);
  // const ambientes = propertyDetail.ambientes[0];

  return (
    <>
      <Helmet>
        {propertyDetail/* [0] */ !== "" && propertyDetail && propertyDetail !== undefined ?
          <title>{`${propertyDetail.direccion} - Brusi Propiedades`}</title>
          :
          null
        }
        {propertyDetail/* [0] */ !== "" && propertyDetail && propertyDetail !== undefined ?
          <meta name='description' content={`${propertyDetail.descripcion}`}></meta>
          :
          null
        }
      </Helmet>
      <div className='property-detail'>
        {/* Imagenes */}
        {
          propertyDetail !== "" && propertyDetail && propertyDetail !== undefined ? 
          <Slider fotos={propertyDetail.recursos} id={propertyDetail.id} direccion={propertyDetail.direccion}/> 
          :
          <div>No existe</div>
        }
        <div className='property-detail--information'>
          {
            propertyDetail ?
            <div>
              <h1>
                {
                  propertyDetail.direccion &&
                  propertyDetail.direccion
                }
              </h1>
              <h2>
                {
                  propertyDetail.precio &&
                  `USD ${propertyDetail.precio}`
                }
              </h2>
            </div>
            : 
            <div></div>
          }
        </div>
        <div className='property-detail--content'>
          {/* Detalles de la propiedad */}
          {
            propertyDetail.detalles/* [0] */ !== "" && propertyDetail.detalles && propertyDetail !== undefined ?
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
            propertyDetail.informacionBasica/* [0] */ !== "" && propertyDetail.informacionBasica ? 
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
            propertyDetail.superficies/* [0] */ !== "" && propertyDetail.superficies ? 
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
            propertyDetail.descripcion/* [0] */ !== "" && propertyDetail.descripcion && propertyDetail.descripcion !== undefined ?
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
            propertyDetail.servicios/* [0] */ !== "" && propertyDetail.servicios && propertyDetail.servicios !== undefined ?
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
            propertyDetail.ambientes/* [0] */ !== [] && propertyDetail.ambientes && propertyDetail.ambientes !== undefined ?
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
            propertyDetail.adicionales/* [0] */ !== [] && propertyDetail.adicionales && propertyDetail.adicionales !== undefined?
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
          propertyDetail.recursos/* .video */ !== "" && propertyDetail.recursos && propertyDetail.recursos !== undefined ? 
          <div className='property-detail--feature property-detail--video'>
            <h3 className='property-detail--feature__title'>Video</h3>
            {
              <>
                <video src={`${propertyDetail.recursos.video}`} controls muted />
                <hr/>
              </>
            }
          </div>
          :
          null
        }
        {/* Tour 360° */}
        {
          propertyDetail.recursos/* .tour */ !== '' && propertyDetail.recursos !== undefined && propertyDetail.recursos.tour/* .tour */ ? 
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
          propertyDetail.mapa !== "" && propertyDetail.mapa && propertyDetail.mapa !== undefined ? 
          <div className='property-detail--map'>
            <h3>Ubicación</h3>
            <MapView coords={propertyDetail.mapa}/>
          </div>
          :
          null
        }
      </div>
      {
        videoModal &&
        <VideoScreen propertyDetail={propertyDetail} setVideoModal={setVideoModal} />
      }
    </>
  )
}

export default PropertyDetail;
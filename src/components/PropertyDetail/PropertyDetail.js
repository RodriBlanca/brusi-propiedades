import React, { useContext, useState, useEffect } from 'react';
import { PropertyContext } from '../../contexts/PropertyContext';
import Slider from '../Slider/Slider';

const PropertyDetail = () => {

  const [savedProperty, setSavedProperty] = useState({});
  const [propertyDetail, setPropertyDetail] = useContext(PropertyContext);

  
  


  console.log(propertyDetail);

  return (
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
        <div className='property-detail--feature'>
          <h3>Detalles de la propiedad</h3>
          <ul>
            {
              propertyDetail.detalles ? 
              propertyDetail.detalles.map(detalle => {
                return(
                  <li key={detalle.id}>{detalle}</li>
                );
              })
              :
              <div></div>
            }
          </ul>
          <hr/>
        </div>
        {/* Información Básica */}
        <div className='property-detail--feature'>
          <h3>Información Básica</h3>
          <ul>
            {
              propertyDetail.informacionBasica ? 
              propertyDetail.informacionBasica.map(informacion => {
                return (
                  <li key={informacion.id}>{informacion}</li>
                )
              })
              :
              <div></div>
            }
          </ul>
          <hr/>
        </div>
        {/* Superficies */}
        <div className='property-detail--feature'>
          <h3>Superficies y Medidad</h3>
          <ul>
            {
              propertyDetail.superficies ? 
              propertyDetail.superficies.map(superficie => {
                return (
                  <li key={superficie.id}>{superficie}</li>
                );
              })
              :
              <div></div>
            }
          </ul>
          <hr/>
        </div>
        {/* Descripción */}
        <div className='property-detail--feature'>
          <h3>Descripción</h3>
          <p>{
              propertyDetail.descripcion ? 
              propertyDetail.descripcion
              :
              <span></span>
            }</p>
          <hr/>
        </div>
        {/* Servicios */}
        <div className='property-detail--feature'>
          <h3>Servicios</h3>
          <ul>
            {
              propertyDetail.servicios ?
              propertyDetail.servicios.map(servicio => {
                return(
                  <li key={servicio.id}>{servicio}</li>
                );
              })
              :
              <div></div>
            }
          </ul>
          <hr/>
        </div>
        {/* Ambientes */}
        <div className='property-detail--feature'>
          <h3>Ambientes</h3>
          <ul>
            {
              propertyDetail.ambientes ?
              propertyDetail.ambientes.map(ambiente => {
                return(
                  <li key={ambiente.id}>{ambiente}</li>
                );
              })
              :
              <div></div>
            }
          </ul>
          <hr/>
        </div>
        {/* Adicionales */}
        <div className='property-detail--feature'>
          <h3>Adicionales</h3>
          <ul>
            {
              propertyDetail.adicionales ?
              propertyDetail.adicionales.map(adicional => {
                return(
                  <li key={adicional.id}>{adicional}</li>
                );
              })
              :
              <div></div>
            }
          </ul>
          <hr/>
        </div>
      </div>
      {/* Video */}
      <div className='property-detail--feature'>
        <h3>Video</h3>
        {
          propertyDetail.recursos ?
          <iframe 
          src={`${propertyDetail.recursos.videos}`}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'>
          </iframe>
          :
          <div></div>
        }
      </div>
      {/* Tour 360° */}
      <div></div>
      {/* Ubicación */}
      <div>
        Mapa
      </div>
    </div>
  )
}

export default PropertyDetail;
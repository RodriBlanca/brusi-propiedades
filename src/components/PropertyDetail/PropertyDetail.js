import React, { useContext } from 'react';
import { PropertyContext } from '../../contexts/PropertyContext';
import Slider from '../Slider/Slider';

const PropertyDetail = () => {

  const [propertyDetail, setPropertyDetail] = useContext(PropertyContext);
  console.log(propertyDetail);

  return (
    <div className='property-detail'>
      {/* Imagenes */}
      <Slider fotos={propertyDetail.recursos.fotos} id={propertyDetail.id} direccion={propertyDetail.direccion}/>
      <div className='property-detail--information'>
        <h1>{propertyDetail.direccion}</h1>
        <h2>USD {propertyDetail.precio}</h2>
      </div>
      <div className='property-detail--content'>
        {/* Detalles de la propiedad */}
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
        {/* Información Básica */}
        <div className='property-detail--feature'>
          <h3>Información Básica</h3>
          <ul>
            {propertyDetail.informacionBasica.map(informacion => {
              return (
                <li key={informacion.id}>{informacion}</li>
              )
            })}
          </ul>
          <hr/>
        </div>
        {/* Superficies */}
        <div className='property-detail--feature'>
          <h3>Superficies y Medidad</h3>
          <ul>
            {propertyDetail.superficies.map(superficie => {
              return (
                <li key={superficie.id}>{superficie}</li>
              );
            })}
          </ul>
          <hr/>
        </div>
        {/* Descripción */}
        <div className='property-detail--feature'>
          <h3>Descripción</h3>
          <p>{propertyDetail.descripcion}</p>
          <hr/>
        </div>
        {/* Servicios */}
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
        {/* Ambientes */}
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
        {/* Adicionales */}
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
      </div>
      {/* Video */}
      <div></div>
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
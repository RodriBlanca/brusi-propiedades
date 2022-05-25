import React from 'react';

const PropertiesFilters = () => {
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
        <ul>
          <li>
            <label>Departamento</label>
            <input type={'checkbox'}/>
          </li>
          <li>
            <label>Casa</label>
            <input type={'checkbox'}/>
          </li>
          <li>
            <label>Local</label>
            <input type={'checkbox'}/>
          </li>
          <li>
            <label>PH</label>
            <input type={'checkbox'}/>
          </li>
          <li>
            <label>Terreno</label>
            <input type={'checkbox'}/>
          </li>
          <li>
            <label>Galpón</label>
            <input type={'checkbox'}/>
          </li>
          <li>
            <label>Quinta</label>
            <input type={'checkbox'}/>
          </li>
        </ul>
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
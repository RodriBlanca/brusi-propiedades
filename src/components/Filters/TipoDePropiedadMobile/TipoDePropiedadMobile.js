import React from 'react';

const TipoDePropiedadMobile = ({type, id, checked, handleTipoDePropiedad}) => {
  return (
    <div>
        <input type={"checkbox"} id={id} checked={checked} onChange={handleTipoDePropiedad} onClick={handleTipoDePropiedad}/>
        <label htmlFor={id} onChange={handleTipoDePropiedad} onClick={handleTipoDePropiedad}>{type}</label>
    </div>
  )
}

export default TipoDePropiedadMobile;
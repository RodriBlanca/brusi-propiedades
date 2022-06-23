import React from 'react';

const TipoDePropiedad = ({type, id, checked, handleTipoDePropiedad}) => {
  return (
    <div>
        <input type={"checkbox"} id={id} checked={checked} onChange={handleTipoDePropiedad} onClick={handleTipoDePropiedad}/>
        <label htmlFor={id} onChange={handleTipoDePropiedad}>{type}</label>
    </div>
  )
}

export default TipoDePropiedad;
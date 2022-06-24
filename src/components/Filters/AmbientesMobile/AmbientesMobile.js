import React from 'react';

const AmbientesMobile = ({type, id, checked, handleAmbientes}) => {
  return (
    <div>
        <input type={"checkbox"} id={id} checked={checked} onChange={handleAmbientes} onClick={handleAmbientes}/>
        <label htmlFor={id} onChange={handleAmbientes} onClick={handleAmbientes}>{type}</label>
    </div>
  )
}

export default AmbientesMobile;
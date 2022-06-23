import React from 'react';

const Dormitorios = ({type, id, checked, handleDormitorios}) => {
  return (
    <div>
        <input type={"checkbox"} id={id} checked={checked} onChange={handleDormitorios} onClick={handleDormitorios}/>
        <label htmlFor={id} onChange={handleDormitorios}>{type}</label>
    </div>
  )
}

export default Dormitorios;
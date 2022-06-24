import React from 'react';

const DormitoriosMobile = ({type, id, checked, handleDormitorios}) => {
  return (
    <div>
        <input type={"checkbox"} id={id} checked={checked} onChange={handleDormitorios} onClick={handleDormitorios}/>
        <label htmlFor={id} onChange={handleDormitorios} onClick={handleDormitorios}>{type}</label>
    </div>
  )
}

export default DormitoriosMobile;
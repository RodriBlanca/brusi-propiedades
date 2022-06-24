import React from 'react';

const Precio = ({minPrice, maxPrice, handleMaxPrice, handleMinPrice}) => {
  return (
    <div className='price-filter'>
      <input type={'text'} placeholder={'Mínimo'} value={minPrice} onChange={handleMinPrice}/>
      <span>hasta</span>
      <input type={'text'} placeholder={'Máximo'} value={maxPrice} onChange={handleMaxPrice}/>
    </div>
  )
}

export default Precio;

import React from 'react';

const Property = () => {
  return (
    <div className='property'>
      <div className='property--image'>
        <img className='property--image__pic'/>
        <p className='property--image__title'></p>
      </div>
      <div className='property--details'>
        <p className='property--details__detail'></p>
        <div>
          <p className='property--details__price'></p>
          <button className='property--details__button'>Ver más</button>
        </div>
      </div>
    </div>
  )
}

export default Property;
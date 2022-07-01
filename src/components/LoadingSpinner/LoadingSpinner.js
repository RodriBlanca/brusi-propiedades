import React from 'react';
import { BounceLoader } from 'react-spinners';

const color = "#01d3b7";

const LoadingSpinner = ({loading}) => {
  return (
    <div className='spinner--container'>
        <BounceLoader loading={loading} color={color} size={100}/>
    </div>
  )
}

export default LoadingSpinner;
import React from 'react';
import { BarLoader } from 'react-spinners';

const color = "#01d3b7";

const LoadingSpinner = ({loading}) => {
  return (
    <div className='spinner--container'>
        <BarLoader loading={loading} color={color} size={100} width={200} height={5}/>
    </div>
  )
}

export default LoadingSpinner;
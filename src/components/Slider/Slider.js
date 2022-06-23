import React, {useState} from 'react';
import leftArrow from '../../images/left-chevron.png';
import rightArrow from '../../images/right-chevron.png';

const Slider = ({fotos, direccion, handleProperty}) => {
    
    const [imageNumber, setImageNumber] = useState(0);

    const nextImg = () => {
        if(imageNumber - 1 === fotos.length - 2) {
            setImageNumber(0);
            console.log(0)
        } else {
            setImageNumber(imageNumber + 1);
        }
        console.log(imageNumber)
    }

    const prevImg = () => {
        if(imageNumber === 0) {
            setImageNumber(2);
            console.log(imageNumber)
        } else {
            setImageNumber(imageNumber - 1);
            console.log(imageNumber)
        }
    }

  return (
    <div className='slider'>
        <div className='slider--images'>
            <img src={fotos[imageNumber]} alt={direccion} onChange={handleProperty}/>
        </div>
        <div className='slider--arrows'>
            <button className='slider--arrows__left' onClick={prevImg}><img src={leftArrow} alt="left arrow"/></button>
            <button className='slider--arrows__right' onClick={nextImg}><img src={rightArrow} alt="right arrow"/></button>
        </div>
    </div>
  )
}

export default Slider;
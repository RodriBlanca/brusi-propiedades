import React, { useState } from 'react';
import leftArrow from '../../media/left-chevron.png';
import rightArrow from '../../media/right-chevron.png';

const Slider = ({fotos, direccion, handleProperty}) => {
    
    const [imageNumber, setImageNumber] = useState(0);
    const [imagesModal, setImagesModal] = useState(false);

    const nextImg = () => {
        if(imageNumber - 1 === fotos.fotos.length - 2) {
            setImageNumber(0);
        } else {
            setImageNumber(imageNumber + 1);
        }
    }

    const prevImg = () => {
        if(imageNumber === 0) {
            setImageNumber(fotos.fotos.length - 1);
        } else {
            setImageNumber(imageNumber - 1);
        }
    }

    const prevImgModal = () => {
        if(imageNumber === 0) {
            setImageNumber(fotos.fotos.length - 1);
        } else {
            setImageNumber(imageNumber - 1);
        }
    }

    const nextImgModal = () => {
        if(imageNumber - 1 === fotos.fotos.length - 2) {
            setImageNumber(0);
        } else {
            setImageNumber(imageNumber + 1);
        }
    }

    const openModal = (e) => {
        e.preventDefault();
        console.log(window.location.href)
        const imagesModalElement = document.getElementById('slider-modal');
        const propertiesPage = 'http://www.brusipropiedades.com/propiedades';
        const homePage = 'http://www.brusipropiedades.com';

        if(window.location.href !== propertiesPage && window.location.href !== homePage) {
            if(!imagesModal) {
                setImagesModal(true);
                imagesModalElement.classList.remove('closed--modal');
                imagesModalElement.classList.add('opened-modal');
            }
        }

    }

    const closeModal = (e) => {
        e.preventDefault();
        const imagesModalElement = document.getElementById('slider-modal');

        if(imagesModal) {
            setImagesModal(false);
            imagesModalElement.classList.remove('opened-modal');
            imagesModalElement.classList.add('closed--modal');
        }
    }

  return (
    <div className='slider'>
        <div className='slider--images'>
            {
                fotos &&
                <>
                    <img src={fotos.fotos[imageNumber]} alt={direccion} onChange={handleProperty} onClick={openModal}/>
                    <div className='slider--modal closed--modal' id='slider-modal' >
                        <div className='slider--modal__container'>
                            <img src={fotos.fotos[imageNumber]} alt={direccion} onChange={handleProperty} id={'slider--image__img'} />
                        </div>
                        <div className='modal--arrows'>
                            <button className='modal--arrows__left' onClick={prevImgModal}><img src={leftArrow} alt="left arrow"/></button>
                            <button className='modal--arrows__right' onClick={nextImgModal}><img src={rightArrow} alt="right arrow"/></button>
                        </div>
                        <p className='slider--modal__number'>{`${imageNumber} / ${fotos.fotos.length}`}</p>
                        <button className='slider--modal__button' onClick={closeModal}></button>
                    </div>
                </>
            }
        </div>
        <div className='slider--arrows'>
            <button className='slider--arrows__left' onClick={prevImg}><img src={leftArrow} alt="left arrow"/></button>
            <button className='slider--arrows__right' onClick={nextImg}><img src={rightArrow} alt="right arrow"/></button>
        </div>
    </div>
  )
}

export default Slider;
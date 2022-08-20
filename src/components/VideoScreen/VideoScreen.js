import React from 'react';

const VideoScreen = ({propertyDetail, setVideoModal}) => {

    const closeVideoModal = () => {
        setVideoModal(false);
    }

  return (
    <div className='video--modal'>
        <button className='video--modal__button' onClick={closeVideoModal}></button>
        {
          propertyDetail.recursos/* .video */ !== "" && propertyDetail.recursos && propertyDetail.recursos !== undefined ?  
          <video className='video--modal__tag' src={propertyDetail.recursos.video} alt={`Video de la propiedad ${propertyDetail.direccion}`} autoPlay muted/>
          :
          null
        }
    </div>
  )
}

export default VideoScreen;
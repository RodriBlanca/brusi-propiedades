import React from 'react';

const MobileFiltersModal = ({children, modal, setModal, handleModal}) => {
  return (
    <>
        {modal &&
        <div className="modal">
            <div className="modal--container">
                <div className="modal--title">
                    <h3 className="modal--title__text">Filtros</h3>
                </div>
                <hr/>
                <button className="modal--button" onClick={handleModal}></button>
                {children}
                <div className="modal--filters">
                    <button className="modal--filters__button">Aplicar Filtros</button>
                </div>
            </div>
        </div>
        }
    </>
  )
}

export default MobileFiltersModal;
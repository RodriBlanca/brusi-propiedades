import React from 'react';

const FrequentQuestions = () => {
  return (
    <div className='frequent-questions'>
      <h3>Preguntas Frecuentes</h3>
        <div className='frequent-questions--container'>
            <input 
                type='checkbox' 
                className='frequent-questions--container__input' 
                id='question-1'
            />
            <label className='frequent-questions--container__label' htmlFor='question-1'>1 - ¿Realizan tasaciones reales?</label>
            <div className='frequent-questions--container__answer'>
              <p>Si, realizamos un estudio antes de llevar a cabo una tasación</p>
            </div>
        </div>
        <div className='frequent-questions--container'>
          <input 
            type='checkbox' 
            className='frequent-questions--container__input' 
            id='question-2'
          />
          <label className='frequent-questions--container__label' htmlFor='question-2'>2 - ¿Otra pregunta?</label>
          <div className='frequent-questions--container__answer'>
            <p>No, otra respuesta</p>
          </div>
        </div>
        <div className='frequent-questions--container'>
          <input 
            type='checkbox' 
            className='frequent-questions--container__input' 
            id='question-3'
          />
          <label className='frequent-questions--container__label' htmlFor='question-3'>3 - ¿Otra pregunta?</label>
          <div className='frequent-questions--container__answer'>
            <p>No, otra respuesta</p>
          </div>
        </div>
        <div className='frequent-questions--container'>
          <input 
            type='checkbox' 
            className='frequent-questions--container__input' 
            id='question-4'
          />
          <label className='frequent-questions--container__label' htmlFor='question-4'>4 - ¿Otra pregunta?</label>
          <div className='frequent-questions--container__answer'>
            <p>No, otra respuesta</p>
          </div>
        </div>
    </div>
  )
}

export default FrequentQuestions;
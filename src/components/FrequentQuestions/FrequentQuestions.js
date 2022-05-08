import React from 'react';

const FrequentQuestions = () => {
  return (
    <div className='frequent-questions'>
      <h3 className='frequent-questions--title'>Preguntas Frecuentes</h3>
        <div className='frequent-questions--container'>
            <input 
                type='checkbox' 
                className='frequent-questions--container__input' 
                id='question-1'
            />
            <label className='frequent-questions--container__label' htmlFor='question-1'>1 - ¿Para qué sirve una tasación?</label>
            <div className='frequent-questions--container__answer'>
              <p>La tasación le da información útil acerca de la propiedad. Describe lo que la hace valiosa y puede mostrar cómo se compara con otras propiedades en el vecindario. Una tasación de propiedad ayuda a asegurarle a usted un precio justo en el mercado.</p>
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
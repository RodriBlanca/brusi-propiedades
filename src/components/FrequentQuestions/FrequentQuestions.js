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
          <label className='frequent-questions--container__label' htmlFor='question-2'>2 - ¿Qué es el plan de comercialización PREMIUM?</label>
          <div className='frequent-questions--container__answer'>
            <p>El plan consiste en realizar una tasación acorde al mercado y brindarle a tu inmueble la mejor comercialización ( plano digital, amoblamiento, visita virtual 360, recorrido a pie, fotos y video con drone).</p>
          </div>
        </div>
        <div className='frequent-questions--container'>
          <input 
            type='checkbox' 
            className='frequent-questions--container__input' 
            id='question-3'
          />
          <label className='frequent-questions--container__label' htmlFor='question-3'>3 - ¿Que es la exclusividad? ¿Y cuánto dura ?</label>
          <div className='frequent-questions--container__answer'>
            <p>El contrato de exclusividad inmobiliaria es un acuerdo que se formaliza entre el vendedor y la inmobiliaria, que establece que el propietario de la vivienda (vendedor) cede de modo exclusivo los derechos de venta de su inmueble por un tiempo determinado a la inmobiliaria en cuestión.<br /> El contrato de exclusividad inmobiliaria fija además de la condición de exclusividad, el precio del inmueble, los honorarios de la inmobiliaria y el plazo de duración de dicha exclusividad.
            </p>
          </div>
        </div>
    </div>
  )
}

export default FrequentQuestions;
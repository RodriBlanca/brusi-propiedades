import React from 'react';

const Contact = () => {
  return (
    <form className='form'>
        <h3>Contacto</h3>
        <p>Dejanos tu consulta y en breve nos pondremos en contacto.</p>
        <div>
            <label>Nombre y Apellido</label>
            <input type="text" placeholder='Jonathan Brusi'/>
        </div>
        <div>
            <label>Email</label>
            <input type="email" placeholder='jonathan@gmail.com'/>
        </div>
        <div>
            <label>Mensaje</label>
            <textarea placeholder='Escribo porque...'/>
        </div>
        <button>Enviar</button>
    </form>
  )
}

export default Contact;
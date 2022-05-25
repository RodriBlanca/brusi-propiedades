import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nq3f34m', 'template_hqar8mb', form.current , 'KL2SBPq0HCP-JfwB3')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <form ref={form} className='form' onSubmit={sendEmail}>
        <h3>Contacto</h3>
        <p>Dejanos tu consulta y en breve nos pondremos en contacto.</p>
        <div>
            <label>Nombre y Apellido</label>
            <input type="text" placeholder='Ej: Jonathan Brusi' id='name' name='name'/>
        </div>
        <div>
            <label>Email</label>
            <input type="email" placeholder='Ej: jonathan@gmail.com' id='email' name='email'/>
        </div>
        <div>
          <label>Asunto</label>
          <input type="text" placeholder='Ej: Pedir tasación' id='subject' name='subject'/>
        </div>
        <div>
            <label>Mensaje</label>
            <textarea placeholder='Escribo porque...' id='message' name='message'/>
        </div>
        <button onClick={sendEmail}>Enviar</button>
    </form>
  )
}

export default Contact;
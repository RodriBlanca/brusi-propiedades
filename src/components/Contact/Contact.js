import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const handleNameInput = (e) => {
    setNameValue(e.target.value);
  }
  console.log(nameValue)

  const handleEmailInput = (e) => {
    setEmailValue(e.target.value);
  }
  
  const handleSubjectInput = (e) => {
    setSubjectValue(e.target.value);
  }

  const handleMessageInput = (e) => {
    setMessageValue(e.target.value);
  }

  const resetForm = () => {
    setNameValue('');
    setEmailValue('');
    setSubjectValue('');
    setMessageValue('');
  }

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(nameValue)

    // Form validation
    if(nameValue.length === 0 || nameValue.length < 3) {
      console.log('Todos los campos son obligatorios');
    } else {
      console.log('paso la primer evaluación')
      const reg = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
      if(!reg.exec(emailValue)) {
        console.log('El email no es válido');
      } else {
        if(subjectValue.length === 0) {
          console.log('El campo asunto es requerido')
        } else {
          if(messageValue.length === 0) {
            console.log('El campo mensaje es requerido');
          } else {
            emailjs.sendForm('service_nq3f34m', 'template_hqar8mb', form.current , 'KL2SBPq0HCP-JfwB3')
            .then((result) => {
              console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            resetForm();
          }
        }
      }
    }

  }

  return (
    <form ref={form} className='form' onSubmit={sendEmail}>
        <div className='form--text'>
          <h3>Contacto</h3>
          <p>Dejanos tu consulta y en breve nos pondremos en contacto.</p>
        </div>
        <div className='form--contact'>
          <div>
              <label>Nombre y Apellido</label>
              <input type="text" placeholder='Ej: Jonathan Brusi' id='name' name='name' value={nameValue} onChange={handleNameInput}/>
          </div>
          <div>
              <label>Email</label>
              <input type="email" placeholder='Ej: jonathan@gmail.com' id='email' name='email' value={emailValue} onChange={handleEmailInput}/>
          </div>
          <div>
            <label>Asunto</label>
            <input type="text" placeholder='Ej: Pedir tasación' id='subject' name='subject' value={subjectValue} onChange={handleSubjectInput}/>
          </div>
          <div>
              <label>Mensaje</label>
              <textarea placeholder='Me comunico porque estoy interesado...' id='message' name='message' value={messageValue} onChange={handleMessageInput}/>
          </div>
          <div className="form--button">
            <button onClick={sendEmail} className="form--button__btn" type='submit'>Enviar</button>
          </div>
        </div>
    </form>
  )
}

export default Contact;
import React, { useRef, useState } from 'react';
import FormInput from '../FormInput/FormInput';
import FormTextarea from '../FormTextarea/FormTextarea';
import emailjs from '@emailjs/browser';

const Form = () => {

    const form = useRef();

    const [nameValue, setNameValue] = useState('');
    const [surnameValue, setSurnameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [subjectValue, setSubjectValue] = useState('');
    const [messageValue, setMessageValue] = useState('');

    const handleNameInput = (e) => {
        setNameValue(e.target.value);
    }

    const handleSurnameInput = (e) => {
        setSurnameValue(e.target.value);
    }

    const handleEmailInput = (e) => {
        setEmailValue(e.target.value);
    }

    const handleSubjectInput = (e) => {
        setSubjectValue(e.target.value);
    }

    const handleMessageInput = (e) => {
        setMessageValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit} className="form">
        <div className='form--contact'>
            <FormInput 
                name="name" 
                placeholder="Nombre" 
                onChange={handleNameInput} 
                label="Nombre" 
                value={nameValue} 
                type="text"
                errorMessage="El nombre debe tener entre 4 a 16 caracteres y no puede incluir ningún caracter especial"
                className="form--contact__input"
                pattern='^[A-Za-z]{4,16}$'
            />
            <FormInput 
                name="surname" 
                placeholder="Apellido" 
                onChange={handleSurnameInput} 
                label="Apellido" 
                value={surnameValue} 
                type="text"
                errorMessage="El apellido debe tener entre 4 a 16 caracteres y no puede incluir ningún caracter especial"
                className="form--contact__input"
                pattern='^[A-Za-z]{4,16}$'
            />
            <FormInput 
                name="email" 
                placeholder="Email" 
                onChange={handleEmailInput} 
                label="Email" 
                value={emailValue} 
                type="email"
                errorMessage="El email no es válido"
                className="form--contact__input"
            />
            <FormInput 
                name="subject" 
                placeholder="Asunto" 
                onChange={handleSubjectInput} 
                label="Asunto" 
                value={subjectValue} 
                type="text"
                errorMessage="El asunto debe contener mínimo 4 caracteres"
                className="form--contact__input"
                pattern='^[A-Za-z]{4,25}$'
            />
            <FormTextarea 
                name="message" 
                placeholder="Mensaje" 
                onChange={handleMessageInput} 
                label="Mensaje" 
                value={messageValue} 
                type="text"
                errorMessage="El mensaje debe contener mínimo 20 caracteres"
                className="form--contact__input"
                // Buscar patern que permita todos los caracteres y setearlo hasta 300?
            />
            <button>Enviar</button>
        </div>
    </form>
  )
}

export default Form;
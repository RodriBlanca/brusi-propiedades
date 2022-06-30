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
    const [sended, setSended] = useState(false);
    const nameInput = useRef();
    const surnameInput = useRef();
    const emailInput = useRef();
    const subjectInput = useRef();
    const messageInput = useRef();

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

    const resetForm = () => {
        setNameValue('');
        setSurnameValue('');
        setEmailValue('');
        setSubjectValue('');
        setMessageValue('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setSended(true);

        // Validate all inputs
        if(nameValue.length !== 0 && 
            surnameValue.length !== 0 && 
            emailValue.length !== 0 && 
            subjectValue.length !== 0 && 
            messageValue.length !== 0) {

            emailjs.sendForm('service_nq3f34m', 'template_hqar8mb', form.current , 'KL2SBPq0HCP-JfwB3')
                .then((result) => {
                  console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

            resetForm();
            nameInput.current.setAttribute("focused", "false");
            surnameInput.current.setAttribute("focused", "false");
            emailInput.current.setAttribute("focused", "false");
            subjectInput.current.setAttribute("focused", "false");
            messageInput.current.setAttribute("focused", "false");

            setTimeout(() => {
                setSended(false);
            }, 5000)
        }

    }

  return (
    <form onSubmit={handleSubmit} className="form" id='form' ref={form}>
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
                id="name-input"
                reference={nameInput}
                sended={sended}
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
                id="surname-input"
                reference={surnameInput}
                sended={sended}
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
                id="email-input"
                reference={emailInput}
                sended={sended}
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
                pattern='^[A-Za-z ]{4,50}$'
                id="subject-input"
                reference={subjectInput}
                sended={sended}
            />
            <FormTextarea 
                name="message" 
                placeholder="Mensaje" 
                onChange={handleMessageInput} 
                label="Mensaje" 
                value={messageValue} 
                type="text"
                errorMessage="El mensaje no puede quedar vacío"
                className="form--contact__textarea"
                form="form"
                reference={messageInput}
                sended={sended}
            />
            <div className='form--button'>
                <button className="form--button__btn">Enviar</button>
                {sended && <p className='form--success-message'>El mensaje fue enviado exitosamente</p>}
            </div>
        </div>
    </form>
  )
}

export default Form;
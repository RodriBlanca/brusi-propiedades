import React, { useRef, useState } from 'react';
import FormInput from '../FormInput/FormInput';
import FormTextarea from '../FormTextarea/FormTextarea';
import emailjs from '@emailjs/browser';
import instagramIcon from '../../images/instagram-icon.png';
import tiktokIcon from '../../images/tiktok-icon.png';
import whatsappIcon from '../../images/whatsapp-icon.png';
import youtubeIcon from '../../images/youtube-icon.png';

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
        <div className='form--information'>
            <div>
                <h3 className='form--information__title'>Contacto</h3>
            </div>
            <p className='form--information__text'>Dejanos tu consulta y en breve nos pondremos en contacto.</p>
            <p className='form--information__text'>También podes contactarte con nosotros mediante</p>
            {/* Redes sociales */}
            <div className='form--social'>
                <div className='social-media'>
                    {/* Instagram */}
                    <div>
                        <a href='https://www.instagram.com/jonathanbrusi/?igshid=YmMyMTA2M2Y=' target={'_blank'} rel={"noreferrer"} className='social-media--link'>
                            <img src={instagramIcon} alt="link a instagram" className='social-media--link__img'/>
                        </a>
                    </div>
                    {/* Youtube */}
                    <div>
                        <a href='https://www.youtube.com/channel/UCHGu6Bbln9NheEQVyAmYveA' target={'_blank'} rel={"noreferrer"} className='social-media--link'>
                            <img src={youtubeIcon} alt="link a youtube" className='social-media--link__img'/>
                        </a>
                    </div>
                    {/* Whatsapp */}
                    <div>
                        <a href={'https://api.whatsapp.com/send/?phone=26517362&text&app_absent=0'} target={'_blank'} rel={"noreferrer"} className='social-media--link'>
                            <img src={whatsappIcon} alt="link a whatsapp" className='social-media--link__img'/>
                        </a>
                    </div>
                    {/* Tik tok */}
                    <div>
                        <a href='https://www.tiktok.com/@brusipropiedades?_d=secCgYIASAHKAESPgo8r6Q6faUHyuojDGe%2FQa48CRSLnkI42ubUuEh712RvKs6vxo2G%2F056KP7I35oTECeLfEZgBZpUsM2jX7gvGgA%3D&_r=1&checksum=87b44e810b738d2d13088eee1e4ee650c70a0d0b17e3a04d3a60ef89586cad2e&language=es&sec_uid=MS4wLjABAAAAbRm1i2s8vyqa86JAXk-mt4XcEhPX3OwJ-1u53QuIrFZb74uQHi12jUtpTZ-X_V0E&sec_user_id=MS4wLjABAAAAbRm1i2s8vyqa86JAXk-mt4XcEhPX3OwJ-1u53QuIrFZb74uQHi12jUtpTZ-X_V0E&share_app_id=1233&share_author_id=6726375007339693062&share_link_id=3E29E94D-3273-47F2-9272-6AACFBA88C29&source=h5_m&tt_from=copy&u_code=d7lbjcl9l2d4li&user_id=6726375007339693062&utm_campaign=client_share&utm_medium=ios&utm_source=copy' target={'_blank'} rel={"noreferrer"} className='social-media--link'>
                            <img src={tiktokIcon} alt="link a tik tok" className='social-media--link__img'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='form--contact'>
            <div className='inputs--container'>
                <FormInput 
                    name="name" 
                    placeholder="Ej: Jonathan" 
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
                    placeholder="Ej: Brusi" 
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
            </div>
            <div className='inputs--container'>
                <FormInput 
                    name="email" 
                    placeholder="Ej: jonathan@gmail.com" 
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
                    placeholder="Ej: Pedir tasación" 
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
            </div>
            <FormTextarea 
                name="message" 
                placeholder="Ej: Estoy interesado en solicitar una tasación..." 
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
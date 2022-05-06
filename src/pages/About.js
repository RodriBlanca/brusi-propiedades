import React from 'react';
import { Link } from 'react-router-dom';
import FrequentQuestions from '../components/FrequentQuestions/FrequentQuestions';
import purpose from '../images/undraw_shared_goals_re_jvqd (1).svg';
import mission from '../images/undraw_select_house_qbag.svg';
import view from '../images/undraw_stepping_up_g6oo.svg';
import tiktokIcon from '../images/tiktok.png';
import whatsappIcon from '../images/whatsapp-icon.png';
import facebookIcon from '../images/facebook-icon.png';
import instagramIcon from '../images/instagram-icon.png';


const About = () => {
  return (
    <main className='about'>
      {/* NOSOTROS */}
        <div>
          <div></div>
          <div>
            <h1>Nosotros</h1>
          </div>
        </div>
        {/* NUESTRO PROPÓSITO */}
        <div className='about--content purpose'>
          <div className='about--text-container'>
            <h2 className='about--content__title'>Nuestro Propósito</h2>
            <p className='about--content__text'>Es hacer que el proceso, muchas veces estresante de comprar o vender una propiedad, se convierta en uno de los momento más felices de tu vida.</p>
            <p className='about--content__text'>Es por eso, que acompañamos y aconsejamos a nuestros clientes como quisiéramos que lo hicieran con nosotros brindándoles a través de nuestros servicios una experiencia única al momento de comprar o vender.</p>
            <button className='about--content__button'>
              <Link className='about--content__link' to={'/brusi-propiedades/servicios'}>Nuestros Servicios</Link>
            </button>
          </div>
          <div className='about--image-container'>
            <img className='about--content__img' src={purpose} alt='Imagen de nuestro propósito' />
          </div>
        </div>
        {/* MISIÓN */}
        <div className='about--content mission'>
          <div className='about--image-container'>
            <img className='about--content__img' src={mission} alt='Imagen de nuestra misión'/>
          </div>
          <div className='about--text-container'>
            <h2 className='about--content__title'>Misión</h2>
            <p className='about--content__text'>Ayudar a nuestros clientes a tomar la decisión más adecuada en sus operaciones inmobiliarias, facilitando la compra o venta de inmuebles en el menor tiempo posible, protegiendo legalmente el patrimonio de las partes, con transparencia, confiabilidad, responsabilidad y compromiso, haciendo uso de tecnología moderna para la mejor comercialización.</p>
          </div>
        </div>
        {/* VISIÓN */}
        <div className='about--content view'>
          <div className='about--text-container'>
            <h2 className='about--content__title'>Visión</h2>
            <p className='about--content__text'>Trabajar con profesionalismo hacia el camino de la excelencia, creciendo en equipo con nuestros clientes y colegas, trabajando sobre la base de la confianza y la seriedad, ejerciendo la profesión con pasión y dedicación, dejando el mejor legado posible para futuras generaciones.</p>
          </div>
          <div className='about--image-container'>
            <img className='about--content__img' src={view} alt='Imagen de nuestra visión'/>
          </div>
        </div>
        <FrequentQuestions />
        <div className='about--social-media'>
           <h3 className='about--social-media__title'>Podés conocer más sobre nosotros siguiéndonos en nuestras redes</h3>
           <div className='about--social-media__container'>
             {/* Instagram */}
             <div>
               <a href='#'>
                 <img src={instagramIcon} alt="link a instagram"/>
               </a>
             </div>
             {/* Whatsapp */}
             <div>
               <a>
                 <img src={whatsappIcon} alt="link a whatsapp"/>
               </a>
             </div>
             {/* Facebook */}
             <div>
               <a>
                 <img src={facebookIcon} alt="link a facebook"/>
               </a>
             </div>
             {/* Tik tok */}
             <div>
               <a>
                 <img src={tiktokIcon} alt="link a tik tok"/>
               </a>
             </div>
           </div>
        </div>
    </main>
  )
}

export default About;
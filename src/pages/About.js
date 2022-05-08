import React from 'react';
import { Link } from 'react-router-dom';
import FrequentQuestions from '../components/FrequentQuestions/FrequentQuestions';
import purpose from '../images/undraw_shared_goals_re_jvqd (1).svg';
import mission from '../images/undraw_select_house_qbag.svg';
import view from '../images/undraw_stepping_up_g6oo.svg';
import tiktokIcon from '../images/tiktok.png';
import whatsappIcon from '../images/whatsapp-icon.png';
import instagramIcon from '../images/instagram-icon.png';
import youtubeIcon from '../images/youtube-icon.png';

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
               <a href='https://www.instagram.com/jonathanbrusi/?igshid=YmMyMTA2M2Y=' target={'_blank'} rel={"noreferrer"}>
                 <img src={instagramIcon} alt="link a instagram"/>
               </a>
             </div>
             {/* Youtube */}
             <div>
               <a href='https://www.youtube.com/channel/UCHGu6Bbln9NheEQVyAmYveA' target={'_blank'} rel={"noreferrer"}>
                 <img src={youtubeIcon} alt="link a youtube"/>
               </a>
             </div>
             {/* Whatsapp */}
             <div>
               <a href={'https://api.whatsapp.com/send/?phone=26517362&text&app_absent=0'} target={'_blank'} rel={"noreferrer"}>
                 <img src={whatsappIcon} alt="link a whatsapp"/>
               </a>
             </div>
             {/* Tik tok */}
             <div>
               <a href='https://www.tiktok.com/@brusipropiedades?_d=secCgYIASAHKAESPgo8r6Q6faUHyuojDGe%2FQa48CRSLnkI42ubUuEh712RvKs6vxo2G%2F056KP7I35oTECeLfEZgBZpUsM2jX7gvGgA%3D&_r=1&checksum=87b44e810b738d2d13088eee1e4ee650c70a0d0b17e3a04d3a60ef89586cad2e&language=es&sec_uid=MS4wLjABAAAAbRm1i2s8vyqa86JAXk-mt4XcEhPX3OwJ-1u53QuIrFZb74uQHi12jUtpTZ-X_V0E&sec_user_id=MS4wLjABAAAAbRm1i2s8vyqa86JAXk-mt4XcEhPX3OwJ-1u53QuIrFZb74uQHi12jUtpTZ-X_V0E&share_app_id=1233&share_author_id=6726375007339693062&share_link_id=3E29E94D-3273-47F2-9272-6AACFBA88C29&source=h5_m&tt_from=copy&u_code=d7lbjcl9l2d4li&user_id=6726375007339693062&utm_campaign=client_share&utm_medium=ios&utm_source=copy' target={'_blank'} rel={"noreferrer"}>
                 <img src={tiktokIcon} alt="link a tik tok"/>
               </a>
             </div>
           </div>
        </div>
    </main>
  )
}

export default About;
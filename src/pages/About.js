import React from 'react';
import { Link } from 'react-router-dom';
import FrequentQuestions from '../components/FrequentQuestions/FrequentQuestions';
import purpose from '../images/undraw_shared_goals_re_jvqd (1).svg';
import mission from '../images/undraw_select_house_qbag.svg';
import view from '../images/undraw_stepping_up_g6oo.svg';
import tiktokIcon from '../images/tiktok-icon.png';
import whatsappIcon from '../images/whatsapp-icon.png';
import instagramIcon from '../images/instagram-icon.png';
import youtubeIcon from '../images/youtube-icon.png';
import jonathan from '../images/jonathan-brusi.jpeg';
import gustavo from '../images/gustavo-seneca.jpeg';

const About = () => {
  return (
    <main className='about'>
        {/* NOSOTROS */}
        <div className='about--title'>
            <h1 className='about--title__text'>Nosotros</h1>
        </div>
        {/* Jonathan */}
        <div className='about--content'>
            <div className='about--picture'>
                <img src={jonathan} alt="Jonathan Brusi" className='about--picture__img estate-agent--img'/>
            </div>
            <div className='about--paragraph'>
                <h2 className='about--paragraph__title'>Jonathan Brusi</h2>
                <p className='about--paragraph__text'>Mi nombre es Jonathan Brusi, tengo 27 años y soy corredor matriculado en Lomas De Zamora. Estudié tres años en el <a href='https://www.isel.edu.ar/' target={'_blank'}>Instituto Superior de Estudios Lomas de Zamora (ISEL)</a>, realicé dos cursos de tasaciones y luego me certifiqué en <a href='https://www.nar.realtor/' target={'_blank'}>CRS (Certified  Residential Specialist)</a>. Me matriculé para ejercer esta hermosa profesión junto a mi socio y juntos formamos un gran equipo de trabajo.
                </p>
            </div>
        </div>
        {/* Gustavo */}
        <div className='about--content about--invert'>
            <div className='about--paragraph'>
                <h2 className='about--paragraph__title'>Gustavo Seneca</h2>
                <p className='about--paragraph__text'>Mi nombre es Gustavo Seneca, tengo 31 años, estudié junto a Jonathan y nos recibimos en el <a href='https://www.isel.edu.ar/' target={'_blank'}>Instituto Superior de Estudios Lomas de Zamora (ISEL)</a>. Buscamos crecer, seguir mejorando la profesión y amamos lo que hacemos, es por eso, que decidimos empezar con este proyecto con mi socio.</p>
            </div>
            <div className='about--picture'>
                <img src={gustavo} alt="Gustavo Seneca" className='about--picture__img estate-agent--img'/>
            </div>
        </div>
        {/* NUESTRO PROPÓSITO */}
        <div className='about--content'>
            <div className='about--picture'>
                <img src={purpose} alt="Imagen de la sección Nuestro propósito" className='about--picture__img purpose--img'/>
            </div>
            <div className='about--paragraph'>
                <h2 className='about--paragraph__title'>Nuestro Propósito</h2>
                <p className='about--paragraph__text'>Es hacer que el proceso, muchas veces estresante de comprar o vender una propiedad, se convierta en uno de los momento más felices de tu vida.<br/>Es por eso, que acompañamos y aconsejamos a nuestros clientes como quisiéramos que lo hicieran con nosotros brindándoles a través de nuestros servicios una experiencia única al momento de comprar o vender
                </p>
                <button className='about--paragraph__button'>
                    <Link to={'/brusi-propiedades/servicios'} className="about--button__link">Nuestros Servicios</Link>
                </button>
            </div>
        </div>
        {/* MISIÓN */}
        <div className='about--content about--invert'>
            <div className='about--paragraph'>
                <h2 className='about--paragraph__title'>Misión</h2>
                <p className='about--paragraph__text'>Ayudar a nuestros clientes a tomar la decisión más adecuada en sus operaciones inmobiliarias, facilitando la compra o venta de inmuebles en el menor tiempo posible, protegiendo legalmente el patrimonio de las partes, con transparencia, confiabilidad, responsabilidad y compromiso, haciendo uso de tecnología moderna para la mejor comercialización.
                </p>
            </div>
            <div className='about--picture'>
                <img src={mission} alt="Imagen de la sección Misión" className='about--picture__img mission--img'/>
            </div>
        </div>
        {/* VISIÓN */}
        <div className='about--content'>
            <div className='about--picture'>
                <img src={view} alt="Imagen de la sección Visión" className='about--picture__img view--img'/>
            </div>
            <div className='about--paragraph'>
                <h2 className='about--paragraph__title'>Visión</h2>
                <p className='about--paragraph__text'>Trabajar con profesionalismo hacia el camino de la excelencia, creciendo en equipo con nuestros clientes y colegas, trabajando sobre la base de la confianza y la seriedad, ejerciendo la profesión con pasión y dedicación, dejando el mejor legado posible para futuras generaciones.
                </p>
            </div>
        </div>
        <FrequentQuestions />
        {/* SOCIAL MEDIA */}
        <div className='about--social'>
            <h3 className='about--social__title'>Podés conocer más sobre nosotros siguiéndonos en nuestras redes</h3>
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
    </main>
  )
}

export default About;
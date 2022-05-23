import React from 'react';
import FrequentQuestions from '../components/FrequentQuestions/FrequentQuestions';
import files from '../images/undraw_secure_files_re_6vdh.svg';
import phone from '../images/undraw_emails_re_cqen.svg';
import partners from '../images/undraw_house_searching_re_stk8.svg';
import plan from '../images/undraw_business_plan_re_0v81.svg';
import marketing from '../images/undraw_social_dashboard_re_ocbd.svg';
import photos from '../images/undraw_moments_0y20.svg';
import security from '../images/undraw_security_on_re_e491.svg';
import together from '../images/undraw_business_deal_re_up4u.svg';
import accompany from '../images/undraw_team_spirit_re_yl1v.svg';
import planOfHouse from '../images/undraw_abstract_re_l9xy.svg';
import post from '../images/undraw_website_builder_re_ii6e.svg';
import answer from '../images/undraw_mobile_re_q4nk.svg';
import proffesional from '../images/undraw_certificate_re_yadi.svg';
import present from '../images/undraw_for_sale_re_egkk.svg';
import drone from '../images/undraw_follow_me_drone_kn76.svg';
import architect from '../images/undraw_designer_girl_re_h54c.svg';
import tour from '../images/undraw_video_files_fu10.svg';

const Services = () => {
  return (
    <main className='services'>
        <div className='services--title'>
          <h1 className='services--title__text'>Servicios</h1>
        </div>
        <div className='services--sell'>
          <h2 className='services--sell__title'>¿Querés vender una propiedad?</h2>
          <h3 className='services--sell__subtitle'>¿Por qué vender con nosotros?</h3>
          <ul className='sell'>
            <div>
              <img src={plan} alt="Icono del servicio de tasación"/>
              <li>Realizamos una tasación real y acordamos junto a vos una estrategia de precios para presentarnos de la mejor forma ante los compradores.
              </li>
            </div>
            <div>
              <img src={marketing} alt="Icono del servicio de marketing"/>
              <li>Elaboramos un plan de marketing a medida para poder vender más rápido y al mejor precio.
              </li>
            </div>
            <div>
              <img src={photos} alt="Icono del servicio de fotos"/>
              <li>Publicamos fotos profesionales de tu propiedad.
              </li>
            </div>
            <div>
              <img src={planOfHouse} alt="Icono del servicio del plano de la propiedad"/>
              <li>Realizamos un plano de tu propiedad para que los interesados puedan darse una idea de la distribución antes de una visita presencial.
              </li>
            </div>
            <div>
              <img src={security} alt="Icono del servicio de protocolo de seguridad"/>
              <li>Contamos con un protocolo de seguridad previo a coordinar una visita a la propiedad.
              </li>
            </div>
            <div>
              <img src={post} alt="Icono del servicio de publicación de la propiedad en diferentes sitios"/>
              <li>Publicamos tu propiedad en nuestra web, redes sociales y en los mejores portales del sector inmobiliario para lograr la máxima difusión posible.
              </li>
            </div>
            <div>
              <img src={together} alt="Icono del servicio de trabajo junto a otra inmobiliaria"/>
              <li>Trabajamos en colaboración con cualquier inmobiliaria.
              </li>
            </div>
            <div>
              <img src={accompany} alt="Icono del servicio de acompañar al cliente"/>
              <li>Te acompañamos durante todo el proceso, aconsejándote con información fidedigna para que tomes la mejor decisión.
              </li>
            </div>
            <div>
              <img src={answer} alt="Icono del servicio de respuesta rápida"/>
              <li>Contamos con un rápido servicio de respuesta ante las consultas por la propiedad.
              </li>
            </div>
            <div>
              <img src={proffesional} alt="Icono del servicio de trabajar con profesionales"/>
              <li>Estarás acompañado por expertos certificados internacionalmente en el mercado residencial.
              </li>
            </div>
            <div>
              <img src={present} alt="Icono del servicio de prentación de la propiedad"/>
              <li>Te aconsejarémos cuál es la mejor forma de presentar tu propiedad.
              </li>
            </div>
            <div>
              <img src={drone} alt="Icono del servicio de fotografía con drone"/>
              <li>Realizamos filmaciones con drone y recorrido a pie de la propiedad.
              </li>
            </div>
            <div>
              <img src={tour} alt="Icono del servicio de tour 360°"/>
              <li>Realizamos tour 360° para efectivizar las vistas del inmueble.
              </li>
            </div>
          </ul>
        </div>
        <div className='services--buy'>
          <h2 className='services--buy__title'>¿Querés comprar una propiedad?</h2>
          <h3 className='services--buy__subtitle'>¿Por qué comprar una propiedad que ofrecemos?</h3>
          <ul className='buy'>
            <div>
              <img src={files} alt="Icono de control de documentación"/>
              <li>Controlamos que la documentación esté en condiciones para que la propiedad sea ofrecida a la venta.</li>
            </div>
            <div>
              <img src={architect} alt="Icono del servicio de realización de planos"/>
              <li>
                En cada propiedad encontrarás un plano realizado por un arquitecto para que puedas darte una idea de su distribución de la misma.
              </li>
            </div>
            <div>
              <img src={phone} alt="Icono de contacto"/>
              <li>
                Respondemos en periodo de tiempo muy corto cualquier consulta que nos realices por alguna propiedad.
              </li>
            </div>
            <div>
              <img src={partners} alt="Icono de representantes en tu búsqueda"/>
              <li>
              Si las propiedades que vas a ver no cumplen con tus expectativas de búsqueda, igual podemos ayudarte: comunícate con nosotros para que seamos tu representante en la búsqueda del inmueble que necesitas. Sabemos cómo ayudarte y te acompañaremos durante todo el proceso, defendiendo tus intereses como comprador para que logres encontrar tu casa ideal, al mejor precio y en las mejores condiciones de negociación.
              </li>
            </div>
          </ul>
          <div className='services--button'>
            <button>Nuestras Propiedades</button>
          </div>
        </div>
        <FrequentQuestions />
    </main>
  )
}

export default Services;
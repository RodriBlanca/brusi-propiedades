import React from 'react';
import FrequentQuestions from '../components/FrequentQuestions/FrequentQuestions';
import files from '../images/undraw_secure_files_re_6vdh.svg';
import phone from '../images/undraw_emails_re_cqen.svg';
import partners from '../images/undraw_team_goals_re_4a3t.svg';
import plan from '../images/undraw_business_plan_re_0v81.svg';
import marketing from '../images/undraw_social_dashboard_re_ocbd.svg';
import photos from '../images/undraw_moments_0y20.svg';
import security from '../images/undraw_security_on_re_e491.svg';
import together from '../images/undraw_business_deal_re_up4u.svg';
import accompany from '../images/undraw_team_spirit_re_yl1v.svg';

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
              <img src={marketing} alt="Icono de servicio de marketing"/>
              <li>Elaboramos un plan de marketing a medida para poder vender más rápido y al mejor precio.
              </li>
            </div>
            <div>
              <img src={photos} alt="Icono de servicio de fotos"/>
              <li>Publicamos fotos profesionales de tu propiedad.
              </li>
            </div>
            <div>
              <img />
              <li>Realizamos un croquis de tu propiedad para que los interesados puedan darse una idea de la distribución antes de una visita presencial.
              </li>
            </div>
            <div>
              <img src={security} alt="Icono de servicio de protocolo de seguridad"/>
              <li>Contamos con un protocolo de seguridad previo a coordinar una visita a la propiedad.
              </li>
            </div>
            <div>
              <img />
              <li>Publicamos tu propiedad en nuestra web, redes sociales y en los mejores portales del sector inmobiliario para lograr la máxima difusión posible.
              </li>
            </div>
            <div>
              <img src={together} alt="Icono de servicio de trabajo junto a otra inmobiliaria"/>
              <li>Trabajamos en colaboración con cualquier inmobiliaria.
              </li>
            </div>
            <div>
              <img src={accompany} alt="Icono de servicio de acompañar al cliente"/>
              <li>Te acompañamos durante todo el proceso, aconsejándote con información fidedigna para que tomes la mejor decisión.
              </li>
            </div>
            <div>
              <img />
              <li>Contamos con un rápido servicio de respuesta ante las consultas por la propiedad.
              </li>
            </div>
            <div>
              <img />
              <li>Estarás acompañado por expertos certificados internacionalmente en el mercado residencial.
              </li>
            </div>
            <div>
              <img />
              <li>Te aconsejarémos cuál es la mejor forma de presentar tu propiedad.
              </li>
            </div>
            <div>
              <img />
              <li>Realizamos filmaciones con drone y recorrido a pie de la propiedad.
              </li>
            </div>
            <div>
              <img />
              <li>Realizamos tour 360° para efectivizar las visitas del inmueble.
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
              <img />
              <li>
                En cada propiedad encontrarás un plano realizado por un arquitecto para que puedas darte una idea de su distribución de la misma.
              </li>
            </div>
            <div>
              <img src={phone} alt="Icono de contacto"/>
              <li>
                Si te interesó alguna propiedad.
              </li>
            </div>
            <div>
              <img src={partners} alt="Icono de representantes en tu búsqueda"/>
              <li>
              Si las propiedades que vas a ver no cumplen con tus expectativas de búsqueda, igual podemos ayudarte: comunícate con nosotros para que seamos tu representante en la búsqueda del inmueble que necesitas. Sabemos cómo ayudarte y te acompañaremos durante todo el proceso, defendiendo tus intereses como comprador para que logres encontrar tu casa ideal, al mejor precio y en las mejores condiciones de negociación.
              </li>
            </div>
          </ul>
          <div>
            <button>Nuestras Propiedades</button>
          </div>
        </div>
        <FrequentQuestions />
    </main>
  )
}

export default Services;
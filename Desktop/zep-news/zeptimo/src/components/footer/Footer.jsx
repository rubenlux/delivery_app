import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/logoWhite.png";
import axios from "axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "./footer.css";

export default function Footer() {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const data = {
      email: email,
    };
    try {
      const res = await axios.post("/newsLetter", data);
      Toastify({
        text: "¡Gracias por suscribirse!",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #6200B3, #DD403A)",
        },
      }).showToast();
      setEmail("");
    } catch (err) {
      console.log(err);
      alert("Error al enviar el mensaje");
      setError(true);
    }
  };

  return (
    <footer id='dk-footer' className='dk-footer'>
      <div>
        <div className='row'>
          <div className='col-md-12 col-lg-4'>
            <div className='dk-footer-box-info'>
              <Link to='/' className='footer-logo'>
                <img src={Logo} alt='footer_logo' className='img-fluid' />
              </Link>
              <p className='footer-info-text'>sitio web de noticias</p>
              <div className='footer-social-link'>
                <h3>SEGUINOS</h3>
                <ul>
                  <li>
                    <a
                      href='https://www.facebook.com/zeptimoDG/?ref=pages_you_manage'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://twitter.com/zepProducciones'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.tiktok.com/@radio.zeptimo'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fa-brands fa-tiktok'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.youtube.com/channel/UC8opVZSksgorNSY-gBQ84aQ'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fa-brands fa-youtube'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.instagram.com/zeptimo_producciones/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- End Social link --> */}
            </div>
            {/* <!-- End Footer info --> */}
            <div className='footer-awarad'>
              <img src='#' alt='' />
              <p></p>
            </div>
          </div>
          {/* <!-- End Col --> */}
          <div className='col-md-12 col-lg-8'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='contact-us'>
                  <div className='contact-icon'>
                    <i className='fa fa-map-o' aria-hidden='true'></i>
                  </div>
                  {/* <!-- End contact Icon --> */}
                  <div className='contact-info'>
                    <h3>Formosa-Capital</h3>
                    <p>3127 Arenales</p>
                  </div>
                  {/* <!-- End Contact Info --> */}
                </div>
                {/* <!-- End Contact Us --> */}
              </div>
              {/* <!-- End Col --> */}
              <div className='col-md-6'>
                <div className='contact-us contact-us-last'>
                  <div className='contact-icon'>
                    <i className='fa-brands fa-whatsapp'></i>
                  </div>
                  {/* <!-- End contact Icon --> */}
                  <div className='contact-info'>
                    <h3 className='phone'>95 711 9 5353</h3>
                    <p className='phone-wsp'>Whatsapp</p>
                  </div>
                  {/* <!-- End Contact Info --> */}
                </div>
                {/* <!-- End Contact Us --> */}
              </div>
              {/* <!-- End Col --> */}
            </div>
            {/* <!-- End Contact Row --> */}
            <div className='row'>
              <div className='col-md-12 col-lg-6'>
                <div className='footer-widget footer-left-widget'>
                  <div className='section-heading'>
                    <h3 className='utils'>Links Utiles</h3>
                    <span className='animate-border border-black'></span>
                  </div>
                  <ul>
                    <li>
                      <Link to='/'>Nosotros</Link>
                    </li>
                    <li>
                      <a href='#'>Servicios</a>
                    </li>
                    <li>
                      <a href='#'>Proyectos</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to='/contact'>Contacto</Link>
                    </li>

                    <li>
                      <a href='#'>Nuestro Equipo</a>
                    </li>
                    <li>
                      <a href='#'>Faq</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- End Footer Widget --> */}
              </div>
              {/* <!-- End col --> */}
              <div className='col-md-12 col-lg-6'>
                <div className='footer-widget'>
                  <div className='section-heading'>
                    <h3 className='letter'>Subscríbete al Boletin</h3>
                    <span className='animate-border border-black'></span>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className='form-row'>
                      <div className='col dk-footer-form'>
                        <input
                          type='email'
                          className='form-control'
                          placeholder='Email'
                          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                          name='email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className='btnf' type='submit'>
                          <i className='fa fa-send'></i>
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* <!-- End form --> */}
                </div>
                {/* <!-- End footer widget --> */}
              </div>
              {/* <!-- End Col --> */}
            </div>
            {/* <!-- End Row --> */}
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Widget Row --> */}
      </div>
      {/* <!-- End Contact Container --> */}

      <div className='copyright'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <span className='copy'>
                Copyright © 2022, Todos los derechos reservados Zeptimo
                Producciones
              </span>
            </div>
            {/* End Col  */}
            <div className='col-md-6'>
              <div className='copyright-menu'>
                <ul>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <a href='#'>Terms</a>
                  </li>
                  <li>
                    <a href='#'>Privacy Policy</a>
                  </li>
                  <li>
                    <Link to='/contact'>Contacto</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End Row */}
        </div>
      </div>

      <div id='back-to-top' className='back-to-top'>
        {/* <button
            className='btn btn-dark'
            title='Back to Top'
            styles='display: block;'
            // onClick='topFunction()'
          >
            <i className='fa fa-angle-up fa-2x'></i>
          </button> */}
      </div>
    </footer>
  );
}

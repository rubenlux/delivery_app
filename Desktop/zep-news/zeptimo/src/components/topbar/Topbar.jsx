import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import SearchModal from "../SearchModal/SearchModal";

import "./topbar.css";

export default function Topbar() {
  const [searchShow, setSearchShow] = useState(false);
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    Toastify({
      text: "Sesión cerrada",
      duration: 3000,
      style: {
        background: "linear-gradient(to right, #6200B3, #DD403A)",
      },
    }).showToast();
  };
  return (
    <nav className='top'>
      <div className='topLeft'>
        <a
          href='https://www.facebook.com/zeptimoDG'
          rel='noopener'
          target='blank'
        >
          <i className='topIcon fab fa-facebook-square  fa-2x'></i>
        </a>
        <a
          href='https://www.instagram.com/zeptimo_producciones/'
          rel='noopener'
          target='blank'
        >
          <i className='topIcon fab fa-instagram-square fa-2x'></i>
        </a>
        <a
          href='https://twitter.com/zepProducciones'
          rel='noopener'
          target='blank'
        >
          <i className='topIcon fab fa-youtube-square fa-2x'></i>
        </a>
        <a
          href='https://twitter.com/zepProducciones'
          rel='noopener'
          target='blank'
        >
          <i className='topIcon fab fa-twitter-square fa-2x'></i>
        </a>
      </div>

      <div className='topCenter'>
        <ul className='topList'>
          <Link className='link' to='/'>
            <li className='topListItem'>
              <i className='fa-solid fa-house-chimney fa-2x'></i>
              <h3>Inicio</h3>
            </li>
          </Link>
          <li className='topListItem'>
            <i className='topMenu fa-solid fa-users fa-2x'></i>
            <h3>Nosotros</h3>
          </li>
          <Link className='link' to='/contact'>
            <li className='topListItem'>
              <i className='topMenu fa-solid fa-address-card fa-2x'></i>
              <h3>Contacto</h3>
            </li>
          </Link>

          <Link className='link' to='/write'>
            <li className='topListItem'>
              <i className='fa-solid fa-file-export fa-2x'></i>
              <h3>Publicar</h3>
            </li>
          </Link>
          <Link to='/login'>
            {user && (
              <li className='topListItem' onClick={handleLogout}>
                <i className='fa-solid fa-power-off fa-2x'></i>
                <h3>CERRAR SESIÓN</h3>
              </li>
            )}
          </Link>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <Link className='link' to='/settings'>
            <img className='topImg' src={user.profile_pic} alt='' />
          </Link>
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                ACCESO
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                REGISTRO
              </Link>
            </li>
          </ul>
        )}
        <span className='btn_search' onClick={() => setSearchShow(!searchShow)}>
          {" "}
          <i className='fa-solid fa-magnifying-glass'></i>
        </span>
        {searchShow ? (
          <SearchModal setSearchShow={setSearchShow} searchShow={searchShow} />
        ) : null}
      </div>
    </nav>
  );
}

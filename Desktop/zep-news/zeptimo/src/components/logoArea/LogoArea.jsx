import "./logoArea.css";
import React from "react";
import Audio from "../audio/Audio";
import { Link } from "react-router-dom";

import LogoArea from "../../assets/logos/logoArea.png";

export default function Logo() {
  return (
    <div className='logoArea'>
      <div className='image'>
        <Link to='/'>
          <img className='logoImg' src={LogoArea} alt='logo' />
        </Link>
      </div>
      <div className='play'>
        <Audio className='audio' />
      </div>

      <br />
      <br />
      <br />
      <br />

      <h2>Una Revista de Zeptimo Producciones</h2>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../../assets/logos/logoWhite.png";
import "./logoSingle.css";

export default function LogoSingle() {
  return (
    <div className='logoSingle'>
      <div className='image-logo'>
        <Link to='/'>
          <img className='logoImgSingle' src={LogoWhite} alt='logo' />
        </Link>
      </div>
    </div>
  );
}

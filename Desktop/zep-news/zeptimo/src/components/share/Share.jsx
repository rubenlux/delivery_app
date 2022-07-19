import React from "react";
import { Link } from "react-router-dom";
import "./share.css";

export default function Share() {
  return (
    <div className='flx'>
      <div className='demo-content'>
        <div className='nshare'>
          <a className='nshare-item nshare-fb' href='#'>
            <i className='fab fa-facebook'></i>
          </a>
          <a className='nshare-item nshare-tt' href='#'>
            <i className='fab fa-twitter'></i>
          </a>
          <a className='nshare-item nshare-pt' href='#'>
            <i className='fab fa-instagram'></i>
          </a>

          <a className='nshare-item nshare-rd' href='#'>
            <i className='fab fa-linkedin'></i>
          </a>

          <a className='nshare-item nshare-ws' href='#'>
            <i className='fab fa-whatsapp'></i>
          </a>
          <a className='nshare-item nshare-tlg' href='#'>
            <i className='fab fa-telegram-plane'></i>
          </a>
          <a className='nshare-item nshare-msj' href='#'>
            <i className='fas fa-envelope'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

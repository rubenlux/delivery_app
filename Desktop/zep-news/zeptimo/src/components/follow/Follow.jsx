import React from "react";
import "./follow.css";

const Follow = () => {
  return (
    <div className='follow'>
      <h2 className='widget-title'></h2>
      <div className='social_shares'>
        <a
          href='https://www.facebook.com/Zeptimo-10459909824098/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='follow_icon'>
            <i className='fa-brands fa-facebook fa-2x'></i>
          </span>
        </a>
        <a href=''>
          <span className='follow_icon'>
            <i className='fa-brands fa-twitter fa-2x'></i>
          </span>
        </a>
        <a href=''>
          <span className='follow_icon'>
            <i className='fa-brands fa-youtube fa-2x'></i>
          </span>
        </a>
        <a href='https://www.instagram.com/zeptimo_producciones/?hl=es'>
          <span className='follow_icon'>
            <i className='fa-brands fa-instagram fa-2x'></i>
          </span>
        </a>

        <a href=''>
          <span className='follow_icon'>
            <i class='fa-brands fa-tiktok fa-2x'></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Follow;

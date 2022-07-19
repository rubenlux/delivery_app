import React from "react";
import git from "../../assets/slider/git.jpg";
import catupecu from "../../assets/slider/catupecu.jpg";
import luis from "../../assets/slider/luis-alberto-spinetta.jpg";
import soda from "../../assets/slider/soda-stereo.jpg";

import "./slider.css";

export default function Slider() {
  return (
    <div className='box1'>
      <div className='conttainer'>
        <div className='box'>
          <div className='imgBx'>
            <img src={git} alt='' />
          </div>
          <div className='content'>
            <div>
              <h2>Image Title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                accusamus molestias quidem iusto.
              </p>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='imgBx'>
            <img src={catupecu} alt='' />
          </div>
          <div className='content'>
            <div>
              <h2>Image Title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                accusamus molestias quidem iusto.
              </p>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='imgBx'>
            <img src={soda} alt='' />
          </div>
          <div className='content'>
            <div>
              <h2>Image Title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                accusamus molestias quidem iusto.
              </p>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='imgBx'>
            <img src={luis} alt='' />
          </div>
          <div className='content'>
            <div>
              <h2>Image Title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                accusamus molestias quidem iusto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

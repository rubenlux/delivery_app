import React, { useState } from "react";
import axios from "axios";
import "./searchModal.css";

const SearchModal = () => {
  const [title, setTitle] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.get("/posts/post" + title);
    console.log(response.data);
  };

  return (
    <div className='searching active'>
      <b>Presione la lupa para cerrar</b>
      <div className='container'>
        <div className='row'>
          <div className='col-8 text-center m-auto'>
            <div className='v1search_form'>
              <form onSubmit={submitHandler}>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type='search'
                  placeholder='Buscar aqui...'
                />
                <button type='submit' className='cbtn1'>
                  BUSCAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;

import React from "react";
import { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "./categories.css";

import axios from "axios";

export const Categories = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    setError(false);
    try {
      const res = await axios.post("/categories", {
        name,
      });
      console.log(res);
      Toastify({
        text: "Categoria creada",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
      setName("");
      window.location.reload();
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className='categories'>
      <span className='categoriesTitle'>CREAR PUBLICACIÓN</span>
      <form className='categoriesForm' onSubmit={handleSubmit} method='POST'>
        <label className='labelcat'>CREAR UNA CATEGORÍA</label>
        <input
          className='categoriesInput'
          value={name}
          name='name'
          placeholder='Nombre de la categoría'
          onChange={(e) => setName(e.target.value)}
        />

        <button className='btncat'>Crear</button>
      </form>
      {error && <p className='error'>Error al crear categoria</p>}
    </div>
  );
};

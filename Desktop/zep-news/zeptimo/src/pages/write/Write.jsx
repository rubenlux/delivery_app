import { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Categories } from "../../components/categories/Categories";
import axios from "axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import "./write.css";

import { useNavigate } from "react-router-dom";

export default function Write() {
  const { user } = useContext(Context);
  const [category, setCategory] = useState([]);
  const [error, setError] = useState(false);
  const Navigate = useNavigate();

  const [input, setInput] = useState({
    title: "",
    slug: "",
    img: "",
    excerpt: "",
    description: "",
    category: "",
  });
  console.log(input);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const { title, slug, img, excerpt, description, category } = input;
    const newPost = {
      username: user.username,
      profile_pic: user.profile_pic,
      title,
      slug,
      img,
      excerpt,
      description,
      category,
    }; //  data to send to server
    try {
      const res = await axios.post("/posts", newPost);
      Toastify({
        text: "Publicacion creada",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #6200B3, #DD403A)",
        },
      }).showToast();
      setInput({
        title: "",
        slug: "",
        img: "",
        excerpt: "",
        description: "",
        category: "",
      });
      Navigate("/");
    } catch (err) {
      console.log(err);
      alert("Error al crear la publicacion");
      setError(true);
    }
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      category: e.target.value,
    });
  };

  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await axios.get("/categories");
        setCategory(res.data);
        console.log(res);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    getCategory();
  }, []);

  return (
    <div className='write'>
      <div>
        <Categories />
      </div>
      <form className='writeForm' onSubmit={handleSubmit} method='post'>
        <div className='writeFormGroup'>
          <label>ELEGIR CATEGORÍA</label>

          <select
            className='writeFormSelect'
            name='category'
            onChange={handleSelect}
          >
            {category &&
              category.map((c) => {
                return (
                  <option value={c.nombre} key={c.name}>
                    {c.name.toUpperCase()}
                  </option>
                );
              })}
          </select>
          <div></div>

          <label htmlFor='fileInput'>
            <i className='fa-solid fa-file-arrow-up fa-2x'></i>
          </label>
          <input
            className='inputUrl'
            alt='not found'
            accept='image/* , video/*'
            type='url'
            value={input.img}
            name='img'
            placeholder='URL de imagen'
            onChange={handleChange}
          />
          <input
            className='writeInput'
            placeholder='Title'
            type='text'
            name='title'
            autoFocus={true}
            value={input.title}
            onChange={handleChange}
          />
          <input
            className='writeInput'
            placeholder='Slug'
            type='text'
            name='slug'
            value={input.slug}
            onChange={handleChange}
          />

          <input
            className='copete'
            type='text'
            placeholder='Copete'
            name='excerpt'
            value={input.excerpt}
            onChange={handleChange}
          />

          <textarea
            placeholder='Description'
            name='description'
            value={input.description}
            onChange={handleChange}
          />
        </div>
        <button className='btnSubmit' type='submit'>
          PUBLICAR
        </button>
      </form>
    </div>
  );
}

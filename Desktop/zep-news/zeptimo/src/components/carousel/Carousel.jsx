import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./carousel.css";

const Carrousel = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");

      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  return (
    <div className='carrusel'>
      <h1 className='title-post2'>
        TENDENCIAS
        <hr />
      </h1>

      <div className='carrusel-items'>
        {posts
          .slice(1, 4)

          .map((p, index) => (
            <div className='carrusel-item'>
              <Link to={`/posts/${p._id}`}>
                <img src={p.img} alt='post' key={index} />
              </Link>
            </div>
          ))}
      </div>
      <div className='carrusel-items3'>
        {posts
          .slice(1, 4)

          .map((p, index) => (
            <div className='carrusel-item'>
              <span className='date-carrusel'>
                {new Date(p.createdAt).toLocaleDateString()}
              </span>
            </div>
          ))}
      </div>
      <div className='carrusel-items2'>
        {posts
          .slice(1, 4)

          .map((p, index) => (
            <div className='carrusel-item'>
              <Link to={`/posts/${p._id}`}>
                <span className='titles'>{p.title}</span>
              </Link>
            </div>
          ))}
      </div>

      <div></div>
    </div>
  );
};

export default Carrousel;

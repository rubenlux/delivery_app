import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "./singlePost.css";
import LogoSingle from "../logoSingle/LogoSingle";
import Share from "../share/Share";

export default function SinglePost({ categories }) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const [input, setInput] = useState({
    category: "",
    title: "",
    slug: "",
    img: "",
    excerpt: "",
    desc: "",
  });
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`);

      setPost(res.data);
      setInput({
        category: res.data.category,
        title: res.data.title,
        excerpt: res.data.excerpt,
        desc: res.data.desc,
        img: res.data.img,
      });
      console.log(res.data);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/posts/${path}`, {
        data: { username: user.username },
      });

      Toastify({
        text: "Publicacion eliminada",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #6200B3, #DD403A)",
        },
      }).showToast();
      window.location.replace("/");
    } catch (err) {
      console.log(err);
      alert("Error al eliminar la publicacion");
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`/posts/${path}`, {
        username: user.username,
        category: input.category,
        title: input.title,
        slug: input.slug,
        excerpt: input.excerpt,
        desc: input.desc,
        img: input.img,
      });

      Toastify({
        text: "Publicacion actualizada",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #6200B3, #DD403A)",
        },
      }).showToast();
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Error al actualizar la publicacion");
    }
  };

  return (
    <div className='singlePost'>
      <LogoSingle />
      <div className='lista'></div>
      <br />
      <div className='singlePostWrapper'>
        <Link to='#'>
          <div className='cat'>{post.category}</div>
        </Link>

        {updateMode ? (
          <input
            className='writeInputUpdate'
            type='text'
            name='title'
            value={input.title}
            onChange={(e) => setInput({ ...input, title: e.target.value })}
            placeholder='Titulo'
          />
        ) : (
          <h1 className='singlePostTitle'>
            {post.title}
            {post.username === user?.username && (
              <div className='singlePostEdit'>
                {/* <i
                  className='singlePostIcon far fa-edit fa-2x'
                  onClick={() => setUpdateMode(true)}
                ></i> */}
                <script src='https://cdn.lordicon.com/xdjxvujz.js'></script>
                <lord-icon
                  src='https://cdn.lordicon.com/oclwxpmm.json'
                  trigger='loop'
                  styles='width:250px;height:250px'
                  onClick={() => setUpdateMode(true)}
                ></lord-icon>
                {/* <i
                  className='singlePostIcon far fa-trash-alt fa-2x'
                  onClick={handleDelete}
                ></i> */}
                <script src='https://cdn.lordicon.com/xdjxvujz.js'></script>
                <lord-icon
                  className='tach'
                  src='https://cdn.lordicon.com/qsloqzpf.json'
                  trigger='loop'
                  colors='primary:#121331'
                  onClick={handleDelete}
                ></lord-icon>
              </div>
            )}
          </h1>
        )}

        {updateMode ? (
          <input
            className='copete2'
            type='text'
            placeholder='Copete'
            name='excerpt'
            value={input.excerpt}
            onChange={(e) => setInput({ ...input, excerpt: e.target.value })}
          />
        ) : (
          <p className='singlePostExcer'>{post.excerpt}</p>
        )}

        <div className='singlePostInfo'>
          <span className='autor-post'>
            <img className='autorImg' src={post.profile_pic} alt='autor' />
            Por:
            <Link to={`/?user=${post.username}`} className='link'>
              <b> {post.username}</b>
            </Link>
          </span>
        </div>
        <div>
          <Share />
        </div>

        <br />

        <div>
          {post.img && <img className='singlePostImg' src={post.img} alt='' />}
        </div>
        <br />
        <br />
        <br />
        <span className='date'>{new Date(post.createdAt).toDateString()}</span>
        {updateMode ? (
          <textarea
            className='singlePostDescInput'
            name='desc'
            value={input.desc}
            onChange={(e) => setInput({ ...input, desc: e.target.value })}
          />
        ) : (
          <p className='singlePostDesc'>{post.desc}</p>
        )}
        <div
          class='fb-comments'
          data-href='https://developers.facebook.com/docs/plugins/comments#configurator'
          data-width=''
          data-numposts='10'
        ></div>

        {updateMode && (
          <button className='singlePostButton' onClick={handleUpdate}>
            ACTUALIZAR
          </button>
        )}
      </div>

      {/* <MoreNews /> */}
    </div>
  );
}

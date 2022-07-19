import "./register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile_pic, setProfile_pic] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
        profile_pic,
      });
      res.data && navigate("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className='register'>
      <span className='registerTitle'>CREAR CUENTA</span>
      <form className='registerForm' onSubmit={handleSubmit} method='POST'>
        <label></label>
        <input
          className='registerInput'
          value={profile_pic}
          name='imagen'
          pattern='https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$'
          title='FORMATO URL'
          placeholder='URL de imagen'
          onChange={(e) => setProfile_pic(e.target.value)}
        />

        <label></label>
        <input
          className='registerInput'
          type='text'
          placeholder='Usuario'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label></label>
        <input
          className='registerInput'
          type='email'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label></label>
        <input
          className='registerInput'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='registerButton' type='submit'>
          Registrarse
        </button>
      </form>
      <Link to='/login' className='link'>
        <button className='registerLoginButton'>Iniciar Sesión</button>
      </Link>

      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>ALGO SALIO MAL!</span>
      )}
    </div>
  );
}

import "./login.css";
import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch {
      dispatch({ type: "LOGIN_FAILED" });
      alert("Usuario o contraseña incorrectos");
      window.location.reload();
    }
  };

  return (
    <div className='login'>
      <span className='loginTitle'>ACCESO</span>
      <form className='loginForm' onSubmit={handleSubmit}>
        <label></label>
        <input
          className='loginInput'
          type='text'
          placeholder='Ingrese su usuario'
          ref={userRef}
        />
        <label></label>
        <input
          className='loginInput'
          type='password'
          placeholder='Ingrese su contraseña'
          ref={passwordRef}
        />
        <button className='loginButton' type='submit' disabled={isFetching}>
          ACCEDER
        </button>
      </form>
      <button className='loginRegisterButton'>Register</button>
    </div>
  );
}

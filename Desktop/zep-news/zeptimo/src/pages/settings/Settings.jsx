import { Context } from "../../context/Context";
import { useContext } from "react";
import { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import axios from "axios";
import "./settings.css";

export default function Settings() {
  const [profile_pic, setProfile_pic] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, dispatch } = useContext(Context);
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const upDatedUser = {
      userId: user._id,
      username,
      profile_pic,
      email,
      password,
    };
    try {
      const res = await axios.put(`/users/${user._id}`, upDatedUser);
      console.log(res);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      Toastify({
        text: "Perfil actualizado",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
      window.location.replace("/");
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    dispatch({ type: "DELETE_START" });
    const deleteUser = {
      userId: user._id,
      username: user.username,
      email: user.email,
      password: user.password,
    };
    try {
      const res = await axios.delete(`/users/${user._id}`, {
        data: deleteUser,
      });
      console.log(res);
      dispatch({ type: "DELETE_SUCCESS" });
      Toastify({
        text: "Perfil eliminado",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
      window.location.replace("/");
    } catch (error) {
      dispatch({ type: "DELETE_FAILURE" });
    }
  };

  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsTitleUpdate'>Actualiza tu cuenta</span>
          <button className='settingsBtnDelete' onClick={handleDelete}>
            Eliminar Cuenta
          </button>
        </div>
        <form className='settingsForm' onSubmit={handleSubmit}>
          <label></label>
          <div className='settingsPP'>
            <img src={user.profile_pic} alt='' />
            <label htmlFor='fileInput'>
              <i className='settingsPPIcon far fa-user-circle'></i>{" "}
            </label>
            <input
              id='fileInput'
              type='file'
              style={{ display: "none" }}
              className='settingsPPInput'
              onChange={(e) => {
                setProfile_pic(e.target.files[0]);
              }}
            />
          </div>
          <label></label>
          <input
            type='text'
            placeholder={user.username}
            name='name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label></label>
          <input
            type='email'
            placeholder={user.email}
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label></label>
          <input
            className='settingsPassword'
            type='password'
            placeholder='********'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='settingsSubmitButton' type='submit'>
            ACTUALIZAR
          </button>
        </form>
      </div>
    </div>
  );
}

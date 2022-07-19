import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import Contacto from "./pages/contacto/Contacto";
import { Context } from "./context/Context";
import { useContext } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Topbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/posts/:id' element={<Single />} />
        <Route path='/write' element={user ? <Write /> : <Login />} />
        <Route path='/settings' element={user ? <Settings /> : <Login />} />
        <Route path='/contact' element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

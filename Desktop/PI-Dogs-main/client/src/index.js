import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// Si desea comenzar a medir el rendimiento en su aplicación, pase una función
// para registrar resultados (por ejemplo: reportWebVitals (console.log))
// o enviar a un punto final de análisis. Más información: https://bit.ly/CRA-vitals
reportWebVitals();

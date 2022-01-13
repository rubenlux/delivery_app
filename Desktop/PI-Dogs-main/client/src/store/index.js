import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; // esto sirve para que funcione el redux dev tools
import thunk from "redux-thunk"; //redux thunk sirve para trabajar todo lo que es la llamada asincrona
import rootReducer from "../reducer";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

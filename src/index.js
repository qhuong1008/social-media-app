import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import { DarkModeContextProvider } from "./context/darkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <App />
        <ToastContainer />
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);

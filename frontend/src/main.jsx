<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
>>>>>>> 224b4b7b1b26f33d81c01ca0c5b026cc43010329

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
<<<<<<< HEAD
    <App />
=======
    <Provider store={store}>
      <App />
    </Provider>
>>>>>>> 224b4b7b1b26f33d81c01ca0c5b026cc43010329
  </StrictMode>
);
 
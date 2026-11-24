import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
<<<<<<< HEAD

ReactDOM.createRoot(document.getElementById("root")).render(
  <><React.StrictMode /><App /></>

import React from "react";
import ReactDOM from "react-dom/client";
=======
>>>>>>> 2994b0ba43deb20067084eebdf77f07959398287
import { BrowserRouter } from "react-router-dom";

import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
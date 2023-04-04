import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./styles/wp-style.css";
import App from "./App";
import "./configurations/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

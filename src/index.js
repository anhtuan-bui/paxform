import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./styles/wp-style.css";
import App from "./App";
import "./configurations/i18n";
import ReactGA from "react-ga4";

ReactGA.initialize("G-5292QTP0VT");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

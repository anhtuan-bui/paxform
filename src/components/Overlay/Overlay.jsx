import React from "react";
import './Overlay.scss';

export default function Overlay({ callback }) {
  //   const openFooterOverlay = () => {
  //     const footerOverlay = document.querySelector(".footer__overlay");
  //     footerOverlay.classList.add("footer__overlay--display");
  //   };

  const closeOverlay = () => {
    const overlay = document.querySelector(".overlay");
    overlay.classList.remove("overlay--display");
  };

  const handleOverlayClick = () => {
    closeOverlay();
    callback();
  };
  return (
    <div
      className="overlay"
      onClick={(e) => handleOverlayClick(e)}
    ></div>
  );
}

import React from "react";
import "./BackgroundGradient.scss";

export default function BackgroundGradient(props) {
  const blue = "#0a61b4";
  const backgroundGradientBlue = [blue, "#074581"];
  const backgroundGradient = props.backgroundGradient
    ? props.backgroundGradient
    : backgroundGradientBlue;
  const className = props.className;
  return (
    <div
      className={`background_gradient ${className ? className : ""}`}
      style={{
        background: `linear-gradient(104.14deg, ${backgroundGradient[0]} 20.63%, ${backgroundGradient[1]} 177.09%)`,
      }}
    ></div>
  );
}

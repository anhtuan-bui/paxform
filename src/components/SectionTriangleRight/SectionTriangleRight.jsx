import React from "react";
import "./SectionTriangleRight.scss";

export default function TriangleRight(props) {
  let variant = props.variant ? `section_triangle_right--${props.variant}` : '';
  let className = props.className ? props.className : '';
  let position = props.position ? 'section_triangle_right--absolute' : ''
  
  return (
    <svg
      className={`section_triangle_right ${className} ${position}`}
      viewBox="0 0 1440 135"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon className={variant} points="0 0, 0 135, 1440 135" />
    </svg>
  );
}

import React from "react";
import './Author.scss';

const Author = props => {
  console.log(props)
  return (
    <div className="author">
      <div className="author__wrapper">
        {/* props.avatar accepts an image tag <img /> */}
        {props.avatar}
        <div className="author__info">
          <div className="author__name">{props.name}</div>
          <div className="author__title">{props.displayName}</div>
        </div>
      </div>
    </div>
  );
}

export default Author

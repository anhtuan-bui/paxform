import React from "react";
import './Author.scss';

export default function Author({author}) {
  return (
    <div className="author">
      <div className="author__avatar">
        <img src={"sampleAuthorAvatar"} alt="author avatar" />
      </div>
      <div className="author_info">
        <h4 className="author__name">Jane Cooper</h4>
        <p className="author__occupation">Marketing</p>
      </div>
    </div>
  );
}

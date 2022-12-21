import React from "react";
import './Author.scss';

export default function Author(props) {
  const author = props.author?.node;

  return (
    <div className="author">
      <div className="author__avatar">
        <img src={author?.avatar.url} alt="author avatar" />
      </div>
      <div className="author_info">
        <h4 className="author__name">{author?.firstName || author?.lastName ? `${author.firstName ? author.firstName : ''} ${author.lastName? author.lastName : ''}` : `@${author?.username}`}</h4>
        <p className="author__occupation">{author?.roles?.edges[0]?.node?.displayName}</p>
      </div>
    </div>
  );
}

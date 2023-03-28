import React from "react";
import "./Author.scss";

export default function Author(props) {
  const author = props.author?.node;

  const authorAvatarUrl = author?.avatar.url;
  const authorName =
    author?.firstName || author?.lastName
      ? `${author.firstName ? author.firstName : ""} ${
          author.lastName ? author.lastName : ""
        }`
      : `@${author?.username}`;
  const authorTitle = author?.roles?.edges[0]?.node?.displayName;
  return (
    <div className="author">
      <div className="author__avatar">
        <img src={authorAvatarUrl} alt="author avatar" />
      </div>
      <div className="author_info">
        <h4 className="author__name">{authorName}</h4>
        <p className="author__occupation">{authorTitle}</p>
      </div>
    </div>
  );
}

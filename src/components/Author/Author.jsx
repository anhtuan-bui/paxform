import React from "react";
import Skeleton from "react-loading-skeleton";
import "./Author.scss";

//  How to use
// add the post contain the author in data prop

export default function Author(props) {
  const author = props.author?.node;
  const authorNameString =
    author?.firstName || author?.lastName
      ? `${author?.firstName ? author?.firstName : ""} ${
          author?.lastName ? author?.lastName : ""
        }`
      : author?.name
      ? `@${author?.username}`
      : "";

  const authorAvatarUrl = author?.avatar.url;

  const authorName = authorNameString ? (
    authorNameString
  ) : (
    <Skeleton width={100} />
  );

  const authorTitle = author ? (
    author?.roles?.nodes[0]?.displayName
  ) : (
    <Skeleton width={75} />
  );
  return (
    <div className={`author ${props.className ? props.className : ""}`}>
      {author ? (
        <div className="author__avatar">
          <img src={authorAvatarUrl} alt="author avatar" />
        </div>
      ) : (
        <Skeleton width={50} height={50} style={{ borderRadius: "50%" }} />
      )}
      <div className="author_info">
        <h4 className="author__name">{authorName}</h4>
        <p className="author__occupation">{authorTitle}</p>
      </div>
    </div>
  );
}

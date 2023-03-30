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
      : author?.name !== undefined ? `@${author?.username}` : '';

  const authorAvatarUrl = author?.avatar.url;
  const authorName = author ? authorNameString : <Skeleton width={100}/>;
  const authorTitle = author ? (
    author?.roles?.nodes[0]?.displayName
  ) : (
    <Skeleton width={60}/>
  );
  return (
    <div className="author">
      <div className="author__avatar">
        {author ? (
          <img src={authorAvatarUrl} alt="author avatar" />
        ) : (
          <Skeleton height="50px" width="50px" borderRadius="50%" />
        )}
      </div>
      <div className="author_info">
        <h4 className="author__name">{authorName}</h4>
        <p className="author__occupation">{authorTitle}</p>
      </div>
    </div>
  );
}

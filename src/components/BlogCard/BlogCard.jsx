import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { scrollTop } from "../../lib/util";
import ReadArticle from "../ReadArticle/ReadArticle";
import "./BlogCard.scss";

const Blog = ({ blog, className, loading }) => {
  const author = blog?.author?.node;
  const authorNameString =
    author?.firstName || author?.lastName
      ? `${author?.firstName ? author?.firstName : ""} ${
          author?.lastName ? author?.lastName : ""
        }`
      : author?.name
      ? `@${author?.username}`
      : "";

  const authorImage = author?.avatar?.url;

  const authorName = blog ? authorNameString : <Skeleton width={100} />;

  const firstParagraph = blog?.content?.split("</p>")[0].split("<p>")[1];
  const story = blog ? (
    blog?.categories?.nodes[0].name
  ) : (
    <Skeleton width={75} />
  );
  const time = blog ? (
    new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
      day: "2-digit",
    }).format(new Date(blog?.date))
  ) : (
    <Skeleton width={80} />
  );
  const title = blog ? blog?.title : <Skeleton width={"75%"} />;

  const link = `/blogs/${blog?.slug}`;

  return (
    <div className={`post ${className}`}>
      {blog ? (
        <Link to={link} onClick={scrollTop}>
          <img
            className="post__image"
            src={blog?.featuredImage?.node?.sourceUrl}
            alt="blog sample"
          />
        </Link>
      ) : (
        <Skeleton className="post__image" />
      )}
      <div className="post__category-box">
        <p className="post__name section_name post__name--blue">{story}</p>
        <p className="post__date">{time}</p>
      </div>
      <h2 className="post__title">
        <Link className="link--black" to={link} onClick={scrollTop}>
          {title}
        </Link>
      </h2>

      {blog ? (
        <p
          className="post__summary"
          dangerouslySetInnerHTML={{ __html: firstParagraph }}
        ></p>
      ) : (
        <p className="post__summary">
          <Skeleton />
          <Skeleton width={"75%"} />
        </p>
      )}

      <div className="post__author">
        {blog ? (
          <img
            className="post__author-image"
            src={authorImage}
            alt={authorName}
          />
        ) : (
          <Skeleton className="post__author-image" />
        )}
        <p className="post__author-name">{authorName}</p>
      </div>
      <ReadArticle loading={loading} to={link} />
    </div>
  );
};

export default Blog;

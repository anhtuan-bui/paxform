import React from "react";
import ReadArticle from "../ReadArticle/ReadArticle";
import "./BlogCard.scss";

const Blog = (props) => {
  const blog = props.blog;
  const authorImage = blog.author.node.avatar.url;
  const authorName =
    blog.author.node.firstName +
    (blog.author.node.lastName ? " " + blog.author.node.lastName : "");

  const firstParagraph = blog.content.split("</p>")[0].split("<p>")[1];
  return (
    <div className={`post ${props.className}`}>
      <img
        className="post__image"
        src={blog.featuredImage.node.sourceUrl}
        alt="blog sample"
      />
      <div className="post__category-box">
        <p className="post__name section_name post__name--blue">
          {blog.categories.edges[0].node.name || "Story"}
        </p>
        <p className="post__date">
          {new Intl.DateTimeFormat("en-US", {
            month: "short",
            year: "numeric",
            day: "2-digit",
          }).format(new Date(blog.date))}
        </p>
      </div>
      <h2 className="post__title">{blog.title}</h2>

      <p
        className="post__summary"
        dangerouslySetInnerHTML={{ __html: firstParagraph }}
      ></p>

      <div className="post__author">
        <img
          className="post__author-image"
          src={authorImage}
          alt={authorName}
        />
        <p className="post__author-name">{authorName}</p>
      </div>
      <ReadArticle />
    </div>
  );
};

export default Blog;

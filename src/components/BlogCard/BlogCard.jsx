import React from "react";
import Author from "../Author/Author";
import ReadArticle from "../ReadArticle/ReadArticle";
import "./BlogCard.scss";

const Blog = ({ blog }) => {
  const firstParagraph = blog.content.split("</p>")[0].split("<p>")[1];
  return (
    <div className="post">
      <div className="post__content">
        <div className="post__content-box">
          <p className="post__name section_name post__name--blue">Story</p>
          <h2 className="post__title">{blog.title}</h2>
          <p
            className="post__summary"
            dangerouslySetInnerHTML={{ __html: firstParagraph }}
          ></p>
          <ReadArticle />
        </div>

        <div className="author_box">
          <Author author={blog.author}/>
          <p className="author_box__date">{new Intl.DateTimeFormat("en-US", {
            month: "long",
            year: "numeric",
            day: "2-digit",
          }).format(new Date(blog.date))}</p>
        </div>
      </div>
      <div className="post__image">
        <img src={blog.featuredImage.node.sourceUrl} alt="blog sample" />
      </div>
    </div>
  );
};

export default Blog;

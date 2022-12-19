import React from 'react';
import Author from '../Author/Author';
import ReadArticle from '../ReadArticle/ReadArticle';
import './Blog.scss';

const Blog = ({blog}) => {
    return (
      <div className="post">
        <div className="post__content">
          <div className="post__content-box">
            <p className="post__name section_name post__name--blue">Story</p>
            <h2 className="post__title">Top 10 Time Management Challenges</h2>
            <p className="post__summary">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour
            </p>
            <ReadArticle />
          </div>
  
          <div className="author_box">
            <Author />
            <p className="author_box__date">December 25, 2021</p>
          </div>
        </div>
        <div className="post__image">
          <img src={"blogSampleImg"} alt="blog sample" />
        </div>
      </div>
    );
  };
  
export default Blog;
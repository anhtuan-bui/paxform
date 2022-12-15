import React, { Component } from "react";
import "./Blog.scss";
import ReadArticle from "../../components/ReadArticle/ReadArticle";
import blogSampleImg from "../../assets/images/blog-sample-img.png";
import sampleAuthorAvatar from "../../assets/images/sample-author-avatar.png";
import Button from "../../components/Button/Button";

export default class Blog extends Component {
  blogs = { chip: "all" };

  constructor(props) {
    super(props);

    this.state = this.blogs;
  }

  handleRadioChange = (event) => {
    this.blogs.chip = event.target.id;
    this.setState(this.blogs);
  };
  render() {
    return (
      <main className="blog">
        <section className="hero" background="light">
          <div className="container">
            <div className="hero_blog">
              <div className="hero_blog__wrapper">
                <div className="hero_blog__image">
                  <img src={blogSampleImg} alt="blog hero" />
                </div>
                <div className="hero_blog__content">
                  <div className="hero_blog__content-box">
                    <p className="section_name hero_blog__name">BLOG TODAYS</p>
                    <h1 className="hero_blog__title">
                      The printing and typesetting industry.
                    </h1>
                    <p className="hero_blog__summary">
                      Paxform will never share your data with anyone. What’s
                      more, no one at Paxform can view or access your
                      information.
                    </p>
                    <ReadArticle />
                  </div>

                  <div className="author">
                    <div className="author__avatar">
                      <img src={sampleAuthorAvatar} alt="author avatar" />
                    </div>
                    <div className="author_info">
                      <h4 className="author__name">Jane Cooper</h4>
                      <p className="author__occupation">Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero_graphic"></div>
            </div>
          </div>
          <div className="bottom_triangle bottom_triangle--white"></div>
        </section>

        <section className="posts">
          <div className="container">
            <div className="chips">
              <div className="chip">
                <input
                  id="all"
                  type="radio"
                  name="radio"
                  onChange={this.handleRadioChange}
                  checked={this.state.chip === "all"}
                />
                <label htmlFor="all">All</label>
              </div>
              <div className="chip">
                <input
                  id="insight"
                  type="radio"
                  name="radio"
                  onChange={this.handleRadioChange}
                  checked={this.state.chip === "insight"}
                />
                <label htmlFor="insight">Insight</label>
              </div>
              <div className="chip">
                <input
                  id="update"
                  type="radio"
                  name="radio"
                  onChange={this.handleRadioChange}
                  checked={this.state.chip === "update"}
                />
                <label htmlFor="update">Update</label>
              </div>
            </div>

            <div className="posts_view">
              <div className="post">
                <div className="post__content">
                  <div className="post__content-box">
                    <p className="post__name section_name post__name--blue">Story</p>
                    <h2 className="post__title">
                      Top 10 Time Management Challenges
                    </h2>
                    <p className="post__summary">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour
                    </p>
                    <ReadArticle />
                  </div>

                  <div className="author_box">
                    <div className="author">
                      <div className="author__avatar">
                        <img src={sampleAuthorAvatar} alt="author avatar" />
                      </div>
                      <div className="author_info">
                        <h4 className="author__name">Jane Cooper</h4>
                        <p className="author__occupation">Marketing</p>
                      </div>
                    </div>
                    <p className="author_box__date">December 25, 2021</p>
                  </div>
                </div>
                <div className="post__image">
                    <img src={blogSampleImg} alt="blog sample" />
                </div>
              </div>

              <div className="post">
                <div className="post__content">
                  <div className="post__content-box">
                    <p className="post__name section_name post__name--blue">Story</p>
                    <h2 className="post__title">
                      Top 10 Time Management Challenges
                    </h2>
                    <p className="post__summary">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour
                    </p>
                    <ReadArticle />
                  </div>

                  <div className="author_box">
                    <div className="author">
                      <div className="author__avatar">
                        <img src={sampleAuthorAvatar} alt="author avatar" />
                      </div>
                      <div className="author_info">
                        <h4 className="author__name">Jane Cooper</h4>
                        <p className="author__occupation">Marketing</p>
                      </div>
                    </div>
                    <p className="author_box__date">December 25, 2021</p>
                  </div>
                </div>
                <div className="post__image">
                    <img src={blogSampleImg} alt="blog sample" />
                </div>
              </div>

              <div className="post">
                <div className="post__content">
                  <div className="post__content-box">
                    <p className="post__name section_name post__name--blue">Story</p>
                    <h2 className="post__title">
                      Top 10 Time Management Challenges
                    </h2>
                    <p className="post__summary">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour
                    </p>
                    <ReadArticle />
                  </div>

                  <div className="author_box">
                    <div className="author">
                      <div className="author__avatar">
                        <img src={sampleAuthorAvatar} alt="author avatar" />
                      </div>
                      <div className="author_info">
                        <h4 className="author__name">Jane Cooper</h4>
                        <p className="author__occupation">Marketing</p>
                      </div>
                    </div>
                    <p className="author_box__date">December 25, 2021</p>
                  </div>
                </div>
                <div className="post__image">
                    <img src={blogSampleImg} alt="blog sample" />
                </div>
              </div>

            </div>

            <div className="view_more">

            <Button text="View all posts" type="arrow outline" arrowVariant="down" color="green"/>
            </div>

          </div>
          <div className="bottom_triangle bottom_triangle--footer"></div>
        </section>
      </main>
    );
  }
}

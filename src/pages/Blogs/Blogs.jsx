import React, { Component } from "react";
import "./Blogs.scss";
import ReadArticle from "../../components/ReadArticle/ReadArticle";
import blogSampleImg from "../../assets/images/blog-sample-img.png";
import Button from "../../components/Button/Button";
import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
import Blog from "../../components/Blog/Blog";
import Author from "../../components/Author/Author";

export default class Blogs extends Component {
  blogs = { chip: "all" };

  constructor(props) {
    super(props);

    this.state = this.blogs;
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    const heroBlog = document.querySelector(".hero_blog");
    const heroBlogWrapper = document.querySelector(".hero_blog__wrapper");

    heroBlog.style.height =
      parseInt(window.getComputedStyle(heroBlogWrapper).height.split("px")) -
      92 +
      "px";
  }

  handleRadioChange(event) {
    this.blogs.chip = event.target.id;
    this.setState(this.blogs);
  }


  render() {
    return (
      <main className="blogs">
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

                  <Author />
                </div>
              </div>
              <div className="hero_graphic"></div>
            </div>
          </div>
          <SectionTriangleRight variant="white" />
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

              <Blog/>

            </div>

            <div className="view_more">
              <Button
                text="View all posts"
                type="arrow outline"
                arrowVariant="down"
                color="green"
              />
            </div>
          </div>
          <SectionTriangleRight variant="footer" />
        </section>
      </main>
    );
  }
}


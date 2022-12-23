import React, { Component, Fragment } from "react";
import "./Blogs.scss";
import ReadArticle from "../../components/ReadArticle/ReadArticle";
import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
import Author from "../../components/Author/Author";
import BlogsView from "../../components/BlogView/BlogsView";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../../lib/graphqlQuery";

export default class Blogs extends Component {
  blogs = { chip: "all", firstBlogEndCursor: "" };

  constructor(props) {
    super(props);

    this.state = this.blogs;
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  componentDidMount() {
    // this.blog.firstBlogEndCursor = this.getFirstBlogEndCursor();
    // this.handleResize();
    // window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    // window.removeEventListener("resize", this.handleResize);
  }

  // handleResize() {
  //   const heroBlog = document.querySelector(".hero_blog");
  //   const heroBlogWrapper = document.querySelector(".hero_blog__wrapper");

  //   heroBlog.style.height =
  //     parseInt(window.getComputedStyle(heroBlogWrapper).height.split("px")) -
  //     92 +
  //     "px";
  // }

  handleRadioChange(event) {
    this.blogs.chip = event.target.id;
    this.setState(this.blogs);
  }

  getFirstBlogEndCursor(cursor) {
    console.log(cursor)
  }

  render() {
    return (
      <main className="blogs">
        <section className="hero" background="light">
          <div className="container">
            <div className="hero_blog">
              <div className="hero_blog__wrapper">
                <HeroBlogInfo firstBlogEndCursor={this.getFirstBlogEndCursor} />
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
                  id="story"
                  type="radio"
                  name="radio"
                  onChange={this.handleRadioChange}
                  checked={this.state.chip === "story"}
                />
                <label htmlFor="story">Story</label>
              </div>
              <div className="chip">
                <input
                  id="unauthorized"
                  type="radio"
                  name="radio"
                  onChange={this.handleRadioChange}
                  checked={this.state.chip === "unauthorized"}
                />
                <label htmlFor="unauthorized">Unauthorized</label>
              </div>
            </div>

            <BlogsView
              chip={this.state.chip}
            />
          </div>
          <SectionTriangleRight variant="footer" />
        </section>
      </main>
    );
  }
}

const HeroBlogInfo = () => {
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { first: 1, after: null },
    fetchPolicy: 'no-cache'
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ErrorL {error}</p>;

  const blog = data.posts.edges[0].node;

  // Get the first paragraph of the blog
  const firstParagraph = blog.content.split("</p>")[0].split("<p>")[1];

  return (
    <Fragment>
      <div className="hero_blog__image">
        <img src={blog.featuredImage.node.sourceUrl} alt="blog hero" />
      </div>
      <div className="hero_blog__content">
        <div className="hero_blog__content-box">
          <p className="section_name hero_blog__name">BLOG TODAYS</p>
          <h1 className="hero_blog__title">{blog.title}</h1>
          <p
            className="hero_blog__summary"
            dangerouslySetInnerHTML={{
              __html: firstParagraph,
            }}
          ></p>
          <ReadArticle id={blog.id} />
        </div>

        <Author author={blog.author} />
      </div>
    </Fragment>
  );
};

import React, { Component } from "react";
import "./ReadArticle.scss";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";
export default class ReadArticle extends Component {
  render() {
    // When the Read Article link is clicked on the related card the page will scroll up to the top
    const scrollTop = () => {
      window.scrollTo(0, 0);
    }
    return (
      <Link className="read_article" to={this.props.to} onClick={scrollTop}>
        <span>Read Article</span>
        <ArrowRight className="read_article__arrow"/>
      </Link>
    );
  }
}

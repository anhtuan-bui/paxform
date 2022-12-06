import React, { Component } from "react";
import "./ReadArticle.scss";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";
export default class ReadArticle extends Component {
  render() {
    return (
      <Link className="read_article span--hover" to={this.props.to}>
        <span>Read Article</span>
        <ArrowRight />
      </Link>
    );
  }
}

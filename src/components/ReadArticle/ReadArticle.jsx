import React, { Fragment } from "react";
import "./ReadArticle.scss";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";
import Skeleton from "react-loading-skeleton";
export default function ReadArticle({ to, loading }) {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Link className="read_article" to={to} onClick={scrollTop}>
      {!loading ? (
        <Fragment>
          <span>Read Article</span>
          <ArrowRight className="read_article__arrow" />
        </Fragment>
      ) : (
        <Skeleton width={100} />
      )}
    </Link>
  );
}

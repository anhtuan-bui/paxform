import React, { Fragment } from "react";
import "./ReadArticle.scss";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";
import Skeleton from "react-loading-skeleton";
import { scrollTop } from "../../lib/util";
import { useTranslation } from "react-i18next";
export default function ReadArticle({ to, loading }) {
  const {t} = useTranslation()
 
  return (
    <Link className="read_article" to={to} onClick={scrollTop}>
      {!loading ? (
        <Fragment>
          <span>{t("readArticle")}</span>
          <ArrowRight className="read_article__arrow" />
        </Fragment>
      ) : (
        <Skeleton width={100} />
      )}
    </Link>
  );
}

import React, { Fragment, useEffect, useState } from "react";
import "./LegalDetail.scss";
import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
import { useQuery } from "@apollo/client";
import {
  GET_LEGAL_BY_SLUG,
  GET_LEGAL_CATEGORIES,
} from "../../lib/graphqlQuery";
import Skeleton from "react-loading-skeleton";
import { Link, useLocation } from "react-router-dom";

import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";

export default function LegalDetail() {
  const [pageTitle, setPageTitle] = useState("");
  const loadTitle = (title) => {
    setPageTitle(title);
  };
  const { loading: legalDetailLoading, data: legalDetailData } =
    useQuery(GET_LEGAL_CATEGORIES);

  const legalDetailCategories = !legalDetailLoading
    ? [...legalDetailData.legalCategories.nodes].sort(
        (a, b) => a.order - b.order
      )
    : Array.from({ length: 3 }, (i = 0) => i++);

  return (
    <main className="legal_detail">
      <section className="hero">
        <div className="container hero__wrapper">
          <div className="hero__content">
            <h1 className="hero__title">
              {pageTitle ? pageTitle : <Skeleton />}
            </h1>
          </div>
        </div>
        <div className="bottom_triangle bottom_triangle--white"></div>
      </section>

      <section className="legal_detail__content">
        <div className="container">
          <div className="legal_detail__wrapper">
            <div className="legal_detail__sidebar">
              {legalDetailCategories.map((legalDetailCategory, index) => (
                <SidebarGroup
                  category={legalDetailCategory}
                  loading={legalDetailLoading}
                  key={index}
                />
              ))}
            </div>
            <div className="legal_detail__legal">
              <LegalBreadscrumb
                title={pageTitle}
                loading={legalDetailLoading}
              />
              <LegalContent loadTitle={loadTitle} />
            </div>
          </div>
        </div>
        <SectionTriangleRight variant="footer" />
      </section>
    </main>
  );
}

const LegalBreadscrumb = ({ title, loading }) => {
  let location = useLocation().pathname.split("/");
  location = location.splice(1, location.length - 1);

  const pageTitle = title.toLowerCase();
  return (
    <div className="legal_detail__breadscrumb">
      {!loading ? (
        location.map((loca, index) =>
          index !== location.length - 1 ? (
            <Fragment key={index}>
              <Link
                className="breadscrumb__link"
                to={index === 0 ? `/${loca}` : `/legal/${loca}`}
              >
                {loca.split("-").join(" ")}
              </Link>
              <ArrowRight className="breadscrumb__arrow-right" />
            </Fragment>
          ) : (
            <span className="breadscrumb__page-title" key={index}>
              {pageTitle}
            </span>
          )
        )
      ) : (
        <Fragment>
          <Link className="breadscrumb__link-skeleton">
            <Skeleton />
          </Link>
          <ArrowRight />
          <Link className="breadscrumb__link-skeleton">
            <Skeleton />
          </Link>
          <ArrowRight />
          <span className="breadscrumb__page-title-skeleton">
            <Skeleton />
          </span>
        </Fragment>
      )}
    </div>
  );
};

const SidebarGroup = ({ category, loading }) => {
  const categoryName = !loading ? category.name : <Skeleton />;
  const legals = !loading
    ? [...category.legals.nodes].sort((a, b) => a.title.localeCompare(b.title))
    : Array.from({ length: 5 }, (i = 0) => i++);

  return (
    <div className="legal_detail__group">
      <h4 className="legal_detail__group-title">{categoryName}</h4>
      <ul className="legal_detail__group-items">
        {legals.map((legal, index) => (
          <SidebarItem
            category={category}
            legal={legal}
            loading={loading}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

const SidebarItem = ({ category, legal, loading }) => {
  const title = !loading ? legal.title.toLowerCase() : <Skeleton />;
  return (
    <li className="legal_detail__group-item">
      <Link
        className="legal_detail__group-item-link"
        to={`/legal/${category.slug}/${legal.slug}`}
      >
        {title}
      </Link>
    </li>
  );
};

const LegalContent = ({ loadTitle }) => {
  const path = useLocation().pathname;
  const slug = path.split("/").at(-1);
  const { loading, data } = useQuery(GET_LEGAL_BY_SLUG, {
    variables: { slug: slug },
  });
  const legal = !loading ? data.legalBy : "";

  const navigateToLegal = () => {
    window.location.href = "/legal";
  };

  if (!legal && !loading) {
    navigateToLegal();
  }

  const content = legal?.content;
  const contentLoadingArray = Array.from({ length: 2 });

  useEffect(() => {
    if (!loading) {
      loadTitle(legal?.title);
    }
  }, [legal?.title, loading, loadTitle]);

  return (
    <div className="legal_detail__detail-box">
      {!loading ? (
        <div
          className="legal_detail__detail-content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      ) : (
        contentLoadingArray.map((_item, index) => (
          <div key={index}>
            <h2>
              <Skeleton />
            </h2>
            <p>
              <Skeleton count={5} />
            </p>
            <p>
              <Skeleton count={5} />
            </p>
          </div>
        ))
      )}
    </div>
  );
};

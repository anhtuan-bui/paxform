import { useQuery } from "@apollo/client";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { GET_LEGAL_CATEGORIES } from "../../lib/graphqlQuery";
import "./Legal.scss";

import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
import { useTranslation } from "react-i18next";
import { queryLanguageCode } from "../../lib/util";

export default function Legal() {
  const { t } = useTranslation();
  const { loading, data } = useQuery(GET_LEGAL_CATEGORIES, {
    variables: { language: queryLanguageCode() },
  });

  const legalCategories = !loading
    ? [...data?.legalCategories?.nodes].sort((a, b) => a.order - b.order)
    : Array.from({ length: 6 });
  return (
    <main className="legal">
      <section className="hero">
        <div className="container ">
          <div className="hero__wrapper">
            <div className="hero__content">
              <h1 className="hero__title">{t("legalPage.title")}</h1>
              <p className="hero__description">{t("legalPage.description")}</p>
            </div>
          </div>
        </div>
        <SectionTriangleRight variant="white" />
      </section>
      <section className="category">
        <div className="container category__wrap">
          {legalCategories.map((category, index) => (
            <CategoryBox category={category} key={index} loading={loading} />
          ))}
        </div>

        <SectionTriangleRight variant="footer" />
      </section>
    </main>
  );
}

const CategoryBox = ({ category, loading }) => {
  const name = category ? category.name : <Skeleton />;
  const legals = !loading
    ? [...category?.legals?.nodes].sort((a, b) =>
        a.title.localeCompare(b.title)
      )
    : Array.from({ length: 4 });
  return (
    <div className="category__box">
      <div className="category__box__inner">
        <strong className="category__box-title">{name}</strong>
        {legals.map((legal, index) => (
          <LegalLink legal={legal} key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

const LegalLink = ({ legal, category }) => {
  const title = legal ? legal.title.toLowerCase() : <Skeleton />;
  const link = `/legal/${category?.slug}/${legal?.slug}`;
  return (
    <a className="category__box-link" href={link}>
      {title}
    </a>
  );
};

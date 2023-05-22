import React from "react";
import Button from "../Button/Button";
import RelatedCard from "../RelatedCard/RelatedCard";
import "./LatestBlogs.scss";
import { useQuery } from "@apollo/client";
import "react-loading-skeleton/dist/skeleton.css";

// import card1 from "../../assets/images/card1.png";
// import card2 from "../../assets/images/card2.png";
// import card3 from "../../assets/images/card3.png";
import { GET_BLOGS } from "../../lib/graphqlQuery";
import { useTranslation } from "react-i18next";
import { queryLanguageCode } from "../../lib/util";

export default function LatestBlogs({ triangleColor }) {
  const {t} = useTranslation();
  const { loading, data } = useQuery(GET_BLOGS, {
    variables: {
      first: 4,
      language: queryLanguageCode()
    },
  });

  const blogs = !loading ? data?.posts?.nodes : Array.from({ length: 4 });
  return (
    <section className="platform background--dark-blue platform__title--white">
      <div className="container platform__container">
        <div className="platform__top">
          <div className="platform__top-left">
            <p className="platform__name platform__name--green section_name">
              {t("latestBlogs.name")}
            </p>
            <h2 className="platform__title section_title">
              {t("latestBlogs.title")}
            </h2>
          </div>
          <div className="platform__top-right">
            <Button type="outline arrow" text={t("latestBlogs.button")} href='/blogs'/>
          </div>
        </div>
        <div className="platform__content">
          {blogs?.map((blog, index) => (
            <RelatedCard
              key={index}
              data={blog}
              readLink={true}
              background="dark"
              term="blogs"
              loading={loading}
            />
          ))}
        </div>
      </div>
      <div
        className={`bottom_triangle bottom_triangle--${triangleColor}`}
      ></div>
    </section>
  );
}

import React, { Fragment, useEffect, useState } from "react";
import ResourceCard from "../../components/ResourceCard/ResourceCard";
import "./Resources.scss";

// import graphic from "../../assets/images/Graphics.svg";
import RelatedCard from "../../components/RelatedCard/RelatedCard";

// import card1 from "../../assets/images/card1.png";
// import card2 from "../../assets/images/card2.png";
// import card3 from "../../assets/images/card3.png";
import Button from "../../components/Button/Button";

import shapeHeader from "../../assets/images/Resources/Shape header.svg";
import ReadyGet from "../../components/ReadyGet/ReadyGet";
import LatestBlogs from "../../components/LatestBlogs/LatestBlogs";
import { useQuery } from "@apollo/client";

import {
  GET_FIRST_TWO_RESOURCES,
  GET_RESOURCES,
  GET_RESOURCES_BY_CATEGORY,
  GET_RESOURCES_CATEGORIES,
} from "../../lib/graphqlQuery";
import Skeleton from "react-loading-skeleton";
import { convertToSlug, queryLanguageCode } from "../../lib/util";
import { useTranslation } from "react-i18next";

export default function Resources() {
  const {t} = useTranslation();
  const [chip, setChip] = useState("all");
  const [resourceCategories, setResourceCategories] = useState([]);
  const [colorMap] = useState(new Map());
  const colors = ["#20976c", "#0a61b4", "#A8CA13", "#F48C06"];

  const { loading, data } = useQuery(GET_FIRST_TWO_RESOURCES, {variables: {
    language: queryLanguageCode()
  }});

  const twoResources = !loading
    ? data?.resources?.nodes
    : Array.from({ length: 2 });

  const endCursor = data?.resources?.pageInfo?.endCursor;

  const loadChip = (chip) => {
    setChip(chip);
  };

  const loadResourceCategories = (resourceCategories) => {
    setResourceCategories(resourceCategories);
  };

  if (resourceCategories) {
    resourceCategories.forEach((category, index) => {
      colorMap.set(category.name, colors[index % colors.length]);
    });
  }

  return (
    <main className="resources">
      <section className="hero" background="light">
        <div className="container hero__wrapper">
          <div className="hero__articles">
            <div className="hero__articles-wrapper">
              <div className="hero__articles-group">
                {twoResources.map((resource, index) => (
                  <ResourceCard
                    loading={loading}
                    data={resource}
                    variant={index === 1 ? "longer" : ""}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="hero__content">
            <p className="hero__name section_name">{t("resourcesPage.hero.name")}</p>
            <h1 className="hero__title">{t("resourcesPage.hero.title")}</h1>
            <p className="hero__description">
              {t("resourcesPage.hero.description")}
            </p>
            <Button
              type="flat-green arrow"
              color="white"
              text={t("resourcesPage.hero.button")}
            />
          </div>
        </div>
        <div className="hero__background">
          <img
            className="hero__background-image"
            src={shapeHeader}
            alt=""
            aria-hidden="true"
          />
        </div>
      </section>

      <section className="business_insight">
        <div className="container">
          <div className="business_insight__wrapper">
            <div className="business_insight__top">
              <div className="business_insight__highlight">
                <p className="section_name business_insight__name">
                  {t("resourcesPage.businessInsight.name")}
                </p>
                <h1 className="section_title business_insight__title">
                {t("resourcesPage.businessInsight.title")}
                </h1>
              </div>
              <div className="business_insight__button">
                <Button type="outline arrow" text={t("resourcesPage.businessInsight.button")} color="green" />
              </div>
            </div>

            <FourResources slug="industry" endCursor={endCursor} />
          </div>
        </div>
        <div className="bottom_triangle bottom_triangle--secondary"></div>
      </section>

      <section className="insight_update">
        <div className="container">
          <div className="insight_update__wrapper">
            <h1 className="insight_update__title section_title">
            {t("resourcesPage.insightUpdate.name")}
            </h1>
            <UpdateRadios
              loadChip={loadChip}
              loadResourceCategories={loadResourceCategories}
            />

            <LatestUpdates
              chip={chip}
              endCursor={endCursor}
              colorMap={colorMap}
            />
          </div>
        </div>
        <div className="bottom_triangle bottom_triangle--white"></div>
      </section>

      <section className="latest_update">
        <div className="container">
          <div className="latest_update__wrapper">
            <div className="latest_update__top">
              <div className="latest_update__highlight">
                <p className="latest_update__name section_name">
                  {t("resourcesPage.latestUpdate.name")}
                </p>
                <h1 className="latest_update__title section_title">
                {t("resourcesPage.latestUpdate.title")}
                </h1>
              </div>
              <div className="latest_update__button">
                <Button type="outline arrow" color="green" text={t("seeAll")} />
              </div>
            </div>

            <FourResources slug="business" endCursor={endCursor} />
          </div>
        </div>

        <div className="bottom_triangle bottom_triangle--dark-blue"></div>
      </section>

      <LatestBlogs triangleColor={"white"} />

      <ReadyGet />
    </main>
  );
}

const FourResources = ({ slug, endCursor }) => {
  const { loading, data } = useQuery(GET_RESOURCES_BY_CATEGORY, {
    variables: {
      cursor: endCursor,
      id: slug,
    },
  });

  const resources = !loading
    ? data?.resourceCategory?.resources?.nodes
    : Array.from({ length: 4 });
  return (
    <div className="business_insight__grid">
      {resources.map((resource, index) => (
        <ResourceCard
          key={index}
          loading={loading}
          data={resource}
          background="greyish-blue"
        />
      ))}
    </div>
  );
};

const LatestUpdates = ({ chip, endCursor, colorMap }) => {
  const { loading, data } = useQuery(GET_RESOURCES, {
    variables: {
      first: 8,
      cursor: endCursor,
      language: queryLanguageCode()
    },
  });

  const resources = !loading
    ? [...data?.resources?.nodes]
    : Array.from({ length: 8 });

  let filteredResources = resources;

  if (!loading && chip !== "all") {
    filteredResources = resources.filter((resource) => {
      const resourceCategories = resource?.resourceCategories?.nodes.map(
        (node) => node.slug
      );
      return resourceCategories.includes(chip);
    });
  }

  return (
    <div className="insight_update__grid">
      {filteredResources.map((resource, index) => (
        <RelatedCard
          key={index}
          data={resource}
          readLink={true}
          loading={loading}
          term="resources"
          colorMap={colorMap}
        />
      ))}
    </div>
  );
};

const UpdateRadios = ({ loadChip, loadResourceCategories }) => {
  const {t} = useTranslation();
  const [chip, setChip] = useState("all");
  const [load, setLoad] = useState(false);

  const handleRadioChange = (event) => {
    loadChip(event.target.id);
    setChip(event.target.id);
  };

  const { loading, data } = useQuery(GET_RESOURCES_CATEGORIES, {variables: {
    language: queryLanguageCode()
  }});

  const resourceCategories = !loading
    ? data?.resourceCategories?.nodes.filter((node) => node.count > 0)
    : Array.from({ length: 3 });

  useEffect(() => {
    if (!loading && load === false) {
      loadResourceCategories(resourceCategories);
      setLoad(true);
    }
  }, [load, loading, loadResourceCategories, resourceCategories]);
  return (
    <div className="insight_update__radios">
      {!loading ? (
        <Fragment>
          <div className="chip">
            <input
              id={convertToSlug(t("all"))}
              type="radio"
              name="radio"
              onChange={handleRadioChange}
              checked={chip === convertToSlug(t("all"))}
            />
            <label htmlFor="all">{t("all")}</label>
          </div>
          {resourceCategories.map((category, index) => (
            <div className="chip" key={index}>
              <input
                id={category.slug}
                type="radio"
                name="radio"
                onChange={handleRadioChange}
                checked={chip === category.slug}
              />
              <label htmlFor={category.slug}>{category.name}</label>
            </div>
          ))}
        </Fragment>
      ) : (
        resourceCategories.map((_category, index) => (
          <Skeleton
            key={index}
            className="chip"
            height={40}
            width={100}
            style={{ borderRadius: "20px" }}
          />
        ))
      )}
    </div>
  );
};

import React, { Fragment, useState } from "react";
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

export default function Resources() {
  const [chip, setChip] = useState("all");

  const { loading, data } = useQuery(GET_FIRST_TWO_RESOURCES);

  const twoResources = !loading
    ? data?.resources?.nodes
    : Array.from({ length: 2 });

  const endCursor = data?.resources?.pageInfo?.endCursor;

  const loadChip = (chip) => {
    setChip(chip);
  };

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
            <p className="hero__name section_name">Paxform Resources</p>
            <h1 className="hero__title">Guides and resources</h1>
            <p className="hero__description">
              Paxform will never share your data with anyone. What’s more, no
              one at Paxform can view or access your information.
            </p>
            <Button
              type="flat-green arrow"
              color="white"
              text="See all Resources"
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
                  BUSINESS INSIGHT HIGHLIGHT
                </p>
                <h1 className="section_title business_insight__title">
                  Latest Business Insight Highlight
                </h1>
              </div>
              <div className="business_insight__button">
                <Button type="outline arrow" text="See all" color="green" />
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
              Business Insight and Industry Updates
            </h1>
            <UpdateRadios loadChip={loadChip} />

            <LatestUpdates chip={chip} endCursor={endCursor} />
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
                  INDUSTRY UPDATES HIGHLIGHT
                </p>
                <h1 className="latest_update__title section_title">
                  Latest Industry Updates Highlight
                </h1>
              </div>
              <div className="latest_update__button">
                <Button type="outline arrow" color="green" text="See all" />
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

const LatestUpdates = ({ chip, endCursor }) => {
  const { loading, data } = useQuery(GET_RESOURCES, {
    variables: {
      first: 8,
      cursor: endCursor,
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
          term='resources'
        />
      ))}
    </div>
  );
};

const UpdateRadios = ({ loadChip }) => {
  const [chip, setChip] = useState("all");

  const handleRadioChange = (event) => {
    loadChip(event.target.id);
    setChip(event.target.id);
  };

  const { loading, data } = useQuery(GET_RESOURCES_CATEGORIES);

  const resourceCategories = !loading
    ? data?.resourceCategories?.nodes.filter((node) => node.count > 0)
    : Array.from({ length: 3 });
  return (
    <div className="insight_update__radios">
      {!loading ? (
        <Fragment>
          <div className="chip">
            <input
              id="all"
              type="radio"
              name="radio"
              onChange={handleRadioChange}
              checked={chip === "all"}
            />
            <label htmlFor="all">All</label>
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

import React, { Fragment, useEffect } from "react";
import "./UseCase.scss";

import SecurityPolicy from "../../components/SecurityPolicy/SecurityPolicy";

// import heroIllustration from "../../assets/images/UseCases/Hero Illustration.svg";
// import heroBackgroundImage from "../../assets/images/UseCases/Bg.svg";
// import illustration from "../../assets/images/UseCases/app illustration.svg";

import { SCREEN_SIZE } from "../../configurations/configurations";
import FlexCard from "../../components/FlexCard/FlexCard";

import GetStarted from "../../components/GetStarted/GetStarted";
import { useQuery } from "@apollo/client";
import { GET_USE_CASE } from "../../lib/graphqlQuery";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function UseCase() {
  const setHeroForegroundHeight = () => {
    const heroImage = document.querySelector(".hero__image");
    const heroForeground = document.querySelector(".hero__image-foreground");

    heroImage.style.height = heroForeground.scrollHeight + 40 + "px";
  };

  useEffect(() => {
    if (window.innerWidth <= SCREEN_SIZE.medium) {
      window.addEventListener("resize", setHeroForegroundHeight);
    } else {
      window.removeEventListener("resize", setHeroForegroundHeight);
    }

    return () => {
      window.removeEventListener("resize", setHeroForegroundHeight);
    };
  });

  const location = useLocation().pathname.split("/");
  const slug = location[location.length - 1];

  const { loading, data } = useQuery(GET_USE_CASE, {
    variables: {
      id: slug,
    },
  });

  const loadingFinished = !loading;

  const useCase = loadingFinished ? data.useCase : "";

  const heroName = loadingFinished ? useCase.heroName : <Skeleton />;
  const heroTitle = loadingFinished ? useCase.heroTitle : <Skeleton />;
  const heroDescription = useCase?.heroDescription;
  const heroImageUrl = useCase?.heroImage?.node?.sourceUrl;

  const infoName = loadingFinished ? useCase.infoName : <Skeleton />;
  const infoTitle = loadingFinished ? useCase.infoTitle : <Skeleton />;
  const infoDescription = useCase.infoDescription;
  const infoContent = useCase.infoContent;

  const additionalInfoTitle1 = useCase.additionalInfoTitle;
  const additionalInfoDescription1 = useCase.additionalInfoDescription;
  const additionalInfoImage1 = useCase.additionalInfoImage?.node?.sourceUrl;

  const additionalInfoTitle2 = useCase.additionalInfoTitle2;
  const additionalInfoDescription2 = useCase.additionalInfoDescription2;
  const additionalInfoImage2 = useCase.additionalInfoImage2?.node?.sourceUrl;

  const nameColor = useCase.nameColor ? useCase.nameColor : "#2d4bb6";
  const heroBackgroundColor = useCase.heroBackgroundColor
    ? useCase.heroBackgroundColor
    : "#f2fdf9";
  const heroImageBackgroundGradientStart = useCase.heroImageBackgroundGradientStart
    ? useCase.heroImageBackgroundGradientStart
    : "#06945A";
  const heroImageBackgroundGradientStop = useCase.heroImageBackgroundGradientStop
    ? useCase.heroImageBackgroundGradientStop
    : "#045333";

  const nameStyle = {
    color: nameColor,
  };

  const heroStyle = { backgroundColor: heroBackgroundColor };

  const skeletonArray = Array.from({ length: 3 });
  return (
    <main className="use_case">
      <section className="hero" background="light" style={heroStyle}>
        <div className="container hero__wrapper">
          <div className="hero__content">
            <p className="hero__content-name section_name" style={nameStyle}>
              {heroName}
            </p>
            <h1 className="hero__content-title section_title">{heroTitle}</h1>
            {loadingFinished ? (
              <p
                className="hero__content-description section__description"
                dangerouslySetInnerHTML={{
                  __html: loadingFinished ? heroDescription : "",
                }}
              ></p>
            ) : (
              <Skeleton count={3} />
            )}
          </div>
          <div className="hero__image">
            {loadingFinished ? (
              <img
                className="hero__image-foreground"
                src={heroImageUrl}
                alt="hero illustration"
              />
            ) : (
              <Skeleton height={500}/>
            )}

            <svg
              className="hero__image-background"
              preserveAspectRatio="none"
              viewBox="0 0 772 221"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 221H771.5V63.0002C530.5 42.5002 42.5297 -0.118461 18.5 0.000248052C2.80184 0.0777985 0.67503 12.8602 0 19.0002V221Z"
                fill="url(#paint0_linear_114_3237)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_114_3237"
                  x1="3.91702e-06"
                  y1="110"
                  x2="772"
                  y2="110"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor={heroImageBackgroundGradientStart} />
                  <stop offset="1" stopColor={heroImageBackgroundGradientStop} />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="bottom_triangle bottom_triangle--white"></div>
        </div>
      </section>

      <section className="case_info">
        <div className="container">
          <p className="case_info__name section_name">{infoName}</p>
          <div className="case_info__summary">
            <h1 className="case_info__title section_title">{infoTitle}</h1>

            {loadingFinished ? (
              <p
                className="case_info__description section_description"
                dangerouslySetInnerHTML={{ __html: infoDescription }}
              ></p>
            ) : (
              <p className="case_info__description section_description">
                <Skeleton count={2} />
              </p>
            )}
          </div>
          {loadingFinished ? (
            <div
              className="case_info__content"
              dangerouslySetInnerHTML={{ __html: infoContent }}
            ></div>
          ) : (
            <div className="case_info__content">
              {skeletonArray.map((ske, index) => (
                <Fragment key={index}>
                  <h2>
                    <Skeleton />
                  </h2>
                  <p>
                    <Skeleton count={5} />
                  </p>
                  <Skeleton height={300} />
                </Fragment>
              ))}
            </div>
          )}
        </div>

        <div className="bottom_triangle bottom_triangle--footer"></div>
      </section>

      <SecurityPolicy />

      <section className="flex_cards">
        <FlexCard
          title={additionalInfoTitle1}
          description={additionalInfoDescription1}
          image={additionalInfoImage1}
        />
        <FlexCard
          title={additionalInfoTitle2}
          description={additionalInfoDescription2}
          image={additionalInfoImage2}
          direction="rtl"
        />
      </section>

      <GetStarted />
    </main>
  );
}

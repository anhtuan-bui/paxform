import React, { useState } from "react";
import Button from "../../components/Button/Button";
// import fillOutForm from '../../assets/images/fill-out-form.svg';
// import fillOutFormMObile from '../../assets/images/fill-out-form__mobile.svg';
import "./Personal.scss";

// import personelHero from '../../assets/images/personal-hero.svg';
import personalIllustration from "../../assets/images/Personal/Hero Illustration.png";
// import repeatlyIllustration from "../../assets/images/Personal/repeatly illustration.svg";

// import featuresImg from '../../assets/images/feature-organisation.svg';
import Testimonial from "../../components/Testimonial/Testimonial";

import GetStarted from "../../components/GetStarted/GetStarted";
import PlanPricing from "../../components/PlanPricing/PlanPricing";
// import LatestBlogs from "../../components/LatestBlogs/LatestBlogs";
import Accordion from "../../components/Accordion/Accordion";
import { useTranslation } from "react-i18next";

import access from "../../assets/images/Personal/access.png";
import fill from "../../assets/images/Personal/fill.png";
import chat from "../../assets/images/Personal/chat.png";
import disclosure from "../../assets/images/Personal/disclosure.png";
import secret from "../../assets/images/Personal/secret.png";
import share from "../../assets/images/Personal/share.png";

import tired from "../../assets/images/Personal/tired.png";

export default function Personal() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("personalPage.features.title1"),
      description: t("personalPage.features.description1"),
      isOpened: true,
      image: access,
    },
    {
      title: t("personalPage.features.title2"),
      description: t("personalPage.features.description2"),
      isOpened: false,
      image: fill,
    },
    {
      title: t("personalPage.features.title3"),
      description: t("personalPage.features.description3"),
      isOpened: false,
      image: chat,
    },
    {
      title: t("personalPage.features.title4"),
      description: t("personalPage.features.description4"),
      isOpened: false,
      image: share,
    },
    {
      title: t("personalPage.features.title5"),
      description: t("personalPage.features.description5"),
      isOpened: false,
      image: secret,
    },
    {
      title: t("personalPage.features.title6"),
      description: t("personalPage.features.description6"),
      isOpened: false,
      image: disclosure,
    },
  ];

  const plans = [
    {
      mainColor: "grey",
      title: t("free"),
      price: [0, ""],
      description: t("personalPage.plans.description1"),
      features: Array.from(Array(9), (x, index) =>
        t(`personalPage.plans.freeFeatures.feature${index + 1}`)
      ),
    },
    {
      mainColor: "green",
      title: t("premium"),
      price: [49.9, ""],
      description: t("personalPage.plans.description2"),
      features: Array.from(Array(9), (x, index) =>
        t(`personalPage.plans.premiumFeatures.feature${index + 1}`)
      ),
    },
    {
      mainColor: "blue",
      title: t("family"),
      price: [99.9, ""],
      description: t("personalPage.plans.description3"),
      features: Array.from(Array(9), (x, index) =>
        t(`personalPage.plans.familyFeatures.feature${index + 1}`)
      ),
    },
  ];

  const [featureImage, setFeatureImage] = useState(features[0].image);

  const featureIndex = (index) => {
    setFeatureImage(features[index].image);
  };

  const timeStart = () => {
    const featureImageElement = document.querySelector(".features__image");
    featureImageElement.style.transform = "translate(0)";
    featureImageElement.style.opacity = 1;
  };

  const timeEnd = () => {
    const featureImageElement = document.querySelector(".features__image");
    featureImageElement.style.transform = "translate(20%)";
    featureImageElement.style.opacity = 0;
  };

  return (
    <main className="personal">
      <section className="hero">
        <div className="container hero__wrapper">
          <div className="hero__content">
            <p className="hero__name">{t("personalPage.hero.name")}</p>
            <h1 className="hero__title">{t("personalPage.hero.title")}</h1>
            <p className="hero__description">
              {t("personalPage.hero.description")}
            </p>
            <div className="hero__button">
              <Button
                text={t("personalPage.hero.seePlan")}
                type="flat-white arrow"
                color="green"
                href="#personal-plan"
              />
              {/* <Button
                text={t("howItWork")}
                type="outline triangle-right"
                color="white"
              /> */}
            </div>
          </div>
          <div className="hero__image">
            <img
              src={personalIllustration}
              alt="personal hero"
              className="hero__image-large"
            />
          </div>
        </div>
        <div className="bottom_triangle bottom_triangle--low-blue"></div>
      </section>

      <section className="flex_box">
        <div className="container flex_box__container">
          <div className="flex_box__image">
            <img src={tired} alt="fill out form" />
          </div>
          <div className="flex_box__content">
            <h1 className="flex_box__content-title">
              {t("personalPage.flexBox.title")}
            </h1>
            <div className="flex_box__content-description">
              {t("personalPage.flexBox.description")}
            </div>
          </div>
        </div>

        <div className="bottom_triangle bottom_triangle--blue"></div>
      </section>

      <section className="features">
        <div className="container">
          <p className="features__name section_name">
            {t("personalPage.featuresSection.name")}
          </p>
          <h1 className="features__title">
            {t("personalPage.featuresSection.title")}
          </h1>
          <div className="features__container">
            <div className="features__image">
              <img src={featureImage} alt="forms from Paxform" />
            </div>
            <div className="features__accordion">
              <Accordion
                list={features}
                fontColor="white"
                progressBarColor="dark-green"
                titleHighlight="white"
                featureIndex={featureIndex}
                timeStart={timeStart}
                timeEnd={timeEnd}
                titleClicked={true}
                length={6000}
              />
            </div>
          </div>
        </div>

        <div className="bottom_triangle bottom_triangle--white"></div>
      </section>

      <section id="personal-plan" className="plans">
        <div className="container plans__container">
          <div className="plans__top-title">
            <p className="plans__name section_name">
              {t("personalPage.planSection.name")}
            </p>
            <h1 className="plans__title section_title">
              {t("personalPage.planSection.title")}
            </h1>
          </div>
          <div className="plans__top">
            <div className="plans__top-button">
              {/* <Button
                className="plans__button"
                text={t("personalPage.planSection.button")}
                type="arrow outline"
                color="green"
                href="/pricing"
              /> */}
            </div>
          </div>

          <PlanPricing plans={plans} page="personal" />
        </div>
      </section>
      <section className="testimonial">
        <Testimonial />
        <div className="bottom_triangle bottom_triangle--footer"></div>
      </section>

      {/* <LatestBlogs triangleColor={"footer"} /> */}

      <GetStarted />
    </main>
  );
}

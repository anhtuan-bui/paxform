import React, { useState } from "react";

import Button from "../../components/Button/Button";
import "./Business.scss";

import personalIllustration from "../../assets/images/Business/Hero Illustration.png";
// import repeatlyIllustration from "../../assets/images/Personal/repeatly illustration.svg";
import createFormsFeatures from "../../assets/images/Business/Create Forms Features Mockup.png";
import createContract from "../../assets/images/Business/Create Contracts Features Mockup.png";
import viewFeature from "../../assets/images/Business/View and Process Applications Features Mockup.png";
import manageFeature from "../../assets/images/Business/Manage Checkins Features Mockup.png";
import chatFeature from "../../assets/images/Business/Chat.png";

import Testimonial from "../../components/Testimonial/Testimonial";

import GetStarted from "../../components/GetStarted/GetStarted";
import PlanPricing from "../../components/PlanPricing/PlanPricing";
// import LatestBlogs from "../../components/LatestBlogs/LatestBlogs";
import Accordion from "../../components/Accordion/Accordion";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const features = [
  {
    title: t("businessPage.features.first.title"),
    description: t("businessPage.features.first.description"),
    isOpened: true,
    image: createFormsFeatures,
  },
  {
    title: t("businessPage.features.second.title"),
    description: t("businessPage.features.second.description"),
    isOpened: false,
    image: createContract,
  },
  {
    title: t("businessPage.features.third.title"),
    description: t("businessPage.features.third.description"),
    isOpened: false,
    image: viewFeature,
  },
  {
    title: t("businessPage.features.fourth.title"),
    description: t("businessPage.features.fourth.description"),
    isOpened: false,
    image: manageFeature,
  },
  {
    title: t("businessPage.features.fifth.title"),
    description: t("businessPage.features.fifth.description"),
    isOpened: false,
    image: chatFeature,
  },
];

const plans = [
  {
    mainColor: "grey",
    title: t("businessPage.plans.free.title"),
    price: [0, t("businessPage.plans.free.price")],
    description: t("businessPage.plans.free.description"),
    features: Array.from(Array(8), (x, index) => t(`businessPage.plans.free.features.feature${index+1}`))
  },
  {
    mainColor: "green",
    title: t("businessPage.plans.premium.title"),
    price: [50, t("businessPage.plans.premium.price")],
    description: t("businessPage.plans.premium.description"),
    features: Array.from(Array(8), (x, index) => t(`businessPage.plans.premium.features.feature${index+1}`))
    
  },
  {
    mainColor: "blue",
    title: t("businessPage.plans.family.title"),
    price: [t("businessPage.plans.family.price"), ""],
    description: t("businessPage.plans.family.description"),
    features: Array.from(Array(8), (x, index) => t(`businessPage.plans.family.features.feature${index+1}`))
  },
];

const Business = () => {
  const { t } = useTranslation();
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
    <main className="business">
      <section className="hero">
        <div className="container hero__wrapper">
          <div className="hero__content">
            <p className="hero__name section_name">{t("business")}</p>
            <h1 className="hero__title">{t("businessPage.hero.title")}</h1>
            <p className="hero__description">
              {t("businessPage.hero.description")}
            </p>
            <div className="hero__button">
              <Button
                text={t("businessPage.hero.planButton")}
                type="flat-white arrow"
                color="blue"
                href="/pricing"
              />
              {/* <Button
                  text={t("businessPage.hero.howButton")}
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
        <div className="bottom_triangle bottom_triangle--white"></div>
      </section>

      <section className="flex_box">
        <div className="container flex_box__container">
          <div className="flex_box__content">
            <h1 className="flex_box__content-title">
              {t("businessPage.flexbox.heading")}
            </h1>
          </div>
          <div className="flex_box__text">
            <p>{t("businessPage.flexbox.text")}</p>
          </div>
        </div>

        {/* <div className="bottom_triangle bottom_triangle--green"></div> */}
      </section>

      <section className="features">
        <div className="container">
          <p className="features__name section_name">
            {t("businessPage.features.sectionName")}
          </p>
          <h1 className="features__title">
            {t("businessPage.features.sectionTitle")}
          </h1>
          <div className="features__container">
            <div className="features__image">
              <img src={featureImage} alt="forms from Paxform" />
            </div>
            <div className="features__accordion">
              <Accordion
                list={features}
                featureIndex={featureIndex}
                timeStart={timeStart}
                timeEnd={timeEnd}
                titleClicked={true}
              />
            </div>
          </div>
        </div>

        <div className="bottom_triangle bottom_triangle--white"></div>
      </section>

      <section className="plans">
        <div className="container plans__container">
          <div className="plans__top">
            <div className="plans__top-title">
              <p className="plans__name section_name">
                {t("businessPage.plans.sectionName")}
              </p>
              <h1 className="plans__title section_title">
                {t("businessPage.plans.sectionTitle")}
              </h1>
            </div>
            <div className="plans__top-button">
              <Button
                className="plans__button"
                text={t("businessPage.plans.fullPricingButton")}
                type="arrow outline"
                color="green"
                href="/pricing"
              />
            </div>
          </div>
          <PlanPricing plans={plans} />
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
};

export default Business;

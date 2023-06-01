import React from "react";
import Button from "../../components/Button/Button";
// import fillOutForm from '../../assets/images/fill-out-form.svg';
// import fillOutFormMObile from '../../assets/images/fill-out-form__mobile.svg';
import "./Personal.scss";

// import personelHero from '../../assets/images/personal-hero.svg';
import personalIllustration from "../../assets/images/Personal/Hero Illustration.png";
import repeatlyIllustration from "../../assets/images/Personal/repeatly illustration.svg";

// import featuresImg from '../../assets/images/feature-organisation.svg';
import Testimonial from "../../components/Testimonial/Testimonial";

import GetStarted from "../../components/GetStarted/GetStarted";
import PlanPricing from "../../components/PlanPricing/PlanPricing";
// import LatestBlogs from "../../components/LatestBlogs/LatestBlogs";
import Accordion from "../../components/Accordion/Accordion";
import { useTranslation } from "react-i18next";

export default function Personal() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("personalPage.features.title1"),
      description: t("personalPage.features.description1"),

      isOpened: true,
    },
    {
      title: t("personalPage.features.title2"),
      description: t("personalPage.features.description2"),
      isOpened: false,
    },
    {
      title: t("personalPage.features.title3"),
      description: t("personalPage.features.description3"),
      isOpened: false,
    },
    {
      title: t("personalPage.features.title4"),
      description: t("personalPage.features.description4"),
      isOpened: false,
    },
    {
      title: t("personalPage.features.title5"),
      description: t("personalPage.features.description5"),
      isOpened: false,
    },
    {
      title: t("personalPage.features.title6"),
      description: t("personalPage.features.description6"),
      isOpened: false,
    },
  ];

  const plans = [
    {
      mainColor: "grey",
      title: t("free"),
      price: [0, t("forever")],
      description: "A simple way to get started for you new to passfolio.",
      features: [
        t("personalPage.plans.freeFeatures.feature1"),
        t("personalPage.plans.freeFeatures.feature2"),
        t("personalPage.plans.freeFeatures.feature3"),
        t("personalPage.plans.freeFeatures.feature4"),
      ],
    },
    {
      mainColor: "green",
      title: t("premium"),
      price: [50, t("forever")],
      description: "Best for freelance coders & designers who need.",
      features: [
        t("personalPage.plans.premiumFeatures.feature1"),
        t("personalPage.plans.premiumFeatures.feature2"),
        t("personalPage.plans.premiumFeatures.feature3"),
        t("personalPage.plans.premiumFeatures.feature4"),
      ],
    },
    {
      mainColor: "blue",
      title: t("family"),
      price: [t("customPricing"), ""],
      description: "Best for freelance coders & designers who need.",
      features: [
        t("personalPage.plans.familyFeatures.feature1"),
        t("personalPage.plans.familyFeatures.feature2"),
        t("personalPage.plans.familyFeatures.feature3"),
        t("personalPage.plans.familyFeatures.feature4"),
      ],
    },
  ];

  return (
    <main className="personal">
      <section className="hero">
        <div className="container hero__wrapper">
          <div className="hero__content">
            <p className="hero__name">{t("personalPage.hero.name")}</p>
            <h1 className="hero__title">
            {t("personalPage.hero.title")}
            </h1>
            <p className="hero__description">
            {t("personalPage.hero.description")}
            </p>
            <div className="hero__button">
              <Button text={t("personalPage.hero.seePlan")} type="flat-white arrow" color="green" />
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
        <div className="bottom_triangle bottom_triangle--light-green"></div>
      </section>

      <section className="flex_box">
        <div className="container flex_box__container">
          <div className="flex_box__image">
            <img src={repeatlyIllustration} alt="fill out form" />
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

        <div className="bottom_triangle bottom_triangle--green"></div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features__container">
            <div className="features__image">
              <img src={repeatlyIllustration} alt="forms from Paxform" />
            </div>
            <div className="features__accordion">
              <p className="features__name section_name">{t("personalPage.featuresSection.name")}</p>
              <h1 className="features__title">
              {t("personalPage.featuresSection.title")}
              </h1>
              <Accordion
                list={features}
                fontColor="white"
                progressBarColor="dark-green"
                titleHighlight="white"
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
              <p className="plans__name section_name">{t("personalPage.planSection.name")}</p>
              <h1 className="plans__title section_title">
              {t("personalPage.planSection.title")}
              </h1>
            </div>
            <div className="plans__top-button">
              <Button
                className="plans__button"
                text={t("personalPage.planSection.button")}
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
}

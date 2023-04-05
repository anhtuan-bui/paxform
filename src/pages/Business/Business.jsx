import React, { Component } from "react";

import Button from "../../components/Button/Button";
import "./Business.scss";

import personalIllustration from "../../assets/images/Personal/Hero Illustration.png";
import repeatlyIllustration from "../../assets/images/Personal/repeatly illustration.svg";
import Testimonial from "../../components/Testimonial/Testimonial";

import GetStarted from "../../components/GetStarted/GetStarted";
import PlanPricing from "../../components/PlanPricing/PlanPricing";
import LatestBlogs from "../../components/LatestBlogs/LatestBlogs";
import Accordion from "../../components/Accordion/Accordion";
import { useTranslation } from "react-i18next";

const features = [
  {
    title: "Create Form Templates",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    isOpened: true,
  },
  {
    title: "Multiple Admins",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isOpened: false,
  },
  {
    title: "View and Procees Applications",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isOpened: false,
  },
  {
    title: "Use API",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't",
    isOpened: false,
  },
  {
    title: "Request Information",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't",
    isOpened: false,
  },
];

const plans = [
  {
    mainColor: "grey",
    title: "Free",
    price: [0, "forever"],
    description: "A simple way to get started for you new to passfolio.",
    features: [
      "Unlimited data",
      "5 Person saved",
      "A simple way for you new started to Passfolio.",
      "A simple way for you new started to Passfolio.",
    ],
  },
  {
    mainColor: "green",
    title: "Premium",
    price: [50, "forever"],
    description: "Best for freelance coders & designers who need.",
    features: [
      "Unlimited data",
      "5 Person saved",
      "A simple way for you new started to Passfolio.",
      "A simple way for you new started to Passfolio.",
    ],
  },
  {
    mainColor: "blue",
    title: "Family",
    price: ["Custom Pricing", ""],
    description: "Best for freelance coders & designers who need.",
    features: [
      "Unlimited data",
      "5 Person saved",
      "A simple way for you new started to Passfolio.",
      "A simple way for you new started to Passfolio.",
    ],
  },
];

 const Business = () => {

  const {t} = useTranslation();

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
                <Button
                  text={t("businessPage.hero.howButton")}
                  type="outline triangle-right"
                  color="white"
                />
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
            <div className="features__container">
              <div className="features__image">
                <img src={repeatlyIllustration} alt="forms from Paxform" />
              </div>
              <div className="features__accordion">
                <p className="features__name section_name">
                  {t("businessPage.features.name")}
                </p>
                <h1 className="features__title">
                  {t("businessPage.features.title")}
                </h1>
                <Accordion list={features} />
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
                  {t("businessPage.plans.name")}
                </p>
                <h1 className="plans__title section_title">
                  {t("businessPage.plans.title")}
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
          <div className="bottom_triangle bottom_triangle--dark-blue"></div>
        </section>

        <LatestBlogs triangleColor={"footer"} />

        <GetStarted />
      </main>
    );
}

export default Business;
import React from "react";

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
import { t } from "i18next";

const features = [
  {
    title: t("businessPage.features.first.title"),
    description: t("businessPage.features.first.description"),
    isOpened: true,
  },
  {
    title: t("businessPage.features.second.title"),
    description: t("businessPage.features.second.description"),
    isOpened: false,
  },
  {
    title: t("businessPage.features.third.title"),
    description: t("businessPage.features.third.description"),
    isOpened: false,
  },
  {
    title: t("businessPage.features.fourth.title"),
    description: t("businessPage.features.fourth.description"),
    isOpened: false,
  },
  {
    title: t("businessPage.features.fifth.title"),
    description: t("businessPage.features.fifth.description"),
    isOpened: false,
  },
];

const plans = [
  {
    mainColor: "grey",
    title: t("plans.free.title"),
    price: [0, t("plans.free.price")],
    description: t("plans.free.description"),
    features: [
      t("plans.free.features.first"),
      t("plans.free.features.second"),
      t("plans.free.features.third"),
      t("plans.free.features.fourth"),
    ],
  },
  {
    mainColor: "green",
    title: t("plans.premium.title"),
    price: [50, t("plans.premium.price")],
    description: t("plans.premium.description"),
    features: [
      t("plans.premium.features.first"),
      t("plans.premium.features.second"),
      t("plans.premium.features.third"),
      t("plans.premium.features.fourth"),
    ],
  },
  {
    mainColor: "blue",
    title: t("plans.family.title"),
    price: [t("plans.family.price"), ""],
    description: t("plans.family.description"),
    features: [
      t("plans.family.features.first"),
      t("plans.family.features.second"),
      t("plans.family.features.third"),
      t("plans.family.features.fourth"),
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
                  {t("businessPage.features.sectionName")}
                </p>
                <h1 className="features__title">
                  {t("businessPage.features.sectionTitle")}
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
                  {t("plans.sectionName")}
                </p>
                <h1 className="plans__title section_title">
                  {t("plans.sectionTitle")}
                </h1>
              </div>
              <div className="plans__top-button">
                <Button
                  className="plans__button"
                  text={t("plans.fullPricingButton")}
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
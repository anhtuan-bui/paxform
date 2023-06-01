import React from "react";

import Button from "../../components/Button/Button";
import "./Business.scss";

import personalIllustration from "../../assets/images/Business/Hero Illustration.png";
// import repeatlyIllustration from "../../assets/images/Personal/repeatly illustration.svg";
import createFormsFeatures from "../../assets/images/Business/Create Forms Features Mockup.png";
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
    title: t("businessPage.plans.free.title"),
    price: [0, t("businessPage.plans.free.price")],
    description: t("businessPage.plans.free.description"),
    features: [
      t("businessPage.plans.free.features.first"),
      t("businessPage.plans.free.features.second"),
      t("businessPage.plans.free.features.third"),
      t("businessPage.plans.free.features.fourth"),
    ],
  },
  {
    mainColor: "green",
    title: t("businessPage.plans.premium.title"),
    price: [50, t("businessPage.plans.premium.price")],
    description: t("businessPage.plans.premium.description"),
    features: [
      t("businessPage.plans.premium.features.first"),
      t("businessPage.plans.premium.features.second"),
      t("businessPage.plans.premium.features.third"),
      t("businessPage.plans.premium.features.fourth"),
    ],
  },
  {
    mainColor: "blue",
    title: t("businessPage.plans.family.title"),
    price: [t("businessPage.plans.family.price"), ""],
    description: t("businessPage.plans.family.description"),
    features: [
      t("businessPage.plans.family.features.first"),
      t("businessPage.plans.family.features.second"),
      t("businessPage.plans.family.features.third"),
      t("businessPage.plans.family.features.fourth"),
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
            <div className="features__container">
              <div className="features__image">
                <img src={createFormsFeatures} alt="forms from Paxform" />
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
}

export default Business;
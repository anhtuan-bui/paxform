import React, { Component } from "react";

import Button from "../../components/Button/Button";
import "./Business.scss";

import personalIllustration from "../../assets/images/Personal/Hero Illustration.png";
import repeatlyIllustration from "../../assets/images/Personal/repeatly illustration.svg";
import Testimonial from "../../components/Testimonial/Testimonial";

import GetStarted from "../../components/GetStarted/GetStarted";
import PlanPricing from "../../components/PlanPricing/PlanPricing";
import LatestBlogs from "../../components/LatestBlogs/LatestBlogs";

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

export default class Business extends Component {
  constructor(props) {
    super(props);
    this.state = { features: features };

    this.handleAccorionTitleClick = this.handleAccorionTitleClick.bind(this);
  }

  componentDidMount() {
    const panel = document.querySelector(".features__accordion-item-panel");
    panel.style.maxHeight = panel.scrollHeight + "px";
  }

  handleAccorionTitleClick = (e, index) => {
    const panel = e.target.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    document.querySelectorAll(".features__accordion-item").forEach((item) => {
      if (item !== e.target.parentElement) {
        item.lastChild.style.maxHeight = null;
      }
    });

    features.forEach((feature, i) => {
      if (index === i) {
        feature.isOpened = true;
      } else {
        feature.isOpened = false;
      }
    });

    this.setState({ features: features });
  };

  render() {
    return (
      <main className="business">
        <section className="hero">
          <div className="container hero__wrapper">
            <div className="hero__content">
              <p className="hero__name section_name">Business</p>
              <h1 className="hero__title">
                Your Personal Information in One Place Fill Any Form, Anywhere
              </h1>
              <p className="hero__description">
                Paxform’s function is simple: it completely fills any form,
                anytime. You can manage and save your personal data, allowing
                you to sign documents and send them to organisations with ease.
                No need to worry about security and privacy—Paxform fully
                encrypts your data to ensure your safety.
              </p>
              <div className="hero__button">
                <Button text="See Plan" type="flat-white arrow" color="blue" />
                <Button
                  text="How it works"
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
                Paper work was yesterday - Go digital today
              </h1>
            </div>
            <div className="flex_box__text">
              <p>
                Eliminate the lengthy process of administrative rework while
                leaving no environmental footprint.
              </p>
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
                <p className="features__name section_name">Features</p>
                <h1 className="features__title">
                  Features For Your Organisation
                </h1>
                {features.map((feature, index) => (
                  <div className="features__accordion-item" key={index}>
                    <h2
                      className={`features__accordion-item-title ${
                        feature.isOpened
                          ? "features__accordion-item-title--active-blue"
                          : ""
                      }`}
                      onClick={(e) => this.handleAccorionTitleClick(e, index)}
                    >
                      {feature.title}
                    </h2>
                    <div className={`features__accordion-item-panel`}>
                      <div
                        className="features__accordion-item-description"
                        key={`description-${index}`}
                      >
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bottom_triangle bottom_triangle--white"></div>
        </section>

        <section className="plans">
          <div className="container plans__container">
            <div className="plans__top">
              <div className="plans__top-title">
                <p className="plans__name section_name">PERSONAL PLANS</p>
                <h1 className="plans__title section_title">
                  Choose a Plan That’s Right for You
                </h1>
              </div>
              <div className="plans__top-button">
                <Button
                  className="plans__button"
                  text="See full pricing"
                  type="arrow outline"
                  color="green"
                />
              </div>
            </div>

            <PlanPricing plans={plans}/>

          </div>
        </section>
        <section className="testimonial">
          <Testimonial />
          <div className="bottom_triangle bottom_triangle--dark-blue"></div>
        </section>

        <LatestBlogs triangleColor={"footer"}/>

        <GetStarted />
      </main>
    );
  }
}

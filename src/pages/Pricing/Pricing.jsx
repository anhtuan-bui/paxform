import React, { Component, Fragment } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "./Pricing.scss";
import ReadyGet from "../../components/ReadyGet/ReadyGet";
import FrequentlyAskAccordion from "../../components/FrequentlyAskAccordion/FrequentlyAskAccordion";
import Button from "../../components/Button/Button";

import { ReactComponent as Tick } from "../../assets/images/icon-tick.svg";
import { ReactComponent as Eks } from "../../assets/images/icon-none.svg";
import { SCREEN_SIZE } from "../../configurations/configurations";

const credits = [
  {
    cost: "$19.90",
    point: "500",
    descriptions: "Additional Submissions",
  },
  {
    cost: "$99.90",
    point: "3,000",
    descriptions: "Additional Submissions",
  },
  {
    cost: "$299.90",
    point: "10,000",
    descriptions: "Additional Submissions",
  },
];

const compareList = {
  features: [
    "Pricing per Admin/month",
    "Number of Admins",
    "Published Forms",
    "Form template",
    "Agreement Templates",
    "Survey(monthly)",
    "Monthly Submissions",
    "Storage Space Available",
  ],
  securities: ["End-to-End Encryption"],
  supports: [
    "Generic PDF",
    "Max Questions per Form",
    "Conditional Questions",
    "Electronic Signatures",
    "Attachments(in forms)",
    "Workflow support",
  ],
};
export default class Pricing extends Component {
  personal = {
    pricing: [
      {
        title: "Free",
        description: "A simple way to get started for you new to passfolio.",
        cost: "$0",
        period: "/forever",
        features: [
          "**Unlimited data",
          "5 Person saved",
          "A simple way for you new started to Passfolio.",
          "A simple way for you new started to Passfolio.",
        ],
        compares: {
          features: ["$29.90", "1(max 4)", "3", "10", "2", "1", "500", "10GB"],
          securities: [<Tick />],
          supports: [<Tick />, "40", <Tick />, <Tick />, <Eks />, <Eks />],
        },
      },
      {
        title: "Premium",
        description: "Best for freelance coders & designers who need",
        cost: "$50",
        period: "/forever",
        features: [
          "2.Unlimited data",
          "5 Person saved",
          "A simple way for you new started to Passfolio.",
          "A simple way for you new started to Passfolio.",
        ],

        compares: {
          features: [
            "$39.90",
            "5(max 9)",
            "30",
            "50",
            "10",
            "3",
            "3,000",
            "100GB",
          ],
          securities: [<Tick />],
          supports: [
            <Tick />,
            "Unlimited",
            <Tick />,
            <Tick />,
            <Tick />,
            <Tick />,
          ],
        },
      },
      {
        title: "Family",
        description: "Best for freelance coders & designers who need",
        cost: "Custom",
        period: "",
        features: [
          "3. Unlimited data",
          "5 Person saved",
          "A simple way for you new started to Passfolio.",
          "A simple way for you new started to Passfolio.",
        ],
        compares: {
          features: ["$49.90", "30", "100", "200", "20", "10", "10,000", "1TB"],
          securities: [<Tick />],
          supports: [
            <Tick />,
            "Unlimited",
            <Tick />,
            <Tick />,
            <Tick />,
            <Tick />,
          ],
        },
      },
    ],
  };
  business = {
    pricing: [
      {
        title: "Essential",
        description: "A simple way to get started for you new to passfolio.",
        cost: "$29.90",
        period: "/month",
        features: [
          "Unlimited data",
          "5 Person saved",
          "A simple way for you new started to Passfolio.",
          "A simple way for you new started to Passfolio.",
        ],
        compares: {
          features: ["$29.90", "1(max 4)", "3", "10", "2", "1", "500", "10GB"],
          securities: [<Tick />],
          supports: [<Tick />, "40", <Tick />, <Tick />, <Eks />, <Eks />],
        },
      },
      {
        title: "Standard",
        description: "Best for freelance coders & designers who need",
        cost: "$39.90",
        period: "/month",
        features: [
          "Unlimited data",
          "5 Person saved",
          "A simple way for you new started to Passfolio.",
          "A simple way for you new started to Passfolio.",
        ],
        compares: {
          features: ["$49.90", "30", "100", "200", "20", "10", "10,000", "1TB"],
          securities: [<Tick />],
          supports: [
            <Tick />,
            "Unlimited",
            <Tick />,
            <Tick />,
            <Tick />,
            <Tick />,
          ],
        },
      },
      {
        title: "Plus",
        description: "Best for freelance coders & designers who need",
        cost: "$49.90",
        period: "/month",
        features: [
          "Unlimited data",
          "5 Person saved",
          "A simple way for you new started to Passfolio.",
          "A simple way for you new started to Passfolio.",
        ],
        compares: {
          features: ["$49.90", "30", "100", "200", "20", "10", "10,000", "1TB"],
          securities: [<Tick />],
          supports: [
            <Tick />,
            "Unlimited",
            <Tick />,
            <Tick />,
            <Tick />,
            <Tick />,
          ],
        },
      },
    ],
  };

  swiperAttribute = {
    slidesPerView: 3,
    center: false,
    gap: 32,
    grasp: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      tap: this.personal,
      swiper: this.swiperAttribute,
    };
    this.onBusinessBtnClick = this.onBusinessBtnClick.bind(this);
    this.onPersonalBtnClick = this.onPersonalBtnClick.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
  }

  componentDidMount() {
    this.resizeHandler();
    window.addEventListener("resize", this.resizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
  }

  resizeHandler() {
    if (window.innerWidth < SCREEN_SIZE.large) {
      this.swiperAttribute = {
        slidesPerView: 2,
        center: true,
        gap: 28,
        grasp: true,
      };

      this.setState(this.swiperAttribute);
    } else {
      this.swiperAttribute = {
        slidesPerView: 3,
        center: false,
        gap: 32,
        grasp: true,
      };

      this.setState(this.swiperAttribute);
    }
  }

  onPersonalBtnClick = () => {
    // get hero class
    const main = document.querySelector(".pricing");
    const tap = document.querySelector(".hero__top__tabs");
    // add class hero--business to hero
    if (main.classList.contains("pricing--business")) {
      main.classList.remove("pricing--business");
    }
    this.setState({ tap: this.personal });

    tap.classList.add("personal");
    if (tap.classList.contains("business")) {
      tap.classList.remove("business");
    }
  };

  onBusinessBtnClick = () => {
    // get hero class
    const main = document.querySelector(".pricing");
    const tap = document.querySelector(".hero__top__tabs");
    // add class hero--business to hero
    main.classList.add("pricing--business");
    this.setState({ tap: this.business });

    tap.classList.add("business");
    if (tap.classList.contains("personal")) {
      tap.classList.remove("personal");
    }
  };

  render() {
    return (
      <main className="pricing">
        <section className="hero">
          <div className="container">
            <div className="hero__wrapper">
              <div className="hero__top">
                <p className="hero__top-name">Pricing</p>
                <h1 className="hero__top-title">
                  Choose a Plan That's Right for You
                </h1>
                <div className="hero__top__tabs personal">
                  <a
                    className="hero__top__tabs-personal"
                    href="#personal"
                    onClick={this.onPersonalBtnClick}
                  >
                    personal
                  </a>
                  <a
                    className="hero__top__tabs-business"
                    href="#business"
                    onClick={this.onBusinessBtnClick}
                  >
                    business
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_triangle bottom_triangle--white"></div>
        </section>
        <section className="plans">
          <div className="container">
            <ul className="plans__ul">
              {this.state.tap.pricing.map((price, index) => (
                <li className={`plans__ul__list list${index + 1}`} key={index}>
                  <div className="plans__ul__list__inner">
                    <i className="plans__ul__list-icon">flags</i>
                    <h2 className="plans__ul__list-name">{price.title}</h2>
                    <p className="plans__ul__list-description">
                      {price.description}
                    </p>
                    <strong className="plans__ul__list-cost">
                      {price.cost}
                      <span>{price.period}</span>
                    </strong>
                    <Button
                      text="Get started"
                      type={`arrow ${index === 1 ? "flat-green" : "outline"}`}
                      color={`${index === 1 ? "white" : "green"}`}
                    />
                    <strong className="plans__ul__list-inc">
                      What's Included
                    </strong>
                    <ul className="plans__ul__list-benefits">
                      {price.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="data_credit">
          <div className="container">
            <p className="data_credit-name">Data Credit</p>
            <h1 className="data_credit-title">
              Data Credits can be purchased in blocks.
            </h1>
            <ul className="data_credit__cards">
              {credits.map((credit, index) => (
                <li
                  className={`data_credit__cards__list list${index + 1}`}
                  key={index}
                >
                  <span className="data_credit__cards__list-cost">
                    {credit.cost}
                  </span>
                  <strong className="data_credit__cards__list-point">
                    {credit.point}
                  </strong>
                  <em className="data_credit__cards__list-text">
                    {credit.descriptions}
                  </em>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="compare">
          <div className="container">
            <h1 className="compare-title">Compare Plans</h1>
            <div className="compare__wrapper">
              <div className="compare__plans">
                <div className="compare__plans__list features">
                  <dl className="compare__plans__list__info">
                    <dt className="compare__plans__list-title top">Features</dt>
                    {compareList.features.map((feature, index) => (
                      <dd className="compare__plans__list-text" key={index}>
                        {feature}
                      </dd>
                    ))}

                    <dt className="compare__plans__list-title">Security</dt>
                    {compareList.securities.map((security, index) => (
                      <dd className="compare__plans__list-text" key={index}>
                        {security}
                      </dd>
                    ))}

                    <dt className="compare__plans__list-title">Support</dt>
                    {compareList.supports.map((support, index) => (
                      <dd className="compare__plans__list-text" key={index}>
                        {support}
                      </dd>
                    ))}
                  </dl>
                </div>
                <Swiper
                  slidesPerView={this.swiperAttribute.slidesPerView}
                  spaceBetween={this.swiperAttribute.gap}
                  initialSlide={1}
                  centeredSlides={this.swiperAttribute.center}
                  grabCursor={this.swiperAttribute.grasp}
                  centeredSlidesBounds={true}
                >
                  {this.state.tap.pricing.map((price, index) => (
                    <SwiperSlide key={index}>
                      <div className={`compare__plans__list list${index + 1}`}>
                        <dl className="compare__plans__list__info">
                          <dt className="compare__plans__list-title top">
                            <strong className="compare__plans__list-title-name">
                              {price.title}
                            </strong>
                            <span className="compare__plans__list-title-cost">
                              {price.cost}
                              <em>{price.period}</em>
                            </span>
                            <Button
                              text="Get started"
                              type={`arrow ${
                                index === 1 ? "flat-green" : "outline"
                              }`}
                              color={`${index === 1 ? "white" : "green"}`}
                            />
                          </dt>
                          {price.compares.features.map((feature, index) => (
                            <dd
                              className="compare__plans__list-text"
                              key={index}
                            >
                              {feature}
                            </dd>
                          ))}
                          <dt className="compare__plans__list-title">&nbsp;</dt>
                          {price.compares.securities.map((security, index) => (
                            <dd
                              className="compare__plans__list-text"
                              key={index}
                            >
                              {security}
                            </dd>
                          ))}
                          <dt className="compare__plans__list-title">&nbsp;</dt>
                          {price.compares.supports.map((support, index) => (
                            <dd
                              className="compare__plans__list-text"
                              key={index}
                            >
                              {support}
                            </dd>
                          ))}
                        </dl>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="bottom_triangle bottom_triangle--grey-blue"></div>
        </section>
        <section className="mobile_compare">
          <div className="container">
            <h1 className="mobile_compare-title">Compare Plans</h1>
            <table className="mobile_compare__tbl">
              <thead>
                <tr>
                  {this.state.tap.pricing.map((price, index) => (
                    <th key={index}>{price.title}</th>
                  ))}
                </tr>
                <tr>
                  {this.state.tap.pricing.map((price, index) => (
                    <th key={index}>
                      <strong> {price.cost}</strong>
                      <em>{price.period}</em>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan="3">Features</th>
                </tr>
                {compareList.features.map((feature, index) => {
                  let grey = "grey";
                  if (index % 2 === 0) {
                    grey = "";
                  }
                  return (
                    <Fragment key={index}>
                      <tr className={grey}>
                        <td colSpan="3">{feature}</td>
                      </tr>
                      <tr className={grey}>
                        {this.state.tap.pricing.map((price, idx) => (
                          <td key={idx}>{price.compares.features[index]}</td>
                        ))}
                      </tr>
                    </Fragment>
                  );
                })}
                <tr>
                  <th colSpan="3">Security</th>
                </tr>
                {compareList.securities.map((security, index) => {
                  let grey = "grey";
                  if (index % 2 === 1) {
                    grey = "";
                  }
                  return (
                    <Fragment key={index}>
                      <tr className={grey}>
                        <td colSpan="3">{security}</td>
                      </tr>
                      <tr className={grey}>
                        {this.state.tap.pricing.map((price, idx) => (
                          <td key={idx}>{price.compares.securities[index]}</td>
                        ))}
                      </tr>
                    </Fragment>
                  );
                })}
                <tr>
                  <th colSpan="3">Support</th>
                </tr>
                {compareList.supports.map((support, index) => {
                  let grey = "grey";
                  if (index % 2 === 0) {
                    grey = "";
                  }
                  return (
                    <Fragment key={index}>
                      <tr className={grey}>
                        <td colSpan="3">{support}</td>
                      </tr>
                      <tr className={grey}>
                        {this.state.tap.pricing.map((price, idx) => (
                          <td key={idx}>{price.compares.supports[index]}</td>
                        ))}
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="bottom_triangle"></div>
        </section>
        <FrequentlyAskAccordion />
        <ReadyGet />
      </main>
    );
  }
}

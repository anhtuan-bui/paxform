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
import { withTranslation } from "react-i18next";

import personalBackground from "../../assets/images/bg-pricing-personal.svg";
import businessBackground from "../../assets/images/bg-pricing-business.svg";

class Pricing extends Component {
  t = this.props.t;
  registerLink = process.env.REACT_APP_REGISTER_LINK;
  personal = {
    pricing: [
      {
        title: this.t("free"),
        description: this.t("pricingPage.free.description"),
        cost: "$0",
        period: `/${this.t("forever")}`,
        features: [
          this.t("pricingPage.free.features.first"),
          this.t("pricingPage.free.features.second"),
          this.t("pricingPage.free.features.third"),
          this.t("pricingPage.free.features.fourth"),
        ],
        compares: {
          features: [
            "$29.90",
            `1 (${this.t("max")} 4)`,
            "3",
            "10",
            "2",
            "1",
            "500",
            "10GB",
          ],
          securities: [<Tick />],
          supports: [<Tick />, "40", <Tick />, <Tick />, <Eks />, <Eks />],
        },
      },
      {
        title: this.t("premium"),
        description: this.t("pricingPage.premium.description"),
        cost: "$50",
        period: `/${this.t("forever")}`,
        features: [
          this.t("pricingPage.premium.features.first"),
          this.t("pricingPage.premium.features.second"),
          this.t("pricingPage.premium.features.third"),
          this.t("pricingPage.premium.features.fourth"),
        ],

        compares: {
          features: [
            "$39.90",
            `5 (${this.t("max")} 9)`,
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
            this.t("unlimited"),
            <Tick />,
            <Tick />,
            <Tick />,
            <Tick />,
          ],
        },
      },
      {
        title: this.t("family"),
        description: this.t("pricingPage.family.description"),
        cost: this.t("custom"),
        period: "",
        features: [
          this.t("pricingPage.family.features.first"),
          this.t("pricingPage.family.features.second"),
          this.t("pricingPage.family.features.third"),
          this.t("pricingPage.family.features.fourth"),
        ],
        compares: {
          features: ["$49.90", "30", "100", "200", "20", "10", "10,000", "1TB"],
          securities: [<Tick />],
          supports: [
            <Tick />,
            this.t("unlimited"),
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
        title: this.t("essential"),
        description: this.t("pricingPage.essential.description"),
        cost: "$29.90",
        period: `/${this.t("month")}`,
        features: [
          this.t("pricingPage.essential.features.first"),
          this.t("pricingPage.essential.features.second"),
          this.t("pricingPage.essential.features.third"),
          this.t("pricingPage.essential.features.fourth"),
        ],
        compares: {
          features: [
            "$29.90",
            `1 (${this.t("max")} 4)`,
            "3",
            "10",
            "2",
            "1",
            "500",
            "10GB",
          ],
          securities: [<Tick />],
          supports: [<Tick />, "40", <Tick />, <Tick />, <Eks />, <Eks />],
        },
      },
      {
        title: this.t("standard"),
        description: this.t("pricingPage.standard.description"),
        cost: "$39.90",
        period: `/${this.t("month")}`,
        features: [
          this.t("pricingPage.standard.features.first"),
          this.t("pricingPage.standard.features.second"),
          this.t("pricingPage.standard.features.third"),
          this.t("pricingPage.standard.features.fourth"),
        ],
        compares: {
          features: ["$49.90", "30", "100", "200", "20", "10", "10,000", "1TB"],
          securities: [<Tick />],
          supports: [
            <Tick />,
            this.t("unlimited"),
            <Tick />,
            <Tick />,
            <Tick />,
            <Tick />,
          ],
        },
      },
      {
        title: this.t("plus"),
        description: this.t("pricingPage.plus.description"),
        cost: "$49.90",
        period: `/${this.t("month")}`,
        features: [
          this.t("pricingPage.plus.features.first"),
          this.t("pricingPage.plus.features.second"),
          this.t("pricingPage.plus.features.third"),
          this.t("pricingPage.plus.features.fourth"),
        ],
        compares: {
          features: ["$49.90", "30", "100", "200", "20", "10", "10,000", "1TB"],
          securities: [<Tick />],
          supports: [
            <Tick />,
            this.t("unlimited"),
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
    const credits = [
      {
        cost: "$19.90",
        point: "500",
        descriptions: this.t("pricingPage.silver.description"),
      },
      {
        cost: "$99.90",
        point: "3,000",
        descriptions: this.t("pricingPage.green.description"),
      },
      {
        cost: "$299.90",
        point: "10,000",
        descriptions: this.t("pricingPage.blue.description"),
      },
    ];

    const compareList = {
      features: [
        this.t("pricingPage.compareList.features.first"),
        this.t("pricingPage.compareList.features.second"),
        this.t("pricingPage.compareList.features.third"),
        this.t("pricingPage.compareList.features.fourth"),
        this.t("pricingPage.compareList.features.fifth"),
        this.t("pricingPage.compareList.features.sixth"),
        this.t("pricingPage.compareList.features.seventh"),
        this.t("pricingPage.compareList.features.eight"),
      ],
      securities: [this.t("pricingPage.compareList.security")],
      supports: [
        this.t("pricingPage.compareList.supports.first"),
        this.t("pricingPage.compareList.supports.second"),
        this.t("pricingPage.compareList.supports.third"),
        this.t("pricingPage.compareList.supports.fourth"),
        this.t("pricingPage.compareList.supports.fifth"),
        this.t("pricingPage.compareList.supports.sixth"),
      ],
    };
    return (
      <main className="pricing">
        <section className="hero">
          <div className="container">
            <div className="hero__wrapper">
              <div className="hero__top">
                <p className="hero__top-name">
                  {this.t("pricingPage.hero.name")}
                </p>
                <h1 className="hero__top-title">
                  {this.t("pricingPage.hero.title")}
                </h1>
                <div className="hero__top__tabs personal">
                  <a
                    className="hero__top__tabs-personal"
                    href="#personal"
                    onClick={this.onPersonalBtnClick}
                  >
                    {this.t("personal")}
                  </a>
                  <a
                    className="hero__top__tabs-business"
                    href="#business"
                    onClick={this.onBusinessBtnClick}
                  >
                    {this.t("business")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="bottom_triangle bottom_triangle--white"></div> */}
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
                      text={this.t("getStartedBtn")}
                      type={`arrow ${index === 1 ? "flat-green" : "outline"}`}
                      color={`${index === 1 ? "white" : "green"}`}
                      href={this.registerLink}
                    />
                    <strong className="plans__ul__list-inc">
                      {this.t("plans.included")}
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
          <div className="plans__background">
            <img
              className="plans__background-image"
              src={
                this.state.tap.pricing[0].title === "Free"
                  ? personalBackground
                  : businessBackground
              }
              alt="personal background"
              aria-hidden="true"
            />
          </div>
        </section>
        <section className="data_credit">
          <div className="container">
            <p className="data_credit-name">
              {this.t("pricingPage.dataCredit.name")}
            </p>
            <h1 className="data_credit-title">
              {this.t("pricingPage.dataCredit.title")}
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
            <h1 className="compare-title">
              {this.t("pricingPage.compare.title")}
            </h1>
            <div className="compare__wrapper">
              <div className="compare__plans">
                <div className="compare__plans__list features">
                  <dl className="compare__plans__list__info">
                    <dt className="compare__plans__list-title top">
                      {this.t("features")}
                    </dt>
                    {compareList.features.map((feature, index) => (
                      <dd className="compare__plans__list-text" key={index}>
                        {feature}
                      </dd>
                    ))}

                    <dt className="compare__plans__list-title">
                      {this.t("security")}
                    </dt>
                    {compareList.securities.map((security, index) => (
                      <dd className="compare__plans__list-text" key={index}>
                        {security}
                      </dd>
                    ))}

                    <dt className="compare__plans__list-title">
                      {this.t("support")}
                    </dt>
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
                              text={this.t("getStartedBtn")}
                              type={`arrow ${
                                index === 1 ? "flat-green" : "outline"
                              }`}
                              color={`${index === 1 ? "white" : "green"}`}
                              href={this.registerLink}
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
            <h1 className="mobile_compare-title">
              {this.t("pricingPage.compare.title")}
            </h1>
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
                  <th colSpan="3">{this.t("features")}</th>
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
                  <th colSpan="3">{this.t("security")}</th>
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
                  <th colSpan="3">{this.t("support")}</th>
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
export default withTranslation()(Pricing);


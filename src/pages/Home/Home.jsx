import React, { Component } from "react";
import Button from "../../components/Button/Button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper";

import homeHeroIllustrator from "../../assets/images/home/Hero Illustration.png";
import businessIllustration from "../../assets/images/home/Business Illustration.png";

import bgBusinessIlustration from "../../assets/images/home/Bg-bi.svg";

import personalIllustration from "../../assets/images/home/Personal illustration.png";
import bgPersonalIlustration from "../../assets/images/home/Bg-personal.svg";

// import securityPolicyImage from "../../assets/images/home/security policy.svg";
// import bgSecurityPolicy from "../../assets/images/home/Bg-security.svg";

// import { ReactComponent as HeroRight } from '../../assets/images/large-hero.svg';
// import { ReactComponent as CertificateIllustrator } from '../../assets/images/certificate-illustrator.svg';

import flipreach from "../../assets/images/flipreach.svg";
import amazon from "../../assets/images/amazon.svg";
import flowbase from "../../assets/images/flowbase.svg";
import linkedin from "../../assets/images/linkedin.svg";
import paypal from "../../assets/images/paypal.svg";

import info from "../../assets/icons/info.svg";
import simpleForm from "../../assets/icons/simple forms.svg";
import electronicallySign from "../../assets/icons/electronically sign.svg";

import icon11 from "../../assets/images/icon1-1.svg";
import icon12 from "../../assets/images/icon1-2.svg";
import icon13 from "../../assets/images/icon1-3.svg";
// import businessImg from "../../assets/images/Business Image.svg";

import icon21 from "../../assets/images/icon2-1.svg";
import icon22 from "../../assets/images/icon2-2.svg";
import icon23 from "../../assets/images/icon2-3.svg";
// import icon24 from "../../assets/images/icon2-4.svg";
import icon25 from "../../assets/images/icon2-5.svg";
// import personalPlatformImg from "../../assets/images/Personal Platform Image.svg";

// import securityPolicy from "../../assets/images/security-policy.svg";

import information from "../../assets/images/home/simplify1.svg";
// import information from "../../assets/images/all information.svg";
import mostForms from "../../assets/images/home/simplify2.svg";
// import mostForms from "../../assets/images/most forms.svg";

import SecurityPolicy from "../../components/SecurityPolicy/SecurityPolicy";
import Testimonial from "../../components/Testimonial/Testimonial";
import GetStarted from "../../components/GetStarted/GetStarted";
import { SCREEN_SIZE } from "../../configurations/configurations";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import "./Home.scss";
import { withTranslation } from "react-i18next";

var home = {
  numberOfComapniesPerView: 4,
  autoplaySpeed: 4000,
};

class Home extends Component {
  registerLink = process.env.REACT_APP_REGISTER_LINK;
  constructor(props) {
    super(props);

    this.state = home;
    // bind handleResize to this component
    this.handleResize = this.handleResize.bind(this);

    //bind handleHeroImageSize to this component
    this.handleHeroImageSize = this.handleHeroImageSize.bind(this);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= SCREEN_SIZE.large) {
      home = {
        numberOfComapniesPerView: 4,
      };
    } else if (
      screenWidth < SCREEN_SIZE.large &&
      screenWidth >= SCREEN_SIZE.medium
    ) {
      home = {
        numberOfComapniesPerView: 4,
      };
    } else if (
      screenWidth < SCREEN_SIZE.medium &&
      screenWidth >= SCREEN_SIZE.small
    ) {
      home = {
        numberOfComapniesPerView: 2,
      };
    } else if (screenWidth < SCREEN_SIZE.small) {
      home = {
        numberOfComapniesPerView: 2,
      };
    }

    this.handleHeroImageSize();
    this.setState(home);
  }

  handleHeroImageSize() {
    // select hero image, get height and width
    const heroImage = document.querySelector(".hero__image-large");
    const heroImageHeight = heroImage.clientHeight;
    const heroImageWidth = heroImage.clientWidth;

    // select hero empty box and set height and width
    const heroEmptyBox = document.querySelector(".hero__empty-box");
    heroEmptyBox.style.minHeight = heroImageHeight + 60 + "px";
    heroEmptyBox.style.height = heroImageHeight + 60 + "px";
    heroEmptyBox.style.width = heroImageWidth + "px";
  }

  render() {
    const { t } = this.props;
    const businessPlatform = [
      {
        image: icon11,
        title: t("home.businessPlatform.platformTitle1"),
        description: t("home.businessPlatform.platformDescription1"),
      },
      {
        image: icon12,
        title: t("home.businessPlatform.platformTitle2"),
        description: t("home.businessPlatform.platformDescription2"),
      },
      {
        image: icon13,
        title: t("home.businessPlatform.platformTitle3"),
        description: t("home.businessPlatform.platformDescription3"),
      },
      {
        image: icon13,
        title: t("home.businessPlatform.platformTitle4"),
        description: t("home.businessPlatform.platformDescription4"),
      },
    ];

    const personalPlatform = [
      {
        image: info,
        title: t("home.personalPlatform.platformTitle1"),
        description: t("home.personalPlatform.platformDescription1"),
      },
      {
        image: icon22,
        title: t("home.personalPlatform.platformTitle2"),
        description: t("home.personalPlatform.platformDescription2"),
      },
      {
        image: simpleForm,
        title: t("home.personalPlatform.platformTitle3"),
        description: t("home.personalPlatform.platformDescription3"),
      },
      // {
      //   image: icon24,
      //   title: t("home.personalPlatform.platformTitle4"),
      //   description: t("home.personalPlatform.platformDescription4"),
      // },
      {
        image: electronicallySign,
        title: t("home.personalPlatform.platformTitle5"),
        description: t("home.personalPlatform.platformDescription5"),
      },
    ];
    return (
      <main className="home">
        <section className="hero">
          <div className="container hero__wrapper">
            <div className="hero__content">
              <h1
                className="hero__title"
                dangerouslySetInnerHTML={{
                  __html: t("home.hero.title"),
                }}
              ></h1>
              <p className="hero__description">{t("home.hero.description")}</p>
              <div className="hero__button">
                <Button
                  text={t("signUp")}
                  type="flat-green arrow"
                  color="white"
                  href={this.registerLink}
                />
                {/* <Button
                  text={t("howItWork")}
                  type="outline triangle-right"
                  color="white"
                /> */}
              </div>
            </div>
            <div className="hero__empty-box"></div>
            <div className="hero__image">
              <img
                className="hero__image-large"
                src={homeHeroIllustrator}
                alt="large hero illustrator"
              />
            </div>
          </div>
          <div className="bottom_triangle"></div>
        </section>
        <section className="slider">
          <div className="container ">
            <div className="slider__container">
              <Swiper
                spaceBetween={30}
                slidesPerView={home.numberOfComapniesPerView}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                  delay: 4000,
                }}
                modules={[Autoplay]}
                className="slider__swiper"
              >
                <SwiperSlide>
                  <div className="slider__image">
                    <img src={flowbase} alt="flowbase" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider__image">
                    <img src={flipreach} alt="flipreach" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider__image">
                    <img src={amazon} alt="amazon" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider__image">
                    <img src={linkedin} alt="linkedin" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider__image">
                    <img src={paypal} alt="paypal" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        <section className="platform">
          <div className="container platform__container">
            <div className="platform__top">
              <div className="platform__top-left">
                <p className="platform__name">
                  {t("home.businessPlatform.name")}
                </p>
                <h2 className="platform__title">
                  {t("home.businessPlatform.title")}
                </h2>
              </div>
              <div className="platform__top-right">
                <Button
                  type="flat-green arrow"
                  color="white"
                  text={t("home.businessPlatform.learnMoreAboutBusiness")}
                  href="/business"
                />
              </div>
            </div>
            <div className="business_platform__content">
              <div className="business_platform__content-grid">
                {businessPlatform.map((item, index) => {
                  return (
                    <div
                      className="business_platform__content-item"
                      key={index}
                    >
                      <div className="business_platform__content-item-image">
                        <img src={item.image} alt="icon" />
                      </div>
                      <h3 className="business_platform__content-item-title">
                        {item.title}
                      </h3>
                      <p className="business_platform__content-item-description">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
                <div className="business_platform__image">
                  <img src={businessIllustration} alt="Business" />
                </div>
              </div>
            </div>
          </div>
          <img
            className="image__background"
            src={bgBusinessIlustration}
            alt=""
            aria-hidden="true"
          />
          <div className="bottom_triangle bottom_triangle--dark-blue"></div>
        </section>

        <section className="platform background--dark-blue platform__title--white">
          <div className="container platform__container">
            <div className="platform__top">
              <div className="platform__top-left">
                <p className="platform__name platform__name--green">
                  {t("home.personalPlatform.name")}
                </p>
                <h2 className="platform__title ">
                  {t("home.personalPlatform.title")}
                </h2>
              </div>
              <div className="platform__top-right">
                <Button
                  type="outline arrow"
                  color="green"
                  text={t("home.personalPlatform.learnMoreAboutPersonal")}
                  href="/personal"
                />
              </div>
            </div>
            <div className="personal_platform__content">
              <div className="business_platform__content-grid">
                {personalPlatform.map((item, index) => {
                  return (
                    <div
                      className="personal_platform__content-item"
                      key={index}
                    >
                      <div className="personal_platform__content-item-image">
                        <img src={item.image} alt="icon" />
                      </div>
                      <h3 className="personal_platform__content-item-title">
                        {item.title}
                      </h3>
                      <p className="personal_platform__content-item-description">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
                <div className="personal_platform__image">
                  <img src={personalIllustration} alt="Personel" />
                </div>
              </div>
            </div>
          </div>

          <img
            className="image__background-personal"
            src={bgPersonalIlustration}
            alt=""
            aria-hidden="true"
          />
          <div className="bottom_triangle bottom_triangle--light-blue"></div>
        </section>

        <SecurityPolicy />

        <section className="testimonial">
          <Testimonial />
          <div className="bottom_triangle bottom_triangle--blue"></div>
        </section>

        <section className="simplify">
          <div className="container simplify__container">
            <p className="simplify__why section_name">
              {t("home.simplicity.whyPaxform")}
            </p>
            <h2 className="simplify__title">{t("home.simplicity.title")}</h2>
            <div className="simplify_flexbox">
              <div className="simplify_flexbox__content">
                <h3 className="simplify_flexbox__content-title">
                  {t("home.simplicity.cardTitle1")}
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("home.simplicity.cardDescription1"),
                  }}
                ></p>
              </div>
              <div className="simplify_flexbox__image">
                <img src={information} alt="all information" />
              </div>
            </div>

            <div className="simplify_flexbox rtl">
              <div className="simplify_flexbox__content ltr">
                <h3 className="simplify_flexbox__content-title">
                  {t("home.simplicity.cardTitle2")}
                </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("home.simplicity.cardDescription2"),
                  }}
                ></p>
              </div>
              <div className="simplify_flexbox__image">
                <img src={mostForms} alt="most forms" />
              </div>
            </div>
          </div>

          <div className="bottom_triangle bottom_triangle--light-blue"></div>
        </section>

        <GetStarted />
      </main>
    );
  }
}

export default withTranslation()(Home);

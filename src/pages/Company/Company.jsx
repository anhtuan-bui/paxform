import React, { Component } from "react";
import "./Company.scss";

import ReadyGet from "../../components/ReadyGet/ReadyGet";
import about from "../../assets/images/card3.png";
import vision from "../../assets/images/card1.png";
import diversity from "../../assets/images/diversity.png";

import sampleAvatar from "../../assets/images/sample-avatar.png";

import "react-loading-skeleton/dist/skeleton.css";

import { SCREEN_SIZE } from "../../configurations/configurations";
import { useQuery } from "@apollo/client";
import { GET_TEAM_MEMBERS } from "../../lib/graphqlQuery";
import Skeleton from "react-loading-skeleton";
import { withTranslation } from "react-i18next";

class Company extends Component {
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    const visionImage = document.querySelector(".vision__image");
    const bigImage = document.querySelector(".vision__image-illustration-back");

    const iframe = document.querySelector(".company_video__iframe");
    if (window.innerWidth <= SCREEN_SIZE.medium) {
      visionImage.style.minHeight = bigImage.height + "px";
    } else {
      visionImage.style.minHeight = null;
    }

    iframe.style.height = (iframe.clientWidth * 9) / 16 + "px";
  }
  render() {
    const { t } = this.props;
    return (
      <main className="company">
        <section className="hero" background="light">
          <div className="container">
            <div className="hero__wrapper">
              <div className="hero__image">
                <div className="hero__image-mask">
                  <img
                    className="hero__image-illustration"
                    src={about}
                    alt="company about us"
                  />
                </div>
              </div>
              <div className="hero__content">
                <p className="hero__name section_name">
                  {t("companyPage.hero.name")}
                </p>
                <h1 className="hero__title section_title">
                  {t("companyPage.hero.title")}
                </h1>
                <p className="hero__description section__description">
                  {t("companyPage.hero.description")}
                </p>
              </div>
            </div>
          </div>
          {/* <img
            className="hero__background"
            src={companyHeroBg}
            alt="company hero background"
            aria-hidden="true"
          /> */}
          <div className="hero__background">
            <div className="hero__background-left"></div>
            <div className="hero__background-right"></div>
          </div>
        </section>
        <section className="vision">
          <div className="container">
            <div className="vision__wrapper">
              <div className="vision__image">
                <div className="vision__image-mask vision__image-mask-vision">
                  <img
                    className="vision__image-illustration vision__image-illustration-back"
                    src={vision}
                    alt="company vision"
                  />
                </div>
                <div className="vision__image-mask vision__image-mask-about">
                  <img
                    className="vision__image-illustration"
                    src={about}
                    alt="company about us"
                  />
                </div>
              </div>
              <div className="vision__content">
                <p className="vision__name section_name">
                  {t("companyPage.vision.name")}
                </p>
                <h1 className="vision__title section_title">
                  {t("companyPage.vision.title")}
                </h1>
                <p className="vision__description section__description">
                  {t("companyPage.vision.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="company_video">
          <div className="container">
            <div className="company_video__box">
              <iframe
                className="company_video__iframe"
                src="https://www.youtube.com/embed/i8NETqtGHms"
                title="YouTube video player"
              ></iframe>
            </div>
          </div>
          <div className="company_video__background"></div>
        </section>

        <Meet />

        <section className="diversity">
          <div className="container diversity__wrapper">
            <div className="diversity__content">
              <h1 className="diversity__title section__title">
                {t("companyPage.diversity.title")}
              </h1>
              <div
                className="diversity__description section__description"
                dangerouslySetInnerHTML={{
                  __html: t("companyPage.diversity.description"),
                }}
              ></div>
            </div>
            <div className="diversity__image">
              <img
                className="diversity__illustration"
                src={diversity}
                alt="diversity"
              />
              {/* <BackgroundGradient className="diversity__background-gradient"/> */}
            </div>
          </div>
          <div className="diversity__background-gradient"></div>
        </section>

        <ReadyGet />
      </main>
    );
  }
}

const Meet = () => {
  const { loading, error, data } = useQuery(GET_TEAM_MEMBERS);

  if (error) {
    return <div>Error: {error}</div>;
  }

  let teamMembers = !loading
    ? [...data.teamMembers.nodes]
    : Array.from({ length: 8 }, (i = 0) => i++);
  teamMembers = teamMembers.sort((a, b) => a.orderNumber - b.orderNumber);

  return (
    <section className="meet">
      <div className="container">
        <h1 className="meet__title section__title">Meet The Team</h1>
        <div className="meet__grid">
          {teamMembers.map((info, index) => (
            <MeetItem info={info} key={index} loading={loading} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MeetItem = ({ info }) => {
  const iconColor = info.color ? info.color : "#0a61b4";
  const picture = info.picture ? info.picture.node.sourceUrl : sampleAvatar;
  const backgroundGradient = info.color
    ? [info.color, info.gradientEndColor]
    : ["#0a61b4", "#074581"];
  const name = info.fullName ? info.fullName : <Skeleton />;
  const position = info.position ? info.position : <Skeleton />;

  return (
    <div className="meet_item">
      <div className="meet_item__image">
        <div className="meet_item__icon-box">
          <LinkedIn
            className="meet_item__icon meet_item__icon--green"
            color={iconColor}
          />
        </div>

        <img
          className="meet_item__picture"
          src={picture}
          alt={!info.loading ? name : ""}
        />

        <div
          className="meet_item__background"
          style={{
            background: `linear-gradient(104.14deg, ${backgroundGradient[0]} 20.63%, ${backgroundGradient[1]} 177.09%)`,
          }}
        ></div>
      </div>
      <h3 className="meet_item__name">{name}</h3>
      <p className="meet_item__position">{position}</p>
    </div>
  );
};

const LinkedIn = ({ color }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.48487 7.19631C6.69327 7.19631 7.67287 6.21671 7.67287 5.00831C7.67287 3.79991 6.69327 2.82031 5.48487 2.82031C4.27648 2.82031 3.29688 3.79991 3.29688 5.00831C3.29688 6.21671 4.27648 7.19631 5.48487 7.19631Z"
        fill={color}
      />
      <path
        d="M9.73575 8.85469V20.9937H13.5047V14.9907C13.5047 13.4067 13.8027 11.8727 15.7667 11.8727C17.7037 11.8727 17.7277 13.6837 17.7277 15.0907V20.9947H21.4988V14.3377C21.4988 11.0677 20.7948 8.55469 16.9728 8.55469C15.1378 8.55469 13.9078 9.56169 13.4047 10.5147H13.3537V8.85469H9.73575ZM3.59375 8.85469H7.36875V20.9937H3.59375V8.85469Z"
        fill={color}
      />
    </svg>
  );
};
export default withTranslation()(Company);

import React, { Fragment } from "react";
import "./GetStarted.scss";

import googlePlay from "../../assets/images/google-play.svg";
import appstore from "../../assets/images/appstore.svg";
import getStarted from "../../assets/images/get started.svg";

import alwaysKnows from "../../assets/images/always-know.svg";
import startIntegration from "../../assets/images/start-integration.svg";
import Button from "../Button/Button";

import logo from "../../assets/icons/logo.svg";

// import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";
import { useTranslation } from "react-i18next";

export default function GetStarted() {
  const { t } = useTranslation();
  const googlePlayLink =
    "https://play.google.com/store/apps/details?id=com.paxform&hl=en_AU&gl=US";
  const appleStoreLink = "https://apps.apple.com/app/paxform/id1565492350";
  return (
    <Fragment>
      <section className="get_started">
        <div className="container get_started__container">
          <div className="get_started__content">
            <img src={logo} alt="logo" />
            <h1
              dangerouslySetInnerHTML={{ __html: t("getStarted.title") }}
            ></h1>
            <div className="get_started__buttons">
              <a
                className="get_started__button"
                href={googlePlayLink}
                target="_blank"
                rel="noreferrer"
              >
                <img src={googlePlay} alt="google play" />
              </a>
              <a
                className="get_started__button"
                href={appleStoreLink}
                target="_blank"
                rel="noreferrer"
              >
                <img src={appstore} alt="app store" />
              </a>
            </div>
          </div>
          <div className="get_started__image">
            <img src={getStarted} alt="get started" />
          </div>
        </div>
      </section>

      <section className="love_to_hear">
        <div className="container ">
          <div className="love_to_hear__container">
            {/* <div className="love_to_hear__box-left"> */}
            <div className="love_to_hear__box-left">
              <h1>{t("getStarted.cardTitle1")}</h1>
              <p>{t("getStarted.cardDescription1")}</p>

              <Button
                className="love_to_hear__button"
                type="outline arrow"
                color="green"
                text={t("contactUs")}
                href="/contact-us"
              />
            </div>
            <div className="love_to_hear__box-right-item">
              <div className="love_to_hear__box-right-item-image">
                <img src={alwaysKnows} alt="always know" />
              </div>
              <h3>{t("getStarted.cardTitle2")}</h3>
              <p>{t("getStarted.cardDescription2")}</p>
              {/* <a href="https://">
                <span className="span--hover">{t("learnMore")}</span>
                <ArrowRight />
              </a> */}
            </div>
            <div className="love_to_hear__box-right-item">
              <div className="love_to_hear__box-right-item-image">
                <img src={startIntegration} alt="start integration" />
              </div>
              <h3>{t("getStarted.cardTitle3")}</h3>
              <p>{t("getStarted.cardDescription3")}</p>
              {/* <a href="https://">
                <span className="span--hover">{t("learnMore")}</span>
                <ArrowRight />
              </a> */}
            </div>
            {/* </div> */}
          </div>
        </div>

        <div className="bottom_triangle bottom_triangle--footer"></div>
      </section>
    </Fragment>
  );
}

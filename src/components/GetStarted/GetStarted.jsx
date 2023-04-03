import React, { Component, Fragment } from "react";
import "./GetStarted.scss";

import googlePlay from "../../assets/images/google-play.svg";
import appstore from "../../assets/images/appstore.svg";
import getStarted from "../../assets/images/get started.svg";

import alwaysKnows from "../../assets/images/always-know.svg";
import startIntegration from "../../assets/images/start-integration.svg";
import Button from "../Button/Button";

import logo from "../../assets/icons/logo.svg";

import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";

export default class GetStarted extends Component {
  googlePlayLink =
    "https://play.google.com/store/apps/details?id=com.paxform&hl=en_AU&gl=US";
  appleStoreLink = "https://apps.apple.com/app/paxform/id1565492350";
  render() {
    return (
      <Fragment>
        <section className="get_started">
          <div className="container get_started__container">
            <div className="get_started__content">
              <img src={logo} alt="logo" />
              <h1>
                Get started for free. <br />
                Download from your app store.
              </h1>
              <div className="get_started__buttons">
                <a
                  className="get_started__button"
                  href={this.googlePlayLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={googlePlay} alt="google play" />
                </a>
                <a
                  className="get_started__button"
                  href={this.appleStoreLink}
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
                <h1>We’d love to hear from you!</h1>
                <p>
                  You can also contact us to design a custom package for your
                  business.automatically match that data no matter which form
                  you are filling in. Say goodbye to manually inputting the same
                  data over and over again.
                </p>

                <Button
                  className="love_to_hear__button"
                  type="outline arrow"
                  color="green"
                  text="Contact Us"
                  href="/contact-us"
                />
              </div>
              <div className="love_to_hear__box-right-item">
                <div className="love_to_hear__box-right-item-image">
                  <img src={alwaysKnows} alt="always know" />
                </div>
                <h3>Always know what you pay</h3>
                <p>
                  Experience a new level of convenience by using your stored
                  signatures to electronically sign your documents.
                </p>
                <a href="https://">
                  <span className="span--hover">Learn more</span>
                  <ArrowRight />
                </a>
              </div>
              <div className="love_to_hear__box-right-item">
                <div className="love_to_hear__box-right-item-image">
                  <img src={startIntegration} alt="start integration" />
                </div>
                <h3>Start your integration</h3>
                <p>
                  Experience a new level of convenience by using your stored
                  signatures to electronically sign your documents.
                </p>
                <a href="https://">
                  <span className="span--hover">Learn more</span>
                  <ArrowRight />
                </a>
              </div>
              {/* </div> */}
            </div>
          </div>

          <div className="bottom_triangle bottom_triangle--footer"></div>
        </section>
      </Fragment>
    );
  }
}

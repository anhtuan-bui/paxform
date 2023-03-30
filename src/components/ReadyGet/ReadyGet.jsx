import React, { Component, Fragment } from "react";
import "./ReadyGet.scss";
import alwaysKnows from "../../assets/images/always-know.svg";
import startIntegration from "../../assets/images/start-integration.svg";
import Button from "../Button/Button";
import SectionTriangleRight from "../SectionTriangleRight/SectionTriangleRight";

import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";

export default class GetStarted extends Component {
  render() {
    return (
      <Fragment>
        <section className="ready_to_get">
          <div className="container">
            <div className="ready_to_get__container">
              <div className="ready_to_get__box-left">
                <h1>Ready to get started?</h1>
                <p>
                  You can also contact us to design a custom package for your
                  business.automatically match that data no matter which form
                  you are filling in. Say goodbye to manually inputting the same
                  data over and over again.
                </p>

                <p>
                  Explore Stripe Payments, or create an account instantly and
                  start accepting payments.
                </p>

                <Button type="outline arrow" text="Contact Us" />
              </div>
              <div className="ready_to_get__box-right-item">
                <div className="ready_to_get__box-right-item-image">
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
              <div className="ready_to_get__box-right-item">
                <div className="ready_to_get__box-right-item-image">
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

          {/* <div className="bottom_triangle bottom_triangle--footer"></div> */}
          <SectionTriangleRight variant="footer" />
        </section>
      </Fragment>
    );
  }
}

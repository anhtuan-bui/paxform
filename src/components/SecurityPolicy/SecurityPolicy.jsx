import React, { Component} from "react";
import "./SecurityPolicy.scss";

import Button from "../Button/Button";

import securityPolicyImage from "../../assets/images/home/security policy.svg";
import bgBlue from "../../assets/images/UseCases/BgBlue.svg";

export default class SecurityPolicy extends Component {
  render() {
    return (
      <section className="security_policy">
        <div className="container security_policy__container">
          <div className="security_policy__content">
            <p className="security_policy__name">SECURITY POLICY</p>
            <h2 className="security_policy__title">
              Only you can access your data. Not us—Not anyone else.
            </h2>
            <p className="security_policy__description">
              Paxform will never share your data with anyone. What’s more, no
              one at Paxform can view or access your information. Our mission is
              to apply end-to-end encryption to every piece of information
              stored, protecting the data of organizations and individuals at
              all stages and at all costs.
            </p>
            <p className="security_policy__description">
              Only you decide which parties can view what pieces of information.
              Our security architecture ensures that personal data is
              decentralized, guaranteeing that the point of access in a
              potential security threat will not reveal any information.
            </p>

            <div className="security_policy__button">
              <Button type="outline arrow" text="Learn more" />
            </div>
          </div>
          <div className="security_policy__image">
            <img
              className="security_policy__image-illustration"
              src={securityPolicyImage}
              alt="security policy"
            />
            <img
              className="security_policy__image-background"
              src={bgBlue}
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="bottom_triangle bottom_triangle--white"></div>
      </section>
    );
  }
}

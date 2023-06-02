import React, { Fragment } from "react";
import Button from "../Button/Button";
import { ReactComponent as Tick } from "../../assets/images/tick.svg";
import "./PlanPricing.scss";
import { t } from "i18next";

export default function PlanPricing({ plans, page }) {
  const registerLink = process.env.REACT_APP_REGISTER_LINK;
  const android = process.env.REACT_APP_ANDROID;
  const apple = process.env.REACT_APP_APPLE;
  return (
    <div className="plans__pricing">
      {plans.map((plan, index) => (
        <Fragment key={index}>
          <div
            className={`pricing_box pricing_box--top ${
              plan.mainColor ? `pricing_box--${plan.mainColor}` : ""
            }`}
          >
            <div className="pricing_box__top">
              <div
                className={`pricing_box__dot ${
                  plan.mainColor ? `pricing_box__dot--${plan.mainColor}` : ""
                }`}
              ></div>
              <h2 className="pricing_box__title">{plan.title}</h2>
              <p className="pricing_box__description">{plan.description}</p>
            </div>
          </div>

          <div
            className={`pricing_box ${
              plan.mainColor ? `pricing_box--${plan.mainColor}` : ""
            }`}
          >
            <div className="pricing_box__price">
              <span className="pricing_box__price-bt">
                {typeof plan.price[0] === "number"
                  ? `US$${plan.price[0].toFixed(2)}`
                  : plan.price[0]}
              </span>
              <span className="pricing_box__price-forever">
                {plan.price[1] ? ` / ${plan.price[1].toLowerCase()}` : ""}
              </span>
            </div>
            {page === "personal" ? (
              plan.mainColor === "green" ? (
                <div>
                  <Button
                    text={t("downloadAndroid")}
                    type="flat-green arrow"
                    color="white"
                    href={android}
                  />
                  <Button
                    text={t("downloadApple")}
                    type="flat-green arrow"
                    color="white"
                    href={apple}
                  />
                </div>
              ) : (
                <div>
                  <Button
                    text={t("downloadAndroid")}
                    type="outline arrow"
                    color="green"
                    href={android}
                  />
                  <Button
                    text={t("downloadApple")}
                    type="outline arrow"
                    color="green"
                    href={apple}
                  />
                </div>
              )
            ) : plan.mainColor === "green" ? (
              <Button
                text={t("register")}
                type="flat-green arrow"
                color="white"
                href={registerLink}
              />
            ) : (
              <Button
                text={t("register")}
                type="outline arrow"
                color="green"
                href={registerLink}
              />
            )}
          </div>
          <div
            className={`pricing_box pricing_box--bottom ${
              plan.mainColor ? `pricing_box--${plan.mainColor}` : ""
            }`}
          >
            <div className="pricing_box__bottom">
              <p className="pricing_box__price-sub">
                {t("businessPage.plans.included")}
              </p>
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <Tick
                      className={`tick ${
                        plan.mainColor ? `tick--${plan.mainColor}` : ""
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

import React from "react";
import Button from "../Button/Button";
import { ReactComponent as Tick } from "../../assets/images/tick.svg";
import "./PlanPricing.scss";

export default function PlanPricing({ plans }) {
  return (
    <div className="plans__pricing">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`pricing_box ${
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
            <div className="pricing_box__price">
              <span className="pricing_box__price-bt">
                {typeof plan.price[0] === "number"
                  ? `$${plan.price[0]}`
                  : plan.price[0]}
              </span>
              <span className="pricing_box__price-forever">
                {plan.price[1] === "forever" ? "/forever" : ""}
              </span>
            </div>
          </div>
          <div className="pricing_box__bottom">
            {plan.mainColor === "green" ? (
              <Button
                text="Get Started"
                type="flat-green arrow"
                color="white"
              />
            ) : (
              <Button text="Get Started" type="outline arrow" color="green" />
            )}

            <p className="pricing_box__price-sub">What’s included</p>
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
      ))}
    </div>
  );
}

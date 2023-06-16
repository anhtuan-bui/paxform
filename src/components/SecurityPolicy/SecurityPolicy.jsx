import React from "react";
import "./SecurityPolicy.scss";

// import Button from "../Button/Button";

import securityPolicyImage from "../../assets/images/home/security policy.svg";
import bgBlue from "../../assets/images/UseCases/BgBlue.svg";
import { useTranslation } from "react-i18next";

export default function SecurityPolicy() {
  const { t } = useTranslation();
  return (
    <section className="security_policy">
      <div className="container security_policy__container">
        <div className="security_policy__content">
          <p className="security_policy__name">{t("securityPolicy.name")}</p>
          <h2 className="security_policy__title">
            {t("securityPolicy.title")}
          </h2>
          <p
            className="security_policy__description"
            dangerouslySetInnerHTML={{
              __html: t("securityPolicy.description"),
            }}
          ></p>

          {/* <div className="security_policy__button">
            <Button type="outline arrow" text={t("learnMore")} />
          </div> */}
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

import React from "react";
import Button from "../../components/Button/Button";
import "./NotFound.scss";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <main className="not_found">
      <div className="container">
        <div className="not_found__container">
          <div className="not_found__content">
            <h1 className="not_found__code">
              4<span>0</span>4
            </h1>

            <h2 className="not_found__title">{t("notFound.title")}</h2>

            <p className="not_found__description">
              {t("notFound.description")}
            </p>
            <Button
              text={t("notFound.button")}
              type="flat-green arrow"
              color="white"
              href="/"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

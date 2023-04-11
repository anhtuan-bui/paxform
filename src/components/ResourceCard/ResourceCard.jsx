import React from "react";
import Skeleton from "react-loading-skeleton";
// import card1 from "../../assets/images/card-resource-1.png";
import Button from "../Button/Button";
import "./ResourceCard.scss";
import { useTranslation } from "react-i18next";

export default function ResourceCard(props) {
  const {t} = useTranslation();
  const variant = props.variant ? `resource_card__image--${props.variant}` : "";
  const background = props.background
    ? `resource_card--${props.background}`
    : "";

  const loading = props.loading;

  const resource = props.data;

  const title = resource?.title ? resource?.title : <Skeleton count={2} />;
  const imageUrl = resource?.featuredImage?.node?.sourceUrl;
  const slug = resource?.slug;

  return (
    <div className={`resource_card ${background}`}>
      <div className="resource_card__image-box">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="card1"
            className={`resource_card__image ${variant}`}
          />
        ) : (
          <Skeleton height={props.variant === "longer" ? 267 : 200} />
        )}
        <h3 className="resource_card__title">
          <a className="resource_card__title-link" href={`/resources/${slug}`}>
            {title}
          </a>
        </h3>
      </div>
      <div className="resource_card__content">
        {!loading ? (
          <Button
            type="arrow outline"
            color="green"
            text={t("readMore")}
            href={`/resources/${slug}`}
          />
        ) : (
          <Skeleton height={40} style={{ borderRadius: "25px" }} />
        )}
      </div>
    </div>
  );
}

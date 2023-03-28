import React from "react";
import "./FlexCard.scss";

// import illustration from "../../assets/images/UseCases/app illustration.svg";
import Skeleton from "react-loading-skeleton";

export default function FlexCard(props) {
  if (!props.title) {
    return;
  }
  const title = props.title ? props.title : <Skeleton />;
  const description = props.description ? (
    props.description
  ) : (
    <Skeleton count={4} />
  );
  const direction = props.direction;
  const imageUrl = props.image;
  return (
    <div className="flex_card">
      <div className="container ">
        <div className={`flex_card__wrapper ${direction ? direction : ""}`}>
          <div className={`flex_card__content ${direction ? "ltr" : ""}`}>
            <h2 className="flex_card__title">{title}</h2>
            <p className="flex_card__description">{description}</p>
          </div>
          <div className="flex_card__image">
            {imageUrl ? (
              <img
                className="flex_card__image-illustration"
                src={imageUrl}
                alt="app illustration"
              />
            ) : (
              <Skeleton
                className="flex_card__image-illustration"
                height={300}
                width={400}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

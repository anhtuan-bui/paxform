import React, { useEffect } from "react";
import { useState } from "react";
import card1 from "../../assets/images/card-resource-1.png";
import Button from "../Button/Button";
import "./ResourceCard.scss";

export default function ResourceCard(props) {
  const [variant, setVariant] = useState("");
  const [background, setBackground] = useState("");

  useEffect(() => {
    if (props.variant === 'longer'){
      setVariant('resource_card__image--longer');
    }

    if (props.background === "greyish-blue"){
      setBackground('resource_card--greyish-blue')
    }
  }, [props.variant, props.background])

  return (
    <div className={`resource_card ${background}`}>
      <img src={card1} alt="card1" className={`resource_card__image ${variant}`} />
      <div className="resource_card__content">
        <h3 className="resource_card__title">
          There are many variations of passages
        </h3>
        <Button type="arrow outline" color="green" text="Read More" />
      </div>
    </div>
  );
}

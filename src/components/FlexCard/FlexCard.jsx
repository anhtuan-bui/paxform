import React from "react";
import "./FlexCard.scss";

import illustration from '../../assets/images/UseCases/app illustration.svg';

export default function FlexCard(props) {
  return (
    <div className="flex_card">
      <div className="container ">
        <div className={`flex_card__wrapper ${props.direction ? props.direction : ''}`}>
          <div className={`flex_card__content ${props.direction ? 'ltr' : ''}`}>
            <h2 className="flex_card__title">
              A complete payments platform for ecommerce
            </h2>
            <p className="flex_card__description">
              It can be a hassle looking for where you have stored different
              information. With Paxform, you can keep all your information like
              biodatas, signatures and documents, including your contacts, all
              in one app. Better yet, all the data is encrypted and only you and
              the person you share it with can have access to it.
            </p>
          </div>
          <div className="flex_card__image">
            <img className="flex_card__image-illustration" src={illustration} alt="app illustration" />
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import "./UseCases.scss";

import SecurityPolicy from "../../components/SecurityPolicy/SecurityPolicy";

import heroIllustration from "../../assets/images/UseCases/Hero Illustration.svg";
import heroBackgroundImage from "../../assets/images/UseCases/Bg.svg";
import illustration from "../../assets/images/UseCases/app illustration.svg";

import { SCREEN_SIZE } from "../../configurations/configurations";
import FlexCard from "../../components/FlexCard/FlexCard";

import GetStarted from '../../components/GetStarted/GetStarted';

export default function UseCase() {
  const setHeroForegroundHeight = () => {
    const heroImage = document.querySelector(".hero__image");
    const heroForeground = document.querySelector(".hero__image-foreground");

    heroImage.style.height = heroForeground.scrollHeight + 40 + "px";
  };

  useEffect(() => {
    if (window.innerWidth <= SCREEN_SIZE.medium) {
      window.addEventListener("resize", setHeroForegroundHeight);
    } else {
      window.removeEventListener("resize", setHeroForegroundHeight);
    }

    return () => {
      window.removeEventListener("resize", setHeroForegroundHeight);
    };
  });
  return (
    <main className="use_cases">
      <section className="hero" background="light">
        <div className="container hero__wrapper">
          <div className="hero__content">
            <p className="hero__content-name section_name">HOSPITALITY</p>
            <h1 className="hero__content-title section_title">
              A complete payments platform for ecommerce
            </h1>
            <p className="hero__content-description section__description">
              Practical guides, resources, templates and advice. Whether you're
              starting a business or growing an existing one, we're here to lend
              a helping hand as you navigate this unforgettable journey.
            </p>
          </div>
          <div className="hero__image">
            <img
              className="hero__image-foreground"
              src={heroIllustration}
              alt="hero illustration"
            />
            <img
              className="hero__image-background"
              src={heroBackgroundImage}
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="bottom_triangle bottom_triangle--white"></div>
        </div>
      </section>

      <section className="case_info">
        <div className="container">
          <p className="case_info__name section_name">GROW YOUR REVENUE</p>
          <div className="case_info__summary">
            <h1 className="case_info__title section_title">
              Maximise Conversion With Smarter Payments
            </h1>
            <p className="case_info__description section_description">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
          </div>

          <div className="case_info__content">
            <h2>Optimised checkout flows</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </p>

            <ul>
              <li>Well trained, friendly, and empathetic voice</li>
              <li>Well trained, friendly, and empathetic voice</li>
              <li>Well trained, friendly, and empathetic voice</li>
              <li>Well trained, friendly, and empathetic voice</li>
            </ul>

            <img src={illustration} alt="illustration" />

            <h2>Optimised checkout flows</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </p>

            <ul>
              <li>Well trained, friendly, and empathetic voice</li>
              <li>Well trained, friendly, and empathetic voice</li>
              <li>Well trained, friendly, and empathetic voice</li>
              <li>Well trained, friendly, and empathetic voice</li>
            </ul>

            <img src={illustration} alt="illustration" />

            <h2>Optimised checkout flows</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </p>

            <ul>
              <li>Well trained, friendly, and empathetic voice</li>
              <li>Well trained, friendly, and empathetic voice</li>
              <li>Well trained, friendly, and empathetic voice</li>
              <li>Well trained, friendly, and empathetic voice</li>
            </ul>

            <img src={illustration} alt="illustration" />
          </div>
        </div>

        <div className="bottom_triangle bottom_triangle--footer"></div>
      </section>

      <SecurityPolicy />

      <section className="flex_cards">
        <FlexCard />
        <FlexCard direction='rtl' />
      </section>

      <GetStarted />
    </main>
  );
}

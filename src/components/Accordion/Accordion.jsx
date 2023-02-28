import React, { Fragment, useEffect, useState } from "react";
import "./Accordion.scss";

const Accordion = (props) => {
  let features = props.list;
  const [featureList, setFeatureList] = useState(features);
  let progressInterval;
  let progressTime = 0;

  const handleAccordionTitleClick = (e, index) => {
    progressTime = 0;

    e.target.classList.add(`accordion__item-title--active-${props.titleHighlight ? props.titleHighlight : 'blue'}`);

    const panel = e.target.nextElementSibling;

    document.querySelectorAll(".accordion__item-title").forEach((element) => {
      if (
        element.classList.contains(`accordion__item-title--active-${props.titleHighlight ? props.titleHighlight : 'blue'}`) &&
        element !== e.target
      ) {
        element.classList.remove(`accordion__item-title--active-${props.titleHighlight ? props.titleHighlight : 'blue'}`);
      }
    });

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    document.querySelectorAll(".accordion__item").forEach((item) => {
      if (item !== e.target.parentElement) {
        item.lastChild.style.maxHeight = null;
      }
    });

    featureList.forEach((feature, i) => {
      if (index === i) {
        feature.isOpened = true;
      } else {
        feature.isOpened = false;
      }
    });

    setFeatureList(features);
  };

  const handleAccordionAutomation = async () => {
    const speed = 2000;
    let index = 0;
    const accordionProgresses = document.querySelectorAll(
      ".accordion__progress-bar"
    );
    const panels = document.querySelectorAll(".accordion__item-panel");

    progressTime = 0;
    progressInterval = setInterval(() => {
      progressTime += 1;
      // console.log(progressTime);
      featureList.forEach((feature, i) => {
        if (feature.isOpened === true) {
          index = i;
          accordionProgresses[i].style.width =
            (progressTime / speed) * 100 + "%";
        }
      });
      if (progressTime >= speed) {
        progressTime = 0;
        features[index].isOpened = false;
        panels[index].style.maxHeight = null;

        if (props.titleHighlight) {
          panels[index].previousElementSibling.classList.remove(
            `accordion__item-title--active-${props.titleHighlight}`
          );
        } else {
          panels[index].previousElementSibling.classList.remove(
            "accordion__item-title--active-blue"
          );
        }
        let nextIndex = index >= features.length - 1 ? 0 : index + 1;
        features[nextIndex].isOpened = true;
        panels[nextIndex].style.maxHeight =
          panels[nextIndex].scrollHeight + "px";
        if (props.titleHighlight) {
          panels[nextIndex].previousElementSibling.classList.add(
            `accordion__item-title--active-${props.titleHighlight}`
          );
        } else {
          panels[nextIndex].previousElementSibling.classList.add(
            "accordion__item-title--active-blue"
          );
        }
        setFeatureList(features);
      }
    }, 1);
  };

  useEffect(() => {
    handleAccordionAutomation();
    return () => {
      clearInterval(progressInterval);
    };
  });

  return (
    <Fragment>
      {featureList.map((feature, index) => (
        <div
          className={`accordion__item ${
            props.fontColor === "white" ? "accordion__item--white" : ""
          }`}
          key={index}
        >
          <h2
            className={`accordion__item-title ${
              feature.isOpened
                ? `accordion__item-title--active-${
                    props.titleHighlight ? props.titleHighlight : "blue"
                  }`
                : ""
            }`}
            onClick={(e) => handleAccordionTitleClick(e, index)}
          >
            {feature.title}
          </h2>
          <div className={`accordion__item-panel`}>
            <div
              className={`accordion__item-description ${
                props.fontColor === "white"
                  ? "accordion__item-description--white"
                  : ""
              }`}
              key={`description-${index}`}
            >
              <p>{feature.description}</p>
            </div>
            <div className="accordion__progress">
              <div
                className={`accordion__progress-bar accordion__progress-bar--${
                  props.progressBarColor ? props.progressBarColor : "blue"
                }`}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Accordion;

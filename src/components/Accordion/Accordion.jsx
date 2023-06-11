import React, { Fragment, useEffect, useState } from "react";
import "./Accordion.scss";

const AUTO_TIME = 800;
window.titleClicked = false;

const Accordion = (props) => {
  let features = props.list;
  const [featureList] = useState(features);
  const [accordionClicked, setAccordionClicked] = useState(false);
  let progressInterval;
  let progressTime = 0;

  const featureIndex = (index) => {
    if (props.featureIndex) {
      props.featureIndex(index);
      console.log("changed")
    }
  };

  const titleClicked = (index) => {
    if (props.titleClicked === true && features[index].isOpened === false) {
      timeEnd();
      setTimeout(() => {
        featureIndex(index);
        timeStart();
      }, AUTO_TIME)
    }
  };

  const timeStart = () => {
    if (props.timeStart) {
      props.timeStart();
    }
  };

  const timeEnd = () => {
    if (props.timeEnd) {
      props.timeEnd();
    }
  };

  const handleAccordionTitleClick = (e, index) => {
    window.titleClicked = true;
    setAccordionClicked(true);
    progressTime = 0;
    titleClicked(index);

    e.target.classList.add(
      `accordion__item-title--active-${
        props.titleHighlight ? props.titleHighlight : "blue"
      }`
    );

    const panel = e.target.nextElementSibling;

    document.querySelectorAll(".accordion__item-title").forEach((element) => {
      if (
        element.classList.contains(
          `accordion__item-title--active-${
            props.titleHighlight ? props.titleHighlight : "blue"
          }`
        ) &&
        element !== e.target
      ) {
        element.classList.remove(
          `accordion__item-title--active-${
            props.titleHighlight ? props.titleHighlight : "blue"
          }`
        );
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
  };

  const handleAccordionAutomation = () => {
    let length = props.length ? props.length : 4000;
    const time = length / 4;
    let index = 0;
    const accordionProgresses = document.querySelectorAll(
      ".accordion__progress-bar"
    );
    const panels = document.querySelectorAll(".accordion__item-panel");

    if (!accordionClicked) {
      progressTime = 0;
    }

    progressInterval = setInterval(() => {
      progressTime += 1;
      featureList.forEach((feature, i) => {
        if (feature.isOpened === true) {
          index = i;
          accordionProgresses[index].style.width =
            (progressTime / time) * 100 + "%";
        }
      });
      if (progressTime >= AUTO_TIME) {
        timeEnd();
      }
      if (progressTime >= time) {
        setAccordionClicked(false);

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

        featureList.forEach((feature, i) => {
          if (nextIndex === i) {
            feature.isOpened = true;
          } else {
            feature.isOpened = false;
          }
        });

        featureIndex(nextIndex);
        timeStart();

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
      }
    }, 1);
  };

  useEffect(() => {
    const panels = document.querySelectorAll(".accordion__item-panel");
    featureList.forEach((feature, index) => {
      if (feature.isOpened) {
        panels[index].style.maxHeight = panels[index].scrollHeight + "px";
      }
    });

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

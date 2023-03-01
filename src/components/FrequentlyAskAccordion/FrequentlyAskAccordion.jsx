import React, { Fragment } from "react";
import "./FrequentlyAskAccordion.scss";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrowDown.svg";
const faqs = [
  {
    title: "What are data credits?",
    content:
      "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
  },
  {
    title: "Can I cancel my plan any time?",
    content:
      "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
  },
  {
    title: "Is there a free trial for the paid plans?",
    content:
      "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
  },
  {
    title: "We are a medium-sized company. Which plan is right for us?",
    content:
      "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
  },
  {
    title:
      "I want to store my information and share it with others. Which plan is right for me?",
    content:
      "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
  },
];
export default function FrequentlyAsk() {
  const handleItemClick = (e) => {
    const accordionItems = document.querySelectorAll(
      ".frequently_ask__accordion-item"
    );

    const closeItem = (item) => {
      item.lastElementChild.style.maxHeight = null;
      item.querySelector("svg").style.transform = "rotate(360deg)";
      item.lastElementChild.style.marginTop = 0;
    };

    const openItem = (item) => {
      item.lastElementChild.style.maxHeight =
        item.lastElementChild.scrollHeight + "px";
      item.lastElementChild.style.marginTop = "0.825rem";
      item.querySelector("svg").style.transform = "rotate(180deg)";
    };
    accordionItems.forEach((item) => {
      if (item.contains(e.target)) {
        if (item.lastElementChild.style.maxHeight) {
          closeItem(item);
        } else {
          openItem(item);
        }
      } else {
        closeItem(item);
      }
    });
  };
  return (
    <Fragment>
      <section className="frequently_ask">
        <div className="container">
          <div className="frequently_ask__wrapper">
            <h1 className="frequently_ask__title section_title">
              Frequently asked questions
            </h1>
            <div className="frequently_ask__accordion">
              {faqs.map((faq, index) => (
                <div
                  className="frequently_ask__accordion-item"
                  key={`frequently_ask__accordion-item-${index}`}
                >
                  <div
                    className="frequently_ask__accordion-box"
                    onClick={(e) => handleItemClick(e)}
                  >
                    <h2 className="frequently_ask__accordion-title">
                      {faq.title}
                    </h2>
                    <ArrowDown className="frequently_ask__accordion-arrow" />
                  </div>
                  <p className="frequently_ask__accordion-content">
                    {faq.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bottom_triangle bottom_triangle--white"></div>
      </section>
    </Fragment>
  );
}

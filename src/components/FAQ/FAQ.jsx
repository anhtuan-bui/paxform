import React from "react";
import "./FAQ.scss";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrowDown.svg";
import Skeleton from "react-loading-skeleton";

export default function FAQ({ data }) {
  const handleAccordionItemClick = (e) => {
    const accordionItems = document.querySelectorAll(".faq__accordion-item");

    const closeAccordionItem = (item) => {
      item.lastElementChild.style.maxHeight = null;
      item.querySelector("svg").style.transform = "rotate(360deg)";
      item.lastElementChild.style.marginTop = 0;
    };

    const openAccordionItem = (item) => {
      item.lastElementChild.style.maxHeight =
        item.lastElementChild.scrollHeight + "px";
      item.lastElementChild.style.marginTop = "0.825rem";
      item.querySelector("svg").style.transform = "rotate(180deg)";
    };

    accordionItems.forEach((item) => {
      if (item.contains(e.target)) {
        if (item.lastElementChild.style.maxHeight) {
          closeAccordionItem(item);
        } else {
          openAccordionItem(item);
        }
      } else {
        closeAccordionItem(item);
      }
    });
  };
  return (
    <section className="faq">
      <div className="faq__accordion">
        {data.map((faq, index) => (
          <FAQItem
            data={faq}
            onClick={(e) => handleAccordionItemClick(e)}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

const FAQItem = ({ data, onClick }) => {
  const title = data? data?.title : <Skeleton width={'85%'}/>;
  const content = data?.content;
  return (
    <div className="faq__accordion-item">
      <div className="faq__accordion-box" onClick={onClick}>
        <h3 className="faq__accordion-title">{title}</h3>
        <ArrowDown className="faq__accordion-arrow" />
      </div>
      <p className="faq__accordion-content" dangerouslySetInnerHTML={{__html: content}}></p>
    </div>
  );
};

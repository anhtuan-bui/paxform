import React, { useEffect, useState } from "react";
import "./FAQs.scss";

import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
import FAQ from "../../components/FAQ/FAQ";
import { useQuery } from "@apollo/client";
import { GET_FAQS } from "../../lib/graphqlQuery";
import Skeleton from "react-loading-skeleton";
import { convertToSlug, scrollIntoViewWithOffset } from "../../lib/util";
export default function FAQs() {
  const { loading, data } = useQuery(GET_FAQS);
  const [headings, setHeadings] = useState([]);

  const faqCategories = !loading
    ? data?.faqCategories?.nodes
    : Array.from({ length: 3 });

  const handleListItemClick = (e) => {
    const element = document.getElementById(convertToSlug(e.target.innerText));
    scrollIntoViewWithOffset(element, 100)
  }

  useEffect(() => {
    const categories = document.querySelectorAll(".faqs__section-title");
    categories.forEach(category => {
      category.setAttribute('id', convertToSlug(category.innerText))
    })
    setHeadings(Array.from(categories, (category) => category.innerText));
  }, [loading]);
  return (
    <main className="faqs">
      <section className="hero">
        <div className="container ">
          <div className="hero__wrapper">
            <div className="hero__content">
              <h1 className="hero__title">Frequently Asked Question</h1>
            </div>
          </div>
        </div>
        <SectionTriangleRight variant="white" />
      </section>

      <section className="faqs__content">
        <div className="container">
          <div className="faqs__content-wrapper">
            <div className="faqs__faqs">
              {faqCategories?.map((faqCategory, index) => (
                <FAQSection category={faqCategory} key={index} />
              ))}
            </div>
            <div className="faqs__sidebar">
              <ul className="faqs__sidebar-list">
                {headings.map((heading, index) => (
                  <li className="faqs__sidebar-item" key={index} onClick={(e) => handleListItemClick(e)}>
                    {heading}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <SectionTriangleRight variant="footer" />
      </section>
    </main>
  );
}

const FAQSection = ({ category }) => {
  const title = category ? category?.name : <Skeleton width={"55%"} />;
  const faqs = category ? category?.faqs?.nodes : Array.from({ length: 5 });
  return (
    <div className="faqs__section">
      <h2 className="faqs__section-title">{title}</h2>
      <FAQ data={faqs} />
    </div>
  );
};

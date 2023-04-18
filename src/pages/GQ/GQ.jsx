import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import "./GQ.scss";

const GET_FAQS = gql`
  query getFAQs {
    faqCategories {
      nodes {
        faqs {
          nodes {
            id
            slug
            title
            content
          }
        }
        id
        slug
        name
      }
    }
  }
`;

export default function GQ() {
  const { loading, data } = useQuery(GET_FAQS);
  if (loading) return "loading";
  console.log(data);
  const categories = data.faqCategories.nodes;

  return (
    <div className="container gq hero">
      {categories.map((category, index) => (
        <Category category={category} key={index} />
      ))}
    </div>
  );
}

const Category = ({ category }) => {
  const faqs = category.faqs.nodes;
  return (
    <div className="categories">
      <h1 className="category_title">{category.name}</h1>
      {faqs.map((faq, index) => (
        <Faq faq={faq} key={index} />
      ))}
    </div>
  );
};

const Faq = ({faq}) => {
  return (
    <div className="faqs">
      <h2 className="faq_title">{faq.title}</h2>
      <p className="faq_description" dangerouslySetInnerHTML={{__html: faq.content}}></p>
    </div>
  );
};

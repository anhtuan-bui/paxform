import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_ALL_TESTIMONIALS = gql`
  query GetAllTestimonial {
    companies {
      nodes {
        title
        content
      }
    }
  }
`;

export default function GQ() {
  const { loading, data } = useQuery(GET_ALL_TESTIMONIALS);
  if (loading) return <p>Loading...</p>;
  console.log(data);
  const testimonials = data.companies.nodes;
  return (
    <div className="container">
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <div>{testimonial.title}</div>
          <div dangerouslySetInnerHTML={{__html: testimonial.content}}></div>
        </div>
      ))}
    </div>
  );
}

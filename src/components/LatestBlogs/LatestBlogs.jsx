import React from "react";
import Button from "../Button/Button";
import RelatedCard from "../RelatedCard/RelatedCard";
import "./LatestBlogs.scss";

import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";

export default function LatestBlogs({triangleColor}) {
  return (
    <section className="platform background--dark-blue platform__title--white">
      <div className="container platform__container">
        <div className="platform__top">
          <div className="platform__top-left">
            <p className="platform__name platform__name--green section_name">
              PAXFORM BLOG
            </p>
            <h2 className="platform__title section_title">
              Latest Blog’s from Paxform.
            </h2>
          </div>
          <div className="platform__top-right">
            <Button type="outline arrow" text="See All Blog Post" />
          </div>
        </div>
        <div className="platform__content">
          <RelatedCard
            image={card1}
            title="First Story"
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
            readLink={true}
          />
          <RelatedCard
            image={card2}
            title="Second Story"
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
            readLink={true}
          />
          <RelatedCard
            image={card3}
            title="Third Story"
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
            readLink={true}
          />
          <RelatedCard
            image={card3}
            title="Third Story"
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
            readLink={true}
          />
        </div>
      </div>
      <div className={`bottom_triangle bottom_triangle--${triangleColor}`}></div>
    </section>
  );
}

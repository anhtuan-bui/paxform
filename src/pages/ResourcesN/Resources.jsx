import React, { Component } from "react";
import Button from "../../components/Button/Button";
import ResourceCard from "../../components/ResourceCard/ResourceCard";
import "./Resources.scss";
import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";

export default class Resources extends Component {
  componentDidMount() {
    // this.modifyLongerCard();
    
  }

  modifyLongerCard() {
    const longerCards = document.querySelectorAll(".resource_card--longer");
    longerCards.forEach((card) => {
      const longerCardHeight = card.offsetHeight;
      console.log(longerCardHeight);
    });
  }

  render() {
    return (
      <main className="resources">
        <section className="hero" background="light">
          <div className="container">
            <div className="hero__container">
              <div className="hero__content">
                <p className="hero__name hero__name--blue">Paxform Resources</p>
                <h1 className="hero__title">Guides and resources</h1>
                <p className="hero__description">
                  Paxform will never share your data with anyone. What’s more,
                  no one at Paxform can view or access your information.
                </p>
                <Button
                  type="arrow flat"
                  text="See all Resources"
                  color="white"
                />
              </div>

              <div className="resources__articles">
                <ResourceCard overlay="blue" />
                <ResourceCard
                  className="resource_card--longer"
                  overlay="green"
                />
                <ResourceCard
                  className="resource_card--longer"
                  overlay="green"
                />
                <ResourceCard overlay="blue" />
              </div>
            </div>
          </div>
        </section>
        <SectionTriangleRight variant="footer" />
      </main>
    );
  }
}

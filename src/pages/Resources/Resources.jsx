import React, { Component } from "react";
import ResourceCard from "../../components/ResourceCard/ResourceCard";
import "./Resources.scss";

import graphic from "../../assets/images/Graphics.svg";
import RelatedCard from "../../components/RelatedCard/RelatedCard";

import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import Button from "../../components/Button/Button";

export default class Resources extends Component {
  resource = { chip: "all" };

  constructor(props) {
    super(props);

    this.state = this.resource;
  }

  handleRadioChange = (event) => {
    this.resource.chip = event.target.id;
    this.setState(this.resource);
  };
  render() {
    return (
      <main className="resources">
        <section className="hero">
          <div className="container hero__wrapper">
            <div className="hero__content">
              <p className="hero__name">Paxform Resources</p>
              <h1 className="hero__title">Guides and resources</h1>
              <p className="hero__description">
                Paxform will never share your data with anyone. What’s more, no
                one at Paxform can view or access your information.
              </p>
            </div>
            <div className="hero__articles">
              <div className="hero__articles-wrapper">
                <div className="hero__articles-group">
                  <ResourceCard overlay="blue" />
                  <ResourceCard overlay="green" />
                  <ResourceCard className="weird_card" overlay="green" />
                  <ResourceCard overlay="blue" />
                  <div className="hero__articles-graphic">
                    <img src={graphic} alt="illustrator graphic" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_triangle bottom_triangle--light-green"></div>
        </section>

        <section className="business_insight">
          <div className="container">
            <div className="business_insight__wrapper">
              <p className="section_name business_insight__name">
                BUSINESS INSIGHT HIGHLIGHT
              </p>
              <h1 className="section_title business_insight__title">
                Latest Business Insight Highlight
              </h1>
              <div className="business_insight__grid">
                <ResourceCard overlay="green" />
                <ResourceCard overlay="green" />
                <ResourceCard overlay="green" />
              </div>
            </div>
          </div>
          <div className="bottom_triangle bottom_triangle--white"></div>
        </section>

        <section className="insight_update">
          <div className="container">
            <div className="insight_update__wrapper">
              <h1 className="insight_update__title section_title">
                Business Insight and Industry Updates
              </h1>
              <div className="insight_update__radios">
                <div className="chip">
                  <input
                    id="all"
                    type="radio"
                    name="radio"
                    onChange={this.handleRadioChange}
                    checked={this.state.chip === "all"}
                  />
                  <label htmlFor="all">All</label>
                </div>
                <div className="chip">
                  <input
                    id="insight"
                    type="radio"
                    name="radio"
                    onChange={this.handleRadioChange}
                    checked={this.state.chip === "insight"}
                  />
                  <label htmlFor="insight">Insight</label>
                </div>
                <div className="chip">
                  <input
                    id="update"
                    type="radio"
                    name="radio"
                    onChange={this.handleRadioChange}
                    checked={this.state.chip === "update"}
                  />
                  <label htmlFor="update">Update</label>
                </div>
              </div>

              <div className="insight_update__grid">
                <RelatedCard
                  image={card1}
                  category="Insight"
                  title="First Story"
                  description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
                  readLink={true}
                />
                <RelatedCard
                  image={card2}
                  category="Insight"
                  title="First Story"
                  description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
                  readLink={true}
                />
                <RelatedCard
                  image={card3}
                  category="Insight"
                  title="First Story"
                  description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
                  readLink={true}
                />
                <RelatedCard
                  image={card1}
                  category="Insight"
                  title="First Story"
                  description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
                  readLink={true}
                />
              </div>
            </div>
          </div>
          <div className="bottom_triangle bottom_triangle--light-blue"></div>
        </section>

        <section className="latest_update">
          <div className="container">
            <div className="latest_update__wrapper">
              <p className="latest_update__name section_name">
                INDUSTRY UPDATES HIGHLIGHT
              </p>
              <h1 className="latest_update__title section_title">
                Latest Industry Updates Highlight
              </h1>

              <div className="latest_update__grid">
                <ResourceCard overlay="blue" />
                <ResourceCard overlay="blue" />
                <ResourceCard overlay="blue" />
              </div>
            </div>
          </div>

          <div className="bottom_triangle bottom_triangle--dark-blue"></div>
        </section>

        <section className="platform background--dark-blue platform__title--white">
          <div className="container platform__container">
            <div className="platform__top">
              <div className="platform__top-left">

                <p className="platform__name platform__name--green section_name">PAXFORM BLOG</p>
                <h2 className='platform__title section_title'>Latest Blog’s from Paxform.</h2>
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
            </div>
          </div>
          <div className="bottom_triangle bottom_triangle--light-blue"></div>
        </section>
      </main>
    );
  }
}

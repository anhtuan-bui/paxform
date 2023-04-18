import React, { Component } from "react";
import "./Company.scss";

import ReadyGet from "../../components/ReadyGet/ReadyGet";
import about from "../../assets/images/company-about.svg";
import vision from "../../assets/images/company-vision.svg";
import video from "../../assets/images/company-video.jpg";
import teamPic1 from "../../assets/images/company-team-pic01.png";
import teamPic2 from "../../assets/images/company-team-pic02.png";
import teamPic3 from "../../assets/images/company-team-pic03.png";
import teamPic4 from "../../assets/images/company-team-pic04.png";
import teamPic5 from "../../assets/images/company-team-pic05.png";
import teamPic6 from "../../assets/images/company-team-pic06.png";
import teamPic7 from "../../assets/images/company-team-pic07.png";
import teamPic8 from "../../assets/images/company-team-pic08.png";
import diversity from "../../assets/images/company-diversity.png";

const teams = [
  {
    color: "Blue",
    name: "Chidi Okechukwu",
    position: "CEO & Founder",
    img: teamPic1,
    linkedin: "http://www.linkedin.com/",
  },
  {
    color: "Blue",
    name: "Duy Thanh Doan",
    position: "Engineering",
    img: teamPic2,
    linkedin: "http://www.linkedin.com/",
  },
  {
    color: "Blue",
    name: "Ankur Kadian",
    position: "Engineering",
    img: teamPic3,
    linkedin: "http://www.linkedin.com/",
  },
  {
    color: "Green",
    name: "Thi Rao",
    position: "Finance & Operation",
    img: teamPic4,
    linkedin: "http://www.linkedin.com/",
  },
  {
    color: "Green",
    name: "Ericka Rao",
    position: "Sales",
    img: teamPic5,
    linkedin: "http://www.linkedin.com/",
  },
  {
    color: "Green",
    name: "Phoebe Zeng",
    position: "Sales",
    img: teamPic6,
    linkedin: "http://www.linkedin.com/",
  },
  {
    color: "Blue",
    name: "Jana Schwikowski",
    position: "Engineering",
    img: teamPic7,
    linkedin: "http://www.linkedin.com/",
  },
  {
    color: "Blue",
    name: "Boya An",
    position: "Desginer",
    img: teamPic8,
    linkedin: "http://www.linkedin.com/",
  },
  {
    color: "Blue",
    name: "Amrit Kharel",
    position: "Engineering",
    img: teamPic8,
    linkedin: "http://www.linkedin.com/",
  },
];
export default class Company extends Component {
  render() {
    return (
      <main className="company">
        <section className="hero" background="light">
          <div className="container">
            <div className="hero__wrapper">
              <div className="hero__content">
                <p className="hero__name">About Us</p>
                <h1 className="hero__title">Paxform for everyone</h1>
                <p className="hero__description">
                  Paxform’s function is simple: it completely fills any form,
                  anytime. You can manage and save your personal data, allowing
                  you to sign documents and send them to organisations with
                  ease. No need to worry about security and privacy—Paxform
                  fully encrypts your data to ensure your safety.
                </p>
              </div>
              <div className="hero__image">
                <img src={about} alt="company about us" />
              </div>
            </div>
          </div>
        </section>
        <section className="vision">
          <div className="container">
            <div className="vision__wrapper">
              <div className="vision__image">
                <img src={vision} alt="company vision" />
              </div>
              <div className="vision__content">
                <p className="vision__name">Our Vision</p>
                <h1 className="vision__title">Forms without forms.</h1>
                <p className="vision__description">
                  Paxform’s function is simple: it completely fills any form,
                  anytime. You can manage and save your personal data, allowing
                  you to sign document s and send them to organisations with
                  ease. No need to worry about security and privacy—Paxform
                  fully encrypts your data to ensure your safety.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="video">
          <div className="container">
            <div className="video__wrapper">
              <a className="video__wrapper-link" href="http://v2.paxfolio.com/">
                <img src={video} alt="Play this video" />
              </a>
            </div>
          </div>
        </section>
        <section className="team">
          <div className="container">
            <h2 className="team__title">Meet The Team</h2>
            <ul className="team__box">
              {teams.map((team, index) => (
                // if({team.color} == "Green"){
                // 	<li className="team__box-list green" key={index}>

                // }else{
                // 	<li className="team__box-list" key={index}>
                // }
                <li
                  className={`team__box-list ${
                    team.color === "Green" ? "green" : ""
                  }`}
                  key={index}
                >
                  <div className="team__box__inner">
                    <img
                      className="team__box__inner-img"
                      src={team.img}
                      alt={team.name}
                    />
                  </div>
                  <strong className="team__box-list-name">{team.name}</strong>
                  <span className="team__box-list-position">
                    {team.position}
                  </span>
                  <a
                    className="team__box-list-link"
                    href={`${team.linkedin}`}
                    // target="_blank"
                    content="Go to linkedin Profile"
                  >
                    go to Linkedin Profile
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bottom_triangle bottom_triangle--dark-blue"></div>
        </section>
        <section className="diversity">
          <div className="container">
            <div className="diversity__wrapper">
              <h2 className="diversity__title">Diversity & Inclusion</h2>
              <div className="diversity__content">
                <p className="diversity__content-description">
                  At Paxform, we make diversity and inclusion part of everything
                  we do. We are building a culture where one’s unique attributes
                  and differences are part of who we are. Regardless of
                  background or gender, our employees, customers and
                  stakeholders are treated as equals.
                  <br />
                  <br /> As a fast-growing company, we focus on creating a
                  diverse workforce globally and a workplace that welcomes,
                  nurtures and celebrates camaraderie, initiative, leadership
                  and innovation. We strive to build innovative products that
                  can be used by everyone despite their cultural, language or
                  geographic differences, furthermore, achieving the goals that
                  we have set for ourselves and our stakeholders.
                </p>
                <div className="diversity__content-image">
                  <img className="" src={diversity} alt="diversity pic" />
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_triangle bottom_triangle--white"></div>
        </section>
        <ReadyGet />
      </main>
    );
  }
}

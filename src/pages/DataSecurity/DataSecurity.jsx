import React from "react";
import "./DataSecurity.scss";
import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
import dataSecurityIllustration from "../../assets/images/data-security-illustration.png";
import { ReactComponent as Cpu } from "../../assets/icons/cpu.svg";
import { ReactComponent as Shield } from "../../assets/icons/shield.svg";
import { ReactComponent as Database } from "../../assets/icons/database.svg";
import { ReactComponent as Server } from "../../assets/icons/server.svg";

export default function DataSecurity() {
  const dataAccess = [
    {
      icon: <Cpu />,
      title: "Safeguarding your data",
      description:
        "From the very first brainstorming stages to launch, security is an integral aspect of every step in our development processes.",
    },
    {
      icon: <Shield />,
      title: "Secure anywhere anytime",
      description:
        "From the very first brainstorming stages to launch, security is an integral aspect of every step in our development processes.",
    },
    {
      icon: <Database />,
      title: "Network protection",
      description:
        "From the very first brainstorming stages to launch, security is an integral aspect of every step in our development processes.",
    },
    {
      icon: <Server />,
      title: "Back-ups",
      description:
        "From the very first brainstorming stages to launch, security is an integral aspect of every step in our development processes.",
    },
  ];

  return (
    <main className="data_security">
      <section className="hero">
        <div className="container ">
          <div className="hero__wrapper">
            <div className="hero__content">
              <h1 className="hero__title">Paxform Legal</h1>
            </div>
          </div>
        </div>
        <SectionTriangleRight variant="footer" />
      </section>
      <section className="data_security__data">
        <div className="container">
          <div className="data_security__data-wrapper">
            <div className="data_security__data-illustration">
              <img
                className="data_security__data-illustration-img"
                src={dataSecurityIllustration}
                alt="data security illustration"
              />
            </div>
            <div className="data_security__data-security">
              <h1 className="data_security__data-title section_title">
                Data Security
              </h1>
              <p className="data_security__data-name section_name">
                Security Policy
              </p>
              <h2 className="data_security__data-slogan">
                Only You Can Access Your Data. Not Us - Not Anyone Else.
              </h2>
              <p className="data_security__description section__description">
                Paxform will never share your data with anyone. What’s more, no
                one at Paxform can view or access your information. Our mission
                is to apply end-toend encryption to every piece of information
                stored, protecting the data of organizations and individuals at
                all stages and at all costs.
              </p>
              <p className="data_security__description section__description">
                Only you decide which parties can view what piece of
                information. Our security architecture ensures that personal
                data is decentralized, guaranteeing that the point of access in
                a potential security threat will not reveal any information.
              </p>
            </div>
          </div>
        </div>
        <SectionTriangleRight variant="white" />
      </section>
      <section className="data_access">
        <div className="container">
          <div className="data_access__wrapper">
            <p className="data_access__name section_name">Security Policy</p>
            <h1 className="data_access__title section_title">
              Only You Can Access Your Data.
            </h1>
            <div className="data_access__grid">
              {dataAccess.map((data, index) => (
                <div className="data_access__item">
                  <div className="data_access__item-icons">{data.icon}</div>
                  <h2 className="data_access__item-title">{data.title}</h2>
                  <p className="data_access__item-description section__description">
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <SectionTriangleRight variant='footer'/>
      </section>
    </main>
  );
}

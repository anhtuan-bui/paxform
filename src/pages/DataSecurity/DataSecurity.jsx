import React from "react";
import "./DataSecurity.scss";
import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
import dataSecurityIllustration from "../../assets/images/data-security-illustration.png";
import { ReactComponent as Cpu } from "../../assets/icons/cpu.svg";
import { ReactComponent as Shield } from "../../assets/icons/shield.svg";
import { ReactComponent as Database } from "../../assets/icons/database.svg";
import { ReactComponent as Server } from "../../assets/icons/server.svg";
import { t } from "i18next";

export default function DataSecurity() {
  const dataAccess = [
    {
      icon: <Cpu />,
      title: t("dataSecurityPage.dataAccess.dataSafeguard.title"),
      description: t("dataSecurityPage.dataAccess.dataSafeguard.description"),
    },
    {
      icon: <Shield />,
      title: t("dataSecurityPage.dataAccess.dataSecurity.title"),
      description: t("dataSecurityPage.dataAccess.dataSecurity.description"),
    },
    {
      icon: <Database />,
      title: t("dataSecurityPage.dataAccess.networkProtection.title"),
      description: t(
        "dataSecurityPage.dataAccess.networkProtection.description"
      ),
    },
    {
      icon: <Server />,
      title: t("dataSecurityPage.dataAccess.backups.title"),
      description: t("dataSecurityPage.dataAccess.backups.description"),
    },
  ];

  return (
    <main className="data_security">
      <section className="hero">
        <div className="container ">
          <div className="hero__wrapper">
            <div className="hero__content">
              <h1 className="hero__title">
                {t("dataSecurityPage.hero.title")}
              </h1>
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
                {t("dataSecurityPage.dataSecurity.title")}
              </h1>
              <p className="data_security__data-name section_name">
                {t("dataSecurityPage.dataSecurity.sectionName")}
              </p>
              <h2 className="data_security__data-slogan">
                {t("dataSecurityPage.dataSecurity.slogan")}
              </h2>
              <div
                className="data_security__description section__description"
                dangerouslySetInnerHTML={{
                  __html: t("dataSecurityPage.dataSecurity.description"),
                }}
              ></div>
            </div>
          </div>
        </div>
        <SectionTriangleRight variant="white" />
      </section>
      <section className="data_access">
        <div className="container">
          <div className="data_access__wrapper">
            <p className="data_access__name section_name">
              {t("dataSecurityPage.dataAccess.sectionName")}
            </p>
            <h1 className="data_access__title section_title">
              {t("dataSecurityPage.dataAccess.slogan")}
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
        <SectionTriangleRight variant="footer" />
      </section>
    </main>
  );
}

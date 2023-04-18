/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./PrivacyPolicy.scss";
import { t } from "i18next";
export default class GlobalPrivacyPolicy extends Component {
  app = {
    width: 480,
    navMobileIsOpen: false,
  };
  constructor(props) {
    super(props);

    this.state = this.app;

    this.navMobileClick = this.navMobileClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("click", (e) => this.handleClickOutsideNav(e));
  }

  componentWillUnmount() {
    window.removeEventListener("click", (e) => this.handleClickOutsideNav(e));
  }

  navMobileClick() {
    this.app.navMobileIsOpen = !this.app.navMobileIsOpen;
    this.handleNavMobile();
  }

  handleClickOutsideNav(e) {
    if (
      this.app.navMobileIsOpen === true &&
      !e.target.classList.contains("flex_box__nav") &&
      !e.target.classList.contains("flex_box__nav__list") &&
      !e.target.classList.contains("flex_box__nav__list-link") &
        (e.target.tagName !== "DT") &&
      e.target.tagName !== "DD" &&
      e.target.tagName !== "A" &&
      e.target.tagName !== "BUTTON"
    ) {
      this.app.navMobileIsOpen = false;
      this.handleNavMobile();
    }
  }

  handleNavMobile() {
    const flexNav = document.querySelector(".flex_box__nav");
    if (this.app.navMobileIsOpen) {
      flexNav.classList.add("flex_box__nav-active");
    } else {
      flexNav.classList.remove("flex_box__nav-active");
    }
  }

  //ID Move Page
  handleLinkClick = (e, selectorName) => {
    e.preventDefault();
    e.target.classList.add("on");

    const linkInactive = document.querySelectorAll(".flex_box__nav__list-link");
    const links = document.querySelectorAll(`.${selectorName}_line`);

    links.forEach((link, index) => {
      if (e.target === link.firstElementChild) {
        this.scrollIntoViewWithOffset("#" + selectorName + index, 100);
      }
    });

    linkInactive.forEach((link, index) => {
      if (e.target !== link.firstElementChild) {
        link.firstElementChild.classList.remove("on");
      }
    });
  };

  scrollIntoViewWithOffset = (selector, offset) => {
    window.scrollTo({
      behavior: "smooth",
      top:
        document.querySelector(selector).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset,
    });
  };

  render() {
    return (
      <main className="global_privacy">
        <section className="hero">
          <div className="container hero__wrapper">
            <div className="hero__content">
              <h1 className="hero__title">
                {t("privacyPolicyPage.heroTitle")}
              </h1>
            </div>
          </div>
          <div className="bottom_triangle bottom_triangle--white"></div>
        </section>

        <section className="flex_box">
          <div className="container flex_box__container">
            <div className="flex_box__nav">
              <dl className="flex_box__nav__list">
                <dt className="flex_box__nav__list-title">
                  {t("privacyPolicyPage.securityNavList.title")}
                </dt>
                <dd className="flex_box__nav__list-link">
                  <a href={"http://"}>
                    {t("privacyPolicyPage.securityNavList.first")}
                  </a>
                </dd>
                <dd className="flex_box__nav__list-link">
                  <a href={"http://"}>
                    {t("privacyPolicyPage.securityNavList.second")}
                  </a>
                </dd>
                <dd className="flex_box__nav__list-link">
                  <a href={"http://"}>
                    {t("privacyPolicyPage.securityNavList.third")}
                  </a>
                </dd>
              </dl>
              <dl className="flex_box__nav__list">
                <dt className="flex_box__nav__list-title">
                  {t("privacyPolicyPage.servicesNavList.title")}
                </dt>
                <dd className="flex_box__nav__list-link">
                  <a href={"http://"}>
                    {t("privacyPolicyPage.servicesNavList.first")}
                  </a>
                </dd>
                <dd className="flex_box__nav__list-link">
                  <a href={"http://"}>
                    {t("privacyPolicyPage.servicesNavList.second")}
                  </a>
                </dd>
              </dl>
              <dl className="flex_box__nav__list">
                <dt className="flex_box__nav__list-title">
                  {t("privacyPolicyPage.companyNavList.title")}
                </dt>
                <dd className="flex_box__nav__list-link">
                  <a href={"http://"}>
                    {t("privacyPolicyPage.companyNavList.first")}
                  </a>
                </dd>
                <dd className="flex_box__nav__list-link">
                  <a href={"http://"}>
                    {t("privacyPolicyPage.companyNavList.second")}
                  </a>
                </dd>
                <dd className="flex_box__nav__list-link">
                  <a href={"http://"}>
                    {t("privacyPolicyPage.companyNavList.third")}
                  </a>
                </dd>
              </dl>
              <button
                className="flex_box__nav-button"
                onClick={(e) => this.navMobileClick(e)}
              ></button>
            </div>

            <div className="flex_box__gp">
              <div className="flex_box__content">
                <h3 className="flex_box__content-subject">
                  {t("privacyPolicyPage.content.title")}
                </h3>
                <div className="flex_box__content__download">
                  <p className="flex_box__content__download-name">
                    {t("privacyPolicyPage.content.download.name")}
                    <span className="hero__download-names-version">
                      {" "}
                      v. 1.0
                    </span>
                  </p>

                  <a
                    className="flex_box__content__download-btn"
                    href={"#"}
                    download={"LOGO.svg"}
                  >
                    {t("privacyPolicyPage.content.download.btn")}
                  </a>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("privacyPolicyPage.content.description"),
                  }}
                ></div>
              </div>
              <h3 className="flex_box__content-title">
                {t("privacyPolicyPage.list.first.heading")}
              </h3>

              <h4 className="flex_box__content-sub">
                {t("privacyPolicyPage.list.first.subHeading")}
              </h4>
              <div className="flex_box__content-description">
                {t("privacyPolicyPage.list.first.description")}
              </div>

              <h3 className="flex_box__content-title">
                {t("privacyPolicyPage.list.second.heading")}
              </h3>

              <h4 className="flex_box__content-sub">
                {t("privacyPolicyPage.list.second.subHeading")}
              </h4>
              <div
                className="flex_box__content-description"
                dangerouslySetInnerHTML={{
                  __html: t("privacyPolicyPage.list.second.description"),
                }}
              ></div>

              <h3 className="flex_box__content-title">
                {t("privacyPolicyPage.list.third.heading")}
              </h3>
              <h4 className="flex_box__content-sub">
                {t("privacyPolicyPage.list.third.subHeading")}
              </h4>
              <div
                className="flex_box__content-description"
                dangerouslySetInnerHTML={{
                  __html: t("privacyPolicyPage.list.third.description"),
                }}
              ></div>
            </div>
          </div>

          <div className="bottom_triangle bottom_triangle--light-blue"></div>
        </section>
      </main>
    );
  }
}

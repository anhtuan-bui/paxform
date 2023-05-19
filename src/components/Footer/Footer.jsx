import React, { Fragment, useEffect, useState } from "react";
import "./Footer.scss";

import { ReactComponent as FooterLogo } from "../../assets/images/LOGO-footer.svg";
// import languages from "../../assets/json/languages.json";

import { ReactComponent as LinkedIn } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as YouTube } from "../../assets/icons/youtube.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as WeChat } from "../../assets/icons/wechat.svg";
import { ReactComponent as WhatsApp } from "../../assets/icons/whatsapp.svg";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/client";
import { GET_LANGUAGES } from "../../lib/graphqlQuery";
import { convertLangToLocale } from "../../lib/util";

import { ReactComponent as ArrowDown } from "../../assets/icons/arrowDown.svg";

import "/node_modules/flag-icons/css/flag-icons.min.css";

const socialMedias = [
  {
    name: "linkedin",
    icon: <LinkedIn />,
    link: "https://www.linkedin.com/company/paxform/",
  },
  {
    name: "facebook",
    icon: <Facebook />,
    link: "https://www.facebook.com/profile.php?id=100064254243686",
  },
  {
    name: "twitter",
    icon: <Twitter />,
    link: "https://twitter.com/paxform",
  },
  {
    name: "instagram",
    icon: <Instagram />,
    link: "https://www.instagram.com/pax.form/",
  },
  {
    name: "youtube",
    icon: <YouTube />,
    link: "",
  },
  {
    name: "discord",
    icon: <Discord />,
    link: "",
  },
  {
    name: "wechat",
    icon: <WeChat />,
    link: "",
  },
  {
    name: "whatsapp",
    icon: <WhatsApp />,
    link: "",
  },
];

export default function Footer() {
  const [selector, setSelector] = useState(false);
  const [overlayOpened, setOverlayOpened] = useState(false);
  const [shortName, setShortName] = useState("au");
  const [languageFullName, setLanguageFullName] = useState(
    "English - Australia"
  );
  const { loading, data } = useQuery(GET_LANGUAGES);

  const languages = !loading ? data?.languages : Array.from({ length: 3 });

  const { t, i18n } = useTranslation();

  const footerItems = [
    [
      {
        group: "PAXFORM",
        items: [
          {
            title: t("business"),
            to: "/business",
          },
          {
            title: t("personal"),
            to: "/personal",
          },
          {
            title: t("security"),
            to: "/data-security",
          },
          {
            title: t("pricing"),
            to: "/pricing",
          },
          {
            title: t("template"),
            to: "",
          },
          {
            title: t("integrations"),
            to: "",
          },
        ],
      },
      {
        group: t("businessFeatures"),
        items: [
          {
            title: t("formDesigner"),
            to: "",
          },
          {
            title: t("chat"),
            to: "",
          },
          {
            title: t("disclosures"),
            to: "",
          },
          {
            title: t("electronicSignatures"),
            to: "",
          },
          {
            title: t("additionalQuestions"),
            to: "",
          },
          {
            title: t("customStatuses"),
            to: "",
          },
        ],
      },
      {
        group: t("consumerFeatures"),
        items: [
          {
            title: t("passwordManager"),
            to: "",
          },
          {
            title: t("passwordGenerator"),
            to: "",
          },
          {
            title: t("secret"),
            to: "",
          },
          {
            title: t("electronicSignatures"),
            to: "",
          },
          {
            title: t("disclosures"),
            to: "",
          },
          {
            title: t("chatNotifications"),
            to: "",
          },
        ],
      },
    ],
    [
      {
        group: t("useCases"),
        items: [
          {
            title: "Hospitality",
            to: "/hospitality",
          },
          {
            title: "Education",
            to: "",
          },
          {
            title: "Transportation",
            to: "",
          },
          {
            title: "Real Estate",
            to: "",
          },
          {
            title: "Government",
            to: "",
          },
          {
            title: "Construction",
            to: "",
          },
          {
            title: "Health and Aged Care",
            to: "",
          },
          {
            title: "Retail",
            to: "",
          },
        ],
      },
    ],
    [
      {
        group: t("support"),
        items: [
          {
            title: t("blogs"),
            to: "/blogs",
          },
          {
            title: t("faqs"),
            to: "/faqs",
          },
          {
            title: t("resources"),
            to: "/resources",
          },
          {
            title: t("helpCenter"),
            to: "",
          },
        ],
      },
      {
        group: t("security"),
        items: [
          {
            title: t("encryption"),
            to: "",
          },
          {
            title: t("biometric"),
            to: "",
          },
          {
            title: t("fileStorage"),
            to: "",
          },
          {
            title: t("dataStorage"),
            to: "",
          },
          {
            title: t("password"),
            to: "",
          },
          {
            title: t("autoTimeout"),
            to: "",
          },
        ],
      },
      {
        group: t("forms"),
        items: [
          {
            title: t("contactForm"),
            to: "",
          },
          {
            title: t("feedbackForm"),
            to: "",
          },
          {
            title: t("securityForm"),
            to: "",
          },
          {
            title: t("copyrightForm"),
            to: "",
          },
          {
            title: t("gdprForm"),
            to: "",
          },
        ],
      },
    ],
    [
      {
        group: t("company"),
        items: [
          {
            title: t("aboutUs"),
            to: "/company",
          },
          {
            title: t("contactUs"),
            to: "/contact-us",
          },
          {
            title: t("requestDemo"),
            to: "",
          },
          {
            title: t("partnerProgram"),
            to: "",
          },
          {
            title: t("careers"),
            to: "",
          },
          {
            title: t("newsroom"),
            to: "",
          },
          {
            title: t("brandKit"),
            to: "",
          },
        ],
      },
      {
        group: t("legal"),
        items: [
          {
            title: t("legal"),
            to: "/legal",
          },
          {
            title: "Data Security Policy",
            to: "",
          },
          {
            title: t("websiteTermsOfUse"),
            to: "/legal/website/terms-of-use",
          },
          {
            title: t("websitePrivacyPolicy"),
            to: "/legal/website/website-privacy-policy",
          },
        ],
      },
    ],
  ];

  const [footer, setFooter] = useState(true);

  const [languageCode, setLanguageCode] = useState("");

  const handleLanguagesClick = (e) => {
    if (!selector) {
      openSelect();
      openFooterOverlay();
      setOverlayOpened(true);
    } else {
      closeSelect();
      closeFooterOverlay();
      setOverlayOpened(false);
    }
  };

  const openSelect = () => {
    const select = document.querySelector(".footer__languages-select");
    select.classList.add("footer__languages-select--active");
    setSelector(true);
  };
  const closeSelect = () => {
    const select = document.querySelector(".footer__languages-select");
    select.classList.remove("footer__languages-select--active");
    setSelector(false);
  };

  const handleLanguageOptionClick = (e) => {
    const lang = e.target.getAttribute("locale");
    if (overlayOpened) {
      closeFooterOverlay();
    }
    closeSelect();
    setShortName(e.target.getAttribute("shortname"));
    setLanguageFullName(e.target.getAttribute("fullname"));

    if (!lang) {
      return;
    }

    setLanguageCode(lang);
    i18n.changeLanguage(convertLangToLocale(lang));
    localStorage.setItem("lang", lang);
  };

  const openFooterOverlay = () => {
    const footerOverlay = document.querySelector(".footer__overlay");
    footerOverlay.classList.add("footer__overlay--display");
  };

  const closeFooterOverlay = () => {
    const footerOverlay = document.querySelector(".footer__overlay");
    footerOverlay.classList.remove("footer__overlay--display");
  };

  const handleFooterOverlayClick = () => {
    closeFooterOverlay();
    closeSelect();
  };

  useEffect(() => {
    const notFound = document.querySelector(".not_found");
    const lang = localStorage.getItem("lang");

    if (lang) {
      const locale = lang?.split("_")[1].toLowerCase();
      setShortName(locale);
      const language = languages.find(
        (language) => language?.locale?.toLowerCase() === lang.toLowerCase()
      );
      setLanguageFullName(language?.name);
    }

    if (notFound) {
      setFooter(false);
    } else {
      setFooter(true);
    }
  }, [languageCode, loading, languages]);

  if (!footer) {
    return;
  }

  return (
    <footer className="footer">
      <div className="container footer_container">
        <div className="footer_top">
          <div className="footer__top-left">
            <div className="footer__logo">
              <a href="/">
                <FooterLogo className="footer__logo-svg" />
              </a>
            </div>
            <div className="footer__social">
              {socialMedias.map((socialMedia, index) =>
                socialMedia.link ? (
                  <a
                    className="footer__social-item"
                    key={index}
                    href={socialMedia.link}
                  >
                    {socialMedia.icon}
                  </a>
                ) : (
                  ""
                )
              )}
            </div>
          </div>

          <div className="footer__top-right">
            {footerItems.map((footerItem, i) => (
              <div className="footer__top-right-list" key={i}>
                {footerItem.map(
                  (list, j) =>
                    list.items.filter((item) => item.to.length > 0).length >
                      0 && (
                      <Fragment key={j}>
                        <h4>{list.group}</h4>
                        <ul>
                          {list.items.map(
                            (listItem, k) =>
                              listItem.to && (
                                <li key={k}>
                                  <a href={listItem.to}>{listItem.title}</a>
                                </li>
                              )
                          )}
                        </ul>
                      </Fragment>
                    )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer__bottom-wrapper">
        <div className="container">
          <div className="footer__bottom">
            <p>{t("copyrightPaxform")}</p>
            <ul>
              <li>
                <a href="/privacy-policy">
                  <span className="span--hover">{t("privacyPolicy")}</span>
                </a>
              </li>
              <li>
                <a href="https://">
                  <span className="span--hover">{t("termOfService")}</span>
                </a>
              </li>
            </ul>
            <div className="footer__languages">
              <div
                className="footer__languages-selector"
                onClick={(e) => handleLanguagesClick(e)}
              >
                <div className="footer__languages-name">
                  <span className={`fi fi-${shortName}`}></span>{" "}
                  {languageFullName ? languageFullName : "Select your language"}
                </div>
                <ArrowDown className="footer__arrow-down" />
              </div>

              <div className="footer__languages-select">
                {languages.map((language, index) => (
                  <SelectorOption
                    language={language}
                    onClick={(e) => handleLanguageOptionClick(e)}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer__overlay"
        onClick={(e) => handleFooterOverlayClick(e)}
      ></div>
    </footer>
  );
}

const SelectorOption = ({ language, onClick }) => {
  const shortName = language?.locale.split("_")[1].toLowerCase();

  return (
    <div
      className="footer__languages-option"
      onClick={(e) => onClick(e)}
      locale={language?.locale?.toUpperCase()}
      shortname={shortName}
      fullname={language?.name }
    >
      <span className={`fi fi-${shortName}`}></span> {language?.name}
    </div>
  );
};

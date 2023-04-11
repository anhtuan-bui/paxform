import React, { Fragment, useEffect, useState } from "react";
import "./Footer.scss";

import footerLogo from "../../assets/images/LOGO-footer.svg";
import countries from "../../lib/countries";
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
  // const [emoji, setEmoji] = useState("🇦🇺");
  // const [shortName, setShortName] = useState("AU");
  // const [countryName, setCountryName] = useState("Australia");
  // const [filteredCountries, setFilteredCountries] = useState(languages);
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

  const handleLanguageChange = (e) => {
    // const short = e.target.value.split("-")[0];
    const lang = e.target.value;

    if (!lang) {
      return;
    }

    setLanguageCode(lang);
    i18n.changeLanguage(convertLangToLocale(lang));
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    const notFound = document.querySelector(".not_found");
    const lang = localStorage.getItem("lang");

    if (lang && !loading) {
      const selector = document.querySelector(
        ".footer__bottom-languages-selector"
      );
      if (selector) {
        selector.value = lang;
      }
      setLanguageCode(lang);
    }

    if (notFound) {
      setFooter(false);
    } else {
      setFooter(true);
    }
  }, [languageCode, loading]);

  if (!footer) {
    return;
  }
  // const openSelectorOptions = () => {
  //   const languageOptions = document.querySelector(
  //     ".languages_selector__options"
  //   );
  //   languageOptions.classList.add("languages_selector__options--display-block");
  // };

  // const closeSelectorOptions = () => {
  //   const languageOptions = document.querySelector(
  //     ".languages_selector__options"
  //   );
  //   languageOptions.classList.remove(
  //     "languages_selector__options--display-block"
  //   );
  // };

  // const openFooterOverlay = () => {
  //   const footerOverlay = document.querySelector(".footer__overlay");
  //   footerOverlay.classList.add("footer__overlay--display");
  // };

  // const closeFooterOverlay = () => {
  //   const footerOverlay = document.querySelector(".footer__overlay");
  //   footerOverlay.classList.remove("footer__overlay--display");
  // };

  // const handleFooterOverlayClick = () => {
  //   console.log('clicked')
  //   closeFooterOverlay();
  // };

  // const handleLanguageSelectorClick = () => {
  //   openSelectorOptions();
  //   openFooterOverlay();
  // };

  // const handleLanguageOptionClick = (e) => {
  //   const optionClassName = "languages_selector__option";

  //   closeSelectorOptions();
  //   closeFooterOverlay();

  //   if (e.target.classList.contains(optionClassName)) {
  //     setEmoji(e.target.getAttribute("emoji"));
  //     setShortName(e.target.getAttribute("sortname"));
  //     setCountryName(e.target.getAttribute("countryname"));
  //   } else if (e.target.parentElement.classList.contains(optionClassName)) {
  //     setEmoji(e.target.parentElement.getAttribute("emoji"));
  //     setShortName(e.target.parentElement.getAttribute("sortname"));
  //     setCountryName(e.target.parentElement.getAttribute("countryname"));
  //   }
  // };

  // const handleSearchInputChange = (e) => {
  //   if (e.target.value) {
  //     setFilteredCountries(
  //       languages.filter((country) =>
  //         country.country_name
  //           .toLowerCase()
  //           .includes(e.target.value.toLowerCase())
  //       )
  //     );
  //   } else {
  //     setFilteredCountries(languages);
  //   }
  // };

  return (
    <footer className="footer">
      <div className="container footer_container">
        <div className="footer_top">
          <div className="footer__top-left">
            <div className="footer__logo">
              <a href="/">
                <img src={footerLogo} alt="logo footer" />
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
            <div className="footer__bottom-languages">
              <select
                className="footer__bottom-languages-selector"
                name="language"
                defaultValue={languageCode}
                onChange={(e) => handleLanguageChange(e)}
              >
                <option className="footer__bottom-languages-option" value="">
                  {t("selectYourLanguage")}
                </option>
                {languages.map((language, index) => (
                  <SelectorOption
                    language={language}
                    key={index}
                    loading={loading}
                  />
                ))}
              </select>
              {/* <div className="languages">
                <div
                  className="languages_selector"
                  onClick={handleLanguageSelectorClick}
                  sortname={sortName}
                >
                  <span className="languages_selector__emoji">{emoji}</span>
                  <span>{countryName}</span>
                  <img
                    className="languages_selector__arrow-down"
                    src={arrowDown}
                    alt="arrow down"
                  />
                </div>
                <div className="languages_selector__options">
                  <div className="languages_selector__search">
                    <input
                      className="languages_selector__search-input"
                      type="text"
                      placeholder="Search"
                      onChange={handleSearchInputChange}
                    />
                    <div className="languages_selector__search-button">
                      <img
                        className="languages_selector__search-icon"
                        src={searchIcon}
                        alt=""
                        aria-hidden={true}
                      />
                    </div>
                  </div>
                  <div className="languages_selector__option-box">
                    {filteredCountries.map((country, index) => (
                      <div
                        className="languages_selector__option"
                        key={index}
                        sortname={country.sortname}
                        countryname={country.country_name}
                        emoji={country.emoji}
                        onClick={(e) => handleLanguageOptionClick(e)}
                      >
                        <span className="languages_selector__emoji">
                          {country.emoji}
                        </span>
                        <span className="languages_selector__country-name">
                          {country.country_name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="footer__overlay"
        onClick={(e) => handleFooterOverlayClick(e)}
      ></div> */}
    </footer>
  );
}

const SelectorOption = ({ language }) => {
  const countryShort = language?.locale.split("_")[1];
  const country = countries.find((c) => c.sortname === countryShort);

  const languageCode = language ? language?.code : "";
  const languageName = language
    ? language?.name.replace(countryShort, "").trim()
    : "";
  const countryNative = country?.native;
  const emoji = country?.emoji;
  return (
    <option className="footer__bottom-languages-option" value={languageCode}>
      {`${emoji} ${languageName} - ${countryNative}`}
    </option>
  );
};

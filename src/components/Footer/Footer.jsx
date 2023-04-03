import React, { Fragment, useEffect, useState } from "react";
import "./Footer.scss";

import footerLogo from "../../assets/images/LOGO-footer.svg";
import languages from "../../assets/json/languages.json";
// import arrowDown from "../../assets/icons/arrowDown.svg";
// import searchIcon from "../../assets/icons/search.svg";

import { ReactComponent as LinkedIn } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as YouTube } from "../../assets/icons/youtube.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as WeChat } from "../../assets/icons/wechat.svg";
import { ReactComponent as WhatsApp } from "../../assets/icons/whatsapp.svg";

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

const footerItems = [
  [
    {
      group: "PAXFORM",
      items: [
        {
          title: "Business",
          to: "/business",
        },
        {
          title: "Personal",
          to: "/personal",
        },
        {
          title: "Security",
          to: "/data-security",
        },
        {
          title: "Pricing",
          to: "/pricing",
        },
        {
          title: "Template",
          to: "",
        },
        {
          title: "Integrations",
          to: "",
        },
      ],
    },
    {
      group: "BUSINESS FEATURES",
      items: [
        {
          title: "Form Designer",
          to: "",
        },
        {
          title: "Chat",
          to: "",
        },
        {
          title: "Disclosures",
          to: "",
        },
        {
          title: "Electronic Signatures",
          to: "",
        },
        {
          title: "Additional Questions",
          to: "",
        },
        {
          title: "Custom Statuses",
          to: "",
        },
      ],
    },
    {
      group: "CONSUMER FEATURES",
      items: [
        {
          title: "Password Manager",
          to: "",
        },
        {
          title: "Password Generator",
          to: "",
        },
        {
          title: "Secret",
          to: "",
        },
        {
          title: "Electronic Signatures",
          to: "",
        },
        {
          title: "Disclosures",
          to: "",
        },
        {
          title: "Chat & Notifications",
          to: "",
        },
      ],
    },
  ],
  [
    {
      group: "USE CASES",
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
      group: "Support",
      items: [
        {
          title: "Blog",
          to: "/blogs",
        },
        {
          title: "FAQs",
          to: "/faqs",
        },
        {
          title: "Resources",
          to: "/resources",
        },
        {
          title: "Help Center",
          to: "",
        },
      ],
    },
    {
      group: "SECURITY",
      items: [
        {
          title: "Encryption",
          to: "",
        },
        {
          title: "Biometric",
          to: "",
        },
        {
          title: "File Storage",
          to: "",
        },
        {
          title: "Data Storage",
          to: "",
        },
        {
          title: "Password",
          to: "",
        },
        {
          title: "Auto Timeout",
          to: "",
        },
      ],
    },
    {
      group: "FORMS",
      items: [
        {
          title: "Contact Form",
          to: "",
        },
        {
          title: "Feedback Form",
          to: "",
        },
        {
          title: "Security Form",
          to: "",
        },
        {
          title: "Copyright Form",
          to: "",
        },
        {
          title: "GDPR Form",
          to: "",
        },
      ],
    },
  ],
  [
    {
      group: "COMPANY",
      items: [
        {
          title: "About Us",
          to: "/company",
        },
        {
          title: "Contact Us",
          to: "/contact-us",
        },
        {
          title: "Request a Demo",
          to: "",
        },
        {
          title: "Partner Program",
          to: "",
        },
        {
          title: "Careers",
          to: "",
        },
        {
          title: "Newsroom",
          to: "",
        },
        {
          title: "Brand kit",
          to: "",
        },
      ],
    },
    {
      group: "LEGAL",
      items: [
        {
          title: "Legal",
          to: "/legal",
        },
        {
          title: "Data Security Policy",
          to: "",
        },
        {
          title: "Website Terms of Use",
          to: "/legal/website/terms-of-use",
        },
        {
          title: "Website Privacy Policy",
          to: "/legal/website/website-privacy-policy",
        },
      ],
    },
  ],
];

export default function Footer() {
  // const [emoji, setEmoji] = useState("🇦🇺");
  // const [shortName, setShortName] = useState("AU");
  // const [countryName, setCountryName] = useState("Australia");
  // const [filteredCountries, setFilteredCountries] = useState(languages);

  const [footer, setFooter] = useState(true);

  const [languageCode, setLanguageCode] = useState("en-AU");

  useEffect(() => {
    const notFound = document.querySelector(".not_found");

    if (notFound) {
      setFooter(false);
    }
  }, []);

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

  return footer ? (
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
                    list.items.filter(item => item.to.length > 0).length > 0 && (
                      <Fragment key={j}>
                        <h1>{list.group}</h1>
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
            <p>© Copyright 2022 Paxform. All rights reserved.</p>
            <ul>
              <li>
                <a href="/privacy-policy">
                  <span className="span--hover">Privacy Policy*</span>
                </a>
              </li>
              <li>
                <a href="https://">
                  <span className="span--hover">Terms of Service</span>
                </a>
              </li>
            </ul>
            <div className="footer__bottom-languages">
              <select
                className="footer__bottom-languages-selector"
                name="language"
                defaultValue={languageCode}
              >
                {languages.map((language, index) => (
                  <option
                    className="footer__bottom-languages-option"
                    value={language.code}
                    key={index}
                    onChange={() => setLanguageCode(language.code)}
                  >
                    {`${language.emoji} ${language.name} - ${language.country}`}
                  </option>
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
  ) : (
    ""
  );
}

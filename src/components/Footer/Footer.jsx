import React, { useState } from "react";
import "./Footer.scss";

import footerLogo from "../../assets/images/LOGO-footer.svg";
import { useLocation } from "react-router-dom";
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

export default function Footer() {
  // const [emoji, setEmoji] = useState("🇦🇺");
  // const [shortName, setShortName] = useState("AU");
  // const [countryName, setCountryName] = useState("Australia");
  // const [filteredCountries, setFilteredCountries] = useState(languages);

  const [languageCode, setLanguageCode] = useState("en-AU");
  const location = useLocation();

  if (location.pathname === "/not-found") {
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
            <div className="footer__top-right-list">
              <h1>PAXFORM</h1>
              <ul>
                <li>
                  <a href="https://">Security</a>
                </li>
                <li>
                  <a href="https://">Pricing</a>
                </li>
                <li>
                  <a href="https://">Templates </a>
                </li>
                <li>
                  <a href="https://">Integrations</a>
                </li>
              </ul>
              <h1>BUSINESS FEATURES</h1>
              <ul>
                <li>
                  <a href="https://">Form Designer</a>
                </li>
                <li>
                  <a href="https://">Chat</a>
                </li>
                <li>
                  <a href="https://">Disclosures</a>
                </li>
                <li>
                  <a href="https://">Electronic Signatures</a>
                </li>
                <li>
                  <a href="https://">Additional Questions</a>
                </li>
                <li>
                  <a href="https://">Custom Statuses</a>
                </li>
              </ul>
              <h1>CONSUMER FEATURES</h1>
              <ul>
                <li>
                  <a href="https://">Password Manager</a>
                </li>
                <li>
                  <a href="https://">Password Generator</a>
                </li>
                <li>
                  <a href="https://">Secret</a>
                </li>
                <li>
                  <a href="https://">Electronic Signatures</a>
                </li>
                <li>
                  <a href="https://">Disclosures</a>
                </li>
                <li>
                  <a href="https://">Chat & Notifications</a>
                </li>
              </ul>
            </div>
            <div className="footer__top-right-list footer-use-case">
              <h1>USE CASES</h1>
              <ul>
                <li>
                  <a href="https://">Hospitality</a>
                </li>
                <li>
                  <a href="https://">Education</a>
                </li>
                <li>
                  <a href="https://">Transportation</a>
                </li>
                <li>
                  <a href="https://">Real Estate</a>
                </li>
                <li>
                  <a href="https://">Government</a>
                </li>
                <li>
                  <a href="https://">Construction</a>
                </li>
                <li>
                  <a href="https://">Health and Aged Care</a>
                </li>
                <li>
                  <a href="https://">Retail</a>
                </li>
              </ul>
            </div>
            <div className="footer__top-right-list footer-resources">
              <h1>RESOURCES</h1>
              <ul>
                <li>
                  <a href="https://">Blog</a>
                </li>
                <li>
                  <a href="https://">FAQs</a>
                </li>
                <li>
                  <a href="https://">Newsletter</a>
                </li>
                <li>
                  <a href="https://">Help Center</a>
                </li>
              </ul>
              <h1>SECURITY</h1>
              <ul>
                <li>
                  <a href="https://">Encryption</a>
                </li>
                <li>
                  <a href="https://">Biometric</a>
                </li>
                <li>
                  <a href="https://">File Storage</a>
                </li>
                <li>
                  <a href="https://">Data Storage</a>
                </li>
                <li>
                  <a href="https://">Password</a>
                </li>
                <li>
                  <a href="https://">Auto Timeout</a>
                </li>
              </ul>
              <h1>FORMS</h1>
              <ul>
                <li>
                  <a href="https://">Contact Form</a>
                </li>
                <li>
                  <a href="https://">Feedback Form</a>
                </li>
                <li>
                  <a href="https://">Security Form</a>
                </li>
                <li>
                  <a href="https://">Copyright Form</a>
                </li>
                <li>
                  <a href="https://">GDPR Form</a>
                </li>
              </ul>
            </div>
            <div className="footer__top-right-list footer-company">
              <h1>COMPANY</h1>
              <ul>
                <li>
                  <a href="https://">About Us</a>
                </li>
                <li>
                  <a href="https://">Request a Demo</a>
                </li>
                <li>
                  <a href="https://">Partner Program</a>
                </li>
                <li>
                  <a href="https://">Careers</a>
                </li>
                <li>
                  <a href="https://">Newsroom</a>
                </li>
                <li>
                  <a href="https://">Brand kit</a>
                </li>
              </ul>
              <h1>LEGAL</h1>
              <ul>
                <li>
                  <a href="https://">Data Security Policy</a>
                </li>
                <li>
                  <a href="https://">Website Terms of Use</a>
                </li>
                <li>
                  <a href="https://">Website Privacy Policy</a>
                </li>
                <li>
                  <a href="https://">Website Cookie Policy</a>
                </li>
              </ul>
            </div>
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
  );
}

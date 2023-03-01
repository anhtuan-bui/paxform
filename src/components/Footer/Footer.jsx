import React from "react";
import "./Footer.scss";

import footerLogo from "../../assets/images/LOGO-footer.svg";
import facebook from "../../assets/images/bxl-facebook-circle.svg.svg";
import linkedin from "../../assets/images/socialMedia/bxl-linkedin.svg.svg";
import youtube from "../../assets/images/socialMedia/bxl-youtube.svg.svg";
import discord from "../../assets/images/socialMedia/discord-fill.svg";
import twitter from "../../assets/images/socialMedia/twitter-icon.svg";
import instagram from "../../assets/images/socialMedia/instagram-icon.svg";
import wechat from "../../assets/images/socialMedia/wechat-icon.svg";
import whatsapp from "../../assets/images/socialMedia/whatsapp-icon.svg";
import flag from "../../assets/images/flag.svg";
import arrowDown from "../../assets/images/arrowDown.svg";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  if (location.pathname === "/not-found") {
    return;
  }
  return (
    <footer className="footer">
      <div className="container footer_container">
        <div className="footer_top">
          <div className="footer__top-left">
            {/*<div className="footer__temp">*/}
            <div className="footer__logo">
              <img src={footerLogo} alt="logo footer" />
            </div>
            <div className="footer__social">
              <img src={linkedin} alt="linkedin" />
              <img src={youtube} alt="youtube" />
              <img src={facebook} alt="facebook" />
              <img src={discord} alt="discord" />
              <img src={twitter} alt="twitter" />
              <img src={instagram} alt="instagram" />
              <img src={wechat} alt="wechat" />
              <img src={whatsapp} alt="whatsapp" />
            </div>
            {/*</div>*/}
          </div>

          {/* <div className="footer__top-right"> */}
          <div className="footer__top-right">
            <div className="footer__top-right-list">
              {/*<div className="footer__top-right-list footer-paxform">*/}
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
              {/*</div> 
                            <div className="footer__top-right-list footer-business-features"> */}
              <br />
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
              {/* </div>
                            <div className="footer__top-right-list footer-consumer-features"> */}
              <br />
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
              {/*</div> */}
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
              {/*</div>   
                            <div className="footer__top-right-list footer-security"> */}
              <br />
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
              {/* </div>
                            <div className="footer__top-right-list footer-forms"> */}
              <br />
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
              {/* </div>
                            <div className="footer__top-right-list footer-legal"> */}
              <br />
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
              <img src={flag} alt="American Flag" />
              <p>US English</p>
              <img src={arrowDown} alt="Arrow down" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

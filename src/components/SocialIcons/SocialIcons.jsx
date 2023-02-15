/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./SocialIcons.scss";
import FacebookIcon from "../../assets/icons/facebook.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import PinterestIcon from "../../assets/icons/pinterest.svg";
import WhatsAppIcon from "../../assets/icons/whatsapp.svg";
import ShareIcon from "../../assets/icons/share.svg";

const SocialIcons = ({className}) => {
    return (
        <section className={`social ${className}`}>
            <p className="social__title section_name">Share</p>
            <div className="social_icons">
                <div className="social_icons__wrapper">
                    <a href="#">
                        <img src={FacebookIcon} alt="" />
                    </a>
                </div>
                <div className="social_icons__wrapper">
                    <a href="#">
                        <img src={LinkedinIcon} alt="" />
                    </a>
                </div>
                <div className="social_icons__wrapper">
                    <a href="#">
                        <img src={TwitterIcon} alt="" />
                    </a>
                </div>
                <div className="social_icons__wrapper">
                    <a href="#">
                        <img src={PinterestIcon} alt="" />
                    </a>
                </div>
                <div className="social_icons__wrapper">
                    <a href="#">
                        <img src={WhatsAppIcon} alt="" />
                    </a>
                </div>
                <div className="social_icons__wrapper">
                    <a href="#">
                        <img src={ShareIcon} alt="" />
                    </a>
                </div>
            </div>
        </section>
    ) 
}
export default SocialIcons;

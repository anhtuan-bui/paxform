/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./SocialIcons.scss";
import FacebookIcon from "../../assets/icons/facebook.png";
import LinkedinIcon from "../../assets/icons/linkedin.png";
import TwitterIcon from "../../assets/icons/twitter.png";
import PinterestIcon from "../../assets/icons/pinterest.png";
import WhatsAppIcon from "../../assets/icons/whatsapp.png";
import ShareIcon from "../../assets/icons/share.png";

const SocialIcons = () => {
    return (
        <section className="social">
            <p className="social__title section_name">Share</p>
            <div className="social_icons">
                <div className="social_icons__wrapper rounded_20">
                    <a href="#">
                        <img src={FacebookIcon} alt="" />
                    </a>
                </div>
                <div className="social_icons__wrapper rounded_20">
                    <a href="#">
                        <img src={LinkedinIcon} alt="" />
                    </a>
                </div>
                <div className="social_icons__wrapper rounded_20">
                    <a href="#">
                        <img src={TwitterIcon} alt="" />
                    </a>
                </div>
                <div className="social_icons__wrapper rounded_20">
                    <a href="#">
                        <img src={PinterestIcon} alt="" />
                    </a>
                </div>
                <div className="social_icons__wrapper rounded_20">
                    <a href="#">
                        <img src={WhatsAppIcon} alt="" />
                    </a>
                </div>
                <div className="social_icons__wrapper rounded_20">
                    <a href="#">
                        <img src={ShareIcon} alt="" />
                    </a>
                </div>
            </div>
        </section>
    ) 
}
export default SocialIcons;

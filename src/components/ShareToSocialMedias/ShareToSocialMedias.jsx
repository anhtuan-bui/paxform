import React from "react";
import "./ShareToSocialMedias.scss";
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import facebookIcon from "../../assets/icons/facebook.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import pinterestIcon from "../../assets/icons/pinterest.svg";
import whatsappIcon from "../../assets/icons/whatsapp.svg";
import linkIcon from "../../assets/icons/share.svg";

const url = "https://paxfolio.com/";

const socialMedias = {
  facebook: {
    icon: facebookIcon,
  },
  linkedin: {
    icon: linkedinIcon,
  },
  twitter: {
    icon: twitterIcon,
  },
  pinterest: {
    icon: pinterestIcon,
  },
  whatsapp: {
    icon: whatsappIcon,
  },
  link: {
    icon: linkIcon,
  },
};

export default function ShareToSocialMedias({ headings=[] , slug, title, term , imageUrl}) {
  return (
    <div
      className={`social_media__share ${
        headings.length > 0 ? "" : "social_media__share--sticky"
      }`}
    >
      <p className="social_media__share-name">Share</p>
      <div className="social_media__social-medias">
        <div className="social_media__social-media">
          <FacebookShareButton
            className="social_media__social-media-link"
            url={`${url}${term}/${slug}`}
            title={title}
          >
            <img
              className="social_media__social-media-img"
              src={socialMedias.facebook.icon}
              alt={"social media icon"}
            />
          </FacebookShareButton>
        </div>

        <div className="social_media__social-media">
          <TwitterShareButton
            className="social_media__social-media-link"
            url={`${url}${term}/${slug}`}
            title={title}
          >
            <img
              className="social_media__social-media-img"
              src={socialMedias.twitter.icon}
              alt={"social media icon"}
            />
          </TwitterShareButton>
        </div>

        <div className="social_media__social-media">
          <PinterestShareButton
            className="social_media__social-media-link"
            media={imageUrl}
            url={`${url}${term}/${slug}`}
            description={title}
          >
            <img
              className="social_media__social-media-img"
              src={socialMedias.pinterest.icon}
              alt={"social media icon"}
            />
          </PinterestShareButton>
        </div>

        <div className="social_media__social-media">
          <LinkedinShareButton
            className="social_media__social-media-link"
            url={`${url}${term}/${slug}`}
            title={title}
          >
            <img
              className="social_media__social-media-img"
              src={socialMedias.linkedin.icon}
              alt={"social media icon"}
            />
          </LinkedinShareButton>
        </div>

        <div className="social_media__social-media">
          <WhatsappShareButton
            className="social_media__social-media-link"
            url={`${url}${term}/${slug}`}
            title={title}
          >
            <img
              className="social_media__social-media-img"
              src={socialMedias.whatsapp.icon}
              alt={"social media icon"}
            />
          </WhatsappShareButton>
        </div>
        <div className="social_media__social-media">
          <a
            className="social_media__social-media-link"
            href={`${url}${term}/${slug}`}
            title={title}
          >
            <img
              className="social_media__social-media-img"
              src={socialMedias.link.icon}
              alt={"social media icon"}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

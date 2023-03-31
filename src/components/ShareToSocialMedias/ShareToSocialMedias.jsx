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

export default function ShareToSocialMedias({ headings, slug, title, term }) {
  return (
    <div
      className={`resource__share ${
        headings.length > 0 ? "" : "resource__share--sticky"
      }`}
    >
      <p className="resource__share-name">Share</p>
      <div className="resource__social-medias">
        <div className="resource__social-media">
          <FacebookShareButton
            className="resource__social-media-link"
            url={`${url}${term}/${slug}`}
            title={title}
          >
            <img
              className="resource__social-media-img"
              src={socialMedias.facebook.icon}
              alt={"facebook"}
            />
          </FacebookShareButton>
        </div>

        <div className="resource__social-media">
          <TwitterShareButton
            className="resource__social-media-link"
            url={`${url}${term}/${slug}`}
            title={title}
          >
            <img
              className="resource__social-media-img"
              src={socialMedias.twitter.icon}
              alt={"facebook"}
            />
          </TwitterShareButton>
        </div>

        <div className="resource__social-media">
          <PinterestShareButton
            className="resource__social-media-link"
            url={`${url}${term}/${slug}`}
            title={title}
          >
            <img
              className="resource__social-media-img"
              src={socialMedias.pinterest.icon}
              alt={"facebook"}
            />
          </PinterestShareButton>
        </div>

        <div className="resource__social-media">
          <LinkedinShareButton
            className="resource__social-media-link"
            url={`${url}${term}/${slug}`}
            title={title}
          >
            <img
              className="resource__social-media-img"
              src={socialMedias.linkedin.icon}
              alt={"facebook"}
            />
          </LinkedinShareButton>
        </div>

        <div className="resource__social-media">
          <WhatsappShareButton
            className="resource__social-media-link"
            url={`${url}${term}/${slug}`}
            title={title}
          >
            <img
              className="resource__social-media-img"
              src={socialMedias.whatsapp.icon}
              alt={"facebook"}
            />
          </WhatsappShareButton>
        </div>
        <div className="resource__social-media">
          <a
            className="resource__social-media-link"
            href={`${url}${term}/${slug}`}
            title={title}
          >
            <img
              className="resource__social-media-img"
              src={socialMedias.link.icon}
              alt={"facebook"}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

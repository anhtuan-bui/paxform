import React, { useEffect, useState } from "react";
import "./ResourceDetail.scss";

import { ReactComponent as ArrowDown } from "../../assets/icons/arrowDown.svg";

import { SCREEN_SIZE } from "../../configurations/configurations";

import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
import Overlay from "../../components/Overlay/Overlay";
import { useQuery } from "@apollo/client";
import { GET_RESOURCE_BY_SLUG } from "../../lib/graphqlQuery";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import ShareToSocialMedias from "../../components/ShareToSocialMedias/ShareToSocialMedias";
import { convertToSlug, scrollIntoViewWithOffset } from "../../lib/util";
import { useTranslation } from "react-i18next";

export default function ResourceDetail() {
  const { t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [headings, setHeadings] = useState([]);
  const [dropdownSelected, setDropdownSelected] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation().pathname.split("/");

  const { loading, data } = useQuery(GET_RESOURCE_BY_SLUG, {
    variables: {
      id: location[location.length - 1],
    },
  });

  const resource = data?.resource;
  const title = !loading ? resource?.title : <Skeleton width={"85%"} />;
  const content = resource?.content;
  const date = !loading ? (
    new Date(resource?.date).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
      day: "numeric",
    })
  ) : (
    <Skeleton width={120} />
  );
  const imageUrl = resource?.featuredImage.node.sourceUrl;
  const slug = resource?.slug;

  if (headings[0] && !dropdownSelected) {
    setDropdownSelected(headings[0]);
  }

  const handleDropdownClick = () => {
    if (dropdownOpen) {
      setDropdownOpen(false);
    } else {
      setDropdownOpen(true);
    }
  };

  const handleOverlayCallback = () => {
    setDropdownOpen(false);
  };

  const handleOptionClick = (e) => {
    const element = document.getElementById(e.target.getAttribute("value"));
    scrollIntoViewWithOffset(element, -50);
    setDropdownOpen(false);
    setDropdownSelected(e.target.innerText);
  };

  const handleDropdownOpen = (className) => {
    const display = `${className}--display`;
    const options = document.querySelector(`.${className}`);
    if (dropdownOpen) {
      options?.classList.add(display);
    } else if (options?.classList.contains(display)) {
      options?.classList.remove(display);
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= SCREEN_SIZE.medium) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleHeadings = () => {
    const detailHeadings = document
      .querySelector(".resource__detail")
      .querySelectorAll("h2");

    detailHeadings.forEach((heading) => {
      heading.setAttribute("id", convertToSlug(heading.innerText));
    });

    const headingsArray = Array.from(
      detailHeadings,
      (heading) => heading.innerText
    );

    if (headings.length < headingsArray.length) {
      setHeadings(headingsArray);
    }
  };

  const handleScroll = () => {
    const detailHeadings = document
      .querySelector(".resource__detail")
      .querySelectorAll("h2");
    const tableOfContentHeadings = document.querySelectorAll(
      ".table_of_content__item"
    );
    detailHeadings.forEach((heading, index) => {
      const headingTop = heading.getBoundingClientRect().top;

      if (headingTop < 200) {
        tableOfContentHeadings[index]?.classList.add(
          "table_of_content__item--border-blue"
        );

        tableOfContentHeadings.forEach((heading, i) => {
          if (
            i !== index &&
            heading.classList.contains("table_of_content__item--border-blue")
          ) {
            heading.classList.remove("table_of_content__item--border-blue");
          }
        });
      }
    });
  };

  const handleLinkClick = (e) => {
    const element = document.getElementById(e.target.getAttribute("value"));
    scrollIntoViewWithOffset(element, -50);
  };

  const dropdown = showDropdown ? (
    <section className="resource__dropdown">
      <p className="resource__dropdown-title resource__share-name">
        {t("inThisCaseStudy")}
      </p>
      <div className="resource__dropdown-select-box">
        <div
          className="resource__dropdown-select"
          onClick={handleDropdownClick}
        >
          <p className="resource__dropdown-select-value">{dropdownSelected}</p>
          <ArrowDown className="resource__arrow-down" />
        </div>
        <div className="resource__dropdown-options">
          {headings.map((heading, index) => (
            <p
              className="resource__dropdown-option"
              value={convertToSlug(heading)}
              key={index}
              onClick={(e) => handleOptionClick(e)}
            >
              {heading}
            </p>
          ))}
        </div>
      </div>

      <Overlay callback={handleOverlayCallback} />
    </section>
  ) : (
    ""
  );

  const tableOfContent =
    !showDropdown && headings.length > 0 ? (
      <div className="table_of_content">
        <p className="resource__share-name">{t("inThisCaseStudy")}</p>
        <ul className="table_of_content__table">
          {headings?.map((heading, index) => (
            <li
              className="table_of_content__item"
              key={index}
              value={convertToSlug(heading)}
              onClick={(e) => handleLinkClick(e)}
            >
              {heading}
            </li>
          ))}
        </ul>
      </div>
    ) : (
      ""
    );

  useEffect(() => {
    handleHeadings();
    handleScroll();
    handleDropdownOpen("resource__dropdown-options");
    handleDropdownOpen("overlay");

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <main className="resource hero" background="light">
      <div className="container">
        <div className="resource__container">
          {dropdown}
          <section className="resource__content">
            <p className="resource__time">{date}</p>
            <h1 className="resource__title section_title">{title}</h1>
            {imageUrl ? (
              <img
                className="resource__image"
                src={imageUrl}
                alt="sample img"
              />
            ) : (
              <p>
                <Skeleton height={400} style={{ borderRadius: "20px" }} />
              </p>
            )}
            {content ? (
              <div
                className="resource__detail article_detail"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            ) : (
              <LoadingContent />
            )}
          </section>
          <section className="resource__sidebar">
            <ShareToSocialMedias
              headings={headings}
              slug={slug}
              title={title}
              term="resources"
              imageUrl={imageUrl}
            />
            {tableOfContent}
          </section>
        </div>
      </div>
      <SectionTriangleRight variant="footer" />
    </main>
  );
}

const LoadingContent = () => {
  return (
    <div className="loading resource__detail">
      <p>
        <Skeleton count={5} />
        <Skeleton width={"75%"} />
      </p>
      <p>
        <Skeleton count={5} />
        <Skeleton width={"75%"} />
      </p>
      <p>
        <Skeleton height={400} style={{ borderRadius: "20px" }} />
      </p>
      <p>
        <Skeleton count={5} />
        <Skeleton width={"75%"} />
      </p>
      <p>
        <Skeleton count={5} />
        <Skeleton width={"75%"} />
      </p>
      <p>
        <Skeleton height={400} style={{ borderRadius: "20px" }} />
      </p>
      <p>
        <Skeleton count={5} />
        <Skeleton width={"75%"} />
      </p>
      <p>
        <Skeleton count={5} />
        <Skeleton width={"75%"} />
      </p>
    </div>
  );
};

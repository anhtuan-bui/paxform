import React from 'react'
import './BlogDetails.scss';
import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";

export default function BlogDetails() {
  return (
    <main>
      <section className="hero" background="light">
        <SectionTriangleRight variant="white" />
      </section>
      <div className="container">
        <section id="left-section">
          <div className="author-container">
            <div className="author-wrapper">
              <div className="author-photo">
              </div>
              <div className="author-info">
                <div className="author-name">Jane Cooper</div>
                <div className="author-title">Marketing</div>
              </div>
            </div>
          </div>
          <div className="social-icons">
            <p id="share">Share</p>
            <div class="footer__social">
              <img src="/static/media/bxl-facebook-circle.svg.17f2d30b2bcd02b6fd069f614fcf6c45.svg" alt="facebook" />
              <img src="/static/media/bxl-linkedin.svg.522c5a64c1556c48dd33d86b138e3f00.svg" alt="linkedin" />
              <img src="/static/media/bxl-youtube.svg.984f020fca07c247a91412bc986c2759.svg" alt="youtube" />
              <img src="/static/media/discord-fill.d6225dde71c344cc384c4afbe2084c75.svg" alt="discord" />
            </div>
          </div>
          <div className="author-articles">
            <p id="more-articles">See More Articles<br></br> from the Author</p>
            <div id="rec-article-img"></div>
            <h3 id="rec-article-heading">First Heading</h3>
            <p id="rec-article-desc">There are many variations of passages of Lorem Ipsum available, but the majority...</p>
            <a href="/">Read Article</a>
          </div>
        </section>
      </div>
    </main>
  )
}

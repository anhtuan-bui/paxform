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
                <section id="article-info">
                    <p className="uppercase blue">December 25, 2021</p>
                    <h1>How FedRAMP Tailored helps quickly obtain cloud-based services</h1>
                    <img src={require("../../assets/images/card2.png")} id="article-img" alt="article"></img>
                    <h2>The printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy the 1500s</h2>
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
                </section>
                <article>
                    <div className="article-snippet">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus .
                    </div>
                    <quote id="quote-wrapper">
                        <div id="quote-sign">
                        </div>
                        <div id="quote">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                        </div>
                    </quote>
                    <div className="article-snippet">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus .
                    </div>
                    <video id="company-video" src="#" poster={require("../../assets/images/company-video.png")}></video>
                    <div className="article-snippet">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, lorem in accumsan molestie, tellus quam lobortis arcu, in lacinia metus magna vitae nunc. Quisque scelerisque turpis dolor, id auctor nulla condimentum id. Maecenas luctus cursus tortor, in vestibulum nisl congue sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Aenean ornare magna at urna porttitor, eget dapibus quam convallis. Nam tincidunt pellentesque pharetra. Proin tincidunt velit non mauris semper porttitor. Nam nec sollicitudin leo. Curabitur tempor sed quam eget hendrerit. In consequat dolor at dui pharetra bibendum. Etiam ullamcorper feugiat mauris id pulvinar. Donec maximus lectus mauris, sit amet placerat mauris gravida sit amet. Nam elementum turpis a mi tincidunt, nec accumsan ipsum bibendum. Phasellus malesuada viverra quam eu laoreet. Curabitur non aliquet odio, et malesuada lorem.
                    </div>
                    <hr />
                </article>
                <section id="social-links-container">
                    <p className="uppercase grey">Share</p>
                    <div id="social-icons-wrapper">
                        <div className="icon-container">
                            <img src={require("../../assets/icons/facebook.png")} alt=""/>
                        </div>
                        <div className="icon-container">
                            <img src={require("../../assets/icons/linkedin.png")} alt="" />
                        </div>                                     
                        <div className="icon-container">
                            <img src={require("../../assets/icons/twitter.png")} alt="" />
                        </div>
                        <div className="icon-container">
                            <img src={require("../../assets/icons/pinterest.png")} alt="" />
                        </div>                                              
                        <div className="icon-container">
                            <img src={require("../../assets/icons/whatsapp.png")} alt="" />
                        </div>
                        <div className="icon-container">
                            <img src={require("../../assets/icons/share.png")} alt="" />
                        </div>                           
                    </div>
                </section>
                <section id="relative">
                    <p className="uppercase grey">In This Case Study</p>
                    <div class="recommended-article-container">
                        <div className="recommended-article">
                            <img className="recommended-article-img" src={require("../../assets/images/card-resource-3.png")} alt="" />
                            <p className="uppercase blue">Insight</p>
                            <h3>Fisrt Heading</h3>
                            <p>There are many variations of passage...</p>
                            <div className="recommended-article-link-wrapper">
                                <div>
                                    <a className="recommended-article-link" href="/">Read Article</a>
                                </div>
                                <div>
                                    <img className="recommended-article-link-arrow" src={require("../../assets/icons/arrow.png")} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="recommended-article">
                            <img className="recommended-article-img" src={require("../../assets/images/card-resource-4.png")} alt="" />
                            <p className="uppercase green">Updates</p>
                            <h3>Second Heading</h3>
                            <p>There are many variations of passage...</p>
                            <div className="recommended-article-link-wrapper">
                                <div>
                                    <a className="recommended-article-link" href="/">Read Article</a>
                                </div>
                                <div>
                                    <img className="recommended-article-link-arrow" src={require("../../assets/icons/arrow.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom_triangle bottom_triangle--light-blue"></div>
                </section>
            </div>
        </main>
    )
}

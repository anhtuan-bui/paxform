/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './BlogDetails.scss';
import RelatedCard from '../../components/RelatedCard/RelatedCard';
import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
import LatestBlogs from "../../components/LatestBlogs/LatestBlogs"
import CardResource1 from "../../assets/images/card-resource-1.png";
import CardResource2 from "../../assets/images/card-resource-2.png";
import CardResource3 from "../../assets/images/card-resource-3.png";
import CardResource4 from "../../assets/images/card-resource-4.png";
import Card2 from "../../assets/images/card2.png";
import QuoteSign from "../../assets/images/“.png";
import VideoPoster from "../../assets/images/company-video.png";
import SampleAuthorAvatar from "../../assets/images/sample-author-avatar.png";
import FacebookIcon from "../../assets/icons/facebook.png";
import LinkedinIcon from "../../assets/icons/linkedin.png";
import TwitterIcon from "../../assets/icons/twitter.png";
import PinterestIcon from "../../assets/icons/pinterest.png";
import WhatsAppIcon from "../../assets/icons/whatsapp.png";
import ShareIcon from "../../assets/icons/share.png";
import Button from '../../components/Button/Button';
import TriangleRight from '../../components/SectionTriangleRight/SectionTriangleRight';

const BlogDetails = () => {
    return (
        <main>
            {/* <section className="hero" >
                <SectionTriangleRight variant="white" />
            </section> */}
            <div className="container hero" background="light">
                <div className="wrapper">
                    <section className="article-info">
                        <div className="article-info-date">December 25, 2021</div>
                        <h1>How FedRAMP Tailored helps quickly obtain cloud-based services</h1>
                        <img className="article-info-img rounded-20" src={Card2} alt="Article"></img>
                        <h2>The printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy the 1500s</h2>
                    </section>
                    <div className="author rounded-20">
                        <div className="author-wrapper">
                            <img className="author-photo" src={SampleAuthorAvatar} alt="Author Avatar" />
                            <div className="author-info">
                                <div className="author-name">Jane Cooper</div>
                                <div className="author-title">Marketing</div>
                            </div>
                        </div>
                    </div>
                    <article className="article">
                        <div className="article-snippet">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus .
                        </div>
                        <div className="quote rounded-20">
                            <img className="quote-sign" src={QuoteSign} alt="Quote Sign" />
                            <div className="quote-text">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                            </div>
                        </div>
                        <div className="article-snippet">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus .
                        </div>
                        <video id="company-video" className="rounded-20" src="#" poster={VideoPoster}></video>
                        <div className="article-snippet">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, lorem in accumsan molestie, tellus quam lobortis arcu, in lacinia metus magna vitae nunc. Quisque scelerisque turpis dolor, id auctor nulla condimentum id. Maecenas luctus cursus tortor, in vestibulum nisl congue sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Aenean ornare magna at urna porttitor, eget dapibus quam convallis. Nam tincidunt pellentesque pharetra. Proin tincidunt velit non mauris semper porttitor. Nam nec sollicitudin leo. Curabitur tempor sed quam eget hendrerit. In consequat dolor at dui pharetra bibendum. Etiam ullamcorper feugiat mauris id pulvinar. Donec maximus lectus mauris, sit amet placerat mauris gravida sit amet. Nam elementum turpis a mi tincidunt, nec accumsan ipsum bibendum. Phasellus malesuada viverra quam eu laoreet. Curabitur non aliquet odio, et malesuada lorem.
                        </div>
                        <hr />
                    </article>
                    <section className="social">
                        <p className="social-title section_name">Share</p>
                        <div className="social-icons">
                            <div className="social-icons-wrapper rounded-20">
                                <a href="#">
                                    <img src={FacebookIcon} alt="" />
                                </a>
                            </div>
                            <div className="social-icons-wrapper rounded-20">
                                <a href="#">
                                    <img src={LinkedinIcon} alt="" />
                                </a>
                            </div>
                            <div className="social-icons-wrapper rounded-20">
                                <a href="#">
                                    <img src={TwitterIcon} alt="" />
                                </a>
                            </div>
                            <div className="social-icons-wrapper rounded-20">
                                <a href="#">
                                    <img src={PinterestIcon} alt="" />
                                </a>
                            </div>
                            <div className="social-icons-wrapper rounded-20">
                                <a href="#">
                                    <img src={WhatsAppIcon} alt="" />
                                </a>
                            </div>
                            <div className="social-icons-wrapper rounded-20">
                                <a href="#">
                                    <img src={ShareIcon} alt="" />
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="recommended">
                        <p className="recommended-title section_name"></p>
                        <div className="recommended-container">
                            <div className="recommended-article">
                                <RelatedCard image={CardResource3} title="First Heading" description readLink />
                            </div>
                            <div className="recommended-article">   
                                <RelatedCard image={CardResource1} title="Third Heading" description readLink />    
                            </div>
                        </div>
                    </section>
                </div>            
            </div>
            <div id="blogs">
                <SectionTriangleRight variant="dark-blue" />
                <LatestBlogs triangleColor="light-blue" />
            </div>
            <div id="footer-triangle">
                <SectionTriangleRight variant="light-blue" />
            </div>      
        </main>
    )
}

export default BlogDetails;
import React,  { Component } from "react";
import "./ResourceDetails.scss";
import facebook from "../../assets/images/bxl-facebook-circle.svg.svg";
import linkedin from "../../assets/images/socialMedia/bxl-linkedin.svg.svg"
import twitter from "../../assets/images/socialMedia/twitter-icon.svg"
import pinterest from "../../assets/images/socialMedia/pinterest-icon.svg"
import whatsapp from "../../assets/images/socialMedia/whatsapp-icon.svg";
import share from "../../assets/images/icon-share.svg";
/* import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
 */
import dentistImage from "../../assets/images/dentistImage.png";
import dentistImage2 from "../../assets/images/dentistImage2.png";

export default class ResourceDetails extends Component {
    render() {
        return (
            <main className="ResourceDetails">
                <div className="container">
                    <div className="content__info">
                        <p className="content__info-caseStudy">IN THIS CASE STUDY</p>
                        <div className="dropdown">
                            <button className="dropbtn">Changing the process</button>
                            <div className="dropdown-content">
                                <a href="">Growing Quickly</a>
                                <a href="#">Needing a solution</a>
                                <a href="#">Simple data form</a>
                            </div>
                        </div>
                    </div>
                    <section className="article">
                        <div className="article__heading">
                            <p className="article-date">DECEMBER 25, 2021</p>
                            <h1 className="article-title"><strong>When a dental clinic needs to streamline its patient data process</strong></h1>
                            <img src={dentistImage} alt="dentistImage" />
                        </div>
                        <div className="article__content">
                            <h2>The printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy the 1500s</h2>
                            <p1>It is a long established fact that a reader will be distracted by the readable content of a page when loooking 
                                at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                                opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing 
                                packages and web page editors now use Lorem Ipsum as their default model text, anda  search for 'lorem ipsum' 
                                will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by 
                                accident, sometimes on purpose (injected humour and the like).</p1>
                            <br></br>
                            <br></br>
                            <p1>Lorem Ipsum is simply dummy trext of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500's, when an unkown printer took a galley of type and scrambled it to make 
                                a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                                Lorem Ipsum passages, and more recentyl with desktop publishing software like Aldus.</p1>
                            <br></br>
                            <br></br>
                            <img src={dentistImage2} alt="dentistImage2"/>
                            <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, lorem in accusmsan molestie, tellus 
                                quam lobortis arcu, in lacinia metus magna vitae nunc. Quisque scelerisqu turpis dolor, id auctor nulla condimentum 
                                id. Maecenas luctus cursus tortor, in vetibulum nisl congue sit amet. Orci varius natoque penatibus et magnis dis 
                                parturient montes, nasceture ridiculus mus.</p1>
                            <br/>
                            <br/>
                            <p1>Aenean ornare magna at urna porttitor, eget dapibus quam convallis. Nam tincidunt pellentesque pharetra. Proin 
                                tincidunt velit non mauris semper porttitor. Nam nec sollicitudin leo. Curabitur tempor sed quam eget hendrerit. 
                                In consequat dolor at dui pharetra bibendum. Etiam ullamcorper feugiat mauris id pulvinar. Donec maximus lectus
                                mauris, sit amet placerat mauris gravida sit amet. Nam elementum turpis a mi tincidunt, nect accumsan ipsum 
                                bibendum. Phasellus malesuada viverra quam eu laoreet. Curabitur non aliquet odio, et malesuada lorem.</p1>
                        </div>
                    </section>
                    <section className="social">
                        <p className="social-title">Share</p>
                        <div className="social-icons">
                            <div className="social-icons-wrapper">
                                <img src={facebook} alt="facebook"/>
                            </div>
                            <div className="social-icons-wrapper">
                                <img src={linkedin} alt="linkedin"/>
                            </div>
                            <div className="social-icons-wrapper">
                                <img src={twitter} alt="twitter"/>
                            </div>
                            <div className="social-icons-wrapper">
                                <img src={pinterest} alt="pinterest"/>
                            </div>
                            <div className="social-icons-wrapper">
                                <img src={whatsapp} alt="whatsapp"/>
                            </div>
                            <div className="social-icons-wrapper">
                                <img src={share} alt="share"/>
                            </div>
                        </div>
                    </section>
                </div>
            
                     
                        {/*<p className="bodyshare">Share</p> */}
                       {/*  <section className="social">
                             <p className="body__social-share">Share</p> 
                            <div className="social-icons">
                                <div className="social-background">
                                    <img src={facebook} alt="linkedin"/>
                                </div>
                                <div className="social-background">
                                    <img src={linkedin} alt="linkedin"/>
                                </div>
                                <div className="social-background">
                                    <img src={twitter} alt="linkedin"/>
                                </div>
                                <div className="socialbackground">
                                    <img src={pinterest} alt="linkedin"/>
                                </div>
                                <div className="ocial-background">
                                    <img src={whatsapp} alt="linkedin"/>
                                </div>
                                <div className="social-background">
                                    <img src={share} alt="linkedin"/>
                                </div>
                            </div>
                        </section> */}
                        {/* <section className="social">
                        <p className="social-title section_name">Share</p>
                        <div className="social-icons">
                            <div className="social-icons-wrapper rounded-20">
                                <img src={FacebookIcon} alt="" />
                            </div>
                            <div className="social-icons-wrapper rounded-20">
                                <img src={LinkedinIcon} alt="" />
                            </div>
                            <div className="social-icons-wrapper rounded-20">
                                <img src={TwitterIcon} alt="" />
                            </div>
                            <div className="social-icons-wrapper rounded-20">
                                <img src={PinterestIcon} alt="" />
                            </div>
                            <div className="social-icons-wrapper rounded-20">
                                <img src={WhatsAppIcon} alt="" />
                            </div>
                            <div className="social-icons-wrapper rounded-20">
                                <img src={ShareIcon} alt="" />
                            </div>
                        </div>
                    </section> */}
                    
            </main>
        )
    }
}
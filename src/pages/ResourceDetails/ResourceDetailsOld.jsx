import React,  { Component } from "react";
import "./ResourceDetails.scss";
import facebook from "../../assets/images/bxl-facebook-circle.svg.svg";
import linkedin from "../../assets/images/socialMedia/bxl-linkedin.svg.svg"
import twitter from "../../assets/images/socialMedia/twitter-icon.svg"
import pinterest from "../../assets/images/socialMedia/pinterest-icon.svg"
import whatsapp from "../../assets/images/socialMedia/whatsapp-icon.svg";
import share from "../../assets/images/icon-share.svg";
import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";

//import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";

import dentistImage from "../../assets/images/dentistImage.svg";
import dentistImage2 from "../../assets/images/dentistImage2.svg";

export default class ResourceDetails extends Component {
    render() {
        return (
            <main className="ResourceDetails">
                <section className="body hero" background="light">         
                    <div className="container body__container">
                        <div className="body__left">
                            <p className="body__left-share">SHARE</p>
                            <div className="body__left-social">
                                <div className="body__left-social-background">
                                    <img src={facebook} alt="facebook"/>
                                </div>
                                <div className="body__left-social-background">
                                    <img src={linkedin} alt="linkedin"/>
                                </div>
                                <div className="body__left-social-background">
                                    <img src={twitter} alt="twitter"/>
                                </div>
                                <div className="body__left-social-background">
                                    <img src={pinterest} alt="pinterest"/>
                                </div>
                                <div className="body__left-social-background">
                                    <img src={whatsapp} alt="whatsapp"/>
                                </div>
                                <div className="body__left-social-background">
                                    <img src={share} alt="share"/>
                                </div>
                            </div>  
                            <div className="body__left-caseStudy">
                                <p1>IN THIS CASE STUDY</p1>
                            </div>
                            <div className="dropdown">
                                {/* <div className="hyperlink-dropdown"> */}
                                    <button className="dropbtn">Changing the process</button>
                                    <div className="dropdown-content">
                                            {/*<li className="list-item">
                                                <div className="blue-bar"></div>
                                                <div className="list-item-text">Changing the process</div>    
                                            </li>*/}

{/*                                             <div className="list-item">
                                                <div className="blue-bar"></div> */}
                                                <a href="#">Growing quickly</a>
                                            {/* </div> */}
                                            {/* <div className="list-item">
                                                <div className="blue-bar"></div> */}
                                                <a href="#">Needing a solution</a>
                                           {/*  </div> */}
                                            {/* <div className="list-item">
                                                <div className="blue-bar"></div> */}
                                                <a href="#">Simple data form</a>
                                           {/*  </div>   */}                                 
                                    </div>
                                {/* <div> */}
                            </div>
                        </div>
                        <div className="body_box-right">
                            <p className="body__right-date">DECEMBER 25, 2021</p>
                            <h className="section_title"><strong>When a dental clinic needs to <br></br>streamline its patient data process</strong></h>
                            <img src={dentistImage} alt="dentistImage" />
                            <div className="body_box-right-bottom">
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
                        </div>       
                    </div>    
                </section>     
                <SectionTriangleRight variant="light-blue"/>                 
            </main>
        )
    }
}
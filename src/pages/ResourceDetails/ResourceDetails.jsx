import React,  { Component } from "react";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";

import "./ResourceDetails.scss";

/* import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
 */
import dentistImage from "../../assets/images/dentistImage.png";
import dentistImage2 from "../../assets/images/dentistImage2.png";

export default class ResourceDetails extends Component {
    render() {
        return (
            <main className="ResourceDetails">
                <section className="hero" background="light">
                    <SectionTriangleRight variant="white" />
                </section>
                <div className="container">
                    <div className="wrapper">
                        <div className="content__info">
                            <p className="content__info-caseStudy">IN THIS CASE STUDY</p>
                            <div className="dropdown">
                                <button className="dropbtn">Changing the process</button>
                                <div className="dropdown-content">
                                    <div className="list-item">
                                        <div className="blue-bar"></div>
                                        <a href="">Growing Quickly</a>
                                    </div>
                                    <div className="list-item">
                                        <div className="blue-bar"></div>
                                        <a href="#">Needing a solution</a>
                                    </div>
                                        
                                    <div className="list-item">
                                        <div className="blue-bar"></div>
                                        <a href="#">Simple data form</a>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-table">
                                <ul>
                                    <li className="list-item">
                                        <div className="blue-bar"></div>
                                        <div className="list-item-text">Changing the process</div>    
                                    </li>
                                    <li className="list-item">
                                        <div className="blue-bar"></div>
                                        <div className="list-item-text">Growing quickly</div>
                                    </li>
                                    <li className="list-item">
                                        <div className="blue-bar"></div>
                                        <div className="list-item-text">Needing a solution</div>
                                    </li>
                                    <li className="list-item">
                                        <div className="blue-bar"></div>
                                        <div className="list-item-text">Simple data form</div>
                                    </li>
                                </ul>
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
                        <hr className="black-bar"/>
                            <SocialIcons className="social-margin-update"/>
                    </div>
                </div>
            
                <SectionTriangleRight variant="light-blue" />
            
                        
                    
            </main>
        )
    }
}
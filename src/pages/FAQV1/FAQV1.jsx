import React, { Component } from "react";

import "./FAQV1.scss";
import arrowDown from "../../assets/images/arrowDown.svg"

import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
import { forwardRef } from "react";


const information = [
    {
        title: "what are data credits?",
        content: "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
    },
    {
        title: "Can I cancel my plan any time?",
        content: "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
    },
    {
        title: "Is there a free trial for the paid plans?",
        content: "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
    },
    
]
const information2 = [
    {
        title: "We are a medium-sized company. Which plan is right for us?",
        content: "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
    },
    {
        title: "I want to store my information and share it with others Which plan is right for me?",
        content: "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
    },
    {
        title: "Is there a free trial for the paid plans?",
        content: "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
    },
    {
        title: "I want to store my information and share it with others. Which plan is right for me?",
        content: "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
    },
    {
        title: "I want to store my information and share it with others. Which plan is right for me?",
        content: "Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
    },
]


export default class FAQV1 extends Component {

    dropdownValue = "What are data credits?"

    dropdown = [
        "What are data credits?",
        "Can I cancel my plan at any time?",
        "Is there a free trial for the paid plans?",
        "We are a medium-sized company. Which plan is right for us?",
        "I want to store my information and share it with others. Which plan is right for me?",
        "Can I cancel my plan at any time?",
        "Is there a free trial for the paid plans?"
    ]

    componentDidMount() {
        window.addEventListener("click", (e) => this.handleOpenClick(e));
    }
    componentWillUnmount() {
        window.removeEventListener("click", (e) => this.handleOpenClick(e));

    }
    handleOpenClick = (e, selectorName) => {
        let el = e.target.parentElement;
        el.classList.toggle("on");
    }

    constructor(props) {
        super(props);


        this.state = {dropdownValue: this.dropdownValue}

    }

    handleDropdownOptionClick(e) {
        const optionValue = e.target.getAttribute("value");
        this.setState({dropdownValue: optionValue });
    }
    render() {
        return (    
            <main className="FAQ">
                <section className="hero">
                    <div className="container hero__wrapper">
                        <div className="hero__content">
                            <h1 className="hero__title">Frequently Asked Questions</h1>
                        </div>
                    </div>
                    <div className="bottom_triangle bottom_triangle--white"></div>
                </section>
                <section className="content">
                    <div className="container content__wrapper">                   
                        
                        {/* DROPDOWN MENU START */}

                        <div className="dropdown">
                            <div className="whatever">
                                <button className="dropbtn">
                                    <div className="button_div">
                                        
                                        {this.state.dropdownValue}
                                    </div>
                                    <img src={arrowDown} alt="arrow" />
                                </button>
                            </div>
                            <div className="black-bar"></div>
                            <div className="dropdown-content">
                                {
                                    this.dropdown.map((option, index) => (
                                        <div className="list-item" key={index} >
                                            
                                            <a href={`#heading2${index}`} value={option} onClick={(e) => this.handleDropdownOptionClick(e)}>{option}</a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>   

                        {/* DROPDOWN MENU END */}

                        {/* SIDE TABLE START  */}

                        <div className="table-wrapper">
                            <h3 className="table-wrapper-title">FAQ</h3>
                        <div className="side-table">
                            <ul>
                                <li><a href="#heading20">What are data credits</a></li>
                                <li><a href="#heading21">Can I cancel my plan at any time?</a></li>
                                <li><a href="#heading22">Is there a free trial for the paid plans?</a></li>
                                <li><a href="#heading23">We are a medium-sized company. Which plan is right for us?</a></li>
                                <li><a href="#heading24">I want to store my information and share it with others. Which plan is right for me?</a></li>
                                <li><a href="#heading25">Can I cancel my plan at any time?</a></li>
                                <li><a href="#heading26">Is there a free trial for the paid plans?</a></li>
                            </ul>
                        </div>
                        </div>

                        {/* SIDE TABLE END    */}

                        {/* LARGE SIDE TABLE START */}

                        <div className="meow">
                            <ul>
                                <li><a href="#woof">Section One</a></li>
                                <li><a href="#moo">Section Two</a></li>
                            </ul>
                        </div>

                        {/* LARGE SIDE TABLE END  */}

                        <section className="information">
                                <div className="information__wrapper">
                                    <h1 id="woof">Section One</h1>
                                    <table> 
                                        <tbody>
                                            {information.map((faq, index) => (
                                                <tr onClick={(e) => this.handleOpenClick(e)} key={index}>
                                                    <th>{faq.title}</th>
                                                    <td>{faq.content}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <h1 className="heading" id="moo">Section Two </h1>
                                    <table> 
                                        <tbody>
                                            {information2.map((faq, index) => (
                                                <tr onClick={(e) => this.handleOpenClick(e)} key={index}>
                                                    <th>{faq.title}</th>
                                                    <td>{faq.content}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                        </section>


                        <div className="article">
                            <div className="section-one">
                                {/* <h1>Section One</h1> */}
                                {/* <div className="black-bar"></div> */}
                                <div className="heading-zero">
                                    <h1 id="heading20">What are data credits?</h1>
                                    <p>Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!</p>
                                    <p>We may collect Personal Data and Navigation Information from Users of our Products to help us provide, administer, and improve our Products. In order to use the Products, you will need to provide your full name and email address to us. To make changes to the permissions you give us, please visit your Bynder User profile.</p>
                                </div>
                                {/* <div className="black-bar"></div> */}
                                <div className="heading-one">
                                    <h1 id="heading21">Can I cancel my plan at any time?</h1>
                                    <p>Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!</p>
                                </div>
                                {/* <div className="black-bar"></div> */}
                                <div className="heading-two">
                                    <h1 id="heading22">Is there a free trial for the paid plans?</h1>
                                    <p>We may collect Personal Data and Navigation Information from Users of our Products to help us provide, administer, and improve our Products. In order to use the Products, you will need to provide your full name and email address to us. To make changes to the permissions you give us, please visit your Bynder User profile.</p>
                                </div>
                                {/* <div className="black-bar"></div> */}
                                <div className="heading-three">
                                    <h1 id="heading23">We are a medium-sized company. Which plan is right for us?</h1>
                                    <p>Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!</p>
                                </div>
                            </div> 
                            {/* <div className="black-bar"></div> */}
                            <div className="section-two">
                                {/* <h1>Section Two</h1> */}
                                {/* <div className="black-bar"></div> */}
                                <div className="heading-four">
                                    <h1 id="heading24">I want to store my information and share it with others. Which plan is right for me?</h1>
                                    <p>Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!</p>
                                </div>
                                {/* <div className="black-bar"></div> */}
                                <div className="heading-five">    
                                    <h1 id="heading25">Can I cancel my plan at any time?</h1>
                                    <p>Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!</p>
                                </div>
                                {/* <div className="black-bar"></div> */}
                                <div className="heading-six">    
                                    <h1 id="heading26">Is there a free trial for the paid plans?</h1>
                                    <p>We may collect Personal Data and Navigation Information from Users of our Products to help us provide, administer, and improve our Products. In order to use the Products, you will need to provide your full name and email address to us. To make changes to the permissions you give us, please visit your Bynder User profile.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SectionTriangleRight variant="light-blue" />
            </main>
        )
    }
} 
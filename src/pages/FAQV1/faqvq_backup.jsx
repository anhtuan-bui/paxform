import React, { Component } from "react";

import "./FAQV1.scss";
import arrowDown from "../../assets/images/arrowDown.svg"

import FrequentlyAsked from "../../components/FrequentlyAsked/FrequentlyAsked.jsx";

import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
import { forwardRef } from "react";
import {AnimateHeight} from 'react-animate-height'


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

   
    handleOpenClick = (e) => {
        console.log(e.target);
        let el = e.target.parentElement;
        el.classList.toggle('on');
    }

    constructor(props) {
        super(props);

        this.state = { dropdownValue: this.dropdownValue }
    }

    handleDropdownOptionClick(e) {
        const optionValue = e.target.getAttribute("value");
        this.setState({ dropdownValue: optionValue });
    }

    //need function that sets the maxheight of the th div to 0 untill it is clicked,
    //then it is set to the scroll height.

    
    // handleAccordionItemClick = (e) => {
    //     const accordionItems = document.querySelectorAll(
    //       ".frequently_ask__accordion-item"
    //     );
    
    //     const closeAccordionItem = (item) => {
    //       item.lastElementChild.style.maxHeight = null;
    //       item.querySelector("svg").style.transform = "rotate(360deg)";
    //       item.lastElementChild.style.marginTop = 0;
    //     };
    
    //     const openAccordionItem = (item) => {
    //       item.lastElementChild.style.maxHeight =
    //         item.lastElementChild.scrollHeight + "px";
    //       item.lastElementChild.style.marginTop = "0.825rem";
    //       item.querySelector("svg").style.transform = "rotate(180deg)";
    //     };
    
    //     accordionItems.forEach((item) => {
    //       if (item.contains(e.target)) {
    //         if (item.lastElementChild.style.maxHeight) {
    //           closeAccordionItem(item);
    // 

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

                        <div className="section-heading">
                            <ul>
                                <li><a href="#section-one">Section One</a></li>
                                <li><a href="#section-two">Section Two</a></li>
                            </ul>
                        </div>

                        {/* LARGE SIDE TABLE END  */}

                        
                        <section className="information">
                            <div className="information__wrapper">
                            <FrequentlyAsked/>
                             {/* <div className="container">
                                <div className="frequently_ask__wrapper">
                                    <h1 className="frequently_ask__title section_title">
                                    Frequently asked questions
                                    </h1>
                                    <div className="frequently_ask__accordion">
                                        {faqs.map((faq, index) => (
                                        <div
                                            className="frequently_ask__accordion-item"
                                            key={`frequently_ask__accordion-item-${index}`}
                                        >
                                            <div
                                            className="frequently_ask__accordion-box"
                                            onClick={(e) => handleAccordionItemClick(e)}
                                            >
                                            <h2 className="frequently_ask__accordion-title">
                                                {faq.title}
                                            </h2>
                                            <ArrowDown className="frequently_ask__accordion-arrow" />
                                            </div>
                                            <p className="frequently_ask__accordion-content">
                                            {faq.content}
                                            </p>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>  */}
                                 {/* <h1 id="section-one-title">Section One</h1>
                                <table>
                                    <tbody>
                                        {information.map((faq, index) => (
                                            <tr onClick={(e) => this.handleOpenClick(e)} key={index}>
                                                <th>{faq.title}</th>
                                                <td>{faq.content}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table> */}

                                
                                 {/* <div>
                                    <div>
                                        {information.map((faq, index) => (
                                            <div onClick={(e) => this.handleOpenClick(e)} key={index}>
                                                <h2>{faq.title}</h2>
                                                <p>{faq.content}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div> */}
                                 
                                 {/* <h1 className="heading" id="section-two-title">Section Two </h1>
                                <table>
                                    <tbody>
                                        {information2.map((faq, index) => (
                                            <tr onClick={(e) => this.handleOpenClick(e)} key={index}>
                                                <th>
                                                    {faq.title}
                                                   
                                                </th>
                                                <td>{faq.content}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table> 
                                        */}
                            </div>
                        </section>
                    {/* <div>
                        <h1>heading</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quia quos eius distinctio dolore rem eos dolorem, iure beatae illum animi saepe, ipsum eligendi quisquam molestias accusantium repellendus in quibusdam!</p>   
                    </div>
                     
                     
                     <div>heading</div>
                     <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quia quos eius distinctio dolore rem eos dolorem, iure beatae illum animi saepe, ipsum eligendi quisquam molestias accusantium repellendus in quibusdam!</div>
                     <div>heading</div>
                     <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quia quos eius distinctio dolore rem eos dolorem, iure beatae illum animi saepe, ipsum eligendi quisquam molestias accusantium repellendus in quibusdam!</div>
                     <div>heading</div>
                     <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quia quos eius distinctio dolore rem eos dolorem, iure beatae illum animi saepe, ipsum eligendi quisquam molestias accusantium repellendus in quibusdam!</div> */}
                        {/* <section className="article">
                            <div className="heading-zero">
                                <h1 id="heading20">What are data credits?</h1>
                                <p>Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!</p>

                            </div>
                        </section> */}
                        <section className="article">
                            <div className="heading-zero">
                                <h1 id="heading20">What are data credits?</h1>
                                <p>Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!</p>
                                <p>We may collect Personal Data and Navigation Information from Users of our Products to help us provide, administer, and improve our Products. In order to use the Products, you will need to provide your full name and email address to us. To make changes to the permissions you give us, please visit your Bynder User profile.</p>
                            </div>
                            <div className="heading-one">
                                <h1 id="heading21">Can I cancel my plan at any time?</h1>
                                <p>Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!</p>
                            </div>
                            <div className="heading-one">
                                <h1 id="heading22">Is there a free trial for the paid plans?</h1>
                                <p>We may collect Personal Data and Navigation Information from Users of our Products to help us provide, administer, and improve our Products. In order to use the Products, you will need to provide your full name and email address to us. To make changes to the permissions you give us, please visit your Bynder User profile.</p>
                            </div>
                            <div className="heading-one">
                                <h1 id="heading23">We are a medium-sized company. Which plan is right for us?</h1>
                                <p>Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!</p>
                            </div>
                            <div className="heading-one">
                                <h1 id="heading24">I want to store my information and share it with others. Which plan is right for me?</h1>
                                <p>Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!</p>
                            </div>
                            <div className="heading-one">
                                <h1 id="heading25">Can I cancel my plan at any time?</h1>
                                <p>Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!</p>
                            </div>
                            <div className="heading-one">
                                <h1 id="heading26">Is there a free trial for the paid plans?</h1>
                                <p>We may collect Personal Data and Navigation Information from Users of our Products to help us provide, administer, and improve our Products. In order to use the Products, you will need to provide your full name and email address to us. To make changes to the permissions you give us, please visit your Bynder User profile.</p>
                            </div>
                        </section>
                    </div>
                </section>

                <SectionTriangleRight variant="light-blue" />
            </main>
        )
    }
} 
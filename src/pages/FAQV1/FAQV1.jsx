import React, { useState, Component } from "react";

import "./FAQV1.scss";
import arrowDown from "../../assets/images/arrowDown.svg";

import FrequentlyAsked from "../../components/FrequentlyAsked/FrequentlyAsked.jsx";

import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
import { forwardRef } from "react";

const FAQV1 = () => {
    
//   dropdownValue = "Section One";

  let dropdownArr = [
    "Section One",
    "Section Two",
    // "What are data credits?",
    // "Can I cancel my plan at any time?",
    // "Is there a free trial for the paid plans?",
    // "We are a medium-sized company. Which plan is right for us?",
    // "I want to store my information and share it with others. Which plan is right for me?",
    // "Can I cancel my plan at any time?",
    // "Is there a free trial for the paid plans?"
  ];

//   handleOpenClick = (e) => {
//     console.log(e.target);
//     let el = e.target.parentElement;
//     el.classList.toggle("on");
//   };

//   constructor(props) {
//     super(props);

//     this.state = { dropdownValue: this.dropdownValue };
//   }

//   handleDropdownOptionClick(e) {
//     const optionValue = e.target.getAttribute("value");
//     this.setState({ dropdownValue: optionValue });
// }

    const [dropdown, setDropdown] = useState(false);

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
            <div className="dropdown">
              <div className="dropdownWrapper">
                <button className="dropbtn">
                  <div className="button_div"></div>
                  <img src={arrowDown} alt="arrow" />
                </button>
              </div>
              <div className="black-bar"></div>
              <div className="dropdown-content dropdown">
                {dropdownArr.map((option, index) => (
                  <div className="list-item" key={index}>
                    <a
                      href={`#section${index}`}
                      value={option}
                      onClick={() => setDropdown(!dropdown)}
                    //   onClick={(e) => this.handleDropdownOptionClick(e)}

                    >
                      {option}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* DROPDOWN MENU END */}

            {/* SIDE TABLE START  */}

            {/* <div className="table-wrapper">
                            <h3 className="table-wrapper-title">FAQ</h3>
                            <div className="side-table">
                                <ul>
                                    <li><a href="#section-one">Section One</a></li>
                                    <li><a href="#section-two">Section Two</a></li>
                                    <li><a href="#heading20">What are data credits</a></li>
                                    <li><a href="#heading21">Can I cancel my plan at any time?</a></li>
                                    <li><a href="#heading22">Is there a free trial for the paid plans?</a></li>
                                    <li><a href="#heading23">We are a medium-sized company. Which plan is right for us?</a></li>
                                    <li><a href="#heading24">I want to store my information and share it with others. Which plan is right for me?</a></li>
                                    <li><a href="#heading25">Can I cancel my plan at any time?</a></li>
                                    <li><a href="#heading26">Is there a free trial for the paid plans?</a></li>
                                </ul>
                            </div>
                        </div> */}

            {/* SIDE TABLE END    */}

            {/* LARGE SIDE TABLE START */}

            <div className="section-heading">
              <ul>
                <li>
                  <a href="#section0">Section One</a>
                </li>
                <li>
                  <a href="#section1">Section Two</a>
                </li>
              </ul>
            </div>

            {/* LARGE SIDE TABLE END  */}

            <section className="information">
              <div className="information__wrapper">
                <FrequentlyAsked />
              </div>
            </section>
            <section className="article">
              <div className="heading-zero">
                <h1 id="heading20">What are data credits?</h1>
                <p>
                  Pa hospital. All my information and medical history were
                  filled in an instance. Had I done it manually, I would have
                  had to find all the details, which would have taken hours!
                </p>
                <p>
                  We may colltion Information from Users of our Products to help
                  us provide, administer, and improve our Products. In order to
                  use the Products, you will need to provide your full name and
                  email address to us. To make changes to the permissions you
                  give us, please visit your Bynder User profile.
                </p>
              </div>
              <div className="heading-one">
                <h1 id="heading21">Can I cancel my plan at any time?</h1>
                <p>
                  Paxform helped me fill my admission documents to a hospital.
                  All my information and medical history were filled in an
                  instance. Had I done it manually, I would have had to find all
                  the details, which would have taken hours!
                </p>
              </div>
              <div className="heading-one">
                <h1 id="heading22">
                  Is there a free trial for the paid plans?
                </h1>
                <p>
                  We may collect Personal Data and Navigation Information from
                  Users of our Products to help us provide, administer, and
                  improve our Products. In order to use the Products, you will
                  need to provide your full name and email address to us. To
                  make changes to the permissions you give us, please visit your
                  Bynder User profile.
                </p>
              </div>
              <div className="heading-one">
                <h1 id="heading23">
                  We are a medium-sized company. Which plan is right for us?
                </h1>
                <p>
                  Paxform helped me fill my admission documents to a hospital.
                  All my information and medical history were filled in an
                  instance. Had I done it manually, I would have had to find all
                  the details, which would have taken hours!
                </p>
              </div>
              <div className="heading-one">
                <h1 id="heading24">
                  I want to store my information and share it with others. Which
                  plan is right for me?
                </h1>
                <p>
                  Paxform helped me fill my admission documents to a hospital.
                  All my information and medical history were filled in an
                  instance. Had I done it manually, I would have had to find all
                  the details, which would have taken hours!
                </p>
              </div>
              <div className="heading-one">
                <h1 id="heading25">Can I cancel my plan at any time?</h1>
                <p>
                  Paxform helped me fill my admission documents to a hospital.
                  All my information and medical history were filled in an
                  instance. Had I done it manually, I would have had to find all
                  the details, which would have taken hours!
                </p>
              </div>
              <div className="heading-one">
                <h1 id="heading26">
                  Is there a free trial for the paid plans?
                </h1>
                <p>
                  We may collect Personal Data and Navigation Information from
                  Users of our Products to help us provide, administer, and
                  improve our Products. In order to use the Products, you will
                  need to provide your full name and email address to us. To
                  make changes to the permissions you give us, please visit your
                  Bynder User profile.
                </p>
              </div>
            </section>
          </div>
        </section>

        <SectionTriangleRight variant="light-blue" />
        {/* <Example /> */}
      </main>
    );
  }

// const Example = () => {
//     const { loading, data } = useQuery(GET_FAQS)
//     if (loading) return 'loading';
//     console.log(data);
//     const faqs = data.faqCategories.nodes[0].faqs.nodes;
//     return (
//         <div>
//             {faqs.map((faq, index) => (
//                 <div key={index}>
//                     <h2>{faq.title}</h2>
//                     <div dangerouslySetInnerHTML={{ __html: faq.content }}></div>
//                 </div>
//             ))}</div>
//     )
// }

export default FAQV1;
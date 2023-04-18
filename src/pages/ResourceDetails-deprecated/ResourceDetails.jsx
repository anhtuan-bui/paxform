import React, { Component } from "react";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
import arrowDown from "../../assets/images/arrowDown.svg";

import "./ResourceDetails.scss";

/* import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
 */
import dentistImage from "../../assets/images/dentistImage.png";
import dentistImage2 from "../../assets/images/dentistImage2.png";

export default class ResourceDetails extends Component {
  dropdownValue = "Changing the process";

  dropdown = [
    "Changing the process",
    "Growing Quickly",
    "Needing a solution",
    "Simple data form",
  ];

  dropdownBtn = document.getElementsByClassName("dropdown__dropbtn");
  dropdownMenu = document.getElementsByClassName("dropdown__content");
  toggleArrow = document.getElementsByClassName("arrow-down");

  // document.getElementsByClassName("dropdown__dropbtn").addEventListener("click", function(e) {

  // });
  // dropdownClick () {
  //     //
  //     dropdownBtn.addEventListener("click", functon(e) {
  //         dropdownMenu.classList.toggle
  //     })
  // }

  constructor(props) {
    super(props);

    this.state = { dropdownValue: this.dropdownValue };
    this.handleScroll = this.handleScroll.bind(this);
    //this.testFunction = this.testFunction.bind(this);
    //this.color = this.color.bind(this);
    //this.outcolor = this.outcolor.bind(this);
  }

  componentDidMount() {
    // document.addEventListener("scroll", this.handleScroll);
    this.testFunction();
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  handleDropdownOptionClick(e) {
    const optionValue = e.target.getAttribute("value");
    this.setState({ dropdownValue: optionValue });
  }

  handleScroll() {
    const dropdown = document.querySelector(".dropdown-table");

    if (window.scrollY >= 236) {
      dropdown.classList.add("dropdown-table--active");
    } else {
      dropdown.classList.remove("dropdown-table--active");
    }
    this.setState(this.app);
  }

  testFunction() {
    // document.getElementsByClassName('first')[0].onMouseOver = function () {
    //     document.getElementByClassName('outer-box')[0].style="background: black"
    // }

    document.addEventListener("scroll", () => {
      //const y = 200;

      const headings = document.querySelectorAll("h2");

      headings.forEach((heading, i) => {
        const top = heading.getClientRects()[0].top;
        if (top < 200 && top > 100) {
          const listItems = document.querySelectorAll(".list-item");
          listItems[i].classList.add("list-item--active");
          listItems.forEach((item, j) => {
            if (j !== i) {
              item.classList.remove("list-item--active");
            }
          });
        }
      });

      // const h2Top = document.querySelector('h2').getClientRects()[0].top;

      // if (h2Top < 200) {
      //    const listItems = document.querySelectorAll('.list-item-text');
      //    listItems[0].classList.add("list-item--active");

      // }
    });
    document.getElementsByClassName("first")[0].onMouseOut = function () {
      document.getElementsByClassName("outer-box")[0].style =
        "background: green";
    };
  }
  color() {
    document.getElementById("outer").style.background = "black";
  }
  outcolor() {
    document.getElementById("outer").style.background = "green";
  }

  render() {
    return (
      <main className="ResourceDetails">
        <section className="hero" background="light">
          <SectionTriangleRight variant="white" />
        </section>
        <div className="container">
          <div className="wrapper">
            <div className="content__info">
              <div className="content__wrapper">
                {/* START OF SIDE TABLE STICKY */}
                <p className="content__info-caseStudy">IN THIS CASE STUDY</p>
                <div className="table-wrapper">
                  <div className="dropdown-table">
                    <ul>
                      <li className="list-item">
                        <div className="blue-bar"></div>
                        <a
                          className="list-item-text"
                          href={`#heading20`}
                          name="heading20"
                        >
                          Changing the process
                        </a>
                      </li>
                      <li className="list-item">
                        <div className="blue-bar"></div>
                        <a
                          className="list-item-text"
                          href={`#heading29`}
                          name="heading29"
                        >
                          Growing quickly
                        </a>
                      </li>
                      <li className="list-item">
                        <div className="blue-bar"></div>
                        <a className="list-item-text" href={`#heading22`}>
                          Needing a solution
                        </a>
                      </li>
                      <li className="list-item">
                        <div className="blue-bar"></div>
                        <a className="list-item-text" href={`#heading23`}>
                          Simple data form
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="empty-space"></div>

              {/* END OF SIDE TABLE STICKY */}
              {/* START OF DROPDOWN MENU   */}

              <div className="dropdown">
                <div className="dropdown__button-wrapper">
                  <div className="blue-bar"></div>
                  <button className="dropdown__dropbtn">
                    <div className="button_div">
                      <div className="blue-bar"></div>
                      {this.state.dropdownValue}
                    </div>
                    <img className="arrow-down" src={arrowDown} alt="arrow" />
                  </button>
                </div>
                <div className="dropdown__content">
                  {this.dropdown.map((option, index) => (
                    <div className="list-item" key={index}>
                      <div className="blue-bar"></div>
                      <a
                        href={`#heading2${index}`}
                        value={option}
                        onClick={(e) => this.handleDropdownOptionClick(e)}
                      >
                        {option}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              {/* </div>                     */}
              {/* <div className="empty-space"></div>  */}

              {/* END OF DROPDOWN MENU   */}
            </div>
            {/* </div> */}
            <section className="article">
              <div className="article__heading">
                <p className="article-date">DECEMBER 25, 2021</p>
                <h1 className="article-title">
                  <strong>
                    When a dental clinic needs to streamline its patient data
                    process
                  </strong>
                </h1>
                <img
                  className="main_img"
                  src={dentistImage}
                  alt="dentistImage"
                />
              </div>
              <div className="article__content">
                <h2 id="heading20">
                  The printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy the 1500s
                </h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when loooking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, anda search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
                <p id="heading21">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500's, when an unkown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. it has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recentyl with desktop publishing software
                  like Aldus.
                </p>
                <img
                  className="main_img"
                  src={dentistImage2}
                  alt="dentistImage2"
                />
                <p id="heading22">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  tristique, lorem in accusmsan molestie, tellus quam lobortis
                  arcu, in lacinia metus magna vitae nunc. Quisque scelerisqu
                  turpis dolor, id auctor nulla condimentum id. Maecenas luctus
                  cursus tortor, in vetibulum nisl congue sit amet. Orci varius
                  natoque penatibus et magnis dis parturient montes, nasceture
                  ridiculus mus.
                </p>
                <h2 id="heading29">
                  Heading 2 Lorem Ipsum has been the industry's standard dummy
                  the 1500s
                </h2>
                <p id="heading23">
                  Aenean ornare magna at urna porttitor, eget dapibus quam
                  convallis. Nam tincidunt pellentesque pharetra. Proin
                  tincidunt velit non mauris semper porttitor. Nam nec
                  sollicitudin leo. Curabitur tempor sed quam eget hendrerit. In
                  consequat dolor at dui pharetra bibendum. Etiam ullamcorper
                  feugiat mauris id pulvinar. Donec maximus lectus mauris, sit
                  amet placerat mauris gravida sit amet. Nam elementum turpis a
                  mi tincidunt, nect accumsan ipsum bibendum. Phasellus
                  malesuada viverra quam eu laoreet. Curabitur non aliquet odio,
                  et malesuada lorem.
                </p>
              </div>
            </section>
            <hr className="black-bar" />
            <SocialIcons className="social-margin-change" />
          </div>
        </div>

        <div className="icons">
          <div className="first"></div>
        </div>

        {/* <div className="icons">
                    <div className="first" onmouseover="color()" onmouseout="outcolor()"></div>
                </div>
                <div className="outer-box" id="outer"></div> */}

        <SectionTriangleRight variant="light-blue" />
      </main>
    );
  }
}

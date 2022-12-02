import React, { Component } from "react";
import "./FAQ.scss";

const faqs = [
	{
		id: "General0",
		title: "What is Paxform?",
		content:
			"This Global Privacy Policy provides information on how Bynder handles data as a data controller, meaning all data we process for our own purposes. Where Bynder is a processor or a sub-processor of data, that activity is generally governed by a Data Processing Agreement.",
	},
	{
		id: "General1",
		title: "General Point 2",
		content:
			"We may collect Personal Data and Navigation Information from Users of our Products to help us provide, administer, and improve our Products. In order to use the Products, you will need to provide your full name and email address to us. To make changes to the permissions you give us, please visit your Bynder User profile",
	},
	{
		id: "General2",
		title: "General Point 3",
		content:
			"“Personal Data” refers to any information that can be used to identify you personally. For our purposes, this may include your (first and last) name, email address, User ID, company name, address, phone number and information about you that is publicly available online via sites like Facebook, LinkedIn, Twitter, and Google, data you write in a contact form, your project role, your uploads, your preferences and your account settings. <br /><br /> “Navigation Information” refers to information about your computer, device, visits to the Website, and use of the Products. For our purposes, this includes which website you visited prior to visiting us or which link or campaign you clicked on to reach our website, your IP address, geographical location (city and/or country), browser type and version, ISP information, referral source, length of visits, pages viewed, language preferences and heat mapping. <br /><br /> In some cases Navigation Information may also be Personal Data. <br /><br /> Generally, we may use your Personal Data and Navigation Information for the following purposes:",
	},
];

const faqs2 = [
	{
		id: "Privacy0",
		title: "Privacy Point 1",
		content:
			"We may collect Personal Data and Navigation Information from Users of our Products to help us provide, administer, and improve our Products. In order to use the Products, you will need to provide your full name and email address to us. To make changes to the permissions you give us, please visit your Bynder User profile.",
	},
	{
		id: "Privacy1",
		title: "Privacy Point 2",
		content:
			" “Personal Data” refers to any information that can be used to identify you personally. For our purposes, this may include your (first and last) name, email address, User ID, company name, address, phone number and information about you that is publicly available online via sites like Facebook, LinkedIn, Twitter, and Google, data you write in a contact form, your project role, your uploads, your preferences and your account settings. <br /> <br /> “Navigation Information” refers to information about your computer, device, visits to the Website, and use of the Products. For our purposes, this includes which website you visited prior to visiting us or which link or campaign you clicked on to reach our website, your IP address, geographical location (city and/or country), browser type and version, ISP information, referral source, length of visits, pages viewed, language preferences and heat mapping. <br /><br /> In some cases Navigation Information may also be Personal Data. <br /><br /> Generally, we may use your Personal Data and Navigation Information for the following purposes:",
	},
];

export default class FAQ extends Component {
	app = {
		width: 480,
		navMobileIsOpen: false,
	};
	constructor(props) {
		super(props);

		this.state = this.app;

		this.navMobileClick = this.navMobileClick.bind(this);
		//this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		//	this.handleResize();
		//window.addEventListener("resize", this.handleResize);

		//	this.handleScroll();
		//window.addEventListener("scroll", this.handleScroll);

		window.addEventListener("click", (e) => this.handleClickOutsideNav(e));
	}

	componentWillUnmount() {
		window.removeEventListener("click", (e) => this.handleClickOutsideNav(e));
	}

	navMobileClick() {
		this.app.navMobileIsOpen = !this.app.navMobileIsOpen;
		this.handleNavMobile();
	}

	handleClickOutsideNav(e) {
		if (
			this.app.navMobileIsOpen === true &&
			!e.target.classList.contains("flex_box__nav") &&
			!e.target.classList.contains("flex_box__nav__list") &&
			!e.target.classList.contains("flex_box__nav__list-link") &&
			e.target.tagName !== "DT" &&
			e.target.tagName !== "DD" &&
			e.target.tagName !== "A" &&
			e.target.tagName !== "BUTTON"
		) {
			this.app.navMobileIsOpen = false;
			this.handleNavMobile();
		}
	}

	handleNavMobile() {
		const flexNav = document.querySelector(".flex_box__nav");
		if (this.app.navMobileIsOpen) {
			flexNav.classList.add("flex_box__nav-active");
		} else {
			flexNav.classList.remove("flex_box__nav-active");
		}
	}

	//ID Move Page
	handleLinkClick = (e, selectorName) => {
		e.preventDefault();
		e.target.classList.add("on");

		const linkInactive = document.querySelectorAll(".flex_box__nav__list-link");
		const links = document.querySelectorAll(`.${selectorName}_line`);

		links.forEach((link, index) => {
			if (e.target === link.firstElementChild) {
				this.scrollIntoViewWithOffset("#" + selectorName + index, 100);
			}
		});

		linkInactive.forEach((link, index) => {
			if (e.target !== link.firstElementChild) {
				link.firstElementChild.classList.remove("on");
			}
		});
	};

	scrollIntoViewWithOffset = (selector, offset) => {
		window.scrollTo({
			behavior: "smooth",
			top:
				document.querySelector(selector).getBoundingClientRect().top -
				document.body.getBoundingClientRect().top -
				offset,
		});
	};

	render() {
		return (
			<main className="faq">
				<section className="hero">
					<div className="container hero__wrapper">
						<div className="hero__content">
							<p className="hero__name">paxform FAQS</p>
							<h1 className="hero__title">Frequently Asked Questions</h1>
							<p className="hero__description">
								We’re here to help you make the most of Paxform and reach new
								levels of efficiency
							</p>
						</div>
					</div>
					<div className="bottom_triangle bottom_triangle--white"></div>
				</section>

				<section className="flex_box">
					<div className="container flex_box__container">
						<div className="flex_box__nav">
							<dl className="flex_box__nav__list">
								<dt className="flex_box__nav__list-title">General</dt>
								{faqs.map((faq, index) => (
									<dd
										className="flex_box__nav__list-link General_line"
										key={index}
									>
										<a
											href={`#${faq.id}`}
											onClick={(e) => this.handleLinkClick(e, "General")}
										>
											{faq.title}
										</a>
									</dd>
								))}
							</dl>
							<dl className="flex_box__nav__list">
								<dt className="flex_box__nav__list-title">Privacy</dt>
								{faqs2.map((faq, i) => (
									<dd className="flex_box__nav__list-link Privacy_line" key={i}>
										<a
											href={`#${faq.id}`}
											onClick={(e) => this.handleLinkClick(e, "Privacy")}
										>
											{faq.title}
										</a>
									</dd>
								))}
							</dl>
							<button
								className="flex_box__nav-button"
								onClick={(e) => this.navMobileClick(e)}
							></button>
						</div>

						<div className="flex_box__faq">
							<h2 className="flex_box__faq-title">General</h2>
							{faqs.map((faq, index) => (
								<div className="flex_box__content" id={faq.id} key={index}>
									<h3 className="flex_box__content-title"> {faq.title}</h3>
									<div className="flex_box__content-description">
										{faq.content}
									</div>
								</div>
							))}

							<h2 className="flex_box__container-title">Privacy</h2>
							{faqs2.map((faq, index) => (
								<div className="flex_box__content" id={faq.id} key={index}>
									<h3 className="flex_box__content-title"> {faq.title}</h3>
									<div className="flex_box__content-description">
										{faq.content}
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="bottom_triangle bottom_triangle--light-blue"></div>
				</section>
			</main>
		);
	}
}

import React, { Component } from "react";
import "./FAQ.scss";

export default class FAQ extends Component {
	componentDidMount() {
		const scrollElements = document.querySelectorAll(".flex_box__content");
		const elementInView = (el, dividend = 1) => {
			const elementTop = el.getBoundingClientRect().top;
			return (
				elementTop <=
				(window.innerHeight || document.documentElement.clientHeight) / dividend
			);
		};

		const elementOutofView = (el) => {
			const elementTop = el.getBoundingClientRect().top;
			console.log("**" + el.getBoundingClientRect().top);

			return (
				elementTop >
				(window.innerHeight || document.documentElement.clientHeight)
			);
		};

		const displayScrollElement = (element) => {
			element.classList.add("on");
		};

		const hideScrollElement = (element) => {
			element.classList.remove("on");
		};

		const handleScrollAnimation = () => {
			scrollElements.forEach((el) => {
				if (elementInView(el, 1.25)) {
					displayScrollElement(el);
				} else if (elementOutofView(el)) {
					hideScrollElement(el);
				}
			});
		};
		window.addEventListener("scroll", () => {
			handleScrollAnimation();
		});
	}

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
							<dl className="flex_box__nav-list">
								<dt className="flex_box__nav-title">General</dt>
								<dd className="flex_box__nav-link">
									<a href="#General1">What is Paxform?</a>
								</dd>
								<dd className="flex_box__nav-link">
									<a href="#General2">General Point 2</a>
								</dd>
								<dd className="flex_box__nav-link">
									<a href="#General3">General Point 3</a>
								</dd>
								<dt className="flex_box__nav-title">Privacy</dt>
								<dd className="flex_box__nav-link">
									<a href="#Privacy1">Privacy Point 1</a>
								</dd>
								<dd className="flex_box__nav-link">
									<a href="#Privacy2">Privacy Point 2</a>
								</dd>
							</dl>
						</div>

						<div className="flex_box__faq">
							<h2 className="flex_box__faq-title">General</h2>
							<div className="flex_box__content" id="General1">
								<h3 className="flex_box__content-title">What is Paxform?</h3>
								<div className="flex_box__content-description">
									This Global Privacy Policy provides information on how Bynder
									handles data as a data controller, meaning all data we process
									for our own purposes. Where Bynder is a processor or a
									sub-processor of data, that activity is generally governed by
									a Data Processing Agreement.
								</div>
							</div>
							<div className="flex_box__content" id="General2">
								<h3 className="flex_box__content-title">General Point 2</h3>
								<div className="flex_box__content-description">
									We may collect Personal Data and Navigation Information from
									Users of our Products to help us provide, administer, and
									improve our Products. In order to use the Products, you will
									need to provide your full name and email address to us. To
									make changes to the permissions you give us, please visit your
									Bynder User profile.
								</div>
							</div>
							<div className="flex_box__content" id="General3">
								<h3 h3 className="flex_box__content-title">
									General Point 3
								</h3>
								<div className="flex_box__content-description">
									“Personal Data” refers to any information that can be used to
									identify you personally. For our purposes, this may include
									your (first and last) name, email address, User ID, company
									name, address, phone number and information about you that is
									publicly available online via sites like Facebook, LinkedIn,
									Twitter, and Google, data you write in a contact form, your
									project role, your uploads, your preferences and your account
									settings.
									<br />
									<br />
									“Navigation Information” refers to information about your
									computer, device, visits to the Website, and use of the
									Products. For our purposes, this includes which website you
									visited prior to visiting us or which link or campaign you
									clicked on to reach our website, your IP address, geographical
									location (city and/or country), browser type and version, ISP
									information, referral source, length of visits, pages viewed,
									language preferences and heat mapping.
									<br />
									<br />
									In some cases Navigation Information may also be Personal
									Data.
									<br />
									<br />
									Generally, we may use your Personal Data and Navigation
									Information for the following purposes:
								</div>
							</div>
							<h2 className="flex_box__container-title">Privacy</h2>
							<div className="flex_box__content" id="Privacy1">
								<h3 className="flex_box__content-title">Privacy Point 1</h3>
								<div className="flex_box__content-description">
									We may collect Personal Data and Navigation Information from
									Users of our Products to help us provide, administer, and
									improve our Products. In order to use the Products, you will
									need to provide your full name and email address to us. To
									make changes to the permissions you give us, please visit your
									Bynder User profile.
								</div>
							</div>
							<div className="flex_box__content" id="Privacy2">
								<h3 className="flex_box__content-title">General Point 2</h3>
								<div className="flex_box__content-description">
									“Personal Data” refers to any information that can be used to
									identify you personally. For our purposes, this may include
									your (first and last) name, email address, User ID, company
									name, address, phone number and information about you that is
									publicly available online via sites like Facebook, LinkedIn,
									Twitter, and Google, data you write in a contact form, your
									project role, your uploads, your preferences and your account
									settings.
									<br />
									<br />
									“Navigation Information” refers to information about your
									computer, device, visits to the Website, and use of the
									Products. For our purposes, this includes which website you
									visited prior to visiting us or which link or campaign you
									clicked on to reach our website, your IP address, geographical
									location (city and/or country), browser type and version, ISP
									information, referral source, length of visits, pages viewed,
									language preferences and heat mapping.
									<br />
									<br />
									In some cases Navigation Information may also be Personal
									Data.
									<br />
									<br />
									Generally, we may use your Personal Data and Navigation
									Information for the following purposes:
								</div>
							</div>
						</div>
					</div>

					<div className="bottom_triangle bottom_triangle--light-blue"></div>
				</section>
			</main>
		);
	}
}

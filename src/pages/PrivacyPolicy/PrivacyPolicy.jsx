/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./PrivacyPolicy.scss";

export default class GlobalPrivacyPolicy extends Component {
	app = {
		width: 480,
		navMobileIsOpen: false,
	};
	constructor(props) {
		super(props);

		this.state = this.app;

		this.navMobileClick = this.navMobileClick.bind(this);
	}

	componentDidMount() {
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
			!e.target.classList.contains("flex_box__nav__list-link") &
				(e.target.tagName !== "DT") &&
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
			<main className="global_privacy">
				<section className="hero">
					<div className="container hero__wrapper">
						<div className="hero__content">
							<h1 className="hero__title">Paxform Legal</h1>
							{/* <div className="hero__download">
								<p className="hero__download_name">
									Paxform Privacy Policy{" "}
									<span className="hero__download_name-version"> v. 1.0</span>
								</p>
								
								<a
									className="hero__download_btn"
									href={"#"}
									download={"LOGO.svg"}
								>
									Download as PDF
								</a>
							</div> */}
						</div>
					</div>
					<div className="bottom_triangle bottom_triangle--white"></div>
				</section>

				<section className="flex_box">
					<div className="container flex_box__container">
						<div className="flex_box__nav">
							<dl className="flex_box__nav__list">
								<dt className="flex_box__nav__list-title">Security</dt>
								<dd className="flex_box__nav__list-link">
									<a href={"http://"}>Privacy Security</a>
								</dd>
								<dd className="flex_box__nav__list-link">
									<a href={"http://"}>Shield</a>
								</dd>
								<dd className="flex_box__nav__list-link">
									<a href={"http://"}>Account Security</a>
								</dd>
							</dl>
							<dl className="flex_box__nav__list">
								<dt className="flex_box__nav__list-title">Services</dt>
								<dd className="flex_box__nav__list-link">
									<a href={"http://"}>Personal</a>
								</dd>
								<dd className="flex_box__nav__list-link">
									<a href={"http://"}>Business</a>
								</dd>
							</dl>
							<dl className="flex_box__nav__list">
								<dt className="flex_box__nav__list-title">Company</dt>
								<dd className="flex_box__nav__list-link">
									<a href={"http://"}>About</a>
								</dd>
								<dd className="flex_box__nav__list-link">
									<a href={"http://"}>Contact Us</a>
								</dd>
								<dd className="flex_box__nav__list-link">
									<a href={"http://"}>Pricing</a>
								</dd>
							</dl>
							<button
								className="flex_box__nav-button"
								onClick={(e) => this.navMobileClick(e)}
							></button>
						</div>

						<div className="flex_box__gp">
							<div className="flex_box__content">
								<h3 className="flex_box__content-subject">Privacy Policy</h3>
								<div className="flex_box__content__download">
									<p className="flex_box__content__download-name">
										Paxform Privacy Policy
										<span className="hero__download-names-version">
											{" "}
											v. 1.0
										</span>
									</p>

									<a
										className="flex_box__content__download-btn"
										href={"#"}
										download={"LOGO.svg"}
									>
										Download as PDF
									</a>
								</div>
								(“Products”) care about how their information is collected,
								used, processed, transferred, stored, and shared. This Global
								Privacy Policy describes Bynder’s commitment to protecting your
								privacy. It forms a part of our{" "}
								<strong className="flex_box__content-highlight">
									Website Terms of Use, Trial Terms of Use, and Standard Terms
									of Service
								</strong>
								, and all other documents incorporated therein (“Terms”). Any
								capitalized terms not defined in this Global Privacy Policy are
								defined as set out in the Terms.
								<br />
								<br />
								Please familiarize yourself with this Global Privacy Policy.
								This Global Privacy Policy is formally reviewed annually and is
								updated as often as necessary. Updates will be posted publicly
								on the Website. If we make substantive changes to the purposes
								and policies set out here, we will update this page and we will
								inform Product Users by email or in-application notification.
								<br />
								<br />
								This Global Privacy Policy provides information on how Bynder
								handles data as a data controller, meaning all data we process
								for our own purposes. Where Bynder is a processor or a
								sub-processor of data, that activity is generally governed by a
								Data Processing Agreement.
								<br />
								<br />
								This Global Privacy Policy provides information on how Bynder
								handles data as a data controller, meaning all data we process
								for our own purposes. Where Bynder is a processor or a
								sub-processor of data, that activity is generally governed by a
								Data Processing Agreement.
							</div>
							<h3 className="flex_box__content-title">
								1. What We Collect and How We Use It
							</h3>

							<h4 className="flex_box__content-sub"> 1.1 website</h4>
							<div className="flex_box__content-description">
								This Global Privacy Policy provides information on how Bynder
								handles data as a data controller, meaning all data we process
								for our own purposes. Where Bynder is a processor or a
								sub-processor of data, that activity is generally governed by a
								Data Processing Agreement.
							</div>

							<h3 className="flex_box__content-title">
								2. Personal Data Retention and Security
							</h3>

							<h4 className="flex_box__content-sub">
								2.1 Retention of Personal Data
							</h4>
							<div className="flex_box__content-description">
								Data security is a matter of critical importance. Bynder uses a
								wide range of security measures to safeguard your data against
								unauthorized access and disclosure and we continually evaluate
								our security program to ensure its effectiveness. Amazon Web
								Services provides our servers and maintains them in
								high-security controlled environments pursuant to the
								<strong className="flex_box__content-highlight">
									&nbsp;AWS Cloud
								</strong>
							</div>

							<h3 className="flex_box__content-title">
								3. Your Data and Your Rights
							</h3>
							<h4 className="flex_box__content-sub">
								2.1 Retention of Personal Data
							</h4>
							<div className="flex_box__content-description">
								As a general matter, depending on local data protection laws,
								you have rights that may include: <br />
								<br />
								<ul>
									<li>
										Clear information on our processing of your Personal Data;
									</li>
									<li>
										Access your Personal Data that we hold, together with the
										right to have inaccuracies corrected;
									</li>
									<li>
										To have your Personal Data delivered to you in a standard
										electronic format;
									</li>
									<li>
										To object to our processing of your Personal Data, and to
										prevent solely automated decision making or profiling; and
									</li>
									<li>
										To restrict our processing of your Personal Data, or have
										your Personal Data deleted.
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="bottom_triangle bottom_triangle--light-blue"></div>
				</section>
			</main>
		);
	}
}

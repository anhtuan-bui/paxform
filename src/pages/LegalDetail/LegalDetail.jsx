import React, { Component } from "react";
import "./LegalDetail.scss";
import GetStarted from "../../components/GetStarted/GetStarted";

import intro from "../../assets/images/legal-policy-detail.jpg";
import icon1 from "../../assets/images/icon-security-policy-feature01.svg";
import icon2 from "../../assets/images/icon-security-policy-feature02.svg";
import icon3 from "../../assets/images/icon-security-policy-feature03.svg";
import icon4 from "../../assets/images/icon-security-policy-feature04.svg";

const features = [
	{
		title: "Safeguarding your data",
		description:
			"From the very first brainstorming stages to launch, security is an integral aspect of every step in our development processes.",
		img: icon1,
	},
	{
		title: "Secure anywhere anytime",
		description:
			"From the very first brainstorming stages to launch, security is an integral aspect of every step in our development processes.",
		img: icon2,
	},
	{
		title: "Network protection",
		description:
			"From the very first brainstorming stages to launch, security is an integral aspect of every step in our development processes.",
		img: icon3,
	},
	{
		title: "Back-ups",
		description:
			"From the very first brainstorming stages to launch, security is an integral aspect of every step in our development processes.",
		img: icon4,
	},
];

export default class SecurityPolicy extends Component {
	render() {
		return (
			<main className="legal_detail">
				<section className="hero">
					<div className="container hero__wrapper">
						<div className="hero__content">
							<h1 className="hero__title">Paxform Legal</h1>
						</div>
					</div>
					<div className="bottom_triangle bottom_triangle--light-blue"></div>
				</section>
				<section className="security_introduction">
					<div className="container">
						<div className="grid_box">
							<div className="grid_box__image">
								<img src={intro} alt="Security policy" />
								<span className="grid_box__image-parall scroll-effect"></span>
								<span className="grid_box__image-parall scroll-effect"></span>
							</div>
							<div className="grid_box__content">
								<h2>Data Security</h2>
								<p className="grid_box__content-name">Security Policy</p>
								<h3 className="grid_box__content-title">
									Only You Can Access Your Data. Not Us - Not Anyone Else.
								</h3>
								<div className="grid_box__content-description">
									Paxform will never share your data with anyone. What’s more,
									no one at Paxform can view or access your information. Our
									mission is to apply end-toend encryption to every piece of
									information stored, protecting the data of organizations and
									individuals at all stages and at all costs.
									<br />
									<br /> Only you decide which parties can view what piece of
									information. Our security architecture ensures that personal
									data is decentralized, guaranteeing that the point of access
									in a potential security threat will not reveal any
									information.
								</div>
							</div>
						</div>
					</div>
					<div className="bottom_triangle bottom_triangle--white"></div>
				</section>
				<section className="security_features">
					<div className="container">
						<div className="grid_box">
							<p className="grid_box-name">Our Vision</p>
							<h2 className="grid_box-title">Forms without forms.</h2>
							<div className="grid_box__list">
								{features.map((feature, index) => (
									<li className="grid_box__list__content" key={index}>
										<i className="grid_box__list__content-image">
											<img src={feature.img} alt={feature.title} />
										</i>
										<h3 className="grid_box__list__content-title">
											{feature.title}
										</h3>
										<p className="grid_box__list__content-description">
											{feature.description}
										</p>
									</li>
								))}
							</div>
						</div>
					</div>
					<div className="bottom_triangle bottom_triangle--light-blue"></div>
				</section>

				<GetStarted />
			</main>
		);
	}
}

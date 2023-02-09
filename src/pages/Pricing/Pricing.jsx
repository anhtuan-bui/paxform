import React, { Component } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "./Pricing.scss";
import ReadyGet from "../../components/ReadyGet/ReadyGet";
import FrequentlyAsk from "../../components/FrequentlyAsk/FrequentlyAsk";
import Button from "../../components/Button/Button";

import { ReactComponent as Tick } from "../../assets/images/icon-tick.svg";
import { ReactComponent as Eks } from "../../assets/images/icon-none.svg";
import features from "../../assets/images/icon-pricing-premium.svg";
import { SCREEN_SIZE } from "../../configurations/configurations";

const credits = [
	{
		cost: "$19.90",
		point: "500",
		descriptions: "Additional Submissions",
	},
	{
		cost: "$99.90",
		point: "3,000",
		descriptions: "Additional Submissions",
	},
	{
		cost: "$299.90",
		point: "10,000",
		descriptions: "Additional Submissions",
	},
];

// const comparePlans = [
// 	{
// 		features: [
// 			"Pricing per Admin/month",
// 			"Number of Admins",
// 			"Published Forms",
// 			"Form template",
// 			"Agreement Templates",
// 			"Survey(monthly)",
// 			"Monthly Submissions",
// 			"Storage Space Available",
// 		],
// 	},
// 	{ securities: "End-to-End Encryption" },
// 	{
// 		supports: [
// 			"Generic PDF",
// 			"Max Questions per Form",
// 			"Conditional Questions",
// 			"Electronic Signatures",
// 			"Attachments(in forms)",
// 			"Workflow support",
// 		],
// 	},
// ];
export default class Pricing extends Component {
	personal = {
		pricing: [
			{
				title: "Free",
				description: "A simple way to get started for you new to passfolio.",
				cost: "$0",
				period: "/forever",
				features: [
					"1.Unlimited data",
					"5 Person saved",
					"A simple way for you new started to Passfolio.",
					"A simple way for you new started to Passfolio.",
				],
				compares: {
					features: ["$29.90", "1(max 4)", "3", "10", "2", "1", "500", "10GB"],
					securities: [<Tick />],
					supports: [<Tick />, "40", <Tick />, <Tick />, <Eks />, <Eks />],
				},
			},
			{
				title: "Premium",
				description: "Best for freelance coders & designers who need",
				cost: "$50",
				period: "/forever",
				features: [
					"2.Unlimited data",
					"5 Person saved",
					"A simple way for you new started to Passfolio.",
					"A simple way for you new started to Passfolio.",
				],

				compares: {
					features: [
						"$39.90",
						"5(max 9)",
						"30",
						"50",
						"10",
						"3",
						"3,000",
						"100GB",
					],
					securities: [<Tick />],
					supports: [
						<Tick />,
						"Unlimited",
						<Tick />,
						<Tick />,
						<Tick />,
						<Tick />,
					],
				},
			},
			{
				title: "Family",
				description: "Best for freelance coders & designers who need",
				cost: "Custom",
				period: "",
				features: [
					"3. Unlimited data",
					"5 Person saved",
					"A simple way for you new started to Passfolio.",
					"A simple way for you new started to Passfolio.",
				],
				compares: {
					features: ["$49.90", "30", "100", "200", "20", "10", "10,000", "1TB"],
					securities: [<Tick />],
					supports: [
						<Tick />,
						"Unlimited",
						<Tick />,
						<Tick />,
						<Tick />,
						<Tick />,
					],
				},
			},
		],
	};
	business = {
		pricing: [
			{
				title: "Essential",
				description: "A simple way to get started for you new to passfolio.",
				cost: "$29.90",
				period: "/month",
				features: [
					"Unlimited data",
					"5 Person saved",
					"A simple way for you new started to Passfolio.",
					"A simple way for you new started to Passfolio.",
				],
				compares: {
					features: ["$29.90", "1(max 4)", "3", "10", "2", "1", "500", "10GB"],
					securities: [<Tick />],
					supports: [<Tick />, "40", <Tick />, <Tick />, <Eks />, <Eks />],
				},
			},
			{
				title: "Standard",
				description: "Best for freelance coders & designers who need",
				cost: "$39.90",
				period: "/month",
				features: [
					"Unlimited data",
					"5 Person saved",
					"A simple way for you new started to Passfolio.",
					"A simple way for you new started to Passfolio.",
				],
				compares: {
					features: ["$49.90", "30", "100", "200", "20", "10", "10,000", "1TB"],
					securities: [<Tick />],
					supports: [
						<Tick />,
						"Unlimited",
						<Tick />,
						<Tick />,
						<Tick />,
						<Tick />,
					],
				},
			},
			{
				title: "Plus",
				description: "Best for freelance coders & designers who need",
				cost: "$49.90",
				period: "/month",
				features: [
					"Unlimited data",
					"5 Person saved",
					"A simple way for you new started to Passfolio.",
					"A simple way for you new started to Passfolio.",
				],
				compares: {
					features: ["$49.90", "30", "100", "200", "20", "10", "10,000", "1TB"],
					securities: [<Tick />],
					supports: [
						<Tick />,
						"Unlimited",
						<Tick />,
						<Tick />,
						<Tick />,
						<Tick />,
					],
				},
			},
		],
	};

	swiperAttribute = {
		slidesPerView: 3,
		center: false,
		gap: 32,
		grasp: false,
	};

	constructor(props) {
		super(props);
		this.state = {
			tap: this.personal,
			swiper: this.swiperAttribute,
		};
		this.onBusinessBtnClick = this.onBusinessBtnClick.bind(this);
		this.onPersonalBtnClick = this.onPersonalBtnClick.bind(this);
		this.resizeHandler = this.resizeHandler.bind(this);
	}

	componentDidMount() {
		this.resizeHandler();
		window.addEventListener("resize", this.resizeHandler);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.resizeHandler);
	}

	resizeHandler() {
		if (window.innerWidth < SCREEN_SIZE.large) {
			this.swiperAttribute = {
				slidesPerView: 2,
				center: true,
				gap: 28,
				grasp: true,
			};

			this.setState(this.swiperAttribute);
		} else {
			this.swiperAttribute = {
				slidesPerView: 3,
				center: false,
				gap: 32,
				grasp: true,
			};

			this.setState(this.swiperAttribute);
		}
	}

	onPersonalBtnClick = () => {
		// get hero class
		const main = document.querySelector(".pricing");
		const tap = document.querySelector(".hero__top__tabs");
		// add class hero--business to hero
		if (main.classList.contains("pricing--business")) {
			main.classList.remove("pricing--business");
		}
		this.setState({ tap: this.personal });

		tap.classList.add("personal");
		if (tap.classList.contains("business")) {
			tap.classList.remove("business");
		}
	};

	onBusinessBtnClick = () => {
		// get hero class
		const main = document.querySelector(".pricing");
		const tap = document.querySelector(".hero__top__tabs");
		// add class hero--business to hero
		main.classList.add("pricing--business");
		this.setState({ tap: this.business });

		tap.classList.add("business");
		if (tap.classList.contains("personal")) {
			tap.classList.remove("personal");
		}
	};

	render() {
		return (
			<main className="pricing">
				<section className="hero">
					<div className="container">
						<div className="hero__wrapper">
							<div className="hero__top">
								<p className="hero__top-name">Pricing</p>
								<h1 className="hero__top-title">
									Choose a Plan That's Right for You
								</h1>
								<div className="hero__top__tabs personal">
									<a
										className="hero__top__tabs-personal"
										href="#personal"
										onClick={this.onPersonalBtnClick}
									>
										personal
									</a>
									<a
										className="hero__top__tabs-business"
										href="#business"
										onClick={this.onBusinessBtnClick}
									>
										business
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="bottom_triangle bottom_triangle--white"></div>
				</section>
				<section className="plans">
					<div className="container">
						<ul className="plans__ul">
							{this.state.tap.pricing.map((price, index) => (
								<li className={`plans__ul__list list${index + 1}`} key={index}>
									<div className="plans__ul__list__inner">
										<i className="plans__ul__list-icon">flags</i>
										<h2 className="plans__ul__list-name">{price.title}</h2>
										<p className="plans__ul__list-description">
											{price.description}
										</p>
										<strong className="plans__ul__list-cost">
											{price.cost}
											<span>{price.period}</span>
										</strong>
										<Button
											text="Get started"
											type="arrow outline"
											color="green"
										/>
										<strong className="plans__ul__list-inc">
											What's Included
										</strong>
										<ul className="plans__ul__list-benefits">
											{price.features.map((feature, index) => (
												<li key={index}>{feature}</li>
											))}
										</ul>
									</div>
								</li>
							))}
						</ul>
					</div>
				</section>
				<section className="data_credit">
					<div className="container">
						<p className="data_credit-name">Data Credit</p>
						<h1 className="data_credit-title">
							Data Credits can be purchased in blocks.
						</h1>
						<ul className="data_credit__cards">
							{credits.map((credit, index) => (
								<li
									className={`data_credit__cards__list list${index + 1}`}
									key={index}
								>
									<span className="data_credit__cards__list-cost">
										{credit.cost}
									</span>
									<strong className="data_credit__cards__list-point">
										{credit.point}
									</strong>
									<em className="data_credit__cards__list-text">
										{credit.descriptions}
									</em>
								</li>
							))}
						</ul>
					</div>
				</section>
				<section className="compare">
					<div className="container">
						<h1 className="compare-title">Compare Plans</h1>
						<div className="compare__wrapper">
							<div className="compare__plans">
								<div className="compare__plans__list features">
									<dl className="compare__plans__list__info">
										<dt className="compare__plans__list-title top">Features</dt>

										<dd className="compare__plans__list-text">
											Pricing per Admin/month
										</dd>
										<dd className="compare__plans__list-text">
											Number of Admins
										</dd>
										<dd className="compare__plans__list-text">
											Published Forms
										</dd>
										<dd className="compare__plans__list-text">Form template</dd>
										<dd className="compare__plans__list-text">
											Agreement Templates
										</dd>
										<dd className="compare__plans__list-text">
											Survey(monthly)
										</dd>
										<dd className="compare__plans__list-text">
											Monthly Submissions
										</dd>
										<dd className="compare__plans__list-text">
											Storage Space Available
										</dd>

										<dt className="compare__plans__list-title">Security</dt>
										<dd className="compare__plans__list-text">
											End-to-End-Encryption
										</dd>

										<dt className="compare__plans__list-title">Support</dt>

										<dd className="compare__plans__list-text">Generic PDF</dd>
										<dd className="compare__plans__list-text">
											Max Questions per Form
										</dd>
										<dd className="compare__plans__list-text">
											Conditional Questions
										</dd>
										<dd className="compare__plans__list-text">
											Electronic Signatures
										</dd>
										<dd className="compare__plans__list-text">
											Attachment (in forms)
										</dd>
										<dd className="compare__plans__list-text">
											Workflow support
										</dd>
									</dl>
								</div>
								<Swiper
									slidesPerView={this.swiperAttribute.slidesPerView}
									spaceBetween={this.swiperAttribute.gap}
									initialSlide={1}
									centeredSlides={this.swiperAttribute.center}
									grabCursor={this.swiperAttribute.grasp}
									centeredSlidesBounds={true}
								>
									{this.state.tap.pricing.map((price, index) => (
										<SwiperSlide key={index}>
											<div className={`compare__plans__list list${index + 1}`}>
												<dl className="compare__plans__list__info">
													<dt className="compare__plans__list-title top">
														<strong className="compare__plans__list-title-name">
															{price.title}
														</strong>
														<span className="compare__plans__list-title-cost">
															{price.cost}
															<em>{price.period}</em>
														</span>
														<Button
															text="Get started"
															type={`arrow ${
																index === 1 ? "flat-green" : "outline"
															}`}
															color={`${index === 1 ? "white" : "green"}`}
														/>
													</dt>
													{price.compares.features.map((feature, index) => (
														<dd
															className="compare__plans__list-text"
															key={index}
														>
															{feature}
														</dd>
													))}
													<dt className="compare__plans__list-title">&nbsp;</dt>
													{price.compares.securities.map((security, index) => (
														<dd
															className="compare__plans__list-text"
															key={index}
														>
															{security}
														</dd>
													))}
													<dt className="compare__plans__list-title">&nbsp;</dt>
													{price.compares.supports.map((support, index) => (
														<dd
															className="compare__plans__list-text"
															key={index}
														>
															{support}
														</dd>
													))}
												</dl>
											</div>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						</div>
					</div>
					<div className="bottom_triangle"></div>
				</section>
				<section className="mobile_compare">
					<div className="container">
						<h1 className="mobile_compare-title">Compare Plans</h1>
						<table className="mobile_compare__tbl">
							<thead>
								<tr>
									<th>{this.state.tap.pricing[0].title}</th>
									<th>{this.state.tap.pricing[1].title}</th>
									<th>{this.state.tap.pricing[2].title}</th>
								</tr>
								<tr>
									<th>
										<strong>{this.state.tap.pricing[0].cost}</strong>
										<em>{this.state.tap.pricing[0].period}</em>
									</th>
									<th>
										<strong>{this.state.tap.pricing[1].cost}</strong>
										<em>{this.state.tap.pricing[1].period}</em>
									</th>
									<th>
										<strong>{this.state.tap.pricing[2].cost}</strong>
										<em>{this.state.tap.pricing[2].period}</em>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th colSpan="3">Features</th>
								</tr>
								<tr>
									<td colSpan="3">
										<img src={features} alt="feature icon" />
										&nbsp;Price per Admin/month
									</td>
								</tr>
								<tr>
									<td>$29.90</td>
									<td>$39.90</td>
									<td>$49.90</td>
								</tr>
								<tr className="grey">
									<td colSpan="3">
										<img src={features} alt="feature icon" />
										&nbsp;Number of Admins
									</td>
								</tr>
								<tr className="grey">
									<td>3</td>
									<td>30</td>
									<td>100</td>
								</tr>
								<tr>
									<td colSpan="3">
										<img src={features} alt="feature icon" />
										&nbsp;Published Forms
									</td>
								</tr>
								<tr>
									<td>$29.90</td>
									<td>$39.90</td>
									<td>$49.90</td>
								</tr>
								<tr className="grey">
									<td colSpan="3">
										<img src={features} alt="feature icon" />
										&nbsp;Form Templates
									</td>
								</tr>
								<tr className="grey">
									<td>10</td>
									<td>50</td>
									<td>200</td>
								</tr>
								<tr>
									<td colSpan="3">
										<img src={features} alt="feature icon" />
										&nbsp;Agreement Templates
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td>10</td>
									<td>20</td>
								</tr>
								<tr className="grey">
									<td colSpan="3">
										<img src={features} alt="feature icon" />
										&nbsp;Survey(monthly)
									</td>
								</tr>
								<tr className="grey">
									<td>1</td>
									<td>3</td>
									<td>10</td>
								</tr>
								<tr>
									<td colSpan="3">
										<img src={features} alt="feature icon" />
										&nbsp;Monthly submissions
									</td>
								</tr>
								<tr>
									<td>500</td>
									<td>3,000</td>
									<td>10,000</td>
								</tr>
								<tr className="grey">
									<td colSpan="3">
										<img src={features} alt="feature icon" />
										&nbsp;Storage Space Available
									</td>
								</tr>
								<tr className="grey">
									<td>10GB</td>
									<td>100GB</td>
									<td>1TB</td>
								</tr>
								<tr>
									<th colSpan="3">Security</th>
								</tr>
								<tr className="grey">
									<td colSpan="3">
										<img src={features} alt="feature icon" />
										&nbsp;End-to-End Encryption
									</td>
								</tr>
								<tr className="grey">
									<td>
										<Tick />
									</td>
									<td>
										<Tick />
									</td>
									<td>
										<Tick />
									</td>
								</tr>
								<tr>
									<th colSpan="3">Support</th>
								</tr>
								<tr>
									<td colSpan="3">
										<img src={features} alt="feature icon" />
										&nbsp;Generic PDF
									</td>
								</tr>
								<tr>
									<td>
										<Tick />
									</td>
									<td>
										<Tick />
									</td>
									<td>
										<Tick />
									</td>
								</tr>
								<tr className="grey">
									<td colSpan="3">
										<img src={features} alt="feature icon" />
										&nbsp;Max Questions per Form
									</td>
								</tr>
								<tr className="grey">
									<td>40</td>
									<td>Unlimited</td>
									<td>Unlimited</td>
								</tr>
								<tr>
									<td colSpan="3">
										<img src={features} alt="feature icon" />
										&nbsp;Conditional Questions
									</td>
								</tr>
								<tr>
									<td>
										<Tick />
									</td>
									<td>
										<Tick />
									</td>
									<td>
										<Tick />
									</td>
								</tr>
								<tr className="grey">
									<td colSpan="3">
										<img src={features} alt="feature icon" />
										&nbsp;Electronic Signatures
									</td>
								</tr>
								<tr className="grey">
									<td>
										<Tick />
									</td>
									<td>
										<Tick />
									</td>
									<td>
										<Tick />
									</td>
								</tr>
								<tr>
									<td colSpan="3">
										<img src={features} alt="feature icon" />
										&nbsp;Attachments (in forms)
									</td>
								</tr>
								<tr>
									<td>
										<Eks />
									</td>
									<td>
										<Tick />
									</td>
									<td>
										<Tick />
									</td>
								</tr>
								<tr className="grey">
									<td colSpan="3">
										<img src={features} alt="feature icon" />
										&nbsp;Workflow support
									</td>
								</tr>
								<tr className="grey">
									<td>
										<Eks />
									</td>
									<td>
										<Tick />
									</td>
									<td>
										<Tick />
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="bottom_triangle"></div>
				</section>
				<FrequentlyAsk />
				<ReadyGet />
			</main>
		);
	}
}

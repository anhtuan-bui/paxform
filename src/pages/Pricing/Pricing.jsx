import React, { Component } from "react";
import "./Pricing.scss";
import ReadyGet from "../../components/ReadyGet/ReadyGet";
import FrequentlyAsk from "../../components/FrequentlyAsk/FrequentlyAsk";
import Button from "../../components/Button/Button";

import tick from "../../assets/images/icon-tick.svg";
import none from "../../assets/images/icon-none.svg";
import features from "../../assets/images/icon-pricing-premium.svg";

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
			},
		],
		compares: [
			{
				features: [
					"Pricing par Admin/month",
					"Number of Admins",
					"Published Forms",
					"Form template",
					"Agreement Templates",
					"Survey(monthly)",
					"Monthly Submissions",
					"Storage Space Available",
				],
			},
			{ securities: ["End-to-End Encryption"] },
			{
				supports: [
					"Generic PDF",
					"Max Questions per Form",
					"Conditional Questions",
					"Electronic Signatures",
					"Attachments(in forms)",
					"Workflow support",
				],
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
			},
		],
		compares: [
			{
				features: [
					"1 Pricing par Admin/month",
					"1 Number of Admins",
					"1 Published Forms",
					"1 Form template",
					"1 Agreement Templates",
					"1 Survey(monthly)",
					"1 Monthly Submissions",
					"1 Storage Space Available",
				],
			},
			{ securities: "1 End-to-End Encryption" },
			{
				supports: [
					"1 Generic PDF",
					"1 Max Questions per Form",
					"1 Conditional Questions",
					"1 Electronic Signatures",
					"1 Attachments(in forms)",
					"1 Workflow support",
				],
			},
		],
	};

	constructor(props) {
		super(props);
		this.state = {
			tap: this.personal,
		};
		this.onBusinessBtnClick = this.onBusinessBtnClick.bind(this);
		this.onPersonalBtnClick = this.onPersonalBtnClick.bind(this);
	}

	componentDidMount() {
		console.log(this.state.tap.compares[2]);
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
							<li className="plans__ul__list list1">
								<div className="plans__ul__list__inner">
									<i className="plans__ul__list-icon">flags</i>
									<h2 className="plans__ul__list-name">
										{this.state.tap.pricing[0].title}
									</h2>
									<p className="plans__ul__list-description">
										{this.state.tap.pricing[0].description}
									</p>
									<strong className="plans__ul__list-cost">
										{this.state.tap.pricing[0].cost}
										<span>{this.state.tap.pricing[0].period}</span>
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
										<li>Unlimited data</li>
										<li>5 Person saved</li>
										<li>
											A Simple way to get started for you new to Passfolio
										</li>
									</ul>
								</div>
							</li>
							<li className="plans__ul__list list2">
								<div className="plans__ul__list__inner">
									<em className="plans__ul__list-text">Most Popular</em>
									<i className="plans__ul__list-icon">Star</i>
									<h2 className="plans__ul__list-name">
										{this.state.tap.pricing[1].title}
									</h2>
									<p className="plans__ul__list-description">
										{this.state.tap.pricing[1].description}
									</p>
									<strong className="plans__ul__list-cost">
										{this.state.tap.pricing[1].cost}
										<span>{this.state.tap.pricing[1].period}</span>
									</strong>
									<Button
										text="Get Started"
										type="flat-green arrow"
										color="white"
									/>
									<strong className="plans__ul__list-inc">
										What's Included
									</strong>
									<ul className="plans__ul__list-benefits">
										{this.state.tap.pricing[1].features.map(
											(feature, index) => {
												return <li key={index}>{feature}</li>;
											}
										)}
									</ul>
								</div>
							</li>
							<li className="plans__ul__list list3">
								<div className="plans__ul__list__inner">
									<i className="plans__ul__list-icon">Family</i>
									<h2 className="plans__ul__list-name">
										{this.state.tap.pricing[2].title}
									</h2>
									<p className="plans__ul__list-description">
										{this.state.tap.pricing[2].description}
									</p>
									<strong className="plans__ul__list-cost">
										{this.state.tap.pricing[2].cost}
										<span>{this.state.tap.pricing[2].period}</span>
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
										<li>Unlimited data</li>
										<li>5 Person saved</li>
										<li>
											A Simple way to get started for you new to Passfolio
										</li>
										<li>
											A Simple way to get started for you new to Passfolio
										</li>
									</ul>
								</div>
							</li>
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
							<li className="data_credit__cards__list one">
								<span className="data_credit__cards__list-cost">$19.90</span>
								<strong className="data_credit__cards__list-point">500</strong>
								<em className="data_credit__cards__list-text">
									Additional Submissions
								</em>
							</li>
							<li className="data_credit__cards__list two">
								<span className="data_credit__cards__list-cost">$99.90</span>
								<strong className="data_credit__cards__list-point">
									3,000
								</strong>
								<em className="data_credit__cards__list-text">
									Additional Submissions
								</em>
							</li>
							<li className="data_credit__cards__list three">
								<span className="data_credit__cards__list-cost">$299.90</span>
								<strong className="data_credit__cards__list-point">
									10,000
								</strong>
								<em className="data_credit__cards__list-text">
									Additional Submissions
								</em>
							</li>
						</ul>
					</div>
				</section>
				<section className="compare">
					<div className="container">
						<h1 className="compare-title">Compare Plans</h1>
						<div className="compare__wrapper">
							<ul className="compare__plans">
								<li className="compare__plans__list features">
									<dl className="compare__plans__list__info">
										<dt className="compare__plans__list-title top">Features</dt>

										{/* {this.state.tap.compares[0].features.map(
											(feature, index) => {
												return (
													<dd className="compare__plans__list-text" key={index}>
														{feature}
													</dd>
												);
											}
										)} */}
										<dd className="compare__plans__list-text">
											Pricing par Admin/month
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

										{/* {this.state.tap.compares[0].supports.map(
											(support, index) => {
												return (
													<dd className="compare__plans__list-text" key={index}>
														{support}
													</dd>
												);
											}
										)} */}

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
								</li>
								<li className="compare__plans__list free">
									<dl className="compare__plans__list__info">
										<dt className="compare__plans__list-title top">
											<strong className="compare__plans__list-title-name">
												{this.state.tap.pricing[0].title}
											</strong>
											<span className="compare__plans__list-title-cost">
												{this.state.tap.pricing[0].cost}{" "}
												<em>{this.state.tap.pricing[0].period}</em>
											</span>
											<Button
												text="Get started"
												type="arrow outline"
												color="green"
											/>
										</dt>
										<dd className="compare__plans__list-text">$29.90</dd>
										<dd className="compare__plans__list-text">1 (max 4)</dd>
										<dd className="compare__plans__list-text">3</dd>
										<dd className="compare__plans__list-text">10</dd>
										<dd className="compare__plans__list-text">2</dd>
										<dd className="compare__plans__list-text">1</dd>
										<dd className="compare__plans__list-text">500</dd>
										<dd className="compare__plans__list-text">10GB</dd>
										<dt className="compare__plans__list-title">&nbsp;</dt>
										<dd className="compare__plans__list-text">
											<img src={tick} alt="Provide" />
										</dd>
										<dt className="compare__plans__list-title">&nbsp;</dt>
										<dd className="compare__plans__list-text">
											<img src={tick} alt="Provide" />
										</dd>
										<dd className="compare__plans__list-text">40</dd>
										<dd className="compare__plans__list-text">
											<img src={tick} alt="Provide" />
										</dd>
										<dd className="compare__plans__list-text">
											<img src={tick} alt="Provide" />
										</dd>
										<dd className="compare__plans__list-text">
											<img src={none} alt="Non-Provide" />
										</dd>
										<dd className="compare__plans__list-text">
											<img src={none} alt="Non-Provide" />
										</dd>
									</dl>
								</li>
								<li className="compare__plans__list premium">
									<dl className="compare__plans__list__info">
										<dt className="compare__plans__list-title top">
											<strong className="compare__plans__list-title-name">
												{this.state.tap.pricing[1].title}
											</strong>
											<span className="compare__plans__list-title-cost">
												{this.state.tap.pricing[1].cost}{" "}
												<em>{this.state.tap.pricing[1].period}</em>
											</span>
											<Button
												text="Get started"
												type="flat-green arrow"
												color="white"
											/>
										</dt>
										<dd className="compare__plans__list-text">$39.90</dd>
										<dd className="compare__plans__list-text">5 (max 9)</dd>
										<dd className="compare__plans__list-text">30</dd>
										<dd className="compare__plans__list-text">50</dd>
										<dd className="compare__plans__list-text">10</dd>
										<dd className="compare__plans__list-text">3</dd>
										<dd className="compare__plans__list-text">3,000</dd>
										<dd className="compare__plans__list-text">100GB</dd>
										<dt className="compare__plans__list-title">&nbsp;</dt>
										<dd className="compare__plans__list-text">
											<img src={tick} alt="Provide" />
										</dd>
										<dt className="compare__plans__list-title">&nbsp;</dt>
										<dd className="compare__plans__list-text">
											<img src={tick} alt="Provide" />
										</dd>
										<dd className="compare__plans__list-text">Unlimited</dd>
										<dd className="compare__plans__list-text">
											<img src={tick} alt="Provide" />
										</dd>
										<dd className="compare__plans__list-text">
											<img src={tick} alt="Provide" />
										</dd>
										<dd className="compare__plans__list-text">
											<img src={tick} alt="Provide" />
										</dd>
										<dd className="compare__plans__list-text">
											<img src={tick} alt="Provide" />
										</dd>
									</dl>
								</li>
								<li className="compare__plans__list family">
									<dl className="compare__plans__list__info">
										<dt className="compare__plans__list-title top">
											<strong className="compare__plans__list-title-name">
												{this.state.tap.pricing[2].title}
											</strong>
											<span className="compare__plans__list-title-cost">
												{this.state.tap.pricing[2].cost}{" "}
												<em>{this.state.tap.pricing[2].period}</em>
											</span>
											<Button
												text="Get started"
												type="arrow outline"
												color="green"
											/>
										</dt>
										<dd className="compare__plans__list-text">$49.90</dd>
										<dd className="compare__plans__list-text">30</dd>
										<dd className="compare__plans__list-text">100</dd>
										<dd className="compare__plans__list-text">200</dd>
										<dd className="compare__plans__list-text">20</dd>
										<dd className="compare__plans__list-text">10</dd>
										<dd className="compare__plans__list-text">10,000</dd>
										<dd className="compare__plans__list-text">1TB</dd>
										<dt className="compare__plans__list-title">&nbsp;</dt>
										<dd className="compare__plans__list-text">
											<img src={tick} alt="Provide" />
										</dd>
										<dt className="compare__plans__list-title">&nbsp;</dt>
										<dd className="compare__plans__list-text">
											<img src={tick} alt="Provide" />
										</dd>
										<dd className="compare__plans__list-text">Unlimited</dd>
										<dd className="compare__plans__list-text">
											<img src={tick} alt="Provide" />
										</dd>
										<dd className="compare__plans__list-text">
											<img src={tick} alt="Provide" />
										</dd>
										<dd className="compare__plans__list-text">
											<img src={tick} alt="Provide" />
										</dd>
										<dd className="compare__plans__list-text">
											<img src={tick} alt="Provide" />
										</dd>
									</dl>
								</li>
							</ul>
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
									<th>Free</th>
									<th>Premium</th>
									<th>Family</th>
								</tr>
								<tr>
									<th>
										<strong>$0</strong>
										<em>/forever</em>
									</th>
									<th>
										<strong>$50</strong>
										<em>/forever</em>
									</th>
									<th>Custom</th>
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
										<img src={tick} alt="Provide" />
									</td>
									<td>
										<img src={tick} alt="Provide" />
									</td>
									<td>
										<img src={tick} alt="Provide" />
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
										<img src={tick} alt="Provide" />
									</td>
									<td>
										<img src={tick} alt="Provide" />
									</td>
									<td>
										<img src={tick} alt="Provide" />
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
										<img src={tick} alt="Provide" />
									</td>
									<td>
										<img src={tick} alt="Provide" />
									</td>
									<td>
										<img src={tick} alt="Provide" />
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
										<img src={tick} alt="Provide" />
									</td>
									<td>
										<img src={tick} alt="Provide" />
									</td>
									<td>
										<img src={tick} alt="Provide" />
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
										<img src={none} alt="Non-Provide" />
									</td>
									<td>
										<img src={tick} alt="Provide" />
									</td>
									<td>
										<img src={tick} alt="Provide" />
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
										<img src={none} alt="Non-Provide" />
									</td>
									<td>
										<img src={tick} alt="Provide" />
									</td>
									<td>
										<img src={tick} alt="Provide" />
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

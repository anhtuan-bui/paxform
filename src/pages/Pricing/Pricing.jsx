import React, { Component } from "react";
import "./Pricing.scss";
import ReadyGet from "../../components/ReadyGet/ReadyGet";
import Button from "../../components/Button/Button";

export default class Pricing extends Component {
	render() {
		return (
			<main className="pricing">
				<section className="hero" background="light">
					<div className="container">
						<div className="hero__wrapper">
							<div className="hero__top">
								<p className="hero__top-name">Pricing</p>
								<h1 className="hero__top-title">
									Choose a Plan That's Right for You
								</h1>
								<div className="hero__top__tabs">
									<a className="hero__top__tabs-personal" href="#">
										personal
									</a>
									<a className="hero__top__tabs-business" href="#">
										business
									</a>
								</div>
							</div>
							<ul className="hero__plans">
								<li className="hero__plans__list free">
									<div className="hero__plans__list__inner">
										<i className="hero__plans__list-icon">flags</i>
										<h2 className="hero__plans__list-name">Free</h2>
										<p className="hero__plans__list-description">
											A simple way to get started for you new to passfolio.
										</p>
										<strong className="hero__plans__list-cost">
											$0<span> /forever</span>
										</strong>
										<Button
											text="Get started"
											type="arrow outline"
											color="green"
										/>
										<dl className="hero__plans__list-benefits">
											<dt>What's Included</dt>
											<dd>Unlimited data</dd>
											<dd>5 Person saved</dd>
											<dd>
												A Simple way to get started for you new to Passfolio
											</dd>
										</dl>
									</div>
								</li>
								<li className="hero__plans__list premium">
									<div className="hero__plans__list__inner">
										<em className="hero__plans__list-text">Most Popular</em>
										<i className="hero__plans__list-icon">Star</i>
										<h2 className="hero__plans__list-name">Premium</h2>
										<p className="hero__plans__list-description">
											Best for freelance coders & designers who need.
										</p>
										<strong className="hero__plans__list-cost">
											$50<span> /forever</span>
										</strong>
										<Button
											text="Get Started"
											type="flat arrow"
											color="white"
										/>
										<dl className="hero__plans__list-benefits">
											<dt>What's Included</dt>
											<dd>Unlimited data</dd>
											<dd>5 Person saved</dd>
											<dd>
												A Simple way to get started for you new to Passfolio
											</dd>
											<dd>
												A Simple way to get started for you new to Passfolio
											</dd>
										</dl>
									</div>
								</li>
								<li className="hero__plans__list family">
									<div className="hero__plans__list__inner">
										<i className="hero__plans__list-icon">Family</i>
										<h2 className="hero__plans__list-name">Family</h2>
										<p className="hero__plans__list-description">
											A simple way to get started for you new to passfolio.
										</p>
										<strong className="hero__plans__list-cost">Custom</strong>
										<Button
											text="Get started"
											type="arrow outline"
											color="green"
										/>
										<dl className="hero__plans__list-benefits">
											<dt>What's Included</dt>
											<dd>Unlimited data</dd>
											<dd>5 Person saved</dd>
											<dd>
												A Simple way to get started for you new to Passfolio
											</dd>
											<dd>
												A Simple way to get started for you new to Passfolio
											</dd>
										</dl>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="bottom_triangle bottom_triangle--white"></div>
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
							{/* <ul className="compare__features">
								<li className="compare__features__list">
									<dl className="compare__features__list__info">
										<dt className="compare__features__list-title">Features</dt>
										<dd className="compare__features__list-text">
											Price per Admin/month
										</dd>
										<dd className="compare__features__list-text">
											Number of Admins
										</dd>
										<dd className="compare__features__list-text">
											Published Forms
										</dd>
										<dd className="compare__features__list-text">
											Form Templates
										</dd>
										<dd className="compare__features__list-text">
											Agreement Templates
										</dd>
										<dd className="compare__features__list-text">
											Survey(monthly)
										</dd>
										<dd className="compare__features__list-text">
											Monthly Submissions
										</dd>
										<dd className="compare__features__list-text">
											Storage Space Available
										</dd>
										<dt className="compare__features__list-title">Security</dt>
										<dd className="compare__features__list-text">
											End-to-End-Encryption
										</dd>
										<dd className="compare__features__list-text">40</dd>
										<dt className="compare__features__list-title">Support</dt>
										<dd className="compare__features__list-te xt">
											Generic PDF
										</dd>
										<dd className="compare__features__list-text">
											Max Questions per Form
										</dd>
										<dd className="compare__features__list-text">
											Conditional Questions
										</dd>
										<dd className="compare__features__list-text">
											Electronic Signatures
										</dd>
										<dd className="compare__features__list-text">
											Attachment (in forms)
										</dd>
										<dd className="compare__features__list-text">
											Workflow support
										</dd>
									</dl>
								</li>
							</ul> */}
							<ul className="compare__plans">
								<li className="compare__plans__list features">
									<dl className="compare__plans__list__info">
										<dt className="compare__plans__list-title">Features</dt>
										<dd className="compare__plans__list-text">
											Price per Admin/month
										</dd>
										<dd className="compare__plans__list-text">
											Number of Admins
										</dd>
										<dd className="compare__plans__list-text">
											Published Forms
										</dd>
										<dd className="compare__plans__list-text">
											Form Templates
										</dd>
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
										<dd className="compare__plans__list-text">40</dd>
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
								</li>
								<li className="compare__plans__list free">
									<dl className="compare__plans__list__info">
										<dt className="compare__plans__list-title">
											<strong className="compare__plans__list-title-name">
												Free
											</strong>
											<span className="compare__plans__list-title-cost">
												$0 <em>/forever</em>
											</span>
											<Button
												text="Get started"
												type="arrow outline"
												color="green"
											/>
										</dt>
										<dd className="compare__plans__list-text">$29.90</dd>
										<dd className="compare__plans__list-text">1 &(max 4)</dd>
										<dd className="compare__plans__list-text">3</dd>
										<dd className="compare__plans__list-text">10</dd>
										<dd className="compare__plans__list-text">2</dd>
										<dd className="compare__plans__list-text">1</dd>
										<dd className="compare__plans__list-text">500</dd>
										<dd className="compare__plans__list-text">10GB</dd>
										<dt className="compare__plans__list-title">-</dt>
										<dd className="compare__plans__list-text">Check</dd>
										<dt className="compare__plans__list-title">-</dt>
										<dd className="compare__plans__list-text">Check</dd>
										<dd className="compare__plans__list-text">40</dd>
										<dd className="compare__plans__list-text">Check</dd>
										<dd className="compare__plans__list-text">Check</dd>
										<dd className="compare__plans__list-text">X</dd>
										<dd className="compare__plans__list-text">X</dd>
									</dl>
								</li>
								<li className="compare__plans__list premium">
									<dl className="compare__plans__list__info">
										<dt className="compare__plans__list-title">
											<strong className="compare__plans__list-title-name">
												Premium
											</strong>
											<span className="compare__plans__list-title-cost">
												$50 <em>/forever</em>
											</span>
											<Button
												text="Get started"
												type="flat outline"
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
										<dt className="compare__plans__list-title">-</dt>
										<dd className="compare__plans__list-text">Check</dd>
										<dt className="compare__plans__list-title">-</dt>
										<dd className="compare__plans__list-text">Check</dd>
										<dd className="compare__plans__list-text">Unlimited</dd>
										<dd className="compare__plans__list-text">Check</dd>
										<dd className="compare__plans__list-text">Check</dd>
										<dd className="compare__plans__list-text">Check</dd>
										<dd className="compare__plans__list-text">Check</dd>
									</dl>
								</li>
								<li className="compare__plans__list family">
									<dl className="compare__plans__list__info">
										<dt className="compare__plans__list-title">
											<strong className="compare__plans__list-title-name">
												Family
											</strong>
											<span className="compare__plans__list-title-cost">
												Custom
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
										<dt className="compare__plans__list-title">-</dt>
										<dd className="compare__plans__list-text">Check</dd>
										<dt className="compare__plans__list-title">-</dt>
										<dd className="compare__plans__list-text">Check</dd>
										<dd className="compare__plans__list-text">Unlimited</dd>
										<dd className="compare__plans__list-text">Check</dd>
										<dd className="compare__plans__list-text">Check</dd>
										<dd className="compare__plans__list-text">Check</dd>
										<dd className="compare__plans__list-text">Check</dd>
									</dl>
								</li>
							</ul>
						</div>
					</div>
					<div className="bottom_triangle bottom_triangle--white"></div>
				</section>
				<section className="frequently_ask">
					<div className="container">
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
					</div>
					<div className="bottom_triangle bottom_triangle--white"></div>
				</section>
				<ReadyGet />
			</main>
		);
	}
}

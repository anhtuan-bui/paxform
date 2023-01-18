import React, { Component } from "react";
import "./Pricing.scss";
import ReadyGet from "../../components/ReadyGet/ReadyGet";

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
							<div className="hero__plans">
								<div className="hero__plans__free">
									<div className="hero__plans__free__inner">
										<i className="hero__plans-icon">flags</i>
										<h2 className="hero__plans-name">Free</h2>
										<p className="hero__plans-description">
											A simple way to get started for you new to passfolio.
										</p>
										<strong className="hero__plans-cost">
											$0<em>/forever</em>
										</strong>
										<button>Get started</button>
										<dl className="hero__plans-benefits">
											<dt>What's Included</dt>
											<dd>Unlimited data</dd>
											<dd>5 Person saved</dd>
											<dd>
												A Simple way to get started for you new to Passfolio
											</dd>
										</dl>
									</div>
								</div>
								<div className="hero__plans__premium">
									<div className="hero__plans__premium__inner">
										<em>Most Popular</em>
										<i className="hero__plans-icon">/Star</i>
										<h2 className="hero__plans-name">Freemium</h2>
										<p className="hero__plans-description">
											Best for freelance coders & designers who need.
										</p>
										<strong className="hero__plans-cost">
											$50<em>/forever</em>
										</strong>
										<button>Get started</button>
										<dl className="hero__plans-benefits">
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
								</div>
								<div className="hero__plans__family">
									<div className="hero__plans__family__inner">
										<i className="hero__plans-icon">Family</i>
										<h2 className="hero__plans-name">Family</h2>
										<p className="hero__plans-description">
											A simple way to get started for you new to passfolio.
										</p>
										<strong className="hero__plans-cost">Custom</strong>
										<button>Get started</button>
										<dl className="hero__plans-benefits">
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
								</div>
							</div>
						</div>
					</div>
					<div className="bottom_triangle bottom_triangle--white"></div>
				</section>
				<section className="data_credit">
					<div className="container">
						<p className="data-credit-name">Data Credit</p>
						<h1 className="data-credit-title">
							Data Credits can be purchased in blocks.
						</h1>
						<ul className="data-credit__cards">
							<li className="data-credit__cards-one">
								<span className="data-credit__cards-cost">$19.90</span>
								<strong className="data-credit__cards-point">500</strong>
								<em className="data-credit__cards-text">
									Additional Submissions
								</em>
							</li>
							<li className="data-credit__cards-two">
								<span className="data-credit__cards-cost">$99.90</span>
								<strong className="data-credit__cards-point">3,000</strong>
								<em className="data-credit__cards-text">
									Additional Submissions
								</em>
							</li>
							<li className="data-credit__cards-three">
								<span className="data-credit__cards-cost">$299.90</span>
								<strong className="data-credit__cards-point">10,00</strong>
								<em className="data-credit__cards-text">
									Additional Submissions
								</em>
							</li>
						</ul>
					</div>
				</section>
				<section className="compare_plans">
					<div className="container"></div>
					<div className="bottom_triangle bottom_triangle--white"></div>
				</section>
				<section className="frequently_ask">
					<div className="container"></div>
					<div className="bottom_triangle bottom_triangle--white"></div>
				</section>
				<ReadyGet />
			</main>
		);
	}
}

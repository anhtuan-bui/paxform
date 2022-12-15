import React, { Component } from "react";

import GetStarted from "../../components/GetStarted/GetStarted";
import "./Usecases.scss";

import hero from "../../assets/images/usecases-hospitality.svg";
import ex from "../../assets/images/usecase-hospitality-ex.jpg";
import policy from "../../assets/images/usecase-policy.jpg";

export default class Usecases extends Component {
	render() {
		return (
			<main className="usecases usecases-hospitality">
				<section className="hero" background="light">
					<div className="container hero__wrapper">
						<div className="hero__content">
							<p className="hero__name">Hospitality</p>
							<h1 className="hero__title">
								Your Personal Information in One Place Fill Any Form, Anywhere
							</h1>
							<p className="hero__description">
								Practical guides, resources, templates and advice. Whether
								you're starting a business or growing an existing one, we're
								here to lend a helping hand as you navigate this unforgettable
								journey.
							</p>
						</div>
						<div className="hero__image">
							<img
								src={hero}
								alt="usecases hospitality hero"
								className="hero__image-large"
							/>
						</div>
					</div>
					<div className="bottom_triangle bottom_triangle--white"></div>
				</section>

				<section className="example">
					<div className="container">
						<div className="example__head">
							<strong className="example__head-name">Grow Your Revenue</strong>
							<h2 className="example__head-title">
								Maximise Conversion With Smarter Payments
							</h2>
							<p className="example__head-desc">
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some
							</p>
						</div>
						<div className="example__body">
							<div className="example__body__box">
								<h3 className="example__body__box-title">
									Optimised checkout flows
								</h3>
								<div class="example__body__box__description">
									There are many variations of passages of Lorem Ipsum
									available, but the majority have suffered alteration in some
									form, by injected humour, or randomised words which don't look
									even slightly believable. It is a long established fact that a
									reader will be distracted by the readable example of a page
									when looking at its layout
									<br></br>
									<ul className="example__body__box__list">
										<li>Well trained, friendly, and empathetic voice</li>
										<li>Prompt handling of calls</li>
										<li>Well informed communication</li>
										<li>Efficient and compliant</li>
									</ul>
								</div>
							</div>
							<div className="example__body__box img">
								<h3 className="example__body__box-title">
									Optimised checkout flows
								</h3>
								<img src={ex} alt="image" />
							</div>
						</div>
					</div>
				</section>

				<section className="policy">
					<div className="container">
						<div className="policy__cont">
							<p className="policy__cont-name">Security policy</p>
							<h2 className="policy__cont-title">
								Maximise Conversion With Smarter Payments
							</h2>
							<div className="policy__cont-desc">
								Paxform will never share your data with anyone. What’s more, no
								one at Paxform can view or access your information. Our mission
								is to apply end-to-end encryption to every piece of information
								stored, protecting the data of organizations and individuals at
								all stages and at all costs.
							</div>
							<a href="#">Lean More</a>
						</div>
						<div className="policy__image">
							<img src={ex} alt="security policy" />
						</div>
					</div>
				</section>

				<section className="example">
					<div className="container">
						<div className="example__body">
							<div className="example__body__box">
								<strong className="example__body__box-title">
									Optimised checkout flows
								</strong>
								<div class="example__body__box__description">
									There are many variations of passages of Lorem Ipsum
									available, but the majority have suffered alteration in some
									form, by injected humour, or randomised words which don't look
									even slightly believable. It is a long established fact that a
									reader will be distracted by the readable example of a page
									when looking at its layout
								</div>
							</div>
							<div className="example__body__box img">
								<strong className="example__body__box-title">
									Optimised checkout flows
								</strong>
								<img src={policy} alt="policy image" />
							</div>
						</div>
					</div>
				</section>

				<GetStarted />
			</main>
		);
	}
}

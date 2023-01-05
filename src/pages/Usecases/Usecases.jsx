import React, { Component } from "react";

import GetStarted from "../../components/GetStarted/GetStarted";
import "./UseCases.scss";

import ex from "../../assets/images/usecase-hospitality-ex.svg";
import policy from "../../assets/images/usecase-policy.svg";
import Button from "../../components/Button/Button";

export default class UseCases extends Component {
	render() {
		return (
			<main className="usecases usecases-hospitality">
				{/* usecases-retail, usecases-medicare , usecases-education */}
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
						<div className="hero__image"></div>
					</div>
					<div className="bottom_triangle bottom_triangle--white"></div>
				</section>

				<section className="case">
					<div className="container">
						<div className="case__head">
							<strong className="case__head-name">Grow Your Revenue</strong>
							<h2 className="case__head-title">
								Maximise Conversion With Smarter Payments
							</h2>
							<p className="case__head-desc">
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some
							</p>
						</div>
						<div className="case__body">
							<div className="case__body__box">
								<h3 className="case__body__box-title">
									Optimised checkout flows 1
								</h3>
								<div className="case__body__box__desc">
									There are many variations of passages of Lorem Ipsum
									available, but the majority have suffered alteration in some
									form, by injected humour, or randomised words which don't look
									even slightly believable. <br />
									<br />
									It is a long established fact that a reader will be distracted
									by the readable case of a page when looking at its layout
									<br></br>
									<ul className="case__body__box__list">
										<li>Well trained, friendly, and empathetic voice</li>
										<li>Prompt handling of calls</li>
										<li>Well informed communication</li>
										<li>Efficient and compliant</li>
									</ul>
								</div>
							</div>
							<div className="case__body__box">
								<img src={ex} alt="example screen" />
							</div>
							<div className="case__body__box">
								<h3 className="case__body__box-title">
									Optimised checkout flows 2
								</h3>
								<div className="case__body__box__desc">
									There are many variations of passages of Lorem Ipsum
									available, but the majority have suffered alteration in some
									form, by injected humour, or randomised words which don't look
									even slightly believable. <br />
									<br />
									It is a long established fact that a reader will be distracted
									by the readable case of a page when looking at its layout
									<br></br>
									<ul className="case__body__box__list">
										<li>Well trained, friendly, and empathetic voice</li>
										<li>Prompt handling of calls</li>
										<li>Well informed communication</li>
										<li>Efficient and compliant</li>
									</ul>
								</div>
							</div>
							<div className="case__body__box">
								<h3 className="case__body__box-title">
									Optimised checkout flows 3
								</h3>
								<div className="case__body__box__desc">
									There are many variations of passages of Lorem Ipsum
									available, but the majority have suffered alteration in some
									form, by injected humour, or randomised words which don't look
									even slightly believable. <br />
									<br />
									It is a long established fact that a reader will be distracted
									by the readable case of a page when looking at its layout
									<br></br>
									<ul className="case__body__box__list">
										<li>Well trained, friendly, and empathetic voice</li>
										<li>Prompt handling of calls</li>
										<li>Well informed communication</li>
										<li>Efficient and compliant</li>
									</ul>
								</div>
							</div>
							<div className="case__body__box">
								<img src={ex} alt="example screen" />
							</div>
							<div className="case__body__box">
								<img src={ex} alt="example screen" />
							</div>
						</div>
					</div>
					<div className="bottom_triangle bottom_triangle--light-blue"></div>
				</section>

				<section className="policy">
					<div className="container">
						<div className="policy__content">
							<p className="policy__content-name">Security policy</p>
							<h2 className="policy__content-title">
								A complete payments platform for ecommerce
							</h2>
							<div className="policy__content-desc">
								Paxform will never share your data with anyone. What’s more, no
								one at Paxform can view or access your information. Our mission
								is to apply end-to-end encryption to every piece of information
								stored, protecting the data of organizations and individuals at
								all stages and at all costs.
							</div>
							<Button type="outline arrow" text="Learn More" />
						</div>
						<div className="policy__image">
							<img src={policy} alt="security policy" />
						</div>
					</div>
				</section>

				<section className="article">
					<div className="bottom_triangle bottom_triangle--white"></div>
					<div className="container">
						<div className="article__body">
							<div className="article__body__box">
								<h3 className="article__body__box-title">
									A complete payments platform for ecommerce
								</h3>
								<div className="article__body__box__desc">
									There are many variations of passages of Lorem Ipsum
									available, but the majority have suffered alteration in some
									form, by injected humour, or randomised words which don't look
									even slightly believable.
									<br />
									<br /> It is a long established fact that a reader will be
									distracted by the readable content of a page when looking at
									its layout
								</div>
							</div>
							<div className="article__body__box">
								<img src={ex} alt="example screen" />
							</div>
							<div className="article__body__box">
								<img src={ex} alt="example screen" />
							</div>
							<div className="article__body__box">
								<h3 className="article__body__box-title">
									A complete payments platform for ecommerce
								</h3>
								<div className="article__body__box__desc">
									There are many variations of passages of Lorem Ipsum
									available, but the majority have suffered alteration in some
									form, by injected humour, or randomised words which don't look
									even slightly believable.
									<br />
									<br /> It is a long established fact that a reader will be
									distracted by the readable content of a page when looking at
									its layout
								</div>
							</div>
						</div>
					</div>
				</section>

				<GetStarted />
			</main>
		);
	}
}

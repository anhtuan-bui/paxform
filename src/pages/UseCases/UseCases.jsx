import React, { Component } from "react";
import GetStarted from "../../components/GetStarted/GetStarted";
import SecurityPolicy from "../../components/SecurityPolicy/SecurityPolicy";

import "./UseCases.scss";

import ex from "../../assets/images/usecase-hospitality-ex.svg";
import hospitality from "../../assets/images/usecases-hospitality.png";
import retail from "../../assets/images/usecases-retail.png";
import medical from "../../assets/images/usecases-medical.png";

import bgHospitality from "../../assets/images/usecases-bg-hospitality.svg";
// import bgRetail from "../../assets/images/usecases-bg-retail.svg";
// import bgMedical from "../../assets/images/usecases-bg-medical.svg";

const usecases = [
	{
		name: "hospitality",
		title: "Your Personal Information in One Place Fill Any Form, Anywhere",
		description:
			"Practical guides, resources, templates and advice. Whether you're starting a business or growing an existing one, we're here to lend a helping hand as you navigate this unforgettable journey.",
		image: hospitality,
		bg: bgHospitality,
	},
	{
		name: "retail",
		title: "Your Personal Information in One Place Fill Any Form, Anywhere",
		description:
			"Practical guides, resources, templates and advice. Whether you're starting a business or growing an existing one, we're here to lend a helping hand as you navigate this unforgettable journey.",
		image: retail,
	},
	{
		name: "medical",
		title: "Your Personal Information in One Place Fill Any Form, Anywhere",
		description:
			"Practical guides, resources, templates and advice. Whether you're starting a business or growing an existing one, we're here to lend a helping hand as you navigate this unforgettable journey.",
		image: medical,
	},
];

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
						<div className="hero__image">
							<img src={hospitality} alt="hospitality hero" />
						</div>
					</div>
					<img
						className="image__background"
						src={bgHospitality}
						alt=""
						aria-hidden="true"
					/>
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

				<SecurityPolicy />

				<section className="article">
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

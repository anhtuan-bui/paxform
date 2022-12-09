import React, { Component } from "react";
import "./Usecases.scss";

import hero from "../../assets/images/usecases-hospitality.svg";

export default class Usecases extends Component {
	render() {
		return (
			<main className="usecases usecases-hospitality">
				<section className="hero">
					<div className="container hero__wrapper">
						<div className="hero__content">
							<p className="hero__name">Hospitality</p>
							<h1 className="hero__title">
								A complete payments platform for ecommerce
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
					<div className="bottom_triangle bottom_triangle--light-green"></div>
				</section>
			</main>
		);
	}
}

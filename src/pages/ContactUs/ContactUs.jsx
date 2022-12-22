import React, { Component } from "react";
import "./ContactUs.scss";

export default class ContactUs extends Component {
	render() {
		return (
			<main className="contact">
				<section className="hero">
					<div className="container hero__wrapper">
						<div className="hero__content">
							<p className="hero__name">Contact Us</p>
							<h1 className="hero__title">We’d love to hear from you</h1>
							<p className="hero__description">
								If you have any questions about Paxdorm please contact us in
								form beside and we will respond immediately.
							</p>
						</div>
					</div>
					<div className="form_wrap">
						<form>
							<label>
								<strong>Full name</strong>
								<input type="text" placeholder="John Doe" />
							</label>
							<label>
								<strong>Email</strong>
								<input type="text" placeholder="jondoe@email.com" />
							</label>
							<label>
								<strong>Company name</strong>
								<input type="text" placeholder="acme corp" />
							</label>
							<label>
								<strong>Company size</strong>
								<input type="text" placeholder="Select a range of employees" />
							</label>
							<label>
								<strong>Message</strong>
								<textarea placeholder="Tell your project or anything else we can help"></textarea>
							</label>
							<button type="submit">Send Messages</button>
						</form>
					</div>
					<div className="bottom_triangle bottom_triangle--white"></div>
				</section>
				<section className="help">
					<div className="container ">
						<span className="help-name">GET IN TOUCH</span>
						<h2 className="help-title">Our teams are here to help</h2>
						<div className="help__wrap">
							<div className="help__box">
								<em className="help__box-icon">icon</em>
								<strong className="help__box-title">
									Text us 309-923-1230
								</strong>
								<p className="help__box-desc">
									Message and data rates may apply
								</p>
								<a className="help__box-link" href="/">
									Message us
								</a>
							</div>
							<div className="help__box">
								<em className="help__box-icon">icon</em>
								<strong className="help__box-title">Send us an email</strong>
								<p className="help__box-desc">We’d love to hear from you!</p>
								<a className="help__box-link" href="/">
									Email us
								</a>
							</div>
							<div className="help__box">
								<em className="help__box-icon">icon</em>
								<strong className="help__box-title">
									Call us at 1-893-909-7845
								</strong>
								<p className="help__box-desc">
									Already using our products and experiencing technical issues?
								</p>
								<a className="help__box-link" href="/">
									Call us
								</a>
							</div>
							<div className="help__box">
								<em className="help__box-icon">icon</em>
								<strong className="help__box-title">
									Chat with a specialist
								</strong>
								<p className="help__box-desc">
									Available 7am-11pm CT, 7 days a week
								</p>
								<a className="help__box-link" href="/">
									Chat now
								</a>
							</div>
						</div>
					</div>
					<div className="bottom_triangle bottom_triangle--footer"></div>
				</section>
			</main>
		);
	}
}

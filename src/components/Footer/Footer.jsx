import React, { Component } from "react";
import "./Footer.scss";

import footerLogo from "../../assets/images/LOGO-footer.svg";
import facebook from "../../assets/images/bxl-facebook-circle.svg.svg";
import linkedin from "../../assets/images/bxl-linkedin.svg.svg";
import youtube from "../../assets/images/bxl-youtube.svg.svg";
import discord from "../../assets/images/discord-fill.svg";

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="container footer__container">
					<div className="footer__top">
						<div className="footer__top-left">
							<div className="footer__logo">
								<img src={footerLogo} alt="logo footer" />
							</div>
							<div className="footer__social">
								<img src={linkedin} alt="linkedin" />
								<img src={youtube} alt="youtube" />
								<img src={facebook} alt="facebook" />
								<img src={discord} alt="discord" />
							</div>
						</div>
						{/* <div className="footer__top-right"> */}
						<div className="footer__top-right-list">
							<h1>SERVICES</h1>
							<ul>
								<li>
									<a href="/contact-us">Contact Us*</a>
								</li>
								<li>
									<a href="/legal">Legal*</a>
								</li>
								<li>
									<a href="/legal-detail">Legal Detail*</a>
								</li>
								<li>
									<a href="/company">Company*</a>
								</li>
								<li>
									<a href="/privacy-policy">Privacy Policy*</a>
								</li>
								<li>
									<a href="https://">Personal</a>
								</li>
								<li>
									<a href="https://">Business</a>
								</li>
								<li>
									<a href="https://">Security Policy</a>
								</li>
								<li>
									<a href="https://">Form Publishing</a>
								</li>
								<li>
									<a href="https://">Security Policy</a>
								</li>
								<li>
									<a href="https://">About</a>
								</li>
								<li>
									<a href="https://">Legal</a>
								</li>
							</ul>
						</div>
						<div className="footer__top-right-list">
							<h1>CUSTOMER STORIES</h1>
							<ul>
								<li>
									<a href="https://">See why customers love Paxform</a>
								</li>
								<li>
									<a href="https://">
										Making the visitor experience seamless at Paxform
									</a>
								</li>
								<li>
									<a href="https://">
										The new normal—an automated path—way for policy renewals
									</a>
								</li>
								<li>
									<a href="https://">Complete simple and complex forms</a>
								</li>
								<li>
									<a href="https://">
										Share forms and applications with other parties and
										organizations
									</a>
								</li>
								<li>
									<a href="https://">Electronically sign documents</a>
								</li>
							</ul>
						</div>
						<div className="footer__top-right-list">
							<h1>COMPANY</h1>
							<ul>
								<li>
									<a href="https://">About</a>
								</li>
								<li>
									<a href="https://">Security Policy</a>
								</li>
								<li>
									<a href="https://">Security Policy</a>
								</li>
								<li>
									<a href="https://">Legal</a>
								</li>
								<li>
									<a href="https://">Business</a>
								</li>
								<li>
									<a href="https://">Security Policy</a>
								</li>
								<li>
									<a href="https://">Personal</a>
								</li>
								<li>
									<a href="https://">Business</a>
								</li>
								<li>
									<a href="https://">Security Policy</a>
								</li>
								<li>
									<a href="https://">Form Publishing</a>
								</li>
							</ul>
						</div>
					</div>
					{/* </div> */}
				</div>
				<div className="footer__bottom-wrapper">
					<div className="container">
						<div className="footer__bottom">
							<p>© Copyright 2022 Paxform. All rights reserved.</p>

							<ul>
								<li>
									<a href="/privacy-policy">
										<span className="span--hover">Privacy Policy*</span>
									</a>
								</li>
								<li>
									<a href="https://">
										<span className="span--hover">Term of Service</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

import React, { Component } from "react";
import "./Legal.scss";
const categories = [
	{
		title: "General",
		date: "",
		contents: [
			{
				link: "/privacy-policy",
				desc: "Global Privacy Policy",
			},
			{
				link: "/cookie-policy",
				desc: "Cookie Policy",
			},
			{
				link: "/website-terms",
				desc: "Website Terms of Use",
			},
			{
				link: "/trial-terms",
				desc: "Trial Terms of Use",
			},
		],
	},
	{
		title: "Standard Terms of Service v.14",
		date: "Published in Oct 2020",
		contents: [
			{
				link: "/bv",
				desc: "Standard Terms of Service BV",
			},
			{
				link: "/ltd",
				desc: "Standard Terms of Service Ltd",
			},
			{
				link: "/lcc",
				desc: "Standard Terms of Service LCC",
			},
			{
				link: "/fz-llc",
				desc: "Standard Terms of Service Software FZ-LLC",
			},
		],
	},
	{
		title: "Standard Terms of Service v.13",
		date: "Published in Oct 2019",
		contents: [
			{
				link: "/bv-v13",
				desc: "Standard Terms of Service BV",
			},
			{
				link: "/ltd-v13",
				desc: "Standard Terms of Service Ltd",
			},
			{
				link: "/lcc-v13",
				desc: "Standard Terms of Service LCC",
			},
			{
				link: "/fz-llc-v13",
				desc: "Standard Terms of Service Software FZ-LLC",
			},
		],
	},
	{
		title: "Additional Policies",
		date: "",
		contents: [
			{
				link: "/service-level",
				desc: "Service Level Agreement v.14",
			},
			{
				link: "/service-level-v12",
				desc: "Service Level Agreement v.12.6",
			},
			{
				link: "/acceptable",
				desc: "Acceptable Use Policy",
			},
			{
				link: "/intergrations",
				desc: "Integrations Terms of Use",
			},
		],
	},
	{
		title: "Data Processing",
		date: "",
		contents: [
			{
				link: "/data-processing",
				desc: "Data Processing Addendum",
			},
			{
				link: "/sub-bynder",
				desc: "Sub-Processors Bynder",
			},
			{
				link: "/sub-webdam",
				desc: "Sub-Processors Webdam",
			},
		],
	},
	{
		title: "Mobile Apps",
		date: "",
		contents: [
			{
				link: "/ios-terms",
				desc: "iOS App Terms of Use",
			},
			{
				link: "/android-terms",
				desc: "Android App Terms of Use",
			},
		],
	},
	{
		title: "Recruitment",
		date: "",
		contents: [
			{
				link: "/employee-candidate",
				desc: "Bynder Employee/Candidate Privacy Notice",
			},
		],
	},
	{
		title: "Other Languages",
		date: "",
		contents: [
			{
				link: "/deutsch",
				desc: "Deutsch",
			},
			{
				link: "/francais",
				desc: "Francais",
			},
			{
				link: "/nederlands",
				desc: "Nederlands",
			},
		],
	},
];

export default class Legal extends Component {
	render() {
		return (
			<main className="legal">
				<section className="hero">
					<div className="container hero__wrapper">
						<div className="hero__content">
							<h1 className="hero__title">Paxfrom Legal</h1>
							<p className="hero__description">
								Find legal information and resources for our products and
								services, including our policies and terms.
							</p>
						</div>
					</div>
					<div className="bottom_triangle bottom_triangle--light-grey"></div>
				</section>
				<section className="category">
					<div className="container category__wrap">
						{categories.map((category, index) => (
							<div className="category__box" key={index}>
								<div className="category__box__inner">
									<strong className="category__box-title">
										{category.title}
									</strong>
									<span className="category__box-date">{category.date}</span>
									{category.contents.map((content, index) => (
										<a
											className="category__box-link"
											href={content.link}
											key={index}
										>
											{content.desc}
										</a>
									))}
								</div>
							</div>
						))}
					</div>
					<div className="bottom_triangle bottom_triangle--footer"></div>
				</section>
			</main>
		);
	}
}

import React, { Component, Fragment } from "react";
import "./FrequentlyAsk.scss";
const faqs = [
	{
		title: "What are data credits?",
		content:
			"Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
	},
	{
		title: "Can I cancel my plan any time?",
		content:
			"Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
	},
	{
		title: "Is there a free trial for the paid plans?",
		content:
			"Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
	},
	{
		title: "We are a medium-sized company. Which plan is right for us?",
		content:
			"Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
	},
	{
		title:
			"I want to store my information and share it with others. Which plan is right for me?",
		content:
			"Paxform helped me fill my admission documents to a hospital. All my information and medical history were filled in an instance. Had I done it manually, I would have had to find all the details, which would have taken hours!",
	},
];
export default class FrequentlyAsk extends Component {
	componentDidMount() {
		window.addEventListener("click", (e) => this.handleOpenClick(e));
	}

	componentWillUnmount() {
		window.removeEventListener("click", (e) => this.handleOpenClick(e));
	}

	handleOpenClick = (e, selectorName) => {
		let el = e.target.parentElement;
		el.classList.toggle("on");

		console.log(el);

		// if (el.classList.contains("on")) {
		// 	el.classList.remove("on");
		// }
	};
	render() {
		return (
			<Fragment>
				<section className="frequently_ask">
					<div className="container">
						<div className="frequently_ask__wrapper">
							<h1>Frequently asked questions</h1>
							<table>
								<tbody>
									{faqs.map((faq, index) => (
										<tr onClick={(e) => this.handleOpenClick(e)} key={index}>
											<th>{faq.title}</th>
											<td>{faq.content}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
					<div className="bottom_triangle bottom_triangle--white"></div>
				</section>
			</Fragment>
		);
	}
}

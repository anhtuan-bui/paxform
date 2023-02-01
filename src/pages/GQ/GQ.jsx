import { gql, useQuery } from "@apollo/client";
import React from "react";
import "./GQ.scss";

const GET_TESTIMONIAL = gql`
	query getTestimonials {
		testimonials {
			nodes {
				content
				title
			}
		}
	}
`;

export default function GQ() {
	const { loading, error, data } = useQuery(GET_TESTIMONIAL);
	if (loading) return <p>Loading...</p>;

	console.log(data);
	const testimonials = data.testimonials.nodes;
	// const companies = data.companies.nodes;
	return (
		<div className="container">
			{testimonials.map((testimonial, index) => (
				<div key={index}>
					<div>{testimonial.title}</div>
					<div dangerouslySetInnerHTML={{ __html: testimonial.content }}></div>
					<div>{testimonial.content}</div>
				</div>
			))}
			<div className="out-box">
				<div className="first-box">Main content</div>
				<div className="second-box">Side bar</div>
			</div>
		</div>
	);
}

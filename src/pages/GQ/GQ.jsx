import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_ALL_COMPANIES = gql`
	query GetAllCompanies {
		companies {
			nodes {
				content
				image {
					node {
						mediaItemUrl
					}
				}
				title
				userdate
			}
		}
	}
`;

export default function GQ() {
	const { loading, data } = useQuery(GET_ALL_COMPANIES);
	if (loading) return <p>Loading...</p>;
	console.log(data);
	const companies = data.companies.nodes;
	return (
		<div className="container">
			{companies.map((company, index) => (
				<div key={index}>
					<div>{company.title}</div>
					<div dangerouslySetInnerHTML={{ __html: company.content }}></div>
					<img src={company.image.node.mediaItemUrl} alt="" />
					<strong>{company.userdate}</strong>
				</div>
			))}
		</div>
	);
}

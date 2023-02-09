// import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";

// const GET_ALL_COMPANIES = gql`
// 	query GetAllCompanies {
// 		companies {
// 			nodes {
// 				content
// 				image {
// 					node {
// 						mediaItemUrl
// 					}
// 				}
// 				title
// 				userdate
// 			}
// 		}
// 	}
// `;

const getData = async () => {
	const response = await fetch("https://v1.paxfolio.com/wp-json/wp/v2/posts");
	const json = await response.json();
	return json;
}

export default function GQ() {
	useEffect(() => {
		const data =  getData();
		console.log(data)
	})
	// console.log(response);
	// const { loading, data } = useQuery(GET_ALL_COMPANIES);
	// if (loading) return <p>Loading...</p>;
	// console.log(data);
	// const companies = data.companies.nodes;
	return (
		<div className="container">
			{/* {companies.map((company, index) => (
				<div key={index}>
					<div>{company.title}</div>
					<div dangerouslySetInnerHTML={{ __html: company.content }}></div>
					<img src={company.image.node.mediaItemUrl} alt="" />
					<strong>{company.userdate}</strong>
				</div>
			))} */}
			GQ
		</div>
	);
}

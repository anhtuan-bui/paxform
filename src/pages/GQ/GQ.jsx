// import { gql, useQuery } from "@apollo/client";
import React, { Component } from "react";
import Button from "../../components/Button/Button";
import './GQ.scss';

// const GET_ALL_COMPANIES = gql`
//   query GetAllCompanies {
//     companies {
//       nodes {
//         content
//         image {
//           node {
//             mediaItemUrl
//           }
//         }
//         title
//         userdate
//       }
//     }
//   }
// `;

// export default function GQ() {
// 	const { loading, data } = useQuery(GET_ALL_COMPANIES);
// 	if (loading) return <p>Loading...</p>;
// 	console.log(data);
// 	const companies = data.companies.nodes;
// 	return (
// 		<div className="container">
// 			{companies.map((company, index) => (
// 				<div key={index}>
// 					<div>{company.title}</div>
// 					<div dangerouslySetInnerHTML={{ __html: company.content }}></div>
// 					<img src={company.image.node.mediaItemUrl} alt="" />
// 					<strong>{company.userdate}</strong>
// 				</div>
// 			))}

// 			<Button type="flat-green" color="white" text="Personal"/>
// 			<Button type="flat-green" color="white" text="Business" />
// 		</div>
// 	);
// }

export default class GQ extends Component {
  personal = "Personal";
  business = "Business";

  constructor(props) {
    super(props);
    this.state = {
      page: this.personal,
    };

	this.onPersonalBtnClick = this.onPersonalBtnClick.bind(this);
	this.onBusinessBtnClick = this.onBusinessBtnClick.bind(this);

  }

  onPersonalBtnClick () {
	console.log('personal');
    this.setState({ page: this.personal });
  };

  onBusinessBtnClick (){
	console.log('business');
    this.setState({ page: this.business });
  };

  render() {
    return (
      <div className="gq">
        <Button
          type="flat-green"
          color="white"
          text="Personal"
          onClick={this.onPersonalBtnClick}
        />
        <Button
          type="outline"
          color="blue"
          text="Business"
          onClick={this.onBusinessBtnClick}
        />

		{/* <button onClick={this.onPersonalBtnClick}>Personal</button> */}
		{/* <button onClick={this.onBusinessBtnClick}>Business</button> */}

        <p>{this.state.page}</p>
      </div>
    );
  }
}

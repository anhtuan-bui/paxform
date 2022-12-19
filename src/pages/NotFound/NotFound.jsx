import React, { Component } from "react";
import Button from "../../components/Button/Button";
import "./NotFound.scss";

export default class NotFound extends Component {
	backToHome = () => {
		window.location.href = "/";
	};
	render() {
		return (
			<main className="not_found">
				<div className="container">
					<div className="not_found__container">
						<h1 className="not_found__code">
							4<span>0</span>4
						</h1>

						<h2 className="not_found__title">
							Oops's Sorry we can't reach you!{" "}
						</h2>

						<p className="not_found__description">
							This page is missing or you assemble it incorrectly
						</p>
						<Button
							text="Go back to home"
							type="flat arrow"
							color="white"
							onClick={this.backToHome}
						/>
					</div>
				</div>
			</main>
		);
	}
}

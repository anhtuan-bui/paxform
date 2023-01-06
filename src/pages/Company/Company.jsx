import React, { Component } from "react";
import "./Company.scss";

// import Button from "../../components/Button/Button";
import about from "../../assets/images/company-about.svg";
import vision from "../../assets/images/company-vision.svg";
import video from "../../assets/images/company-video.jpg";
import teamPic1 from "../../assets/images/company-team-pic01.png";
import teamPic2 from "../../assets/images/company-team-pic02.png";
import diversity from "../../assets/images/company-diversity.svg";

export default class Company extends Component {
	render() {
		return (
			<main className="company">
				<section className="hero" background="light">
					<div className="container">
						<div className="hero__wrapper">
							<div className="hero__content">
								<p className="hero__name">About Us</p>
								<h1 className="hero__title">Paxform for everyone</h1>
								<p className="hero__description">
									Paxform’s function is simple: it completely fills any form,
									anytime. You can manage and save your personal data, allowing
									you to sign documents and send them to organisations with
									ease. No need to worry about security and privacy—Paxform
									fully encrypts your data to ensure your safety.
								</p>
							</div>
							<div className="hero__image">
								<img src={about} alt="company about us" />
							</div>
						</div>
					</div>
				</section>
				<section className="vision">
					<div className="container">
						<div className="vision__wrapper">
							<div className="vision__image">
								<img src={vision} alt="company vision" />
							</div>
							<div className="vision__content">
								<p className="vision__name">Our Vision</p>
								<h1 className="vision__title">Forms without forms.</h1>
								<p className="vision__description">
									Paxform’s function is simple: it completely fills any form,
									anytime. You can manage and save your personal data, allowing
									you to sign document s and send them to organisations with
									ease. No need to worry about security and privacy—Paxform
									fully encrypts your data to ensure your safety.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="video">
					<div className="container">
						<div className="video__wrapper">
							<a className="video__wrapper-link" href="#">
								<img src={video} alt="video play" />
							</a>
						</div>
					</div>
				</section>
				<section className="team">
					<div className="container">
						<div className="team__wrapper">
							<h2 className="team__title">Meet The Team</h2>
							<ul className="team__box">
								<li className="team__box-list">
									<div className="team__box__inner">
										<img
											className="team__box__inner-img"
											src={teamPic1}
											alt="team member"
										/>
									</div>
									<strong className="team__box-list-name">
										Chidi Okechukwu
									</strong>
									<span className="team__box-list-position">CEO & Founder</span>
									<a className="team__box-list-link" href="#"></a>
								</li>
								<li className="team__box-list">
									<div className="team__box__inner">
										<img
											className="team__box__inner-img"
											src={teamPic2}
											alt="team member"
										/>
									</div>
									<strong className="team__box-list-name">
										Chidi Okechukwu
									</strong>
									<span className="team__box-list-position">CEO & Founder</span>
									<a className="team__box-list-link" href="#"></a>
								</li>
								<li className="team__box-list">
									<div className="team__box__inner">
										<img
											className="team__box__inner-img"
											src={teamPic1}
											alt="team member"
										/>
									</div>
									<strong className="team__box-list-name">
										Chidi Okechukwu
									</strong>
									<span className="team__box-list-position">CEO & Founder</span>
									<a className="team__box-list-link" href="#"></a>
								</li>
								<li className="team__box-list green">
									<div className="team__box__inner">
										<img
											className="team__box__inner-img"
											src={teamPic2}
											alt="team member"
										/>
									</div>
									<strong className="team__box-list-name">
										Chidi Okechukwu
									</strong>
									<span className="team__box-list-position">CEO & Founder</span>
									<a className="team__box-list-link" href="#"></a>
								</li>
							</ul>
						</div>
					</div>
					<div className="bottom_triangle bottom_triangle--dark-blue"></div>
				</section>
				<section className="diversity">
					<div className="container">
						<div className="diversity__wrapper">
							<div className="diversity__content">
								<h2 className="diversity__content-title">
									Diversity & Inclusion
								</h2>
								<p className="diversity__content-description">
									At Paxform, we make diversity and inclusion part of everything
									we do. We are building a culture where one’s unique attributes
									and differences are part of who we are. Regardless of
									background or gender, our employees, customers and
									stakeholders are treated as equals.
									<br />
									<br />
									<br /> As a fast-growing company, we focus on creating a
									diverse workforce globally and a workplace that welcomes,
									nurtures and celebrates camaraderie, initiative, leadership
									and innovation. We strive to build innovative products that
									can be used by everyone despite their cultural, language or
									geographic differences, furthermore, achieving the goals that
									we have set for ourselves and our stakeholders.
								</p>
							</div>
							<div className="diversity__image">
								<img src={diversity} alt="diversity pic" />
							</div>
						</div>
					</div>
					<div className="bottom_triangle bottom_triangle--white"></div>
				</section>
				<section className="ready">
					<div className="container">
						<div className="ready__wrapper">
							<div className="ready__contact">
								<h2 className="ready__contact-title">Ready to get started?</h2>
								<p className="ready__contact-description">
									You can also contact us to design a custom package for your
									business.automatically match that data no matter which form
									you are filling in. Say goodbye to manually inputting the same
									data over and over again.
								</p>
								<button>Contact Us</button>
							</div>
							<div className="ready__content">
								<div className="ready__content__inner">
									<em className="ready__content-icon">icon</em>
									<strong className="ready__content-title">
										Always know what you pay
									</strong>
									<p>
										Experience a new level of convenience by using your stored
										signatures to electronically sign your documents.
									</p>
									<a href="#">Learn more</a>
								</div>
								<div className="ready__content__inner">
									<em className="ready__content-icon">icon</em>
									<strong className="ready__content-title">
										Always know what you pay
									</strong>
									<p>
										Experience a new level of convenience by using your stored
										signatures to electronically sign your documents.
									</p>
									<a href="#">Learn more</a>
								</div>
							</div>
						</div>
					</div>
					<div className="bottom_triangle bottom_triangle--footer"></div>
				</section>
			</main>
		);
	}
}

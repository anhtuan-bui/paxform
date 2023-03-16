import React, { Component } from "react";
import "./ContactUs.scss";
import Button from "../../components/Button/Button";
import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";

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
            <div className="form__box">
              <form>
                <label>
                  <strong>Full Name</strong>
                  <input type="text" placeholder="Full Name" required />
                </label>
                <label>
                  <strong>Email</strong>
                  <input type="text" placeholder="example@email.com" required />
                </label>
                <label>
                  <strong>Company name</strong>
                  <input type="text" placeholder="Company Name" />
                </label>
                <label>
                  <strong>Company size</strong>
                  <select>
                    <option value="" disabled selected>
                      Select a range of employees
                    </option>
                    <option value="1 - 10">1 - 10</option>
                    <option value="10 - 100">10 - 100</option>
                    <option value="100 - 1000">100 - 1000</option>
                    <option value="Over 1000">Over 1000</option>
                  </select>
                </label>
                <label>
                  <strong>Message</strong>
                  <textarea placeholder="Message" required></textarea>
                </label>
                <Button
                  text="Send Message"
                  type="flat-green arrow submit"
                  color="white"
                />
              </form>
            </div>
          </div>
          <div className="bottom_triangle bottom_triangle--white"></div>
        </section>
        <section className="help">
          <div className="container">
            <span className="help-name">GET IN TOUCH</span>
            <h2 className="help-title">Our teams are here to help</h2>
            <div className="help__wrapper">
              <div className="help__box">
                <div className="help__box__inner">
                  <em className="help__box-icon"></em>
                  <strong className="help__box-title">
                    Text us +61 482 084 480
                  </strong>
                  <p className="help__box-desc">
                    Message and data rates may apply
                  </p>
                  <a className="help__box-link" href="sms:+61482084480">
                    Message us <ArrowRight />
                  </a>
                </div>
              </div>
              <div className="help__box">
                <div className="help__box__inner">
                  <em className="help__box-icon"></em>
                  <strong className="help__box-title">Send us an email</strong>
                  <p className="help__box-desc">We’d love to hear from you!</p>
                  <a className="help__box-link" href="mailto:hello@paxform.com">
                    Email us <ArrowRight />
                  </a>
                </div>
              </div>
              <div className="help__box">
                <div className="help__box__inner">
                  <em className="help__box-icon"></em>
                  <strong className="help__box-title">
                    Call us at +61 1300 181 346
                  </strong>
                  <p className="help__box-desc">We’d love to hear from you!</p>
                  <a className="help__box-link" href="tel:+611300181346">
                    Call us <ArrowRight />
                  </a>
                </div>
              </div>
              <div className="help__box">
                <div className="help__box__inner">
                  <strong className="help__box-title">
                    Chat with a specialist
                  </strong>
                  <p className="help__box-desc">
                    Available 9am - 5pm AEST, Monday - Friday
                  </p>
                  <a id="chat_now" className="help__box-link" href="#chat_now">
                    Chat now <ArrowRight />
                  </a>
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

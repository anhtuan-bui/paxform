import React, {
  Component,
  createRef,
  Fragment,
  useEffect,
  useState,
} from "react";
import "./ContactUs.scss";
import post from "../../lib/restApi";
import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../../components/Button/Button";

import Modal from "react-modal";

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
                We value your feedback and are here to assist you with any
                questions or concerns you may have. Please fill out the form,
                and one of our representatives will get back to you as soon as
                possible.
              </p>
            </div>
            <div className="form__box-wrapper">
              <div className="form__box">
                <ContactForm />
              </div>
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

const ContactForm = () => {
  const sitekey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  let alerts = {
    fullName: "Please enter your full name",
    email: "Please enter your email address",
    companyName: "Please enter your company name",
    companySize: "Please enter your company size",
    message: "Please enter your message",
    captcha: "Verify that you are not a robot",
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [message, setMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const recaptchaRef = createRef();

  let response = {};

  const fetchCaptcha = async () => {
    const captchaToken = recaptchaRef.current.getValue();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: captchaToken,
      }),
    };

    const res = await fetch(
      `${process.env.REACT_APP_WP_API_URL}recaptcha/v2/verification`,
      options
    );
    const data = await res.json();
    return data.success;
  };

  const handleRecaptchaChange = async () => {
    setCaptcha(await fetchCaptcha());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (captcha && !sent) {
      setSent(true);
      response = await post("wp/v2/contact", {
        title: fullName,
        content: message,
        email: email,
        company_name: companyName,
        company_size: companySize,
        status: "private",
        checked: false,
      });
    } else if (!captcha) {
      setAlertMessage(true);
    }

    if (response.id) {
      setModalOpen(true);
    } else {
      setAlertMessage(true);
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    window.location.reload();
  };

  const setFormBoxWrapperHeight = () => {
    const formBox = document.querySelector(".form__box");
    const formBoxHeight = formBox.offsetHeight;
    formBox.parentElement.style.height = `${formBoxHeight - 320}px`;
  };

  const handleFormBoxWrapperHeight = () => {
    const iframe = document.getElementsByTagName("iframe")[0];
    if (iframe) {
      setFormBoxWrapperHeight();
    } else {
      let observer = new MutationObserver(() => {
        const iframe = document.getElementsByTagName("iframe")[0];
        if (iframe) {
          removeObserver();
          setFormBoxWrapperHeight();
        }
      });
      observer.observe(document, { subtree: true, childList: true });

      const removeObserver = () => {
        if (observer) {
          observer.disconnect();
          observer = null;
        }
      };
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  useEffect(() => {
    handleFormBoxWrapperHeight();
    window.addEventListener("resize", handleFormBoxWrapperHeight);

    return () => {
      window.removeEventListener("resize", handleFormBoxWrapperHeight);
    };
  });

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label>
          <strong>Full name</strong>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            required
          />
          <p
            className={`form__message form__message--error
             ${fullName || !alertMessage ? "form__message--hidden" : ""}`}
          >
            {alerts.fullName}
          </p>
        </label>
        <label>
          <strong>Email</strong>
          <input
            type="email"
            placeholder="example@email.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <p
            className={`form__message form__message--error ${
              email || !alertMessage ? "form__message--hidden" : ""
            }`}
          >
            {alerts.email}
          </p>
        </label>
        <label>
          <strong>Company name</strong>
          <input
            type="text"
            placeholder="Company Name"
            onChange={(e) => setCompanyName(e.target.value)}
            value={companyName}
          />
        </label>
        <label>
          <strong>Company size</strong>
          <select
            onChange={(e) => setCompanySize(e.target.value)}
            defaultValue={companySize}
          >
            <option value="" disabled>
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
          <textarea
            placeholder="Message"
            onChange={(e) => handleMessageChange(e)}
            value={message}
            required
          ></textarea>
          <p
            className={`form__message form__message--error
             ${message || !alertMessage ? "form__message--hidden" : ""}`}
          >
            {alerts.message}
          </p>
        </label>
        <ReCAPTCHA
          className="recaptcha"
          sitekey={sitekey}
          onChange={handleRecaptchaChange}
          ref={recaptchaRef}
        />
        <p
          className={`form__message form__message--error
           ${captcha || !alertMessage ? "form__message--hidden" : ""}`}
        >
          {alerts.captcha}
        </p>

        <br />
        <Button
          text="Send Message"
          type="flat-green arrow"
          color="white"
          buttonType="submit"
        />
      </form>

      <Modal
        isOpen={modalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Contact Message"
        ariaHideApp={false}
        style={{
          content: {
            display: "flex",
            flexDirection: "column",
            width: "600px",
            maxWidth: "calc(100% - 2rem)",
            height: "300px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            padding: "2rem",
            boxSizing: "border-box",
            justifyContent: "space-between",
          },
        }}
      >
        <div className="contact_modal__message">
          <h1>Your message has been sent!</h1>
          <p>We will contact you shortly. Thank you!</p>
        </div>
        <Button
          className="contact_modal__button"
          text="Close"
          type="flat-green"
          color="white"
          onClick={handleModalClose}
        />
      </Modal>
    </Fragment>
  );
};

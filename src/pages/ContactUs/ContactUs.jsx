import React, { createRef, Fragment, useEffect, useState } from "react";
import "./ContactUs.scss";
import post from "../../lib/restApi";
import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../../components/Button/Button";

import Modal from "react-modal";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const messageNumber = "+61 1300 181 345";
  const callNumber = "+61 1300 181 345";
  const { t } = useTranslation();

  const handleChatNowClick = () => {
    const chatNowButton = document.querySelector(".chat-button");
    chatNowButton.click();
  };

  return (
    <main className="contact">
      <section className="hero">
        <div className="container hero__wrapper">
          <div className="hero__content">
            <p className="hero__name">{t("contactUs")}</p>
            <h1 className="hero__title">{t("contactUsPage.hero.title")}</h1>
            <p className="hero__description">
              {t("contactUsPage.hero.description")}
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
          <span className="help-name">
            {t("contactUsPage.getInTouch.name")}
          </span>
          <h2 className="help-title">{t("contactUsPage.getInTouch.title")}</h2>
          <div className="help__wrapper">
            <div className="help__box">
              <div className="help__box__inner">
                <em className="help__box-icon"></em>
                <strong className="help__box-title">
                  {t("contactUsPage.message.title", {
                    messageNumber: messageNumber,
                  })}
                </strong>
                <p className="help__box-desc">
                  {t("contactUsPage.message.description")}
                </p>
                <a className="help__box-link" href="sms:+611300181345">
                  {t("contactUsPage.message.linkText")} <ArrowRight />
                </a>
              </div>
            </div>
            <div className="help__box">
              <div className="help__box__inner">
                <em className="help__box-icon"></em>
                <strong className="help__box-title">
                  {t("contactUsPage.sendEmail.title")}
                </strong>
                <p className="help__box-desc">
                  {t("contactUsPage.sendEmail.description")}
                </p>
                <a className="help__box-link" href="mailto:hello@paxform.com">
                  {t("contactUsPage.sendEmail.linkText")} <ArrowRight />
                </a>
              </div>
            </div>
            <div className="help__box">
              <div className="help__box__inner">
                <em className="help__box-icon"></em>
                <strong className="help__box-title">
                  {t("contactUsPage.callUs.title", { callNumber: callNumber })}
                </strong>
                <p className="help__box-desc">
                  {t("contactUsPage.callUs.description")}
                </p>
                <a className="help__box-link" href="tel:+611300181345">
                  {t("contactUsPage.callUs.linkText")} <ArrowRight />
                </a>
              </div>
            </div>
            <div className="help__box">
              <div className="help__box__inner">
                <strong className="help__box-title">
                  {t("contactUsPage.chatWithSpecialist.title")}
                </strong>
                <p className="help__box-desc">
                  {t("contactUsPage.chatWithSpecialist.description")}
                </p>
                <a
                  id="chat_now"
                  className="help__box-link"
                  href="#chat_now"
                  onClick={handleChatNowClick}
                >
                  {t("contactUsPage.chatWithSpecialist.linkText")}{" "}
                  <ArrowRight />
                </a>
              </div>
            </div>

            <div className="help__box">
              <div className="help__box__inner">
                <em className="help__box-icon"></em>
                <strong className="help__box-title">
                  {t("contactUsPage.bookMeeting.title", { callNumber: callNumber })}
                </strong>
                <p className="help__box-desc">
                  {t("contactUsPage.bookMeeting.description")}
                </p>
                <a className="help__box-link" href="https://dealfollow.com/meet/catherine">
                  {t("contactUsPage.bookMeeting.linkText")} <ArrowRight />
                </a>
              </div>
            </div>

            <div className="help__box">
              <div className="help__box__inner">
                <em className="help__box-icon"></em>
                <strong className="help__box-title">
                  {t("contactUsPage.bookDemo.title", { callNumber: callNumber })}
                </strong>
                <p className="help__box-desc">
                  {t("contactUsPage.bookDemo.description")}
                </p>
                <a className="help__box-link" href="https://dealfollow.com/meet/Jehaiakim">
                  {t("contactUsPage.bookDemo.linkText")} <ArrowRight />
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

const ContactForm = () => {
  const { t } = useTranslation();
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
    e.target.style.height = e.target.scrollHeight + "px";
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
          <strong>{t("fullName")}</strong>
          <input
            type="text"
            placeholder={t("fullName")}
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
          <strong>{t("workEmail")}</strong>
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
          <strong>{t("companyName")}</strong>
          <input
            type="text"
            placeholder={t("companyName")}
            onChange={(e) => setCompanyName(e.target.value)}
            value={companyName}
          />
        </label>
        <label>
          <strong>{t("companySize")}</strong>
          <select
            onChange={(e) => setCompanySize(e.target.value)}
            defaultValue={companySize}
          >
            <option value="" disabled>
              {t("selectARangeOfEmployees")}
            </option>
            <option value="1 - 9">1 - 9</option>
            <option value="10 - 99">10 - 99</option>
            <option value="100 - 999">100 - 999</option>
            <option value="1000 and Over">1000 and Over</option>
          </select>
        </label>
        <label>
          <strong>{t("message")}</strong>
          <textarea
            placeholder={t("message")}
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
          <h1>{t("contactUsPage.contactForm.messageTitle")}</h1>
          <p>{t("contactUsPage.contactForm.message")}</p>
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

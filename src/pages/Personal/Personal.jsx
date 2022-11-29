import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import fillOutForm from '../../assets/images/fill-out-form.svg'
import './Personal.scss';

import personelHero from '../../assets/images/personal-hero.svg';
import featuresImg from '../../assets/images/feature-organisation.svg';

const features = [
  {
    title: 'Create Form Templates',
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't",
    isOpened: true,
  },
  {
    title: 'Multiple Admins',
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't",
    isOpened: false,
  },
  {
    title: 'View and Procees Applications',
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't",
    isOpened: false,
  },
  {
    title: 'Use API',
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't",
    isOpened: false,
  },
  {
    title: 'Request Information',
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't",
    isOpened: false,
  },

];

export default class Personal extends Component {
  componentDidMount() {
    const panel = document.querySelector('.features__accordion-item-panel');
    panel.style.maxHeight = panel.scrollHeight + "px";
  }

  render() {
    return (
      <main className='personal'>
        <section className="hero">
          <div className='container hero__wrapper'>
            <div className='hero__content'>
              <p className='hero__name'>PERSONAL</p>
              <h1 className='hero__title'>Your Personal Information in One Place Fill Any Form, Anywhere</h1>
              <p className='hero__description'>Paxform’s function is simple: it completely fills any form, anytime. You can manage and save your personal data, allowing you to sign documents and send them to organisations with ease. No need to worry about security and privacy—Paxform fully encrypts your data to ensure your safety.</p>
              <div className="hero__button">
                <Button text="See Plan" type="flat arrow" color="white" />
                <Button text="How it works" type="outline triangle-right" color="white" />
              </div>

            </div>
            <div className="hero__image">
              <img src={personelHero} alt="personal hero" className='hero__image-large' />
            </div>
          </div>
          <div className="bottom_triangle bottom_triangle--light-green"></div>
        </section>

        <section className="flex_box">
          <div className="container flex_box__container">
            <div className="flex_box__image">
              <img src={fillOutForm} alt="filling out the forms" />
            </div>
            <div className="flex_box__content">
              <h1 className="flex_box__content-title">Repeatedly Filling Out Forms with the Same Data Requirements?</h1>
              <div className="flex_box__content-description">Save precious time by having all your information on demand. Autocomplete forms and applications on the go. Only fill in your data once.</div>
            </div>
          </div>

          <div className="bottom_triangle bottom_triangle--green"></div>
        </section>

        <section className='features'>
          <div className="container">
            <h1 className="features__title">Features For Your Organisation</h1>
            <div className="features__container">

              <div className="features__accordion">
                {features.map((feature, index) => (
                  <div className="features__accordion-item" key={index}>
                    <h2 className='features__accordion-item-title' onClick={(e) => {
                      const panel = e.target.nextElementSibling;

                      if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                      } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                      }

                      document.querySelectorAll('.features__accordion-item').forEach((item) => {
                        if (item !== e.target.parentElement) {
                          item.lastChild.style.maxHeight = null;
                        }
                      });

                    }}>{feature.title}</h2>
                    <div className={`features__accordion-item-panel ${feature.isOpened ? 'features__accordion-item-panel--opened' : ''}`}>
                      <div className='features__accordion-item-description'><p>{feature.description}</p></div>
                    </div>
                  </div>
                ))}

              </div>
              <div className="features__image">
                <img src={featuresImg} alt="forms from Paxform" />
              </div>
            </div>
          </div>

          <div className="bottom_triangle bottom_triangle--white"></div>
        </section>
      </main>
    )
  }
}

import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import fillOutForm from '../../assets/images/fill-out-form.svg'
import './Personal.scss';

import personelHero from '../../assets/images/personal-hero.svg'

export default class Personal extends Component {
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

          <div className="bottom_triangle bottom_triangle--light-green"></div>
        </section>
      </main>
    )
  }
}

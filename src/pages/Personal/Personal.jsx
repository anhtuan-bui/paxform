import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import './Personal.scss';

import personelHero from '../../assets/images/personal-hero.svg'

export default class Personal extends Component {
  render() {
    return (
      <main>
        <section className="hero">
                    <div className='container hero__wrapper'>
                        <div className='hero__content'>
                            <h1 className='hero__title'>Forms<br /> without forms.</h1>
                            <p className='hero__description'>Paxform allows users to securely save and manage their personal data for immediate reference, enabling them to easily sign documents and share information with others.</p>
                            <div className="hero__button">
                                <Button text="See Plan" type="flat arrow" color="white" />
                                <Button text="How it works" type="outline triangle-right" color="white" />
                            </div>

                        </div>
                        <div className="hero__image">
                            <img src={personelHero} alt="personal hero" className='hero__image-large' />
                            {/* <CertificateIllustrator className='hero__image-ci' /> */}
                        </div>
                    </div>
                    <div className="bottom_triangle"></div>
                </section>
      </main>
    )
  }
}

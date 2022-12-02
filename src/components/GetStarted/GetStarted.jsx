import React, { Component, Fragment } from 'react';
import './GetStarted.scss';

import googlePlay from '../../assets/images/google-play.svg';
import appstore from '../../assets/images/appstore.svg';
import getStarted from '../../assets/images/get-started.svg';

import alwaysKnows from '../../assets/images/always-know.svg';
import startIntegration from '../../assets/images/start-integration.svg';
import Button from '../Button/Button';

import { ReactComponent as ArrowRight } from '../../assets/images/arrow-right.svg';

export default class GetStarted extends Component {
    render() {
        return (
            <Fragment>
                <section className='get_started'>
                    <div className="container get_started__container">
                        <div className="get_started__content">
                            <h1>Get started for free. <br />
                                Download from your app store.</h1>
                            <div className="get_started__buttons">
                                <img src={googlePlay} alt="google play" />
                                <img src={appstore} alt="app store" />
                            </div>
                        </div>
                        <div className="get_started__image">
                            <img src={getStarted} alt="get started" />
                        </div>
                    </div>
                </section>

                <section className="love_to_hear">
                    <div className="container love_to_hear__container">

                        {/* <div className="love_to_hear__box-left"> */}
                            <div className="love_to_hear__box-left-item">
                                <div className="love_to_hear__box-left-item-image">

                                    <img src={alwaysKnows} alt="always know" />
                                </div>
                                <h3>Always know what you pay</h3>
                                <p>Experience a new level of convenience by using your stored signatures to electronically sign your documents.</p>
                                <a href="https://">
                                    <span className='span--hover'>Learn more</span><ArrowRight />
                                </a>
                            </div>
                            <div className="love_to_hear__box-left-item">
                                <div className="love_to_hear__box-left-item-image">

                                    <img src={startIntegration} alt="start integration" />
                                </div>
                                <h3>Start your integration</h3>
                                <p>Experience a new level of convenience by using your stored signatures to electronically sign your documents.</p>
                                <a href="https://">
                                    <span className='span--hover'>Learn more</span><ArrowRight />
                                </a>
                            </div>
                        {/* </div> */}
                        <div className="love_to_hear__box-right">
                            <h1>We’d love to hear from you!</h1>
                            <p>Explore Stripe Payments, or create an account instantly and start accepting payments. You can also contact us to design a custom package for your business.</p>

                            <p>Explore Stripe Payments, or create an account instantly and start accepting payments.</p>

                            <Button type="outline arrow" text="Contact Us" />
                        </div>
                    </div>

                    <div className="bottom_triangle bottom_triangle--footer"></div>
                </section>
            </Fragment>
        )
    }
}

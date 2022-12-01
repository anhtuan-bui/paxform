import React, { Component, Fragment, useRef } from 'react';
import './Testimonial.scss';

import arrowLeft from '../../assets/images/left.svg';
import arrowRight from '../../assets/images/right.svg';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { SCREEN_SIZE } from '../../configurations/configurations';


var home = {
    numberOfComapniesPerView: 5,
    numberOftestimonialsPerView: 3,
    autoplaySpeed: 4000
}

const API_URL = process.env.REACT_APP_API_URL;
export default class Testimonial extends Component {
    testimonials = [];

    constructor(props){
        super(props);

        this.state = null;
    }

    async componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
        this.testimonials = await this.getTestimonials();
        this.setState(this.testimonials);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= SCREEN_SIZE.large) {
            home = {
                numberOfComapniesPerView: 5,
                numberOftestimonialsPerView: 3,
            }
        } else if (screenWidth < SCREEN_SIZE.large && screenWidth >= SCREEN_SIZE.medium) {
            home = {
                numberOfComapniesPerView: 4,
                numberOftestimonialsPerView: 2,
            }
        } else if (screenWidth < SCREEN_SIZE.medium && screenWidth >= SCREEN_SIZE.small) {
            home = {
                numberOfComapniesPerView: 3,
                numberOftestimonialsPerView: 2,
            }
        } else if (screenWidth < SCREEN_SIZE.small) {
            home = {
                numberOfComapniesPerView: 2,
                numberOftestimonialsPerView: 1,
            }
        }
        this.setState(home);
    }

    async getTestimonials() {
        const response = await fetch(API_URL + 'testimonials2');
        return await response.json();
    }

    render() {
        return (
            <Fragment >
                <TestimonialSwiper values={this.testimonials} />
            </Fragment>
        )
    }
}

const TestimonialSwiper = (data) => {
    const swiperRef = useRef();

    const testimonials = data.values;

    return (
        <div className="container testimonial__container">
            <p className="testimonial__name">TESTIMONIAL</p>
            <h2 className="testimonial__title">What people are saying about Paxform</h2>
            <div className="testimonial__swiper">

                <Swiper
                    slidesPerView={home.numberOftestimonialsPerView}
                    spaceBetween={24}
                    slidesPerGroup={home.numberOftestimonialsPerView}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    autoHeight={false}
                    pagination={{
                        clickable: true,
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="testimonial__slider"
                >
                    {testimonials.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="testimonial_card">
                                    <div className="testimonial_card__description" dangerouslySetInnerHTML={{ __html: item.content.rendered }}></div>
                                    <div className="testimonial_card__name-box">
                                        <h3 className="testimonial_card__name">{item.title.rendered}</h3>
                                        <p className="testimonial_card__position">{item.acf.client_bio}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
                <div className="slider__buttons--left">
                    <button onClick={() => swiperRef.current?.slidePrev()}>
                        <img src={arrowLeft} alt="arrow left" />
                    </button>
                </div>
                <div className="slider__buttons--right">
                    <button onClick={() => swiperRef.current?.slideNext()}>
                        <img src={arrowRight} alt="arrow right" />
                    </button>
                </div>
            </div>
        </div>
    )
}
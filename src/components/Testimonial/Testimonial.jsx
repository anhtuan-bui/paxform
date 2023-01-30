import React, { Component, useRef } from "react";
import "./Testimonial.scss";

import arrowLeft from "../../assets/images/left.svg";
import arrowRight from "../../assets/images/right.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { SCREEN_SIZE } from "../../configurations/configurations";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import { gql, useQuery } from "@apollo/client";

const GetAllTestimonials = gql`
  query GetAllTestimonials {
    testimonials {
      nodes {
        title
        content
        position
      }
    }
  }
`;

var home = {
  numberOftestimonialsPerView: 3,
  autoplaySpeed: 4000,
};

export default class Testimonial extends Component {
  testimonials = [];

  constructor(props) {
    super(props);

    this.state = null;
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);

    this.setState(this.testimonials);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= SCREEN_SIZE.large) {
      home = {
        numberOftestimonialsPerView: 3,
      };
    } else if (
      screenWidth < SCREEN_SIZE.large &&
      screenWidth >= SCREEN_SIZE.medium
    ) {
      home = {
        numberOftestimonialsPerView: 2,
      };
    } else if (
      screenWidth < SCREEN_SIZE.medium &&
      screenWidth >= SCREEN_SIZE.small
    ) {
      home = {
        numberOftestimonialsPerView: 2,
      };
    } else if (screenWidth < SCREEN_SIZE.small) {
      home = {
        numberOftestimonialsPerView: 1,
      };
    }
    this.setState(home);
  };

  render() {
    return <TestimonialSwiper values={this.testimonials} />;
  }
}

const TestimonialSwiper = (value) => {
  const swiperRef = useRef();

  const { loading, error, data } = useQuery(GetAllTestimonials);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>
  }
  const testimonials = data.testimonials.nodes;

  // console.log(testimonials)

  return (
    <div className="container">
      <div className="testimonial__container">
        <p className="testimonial__name section_name">TESTIMONIAL</p>
        <h2 className="testimonial__title">
          What people are saying about Paxform
        </h2>
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
                    <div
                      className="testimonial_card__description"
                      dangerouslySetInnerHTML={{
                        __html: item.content,
                      }}
                    ></div>
                    <div className="testimonial_card__name-box">
                      <h3 className="testimonial_card__name">
                        {item.title}
                      </h3>
                      <p className="testimonial_card__position">
                        {item.position}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
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
    </div>
  );
};

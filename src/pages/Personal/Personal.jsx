import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import fillOutForm from '../../assets/images/fill-out-form.svg'
import './Personal.scss';

import personelHero from '../../assets/images/personal-hero.svg';
import featuresImg from '../../assets/images/feature-organisation.svg';
import { ReactComponent as Tick } from '../../assets/images/tick.svg';
import Testimonial from '../../components/Testimonial/Testimonial';

import icon21 from '../../assets/images/icon2-1.svg';
import icon22 from '../../assets/images/icon2-2.svg';
import icon23 from '../../assets/images/icon2-3.svg';
import icon24 from '../../assets/images/icon2-4.svg';
import icon25 from '../../assets/images/icon2-5.svg';

const features = [
  {
    title: 'Create Form Templates',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    isOpened: true,
  },
  {
    title: 'Multiple Admins',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isOpened: false,
  },
  {
    title: 'View and Procees Applications',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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


const personalPlatform = [
  {
    image: icon21,
    title: 'Capture, save and use personal information to complete forms and applications',
    description: 'The personal data you submit is captured after one use and stored safely in the app for future use—any time, any form. New information is saved automatically as you complete each form.'
  },
  {
    image: icon22,
    title: 'Share forms and applications with other parties and organizations',
    description: 'Receive auto-completed electronic forms the moment your customer shares it with your organization - No more waiting for hard copies to arrive because Paxform eliminates.'
  },
  {
    image: icon23,
    title: 'Complete simple and complex forms',
    description: 'Forms are a tedious, time-consuming task. With Paxform, even those forms that want to know everything about you are completed in an instant.'
  },
  {
    image: icon24,
    title: "Link your family's data",
    description: 'The personal data you submit is captured after one use and stored safely in the app for future use—any time, any form. New information is saved automatically as you complete each form.'
  },
  {
    image: icon25,
    title: 'Electronically sign documents',
    description: 'Experience a new level of convenience by using your stored signatures to electronically sign your documents.'
  },
]

export default class Personal extends Component {
  position = { top: 0, left: 0, x: 0, y: 0 };


  constructor(props) {
    super(props);
    this.state = this.position;

    this.descriptionHandler = this.descriptionHandler.bind(this);
  }

  componentDidMount() {
    const panel = document.querySelector('.features__accordion-item-panel');
    panel.style.maxHeight = panel.scrollHeight + "px";
  }

  descriptionHandler = (e) => {
    const descriptions = document.querySelectorAll('.features__accordion-item-description');

    descriptions.forEach(description => {
      if (e.target.parentElement === description) {
        this.position = {
          left: description.scrollLeft,
          top: description.scrollTop,
          x: e.clientX,
          y: e.clientY,
        };

        this.setState(this.position);

        description.style.cursor = 'grabbing';
        description.style.userSelect = 'none';


        const mouseMoveHandler = (e) => {
          const dx = e.clientX - this.state.x;
          description.scrollLeft = this.state.left - dx;
        }

        const mouseUpHandler = () => {
          document.removeEventListener('mousemove', mouseMoveHandler);
          document.removeEventListener('mousedown', this.descriptionHandler);
          document.removeEventListener('mouseup', mouseUpHandler);

          e.target.style.cursor = 'grab';
          e.target.style.removeProperty('user-select');
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
      }
    });
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
                    <div className={`features__accordion-item-panel`}>
                      <div className='features__accordion-item-description' key={`description-${index}`} >
                        <p onMouseDown={(e) => this.descriptionHandler(e)}>{feature.description}</p>
                      </div>
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

        <section className="plans">
          <div className="container plans__container">
            <p className='plans__name section_name'>PERSONAL PLANS</p>
            <h1 className="plans__title section_title">Choose a Plan That’s Right for You</h1>
            <div className="plans__pricing">
              <div className="pricing_box pricing_box--grey">
                <div className="pricing_box__top">

                  <div className="pricing_box__dot"></div>
                  <h2 className="pricing_box__title">Free</h2>
                  <p className="pricing_box__description">A simple way to get started for you new to passfolio.</p>
                  <div className="pricing_box__price"><span className='pricing_box__price-bt'>$0</span><span>/forever</span></div>
                  <Button text="Get Started" type="outline arrow" color="green" />
                </div>
                <p className='pricing_box__price-sub'>What’s included</p>
                <ul>
                  <li>
                    <Tick />
                    <span>Unlimited data</span>
                  </li>
                  <li>
                    <Tick />
                    <span>5 Person saved</span>
                  </li>
                  <li>
                    <Tick />
                    <span>A simple way for you new started to Passfolio.</span>
                  </li>
                </ul>
              </div>

              <div className="pricing_box pricing_box--green">
                <div className="pricing_box__top">
                  <div className="pricing_box__dot pricing_box__dot--green"></div>
                  <h2 className="pricing_box__title">Premium</h2>
                  <p className="pricing_box__description">Best for freelance coders & designers who need.</p>
                  <div className="pricing_box__price"><span className='pricing_box__price-bt'>$50</span><span>/forever</span></div>
                  <Button text="Get Started" type="flat arrow" color="white" />
                </div>
                <p className='pricing_box__price-sub'>What’s included</p>
                <ul>
                  <li>
                    <Tick />
                    <span>Unlimited data</span>
                  </li>
                  <li>
                    <Tick />
                    <span>5 Person saved</span>
                  </li>
                  <li>
                    <Tick />
                    <span>A simple way for you new started to Passfolio.</span>
                  </li>
                  <li>
                    <Tick />
                    <span>A simple way for you new started to Passfolio.</span>
                  </li>
                </ul>
              </div>

              <div className="pricing_box pricing_box--blue">
                <div className="pricing_box__top">
                  <div className="pricing_box__dot pricing_box__dot--blue"></div>
                  <h2 className="pricing_box__title">Family</h2>
                  <p className="pricing_box__description">Best for freelance coders & designers who need.</p>
                  <div className="pricing_box__price"><span className='pricing_box__price-bt'>Custom Pricing</span></div>
                  <Button text="Get Started" type="outline arrow" color="green" />
                </div>
                <p className='pricing_box__price-sub'>What’s included</p>
                <ul>
                  <li>
                    <Tick />
                    <span>Unlimited data</span>
                  </li>
                  <li>
                    <Tick />
                    <span>5 Person saved</span>
                  </li>
                  <li>
                    <Tick />
                    <span>A simple way for you new started to Passfolio.</span>
                  </li>
                </ul>
              </div>
            </div>
            <Button className="plans__button" text="See full pricing" type="arrow outline" color="green" />
          </div>
        </section>
        <section className="testimonial">

          <Testimonial />
          <div className="bottom_triangle bottom_triangle--dark-blue"></div>
        </section>

        <section className="platform background--dark-blue platform__title--white">
          <div className="container platform__container">
            <div className="platform__top">
              <div className="platform__top-left">

                <p className="platform__name platform__name--green">PERSONAL PLATFORM</p>
                <h2 className='platform__title '>Your personal information at your fingertips</h2>
              </div>
              <div className="platform__top-right">
                <Button type="outline arrow" text="Learn more about Business" />
              </div>

            </div>
            <div className="personal_platform__content">
              <div className="business_platform__content-grid">
                {personalPlatform.map((item, index) => {
                  return (
                    <div className="personal_platform__content-item" key={index}>
                      <div className="personal_platform__content-item-image">

                        <img src={item.image} alt="icon" />
                      </div>
                      <h3 className="personal_platform__content-item-title">{item.title}</h3>
                      <p className="personal_platform__content-item-description">{item.description}</p>
                    </div>
                  )
                })}
                <div className="personal_platform__image">
                </div>
              </div>
            </div>
          </div>

          <div className="bottom_triangle bottom_triangle--light-blue"></div>

        </section>
      </main>
    )
  }
}

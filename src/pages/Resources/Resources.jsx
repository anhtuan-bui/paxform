import React, { Component } from 'react';
import ResourceCard from '../../components/ResourceCard/ResourceCard';
import './Resources.scss';

// import graphic from '../../assets/images/Graphics.svg';

export default class Resources extends Component {
    render() {
        return (
            <main className='resources'>
                <section className="hero">
                    <div className='container hero__wrapper'>
                        <div className='hero__content'>
                            <p className='hero__name'>Paxform Resources</p>
                            <h1 className='hero__title'>Guides and resources</h1>
                            <p className='hero__description'>Paxform will never share your data with anyone. What’s more, no one at Paxform can view or access your information.</p>
                            

                        </div>
                        <div className="hero__articles">
                            <div className="hero__articles-grid">

                                <ResourceCard/>
                                <ResourceCard/>
                                <ResourceCard/>
                                <ResourceCard/>

                            </div>
                            <div className="hero__articles-graphic">
                                {/* <img src={graphic} alt="illustrator graphic" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="bottom_triangle bottom_triangle--light-green"></div>
                </section>
            </main>
        )
    }
}

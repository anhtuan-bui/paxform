/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { useEffect } from 'react';
import './BlogDetails.scss';
import RelatedCard from '../../components/RelatedCard/RelatedCard';
import SectionTriangleRight from "../../components/SectionTriangleRight/SectionTriangleRight";
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import LatestBlogs from "../../components/LatestBlogs/LatestBlogs"
import CardResource1 from "../../assets/images/card-resource-1.png";
import CardResource3 from "../../assets/images/card-resource-3.png";
import Card2 from "../../assets/images/card2.png";
// import Video from "https://www.youtube.com/embed/tgbNymZ7vqY";
import SampleAuthorAvatar from "../../assets/images/sample-author-avatar.png";

const BlogDetails = () => {

    let [smallerImage, setSmallerImage] = useState("");
    const smallImage = () => {
        if (window.innerWidth >= 768) {
            setSmallerImage("related_card__image--smaller")
        } else {
            setSmallerImage("");
        }
    }

    useEffect(() => {
        smallImage()
        window.addEventListener('resize', smallImage);
        return () => {
            window.removeEventListener("resize", smallImage)
        }
    });

    return (
        <main>
            <div className="container hero" background="light">
                <div className="wrapper">
                    <section className="article_info">
                        <div className="article_info__date section_name">December 25, 2021</div>
                        <h1 className="article_info__title">How FedRAMP Tailored helps quickly obtain cloud-based services</h1>
                        <img className="article_info__img" src={Card2} alt="Article"></img>
                        <h2>The printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy the 1500s</h2>
                    </section>
                    <div className="author">
                        <div className="author__wrapper">
                            <img className="author__photo" src={SampleAuthorAvatar} alt="Author Avatar" />
                            <div className="author__info">
                                <div className="author__name">Jane Cooper</div>
                                <div className="author__title">Marketing</div>
                            </div>
                        </div>
                    </div>
                    <article className="article">
                        <div className="article__snippet">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus .
                        </div>
                        <div className="quote">
                            <blockquote className="quote__text">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                            </blockquote>
                        </div>
                        <div className="article__snippet">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus .
                        </div>
                        <iframe title="Article Video" className="article__video"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                        <div className="article__snippet">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique, lorem in accumsan molestie, tellus quam lobortis arcu, in lacinia metus magna vitae nunc. Quisque scelerisque turpis dolor, id auctor nulla condimentum id. Maecenas luctus cursus tortor, in vestibulum nisl congue sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Aenean ornare magna at urna porttitor, eget dapibus quam convallis. Nam tincidunt pellentesque pharetra. Proin tincidunt velit non mauris semper porttitor. Nam nec sollicitudin leo. Curabitur tempor sed quam eget hendrerit. In consequat dolor at dui pharetra bibendum. Etiam ullamcorper feugiat mauris id pulvinar. Donec maximus lectus mauris, sit amet placerat mauris gravida sit amet. Nam elementum turpis a mi tincidunt, nec accumsan ipsum bibendum. Phasellus malesuada viverra quam eu laoreet. Curabitur non aliquet odio, et malesuada lorem.
                        </div>
                        <hr className="hr"/>
                    </article>
                    <SocialIcons />
                    <section className="recommended">   
                        <p className="recommended__title section_name"></p>
                        <div className="recommended_container">
                            <div className="recommended__article">
                                <RelatedCard className={smallerImage} image={CardResource3} title="First Heading" description readLink />
                            </div>
                            <div className="recommended__article">   
                                <RelatedCard image={CardResource1} title="Third Heading" description readLink />    
                            </div>
                        </div>
                    </section>
                </div>            
            </div>
            <div className="blogs">
                <SectionTriangleRight variant="dark-blue" />
                <LatestBlogs triangleColor="light-blue" />
            </div>
            <div className="footer_triangle">
                <SectionTriangleRight variant="light-blue" />
            </div>      
        </main>
    )
}

export default BlogDetails;
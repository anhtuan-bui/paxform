import React, { Component } from 'react';
import ReadArticle from '../ReadArticle/ReadArticle';
import './RelatedCard.scss';

export default class RelatedCard extends Component {
    render() {
        return (
            <div className="related_card">
                <div className="related_card__top">

                    {this.props.image &&
                        <div className="related_card__image">
                            <img src={this.props.image} alt="first story" />
                        </div>
                    }
                    {
                        this.props.title &&
                        <h2 className='related_card__title'>First Story</h2>
                    }
                    {
                        this.props.description && <p className="related_card__description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour...</p>
                    }
                </div>
                <div className="related_card__bottom">
                    {
                        this.props.readLink &&
                        <ReadArticle to="related" />
                    }
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import './ResourceCard.scss';

import resourceCard1 from '../../assets/images/card-resource-1.png';

import Button from '../Button/Button';

export default class ResourceCard extends Component {
  render() {
    return (
      <div className={`resource_card ${this.props.className ? this.props.className : ''}`}>

        <div className="resource_card__background">
          <img src={resourceCard1} alt="resource card" />
        </div>

        <div className={`resource_card__content-overlay ${this.props.overlay !== undefined ? `resource_card__content-overlay--${this.props.overlay}` : ''}`}></div>
        <div className='resource_card__content'>

          <h2 className="resource_card__content-title">There are many variations of passages</h2>
          <div className="resource_card__content-button">
            <Button type="flat arrow" text="Read Article" />

          </div>
        </div>
      </div>
    )
  }
}

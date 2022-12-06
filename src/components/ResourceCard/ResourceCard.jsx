import React, { Component } from 'react';
import './ResourceCard.scss';

import resourceCard1 from '../../assets/images/card-resource-1.png';

import Button from '../Button/Button';

export default class ResourceCard extends Component {
  render() {
    return (
      <div className='resource_card'>
        <div className="resource_card__background">
            <img src={resourceCard1} alt="resource card 1" />
        </div>
        <div className="resource_card__content">
            <h2 className="resource_card__content-title">There are many variations of passages</h2>
            <Button type="flat arrow" text="Read Article"/>
        </div>
      </div>
    )
  }
}

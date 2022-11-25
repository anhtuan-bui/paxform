import React, { Component } from 'react';
import { ReactComponent as ArrowRight } from '../../assets/images/arrow-right.svg';
import './Button.scss';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        }
    }
    render() {
        return (
            <button className='button button--outline'>
                <span className='button__text'>{this.props.text}</span>
                {this.props.type === 'arrow' && <ArrowRight />}
            </button>
        )
    }
}

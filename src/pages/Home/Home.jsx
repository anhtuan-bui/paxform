import React, { Component } from 'react';
import Header from '../../components/Header/Header';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = this.json;
    }

    render() {
        return (
            <div className='home'>
                <Header/>
            </div>
        )
    }
}

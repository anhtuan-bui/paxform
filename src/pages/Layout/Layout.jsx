import React, { Component, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/FooterV1/FooterV1';
import Header from '../../components/Header/Header';

import './Layout.scss';


export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Outlet />
                <Footer />
                <div className="stripe_layout container">
                    <div className="stripe_layout__item"></div>
                    <div className="stripe_layout__item"></div>
                    <div className="stripe_layout__item"></div>
                    <div className="stripe_layout__item"></div>
                </div>
            </Fragment>
        )
    }
}

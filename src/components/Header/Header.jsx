import React, { Component } from 'react';
import Button from '../Button/Button';
import { ReactComponent as Logo } from '../../assets/images/LOGO.svg';
import { ReactComponent as ArrowRight } from '../../assets/images/arrow-right.svg';

import './Header.scss';

const menu = [
    {
        text: 'Business',
        link: 'https://',
        submenu: []
    },
    {
        text: 'Personal',
        link: 'https://',
        submenu: []
    },
    {
        text: 'Pricing',
        link: 'https://',
        submenu: []
    },
    {
        text: 'Use Cases',
        link: 'https://',
        submenu: [
            {
                text: 'Marketing',
                link: 'https://',
            }
        ]
    },
    {
        text: 'Resources',
        link: 'https://',
        submenu: []
    },
]

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className="container header__container">
                    <div className="logo">
                        <Logo />
                    </div>
                    <div className="header--right">
                        <nav className='nav'>
                            <ul className='nav__firstlevel'>
                                {menu.map((item, index) => {
                                    return (
                                        <li>
                                            <a href={item.link}>
                                                <span className='span__hover'>{item.text}</span>
                                                {item.submenu.length > 0 && <ArrowRight />}
                                            </a>
                                        </li>
                                    )
                                })}

                            </ul>
                        </nav>
                        <div className="button__wrapper">
                            <Button type="arrow" text="Sign Up" />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

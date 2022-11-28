import React, { Component } from 'react';
import Button from '../Button/Button';
import { ReactComponent as Logo } from '../../assets/images/LOGO.svg';
import { ReactComponent as ArrowRight } from '../../assets/images/arrow-right.svg';
import { ReactComponent as Education } from '../../assets/images/education.svg';
import { ReactComponent as Hospitality } from '../../assets/images/hospitality.svg';
import { ReactComponent as Medical } from '../../assets/images/medical care.svg';
import { ReactComponent as Retail } from '../../assets/images/retail.svg';

import './Header.scss';

import { SCREEN_SIZE } from '../../configurations/configurations';

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
                text: 'Education',
                description: 'Lorem Ipsum is simply dummy text',
                link: 'https://',
                image: <Education />
            },
            {
                text: 'Hospitality',
                description: 'Lorem Ipsum is simply dummy text',
                link: 'https://',
                image: <Hospitality />
            },
            {
                text: 'Medical Care',
                description: 'Lorem Ipsum is simply dummy text',
                link: 'https://',
                image: <Medical />
            },
            {
                text: 'Retail',
                description: 'Lorem Ipsum is simply dummy text',
                link: 'https://',
                image: <Retail />
            },
        ]
    },
    {
        text: 'Resources',
        link: 'https://',
        submenu: []
    },
]

export default class Header extends Component {
    app = {
        width: 1440,
        hamburgerIsOpen: false,
    };

    constructor(props) {
        super(props);

        this.state = this.app;

        this.clickHamburger = this.clickHamburger.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {

        this.handleResize();
        window.addEventListener('resize', this.handleResize);

        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);

        window.addEventListener('click', (e) => this.handleClickOutsideHamburger(e));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('click', (e) => this.handleClickOutsideHamburger(e));
    }

    clickHamburger() {
        this.app.hamburgerIsOpen = !this.app.hamburgerIsOpen;
        this.handleHamburger();
        this.setState(this.app)
    }

    handleClickOutsideHamburger(e) {
        if (this.state.hamburgerIsOpen === true
            && !e.target.classList.contains('nav')
            && !e.target.classList.contains('nav__second-level-li-description')
            && e.target.getAttribute('name') !== 'hamburger' && e.target.tagName !== 'BUTTON' && e.target.tagName !== 'SPAN' && e.target.tagName !== 'A') {
            this.app.hamburgerIsOpen = false;
            this.handleHamburger();
        }
        this.setState(this.app);
    }

    handleHamburger() {
        const headerRight = document.querySelector('.header_right');
        const hamburger = document.querySelector('.hamburger');
        if (this.app.hamburgerIsOpen) {
            headerRight.classList.add('header_right--active');
            hamburger.classList.add('active');
        } else {
            headerRight.classList.remove('header_right--active');
            hamburger.classList.remove('active');
        }
    }

    handleScroll() {
        const hamburgerLines = document.querySelectorAll('.hamburger__line');
        const header = document.querySelector('.header');
        if (window.scrollY >= 100) {
            header.classList.add('header--active');
            hamburgerLines.forEach((line) => {
                line.classList.add('hamburger__line--scrolled');
            });

            if (this.app.hamburgerIsOpen) {
                this.app.hamburgerIsOpen = false;
                this.handleHamburger();
            }
        } else {
            header.classList.remove('header--active');
            hamburgerLines.forEach((line) => {
                line.classList.remove('hamburger__line--scrolled');
            });
        }
        this.setState(this.app);
    }

    handleResize = () => {
        const hamburger = document.querySelector('.hamburger');
        const headerRight = document.querySelector('.header_right');
        this.app.width = window.innerWidth;
        if (this.app.hamburgerIsOpen) {
            this.app.hamburgerIsOpen = false;
            this.handleHamburger();
        }
        try {
            if (this.app.width <= SCREEN_SIZE.large) {
                hamburger.classList.add('hamburger--active');
                headerRight.classList.remove('header_right--active');
            } else {
                hamburger.classList.remove('hamburger--active');
                headerRight.classList.add('header_right--active');
            }
        } catch (e) {
            throw new Error(e);
        }
        this.setState(this.app);
    }

    clickLogo = () => {
        window.location.href = '/';
    }

    render() {
        return (
            <header className='header'>
                <div className="container header__container">
                    <div className="logo">
                        <Logo onClick={this.clickLogo} />
                    </div>

                    <div className="header_right__wrapper">

                        <div className="header_right header_right--active">
                            <nav className='nav'>
                                <ul className='nav__first-level'>
                                    {menu.map((item, index) => {
                                        return (
                                            <li key={index} className='nav__first-level-li'>
                                                <a
                                                    href={item.submenu.length > 0 ? '' : item.link}
                                                    className="nav__first-level-li-link"
                                                    onClick={item.submenu.length > 0 ? ((e) => e.preventDefault()) : undefined}
                                                >
                                                    <span className='span--hover'>{item.text}</span>
                                                    {item.submenu.length > 0 && <ArrowRight />}
                                                </a>
                                                {item.submenu.length > 0 &&

                                                    <ul className='nav__second-level'>
                                                        {item.submenu.map((subitem, index) => {
                                                            return (
                                                                <li key={index} className='nav__second-level-li'>
                                                                    {subitem.image}
                                                                    <div className="nav__second-level-li-text">
                                                                        <a href={subitem.link} className="nav__second-level-li-link">
                                                                            <span>{subitem.text}</span>
                                                                        </a>
                                                                        <p className='nav__second-level-li-description'>{subitem.description}</p>
                                                                    </div>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                }
                                            </li>
                                        )
                                    })}

                                </ul>
                            </nav>
                            <div className="button__wrapper">
                                <Button type="arrow outline" text="Sign Up" color="white" />
                            </div>
                        </div>
                        <div className="hamburger" name="hamburger" onClick={this.clickHamburger}>
                            <div className='hamburger__line' name="hamburger"></div>
                            <div className='hamburger__line hamburger__line--hidden' name="hamburger"></div>
                            <div className='hamburger__line' name="hamburger"></div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

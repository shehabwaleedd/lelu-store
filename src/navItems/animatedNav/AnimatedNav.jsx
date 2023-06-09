import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/lelulogo.png";
import './AnimatedNav.css';
import { useTranslation } from 'react-i18next';
import Toggle from '../darkmode/Toggle';
import { useUserAuth } from '../../Account/authContext/AuthContext';
import SecondNav from './secondNav/SecondNav';
import { useMediaQuery } from 'react-responsive';
import NavOverlay from './navOverlay/NavOverlay';
import LeftNavBar from './leftNavBar/LeftNavBar';
import RestNavBar from './restNavBar/RestNavBar';

const AnimatedNav = (Props) => {


    const [searchOpen, setSearchOpen] = React.useState(false);
    const isLargeScreen = useMediaQuery({ minWidth: 1881 });
    const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1279 });

    const logoStyles = {
        backgroundColor: Props.navOpen ? ' var(--container-color)' : ' var(--nav-overlay-color)',
        right: searchOpen ? '-8rem' : '-23rem',
        height: '4.5rem',
        top: '-0.5rem',
    };

    if (isLargeScreen) {
        logoStyles.backgroundColor = Props.navOpen ? ' var(--container-color)' : ' var(--nav-overlay-color)';
        logoStyles.right = searchOpen ? '-10rem' : '-34rem';
        logoStyles.height = '5.1rem';
        logoStyles.top = '-1rem';
    }

    if (isMediumScreen) {
        logoStyles.right = searchOpen ? '-8rem' : '-22rem';
        logoStyles.height = '7rem';
        logoStyles.top = '-1rem';
    }

    const handleToggleNav = () => {
        Props.setNavOpen(!Props.navOpen);
    };

    return (
        <>
            <nav className={Props.navOpen ? "nav spin" : "nav"}>
                <div className="nav__container">
                    <LeftNavBar navOpen={Props.navOpen} setNavOpen={Props.setNavOpen}/>
                    <div className="logo">
                        <Link to="/">
                            <div className="dash" style={logoStyles}></div>
                            <h1 className={Props.navOpen ? "logoTitle spin" : "logoTitle"}>LELU</h1>
                        </Link>
                    </div>
                    <RestNavBar navOpen={Props.navOpen} setNavOpen={Props.setNavOpen} searchOpen={searchOpen} setSearchOpen={setSearchOpen}/>
                </div>
            </nav>
            <NavOverlay navOpen={Props.navOpen} setNavOpen={Props.setNavOpen}/>
            <SecondNav navOpen={Props.navOpen} setNavOpen={Props.setNavOpen}/>
        </>
    );
};

export default AnimatedNav;

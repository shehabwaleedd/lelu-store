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

    const { t } = useTranslation();
    const logoStyles = {
        backgroundColor: Props.navOpen ? ' var(--container-color)' : ' var(--nav-overlay-color)',
        right: searchOpen ? Props.language === "AR" ? '-4.5em' : '-2.6rem' : Props.language === "AR" ? '-15.5em' : '-17.6rem',
        height: '4.5rem',
        top: '-0.5rem',
    };

    if (isLargeScreen) {
        logoStyles.backgroundColor = Props.navOpen ? ' var(--container-color)' : ' var(--nav-overlay-color)';
        logoStyles.right = searchOpen ? '-5rem' : '-31rem';
        logoStyles.height = '5rem';
        logoStyles.top = '-1rem';
    }

    if (isMediumScreen) {
        logoStyles.right = searchOpen ? '-8rem' : '-18rem';
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
                    <LeftNavBar navOpen={Props.navOpen} setNavOpen={Props.setNavOpen} searchOpen={searchOpen} setSearchOpen={setSearchOpen} open={Props.open} setOpen={Props.setOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded} />

                    <div className={Props.navOpen ? "logo spin" : "logo"}>
                        <Link to="/">
                            <div className="nav__dash" style={logoStyles}></div>
                            <h1 style={{ fontFamily: Props.language === "AR" ? "Aref Ruqaa" : "", letterSpacing: Props.language === "AR" ? "0" : "1rem" }}>{t("my__name")}</h1>
                        </Link>
                    </div>
                    <RestNavBar navOpen={Props.navOpen} setNavOpen={Props.setNavOpen} searchOpen={searchOpen} setSearchOpen={setSearchOpen} open={Props.open} setOpen={Props.setOpen} language={Props.language} setLanguage={Props.setLanguage} languageExpanded={Props.languageExpanded} setLanguageExpanded={Props.setLanguageExpanded} />
                </div>
            </nav>
            <NavOverlay navOpen={Props.navOpen} setNavOpen={Props.setNavOpen} />
            <SecondNav navOpen={Props.navOpen} setNavOpen={Props.setNavOpen} />
        </>
    );
};

export default AnimatedNav;

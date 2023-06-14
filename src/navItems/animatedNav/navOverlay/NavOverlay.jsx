/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NavOverlay.css'
import { useTranslation } from 'react-i18next';
import Data from './Data';

const NavOverlay = (Props) => {

    useEffect(() => {
        if (Props.navOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [Props.navOpen]);
    const { t } = useTranslation();
    return (
        <div className="nav-overlay" style={{
            top: Props.navOpen ? "0" : "-100%",
            transitionDelay: Props.navOpen ? "0s" : "0s"
        }}>
            <div className={Props.navOpen ? "nav-links spin" : "nav-links"}>
                {Data.map(({ id, title, path, img }) => (
                    <div className='menu' style={{ bottom: Props.navOpen ? "0" : "7.5rem", transitionDelay: Props.navOpen ? "0.7s" : "0s", opacity: Props.navOpen ? "1" : "0" }}>
                        <div className="menu__item" key={id}>
                            <Link to={path} onClick={() => Props.setNavOpen(!Props.navOpen)}>
                                <h1 className='menu__item-link' data-text={t(title)} style={{ top: Props.navOpen ? "0" : "7.5rem", transitionDelay: Props.navOpen ? "0.7s" : "0s", opacity: Props.navOpen ? "1" : "0" }}>
                                    {t(title)}
                                </h1>
                                <img className="menu__item-img" src={img} alt="Some image"/>
                                <div className="marquee">
                                    <div className="marquee__inner" aria-hidden="true">
                                        <span>{t(title)}</span>
                                        <span>{t(title)}</span>
                                        <span>{t(title)}</span>
                                        <span>{t(title)}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="nav-footer">
                <div className="location">
                    Cairo, Egypt.
                </div>
                <div className="nav-social-media">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/shehabwaleedd/" target="_blank" rel="noreferrer">FB</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/lelu_storee/" target="_blank" rel="noreferrer">IG</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavOverlay
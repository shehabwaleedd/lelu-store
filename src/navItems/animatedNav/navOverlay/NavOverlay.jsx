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
                {Data.map(({ id, title, path }) => (
                    <div className='menu-item-wrapper' style={{
                        bottom: Props.navOpen ? "0" : "7.5rem",
                        transitionDelay: Props.navOpen ? "0.7s" : "0s",
                        opacity: Props.navOpen ? "1" : "0"
                    }}>
                        <div className="nav-item" key={id}>
                            <Link to={path} onClick={() => Props.setNavOpen(!Props.navOpen)}>
                                <h1 data-text={t(title)} style={{
                                    top: Props.navOpen ? "0" : "7.5rem",
                                    transitionDelay: Props.navOpen ? "0.7s" : "0s",
                                    opacity: Props.navOpen ? "1" : "0"
                                }}>
                                    {t(title)}
                                </h1>
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
                            <a href="https://www.linkedin.com/in/shehabwaleedd/" target="_blank" rel="noreferrer">LI</a>
                        </li>
                        <li>
                            <a href="https://github.com/shehabwaleedd" target="_blank" rel="noreferrer">GH</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/shehabwaleedd/" target="_blank" rel="noreferrer">IG</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavOverlay
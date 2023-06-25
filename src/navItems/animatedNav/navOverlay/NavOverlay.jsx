import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavOverlay.css';
import { useTranslation } from 'react-i18next';
import Data from './Data';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

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
        <div
            className="nav-overlay"
            style={{
                top: Props.navOpen ? '0' : '-100%',
                transitionDelay: Props.navOpen ? '0s' : '0s',
            }}
        >
            <div className={Props.navOpen ? 'nav-links spin' : 'nav-links'}>
                <AnimatePresence>
                    {Data.map(({ id, title, path, img, alt }) => (
                        <motion.div
                            className="menu"
                            style={{
                                left: Props.navOpen ? '0' : '7.5rem',
                                transitionDelay: Props.navOpen ? '0.7s' : '0s',
                                opacity: Props.navOpen ? '1' : '0',
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key={id}
                        >
                            <motion.div
                                className="menu__item"
                                initial={{ left: Props.navOpen ? '0' : '7.5rem' }}
                                animate={{
                                    left: Props.navOpen ? '-2rem' : '-6.5rem',
                                    opacity: Props.navOpen ? 1 : 0,
                                }}
                                exit={{
                                    left: Props.navOpen ? '0rem' : '-6.5rem',
                                    opacity: Props.navOpen ? 1 : 0,
                                }}
                                transition={{ duration: 0.5, delay: Props.navOpen ? 1.7 : 0 }}
                                key={id}
                            >
                                <Link to={path} onClick={() => Props.setNavOpen(!Props.navOpen)}>
                                    <span className="menu__item-link" data-text={t(title)} aria-hidden="true">
                                        {t(title)}
                                    </span>
                                    <img
                                        className="menu__item-img"
                                        src={img}
                                        alt={alt}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: Props.navOpen ? 0.7 : 0 }}
                                    />
                                    <div className="marquee">
                                        <div className="marquee__inner" aria-hidden="true">
                                            <span>{t(title)}</span>
                                            <span>{t(title)}</span>
                                            <span>{t(title)}</span>
                                            <span>{t(title)}</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            <div className="nav-footer">
                <div className="location">Cairo, Egypt.</div>
                <div className="nav-social-media">
                    <ul>
                        <li>
                            <Link to="https://www.linkedin.com/in/shehabwaleedd/" target="_blank" rel="noreferrer">
                                <span>FB</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.instagram.com/lelu_storee/" target="_blank" rel="noreferrer">
                                <span>IG</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavOverlay;

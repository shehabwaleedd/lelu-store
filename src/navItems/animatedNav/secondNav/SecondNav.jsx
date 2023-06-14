import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SecondNav.css';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const SecondNav = (Props) => {
    const [upperSubmenuOpen, setUpperSubmenuOpen] = useState(false);
    const [bottomsSubmenuOpen, setBottomsSubmenuOpen] = useState(false);
    const [setSubMenu, setSetSubMenu] = useState(false)
    const [bagsSubMenu, setBagsSubMenu] = useState(false)

    const handleNavItemClick = () => {
        Props.setNavOpen(false); // Close the overlayed navbar when a navigation link is clicked
    };

    const handleSubmenuClick = () => {
        setUpperSubmenuOpen(!upperSubmenuOpen);
        Props.setNavOpen(false);
    };

    const handleBottomsSubmenuClick = () => {
        setBottomsSubmenuOpen(!bottomsSubmenuOpen);
        Props.setNavOpen(false);
    };

    const handleSetSubmenuClick = () => {
        setSetSubMenu(!setSubMenu);
        Props.setNavOpen(false);
    };

    const handleBagsSubmenuClick = () => {
        setBagsSubMenu(!bagsSubMenu);
        Props.setNavOpen(false);
    };



    return (
        <nav className={Props.navOpen ? 'nav__second spin' : 'nav__second'}>
            <div className="nav__container_second">
                <div className={Props.navOpen ? 'nav__content spin' : 'nav__content'}>
                    <ul>
                        <li>
                            <Link to="/" onClick={handleNavItemClick}>
                                <span className="new__arrivals1">Arrivals</span>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <span>Shop All</span>
                            </Link>
                        </li>
                        <li className='upper'>
                            <Link to="" onClick={handleSubmenuClick}>
                                Upper <i className="bx bx-chevron-down"></i>
                            </Link>
                            <AnimatePresence>
                                {upperSubmenuOpen && (
                                    <motion.div className='upper__submenu'
                                        initial={{ y: -15 }}
                                        animate={{ y: 3 }}
                                        exit={{ opacity: 0, y: -15 }}
                                    >
                                        <motion.ul>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15 }}
                                            >
                                                <Link to="/shop/upper/shirts" onClick={handleNavItemClick} className="link link--carme">
                                                    - Shirts
                                                    <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15 }}
                                            >
                                                <Link to="/shop/upper/hoodies" onClick={handleNavItemClick} className="link link--carme">
                                                    - Hoodies
                                                    <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15 }}
                                            >
                                                <Link to="/shop/upper/jackets" onClick={handleNavItemClick} className="link link--carme">
                                                    - Jackets
                                                    <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15 }}
                                            >
                                                <Link to="/shop/upper/t-shirts" onClick={handleNavItemClick} className="link link--carme">
                                                    - T-Shirts
                                                    <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                        </motion.ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                        <li className='bottoms'>
                            <Link to="" onClick={handleBottomsSubmenuClick}>
                                Bottoms <i className="bx bx-chevron-down"></i>
                            </Link>
                            <AnimatePresence>
                                {bottomsSubmenuOpen && (
                                    <motion.div className='bottoms__submenu'
                                        initial={{ y: -15 }}
                                        animate={{ y: 3 }}
                                        exit={{ opacity: 0, y: -15 }}
                                    >
                                        <motion.ul>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15 }}
                                            >
                                                <Link to="/shop/upper/shirts" onClick={handleNavItemClick} className="link link--carme">
                                                    - Cargos
                                                    <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15 }}
                                            >
                                                <Link to="/shop/upper/hoodies" onClick={handleNavItemClick} className="link link--carme">
                                                    - Sweatpants
                                                    <svg className="link__graphic_sweatpants link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15 }}
                                            >
                                                <Link to="/shop/upper/t-shirts" onClick={handleNavItemClick} className="link link--carme">
                                                    - Shorts
                                                    <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                        </motion.ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                        <li className='set'>
                            <Link to="" onClick={handleSetSubmenuClick}>
                                SETS <i className="bx bx-chevron-down"></i>
                            </Link>
                            <AnimatePresence>
                                {setSubMenu && (
                                    <motion.div className='set__submenu'
                                        initial={{ y: -15 }}
                                        animate={{ y: 3 }}
                                        exit={{ opacity: 0, y: -15 }}
                                    >
                                        <motion.ul>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15 }}
                                            >
                                                <Link to="/shop/upper/shirts" onClick={handleNavItemClick} className="link link--carme">
                                                    - "Not Today" Set
                                                    <svg className="link__graphic_laptop link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15 }}
                                            >
                                                <Link to="/shop/upper/hoodies" onClick={handleNavItemClick} className="link link--carme">
                                                    - Zebra Set
                                                    <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15 }}
                                            >
                                                <Link to="/shop/upper/t-shirts" onClick={handleNavItemClick} className="link link--carme">
                                                    - Pijamas
                                                    <svg className="link__graphic_pijamas link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                        </motion.ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                        <li className='bags'>
                            <Link to="" onClick={handleBagsSubmenuClick}>
                                BAGs <i className="bx bx-chevron-down"></i>
                            </Link>
                            <AnimatePresence>
                                {bagsSubMenu && (
                                    <motion.div className='bags__submenu'
                                        initial={{ y: -15 }}
                                        animate={{ y: 3 }}
                                        exit={{ opacity: 0, y: -15 }}
                                    >
                                        <motion.ul>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15 }}
                                            >
                                                <Link to="/shop/upper/shirts" onClick={handleNavItemClick} className="link link--carme">
                                                    - Backpacks
                                                    <svg className="link__graphic_backpacks link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15 }}
                                            >
                                                <Link to="/shop/upper/hoodies" onClick={handleNavItemClick}  className="link link--carme">
                                                    - Waist Bags
                                                    <svg className="link__graphic_backpacks link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15 }}
                                            >
                                                <Link to="/shop/upper/t-shirts" onClick={handleNavItemClick} className="link link--carme">
                                                    - Laptop Sleeves
                                                    <svg className="link__graphic_laptop link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                        </motion.ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                        <li>
                            <Link to="/faqs" onClick={handleNavItemClick}>
                                FAQS
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default SecondNav;

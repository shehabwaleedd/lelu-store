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
                            <Link to="/shop" onClick={handleNavItemClick}>
                                SHOP ALL
                            </Link>
                        </li>
                        <li className='upper'>
                            <Link to="" onClick={handleSubmenuClick}>
                                Upper <i className="bx bx-chevron-down"></i>
                            </Link>
                            <AnimatePresence>
                                {upperSubmenuOpen && (
                                    <motion.div className='upper__submenu'
                                        initial={{y: -15}}
                                        animate={{y: 3}}
                                        exit={{opacity: 0, y: -15}}
                                    >
                                        <motion.ul>
                                            <motion.li             
                                            initial={{x: -15}}
                                            animate={{x: 0}}
                                            exit={{x: -15}}
                                        >
                                                <Link to="/shop/upper/shirts" onClick={handleNavItemClick}>
                                                    Shirts
                                                </Link>
                                            </motion.li>
                                            <motion.li
                                            initial={{x: -15}}
                                            animate={{x: 0}}
                                            exit={{x: -15}}
                                            >
                                                <Link to="/shop/upper/hoodies" onClick={handleNavItemClick}>
                                                    Hoodies
                                                </Link>
                                            </motion.li>
                                            <motion.li
                                            initial={{x: -15}}
                                            animate={{x: 0}}
                                            exit={{x: -15}}
                                            >
                                                <Link to="/shop/upper/jackets" onClick={handleNavItemClick}>
                                                    Jackets
                                                </Link>
                                            </motion.li>
                                            <motion.li
                                            initial={{x: -15}}
                                            animate={{x: 0}}
                                            exit={{x: -15}}
                                            >
                                                <Link to="/shop/upper/t-shirts" onClick={handleNavItemClick}>
                                                    T-Shirts
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
                                        initial={{y: -15}}
                                        animate={{y: 3}}
                                        exit={{opacity: 0, y: -15}}
                                    >
                                        <motion.ul>
                                            <motion.li             
                                            initial={{x: -15}}
                                            animate={{x: 0}}
                                            exit={{x: -15}}
                                        >
                                                <Link to="/shop/upper/shirts" onClick={handleNavItemClick}>
                                                    Cargos
                                                </Link>
                                            </motion.li>
                                            <motion.li
                                            initial={{x: -15}}
                                            animate={{x: 0}}
                                            exit={{x: -15}}
                                            >
                                                <Link to="/shop/upper/hoodies" onClick={handleNavItemClick}>
                                                    Sweatpants
                                                </Link>
                                            </motion.li>
                                            <motion.li
                                            initial={{x: -15}}
                                            animate={{x: 0}}
                                            exit={{x: -15}}
                                            >
                                                <Link to="/shop/upper/t-shirts" onClick={handleNavItemClick}>
                                                    Shorts
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
                                        initial={{y: -15}}
                                        animate={{y: 3}}
                                        exit={{opacity: 0, y: -15}}
                                    >
                                        <motion.ul>
                                            <motion.li             
                                            initial={{x: -15}}
                                            animate={{x: 0}}
                                            exit={{x: -15}}
                                        >
                                                <Link to="/shop/upper/shirts" onClick={handleNavItemClick}>
                                                    "Not Today" Set
                                                </Link>
                                            </motion.li>
                                            <motion.li
                                            initial={{x: -15}}
                                            animate={{x: 0}}
                                            exit={{x: -15}}
                                            >
                                                <Link to="/shop/upper/hoodies" onClick={handleNavItemClick}>
                                                    Zebra Set
                                                </Link>
                                            </motion.li>
                                            <motion.li
                                            initial={{x: -15}}
                                            animate={{x: 0}}
                                            exit={{x: -15}}
                                            >
                                                <Link to="/shop/upper/t-shirts" onClick={handleNavItemClick}>
                                                    Pijamas
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
                                        initial={{y: -15}}
                                        animate={{y: 3}}
                                        exit={{opacity: 0, y: -15}}
                                    >
                                        <motion.ul>
                                            <motion.li             
                                            initial={{x: -15}}
                                            animate={{x: 0}}
                                            exit={{x: -15}}
                                        >
                                                <Link to="/shop/upper/shirts" onClick={handleNavItemClick}>
                                                    Backpacks
                                                </Link>
                                            </motion.li>
                                            <motion.li
                                            initial={{x: -15}}
                                            animate={{x: 0}}
                                            exit={{x: -15}}
                                            >
                                                <Link to="/shop/upper/hoodies" onClick={handleNavItemClick}>
                                                    Waist Bags
                                                </Link>
                                            </motion.li>
                                            <motion.li
                                            initial={{x: -15}}
                                            animate={{x: 0}}
                                            exit={{x: -15}}
                                            >
                                                <Link to="/shop/upper/t-shirts" onClick={handleNavItemClick}>
                                                    Laptop Sleeves
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

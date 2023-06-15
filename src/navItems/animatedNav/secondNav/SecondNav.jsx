import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SecondNav.css';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import shirt from "../../../assets/summer1.jpg"
import hoodie from "../../../assets/land1.jpg"
import jacket from "../../../assets/j1.jpg"
import tshirt from "../../../assets/casual1.jpg"
import cargo from "../../../assets/items/cargo4.jpg"
import Sweatpants from "../../../assets/sweatpants.jpg"
import Shorts from "../../../assets/shorts2.jpg"
import NotToday from "../../../assets/nottoday.jpg"
import Doodle from "../../../assets/doodle1.jpg"
import ShortSet from "../../../assets/set1.jpg"
import Backpack from "../../../assets/backpack1.jpg"
import Waistback from "../../../assets/wbag2.jpg"

const SecondNav = (Props) => {
    const [upperSubmenuOpen, setUpperSubmenuOpen] = useState(false);
    const [bottomsSubmenuOpen, setBottomsSubmenuOpen] = useState(false);
    const [setSubMenu, setSetSubMenu] = useState(false)
    const [bagsSubMenu, setBagsSubMenu] = useState(false)
    const [shirtSubMenu, setShirtSubMenu] = useState(false)
    const [hoodiesSubMenu, setHoodiesSubMenu] = useState(false)
    const [jacketSubMenu, setJacketSubMenu] = useState(false)
    const [tshirtsSubMenu, setTshirtsSubMenu] = useState(false)
    const [cargosSubMenu, setCargosSubMenu] = useState(false)
    const [sweatpantsSubMenu, setSweatpantsSubMenu] = useState(false)
    const [shortsSubMenu, setShortsSubMenu] = useState(false)
    const [notTodaySubMenu, setNotTodaySubMenu] = useState(false)
    const [doodleSubMenu, setDoodleSubMenu] = useState(false)
    const [shortSetSubMenu, setShortSetSubMenu] = useState(false)
    const [backpackSubMenu, setBackpackSubMenu] = useState(false)
    const [waistbagSubMenu, setWaistbagSubMenu] = useState(false)


    const handleNavItemClick = () => {
        Props.setNavOpen(false); // Close the overlayed navbar when a navigation link is clicked
    };



    const handleShirtSubMenuEnter = () => {
        setShirtSubMenu(true);
    };

    const handleShirtSubMenuLeave = () => {
        setShirtSubMenu(false);
    };

    const handleHoodiesSubMenuEnter = () => {
        setHoodiesSubMenu(true);
    }

    const handleHoodiesSubMenuLeave = () => {
        setHoodiesSubMenu(false);
    }

    const handleJacketSubMenuEnter = () => {
        setJacketSubMenu(true);
    }

    const handleJacketSubMenuLeave = () => {
        setJacketSubMenu(false);
    }

    const handleTshirtsSubMenuEnter = () => {
        setTshirtsSubMenu(true);
    }

    const handleTshirtsSubMenuLeave = () => {
        setTshirtsSubMenu(false);
    }

    const handleCargosSubMenuEnter = () => {
        setCargosSubMenu(true);
    }

    const handleCargosSubMenuLeave = () => {
        setCargosSubMenu(false);
    }

    const handleSweatpantsSubMenuEnter = () => {
        setSweatpantsSubMenu(true);
    }

    const handleSweatpantsSubMenuLeave = () => {
        setSweatpantsSubMenu(false);
    }

    const handleShortsSubMenuLeave = () => {
        setShortsSubMenu(false);
    }

    const handleShortsSubMenuEnter = () => {
        setShortsSubMenu(true);
    }

    const handleNotTodaySubMenuEnter = () => {
        setNotTodaySubMenu(true);
    }

    const handleNotTodaySubMenuLeave = () => {
        setNotTodaySubMenu(false);
    }

    const handleDoodleSubMenuEnter = () => {
        setDoodleSubMenu(true);
    }

    const handleDoodleSubMenuLeave = () => {
        setDoodleSubMenu(false);
    }

    const handleShortSetSubMenuEnter = () => {
        setShortSetSubMenu(true);
    }

    const handleShortSetSubMenuLeave = () => {
        setShortSetSubMenu(false);
    }

    const handleBackbackSubMenuEnter = () => {
        setBackpackSubMenu(true);
    }

    const handleBackbackSubMenuLeave = () => {
        setBackpackSubMenu(false);
    }

    const handleWaistBagSubMenuEnter = () => {
        setWaistbagSubMenu(true)
    }

    const handleWaistBagSubMenuLeave = () => {
        setWaistbagSubMenu(false)
    }


    const handleUpperSubmenuMouseEnter = () => {
        setUpperSubmenuOpen(true);
    };

    const handleUpperSubmenuMouseLeave = () => {
        setUpperSubmenuOpen(false);
    };

    const handleBottomsSubmenuMouseEnter = () => {
        setBottomsSubmenuOpen(true);
    };

    const handleBottomsSubmenuMouseLeave = () => {
        setBottomsSubmenuOpen(false);
    };

    const handleSetSubmenuMouseEnter = () => {
        setSetSubMenu(true);
    };

    const handleSetSubmenuMouseLeave = () => {
        setSetSubMenu(false);
    };

    const handleBagsSubmenuMouseEnter = () => {
        setBagsSubMenu(true);
    };

    const handleBagsSubmenuMouseLeave = () => {
        setBagsSubMenu(false);
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
                            <div className="" onMouseEnter={handleUpperSubmenuMouseEnter} onMouseLeave={handleUpperSubmenuMouseLeave}>
                                <Link to="">
                                    Upper <i className="bx bx-chevron-down"></i>
                                </Link>
                            </div>
                            <AnimatePresence>
                                {upperSubmenuOpen && (
                                    <motion.div className='upper__submenu'
                                        initial={{ y: -15 }}
                                        animate={{ y: 3 }}
                                        onMouseEnter={handleUpperSubmenuMouseEnter} onMouseLeave={handleUpperSubmenuMouseLeave}
                                    >
                                        <motion.ul>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15, transition: { duration: 0.1 } }}
                                                onMouseEnter={handleShirtSubMenuEnter} onMouseLeave={handleShirtSubMenuLeave}
                                            >
                                                <Link to="/shop/upper/shirts" onClick={handleNavItemClick} className="link link--carme" >
                                                    - Shirt
                                                    <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <AnimatePresence>
                                                {shirtSubMenu && (
                                                    <motion.div className="shirt__submenu"
                                                        initial={{ opacity: 0, x: 250 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 250 }}
                                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                                    >
                                                        <img src={shirt} alt="" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15, transition: { duration: 0.1 } }}
                                                onMouseEnter={handleHoodiesSubMenuEnter} onMouseLeave={handleHoodiesSubMenuLeave}
                                            >
                                                <Link to="/shop/upper/hoodies" onClick={handleNavItemClick} className="link link--carme">
                                                    - Hoodies
                                                    <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <AnimatePresence>
                                                {hoodiesSubMenu && (
                                                    <motion.div className="shirt__submenu"
                                                        initial={{ opacity: 0, x: 250 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 250 }}
                                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                                    >
                                                        <img src={hoodie} alt="" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15, transition: { duration: 0.1 } }}
                                                onMouseEnter={handleJacketSubMenuEnter} onMouseLeave={handleJacketSubMenuLeave}
                                            >
                                                <Link to="/shop/upper/jackets" onClick={handleNavItemClick} className="link link--carme">
                                                    - Jackets
                                                    <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <AnimatePresence>
                                                {jacketSubMenu && (
                                                    <motion.div className="shirt__submenu"
                                                        initial={{ opacity: 0, x: 250 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 250 }}
                                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                                    >
                                                        <img src={jacket} alt="" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15, transition: { duration: 0.1 } }}
                                                onMouseEnter={handleTshirtsSubMenuEnter} onMouseLeave={handleTshirtsSubMenuLeave}
                                            >
                                                <Link to="/shop/upper/t-shirts" onClick={handleNavItemClick} className="link link--carme">
                                                    - T-Shirts
                                                    <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <AnimatePresence>
                                                {tshirtsSubMenu && (
                                                    <motion.div className="shirt__submenu"
                                                        initial={{ opacity: 0, x: 250 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 250 }}
                                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                                    >
                                                        <img src={tshirt} alt="" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                        <li className='bottoms'>
                            <Link to="" onMouseEnter={handleBottomsSubmenuMouseEnter} onMouseLeave={handleBottomsSubmenuMouseLeave}>
                                Bottoms <i className="bx bx-chevron-down"></i>
                            </Link>
                            <AnimatePresence>
                                {bottomsSubmenuOpen && (
                                    <motion.div className='bottoms__submenu'
                                        initial={{ y: -15 }}
                                        animate={{ y: 3 }}
                                        onMouseEnter={handleBottomsSubmenuMouseEnter} onMouseLeave={handleBottomsSubmenuMouseLeave}
                                    >
                                        <motion.ul>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15, transition: { duration: 0.1 } }}

                                            >
                                                <Link to="/shop/upper/shirts" onClick={handleNavItemClick} onMouseEnter={handleCargosSubMenuEnter} onMouseLeave={handleCargosSubMenuLeave} className="link link--carme">
                                                    - Cargos
                                                    <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <AnimatePresence>
                                                {cargosSubMenu && (
                                                    <motion.div className="cargo__submenu"
                                                        initial={{ opacity: 0, x: 250 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 250 }}
                                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                                    >
                                                        <img src={cargo} alt="" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15, transition: { duration: 0.1 } }}
                                                onMouseEnter={handleSweatpantsSubMenuEnter} onMouseLeave={handleSweatpantsSubMenuLeave}
                                            >
                                                <Link to="/shop/upper/hoodies" onClick={handleNavItemClick} className="link link--carme">
                                                    - Sweatpants
                                                    <svg className="link__graphic_sweatpants link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <AnimatePresence>
                                                {sweatpantsSubMenu && (
                                                    <motion.div className="cargo__submenu"
                                                        initial={{ opacity: 0, x: 250 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 250 }}
                                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                                    >
                                                        <img src={Sweatpants} alt="" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15, transition: { duration: 0.1 } }}
                                                onMouseEnter={handleShortsSubMenuEnter} onMouseLeave={handleShortsSubMenuLeave}
                                            >
                                                <Link to="/shop/upper/t-shirts" onClick={handleNavItemClick} className="link link--carme">
                                                    - Shorts
                                                    <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <AnimatePresence>
                                                {shortsSubMenu && (
                                                    <motion.div className="cargo__submenu"
                                                        initial={{ opacity: 0, x: 250 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 250 }}
                                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                                    >
                                                        <img src={Shorts} alt="" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                        <li className='set'>
                            <Link to="" onMouseEnter={handleSetSubmenuMouseEnter} onMouseLeave={handleSetSubmenuMouseLeave}>
                                SETS <i className="bx bx-chevron-down"></i>
                            </Link>
                            <AnimatePresence>
                                {setSubMenu && (
                                    <motion.div className='set__submenu'
                                        initial={{ y: -15 }}
                                        animate={{ y: 3 }}
                                        onMouseEnter={handleSetSubmenuMouseEnter} onMouseLeave={handleSetSubmenuMouseLeave}
                                    >
                                        <motion.ul>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15, transition: { duration: 0.1 } }}
                                            >
                                                <Link to="/shop/upper/shirts" onClick={handleNavItemClick} className="link link--carme" onMouseEnter={handleNotTodaySubMenuEnter} onMouseLeave={handleNotTodaySubMenuLeave}>
                                                    - "Not Today" Set
                                                    <svg className="link__graphic_laptop link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <AnimatePresence>
                                                {notTodaySubMenu && (
                                                    <motion.div className="nottoday__submenu"
                                                    initial={{ opacity: 0, left: "-300%" }}
                                                    animate={{ opacity: 1, left: "-210%" }}
                                                    exit={{ opacity: 0, left: "-350%" }}
                                                        transition={{ duration: 0.1, ease: "easeInOut" }}
                                                    >
                                                        <motion.img src={NotToday} alt="" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15, transition: { duration: 0.1 } }}
                                            >
                                                <Link to="/shop/upper/hoodies" onClick={handleNavItemClick} className="link link--carme" onMouseEnter={handleDoodleSubMenuEnter} onMouseLeave={handleDoodleSubMenuLeave}>
                                                    - Doodles Set
                                                    <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <AnimatePresence>
                                                {doodleSubMenu && (
                                                    <motion.div className="nottoday__submenu"
                                                        initial={{ opacity: 0, left: "-300%" }}
                                                        animate={{ opacity: 1, left: "-210%" }}
                                                        exit={{ opacity: 0, left: "-350%" }}
                                                        transition={{ duration: 0.2}}
                                                    >
                                                        <img src={Doodle} alt="" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15, transition: { duration: 0.1 } }}
                                            >
                                                <Link to="/shop/upper/t-shirts" onClick={handleNavItemClick} className="link link--carme" onMouseEnter={handleShortSetSubMenuEnter} onMouseLeave={handleShortSetSubMenuLeave}>
                                                    - Shorts Summer Set
                                                    <svg className="link__graphic_pijamas link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <AnimatePresence>
                                                {shortSetSubMenu && (
                                                    <motion.div className="nottoday__submenu"
                                                        initial={{ opacity: 0, left: "-300%" }}
                                                        animate={{ opacity: 1, left: "-210%" }}
                                                        exit={{ opacity: 0, left: "-350%" }}
                                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                                    >
                                                        <img src={ShortSet} alt="" />
                                                    </motion.div>

                                                )}
                                            </AnimatePresence>
                                        </motion.ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                        <li className='bags'>
                            <Link to="" onMouseEnter={handleBagsSubmenuMouseEnter} onMouseLeave={handleBagsSubmenuMouseLeave}>
                                BAGs <i className="bx bx-chevron-down"></i>
                            </Link>
                            <AnimatePresence>
                                {bagsSubMenu && (
                                    <motion.div className='bags__submenu'
                                        initial={{ y: -15 }}
                                        animate={{ y: 3 }}
                                        onMouseEnter={handleBagsSubmenuMouseEnter} onMouseLeave={handleBagsSubmenuMouseLeave}
                                    >
                                        <motion.ul>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15, transition: { duration: 0.1 } }}
                                            >
                                                <Link to="/shop/upper/shirts" onClick={handleNavItemClick} className="link link--carme" onMouseEnter={handleWaistBagSubMenuEnter} onMouseLeave={handleWaistBagSubMenuLeave}>
                                                    - Waist Bag
                                                    <svg className="link__graphic_backpacks link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <AnimatePresence>
                                                {waistbagSubMenu && (
                                                    <motion.div className="nottoday__submenu"
                                                        initial={{ opacity: 0, left: "-300%" }}
                                                        animate={{ opacity: 1, left: "-250%" }}
                                                        exit={{ opacity: 0, left: "-350%" }}
                                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                                    >
                                                        <img src={Waistback} alt="" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                            <motion.li
                                                initial={{ x: -15 }}
                                                animate={{ x: 0 }}
                                                exit={{ x: -15, transition: { duration: 0.1 } }}
                                            >
                                                <Link to="/shop/upper/hoodies" onClick={handleNavItemClick} className="link link--carme" onMouseEnter={handleBackbackSubMenuEnter} onMouseLeave={handleBackbackSubMenuLeave}>
                                                    - Backpacks
                                                    <svg className="link__graphic_backpacks link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
                                                        <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
                                                    </svg>
                                                </Link>
                                            </motion.li>
                                            <AnimatePresence>
                                                {backpackSubMenu && (
                                                    <motion.div className="nottoday__submenu"
                                                        initial={{ opacity: 0, left: "-300%" }}
                                                        animate={{ opacity: 1, left: "-250%" }}
                                                        exit={{ opacity: 0, left: "-350%" }}
                                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                                    >
                                                        <img src={Backpack} alt="" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
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

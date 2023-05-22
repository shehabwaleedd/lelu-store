import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo_lelu.webp"
import './AnimatedNav.css'
import { useTranslation } from 'react-i18next'
import NavComponents from './navComponents/NavComponents'
import { useLocation } from 'react-router-dom'
import Toggle from '../darkmode/Toggle'
import { useUserAuth } from '../../components/authContext/AuthContext'

const AnimatedNav = () => {

    const { t } = useTranslation()
    const { user } = useUserAuth()
    const [teesOpen, setTeesOpen] = React.useState(false)
    const TeesdropdownRef = useRef(null);
    const [navOpen, setNavOpen] = React.useState(false)
    const [searchOpen, setSearchOpen] = React.useState(false)

    const handleTees = (event) => {
        event.stopPropagation();
        setTeesOpen(!teesOpen);
    };



    const handleClickOutside = (event) => {
        if (TeesdropdownRef.current && !TeesdropdownRef.current.contains(event.target)) {
            setTeesOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav className='nav'>
                <div className="nav__container">
                    <div className="left__navbar">
                        <div className="rest__left_navbar">
                            <div className="menu__toggle" onClick={() => setNavOpen(!navOpen)}>
                                <i className='bx bx-menu' ></i>
                            </div>
                        </div>
                    </div>
                    <div className="logo">
                        <Link to="/"><h1>LELU</h1></Link>
                    </div>
                    <div className="rest__navbar">
                        <div className="search-container">
                            <input type="text" className={`${searchOpen ? "search-input" : "search-input-hidden"}`} placeholder="Search" />
                            <i className='bx bx-search search-icon' onClick={() => setSearchOpen(!searchOpen)}></i>
                        </div>
                        <div className="nav__logins">
                            <NavComponents navOpen={navOpen} />
                        </div>
                        <Link className="createpost__button " to={user ? "/createpost" : "/signup"}>
                            <button>
                                <h3 className='cart-icon '>CART</h3>
                            </button>
                        </Link>
                    </div>
                    <div className="nav-overlay" style={{
                        top: navOpen ? "-92%" : "-300%",
                        transitionDelay: navOpen ? "0s" : "0s",
                        transitionDuration: navOpen ? "1s" : "1.5s",
                    }}>
                    </div>
                </div>
            </nav>
            <nav className='nav__second'>
                <div className="nav__container_second">
                    <div className="nav__content">
                        <ul>
                            <li><Link to="/">New Arrivals</Link></li>
                            <li><Link to="/">Tees</Link></li>
                            <li><Link to="/">Hoodies</Link></li>
                            <li><Link to="/">Cargos</Link></li>
                            <li><Link to="/collection">Collections</Link></li>
                            <li><Link to="/">Accessories</Link></li>
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/">Contact</Link></li>
                            <li><Link to="/">Follow Us</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default AnimatedNav





/* <ul className='rest__left_links'>
    <li className='tees__menu'>
        <h3 onClick={handleTees}>
            Categories
        </h3>
        <i className={`bx bx-chevron-${teesOpen ? "up" : "down"}`} onClick={handleTees} style={{ transition: "transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1)" }}></i>
        {teesOpen && <div className="tees__menu__dropdown" ref={TeesdropdownRef}>
            <ul>
                <li><Link to="/">Tees</Link></li>
                <li><Link to="/">Hoodies</Link></li>
                <li><Link to="/">Cargos</Link></li>
                <li><Link to="/">Accessories</Link></li>
            </ul>
        </div>}
    </li>
    <li className='nav__collections'><Link to="/collection">Collections</Link></li>
    <li className='nav__about'><Link to="/collection">About Us</Link></li>
</ul> */

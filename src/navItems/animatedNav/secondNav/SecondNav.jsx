import React from 'react'
import { Link } from 'react-router-dom'
import './SecondNav.css'

const SecondNav = (Props) => {
    const handleNavItemClick = () => {
        Props.setNavOpen(false); // Close the overlayed navbar when a navigation link is clicked
    };
    return (
        <nav className={Props.navOpen ? "nav__second spin" : "nav__second"}>
            <div className="nav__container_second">
                <div className={Props.navOpen ? "nav__content spin" : "nav__content"}>
                    <ul>
                        <li><Link to="/" onClick={handleNavItemClick}><span className='new__arrivals1'>Arrivals</span></Link></li>
                        <li><Link to="/" onClick={handleNavItemClick}><a href="/" className='new__arrivals2'>New Arrivals</a></Link></li>
                        <li><Link to="/shop" onClick={handleNavItemClick}>Shop</Link></li>
                        <li><Link to="/sale" onClick={handleNavItemClick}>On Sale</Link></li>
                        <li><Link to="/blog" onClick={handleNavItemClick}>Blog</Link></li>
                        <li><Link to="/faqs" onClick={handleNavItemClick}>FAQs</Link></li>
                        <li><Link to="/about" onClick={handleNavItemClick}>About US</Link></li>
                        <li><Link to="/contact" onClick={handleNavItemClick}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default SecondNav
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
                        <li><Link to="/" onClick={handleNavItemClick}><a href="/" className='new__arrivals2'>Sale</a></Link></li>
                        <li><Link to="/shop" onClick={handleNavItemClick}>Upper <i className='bx bx-chevron-down' ></i></Link></li>
                        <li><Link to="/sale" onClick={handleNavItemClick}>Bottoms <i className='bx bx-chevron-down' ></i></Link></li>
                        <li><Link to="/sale" onClick={handleNavItemClick}>SETS <i className='bx bx-chevron-down' ></i></Link></li>
                        <li><Link to="/blog" onClick={handleNavItemClick}>BAGs <i className='bx bx-chevron-down' ></i></Link></li>
                        <li><Link to="/blog" onClick={handleNavItemClick}>SHOP ALL <i className='bx bx-chevron-down' ></i></Link></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default SecondNav
import React from 'react'
import { Link } from 'react-router-dom'
import './SecondNav.css'

const SecondNav = (Props) => {
    return (
        <nav className={Props.navOpen ? "nav__second spin" : "nav__second"}>
            <div className="nav__container_second">
                <div className={Props.navOpen ? "nav__content spin" : "nav__content"}>
                    <ul>
                        <li><Link to="/"><span className='new__arrivals1'>Arrivals</span></Link></li>
                        <li><Link to="/"><a href="/" className='new__arrivals2'>New Arrivals</a></Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/">Categories</Link></li>
                        <li><Link to="/collection">Collections</Link></li>
                        <li><Link to="/">Accessories</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default SecondNav
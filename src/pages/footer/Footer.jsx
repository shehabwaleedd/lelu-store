import React from 'react'
import './Footer.css'
import logo from "../../assets/lelulogo.png"
import Socials from '../../components/supplements/socials/Socials'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container">
                <div className="footer__upper">
                    <div className="footer__svg">
                        <img src={logo} alt="" />
                    </div>
                    <div className="footer__links">
                        <div className="footer__links_container">
                            <ul>
                                <h2>LELU</h2>
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/collections"><li>Collections</li></Link>
                                <Link to="/about"><li>About Lelu</li></Link>
                                <Link to="/contact"><li>Contact Us</li></Link>
                                <Link to="/careers"><li>Careers</li></Link>
                                <Link to="/blog"><li>Our Blog</li></Link>
                            </ul>
                            <ul>
                                <h2>NEED HELP?</h2>
                                <Link to="/faqs"><li>FAQs</li></Link>
                                <Link to="/terms-conditions"><li>Terms & Conditions</li></Link>
                                <Link to="/privacy-policy"><li>Privacy & Cookies</li></Link>
                                <Link to="/shipping-policy"><li>Shipping & Delivery</li></Link>
                                <Link to="/returns-exchanges"><li>Returns & Exchanges</li></Link>
                            </ul>
                            <ul>
                                <h2>MIGHT BE INTERESTED AT</h2>
                                <Link to="/swipe"><li>Tees</li></Link>
                                <Link to="/test"><li>Hoodies</li></Link>
                                <li>Cargos</li>
                                <li>Bags</li>
                                <li>Waist Bags</li>
                                <li>Accessories</li>
                            </ul>
                        </div>
                        <div className="footer__socials">
                            <h2>Follow Us</h2>
                            <div className="footer__socials_container">
                                <Socials />
                            </div>
                        </div>
                        <div className="footer__payments">
                            <h2>Payment Methods:</h2>
                            <div className="payments__icons">
                                <i className='bx bxl-mastercard' ></i>
                                <i className='bx bxl-visa' ></i>
                                <i className='bx bxl-paypal' ></i>
                                <i className='bx bx-credit-card'></i>
                                <i className='bx bx-coin'></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__lower">
                    <div className="footer__logo">
                        <h1>lelu</h1>
                    </div>
                    <div className="footer__credits">
                        <span>© 2023 Lelu. All rights reserved.</span>
                        <p>Created and Desgined by <a href="https://shehabwaleedd.vercel.app/" target='__blank'>Shehab Waleed</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
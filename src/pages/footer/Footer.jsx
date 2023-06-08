import React from 'react'
import './Footer.css'
import logo from "../../assets/lelulogo.png"
import Socials from '../../components/supplements/socials/Socials'

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
                                <li>Home</li>
                                <li>Collections</li>
                                <li>About Lelu</li>
                                <li>Contact Us</li>
                                <li>Careers</li>
                                <li>Our Blog</li>
                            </ul>
                            <ul>
                                <h2>NEED HELP?</h2>
                                <li>Size Guide</li>
                                <li>FAQs</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy & Cookies</li>
                                <li>Shipping & Delivery</li>
                                <li>Returns & Exchanges</li>
                            </ul>
                            <ul>
                                <h2>MIGHT BE INTERESTED AT</h2>
                                <li>Tees</li>
                                <li>Hoodies</li>
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
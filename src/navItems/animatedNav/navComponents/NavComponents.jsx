import React, { useState } from 'react';
import './NavComponents.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useUserAuth } from '../../../Account/authContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavComponents = (Props) => {
    const { t } = useTranslation();
    const { user, logOut } = useUserAuth();
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/login');
            console.log('logged out successfully');
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div className="nav__links-links">
            {user ? (
                <div className="loginss">
                    <Link to="/account">
                        <button className={Props.navOpen ? 'nav__home spin' : 'nav__home'} onClick={handleExpand}>
                            Account
                        </button>
                    </Link>
                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                className="account__dropdown show"
                                initial={{ opacity: 0, y: -20, width: "20vw", height: "1vh", x: 20 }}
                                animate={{ opacity: 1, y: 20, width: "20vw", height: "20vh", x: 30 }}
                                exit={{ opacity: 0, y: -20, height: "1vh" }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link to="/account" className="account__dropdown-link">
                                    <span className="login__text">- My Account</span>
                                </Link>
                                <Link to="/account/orders" className="account__dropdown-link">
                                    <span className="login__text">- My Orders</span>
                                </Link>
                                <Link to="/account/wishlist" className="account__dropdown-link">
                                    <span className="login__text">- My Wishlist</span>
                                </Link>
                                <button className="account__dropdown-link" onClick={handleLogout}>
                                    <span className="login__text">- Logout</span>
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ) : (
                <>
                    <button className={Props.navOpen ? 'nav__home spin' : 'nav__home'} onClick={handleLogout}>
                        <span className="login__text">Login</span>
                    </button>
                </>
            )}
        </div>
    );
};

export default NavComponents;

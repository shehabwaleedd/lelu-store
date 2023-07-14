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
                        <button className={Props.navOpen ? 'nav__home spin' : 'nav__home'}>
                            Account
                        </button>
                    </Link>
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

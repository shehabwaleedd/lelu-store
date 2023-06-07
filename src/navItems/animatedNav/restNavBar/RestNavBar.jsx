import React from 'react'
import './RestNavBar.css'
import { Link } from 'react-router-dom'
import NavComponents from '../navComponents/NavComponents'
import { useUserAuth } from '../../../Account/authContext/AuthContext'
import CartSubMenu from './cartSubMenu.jsx/CartSubMenu'


const RestNavBar = (Props) => {

    const { user } = useUserAuth();
    const [cartOpen, setCartOpen] = React.useState(false);

    const handleCartOpen = () => {
        setCartOpen(!cartOpen);
    };



    return (
        <div className="rest__navbar">
            <div className={Props.navOpen ? "search-container spin" : "search-container"} >
                <input
                    type="text"
                    className={`${Props.searchOpen ? "search-input" : "search-input-hidden"}`}
                    placeholder="Search"
                />
                <div className="search__user_icons" onClick={() => Props.setSearchOpen(!Props.searchOpen)}>
                    <i className={Props.navOpen ? 'bx bx-search search-icon spin' : 'bx bx-search search-icon'}></i>
                    <i className='bx bx-user user__icon'></i>
                </div>
            </div>
            <div className={Props.navOpen ? "nav__logins spin" : "nav__logins"}>
                <NavComponents navOpen={Props.navOpen} />
            </div>
            <div className={Props.navOpen ? "cart__button spin" : "cart__button"}onClick={handleCartOpen}>
                <Link className={Props.navOpen ? "createpost__button spin" : "createpost__button"}>
                    <i className='bx bx-cart'></i>
                    <h3 className='cart-icon '>CART</h3>
                </Link>
            </div>
            {cartOpen && (
                <CartSubMenu />
            )}
        </div>
    )
}

export default RestNavBar
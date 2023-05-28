import React from 'react'
import './NavComponents.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useUserAuth } from '../../../components/authContext/AuthContext'
import { useNavigate } from 'react-router-dom'


const NavComponents = (Props) => {
    const { t } = useTranslation()
    const { user, logOut } = useUserAuth()
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            await logOut()
            navigate('/login')
            console.log("logged out successfully")
        } catch (e) {
            console.log(e.message)
        }
    }
    return (
        <div className="nav__links-links">
            {user ? <>
                <button className={Props.navOpen ? "nav__home spin" : "nav__home"} onClick={handleLogout} >Logout</button>
                <button className={Props.navOpen ? "nav__home spin" : "nav__home"} >Account</button>
            </>
                :
                <>
                    <button className={Props.navOpen ? "nav__home spin" : "nav__home"} onClick={handleLogout} >Login</button>
                </>
            }

        </div>
    )
}

export default NavComponents
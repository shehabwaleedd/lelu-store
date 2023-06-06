import React from 'react'
import './LeftNavBar.css'

const LeftNavBar = (Props) => {
    return (
        <div className="left__navbar">
            <div className={Props.navOpen ? "menu-toggle spin" : "menu-toggle"} onClick={() => Props.setNavOpen(!Props.navOpen)}>
                <div className={Props.navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                    <span className={Props.navOpen ? "lineTop spin" : "lineTop"}></span>
                    <span className={Props.navOpen ? "lineBottom spin" : "lineBottom"}></span>
                </div>
            </div>
        </div>
    )
}

export default LeftNavBar
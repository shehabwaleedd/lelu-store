import React, { useEffect } from 'react'
import gsap from 'gsap'
import './Collection.css'
import Data from './Data'

const Collection = () => {



    return (
        <div className="containerr">
            {Data.map(({ id, title, subtitle, image }) => {
                return (
                    <div className={`inner-container inner-container-${id}`} key={id}>
                        <div className="inner-inner-container">
                            <div className="top-section">
                                <h1>{title}</h1>
                                <p>{subtitle}</p>
                            </div>
                            <div className="bottom-section">{id}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Collection
import React from 'react'
import './Shippment.css'
import { useEffect } from 'react'

const Shippment = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <section className='shippment'>
            <div className="shippment__text">
                <h1>Shipping Policy</h1>
            </div>
            <div className="shippment__container">
                <div className="shippment__content">
                    <ul>
                        <h1>Our Shipping Rates :</h1>
                        <li>
                            - 35 EGP for Cairo
                        </li>
                        <li>
                            - 40 EGP for Alex
                        </li>
                        <li>
                            - 45 EGP for Delta and Canal Cities
                        </li>
                        <li>
                            - 70 to 90 for Upper Egypt
                        </li>
                        <li>
                            - Arrives within 3 - 5 working days.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Shippment
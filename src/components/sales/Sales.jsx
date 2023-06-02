import React from 'react'
import './Sales.css'

const Sales = () => {
    return (
        <section className='sales'>
            <div className="sales__container">
                <div className="sales__content">
                    <h1>Up To</h1>
                    <span className='discount__off'>70% Off</span>
                    <h2>- All Basic T-Shirts & Accessories</h2>
                </div>
                <div className="explore__button">
                    <button className="sales__button">Explore Now</button>
                </div>
            </div>

        </section>
    )
}

export default Sales
import React from 'react'
import './Sales.css'

const Sales = () => {
    return (
        <section className='sales'>
            <div className="sales__container">
                <div className="sales__content">
                    <h1>Up to <span className='discount__off'>70% Off</span> - All Basic T-Shirts & Accessories</h1>
                    <button className="sales__button">Explore Now</button>
                </div>
            </div>

        </section>
    )
}

export default Sales
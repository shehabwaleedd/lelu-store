import React from 'react'
import './Shop.css'

const Shop = () => {
    
    return (
        <section className='shop'>
            <div className="shop__container containered">
                <div className="shop__content">
                    <div className="shop__upper">
                        <div className="shop__titles">
                            <h1>Search</h1>
                            <span>hundreds of fresh trending shirts and accessories</span>
                        </div>
                        <div className="shop__input">
                        <i className='bx bx-search search-shop-icon'></i>
                            <input type="text" placeholder="Search for products" />
                        </div>
                    </div>
                    <div className="shop__subtitles">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shop
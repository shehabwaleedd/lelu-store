import React from 'react'
import './Insurance.css'

const Insurance = () => {
    return (
        <section className='insurance section'>
            <div className="brag__content_lower">
                <div className="brag__cards">
                    <div className="brag__card">
                        <i class='bx bx-happy-beaming' ></i>
                        <h1>Satisfaction Guarantee</h1>
                        <span>Exchange the products you've purchased if it doesn't fit on you</span>
                    </div>
                    <div className="brag__card">
                        <i class='bx bx-credit-card-front'></i>
                        <h1>Secure Payment</h1>
                        <span>We use the best security features to secure every transaction.</span>
                        {/* <span>
                    <i class='bx bxl-mastercard' ></i> 
                    <i class='bx bxl-visa' ></i>
                    <i class='bx bxl-paypal' ></i>
                    <i class='bx bxl-venmo' ></i>
                    <i class='bx bxl-stripe'></i>
                    <i class='bx bx-bitcoin'></i>
                    <i class='bx bx-credit-card'></i>
                    <i class='bx bx-coin'></i>
                </span> */}
                    </div>
                    <div className="brag__card">
                        <i class='bx bxs-package'></i>
                        <h1>Free & Fast Shipping</h1>
                        <span>Free shipping for all orders over $500 and the fastest delivery within 48 hours</span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Insurance
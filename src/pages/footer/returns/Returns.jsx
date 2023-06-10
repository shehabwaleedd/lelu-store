import React from 'react'
import { useEffect } from 'react'
import './Returns.css'

const Returns = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <section className='returns'>
            <div className="returns__text">
                <h1>Returns & Exchanges</h1>
            </div>
            <div className="returns__container">
                <div className="returns__content">
                    <h1>Customer satisfaction is the number one priority for us. If for any reason you are not satisfied with
                        your purchase, we would love to exchange or refund the product but make sure you meet the
                        following terms and conditions:
                    </h1>
                    <ul>
                        <li>
                            <span>- Items must be returned within 14 days of purchase.</span>
                        </li>
                        <li>
                            <span>- Items must be unworn, unwashed, and in original condition.</span>
                        </li>
                        <li>
                            <span>- Items must have all tags attached and in original packaging.</span>
                        </li>
                        <li>
                            <span>- Items must be free of stains, makeup, deodorant, or wear.</span>
                        </li>
                        <li>
                            <span>- Items marked as Final Sale cannot be returned or exchanged.</span>
                        </li>
                        <li>
                            <span>- Shipping charges are non-refundable.</span>
                        </li>
                        <li>
                            <span>- Gift cards are non-returnable and non-refundable.</span>
                        </li>
                        <li>
                            <span>- Items purchased with a discount code are eligible for exchange only.</span>
                        </li>
                        <li>
                            <span>- Exchanges and refunds could be done within 14 days of receiving the order, with a Shipping Fee + 20 EGP for the refund shipping fees.</span>
                        </li>


                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Returns
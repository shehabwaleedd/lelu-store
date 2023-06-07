import React from 'react'
import './Products.css'
import Data from './Data'
import { Link } from 'react-router-dom'

const Products = () => {




    return (
        <section className='products'>
            <div className="products__container">
                <div className="products__content">
                    <div className="products__cards">
                        {Data.map((item, index) => (
                            <Link to={`/details/${index}`}>
                                <div className="product__card" key={item.id}>
                                        <img className='products__img' src={item.img} alt="" />
                                        <div className="product__info">
                                            <h3>{item.name}</h3>
                                            <p>{item.category}</p>
                                            <span className='product__price'>EGP {item.price}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products
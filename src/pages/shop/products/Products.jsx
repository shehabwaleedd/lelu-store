import React from 'react'
import './Products.css'
import Data from './Data'
import { Link } from 'react-router-dom'

const Products = () => {




    return (
        <section className='products'>
                <div className="products__content">
                    <div className="products__cards">
                        {Data.map((item, index) => (
                            <Link to={`/details/${index}`} key={item.id}>
                                <div className="product__card" >
                                    <img className='products__img' src={item.img} alt="" />
                                    <div className="product__info">
                                        <h3>{item.name}</h3>
                                        <div className="info__product">
                                            <span className='product__price'>EGP {item.price}</span>
                                            <p>{item.category}</p>
                                        </div>
                                        <div className="product__button">
                                            <button className='product__btn'><h1>Add to Cart</h1></button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
        </section>
    );
}

export default Products
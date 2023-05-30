import React from 'react'
import './Products.css'
import ProductCard from './ProductCard'
import { useState } from 'react'
import img1 from "../../../assets/women1.jpg"
import img2 from "../../../assets/women2.jpg"
import img3 from "../../../assets/women3.jpg"
import Data from './Data'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Products = () => {




    return (
        <section className='products'>
            <div className="products__container">
                <div className="products__content">
                    <div className="products__cards">
                        <Link></Link>
                        {Data.map((item, index) => (
                            <Link to={`/details/${index}`}>
                                <div className="product__card" key={item.id}>
                                    <div className="product__details">
                                        <img src={item.img} alt="" />
                                        <div className="product__info">
                                            <h3>{item.name}</h3>
                                            <p>{item.tags}</p>
                                            <span className='product__price'>EGP {item.price}</span>
                                        </div>
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
import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './MainProducts.css';
import Data from './Data';

const MainProducts = () => {



    return (
        <section className="mainproducts section">
            <div className="slider__wrapper">
                {Data.map(({ id, title, price, img, desc }) => (
                    <div className="slider__item" key={id}>
                        <div className="portfolio-item">
                            <div className="portfolio-thumb">
                                <img src={img} alt=""/>
                            </div>
                        </div>
                        <div className="slider__item__info">
                            <h3>{title}</h3>
                            <p>{desc}</p>
                            <span className='card__price '>EGP {price}</span>
                            <button className="btn btn--primary">Add to cart</button>
                        </div>
                        <div className="mainproducts__like">
                            <i className='bx bx-heart'></i>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MainProducts;

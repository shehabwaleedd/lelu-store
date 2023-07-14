import React, { useState } from "react";
import "./Products.css";
import Data from "./Data";
import { Link } from "react-router-dom";
import DetailsPage from "./detailsPage/DetailsPage";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import {useNavigate} from "react-router-dom";

const Products = (Props) => {


    // const openModal = (id) => {
    //     Props.setSelectedProductId(id);
    // };

    // const closeModal = () => {
    //     Props.setSelectedProductId(null);
    // };

    const navigate = useNavigate();
    const navigateTo = () => {

        navigate(`/details/${Data.id}`);
    };

    return (
        <>
                <motion.section className="products" 
                initial={{ opacity: 0, y: 100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} 
                animate={{ opacity: 1, y: 0, type: "spring", transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} 
                exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
                    <div className="products__container">
                        <div className="products__content">
                            <motion.div className="products__cards" 
                            initial={{ opacity: 0, y: 100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} 
                            animate={{ opacity: 1, y: 0, type: "spring", transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} 
                            exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
                                {Data.map((item) => (
                                    <Link
                                        initial={{ opacity: 0, y: 100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, type: "spring", transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: -500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}
                                        className="product__card"
                                        key={item.id}
                                        to={`/details/${item.id}`}

                                    >
                                        {item.img && (
                                            <img className="products__img" src={item.img} alt="" />
                                        )}
                                        <div className="product__info">
                                            <h3>{item.name}</h3>
                                            <div className="info__product">
                                                <span className="product__price">EGP {item.price}</span>
                                                <p>{item.category}</p>
                                            </div>
                                            <div className="product__button">
                                                <button className="product__btn">
                                                    <h1>Quick ADD</h1>
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.section>
        </>
    );
};

export default Products;

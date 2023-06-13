import React, { useState } from "react";
import "./Products.css";
import Data from "./Data";
import { Link } from "react-router-dom";
import DetailsPage from "./detailsPage/DetailsPage";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Products = (Props) => {


    const openModal = (id) => {
        Props.setSelectedProductId(id);
    };

    const closeModal = () => {
        Props.setSelectedProductId(null);
    };

    return (
        <>
            <AnimatePresence>
                {Props.selectedProductId ? (
                    <motion.div className="details_pro">
                        <DetailsPage id={Props.selectedProductId} closeModal={closeModal} />

                    </motion.div>
                ) : null}
            </AnimatePresence>
            {Props.selectedProductId ?
                null : (
                    <motion.section className="products" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration: 0.3}}>
                        <div className="products__container">
                            <div className="products__content">
                                <motion.div className="products__cards" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration: 0.3}}>
                                    {Data.map((item) => (
                                        <motion.div
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration: 0.3}}
                                            className="product__card"
                                            key={item.id}
                                            onClick={() => openModal(item.id)}
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
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>
                )
            }
        </>
    );
};

export default Products;

import React from 'react';
import './Shop.css';
import Search from './search/Search';
import Products from './products/Products';
import FilterTop from './filterTop/FilterTop';
import FilterLeft from './filterLeft/FilterLeft';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { AnimatePresence, motion } from "framer-motion";


const Shop = () => {
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    let screen = useRef(null);
    let body = useRef(null);


    useEffect(() => {

        const hasShopShown =  sessionStorage.getItem('hasShopShown');

        if (!hasShopShown) {
            runAnimation();
            sessionStorage.setItem('hasShopShown', 'true');
        }
    }, []);


    const runAnimation = () => {
        var tl = new TimelineMax();
        tl.fromTo(
            screen,
            { width: "0%", left: "100%" },
            {
                duration: 0.5,
                width: "100%",
                left: "0%",
                ease: Power3.easeInOut,
            }
        );
        tl.fromTo(
            screen,
            { left: "0%" },
            {
                duration: 0.5,
                left: "-100%",
                ease: Power3.easeInOut,
                delay: 0.1,
            }
        );
        tl.set(screen, { left: "100%" });
        TweenMax.to(body, 0.3, {
            css: {
                opacity: "1",
                pointerEvents: "auto",
                ease: Power4.easeInOut,
            },
        }).delay(1);
    };


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isLargeScreen = window.innerWidth >= 1732;

    return (

        <>
            <div className="contact__load-container">
                <div className="contact__load-screen" ref={(el) => (screen = el)}></div>
            </div>
            <motion.section
                className="shop"
                initial={{ opacity: 0, y: 0, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}
                animate={{ opacity: 1, y: 0, type: "spring", transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }}
                exit={{ opacity: 0, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}
                style={{
                    height: selectedProductId ? '141vh' : '',
                }}
            >
                <motion.div className="shop__container containered" >
                    <FilterTop />
                    <Search />
                    <div className="shop__content">
                        <motion.div className="shop__left"
                            initial={{ opacity: 0, y: 100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}
                            animate={{ opacity: 1, y: 0, type: "spring", transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }}
                            exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
                            <FilterLeft selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}
                            animate={{ opacity: 1, y: 0, type: "spring", transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }}
                            exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}
                            className="shop__right"
                            style={{
                                width: selectedProductId
                                    ? ''
                                    : isLargeScreen
                                        ? '110vw'
                                        : '76vw',
                            }}
                        >
                            <Products
                                selectedProductId={selectedProductId}
                                setSelectedProductId={setSelectedProductId}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.section>
        </>
    );
};

export default Shop;

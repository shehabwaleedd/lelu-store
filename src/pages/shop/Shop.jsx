import React from 'react';
import './Shop.css';
import Search from './search/Search';
import Products from './products/Products';
import FilterTop from './filterTop/FilterTop';
import FilterLeft from './filterLeft/FilterLeft';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";


const Shop = () => {
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    let screen = useRef(null);
    let body = useRef(null);


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
        runAnimation();
    }, []);


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isLargeScreen = windowWidth >= 1732;

    return (

        <>
            <div className="contact__load-container">
                <div className="contact__load-screen" ref={(el) => (screen = el)}></div>
            </div>
            <section
                className="shop"
                style={{
                    height: selectedProductId ? '141vh' : '',
                }}
            >
                <div className="shop__container containered">
                    <FilterTop />
                    <Search />
                    <div className="shop__content">
                        <div className="shop__left">
                            <FilterLeft
                                selectedProductId={selectedProductId}
                                setSelectedProductId={setSelectedProductId}
                            />
                        </div>
                        <div
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;

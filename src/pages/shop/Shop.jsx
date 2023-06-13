import React from 'react';
import './Shop.css';
import Search from './search/Search';
import Products from './products/Products';
import FilterTop from './filterTop/FilterTop';
import FilterLeft from './filterLeft/FilterLeft';
import { useState, useEffect } from 'react';

const Shop = () => {
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    );
};

export default Shop;

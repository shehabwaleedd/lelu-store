import React from 'react';
import './Shop.css';
import Search from './search/Search';
import Products from './products/Products';
import FilterTop from './filterTop/FilterTop';

const Shop = () => {


    return (
        <section className="shop">
            <div className="shop__container containered">
                <div className="shop__content">
                    <div className="shop__upper">
                        <FilterTop />
                    </div>
                    <div className="shop__lower">
                        <Products />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;

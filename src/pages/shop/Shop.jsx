import React from 'react';
import './Shop.css';
import Search from './search/Search';
import Products from './products/Products';
import FilterTop from './filterTop/FilterTop';
import FilterLeft from './filterLeft/FilterLeft';

const Shop = () => {


    return (
        <section className="shop">
            <div className="shop__container containered">
            <FilterTop />
            <Search />
                <div className="shop__content">
                    <div className="shop__left">
                        <FilterLeft />
                    </div>
                    <div className="shop__right">
                        <Products />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;

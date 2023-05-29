import React, { useState } from 'react';
import './Shop.css';
import Search from './search/Search';

const Shop = () => {


    return (
        <section className="shop">
            <div className="shop__container containered">
                <div className="shop__content">
                    <div className="shop__upper">
                        <Search />
                    </div>
                    <div className="shop__lower">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;

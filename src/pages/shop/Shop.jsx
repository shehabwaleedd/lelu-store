import React from 'react';
import './Shop.css';
import Search from './search/Search';
import Products from './products/Products';
import FilterTop from './filterTop/FilterTop';
import FilterLeft from './filterLeft/FilterLeft';
import { useState } from 'react';

const Shop = () => {

    const [selectedProductId, setSelectedProductId] = useState(null);

    return (
        <section className="shop" style={{
            height: selectedProductId ? "141vh" : "",
            }}>
            <div className="shop__container containered">
                <FilterTop />
                <Search />
                <div className="shop__content">
                    <div className="shop__left">
                        <FilterLeft selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId}/>
                    </div>
                    <div className="shop__right" 
                    style={{
                        width: selectedProductId ? "" : "76vw",
                        }}
                    >
                        <Products selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;

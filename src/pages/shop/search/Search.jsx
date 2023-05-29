import React, { useState } from 'react';
import './Search.css'

const Search = () => {
    const [filterOpen, setFilterOpen] = useState(false);
    const [teesOpen, setTeesOpen] = useState(false);
    const [hoodiesOpen, setHoodiesOpen] = useState(false);
    const [jacketsOpen, setJacketsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [activeItem, setActiveItem] = useState(-1);

    const handleFilterOpen = () => {
        setFilterOpen(!filterOpen);
        setTeesOpen(false);
        setHoodiesOpen(false);
        setJacketsOpen(false);
    };

    const handleTeesOpen = () => {
        setTeesOpen(!teesOpen);
        setFilterOpen(false);
        setHoodiesOpen(false);
        setJacketsOpen(false);
    };

    const handleHoodiesOpen = () => {
        setHoodiesOpen(!hoodiesOpen);
        setFilterOpen(false);
        setTeesOpen(false);
        setJacketsOpen(false);
    };

    const handleJacketsOpen = () => {
        setJacketsOpen(!jacketsOpen);
        setFilterOpen(false);
        setTeesOpen(false);
        setHoodiesOpen(false);
    };

    const handleItemClick = (item) => {
        setSelectedItems((prevItems) => {
            const isItemSelected = prevItems.includes(item);
            if (isItemSelected) {
                return prevItems.filter((prevItem) => prevItem !== item);
            } else {
                return [...prevItems, item];
            }
        });
    };

    const handleActive = (index) => {
        if (activeItem === index) {
            setActiveItem(-1); // Toggle off the active item
        } else {
            setActiveItem(index);
        }
    };
    return (
        <>

                <div className="shop__titles">
                    <h1>Search</h1>
                    <span>hundreds of fresh trending shirts and accessories</span>
                </div>
                <div className="shop__input">
                    <i className="bx bx-search search__iconn"></i>
                    <input type="text" placeholder="Search for products" />
                </div>
                <div className="shop__filter">
                    <div className="shop__filter__buttons">
                        <div className="shop__filter__button">
                            <button onClick={handleTeesOpen}>
                                <i className="bx bx-plus"></i>
                                <span>Tees</span>
                            </button>
                            <button onClick={handleHoodiesOpen}>
                                <i className="bx bx-plus"></i>
                                <span>Hoodies</span>
                            </button>
                            <button onClick={handleFilterOpen}>
                                <i className="bx bx-plus"></i>
                                <span>Cargos</span>
                            </button>
                            <button onClick={handleJacketsOpen}>
                                <i className="bx bx-plus"></i>
                                <span>Jackets</span>
                            </button>
                            <button onClick={handleFilterOpen}>
                                <i className="bx bx-plus"></i>
                                <span>Waist Bags</span>
                            </button>
                            <button onClick={handleFilterOpen}>
                                <i className="bx bx-plus"></i>
                                <span>Backpack</span>
                            </button>
                            <button onClick={handleFilterOpen}>
                                <i className="bx bx-plus"></i>
                                <span>Add Filter</span>
                            </button>
                        </div>
                    </div>
                    <div className={teesOpen ? "shop__filter__buttons__tees" : "hidden"}>
                        <div className="shop__filter__button__tee">
                            <button
                                className={selectedItems.includes("Summer Tees") ? "selected" : ""}
                                onClick={() => handleItemClick("Summer Tees")}
                            >
                                <i className="bx bx-plus"></i>
                                <span>Summer Tees</span>
                            </button>
                            <button
                                className={selectedItems.includes("Printed Tees") ? "selected" : ""}
                                onClick={() => handleItemClick("Printed Tees")}
                            >
                                <i className="bx bx-plus"></i>
                                <span>Printed Tees</span>
                            </button>
                            <button
                                className={selectedItems.includes("Basic Tees") ? "selected" : ""}
                                onClick={() => handleItemClick("Basic Tees")}
                            >
                                <i className="bx bx-plus"></i>
                                <span>Basic Tees</span>
                            </button>
                            <button
                                className={selectedItems.includes("Retro Tees") ? "selected" : ""}
                                onClick={() => handleItemClick("Retro Tees")}
                            >
                                <i className="bx bx-plus"></i>
                                <span>Retro Tees</span>
                            </button>
                        </div>
                    </div>
                    <div className={hoodiesOpen ? "shop__filter__buttons__tees" : "hidden"}>
                        <div className="shop__filter__button__tee">
                            <button
                                className={selectedItems.includes("Basic Hoodies") ? "selected" : ""}
                                onClick={() => handleItemClick("Basic Hoodies")}
                            >
                                <i className="bx bx-plus"></i>
                                <span>Basic Hoodies</span>
                            </button>
                            <button
                                className={selectedItems.includes("Printed Hoodies") ? "selected" : ""}
                                onClick={() => handleItemClick("Printed Hoodies")}
                            >
                                <i className="bx bx-plus"></i>
                                <span>Printed Hoodies</span>
                            </button>
                            <button
                                className={selectedItems.includes("Retro Hoodies") ? "selected" : ""}
                                onClick={() => handleItemClick("Retro Hoodies")}
                            >
                                <i className="bx bx-plus"></i>
                                <span>Retro Hoodies</span>
                            </button>
                            <button
                                className={selectedItems.includes("Trending Hoodies") ? "selected" : ""}
                                onClick={() => handleItemClick("Trending Hoodies")}
                            >
                                <i className="bx bx-plus"></i>
                                <span>Trending Hoodies</span>
                            </button>
                        </div>
                    </div>
                    <div className={jacketsOpen ? "shop__filter__buttons__tees" : "hidden"}>
                        <div className="shop__filter__button__tee">
                            <button
                                className={selectedItems.includes("Retro Jackets") ? "selected" : ""}
                                onClick={() => handleItemClick("Retro Jackets")}
                            >
                                <i className="bx bx-plus"></i>
                                <span>Retro Jackets</span>
                            </button>
                            <button
                                className={selectedItems.includes("Vintage Jackets") ? "selected" : ""}
                                onClick={() => handleItemClick("Vintage Jackets")}
                            >
                                <i className="bx bx-plus"></i>
                                <span>Vintage Jackets</span>
                            </button>
                            <button
                                className={selectedItems.includes("Basic Tees") ? "selected" : ""}
                                onClick={() => handleItemClick("Basic Tees")}
                            >
                                <i className="bx bx-plus"></i>
                                <span>Basic Tees</span>
                            </button>
                        </div>
                    </div>
                </div>
            <div className="shop__lower">
                <div className="shop__lower__container">
                    <div className="shop__container__content">
                        <div className="shop__container__content__items">
                            <div
                                className={`shop__container__content__item ${activeItem === 0 ? 'active' : ''}`}
                                onClick={() => handleActive(0)}
                            >
                                <h3>Items</h3>
                            </div>
                            <div
                                className={`shop__container__content__item ${activeItem === 1 ? 'active' : ''}`}
                                onClick={() => handleActive(1)}
                            >
                                <h3>Accessories</h3>
                            </div>
                            <div
                                className={`shop__container__content__item ${activeItem === 2 ? 'active' : ''}`}
                                onClick={() => handleActive(2)}
                            >
                                <h3>Shoes</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
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
        <div className="shop__input">
            <i className="bx bx-search search__iconn"></i>
            <input type="text" placeholder="Search for products" />
        </div>
    )
}

export default Search
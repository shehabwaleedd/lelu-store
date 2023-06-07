import React, { useState } from 'react';
import './FilterLeft.css';

const FilterLeft = () => {
    const [isExpanded, setExpanded] = useState(true);

    const categories = [
        { id: 1, name: 'Egyptian Cotton' },
        { id: 2, name: 'Cotton-Poly Blends' },
        { id: 3, name: 'Polyurethane Leather' },
        { id: 4, name: 'Synthetic' },
        { id: 5, name: 'Silk' },
        { id: 6, name: 'Wool' },
        // Add more categories as needed
    ];

    const brands = [
        { id: 1, name: 'Last 7 Days' },
        { id: 2, name: 'Last 14 Days' },
        { id: 3, name: 'Last 30 Days' },
        { id: 4, name: 'Last 3 Months' },
        // Add more brands as needed
    ];

    const discount = [
        { id: 1, name: '10% Off or More' },
        { id: 2, name: '25% Off or More' },
        { id: 3, name: '50% Off or More' },
        { id: 4, name: '70% Off or More' },
    ];

    const availability = [
        { id: 1, name: 'Include Out of Stock' },
    ];

    const status = [
        { id: 1, name: 'All' },
        { id: 2, name: 'Popular' },
        { id: 3, name: 'Trending' },
        { id: 4, name: 'New' },
    ];

    const toggleFilters = () => {
        setExpanded(!isExpanded);
    };

    return (
        <section className="filterLeft">
            <div className="filterLeft__container">
                <div className="filterLeft__content">
                    <div className="filter__titleIcon" onClick={toggleFilters}>
                        <div className="filter__title">
                            <h2>Filters</h2>
                        </div>
                        <div className="filter__icon" onClick={toggleFilters}>
                            <i className={`bx ${isExpanded ? 'bx-caret-up expandedd' : 'bx-caret-up notexpandedd'}`}></i>
                        </div>
                    </div>
                    <div className={isExpanded ? "expanded" : "notexpanded"}>
                        <div className="filterLeft__category">
                            <h3>Status</h3>
                            <ul>
                                {status.map((status) => (
                                    <li key={status.id}>
                                        <input
                                            type="checkbox"
                                            id={`category${status.id}`}
                                            name="category"
                                            value={status.name}
                                        />
                                        <label htmlFor={`category${status.id}`}>{status.name}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="filterLeft__category">
                            <h3>Materials</h3>
                            <ul>
                                {categories.map((category) => (
                                    <li key={category.id}>
                                        <input
                                            type="checkbox"
                                            id={`category${category.id}`}
                                            name="category"
                                            value={category.name}
                                        />
                                        <label htmlFor={`category${category.id}`}>{category.name}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="filterLeft__arrivals">
                            <h3>New Arrivals</h3>
                            <ul>
                                {brands.map((brand) => (
                                    <li key={brand.id}>
                                        <input type="checkbox" id={`brand${brand.id}`} name="brand" value={brand.name} />
                                        <label htmlFor={`brand${brand.id}`}>{brand.name}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="filterLeft__discount">
                            <h3>Discount</h3>
                            <ul>
                                {discount.map((discount) => (
                                    <li key={discount.id}>
                                        <input type="checkbox" id={`discount${discount.id}`} name="discount" value={discount.name} />
                                        <label htmlFor={`discount${discount.id}`}>{discount.name}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="filterLeft__availability">
                            <h3>Availability</h3>
                            <ul>
                                {availability.map((availability) => (
                                    <li key={availability.id}>
                                        <input type="checkbox" id={`availability${availability.id}`} name="availability" value={availability.name} />
                                        <label htmlFor={`availability${availability.id}`}>{availability.name}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilterLeft;

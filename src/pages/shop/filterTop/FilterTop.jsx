import React from 'react';
import './FilterTop.css';
import Data from './Data';
import { useEffect } from 'react';


const FilterTop = () => {
    const [maxPrice, setMaxPrice] = React.useState(1000);
    const [expandStates, setExpandStates] = React.useState({});
    const [selectedOptions, setSelectedOptions] = React.useState({});

    const handleExpand = (cardId) => {
        setExpandStates((prevState) => ({
            ...prevState,
            [cardId]: !prevState[cardId]
        }));
    };

    const handleOptionSelect = (cardId, option) => {
        setSelectedOptions((prevState) => ({
            ...prevState,
            [cardId]: option
        }));
    };

    const handleOutsideClick = (e) => {
        const isOutside = !e.target.closest('.filterTop__card');
        if (isOutside) {
            setExpandStates({});
            setSelectedOptions({});
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <section className="filterTop">
            <div className="filterTop__container">
                <div className="filterTop content">
                    <div className="filterTop__cards">
                        {Data.map(({ id, title, icon }) => (
                            <div className="filterTop__card" key={id}>
                                <div className="card__content">
                                    <div className="card__title">
                                        <i className={icon}></i>
                                        <h3>{title}</h3>
                                    </div>
                                    <div className="card__dropdown" onClick={() => handleExpand(id)}>
                                    <i className={expandStates[id] ? 'bx bx-caret-up filterLeft__dropdownIconFlip' : 'bx bx-caret-up filterLeft__dropdownIconFlipNot'}></i>
                                    </div>
                                </div>
                                <div className={expandStates[id] ? "card__submenu" : "card__hidden"}>
                                    <ul className="submenu__options">
                                        {Object.entries(Data[id - 1])
                                            .filter(([key]) => key.startsWith('option'))
                                            .map(([key, option]) => (
                                                <li key={key} className={`option ${selectedOptions[id] === option ? 'selected' : ''}`} onClick={() => handleOptionSelect(id, option)}>
                                                    <input type="checkbox" checked={selectedOptions[id] === option} onChange={() => handleOptionSelect(id, option)}/>
                                                    {option}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                        <div className="filterTop__filter">
                            <div className="filterItem">
                                <div className="filterItem__combined">
                                    <h2>Filter by Price</h2>
                                    <span>0 ~ {maxPrice} EGP</span>
                                </div>
                                <input
                                    type="range"
                                    min={0}
                                    max={1000}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilterTop;

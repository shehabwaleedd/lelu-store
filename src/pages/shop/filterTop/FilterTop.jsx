import React from 'react'
import './FilterTop.css'
import Data from './Data'


const FilterTop = () => {

    const [maxPrice, setMaxPrice] = React.useState(1000)
    const [sort, setSort] = React.useState(null)

    return (
        <section className='filterTop'>
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
                                    <div className="card__dropdown">
                                        <i className='bx bxs-chevron-down'></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="filterTop__filter">
                            <div className="filterItem">
                                <div className="filterItem__combined">
                                    <h2>Filter by Price</h2>
                                    <span>0 ~ {maxPrice}  EGP</span>
                                </div>
                                <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FilterTop
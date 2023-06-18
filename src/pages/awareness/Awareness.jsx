import React from 'react'
import './Awareness.css'
import Data from "./blog/Data"
import { Link } from 'react-router-dom';

const Awareness = () => {
    return (
        <section className='awareness'>
            <div className="awareness__container">
                <div className="awareness__content">
                    {Data.map(({id, category, title}) => (
                        <div className={`awareness__data data${id}`} key={id}>
                            <div className="awareness__tag">
                                <p>{category}</p>
                            </div>
                            <div className="awareness__title">
                                <h3>{title}</h3>
                                <Link to={`/blog/${id - 1}`}><i className='bx bx-right-arrow-alt'></i></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mainproducts_title">
                <h2 className='mainproducts__title'>Currated Picks</h2>
            </div>
        </section>
    )
}

export default Awareness
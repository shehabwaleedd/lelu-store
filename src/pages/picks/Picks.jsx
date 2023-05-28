import React from 'react'
import './Picks.css'
import bestSeller from "../../assets/lelu6.jpg"
import casual from "../../assets/casual3.jpg"
import men from "../../assets/men2.jpg"
import women from "../../assets/women1.jpg"
import Data from './Data'


const Picks = () => {
    return (
        <section className='picks section'>
            <div className="picks__wrapper">
                {Data.map(({ id, title, img, alt, desc }) => (
                    <div className="picks__inner__card" key={id}>
                        <img src={img} alt={alt} draggable="false"/>
                        <div className="picks__inner__card__info">
                            <h1>{desc}</h1>
                        </div>
                    </div>
                )
                )}

            </div>
        </section>
    )
}

export default Picks
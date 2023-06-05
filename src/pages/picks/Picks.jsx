import React from 'react'
import './Picks.css'
import Data from './Data'


const Picks = () => {
    return (
        <section className='picks section'>
            <div className="picks__wrapper">
                {Data.map(({ id, title, img, alt, desc }) => (
                    <div className="picks__inner__card" key={id}>
                        <img src={img} alt={alt} draggable="false" className='inner__card__img'/>
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
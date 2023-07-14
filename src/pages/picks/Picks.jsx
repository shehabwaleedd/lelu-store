import React from 'react'
import './Picks.css'
import Data from './Data'
import {motion} from 'framer-motion'

const Picks = () => {
    return (
        <motion.section className='picks section'
        initial={{ opacity: 0, x: 100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} 
        animate={{ opacity: 1, x: 0, type: "tween", transition: { delay: 0.2, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} 
        exit={{ opacity: 0, x: -500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}
        >
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
        </motion.section>
    )
}

export default Picks
import React from 'react'
import './Awareness.css'

const Awareness = () => {
    return (
        <section className='awareness'>
            <div className="awareness__container">
                <div className="awareness__content">
                    <div className="awareness__data data1">
                        <div className="awareness__guide">
                            <p>Your Guide</p>
                        </div>
                        <div className="awareness__tag">
                            <p>Fashion</p>
                        </div>
                        <div className="awareness__title">
                            <h3>How To Choose Your Colors?</h3>
                            <i className='bx bx-right-arrow-alt'></i>
                        </div>
                    </div>
                    <div className="awareness__data data2">
                        <div className="awareness__tag photography">
                            <p>Photography</p>
                        </div>
                        <div className="awareness__title">
                            <h3>Few Tips of how to pose in your outfit</h3>
                            <i className='bx bx-right-arrow-alt'></i>
                        </div>
                    </div>
                    <div className="awareness__data data3">
                        <div className="awareness__tag">
                            <p>Insights</p>
                        </div>
                        <div className="awareness__title">
                            <h3>Which Materials You Should Avoid?</h3>
                            <i className='bx bx-right-arrow-alt'></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainproducts_title">
                <h2 className='mainproducts__title'>Currated Picks</h2>
            </div>
        </section>
    )
}

export default Awareness
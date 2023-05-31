import React from 'react'
import './Mission.css'
import men2 from '../../assets/men2.jpg'

const Mission = () => {
    return (
        <section className='mission'>
            <div className="mission__container">
                <div className="mission__content">
                    <div className="content__left">
                        <div className="left__upper">
                            <h2>We're Changing</h2>
                            <h2>The Way Things</h2>
                            <h2>Are Made</h2>
                        </div>
                        <div className="left__lower">
                            <div className="lower__content">
                                <div className="lower__mission">
                                    <div className="mission__mission">
                                        <i className='bx bx-globe' ></i>
                                        <h2>Mission</h2>
                                    </div>
                                    <p>Our mission is to make quality clothing and accessories for every individual. We believe that fashion should be personal and diversified. Fashion should be accessible and fun. Fashion should make you feel good.</p>
                                </div>
                                <div className="lower__sustainbility">
                                    <div className="sustainability__sustainability">
                                        <i className='bx bx-planet' ></i>
                                        <h2>Sustainability</h2>
                                    </div>
                                    <p>Our products are made with organic cotton and printed in the UK in a renewable energy-powered factory. We are committed to sustainable manufacturing practices and pay our workers a fair wage.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content__right">
                        <img src={men2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission
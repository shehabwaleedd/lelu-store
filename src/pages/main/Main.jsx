import React from 'react'
import './Main.css'
import img1 from '../../assets/land1.jpg'
import img2 from '../../assets/women1.jpg'
import img3 from '../../assets/women3.jpg'
import logo from '../../assets/logo_lelu.webp'

const Home = () => {

    return (
        <section className='home section'>
            <div className="home__container grid">
                <div className="swipere mySwiper">
                    <div className="slider-nav">
                        <div className="button-next">
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        <div className="button-prev">
                            <i className='bx bx-chevron-right'></i>
                        </div>
                    </div>
                    <div className="swiper-wrapper">
                        <div className="swipere-slide">
                            <div className="swipere__p">
                                <p>new arrivals</p>
                            </div>
                            <div className="sing-details">
                                <h2 className='sing__h2'>LELU is giving </h2>
                                <h2 className='sing__h22'> you taste of</h2>
                                <h2 className='sing__h222'>What's Coming</h2>
                            </div>
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
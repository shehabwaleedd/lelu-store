import React from 'react';
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Controller } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './TopPicks.css';
import Data from './Data';

const TopPicks = () => {
    return (
        <section className="toppicks section">
            <h2 className='picks_title'>Curated Picks</h2>
            <div className="toppicks__container">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    className="toppicks__carousel"
                    slidesPerView={3}
                    spaceBetween={5}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}

                >
                    <div className="toppicks__cards">
                        {Data.map(({ id, title, subtitle, image, price }) => (
                            <SwiperSlide key={id}>
                                <div className="toppicks__card">
                                    <img src={image} alt="" />
                                    <h2>{title}</h2>
                                    <p className='card__subtitle'>{subtitle}</p>
                                    <div className="card__bottom">
                                        <p className='card__price'>EGP {price}</p>
                                    </div>
                                    <button className="toppicks__button button button--flex">
                                        <h4>ADD TO CART</h4>
                                    </button>
                                    <div className="toppicks__like">
                                        <i className='bx bx-heart'></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default TopPicks;

import React, { useEffect } from 'react';
import './Main.css';
import Data from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Controller } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {

    return (
        <section className='home section'>
            <div className='home__container grid'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    className='main__carousel'
                    spaceBetween={150}
                    loop={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                >
                    <div className='swipere mySwiper'>
                        <div className='swiper-wrapper'>
                            {Data.map(({ id, image, h2, h22, h222 }) => (
                                <SwiperSlide key={id}>
                                    <div className='swipere-slide'>

                                        <div className='home-details'>
                                            <div className='swipere__p'>
                                                <p>new arrivals</p>
                                            </div>
                                            <h2 className='sing__h2'>{h2}</h2>
                                            <h2 className='sing__h22'>{h22}</h2>
                                            <h2 className='sing__h222'>{h222}</h2>
                                        </div>
                                        <img src={image} alt='' />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default Home;

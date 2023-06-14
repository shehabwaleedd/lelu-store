import './Swipe.scss';
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cube';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/land5.jpg';
import img2 from '../../../assets/lelu5.jpg';
import img3 from '../../../assets/lelu12.jpg';
import img4 from '../../../assets/lelu3.jpg';
import img5 from '../../../assets/land9.jpg';

const Swipe = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            mousewheel: {},
            effect: 'cube',
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
        });
    }, []);

    return (
        <>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="container-general">
                            <div className="gallery-wrap wrap-effect-1">
                                <Link to="/shop" className="item" style={{ backgroundImage: `url(${img1})` }}>
                                </Link>
                                <Link to="/shop" className="item" style={{ backgroundImage: `url(${img2})` }}>
                                </Link>
                                <Link to="/shop" className="item" style={{ backgroundImage: `url(${img3})` }}>
                                </Link>
                                <Link to="/shop" className="item" style={{ backgroundImage: `url(${img4})` }}>
                                </Link>
                                <Link to="/shop" className="item" style={{ backgroundImage: `url(${img5})` }}>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Swipe;

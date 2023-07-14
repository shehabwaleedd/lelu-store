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
import { useRef } from 'react';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { AnimatePresence, motion } from "framer-motion";

const Swipe = () => {
    let screen = useRef(null);
    let body = useRef(null);

    useEffect(() => {

        const hasMainShown =  sessionStorage.getItem('hasMainShown');

        if (!hasMainShown) {
            runAnimation();
            sessionStorage.setItem('hasMainShown', 'true');
        }
    }, []);


    const runAnimation = () => {
        var tl = new TimelineMax();
        tl.fromTo(
            screen,
            { width: "0%", right: "100%", },
            {
                duration: 0.38,
                width: "100%",
                right: "0%",
                ease: Power3.easeInOut,
            }
        );
        tl.fromTo(
            screen,
            { right: "0%" },
            {
                duration: 1.8,
                right: "-100%",
                ease: Power3.easeInOut,
                delay: 0.1,
            }
        );
        tl.set(screen, { right: "100%" });
        TweenMax.to(body, 0.3, {
            css: {
                opacity: "1",
                pointerEvents: "auto",
                ease: Power4.easeInOut,
            },
        }).delay(1);
    };


    return (
        <>
            <div className="main__load-container">
                <div className="contact__load-screen" ref={(el) => (screen = el)}></div>
            </div>
            <motion.div className="swiper-container"
                    initial={{ opacity: 0, y: 100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} 
                    animate={{ opacity: 1, y: 0, type: "spring", transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} 
                    exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}
            >
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
            </motion.div>
        </>
    );
};

export default Swipe;

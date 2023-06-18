import React from 'react'
import './Blog.css'
import ScrollAnimation from "./ScrollAnimation";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef } from 'react';
import { motion, useScroll, useSpring } from "framer-motion"
import { Link } from 'react-router-dom';
import Data from './Data';




const Blog = () => {

    const { id } = useParams();

    const post = Data[id]

    let screen = useRef(null);
    let body = useRef(null);


    const runAnimation = () => {
        var tl = new TimelineMax();
        tl.fromTo(
            screen,
            { width: "0%", left: "100%" },
            {
                duration: 0.5,
                width: "100%",
                left: "0%",
                ease: Power3.easeInOut,
            }
        );
        tl.fromTo(
            screen,
            { left: "0%" },
            {
                duration: 0.5,
                left: "-100%",
                ease: Power3.easeInOut,
                delay: 0.1,
            }
        );
        tl.set(screen, { left: "100%" });
        TweenMax.to(body, 0.3, {
            css: {
                opacity: "1",
                pointerEvents: "auto",
                ease: Power4.easeInOut,
            },
        }).delay(1);
    };


    useEffect(() => {
        runAnimation();
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0});
    }, []);



    return (
        <>
            <ScrollAnimation />
            <div className="contact__load-container">
                <div className="contact__load-screen" ref={(el) => (screen = el)}></div>
            </div>
            <div className="blog__details">
                <div className='blog__card_details'>
                    <div className='blog__image_container'>
                        <img src={post.img} alt='' />
                    </div>

                    <div className="blog__bottom containered">
                        <div className="blog__details_button">
                            <div className='post__tag-details'>
                                <a href="/" className="post__hashtag-details">#{post.category}</a>
                            </div>
                        </div>
                        <div className="blog__details_post-textanddate">
                            <h3 className="post__title_name-details">{post.title}</h3>
                        </div>
                        <div className="blog__details_post-text">
                            <p className="post__subtitle">{post.desc}</p>
                            <p className="post__subtitle">{post.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
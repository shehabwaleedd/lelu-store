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


    return (
        <>
            <ScrollAnimation />
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
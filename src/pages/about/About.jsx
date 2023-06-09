import React from 'react'
import './About.css'
import { useRef } from 'react';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { motion, useAnimation, useScroll } from 'framer-motion';

import { useEffect } from 'react';
import aboutImg from "../../assets/aboutus.jpg"
import haidy from "../../assets/haidy.jpeg"
import mina from "../../assets/mina.jpg"

const About = () => {

    // let screen = useRef(null);
    // let body = useRef(null);
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    // useEffect(() => {
    //     runAnimation();
    // }, []);



    // const runAnimation = () => {
    //     var tl = new TimelineMax();
    //     tl.fromTo(
    //         screen,
    //         { width: "0%", right: "100%" },
    //         {
    //             duration: 0.5,
    //             width: "100%",
    //             right: "0%",
    //             ease: Power3.easeInOut,
    //         }
    //     );
    //     tl.fromTo(
    //         screen,
    //         { right: "0%" },
    //         {
    //             duration: 0.5,
    //             right: "-100%",
    //             ease: Power3.easeInOut,
    //             delay: 0.1,
    //         }
    //     );
    //     tl.set(screen, { right: "100%" });
    //     TweenMax.to(body, 0.3, {
    //         css: {
    //             opacity: "1",
    //             pointerEvents: "auto",
    //             ease: Power4.easeInOut,
    //         },
    //     }).delay(1);
    // };

    return (
        <>
            {/* <div className="about__load-container">
                <div className="about__load-screen" ref={(el) => (screen = el)}></div>
            </div> */}
            <section className='about '>
                <div className="about__container">
                    <div className="about__upper">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="about__content">
                        <div className="about__left_title">
                            <h1>OUR FOUNDING STORY</h1>
                        </div>
                        <div className="about__left_text">
                            <p>In the bustling streets of Shoubra, Giza, a young and ambitious Egyptian man embarked on a journey that would shape the fashion landscape. As the founder of a clothing brand, his vision and creativity knew no bounds. With a passion for vibrant colors and funky designs, he sought to redefine the fashion industry, one garment at a time.</p>
                            <p>His small store quickly became a hub of creativity and self-expression, attracting fashion enthusiasts from near and far. The unique combination of vivid hues and meticulous craftsmanship set his brand apart, earning it a reputation for quality and originality. As word spread, his brand grew in popularity, captivating the hearts of individuals who sought to make a bold statement through their clothing.</p>
                            <p>Driven by his entrepreneurial spirit, the young founder set his sights on a new horizon: Dubai. With its cosmopolitan atmosphere and fashion-forward culture, it was the perfect platform to showcase his brand to a global audience. Opening a flagship store in one of Dubai's fashion districts, he merged his Egyptian flair with the city's vibrant lifestyle, creating collections that resonated with people from diverse backgrounds.</p>
                            <p>Today, his brand stands as a testament to the power of individuality and self-expression. With each unique creation, he inspires individuals to embrace their own style and confidently showcase their true selves to the world. From humble beginnings in Shoubra to the international stage of Dubai, his brand continues to flourish, leaving an indelible mark on the fashion industry and empowering individuals to embrace their own unique fashion journey.</p>
                            <div className="about__left_dash"></div>
                            <div className="about__left_horizontal"></div>
                        </div>
                    </div>
                    <motion.div
                        ref={ref}
                        className="about__what_it_feels"
                        transition={{ duration: 0.5, type: 'spring' }}
                    >
                        <motion.h1 initial={{ y: 50 }} whileInView={{y: 0}} transition={{duration: 1, type: "spring"}} >WHAT IT'S LIKE TO WORK WITH US</motion.h1>
                        <motion.div  initial={{ y: 50 }} whileInView={{y: 0}} transition={{duration: 1, type: "spring"}} className="what__it_feels_content">
                            <div className="col_1">
                                <h2>Customer Satisfaction</h2>
                                <span>Your satisfaction is our top priority. We strive to deliver an exceptional customer experience from start to finish. From personalized consultations to ensuring timely delivery, we go above and beyond to exceed your expectations. We value your feedback and continuously work towards improving our services to better serve your needs.</span>
                            </div>
                            <div className="col_2">
                                <h2>Uncompromising Standards</h2>
                                <span>We hold ourselves to the highest standards when it comes to the quality of our products. Each piece is carefully crafted with a focus on durability, comfort, and functionality. We believe that by offering exceptional quality, we provide our customers with clothing that they can rely on and enjoy for years to come.</span>
                            </div>
                            <div className="col_3">
                                <h2>Value in Every Garment</h2>
                                <span>Revolutionizing with purpose. Our strategic branding ignites impactful change. Embrace our vision to disrupt the fashion industry, creating value in every garment. Together, let's make a real impact and drive meaningful transformation in and beyond your business.</span>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div ref={ref} className="our__founding__story">
                        <motion.h1 initial={{ x: -50, opacity: 0 }} whileInView={{x: 10, opacity: 1}} transition={{duration: 0.5, type: "spring"}} >OUR FOUNDING STORY</motion.h1>
                        <motion.span initial={{ x: -50, opacity: 0 }} whileInView={{x: 10, opacity: 1}} transition={{duration: 0.5, type: "spring"}} >MEET FACES BEHIND <br /> THE BRANDS</motion.span>
                    </motion.div>
                    <motion.div ref={ref} className="our__founding__content">
                        <motion.h3 initial={{ x: -50, opacity: 0 }} whileInView={{x: 10, opacity: 1}} transition={{duration: 0.5, type: "spring"}}>THE COUPLE WHO REDFINED THE INDUSTRY</motion.h3>
                        <motion.span initial={{ x: -50, opacity: 0 }} whileInView={{x: 10, opacity: 1}} transition={{duration: 0.5, type: "spring"}}>Mina and his fiancee Haidy, have revolutionized the clothing industry with their unique designs, captivating the attention of Egypt's youth. Inspired by ancient Egyptian art, their innovative approach fused bold colors and unconventional patterns. Their designs quickly gained popularity, propelling them to the forefront of the fashion scene. Their success extended internationally, solidifying their status as trendsetters and influencers. Haidy and Mina's story is a testament to passion, creativity, and the belief in a unique vision, inspiring a generation to embrace individuality and cultural heritage.</motion.span>
                    </motion.div>
                    <div className="founders__div">
                        <motion.div ref={ref} className="founders__div_contents">
                            <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{x: 10, opacity: 1}} transition={{duration: 0.5, type: "spring"}} className="founders__div_content">
                                <div className="founders__content">
                                    <h1>MINA FAYEZ</h1>
                                    <span>CEO & FOUNDER</span>
                                </div>
                                <div className="founders__imgText">
                                    <img src={mina} alt="Mina Fayez" className='mina' />
                                    <p>In the bustling streets of Shoubra, Giza, a young and ambitious Egyptian man embarked on a journey that would shape the fashion landscape. As the founder of a clothing brand, his vision and creativity knew no bounds. With a passion for vibrant colors and funky designs, he sought to redefine the fashion industry, one garment at a time. With a Fine Art degree under his belt, he embarked on a mission to expand his artistic philosophy beyond traditional mediums. Inspired by the desire to merge art with everyday life, Mina ventured into the world of fashion. Combining his artistic vision with impeccable craftsmanship, he began creating wearable art that captivated the senses. Each design he crafted became a canvas, expressing his unique perspective and creative flair. From intricately hand-painted garments to avant-garde silhouettes, Mina's creations became a visual feast for fashion enthusiasts seeking something extraordinary Through his innovative approach, he aimed to redefine the boundaries of fashion and challenge conventional norms. Today, Mina continues to evolve as an artist, pushing the boundaries of artistic expression in the realm of fashion, and captivating the hearts and minds of individuals who appreciate the fusion of art and style.</p>
                                </div>
                            </motion.div>
                            <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{x: 0, opacity: 1}} transition={{duration: 0.5, type: "spring"}} className="founders__div_content">
                                <div className="founders__content">
                                    <h1>HAIDY GABRAH</h1>
                                    <span>HEAD OF DESIGN DEPARTMENT</span>
                                </div>
                                <div className="founder__imgTextHaidy">
                                    <div className="text">
                                        <p>Haidy's transition from the scientific world to the world of fashion has been nothing short of inspiring. Embracing her innate creativity and a deep love for aesthetics, she embarked on a transformative journey that led her to become a renowned fashion designer.</p>
                                        <p>With her keen eye for detail and an unwavering commitment to craftsmanship, Haidy's designs are a reflection of her distinct artistic style. Her pieces are known for their innovative and avant-garde approach, blending elements of tradition with modern sensibilities.</p>
                                        <p>Through her captivating designs, Haidy invites you into her creative world, where imagination knows no bounds. Each garment she creates tells a unique story, a testament to her passion for self-expression and her desire to empower individuals through fashion.</p>
                                    </div>
                                    <img src={haidy} alt="Haidy Gabrah" className='haidy' />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
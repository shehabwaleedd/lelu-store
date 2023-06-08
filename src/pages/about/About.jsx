import React from 'react'
import './About.css'
import { useRef } from 'react';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useEffect } from 'react';
import aboutImg from "../../assets/aboutus.jpg"
import haidy from "../../assets/haidy.jpeg"
import mina from "../../assets/mina.jpg"

const About = () => {

    let screen = useRef(null);
    let body = useRef(null);

    // useEffect(() => {
    //     runAnimation();
    // }, []);

    const runAnimation = () => {
        var tl = new TimelineMax();
        tl.fromTo(
            screen,
            { width: "0%", right: "100%" },
            {
                duration: 0.5,
                width: "100%",
                right: "0%",
                ease: Power3.easeInOut,
            }
        );
        tl.fromTo(
            screen,
            { right: "0%" },
            {
                duration: 0.5,
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
            <div className="about__load-container">
                <div className="about__load-screen" ref={(el) => (screen = el)}></div>
            </div>
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
                    <div className="about__what_it_feels">
                        <h1>WHAT IT'S LIKE <br /> TO WORK WITH US</h1>
                        <div className="what__it_feels_content">
                            <div className="col_1">
                                <h2>CHANGE IS MORE THAN NEW CLOTHES </h2>
                                <span>We believe in turning things around for the right reasons. We'll help you shake things up and make a real impact with strategic branding that drives meaningful change both inside and outside of your business.</span>
                            </div>
                            <div className="col_2">
                                <h2>CHANGE IS MORE THAN NEW CLOTHES </h2>
                                <span>We believe in turning things around for the right reasons. We'll help you shake things up and make a real impact with strategic branding that drives meaningful change both inside and outside of your business.</span>
                            </div>
                            <div className="col_3">
                                <h2>Value in Every Garment</h2>
                                <span>We believe in turning things around for the right reasons. We'll help you shake things up and make a real impact with strategic branding that drives meaningful change both inside and outside of your business.</span>
                            </div>
                        </div>
                    </div>
                    <div className="our__founding__story">
                        <h1>OUR FOUNDING STORY</h1>
                        <span>MEET FACES BEHIND <br /> THE BRANDS</span>
                    </div>
                    <div className="our__founding__content">
                        <h3>THE ONE WITH TWO GUYS RETURNING HOME</h3>
                        <span>Before founding TurnUs, Jarek worked for a branding agency in Stuttgart, while Oskar was doing the same 925 km away(674 miles for our English and US friends) in London. It was fate that brought them together (well, actually it was Behance) when Oskar was working on a project in Poland and sought local help. Despite their differences - Jarek is a quiet, introverted cat lover, while Oskar is a talkative dog person - the project was a success thanks to their complementary strengths - strategy and design. And so, TurnUs was born - a perfect combination of  unique personalities and expertise.</span>
                    </div>
                    <div className="founders__div">
                        <div className="founders__div_contents">
                            <div className="founders__div_content">
                                <div className="founders__content">
                                    <h1>MINA FAYEZ</h1>
                                    <span>CEO & FOUNDER</span>
                                </div>
                                <div className="founders__imgText">
                                    <img src={mina} alt="" className='mina' />
                                    <h2>In the bustling streets of Shoubra, Giza, a young and ambitious Egyptian man embarked on a journey that would shape the fashion landscape. As the founder of a clothing brand, his vision and creativity knew no bounds. With a passion for vibrant colors and funky designs, he sought to redefine the fashion industry, one garment at a time.</h2>
                                </div>
                            </div>
                            <div className="founders__div_content">
                                <div className="founders__content">
                                    <h1>HAIDY GABRA</h1>
                                    <span>HEAD OF DESIGN DEPARTMENT</span>
                                </div>
                                <div className="founder__imgTextHaidy">
                                    <div className="text">
                                        <p>Haidy's transition from the scientific world to the world of fashion has been nothing short of inspiring. Embracing her innate creativity and a deep love for aesthetics, she embarked on a transformative journey that led her to become a renowned fashion designer.</p>
                                        <p>With her keen eye for detail and an unwavering commitment to craftsmanship, Haidy's designs are a reflection of her distinct artistic style. Her pieces are known for their innovative and avant-garde approach, blending elements of tradition with modern sensibilities.</p>
                                        <p>Through her captivating designs, Haidy invites you into her creative world, where imagination knows no bounds. Each garment she creates tells a unique story, a testament to her passion for self-expression and her desire to empower individuals through fashion.</p>
                                    </div>
                                    <img src={haidy} alt="" className='haidy' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
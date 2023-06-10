import React, { useState, useEffect, useRef } from "react";
import "./Faqs.css";
import { gsap } from "gsap";
import FaqsData from "./Data";
import { motion, AnimatePresence } from "framer-motion";

const Faqs = () => {

    const [activeAccordion, setActiveAccordion] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
    };

    const closeAccordions = () => {
        const accordions = document.getElementsByClassName('accordion');
        for (let i = 0; i < accordions.length; i++) {
            accordions[i].classList.remove('open');
            accordions[i].nextElementSibling.style.maxHeight = null;
            accordions[i].getElementsByClassName('icon')[0].innerHTML = '+';
        }
    };

    const toggleAccordion = (index) => {
        const accordion = document.getElementsByClassName('accordion')[index];
        const panel = accordion.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            accordion.classList.remove('open');
            accordion.getElementsByClassName('icon')[0].innerHTML = '+';
        } else {
            closeAccordions();
            panel.style.maxHeight = panel.scrollHeight + 'px';
            accordion.classList.toggle('open');
            accordion.getElementsByClassName('icon')[0].innerHTML = '-';
        }
    };
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <section className="faqs section">
            <div className="faq__text">
                <h1>FREQUEST ANSWERED QUESTIONS</h1>
            </div>
            <div className="faqs__container">
                {FaqsData.map(({ id, question, answer }) => (
                    <div className={`item-1 ${activeAccordion === { id } ? 'open' : ''}`} key={id}>
                        <div className="accordion" onClick={() => toggleAccordion(id - 1)}>
                            <div className="title"><h1><span>- {id} </span>{question}</h1></div>
                            <div className="icon">{activeAccordion === 0 ? '-' : '+'}</div>
                        </div>
                        <div className="panel">
                            <p>{answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faqs;
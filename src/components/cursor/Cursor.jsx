import React, { useState, useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = (Props) => {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    const dotRef = useRef(null);
    const outlineRef = useRef(null);
    const dotSize = 0.5; // Size of the cursor dot
    const animationRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = requestAnimationFrame(() => {
                const posx = e.clientX;
                const posy = e.clientY;
                setCursorX(posx);
                setCursorY(posy);
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    useEffect(() => {
        const dotElement = dotRef.current;
        const outlineElement = outlineRef.current;

        const dotSizeHalf = dotSize / 1.5;
        const outlineSizeHalf = outlineElement.offsetWidth / 2;

        const dotOffsetX = -dotSizeHalf + outlineSizeHalf;
        const dotOffsetY = -dotSizeHalf + outlineSizeHalf;

        

        dotElement.style.transform = `translate(${cursorX - 9}px, ${cursorY - 9}px)`;
        outlineElement.style.transform = `translate(${cursorX - outlineSizeHalf}px, ${cursorY - outlineSizeHalf}px)`;
    }, [cursorX, cursorY]);


    return (
        <>
            <div ref={dotRef} className={Props.navOpen ? "cursor-dot spin" : "cursor-dot"} id='cursor-dot'></div>
            <div ref={outlineRef} className={Props.navOpen ? "cursor-outline spin" : "cursor-outline"} id='cursor-outline'></div>
        </>
    );
};

export default Cursor;

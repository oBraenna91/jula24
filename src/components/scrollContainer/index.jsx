import React, { useState, useEffect } from 'react';
import css from './scroll.module.scss';

export default function ScrollingComponent({ children, containerName }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const container = document.querySelector(`.${containerName}`);
            const containerTop = container.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const threshold = (windowHeight / 100) * 85;

            if (containerTop <= threshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [containerName]);

    return (
        <div className={containerName}>
            <div className={`${css.hidden} ${isVisible ? css.visible : ''}`}>
                {children}
            </div>
        </div>
    );
}
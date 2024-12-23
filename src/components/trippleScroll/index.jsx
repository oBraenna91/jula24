import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

export default function ScrollingTrio({ children, containerName }) {
    const [isCentered, setIsCentered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const container = document.querySelector(`.${containerName}`);
            const containerTop = container.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const threshold = (windowHeight / 100) * 75;

            if (containerTop <= threshold) {
                setIsCentered(true);
            } else {
                setIsCentered(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [containerName]);

    return (
        <div className={containerName}>
          <div className={`${styles.container} ${isCentered ? styles.visible : ''}`}>
            {/* Første child */}
            <div className={styles.child1}>
              {children[0]}
            </div>
            <div className={styles.child2}>
              {children[1]}
            </div>
            <div className={styles.child3}>
              {children[2]}
            </div>
          </div>
        </div>
      );
}
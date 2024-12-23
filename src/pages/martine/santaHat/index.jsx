import React, { useState, useEffect } from "react";
import './styles.module.scss';
import img1 from '../../../images/IMG_34AE4A97260A-1.jpeg';
import hat from '../../../images/julenisselue.png';

const SantaHatEffect = () => {
  const [isHatVisible, setHatVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPoint = 150; // Når du scroller 150px, vis lua
      if (window.scrollY > scrollPoint) {
        setHatVisible(true);
      } else {
        setHatVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="santa-hat-effect">
      <div className="main-image">
        <img
          src={img1}
          alt="Søsteren min"
          className="sister-image"
        />
      </div>
      <img
        src={hat}
        alt="Nisselue"
        className={`santa-hat ${isHatVisible ? "animate" : ""}`}
      />
    </div>
  );
};

export default SantaHatEffect;
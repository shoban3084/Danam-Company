import React, { useRef, useEffect, useState } from 'react';
import './ClientsSection.css';

import Ranbaxy from '../../assets/logo/Ranbaxy_Logo.png';
import Aricent from '../../assets/logo/Aricent.png';
import Butterfly from '../../assets/logo/butterfly.png';
import Lanco from '../../assets/logo/lanco.gif';
import Salcomp from '../../assets/logo/salcomp.png';
import Sheelnac from '../../assets/logo/sheelnac.jpg';
import Ilfs from '../../assets/logo/ilfs.png';
import Thalappakatti from '../../assets/logo/Logo_of_Dindigul_Thalappakatti_Restaurant.png';
import Ogp from '../../assets/logo/OGP-logo.gif';
import Shriram from '../../assets/logo/shriram-epc.jpg';
import Nippon from '../../assets/logo/nippon-logo.png';
import TvsSun from '../../assets/logo/tvs-sun.jpg';
import Harita from '../../assets/logo/harita.jpg';
import Pioneer from '../../assets/logo/pioneer.png';
import Powergear from '../../assets/logo/powergear.jpeg';
import CssCorp from '../../assets/logo/CSS_Corp.png';
import Regen from '../../assets/logo/regen_newlogo.jpg';

const logos = [
  Ranbaxy, Aricent, Butterfly, Lanco, Salcomp, Sheelnac, Ilfs, Thalappakatti,
  Ogp, Shriram, Nippon, TvsSun, Harita, Pioneer, Powergear, CssCorp, Regen,
];

export default function ClientsSection() {
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scroll = () => {
      if (!isHovered) {
        slider.scrollLeft += 1;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="sponsors-section">
      <div className="container">
        <div className="section-title"><h2>Our Clients</h2></div>
        <div className="title-text"><p>Trusted by top-tier organizations</p></div>

        <div className="slider-wrapper">
          <ul
            className="sponsors-slider"
            ref={sliderRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <li key={idx}>
                <img src={logo} alt={`Logo ${idx}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import slides from "../../data/sliderData";
import './MainSlider.css';

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideDuration = 5000; // 5 seconds per slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideDuration);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="main-slider">
      {slides.map((slide, index) => (
        <div
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          key={slide.id}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay" />
          <div className="slide-content">
            <h1 className="slide-title">
              {slide.title.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </h1>
            <p className="slide-subtitle">{slide.subtitle}</p>
            <div className="slide-buttons">
              {slide.buttons.map((btn, i) => (
                <a key={i} href={btn.link} className="btn-two">
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Previous / Next Controls */}
      <button className="slider-arrow prev" onClick={handlePrev}>
        ❮
      </button>
      <button className="slider-arrow next" onClick={handleNext}>
        ❯
      </button>

      {/* Timer Bar */}
      <div className="timer-bar">
        <div
          key={currentSlide} // Forces re-render on slide change to restart animation
          className="timer-progress"
          style={{ animationDuration: `${slideDuration}ms` }}
        />
      </div>
    </div>
  );
};

export default MainSlider;
import React, { useEffect, useState, useRef } from 'react';
import slides from '../../data/sliderData';
import './MainSlider.css';

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const slideDuration = 5000; // 5 seconds

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, slideDuration);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
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
            {slide.subtitle2 && (
              <p className="slide-subtitle secondary">{slide.subtitle2}</p>
            )}
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

      {/* Prev / Next Buttons */}
      <button className="slider-arrow prev" onClick={handlePrev}>
        ❮
      </button>
      <button className="slider-arrow next" onClick={handleNext}>
        ❯
      </button>

      {/* Timer Bar */}
      <div className="timer-bar">
        <div
          key={currentSlide}
          className="timer-progress"
          style={{ animationDuration: `${slideDuration}ms` }}
        />
      </div>

      {/* Pause / Play Button */}
      <button className="pause-play-button" onClick={togglePause}>
        {isPaused ? '▶️' : '⏸️'}
      </button>
    </div>
  );
};

export default MainSlider;

import React from 'react';
import backgroundImage from '../../assets/image3.jpg'; 
import './FactCounter.css';

const stats = [
  { number: 15, label: 'Years Experience' },
  { number: 45, label: 'Projects' },
  { number: 15, label: 'Happy Customers' },
  { number: 50, label: 'Our Expert Staffs' },
];

export default function FactCounter() {
  return (
    <section
      className="fact-counter"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <div className="container">
          <div className="row">
            {stats.map((item, index) => (
              <div className="column" key={index}>
                <div className="count-box">
                  <div className="count-number">
                    <span className="count">{item.number}</span>
                    <span className="plus">+</span>
                  </div>
                  <div className="count-label">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

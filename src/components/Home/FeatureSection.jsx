import React from 'react';
import { Link } from 'react-router-dom';
import './FeatureSection.css';
import feature1 from '../../assets/feature1.jpg';
import feature2 from '../../assets/feature2.jpg';
import feature3 from '../../assets/feature3.jpg';

const features = [
  {
    img: feature1,
    icon: 'fa-building',
    title: 'Data Warehousing & Decision Support Services',
    desc: 'The growth of information and the outburst of both structured and unstructured data has given rise to poor data quality when it ...',
    link: '/industries/professional-services',
  },
  {
    img: feature2,
    icon: 'fa-line-chart',
    title: 'Financial Planning & Consol',
    desc: 'Danam’s expertise in the area of Financial Planning and Consolidation is world class. It has one of the best implementation teams ...',
    link: '/fico', // internal FICO route
  },
  {
    img: feature3,
    icon: 'fa-users',
    title: 'HCM',
    desc: 'Danam’s HCM implementation expertise reaches across many different Industry domains. This broad and deep domain expert ...',
    link: '/Hcm',
  }
];

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="container">
        <div className="feature-title">
          <h2>What we do?</h2>
          <p>We have streamlined processes, project timelines, minimizes cost &amp; subject matter experts to meet SAP project challenges.</p>
          <div className="underline"></div>
        </div>
        <div className="feature-row">
          {features.map((item, index) => (
            <div className="feature-box" key={index}>
              <img src={item.img} alt={item.title} className="feature-image" />
              <div className="feature-content">
                <div className="feature-icon"><i className={`fa ${item.icon}`}></i></div>
                <h4>{item.title}</h4>
                <p>{item.desc} <b><Link to={item.link}>[more]</Link></b></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

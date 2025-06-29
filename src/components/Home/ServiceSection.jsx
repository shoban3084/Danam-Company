import React from 'react';
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaUsers,
  FaDollarSign,
  FaTruck,
  FaCogs,
} from 'react-icons/fa';
import './ServiceSection.css';

const services = [
  {
    icon: <FaChartBar />,
    title: 'IFRS Solutions',
    link: '/Ifrs',
    text: 'Business across the world have put considerable effort and money to convert to IFRS...',
  },
  {
    icon: <FaChartLine />,
    title: 'SCM Solution',
    link: '/Scm',
    text: 'Danam’s SCM implementation expertise reaches across many different industry domains...',
  },
  {
    icon: <FaChartPie />,
    title: 'CRM Solutions',
    link: '/Crm',
    text: 'Customer acquisition and retention is one of the biggest challenges any industry faces...',
  },
  {
    icon: <FaUsers />,
    title: 'HCM Solutions',
    link: '/Hcm',
    text: 'Danam has a clear understanding that high performance and effective businesses use...',
  },
  {
    icon: <FaDollarSign />,
    title: 'FI CO Solutions',
    link: '/fico',
    text: 'Danam’s expertise in Financial Planning and Consolidation is world class...',
  },
  {
    icon: <FaTruck />,
    title: 'SAP BO Solutions',
    link: '/SapSolution',
    text: 'Danam has an exclusive SAP BusinessObjects team of experts...',
  },
  {
    icon: <FaCogs />,
    title: 'Testing Practice',
    link: '/TestingPractice',
    text: 'Danam’s QA capabilities help reduce development risk and improve quality...',
  },
];

export default function ServiceSection() {
  return (
    <div className="service-section">
      <h2 className="heading">More Service</h2>
      <p className="subheading">
        Danam has vast experience and excellent talent pool with SAP technical and Functional expertise.
      </p>

      <div className="card-grid">
        {services.map((service, index) => (
          <div key={index} className="card">
            <div className="card-content default-content">
              <div className="icon">{service.icon}</div>
              <h3 className="title">{service.title}</h3>
            </div>
            <div className="card-content hover-content">
              <p className="description">{service.text}</p>
              <a className="learn-more" href={service.link}>Learn More &rsaquo;</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

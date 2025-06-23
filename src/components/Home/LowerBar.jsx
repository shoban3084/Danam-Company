import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LowerBar.css';

const LowerBar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`lowerbar-container ${isSticky ? 'lowerbar-fixed' : ''}`}>
      <div className="logo-box">
        <Link to="/">
          <img src="/logo.png" alt="Danam Logo" className="logo-img" />
        </Link>
      </div>

      <nav className="nav-menu">
        <ul className="menu-list">
          <li className="active"><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>

          <li className="dropdown">
            <a href="#">Services ▾</a>
            <ul className="dropdown-menu">
              <li><a href="SAP-Implementation.html">SAP Implementation</a></li>
              <li><a href="oracle-implementation.html">Oracle Implementation</a></li>
              <li><a href="HCM-Solutions.html">HCM Solutions</a></li>
              <li><a href="IFRS-Solutions.html">IFRS Solutions</a></li>
              <li><a href="SCM-Solution.html">SCM Solutions</a></li>
              <li><a href="CRM-Solutions.html">CRM Solutions</a></li>
              <li><a href="FI-CO-Solutions.html">FI CO Solutions</a></li>
              <li><a href="SAP-BusinessObjects-Solutions.html">SAP BusinessObjects</a></li>
              <li><a href="Testing-Practice.html">Testing Practice</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#">Industries ▾</a>
            <ul className="dropdown-menu">
              <li><a href="service-details.html">Manufacturing</a></li>
              <li><a href="service-details.html">Professional Services</a></li>
              <li><a href="service-details.html">Oil & Gas</a></li>
              <li><a href="service-details.html">Banking & Insurance</a></li>
              <li><a href="service-details.html">Hospitality</a></li>
              <li><a href="service-details.html">Life Science</a></li>
              <li><a href="service-details.html">High Tech</a></li>
              <li><a href="service-details.html">Construction</a></li>
              <li><a href="service-details.html">Renewable</a></li>
              <li><a href="service-details.html">Retail</a></li>
              <li><a href="service-details.html">Utilities</a></li>
            </ul>
          </li>

          <li><a href="careers.html">Careers</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default LowerBar;
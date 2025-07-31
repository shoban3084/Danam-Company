import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './LowerBar.css';

const LowerBar = () => {
  const [isSticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      setServicesOpen(false);
      setIndustriesOpen(false);
    }
  }, [menuOpen]);

  const toggleDropdown = (menuType) => {
    if (menuType === 'services') {
      setServicesOpen(!servicesOpen);
      setIndustriesOpen(false);
    } else if (menuType === 'industries') {
      setIndustriesOpen(!industriesOpen);
      setServicesOpen(false);
    }
  };

  return (
    <div className={`lowerbar-container ${isSticky ? 'lowerbar-fixed' : ''}`}>
      <div className="logo-box">
        <NavLink to="/">
          <img src="/favicon.png" alt="Danam Logo" className="logo-img" />
        </NavLink>
      </div>

      <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="menu-list">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>

          <li className="dropdown">
            <div className="dropdown-toggle" onClick={() => toggleDropdown('services')}>
              Services ▾
            </div>
            <ul className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}>
              <li><NavLink to="/SevAI">SevAI Implementation</NavLink></li>
              <li><NavLink to="/sap">SAP Implementation</NavLink></li>
              <li><NavLink to="/Oracle">Oracle Implementation</NavLink></li>
              <li><NavLink to="/TestingPractice">Testing Practice</NavLink></li>
            </ul>
          </li>

          <li className="dropdown">
            <div className="dropdown-toggle" onClick={() => toggleDropdown('industries')}>
              Industries ▾
            </div>
            <ul className={`dropdown-menu ${industriesOpen ? 'show' : ''}`}>
              <li><NavLink to="/industries/manufacturing">Manufacturing</NavLink></li>
              <li><NavLink to="/industries/professional-services">Professional Services</NavLink></li>
              <li><NavLink to="/industries/oil-gas">Oil & Gas</NavLink></li>
              <li><NavLink to="/industries/banking">Banking</NavLink></li>
              <li><NavLink to="/industries/hospitality">Hospitality</NavLink></li>
              <li><NavLink to="/industries/life-science">Life Science</NavLink></li>
              <li><NavLink to="/industries/high-tech">High Tech</NavLink></li>
              <li><NavLink to="/industries/construction">Construction</NavLink></li>
              <li><NavLink to="/industries/renewable">Renewable</NavLink></li>
              <li><NavLink to="/industries/retail">Retail</NavLink></li>
              <li><NavLink to="/industries/utilities">Utilities</NavLink></li>
            </ul>
          </li>

          <li><NavLink to="/careers">Careers</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default LowerBar;

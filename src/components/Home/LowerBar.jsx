import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './LowerBar.css';

const LowerBar = () => {
  const [isSticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveIndustry = (industry) => {
    return location.pathname === `/industries/${industry}`;
  };

  return (
    <div className={`lowerbar-container ${isSticky ? 'lowerbar-fixed' : ''}`}>
      <div className="logo-box">
        <NavLink to="/">
          <img src="/favicon.png" alt="Danam Logo" className="logo-img" />
        </NavLink>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="menu-list">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About Us</NavLink></li>

          <li className="dropdown">
            <span>Services ▾</span>
            <ul className="dropdown-menu">
              <li><NavLink to="/SevAI" className={({ isActive }) => isActive ? 'active-link' : ''}>SevAI Implementation and Production Support</NavLink></li>
              <li><NavLink to="/sap" className={({ isActive }) => isActive ? 'active-link' : ''}>SAP Implementation and Production Support</NavLink></li>
              <li><NavLink to="/Oracle" className={({ isActive }) => isActive ? 'active-link' : ''}>Oracle Implementation and Production</NavLink></li>
              <li><NavLink to="/TestingPractice" className={({ isActive }) => isActive ? 'active-link' : ''}>Testing Practice</NavLink></li>
            </ul>
          </li>

          <li className="dropdown">
            <span>Industries ▾</span>
            <ul className="dropdown-menu">
              <li><NavLink to="/industries/manufacturing" className={isActiveIndustry('manufacturing') ? 'active-link' : ''}>Manufacturing</NavLink></li>
              <li><NavLink to="/industries/professional-services" className={isActiveIndustry('professional-services') ? 'active-link' : ''}>Professional Services</NavLink></li>
              <li><NavLink to="/industries/oil-gas" className={isActiveIndustry('oil-gas') ? 'active-link' : ''}>Oil & Gas</NavLink></li>
              <li><NavLink to="/industries/banking" className={isActiveIndustry('banking') ? 'active-link' : ''}>Banking & Insurance</NavLink></li>
              <li><NavLink to="/industries/hospitality" className={isActiveIndustry('hospitality') ? 'active-link' : ''}>Hospitality</NavLink></li>
              <li><NavLink to="/industries/life-science" className={isActiveIndustry('life-science') ? 'active-link' : ''}>Life Science</NavLink></li>
              <li><NavLink to="/industries/high-tech" className={isActiveIndustry('high-tech') ? 'active-link' : ''}>High Tech</NavLink></li>
              <li><NavLink to="/industries/construction" className={isActiveIndustry('construction') ? 'active-link' : ''}>Construction</NavLink></li>
              <li><NavLink to="/industries/renewable" className={isActiveIndustry('renewable') ? 'active-link' : ''}>Renewable</NavLink></li>
              <li><NavLink to="/industries/retail" className={isActiveIndustry('retail') ? 'active-link' : ''}>Retail</NavLink></li>
              <li><NavLink to="/industries/utilities" className={isActiveIndustry('utilities') ? 'active-link' : ''}>Utilities</NavLink></li>
            </ul>
          </li>

          <li><NavLink to="/careers" className={({ isActive }) => isActive ? 'active-link' : ''}>Careers</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''}>Contact Us</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default LowerBar;
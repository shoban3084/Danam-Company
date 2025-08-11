import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import USA from '../../assets/Flag/usa.jpg';
import India from '../../assets/Flag/india.jpg';
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
    // Close dropdowns on location change
    setMenuOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  }, [location]);

  const toggleDropdown = (menuType) => {
    if (menuType === 'services') {
      setServicesOpen(!servicesOpen);
      setIndustriesOpen(false);
    } else if (menuType === 'industries') {
      setIndustriesOpen(!industriesOpen);
      setServicesOpen(false);
    }
  };

  const handleNavClick = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  };

  return (
    <div className={`lowerbar-container ${isSticky ? 'lowerbar-fixed' : ''}`}>
      <div className="logo-box">
        <NavLink to="/" onClick={handleNavClick}>
          <img src="/favicon.png" alt="Danam Logo" className="logo-img" />
        </NavLink>
      </div>

      <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-icon" onClick={() => setMenuOpen(false)}>×</button>
        <ul className="menu-list">
          <li><NavLink to="/" onClick={handleNavClick}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={handleNavClick}>About Us</NavLink></li>

          <li className="dropdown">
            <div className="dropdown-toggle" onClick={() => toggleDropdown('services')}>
              Services ▾
            </div>
            <ul className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}>
              <li><NavLink to="/SevAI" onClick={handleNavClick}>SevAI Implementation</NavLink></li>
              <li><NavLink to="/sap" onClick={handleNavClick}>SAP Implementation</NavLink></li>
              <li><NavLink to="/Oracle" onClick={handleNavClick}>Oracle Implementation</NavLink></li>
              <li><NavLink to="/TestingPractice" onClick={handleNavClick}>Testing Practice</NavLink></li>
            </ul>
          </li>

          <li className="dropdown">
            <div className="dropdown-toggle" onClick={() => toggleDropdown('industries')}>
              Industries ▾
            </div>
            <ul className={`dropdown-menu ${industriesOpen ? 'show' : ''}`}>
              <li><NavLink to="/industries/manufacturing" onClick={handleNavClick}>Manufacturing</NavLink></li>
              <li><NavLink to="/industries/professional-services" onClick={handleNavClick}>Professional Services</NavLink></li>
              <li><NavLink to="/industries/oil-gas" onClick={handleNavClick}>Oil & Gas</NavLink></li>
              <li><NavLink to="/industries/banking" onClick={handleNavClick}>Banking</NavLink></li>
              <li><NavLink to="/industries/hospitality" onClick={handleNavClick}>Hospitality</NavLink></li>
              <li><NavLink to="/industries/life-science" onClick={handleNavClick}>Life Science</NavLink></li>
              <li><NavLink to="/industries/high-tech" onClick={handleNavClick}>High Tech</NavLink></li>
              <li><NavLink to="/industries/construction" onClick={handleNavClick}>Construction</NavLink></li>
              <li><NavLink to="/industries/renewable" onClick={handleNavClick}>Renewable</NavLink></li>
              <li><NavLink to="/industries/retail" onClick={handleNavClick}>Retail</NavLink></li>
              <li><NavLink to="/industries/utilities" onClick={handleNavClick}>Utilities</NavLink></li>
            </ul>
          </li>

          <li><NavLink to="/careers" onClick={handleNavClick}>Careers</NavLink></li>
          <li><NavLink to="/contact" onClick={handleNavClick}>Contact Us</NavLink></li>
        </ul>

        {/* Mobile-Only Contact Info + Social Icons */}
        {menuOpen && (
          <>
            <div className="mobile-contact-info">
              <ul className="flag-list">
                <li>
                  <img src={USA} alt="USA" className="flag-img" />
                  <span className="flag-text">609-672-9356 (USA)</span>
                </li>
                <li>
                  <img src={India} alt="India" className="flag-img" />
                  <span className="flag-text">+91 44 42156668 (India)</span>
                </li>
                <li>
                  <img src={India} alt="India" className="flag-img" />
                  <span className="flag-text">+91 44 48562332 (India)</span>
                </li>
              </ul>
            </div>

            <div className="mobile-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default LowerBar;

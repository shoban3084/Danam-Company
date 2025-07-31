import React, { useEffect, useState } from "react";
import "./Footer.css";
import infoImage from "../../assets/danam.jpg";
import { Link, useNavigate } from 'react-router-dom';

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPaperPlane,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    alert("Successfully Registered");
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToAbout = () => {
    navigate('/About');
  };

  return (
    <div className="fixed-footer-wrapper">
      <footer className="footer">
        <div className="footer-container">

          {/* Column 1 */}
          <div className="footer-column">
            <img src={infoImage} alt="Info" className="footer-logo" />
            <p className="footer-text">
              Our global headquarters and management team are based out of
              Princeton, NJ. We have an offshore facility, Danam Infotech Pvt
              Ltd, in Chennai, India.
            </p>
            <button className="about-button" onClick={goToAbout}>ABOUT US</button>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-list">
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/SevAI">Sev AI Implementation</Link></li>
              <li><Link to="/Hcm">HCM Solutions</Link></li>
              <li><Link to="/Scm">SCM Solutions</Link></li>
              <li><Link to="/Crm">CRM Solutions</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h4 className="footer-title">Quick Link</h4>
            <ul className="footer-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About Us</Link></li>
              <li><Link to="/Contact">Contact Us</Link></li>
              <li><Link to="/Industries">Industries</Link></li>
              <li><Link to="/Careers">Careers</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <h4 className="footer-title">Newsletter</h4>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <button onClick={handleSubscribe}>
                <FaPaperPlane />
              </button>
            </div>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>
      </footer>

      <section className="footer-bottom">
        <div className="container">
          <p className="copyright">
            Copyright © 2014 Danam Consulting. All rights reserved
          </p>
        </div>
      </section>

      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

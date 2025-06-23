import React, { useEffect, useState } from "react";
import "./Footer.css";
import infoImage from "../../assets/danam.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPaperPlane,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
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
            <button className="about-button">ABOUT US</button>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-list">
              <li><a href="service.html">Services</a></li>
              <li><a href="SAP-Implementation.html">SAP Implementation</a></li>
              <li><a href="HCM-Solutions.html">HCM Solutions</a></li>
              <li><a href="SCM-Solution.html">SCM Solutions</a></li>
              <li><a href="CRM-Solutions.html">CRM Solutions</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h4 className="footer-title">Quick Link</h4>
            <ul className="footer-list">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="service.html">Services</a></li>
              <li><a href="careers.html">Careers</a></li>
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
            © 2014 Danam Consulting. All rights reserved || Designed by{" "}
            <a href="https://www.appinous.com" target="_blank" rel="noopener noreferrer">
              Appinous Technology
            </a>
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

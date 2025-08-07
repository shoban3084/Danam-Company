import React, { useEffect, useState } from 'react';
import './About.css';
import aboutImg from '../../../assets/about-us.jpg'; 
import bannerImg from '../../../assets/about_banner.jpg'; 
import TopBar from '../TopBar';
import LowerBar from '../LowerBar';
import FactCounter from '../FactCounter';
import ClientsSection from '../ClientsSection';
import Footer from '../Footer';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize); // Check on resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isMobile && <TopBar />} {/* Hide on mobile */}
      <LowerBar />

      {/* Banner */}
      <div
        className="about-bg centered"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="text">About Us</div>
      </div>

      {/* Breadcrumb */}
      <div className="about-breadcrumb">
        <div className="container">
          <div className="text">
            <a href="/">Home</a><i className="fa fa-angle-right"></i> About Us
          </div>
        </div>
      </div>

      {/* About Content */}
      <section className="about-section sec-pad">
        <div className="container">
          <div className="row">
            <div className="col img-col">
              <img src={aboutImg} alt="About Danam" />
            </div>
            <div className="col text-col">
              <h2>ABOUT US</h2>
              <div className="underline3" />
              <p>Danam was founded by industry veterans...</p>
              <p>Our promoter/founder Sekar Tiruchanur...</p>
            </div>
          </div>

          <div className="row full-text">
            <p>Our global headquarters and management team are based out of Princeton...</p>
            <p>Danam's focus shall be to provide predictive and risk adjusted approach...</p>
            <p>We offer our customers tailored solutions...</p>
            <p>The management team of Danam consists of Industry veterans...</p>
            <p>The strategy of our company shall be to create industry solution...</p>
          </div>
        </div>
      </section>

      <FactCounter />
      <ClientsSection />
      <Footer />
    </>
  );
};

export default About;

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
              <p>Danam was founded by industry veterans with rich experience from implementation and production support for several fortune 100 companies. Founders with more than 30 years of Industry and 15 years of SAP experience.</p>
              
              <p>Our promoter/founder Sekar Tiruchanur is also the Chair person for America’s Users Group’s (ASUG) Special Interest Groups (SIG) for Professional service industry.</p>
            </div>
          </div>

          <div className="row full-text">
            <p>Our global headquarters and management team are based out of Princeton, NJ. We have an offshore facility, Danam Infotech Pvt Ltd, in Chennai, India. With this offshore model and location advantage, we are better positioned to serve clients across the globe.</p>

            <p>Danam's focus shall be to provide predictive and risk adjusted approach to corporate performance. Provide a unified , easy to use and best practice business processes by providing a platform for delivery and monitoring of better and faster business data and metrics for regulatory compliance and stake holders across enterprise which will enable one and only version of truth for the KPI's across enterprise. Create value additions in implementation and production support and provide Staffing to strategic customers.</p>

            <p>We offer our customers tailored solutions and service portfolio for the entire life cycle of Sev-AI investment through a flexible onsite and offsite business model. This flexible model will give us an edge and shall enable us to provide mission critical applications with cost effective solutions for enterprises irrespective of its size and business model.</p>

            <p>The management team of Danam consists of Industry veterans with deep Sev-AI and Business Objects product implementation and production support experience in leading industries and with global rollouts. This experience with client centric approach will be leveraged to build industry specific solution addressing the industry pain points using Sev-AI latest technology of AI, Mobile and cloud solutions.</p>

            <p>The strategy of our company shall be to create industry solution which will be used as enablers to create market for company services. Danam will also invest money to train its consultants with rich industry experience in latest technologies Like(AI,Digitalization) as a result Danam will be in an enviable position with its best in class consultants together with industry specific ready to deploy solutions to approach the market in the areas of disruptive technologies .</p>
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

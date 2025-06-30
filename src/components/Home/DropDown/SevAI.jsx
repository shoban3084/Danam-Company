import './SevAI.css';
import depPhases from '../../../assets/dep-phases.jpg';
import depSupport from '../../../assets/dep-support.png';
import depUpgrade from '../../../assets/dep-upgrade.jpg';
import TopBar from '../TopBar';
import LowerBar from '../LowerBar';
import Footer from '../Footer';
import bannerImg from '../../../assets/dep-banner.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sevai = () => {
  return (
    <>
      <TopBar />
      <LowerBar />

      {/* Banner */}
      <div className="sevai-bg centered" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="container">
          <div className="text">SevAI Implementation and Production Support</div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="NavBar">
        <div className="container">
          <div className="text">
            <a href="/">Home</a>
            <i className="fa fa-angle-right"></i>
            <a href="/services"> Services</a>
            <i className="fa fa-angle-right"></i> SevAI Implementation and Production Support
          </div>
        </div>
      </div>

      {/* Content Wrapper */}
      <section className="sevai-wrapper">
        <div className="container">
          <div className="sidebar-details">
            <div className="content-style-one">
              <div className="sevai-title">SevAI DEP NextGEN IMPLEMENTATION</div>
              <div className="text">
                <p>
                  Danam’s SevAI DEP NextGEN platform brings future-ready digital transformation solutions.
                  With extensive experience and deep industry knowledge, we deliver powerful, scalable
                  implementations tailored to enterprise goals.
                </p>
              </div>
            </div>

            <div className="content-style-two">
              <div className="row">
                <div className="col-md-6">
                  <div className="content-side">
                    <h4>OUR SERVICES INCLUDE</h4>
                    <ul className="sevai-list">
                      <li>End-to-End SevAI DEP Implementation</li>
                      <li>Requirement Analysis & Strategic Roadmap</li>
                      <li>Data Migration & Integration Services</li>
                      <li>Process Optimization & Automation</li>
                      <li>Custom Module Development</li>
                      <li>Change Management & User Enablement</li>
                      <li>Post-Implementation Support</li>
                    </ul>
                    <p>
                      We utilize industry best practices and agile frameworks to ensure a smooth transition from legacy systems to SevAI DEP.
                      Each implementation is managed through structured phases:
                    </p>
                    <ul className="sevai-list">
                      <li>Project Preparation</li>
                      <li>Business Blueprint</li>
                      <li>Realization</li>
                      <li>Final Preparation</li>
                      <li>Go-Live and Support</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={depPhases} alt="Implementation Phases" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <h4>KEY MODULES OF SevAI DEP NextGEN</h4>
                  <ul className="sevai-list">
                    <li>Financial Management</li>
                    <li>Human Capital Management</li>
                    <li>Procurement & Sourcing</li>
                    <li>Sales & Customer Experience</li>
                    <li>Production & Planning</li>
                    <li>Asset & Inventory Management</li>
                    <li>Project Lifecycle Management</li>
                    <li>Analytics & Insights</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4>NextGEN Innovations</h4>
                  <ul className="sevai-list">
                    <li>AI-Powered Forecasting</li>
                    <li>Integrated CRM & Workflow</li>
                    <li>Cloud-Native Enterprise Architecture</li>
                    <li>Predictive Maintenance</li>
                    <li>Employee Self-Service Portals</li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <h4>DEP SUPPORT & OPTIMIZATION</h4>
                  <div className="text">
                    <p>
                      Maintaining peak performance of your SevAI platform is crucial. Danam offers comprehensive support models tailored to business dynamics.
                    </p>
                    <ul className="sevai-list">
                      <li>24/7 Technical Support & Monitoring</li>
                      <li>Usage Optimization & SLA Management</li>
                      <li>Incident Resolution & Root Cause Analysis</li>
                      <li>Knowledge Transfer & Training</li>
                      <li>Flexible On-Demand Support Models</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={depSupport} alt="Support Services" />
                </div>
              </div>

              {/* UPGRADES & SCALABILITY FIXED */}
              <div className="row">
                <div className="col-md-6">
                  <h4>UPGRADES & SCALABILITY</h4>
                  <img src={depUpgrade} alt="Upgrade Process" />
                </div>
                <div className="col-md-6 upgrades-align-fix">
                  <p>
                    As enterprises evolve, so must their digital core. Danam ensures seamless upgrades and modular scalability for SevAI DEP platforms.
                  </p>
                  <ul className="sevai-list">
                    <li>Version Upgrades with Minimal Downtime</li>
                    <li>Feature Expansion & Module Integration</li>
                    <li>Security Patching & Compliance</li>
                  </ul>
                </div>
              </div>

              <div className="text">
                <h4>OFFSHORE DEVELOPMENT</h4>
                <p>
                  Based out of Chennai, our hybrid model combines offshore development with global delivery for maximum efficiency and savings.
                </p>
                <ul className="sevai-list">
                  <li>Cost-Effective Delivery Model</li>
                  <li>Dedicated Development Teams</li>
                  <li>Agile Collaboration & Project Transparency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Sevai;

import TopBar from '../TopBar';
import LowerBar from '../LowerBar';
import Footer from '../Footer';
import bannerImg from '../../../assets/oracle_banner.jpg';
import './Oracle.css';

const Oracle = () => {
  return (
    <>
      <TopBar />
      <LowerBar />

      {/* Banner */}
      <div className="oracle-bg centered" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="container">
          <div className="text">Oracle Implementation and Product Support</div>
        </div>
      </div>

      {/* Breadcrumb Section */}
      <div className="NavBar">
        <div className="container">
          <div className="text">
            <a href="/">Home</a>
            <i className="fa fa-angle-right"></i>
            <a href="/services"> Services</a>
            <i className="fa fa-angle-right"></i> Oracle Implementation and Product Support
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="oracle-wrapper">
        <div className="container">
          <div className="oracle-title">
            <h1>Oracle Implementation</h1>
            <p>
              Danam provides end-to-end implementation and production support services for NetSuite
              products. Our expertise spans customizing, integrating, and deploying Oracle NetSuite
              solutions across various industries including Manufacturing, Distribution, IT, and
              Professional Services.
            </p>
          </div>

          <div className="oracle-content">
            <div className="oracle-left">
              <h2>NetSuite Products We Support</h2>
              <ul className="oracle-list">
                <li>NetSuite ERP</li>
                <li>NetSuite One World</li>
                <li>NetSuite OpenAir</li>
                <li>NetSuite PBCS</li>
              </ul>
              <p>
                We provide full implementation, customization, integration, and post-deployment
                support for these NetSuite products.
              </p>

              <h2>Our Oracle Implementation Services Include</h2>
              <ul className="oracle-list">
                <li>NetSuite ERP Business Case & Assessment</li>
                <li>Requirements Analysis & Process Mapping</li>
                <li>Solution Design and Architecture</li>
                <li>Implementation & Deployment</li>
                <li>QuickStart Solutions for ERP, OneWorld, OpenAir, and PBCS</li>
                <li>Post-Implementation Support & Optimization</li>
              </ul>

              <p>
                Danam offers tailored solutions and business process guidance specific to your
                industry. In partnership with Dhruvsoft, we deliver expert NetSuite implementation
                services worldwide.
              </p>

              <p>
                For more details visit our partner site:{' '}
                <a href="https://www.nssuccess.com/" target="_blank" rel="noopener noreferrer">
                  NetSuite Services
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Oracle;

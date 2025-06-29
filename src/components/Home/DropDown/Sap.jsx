import './Sap.css';
import sapPhase from '../../../assets/sap-phase.jpg';
import sapPlanning from '../../../assets/sap-planning.jpg';
import processMap from '../../../assets/process-map.png';
import TopBar from '../TopBar';
import LowerBar from '../LowerBar';
import Footer from '../Footer';
import bannerImg from '../../../assets/sap-banner.jpg';

const Sap = () => {
  return (
    <>
      <TopBar />
      <LowerBar />

      <div className="sap-bg centered" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="container">
          <div className="text">SAP Implementation</div>
        </div>
      </div>

      <div className="sap-breadcrumb">
        <div className="container">
          <div className="text">
            <a href="/">Home</a>
            <i className="fa fa-angle-right"></i>
            <a href="/services">Services</a>
            <i className="fa fa-angle-right"></i> SAP Implementation
          </div>
        </div>
      </div>

      <section className="service-details">
        <div className="container">
          <div className="sidebar-details">
            <div className="content-style-one">
              <div className="title">SAP IMPLEMENTATION</div>
              <div className="text">
                <p>Danam has vast experience and excellent talent pool with SAP technical and Functional expertise. Combined with various industry knowledge we are in an excellent position to transform business challenges into opportunities for our clients.</p>
              </div>
            </div>

            <div className="content-style-two">
              <div className="row">
                <div className="col-md-6">
                  <div className="content-side">
                    <h4>OUR SERVICES INCLUDE</h4>
                    <ul className="list">
                      <li>Full Cycle Implementation ie (End to End)</li>
                      <li>Business Case study and Assessment</li>
                      <li>Methodology, Strategy and Planning</li>
                      <li>System and Data Migration</li>
                      <li>Enterprise Application Integration</li>
                      <li>GAP and providing solution</li>
                      <li>Support after implementation</li>
                    </ul>
                    <p>
                      We at Danam will utilize Best Practices, made available to client and provide optimal solution that meet highest quality for each implementation that have resulted to proven much success to client.</p>
                    <p>
                      We at Danam use effective tools, right methodologies, proven process models and international standards. The implementation is conducted in the following phases:
                    </p>
                    <ul className="list">
                      <li>Project Preparation</li>
                      <li>Business Blueprint</li>
                      <li>Realization</li>
                      <li>Final Preparation</li>
                      <li>GO LIVE and Support</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={sapPhase} alt="SAP Implementation Phases" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <h4>The most widely used modules of SAP</h4>
                  <ul className="list">
                    <li>Finance and Control (FICO)</li>
                    <li>Human Resources Management (HR)</li>
                    <li>Materials Management (MM)</li>
                    <li>Sales & Distribution (SD)</li>
                    <li>Production Planning (PP)</li>
                    <li>Plant Maintenance (PM)</li>
                    <li>Project System (PS)</li>
                    <li>Business Information Warehousing (BW)</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4>New dimensional modules</h4>
                  <ul className="list">
                    <li>Customer Relationship Management (CRM)</li>
                    <li>Strategic Enterprise Management (SEM)</li>
                    <li>Supply Chain Management (SCM)</li>
                    <li>Advanced Planner Optimizer (APO)</li>
                    <li>Enterprise Portal (EP)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="content-style-two">
              <div className="row">
                <div className="col-md-6">
                  <h4>SAP MAINTENANCE AND PRODUCTION SUPPORT</h4>
                  <div className="text">
                    <p>SAP Support and ongoing maintenance has significant component in the Company Budget (especially for IT Budget). In a recent study done on SAP environments, it was found TCO (Total Cost of Ownership) and ACO (Annual Cost of Operation) is significantly high for Companies</p>
                    <p>SAP Support Research shows that business-oriented support account for almost 50% of all activities and costs within an organization using SAP.</p>
                    <p>Whereas 50% includes super user involvement and business process support to a large extent. Technical support takes up almost 36% of the expenditure.</p>
                    <p>With such significant support costs, it has become the key area for cost optimization.</p>
                    <p>Is ACO/ TCO be reduced in a SAP environment? Holistic approach is</p>
                    <ul className="list">
                      <li>Inclusion of Business and IT in the Support Model</li>
                      <li>Structured approach to reduce support (Help Desk / Enhancements)</li>
                      <li>Alignment of static support cost with dynamic support requirements</li>
                    </ul>
                    <p>Danam has been helping companies in creating and sustaining a structured support model with SAP. This is done by providing On Demand Training and Technical Support.</p>
                    <p>We do provide variable cost model in line with their support requirement. This has been helping companies to measure and justify business value for the ongoing SAP Support.</p>
                    <h4>Danam Production support offerings</h4>
                    <ul className="list">
                      <li>ABAP Development of specific reports & functionalities</li>
                      <li>Unlimited Support for pre-determined period</li>
                      <li>Unlimited support and maintenance services</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={sapPlanning} alt="SAP Planning" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <h4>UPGRADE SAP ENVIRONMENT</h4>
                  <img src={processMap} alt="SAP Process Map" />
                </div>
                <div className="col-md-6">
                  <p>To keep pace with and to be relevant to the rapidly changing business scenario, SAP systems must be modified continuously. Consequently, organizations employing SAP must upgrade their existing solutions on an on-going manner.
                  </p>
                  <p>
                    Growing challenges, new regulations and expanding business makes unimplemented modules essential. Upgrades must be performed on the existing system to incorporate the new functional capabilities
                  </p>
                  <p>
                    Danam has broad experience in consolidating various SAP instances to modernize your current environment. It can be upgrading client’s SAP version (from R3 3.x) to versions 4.6c or 4.7 or 6.0 for various reasons like to meet business requirements.
                  </p>
                </div>
              </div>

              <div className="text">
                <p>We Danam uses updated solution to help deliver results with in significant cost savings. Danam draws upon tools to provide companies with a smooth upgrade process and predictable results. Before committing the organization to an approach, We Danam works with the clients to understand their goals and architects an upgrade delivery approach.</p>
                <ul className="list">
                  <li>Technical Upgrade</li>
                  <li>Functional Upgrade</li>
                </ul>
                <h4>OFFSHORE DEVELOPMENT</h4>
                <p>Danam approach for Offshore Development based out of Chennai is to bring value addition with the Hybrid model that straight away saves Major resource costs. This enables Danam execute projects Globally in the most efficient and cost effective manner.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Sap;

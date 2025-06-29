import "./Scm.css";
import ScmImage from "../../../assets/Scm.jpg"; // Replace with correct SCM image if needed
import TopBar from "../TopBar";
import LowerBar from "../LowerBar";
import Footer from "../Footer";

const Scm = () => {
  return (
    <>
      <TopBar />
      <LowerBar />

      {/* Breadcrumb */}
      <div className="scm-breadcrumb">
        <div className="container">
          <div className="text">
            <a href="/">Home</a>
            <i className="fa fa-angle-right"></i>
            <a href="/services"> Services</a>
            <i className="fa fa-angle-right"></i> SCM Solutions
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section className="scm-details">
        <div className="container">
          <div className="row">
            <div className="col-md-12 scm-col">
              <div className="scm-sidebar-details">

                {/* First Section */}
                <div className="scm-content-style-one">
                  <div className="scm-title">SUPPLY CHAIN MANAGEMENT IMPLEMENTATION</div>
                  <div className="scm-text">
                    <p>
                      Danam’s SCM implementation expertise reaches across many different Industry domains. This broad and deep domain expertise gives us a big advantage in strategizing, architecting and implementing client solutions in an effective and fast manner. Danam has added value to many customers not only in their implementation but also with their continuous improvement initiatives using Supply chain process reference models like Supply Chain Operations Reference (SCOR) Reference.
                    </p>
                    <p>
                      Danam uses industry proven project delivery processes and control costs that does not compromise in accelerating turnaround time for SCM implementations and support engagements.
                    </p>
                  </div>
                </div>

                {/* Image & List */}
                <div className="scm-content-style-two row">
                  <div className="col-md-6 scm-col">
                    <div className="img-box">
                      <figure>
                        <img src={ScmImage} alt="Supply Chain Management" />
                      </figure>
                    </div>
                  </div>
                  <div className="col-md-6 scm-col">
                    <div className="scm-content-side">
                      <ul className="scm-list">
                        <li><p>SAP’s Advance Planner and Optimizer (APO)</p></li>
                        <li><p>Demand Planning</p></li>
                        <li><p>Supply Network Planning</p></li>
                        <li><p>Production Planning and Detailed Scheduling</p></li>
                        <li><p>Global Available to Promise (GATP)</p></li>
                        <li><p>Transportation Planning and Scheduling</p></li>
                        <li><p>Supply Network Collaboration</p></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Second Section Title */}
                <div className="scm-content-style-one">
                  <br />
                  <div className="scm-title">OUR OFFERS INCLUDE</div>
                </div>

                {/* Two Column List */}
                <div className="scm-content-style-two row">
                  <div className="col-md-6 scm-col">
                    <div className="scm-content-side">
                      <ul className="scm-list">
                        <li><p>Demand Planning and Execution</p></li>
                        <li><p>Supply Planning and Execution including detailed manufacturing schedule</p></li>
                        <li><p>Vendor – Managed Inventory</p></li>
                        <li><p>Supply Chain consolidation and rationalization for clients with Legacy</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 scm-col">
                    <div className="scm-content-side">
                      <ul className="scm-list">
                        <li><p>Stand-alone SCM Processes and Systems</p></li>
                        <li><p>Extending the Supply Chain to include Planning for External Partners in Sales and Procurement functions</p></li>
                        <li><p>OLTP system design and interface with SCM applications</p></li>
                        <li><p>Enhancements to existing SCM applications to improve individual planning functions</p></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Scm;

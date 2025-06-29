import "./Crm.css";
import CrmImage from "../../../assets/Crm.png";
import TopBar from "../TopBar";
import LowerBar from "../LowerBar";
import Footer from "../Footer";

const Crm = () => {
  return (
    <>
      <TopBar />
      <LowerBar />

      {/* Breadcrumb */}
      <div className="crm-breadcrumb">
        <div className="container">
          <div className="text">
            <a href="/">Home</a>
            <i className="fa fa-angle-right"></i>
            <a href="/services"> Services</a>
            <i className="fa fa-angle-right"></i> CRM Solutions
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section className="crm-details">
        <div className="container">
          <div className="row">
            <div className="col crm-col">
              <div className="crm-sidebar-details">

                <div className="crm-content-style-one">
                  <div className="crm-title">CUSTOMER RELATIONSHIP MANAGEMENT (CRM) SOLUTIONS</div>
                </div>

                <div className="crm-content-style-two row">
                  <div className="col-md-6 crm-col">
                    <div className="img-box">
                      <figure>
                        <img src={CrmImage} alt="CRM" />
                      </figure>
                    </div>
                  </div>
                  <div className="col-md-6 crm-col">
                    <div className="crm-text">
                      <p>
                        Businesses leverage CRM systems to streamline sales, service, and marketing processes, helping increase customer satisfaction and retention. Danam brings years of expertise in implementing and customizing CRM platforms tailored to specific industries and goals.
                        <br /><br />
                        With Danam’s domain experts and experienced CRM architects, clients get scalable, flexible solutions that integrate easily with existing ERP systems and digital platforms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="crm-content-style-one">
                  <div className="crm-title">OUR OFFERS INCLUDE:</div>
                </div>

                <div className="crm-content-style-two row">
                  <div className="col-md-6 crm-col">
                    <div className="crm-content-side">
                      <ul className="crm-list">
                        <li><p>CRM Requirement Analysis</p></li>
                        <li><p>Custom CRM Solution Development</p></li>
                        <li><p>CRM Implementation and Integration</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 crm-col">
                    <div className="crm-content-side">
                      <ul className="crm-list">
                        <li><p>CRM Support and Maintenance</p></li>
                        <li><p>Sales and Marketing Automation</p></li>
                        <li><p>Customer Analytics and Reporting</p></li>
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

export default Crm;

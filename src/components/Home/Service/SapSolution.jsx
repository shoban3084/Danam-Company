import "./SapSolution.css";
import SapSolutionImage from "../../../assets/hcm.jpg";
import TopBar from "../TopBar";
import LowerBar from "../LowerBar";
import Footer from "../Footer";

const SapSolution = () => {
  return (
    <>
      <TopBar />
      <LowerBar />

      {/* Breadcrumb */}
      <div className="sapsolution-breadcrumb">
        <div className="container">
          <div className="text">
            <a href="/">Home</a>
            <i className="fa fa-angle-right"></i>
            <a href="/services"> Services</a>
            <i className="fa fa-angle-right"></i> SAP Solutions
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section className="sapsolution-details">
        <div className="container">
          <div className="row">
            <div className="col sapsolution-col">
              <div className="sapsolution-sidebar-details">

                <div className="sapsolution-content-style-one">
                  <div className="sapsolution-title">SAP BUSINESSOBJECTS</div>
                </div>

                <div className="sapsolution-content-style-two row">
                  <div className="col-md-6 sapsolution-col">
                    <div className="img-box">
                      <figure>
                        <img src={SapSolutionImage} alt="SAP HCM" />
                      </figure>
                    </div>
                  </div>
                  <div className="col-md-6 sapsolution-col">
                    <div className="sapsolution-text">
                      <p>
                        Danam has an exclusive SAP BusinessObjects team who are experts in implementing various requirements of any Business Intelligence projects through the comprehensive set of tools and solutions offered by SAP BusinessObjects.
                        <br /><br />
                        Danam has broad experience in implementing BusinessObjects suite of products. The solution can be implemented in various ways. The combination varies based on Operating Systems, Web Application Servers (can be split), Database systems (CMS repository) and with loads of integration options. This will usually not be a single box implementation and can be split horizontally or vertically. We can help you implement it according to the sizing recommendations without any hassles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="sapsolution-content-style-one">
                  <div className="sapsolution-title">OUR OFFERS INCLUDE:</div>
                </div>

                <div className="sapsolution-content-style-two row">
                  <div className="col-md-6 sapsolution-col">
                    <div className="sapsolution-content-side">
                      <ul className="sapsolution-list">
                        <li><p>Installation, Deployment and Management of BusinessObjects infrastructure</p></li>
                        <li><p>Reporting - SAP Lumira for Self Service Business Intelligence</p></li>
                        <li><p>Reporting - Web Intelligence for more advanced reporting</p></li>
                        <li><p>Reporting - SAP Crystal Reports for pixel perfect Enterprise reporting</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 sapsolution-col">
                    <div className="sapsolution-content-side">
                      <ul className="sapsolution-list">
                        <li><p>Data Visualization - SAP Dashboard Designer / XCelsius for flash dashboard and dynamic charts</p></li>
                        <li><p>Data Visualization - Universe Designer and Information Designer Tool for Single source or Multi-source Universe creation</p></li>
                        <li><p>Analysis for Office and OLAP</p></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="sapsolution-content-style-one">
                  <div className="sapsolution-text">
                    <p>
                      Danam’s ECC and SAP implementation tagged with Industry domain experts makes it a truly End to End vendor for a complete SAP solution starting from your ECC till your Analysis requirements.
                    </p>
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

export default SapSolution;

import "./Ifrs.css";
import IfrsImage from "../../../assets/ifrs.jpg";
import TopBar from "../TopBar";
import LowerBar from "../LowerBar";
import Footer from "../Footer";

const Ifrs = () => {
  return (
    <>
      <TopBar />
      <LowerBar />

      {/* Breadcrumb */}
      <div className="ifrs-breadcrumb">
        <div className="container">
          <div className="text">
            <a href="/">Home</a>
            <i className="fa fa-angle-right"></i>
            <a href="/services"> Services</a>
            <i className="fa fa-angle-right"></i> IFRS Solutions
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section className="ifrs-details">
        <div className="container">
          <div className="row">
            <div className="col ifrs-col">
              <div className="ifrs-sidebar-details">

                <div className="ifrs-content-style-one">
                  <div className="ifrs-title">INTERNATIONAL FINANCIAL REPORTING STANDARDS (IFRS) SOLUTIONS</div>
                </div>

                <div className="ifrs-content-style-two row">
                  <div className="col-md-6 ifrs-col">
                    <div className="img-box">
                      <figure>
                        <img src={IfrsImage} alt="SAP HCM" />
                      </figure>
                    </div>
                  </div>
                  <div className="col-md-6 ifrs-col">
                    <div className="ifrs-text">
                      <p>
                        Business across the world have put considerable amount of effort and money to convert to IFRS standards and many of these are IT related. IFRS is mostly financial driven but has a major impact on IT systems as well as Business. Danam helps its clients greatly by its knowledge and experience on IFRS implementations.
                        <br /><br />
                        The IFRS conversion goes hand in hand with the other IT projects like ERP upgrade or implementation. With Danam’s experts in both the areas, the effort can be greatly consolidated.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ifrs-content-style-one">
                  <div className="ifrs-title">OUR OFFERS INCLUDE:</div>
                </div>

                <div className="ifrs-content-style-two row">
                  <div className="col-md-6 ifrs-col">
                    <div className="ifrs-content-side">
                      <ul className="ifrs-list">
                        <li><p>Thorough Evaluation of Business needs</p></li>
                        <li><p>Identification of areas which needs to be IFRS adopted</p></li>
                        <li><p>IFRS Implementation / Porting</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 ifrs-col">
                    <div className="ifrs-content-side">
                      <ul className="ifrs-list">
                        <li><p>Assessment of applicable IFRS standards</p></li>
                        <li><p>Collaboration between IFRS conversion and related IT projects</p></li>
                        <li><p>IFRS maintenance</p></li>
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

export default Ifrs;

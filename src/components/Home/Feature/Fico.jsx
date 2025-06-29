import "./Fico.css";
import ficoImage from "../../../assets/fico.jpg";
import TopBar from "../TopBar";
import LowerBar from "../LowerBar";
import Footer from "../Footer";

const Fico = () => {
  return (
    <>
      <TopBar />
      <LowerBar />

      {/* Breadcrumb */}
      <div className="fico-breadcrumb">
        <div className="container">
          <div className="text">
            <a href="/">Home</a>
            <i className="fa fa-angle-right"></i>
            <a href="/services"> Services</a>
            <i className="fa fa-angle-right"></i> FI CO Solutions
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section className="fico-details">
        <div className="container">
          <div className="row">
            <div className="col fico-col">
              <div className="sidebar-details">

                <div className="content-style-one">
                  <div className="title">FINANCIAL PLANNING AND CONSOLIDATION</div>
                </div>

                <div className="content-style-two row">
                  <div className="col-md-6 fico-col">
                    <div className="img-box">
                      <figure>
                        <img src={ficoImage} alt="SAP FICO" />
                      </figure>
                    </div>
                  </div>
                  <div className="col-md-6 fico-col">
                    <div className="text">
                      <p>
                        Danam’s expertise in the area of Financial Planning and Consolidation is world class. It has one of the best implementation teams who can help you transform challenges into competitive advantage. The team of consultants and project experts will work with you to streamline your implementations and upgrades. They help you identify how to reduce operational costs without disrupting your ongoing business. Danam will also assist you in the deployment and integration of new technologies and help you to efficiently implement new and more profitable strategies across your business.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="content-style-one">
                  <div className="text">
                    <p>Danam helps you with a full cycle end to end implementation in an ASAP (Accelerated System Application Product) methodology.</p>
                  </div>
                </div>

                <div className="content-style-one">
                  <div className="title">Danam offers following services:</div>
                </div>

                <div className="content-style-two row">
                  <div className="col-md-6 fico-col">
                    <div className="content-side">
                      <ul className="list">
                        <li><p>End to End project Planning</p></li>
                        <li><p>Profit Maximization</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 fico-col">
                    <div className="content-side">
                      <ul className="list">
                        <li><p>Control and Analysis of Cost</p></li>
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

export default Fico;

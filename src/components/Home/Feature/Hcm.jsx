import "./Hcm.css";
import hcmImage from "../../../assets/Hcm.jpg";
import TopBar from "../TopBar";
import LowerBar from "../LowerBar";
import Footer from "../Footer";

const Hcm = () => {
  return (
    <>
      <TopBar />
      <LowerBar />

      {/* Breadcrumb */}
      <div className="hcm-breadcrumb">
        <div className="container">
          <div className="text">
            <a href="/">Home</a>
            <i className="fa fa-angle-right"></i>
            <a href="/services"> Services</a>
            <i className="fa fa-angle-right"></i> HCM Solutions
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section className="hcm-details">
        <div className="container">
          <div className="row">
            <div className="col hcm-col">
              <div className="sidebar-details">

                <div className="content-style-one">
                  <div className="title">HUMAN CAPITAL MANAGEMENT</div>
                </div>

                <div className="content-style-two row">
                  <div className="col-md-6 hcm-col">
                    <div className="img-box">
                      <figure>
                        <img src={hcmImage} alt="SAP HCM" />
                      </figure>
                    </div>
                  </div>
                  <div className="col-md-6 hcm-col">
                    <div className="text">
                      <p>
                        Danam has a clear understanding that a very high performance and effective businesses use their Enterprise landscape to gain maximum advantage in the area of talent management. Top companies make HR functions as one of the highest priorities. Danam helps you drive towards that goal with assurance.
                        
                        Most of the budget for any company goes towards recruiting and retaining the best possible Human capital. Danam is uniquely positioned and perfectly capable of realizing the most complex Human Resource Transformation initiatives into tangible and user friendly solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="content-style-one">
                  <div className="text">
                    <p>We provide a full lifecycle of HCM services, including assessment, implementation, upgrade, and support using proven methodologies.</p>
                  </div>
                </div>

                <div className="content-style-one">
                  <div className="title">Danam offers following services:</div>
                </div>

                <div className="content-style-two row">
                  <div className="col-md-6 hcm-col">
                    <div className="content-side">
                      <ul className="list">
                        <li><p>Implementation of HCM</p></li>
                        <li><p>HCM maintenance</p></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 hcm-col">
                    <div className="content-side">
                      <ul className="list">
                        <li><p>Application Support and Training end users</p></li>
                        <li><p>Learning and Development</p></li>
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

export default Hcm;

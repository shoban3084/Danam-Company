import TopBar from '../TopBar';
import LowerBar from '../LowerBar';
import Footer from '../Footer';
import bannerImg from '../../../assets/industries.jpg';
import industriesImg from '../../../assets/industries.png';
import './industries.css';

const Industries = () => {
  return (
    <>
      <TopBar />
      <LowerBar />

      <div
        className="about-bg centered"
        style={{ backgroundImage: `url(${bannerImg})` }}
      />

      <div className="NavBar">
        <div className="container">
          <div className="text">
            <a href="/">Home</a> <i className="fa fa-angle-right"></i> Industries
          </div>
        </div>
      </div>

      {/* INDUSTRIES WE SERVE Section */}
      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 service-colmun">
              <div className="sidebar-details">
                {/* Section 1 */}
                <div className="content-style-one">
                  <div className="title">INDUSTRIES WE SERVE</div>
                  <div className="text">
                    <p>
                      Danam has wide range of Industry expertise. This domain
                      knowledge helps us to understand different businesses,
                      regardless of the size and model, very well. We thrive to
                      build on this Industry expertise along with our customers
                      and help our clients build more customized solutions based
                      on this.
                    </p>
                  </div>
                </div>

                <div className="content-style-two">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12 service-colmun">
                      <div className="content-side">
                        <ul className="list">
                          <li><p>Manufacturing</p></li>
                          <li><p>Professional Services</p></li>
                          <li><p>Oil and Gas</p></li>
                          <li><p>Banking and Insurance</p></li>
                          <li><p>Hospitality</p></li>
                          <li><p>Life Science</p></li>
                          <li><p>High tech</p></li>
                          <li><p>Construction</p></li>
                          <li><p>Insurance</p></li>
                          <li><p>Renewable</p></li>
                          <li><p>Retail</p></li>
                          <li><p>Utilities</p></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 service-colmun">
                      <div className="img-box">
                        <figure>
                      <img src={industriesImg} alt="Industries we serve" className="industries-img"/>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="content-style-one">
                  <div className="title">BANKING & FINANCIAL</div>
                </div>

                <div className="content-style-two">
                  <div className="text">
                    <p>
                      The business landscape is always a challenging and a
                      volatile environment. The tentative economical recovery
                      following the meltdown of 2008 is being hampered on
                      multiple fronts; ongoing credit concerns in Europe and
                      the US. This has very essentially resulted in some key
                      decisions for the stake holders like:
                    </p>
                    <div className="content-side">
                      <ul className="list">
                        <li>
                          <p>
                            Regulatory compliances and transparency leading to
                            substantial change in reporting requirements, Risk
                            Management
                          </p>
                        </li>
                        <li>
                          <p>
                            Customer centricity – customer profitability
                            analytics, dynamic product pricing and actual
                            benefits realization through customer loyalty
                            programs
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="text">
                    <p>
                      Portfolio rationalization and subsequent system
                      consolidation. Business and cost transformation.
                    </p>
                    <p>
                      Danam’s combined domain knowledge in all these areas gives
                      it a unique advantage of providing the most customized
                      solution which matches your requirement.
                    </p>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="content-style-one">
                  <div className="title">
                    MANUFACTURING, RETAIL AND LOGISTICS
                  </div>
                </div>

                <div className="content-style-two">
                  <div className="text">
                    <p>
                      Manufacturing, Retail Distribution and Logistics sectors
                      face higher input costs, lower consumer spending and tight
                      credit markets. But innovative business technology can
                      help enterprises achieve better business outcomes even in
                      tougher times. Technology can help design, manufacture and
                      maintain sophisticated products to protect the top line.
                      Technology can also help orient the business’s operations
                      to ensure that the enterprise always exceeds customer’s
                      expectations and achieve superior command of the
                      enterprise-wide cost structures.
                    </p>
                    <p>
                      Danam’s detailed understanding of this domain enables its
                      customers to maximize the value and increase business
                      efficiency.
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

export default Industries;

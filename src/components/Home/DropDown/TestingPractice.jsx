import "./TestingPractice.css";
import bannerImg from "../../../assets/testing.jpg";
import TopBar from "../TopBar";
import LowerBar from "../LowerBar";
import Footer from "../Footer";

const TestingPractice = () => {
  return (
    <>
      <TopBar />
      <LowerBar />

      {/* Banner */}
      <div
        className="testing-banner centered"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="container">
          <div className="text">Testing Practice</div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="testing-breadcrumb">
        <div className="container">
          <div className="text">
            <a href="/">Home</a>
            <i className="fa fa-angle-right"></i>
            <a href="/services"> Services</a>
            <i className="fa fa-angle-right"></i> Testing Practice
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section className="testing-details">
        <div className="container">
          <div className="row">
            <div className="col testing-col">
              <div className="sidebar-details">

                <div className="content-style-one">
                  <div className="title">SOFTWARE TESTING PRACTICE</div>
                  <div className="text">
                    <p>
                      Danam’s Quality Assurance (QA) capabilities helps you
                      reduce your Solution Development Costs, Achieve High
                      Quality and Go Live Faster than before.
                      <br />
                      Danam’s QA or Testing Center of Excellence team can help
                      you strategize your tests in an innovative way. We provide
                      Testing solutions which are tailor made to match your
                      development needs.
                      <br />
                      We have working experience in various development life
                      cycles like Unified Model, Modified V model and Agile
                      Development Model. Our capabilities not only lies in
                      strategizing your tests and making your development effort
                      a success but also in Continuous improvement of your
                      current processes.
                      <br />
                      With our comprehensive knowledge in various Industries,
                      our domain knowledge is unparalleled. This provides us a
                      great advantage in understanding your business
                      requirements accurately and quickly suggest solutions
                      which will exactly match your needs.
                      <br />
                      We offer you the following independent Testing Services.
                    </p>

                  </div>
                </div>

                <div className="content-style-two row">
                  <div className="col">
                    <h4>Product Development Services</h4>
                    <ul className="list">
                      <li>Functional Correctness</li>
                      <li>Performance Testing</li>
                      <li>Security Testing</li>
                      <li>Usability Testing</li>
                      <li>Test Automation</li>
                    </ul>
                  </div>
                  <div className="col">
                    <h4>Specialized Testing Services</h4>
                    <ul className="list">
                      <li>End to End Business Intelligence Assurance</li>
                    </ul>
                  </div>
                </div>

                <div className="content-style-one">
                  <div className="title">FUNCTIONAL CORRECTNESS</div>
                  <ul className="list">
                    <li>
                      Solution Requirements – QA will be involved from requirements phase where we will assess the tests requirements for the proposed solution. This will involve creating detailed test requirement for every feature in the solution. Quality issues identified at this stage will save huge development effort in future.
                    </li>
                    <li>
                      Design and Architecture – QA will be part of the design and architecture discussions. This information is vital for QA to derive detailed test plans for each layer of the solution. Detailed test plans will be written at this stage. Traceability between Design and the Requirement ensures that there is at least 1 to 1 mapping to the requirement in the design. Overall understanding of how the solution is expected to function will be thoroughly documented.
                    </li>
                    <li>
                      Functional & Test Specifications – Functional Specifications are derived out of the Architecture and are mapped onto the requirements. In this phase detailed test cases will be written for each aspect of the functionality. KPIs will be agreed upon. These test cases will be mapped to functional spec and subsequently traced all the way back to the requirements
                    </li>
                  </ul>
                </div>

                <div className="content-style-one">
                  <div className="title">PERFORMANCE TESTING</div>
                  <p>
                    Detailed End to End performance testing is performed on the solution. Critical workflows are performance tested against the guidelines given in the requirements phase. Response time, Load capability, sizing recommendations based on the performance obtained and Resource consumption (CPU, Memory & Disk) will be measured and performance improvements will be derived. Our recommendations will be validated against the changes made.
                  </p>
                  <ul className="list">
                    <li>Automation of workflows based on the tools used</li>
                    <li>End to End response Times</li>
                    <li>Throughput</li>
                    <li>Load Testing</li>
                    <li>Reliability Testing</li>
                    <li>Resource Consumption metrics</li>
                    <li>Performance recommendations</li>
                    <li>Sizing recommendations</li>
                  </ul>
                </div>

                <div className="content-style-one">
                  <div className="title">SECURITY TESTING</div>
                  <p>
                    Since the threats targeting a Software’s vulnerability has increased many folds, it is essential to ensure that the Software system and the respective data that the Software controls are protected. This can be achieved by having stronger QA practices to systematically validate these vulnerabilities. We at Danam help you protect the data and resources contained and controlled by the software and the Software asset itself.
                  </p>
                  <p>
                    Most of these security defects are caused due to two primary reasons
                  </p>
                  <ul className="list">
                    <li>Security Defects: Failure to Satisfy Requirements</li>
                    <li>
                      Non-inclusion of Security requirements:  This is a more serious issue where the requirements itself is not accounting for Security measures
                    </li>
                  </ul>
                  <p>
                    We ensure that the software is designed to operate at a level of security that is consistent with the potential harm that could result from the loss, inaccuracy, alteration, unavailability or misuse of the data and resources that it uses or controls. Our tests focus on locating software weaknesses and identifying extreme or unexpected situations that could cause the software to fail violating the Security requirements.
                  </p>
                </div>

                <div className="content-style-one">
                  <div className="title">USABILITY TESTING</div>
                  <p>
                    Danam helps you evaluate your product by testing it on users. The technique is consistent and conforms to user-centered interaction design. It is an extremely important usability practice since it gives direct input on how the real users use the system. This is in contrast with the other testing methodologies. The fundamental objective is to address some of the well-known human biases that can adversely affect the delivery and perception of a software development project. This can be caused due to lack of clear definitions of success or changing priorities. Our set of expert test cases will focus on Attractiveness, Learnability, Operability, Understandability and Usability compliance. Thus ensuring a very user friendly software delivered.
                  </p>
                </div>

                <div className="content-style-one">
                  <div className="title">TEST AUTOMATION</div>
                  <p>
                    Maintenance of test cases can be a time consuming and mundane work. Automation is the best way to manage them. We offer you automation solutions which is purely based on the evaluation of existing test cases. The automation tools are carefully selected to best suite your needs. The capabilities include automating Mobile solutions as well. This automation can be directly performed on your handheld device or tightly integrated in your Continuous Integration tool or Build System
                  </p>
                </div>

                <div className="content-style-one">
                  <div className="title">
                    END TO END BUSINESS INTELLIGENCE ASSURANCE
                  </div>
                  <p>
                    Danam has a dedicated and a focused team of experts who have a proven track record of end to end Business Intelligence testing. Your Business Intelligence implementations go through various phases which involve different layers of technology and business variations. It is quintessential to validate at each stage for Quality. Right from the inception of a Data Warehouse till the time it hits the report there can be various types of issues that can be uncovered. Some of them can be Preventive and some of them can be Reactive. These issues can be uncovered in various aspects of Quality such as Functionality or Business Purpose, Performance, Security and Usability of the end artifacts which can be a set of Reports or Data Visualization systems.
                  </p>
                  <p>
                    With Danam’s Quality Assurance focused processes and
                    techniques for Business Intelligence, your BI implementation
                    will be of the highest Quality.
                  </p>
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

export default TestingPractice;

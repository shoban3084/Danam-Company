import TopBar from "../TopBar";
import LowerBar from "../LowerBar";
import Footer from "../Footer";
import "./Careers.css";
import careerImg from "../../../assets/danam_career.png";
import CareerImg from "../../../assets/danam_career2.png";

const Careers = () => {
  return (
    <>
      <TopBar />
      <LowerBar />

      {/* Breadcrumb */}
      <div className="career-breadcrumb">
        <div className="container">
          <div className="text">
            <a href="/">Home</a>
            <i className="fa fa-angle-right"></i>
            <span className="current-page">Career</span>
          </div>
        </div>
      </div>

      <div className="career-page">
        <div className="container career-container">
          <div className="career-content">
            <h1>Careers</h1>
            <p>
              <strong>Danam Infotech Private Limited</strong> offers exciting career opportunities and jobs for technology professionals. We provide a world-class work environment, a collaborative culture, and a competitive compensation package.
            </p>

            <p>
              If you're looking for <strong>tech jobs in India</strong> and want to grow your career with an innovative company like Danam, especially in platforms like <strong>SevAI, SAP, Oracle, and Cloud Solutions</strong> — connect with us!
            </p>

            <p>
              We are currently hiring for the following positions based in <strong>CHENNAI, India</strong>:
            </p>
            <strong>Danam Infotech Open Positions</strong>

            <h2>Our Services</h2>
            <ul className="custom-list">
              <li>SevAI Implementation & Product Support</li>
              <li>SAP Implementation & Managed Services</li>
              <li>Oracle ERP Solutions</li>
              <li>Software Testing & QA Practice</li>
            </ul>

            <h2>Industries We Serve</h2>
            <ul className="custom-list">
              <li>Manufacturing</li>
              <li>Retail & Logistics</li>
              <li>Banking & Insurance</li>
              <li>Life Sciences</li>
              <li>Hospitality & Professional Services</li>
            </ul>

            <h2>Technologies & Tools</h2>
            <ul className="custom-list">
              <li>SevAI Digital Enterprise Platform</li>
              <li>SAP S/4HANA, FICO, MM, SD, ABAP</li>
              <li>Oracle Cloud ERP & EBS</li>
              <li>Automation Tools – Selenium, JMeter</li>
            </ul>
          </div>

          <div className="career-image">
            <img src={careerImg} alt="Career Illustration 1" />
            <img src={CareerImg} alt="Career Illustration 2" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Careers;

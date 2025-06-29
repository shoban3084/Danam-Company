import { useParams } from 'react-router-dom';
import TopBar from '../TopBar';
import LowerBar from '../LowerBar';
import Footer from '../Footer';
import bannerImg from '../../../assets/industries.jpg';
import './Slider2.css';

const INDUSTRY_CONTENT = {
  manufacturing: {
    title: "Manufacturing",
    points: [
      "Enhance efficiency across production cycles with digital automation.",
      "Enable smart factory operations with IoT and analytics.",
      "Streamline supply chain and inventory with real-time visibility.",
      "Ensure quality compliance and reduce waste across processes."
    ],
  },
  "professional-services": {
    title: "Professional Services",
    points: [
      "Streamline project tracking and workforce management.",
      "Improve client satisfaction with data-driven insights.",
      "Automate billing, time tracking, and resource allocation.",
      "Enable remote collaboration and digital service delivery."
    ],
  },
  "oil-gas": {
    title: "Oil & Gas",
    points: [
      "Support exploration and production through integrated platforms.",
      "Enable real-time monitoring of assets and operations.",
      "Ensure compliance with evolving safety regulations.",
      "Optimize field workforce with mobile and cloud solutions."
    ],
  },
  banking: {
    title: "Banking and Insurance",
    points: [
      "Support digital transformation across banking operations.",
      "Improve risk management and fraud detection.",
      "Personalize services with advanced customer analytics.",
      "Enable seamless regulatory compliance and reporting."
    ],
  },
  hospitality: {
    title: "Hospitality",
    points: [
      "Enhance guest experience with personalized digital services.",
      "Simplify bookings and reservations across platforms.",
      "Improve operational efficiency in housekeeping and F&B.",
      "Leverage CRM for loyalty and targeted promotions."
    ],
  },
  "life-science": {
    title: "Life Science",
    points: [
      "Support R&D with secure and scalable data platforms.",
      "Enable regulatory compliance in clinical and lab operations.",
      "Facilitate real-time monitoring of trials and quality.",
      "Accelerate go-to-market through digital enablement."
    ],
  },
  "high-tech": {
    title: "High Tech",
    points: [
      "Accelerate innovation and reduce time-to-market.",
      "Enable global product lifecycle management.",
      "Optimize engineering collaboration and IP security.",
      "Scale operations with cloud-native technologies."
    ],
  },
  construction: {
    title: "Construction",
    points: [
      "Improve project planning, tracking, and cost control.",
      "Digitize resource scheduling and material handling.",
      "Enable safety and compliance through smart tools.",
      "Use analytics for real-time progress monitoring."
    ],
  },
  insurance: {
    title: "Insurance",
    points: [
      "Automate policy management and claims processing.",
      "Personalize policy offerings using analytics.",
      "Enhance customer experience through self-service portals.",
      "Ensure compliance and audit-readiness."
    ],
  },
  renewable: {
    title: "Renewable",
    points: [
      "Support asset performance and uptime optimization.",
      "Enable real-time monitoring of renewable energy systems.",
      "Track sustainability metrics and compliance goals.",
      "Leverage data for predictive maintenance and planning."
    ],
  },
  retail: {
    title: "Retail",
    points: [
      "Improve inventory and supply chain visibility.",
      "Personalize customer journeys with analytics.",
      "Enable seamless omnichannel commerce.",
      "Boost sales with targeted promotions and loyalty programs."
    ],
  },
  utilities: {
    title: "Utilities",
    points: [
      "Manage grid assets and smart metering infrastructure.",
      "Reduce outages through predictive analytics.",
      "Engage customers with digital self-service portals.",
      "Ensure compliance with regulatory frameworks."
    ],
  }
};

const IndustriesDetails = () => {
  const { industryName } = useParams();
  const industry = INDUSTRY_CONTENT[industryName];

  return (
    <>
      <TopBar />
      <LowerBar />

      <div className="about-bg centered" style={{ backgroundImage: `url(${bannerImg})` }} />

      <div className="NavBar">
        <div className="container">
          <div className="text">
            <a href="/">Home</a> <i className="fa fa-angle-right"></i> Industries <i className="fa fa-angle-right"></i> {industry?.title || 'Not Found'}
          </div>
        </div>
      </div>

      <section className="service-details">
        <div className="container">
          <div className="sidebar-details">
            <div className="content-style-one">
              <div className="title">{industry?.title || "Industry Not Found"}</div>
              <div className="text">
                {industry?.points ? (
                  <ul className="list">
                    {industry.points.map((point, index) => (
                      <li key={index}><p>{point}</p></li>
                    ))}
                  </ul>
                ) : (
                  <p>Sorry, no details available for this industry.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default IndustriesDetails;

import { useParams } from 'react-router-dom';
import TopBar from '../TopBar';
import LowerBar from '../LowerBar';
import Footer from '../Footer';
import bannerImg from '../../../assets/industries.jpg';
import './Slider2.css';
import manufacturingImg from '../../../assets/industries/Manufacturing.jpg';
import professionalImg from '../../../assets/industries/professional-services.jpg';
import oilgasImg from '../../../assets/industries/oil-gas.jpg';
import bankingImg from '../../../assets/industries/banking.jpg';
import hospitalityImg from '../../../assets/industries/hospitality.jpg';
import lifescienceImg from '../../../assets/industries/life-science.avif';
import hightechImg from '../../../assets/industries/high-tech.jpg';
import constructionImg from '../../../assets/industries/construction.jpg';
import insuranceImg from '../../../assets/industries/insurance.jpg';
import renewableImg from '../../../assets/industries/renewable.jpg';
import retailImg from '../../../assets/industries/retail.jpg';
import utilityImg from '../../../assets/industries/utilities.jpg';

const INDUSTRY_CONTENT = {
  manufacturing: {
    title: "Manufacturing",
    image: manufacturingImg,
    points: [
      "Enhance efficiency across production cycles with digital automation.",
      "Enable smart factory operations with IoT and analytics.",
      "Streamline supply chain and inventory with real-time visibility.",
      "Ensure quality compliance and reduce waste across processes.",
      "Integrate ERP systems for unified business insights.",
      "Adopt AI for predictive maintenance of equipment."
    ],
  },
  "professional-services": {
    title: "Professional Services",
    image: professionalImg,
    points: [
      "Streamline project tracking and workforce management.",
      "Improve client satisfaction with data-driven insights.",
      "Automate billing, time tracking, and resource allocation.",
      "Enable remote collaboration and digital service delivery.",
      "Enhance proposal generation with automated templates.",
      "Track billable hours with intelligent time logging."
    ],
  },
  "oil-gas": {
    title: "Oil & Gas",
    image: oilgasImg,
    points: [
      "Support exploration and production through integrated platforms.",
      "Enable real-time monitoring of assets and operations.",
      "Ensure compliance with evolving safety regulations.",
      "Optimize field workforce with mobile and cloud solutions.",
      "Leverage GIS for pipeline planning and risk assessment.",
      "Digitally track environmental impact and emissions.",
    ],
  },
  banking: {
    title: "Banking and Insurance",
    image: bankingImg,
    points: [
      "Support digital transformation across banking operations.",
      "Improve risk management and fraud detection.",
      "Personalize services with advanced customer analytics.",
      "Enable seamless regulatory compliance and reporting.",
      "Offer seamless digital onboarding for new customers.",
      "Integrate chatbot support for 24/7 assistance.",

    ],
  },
  hospitality: {
    title: "Hospitality",
    image: hospitalityImg,
    points: [
      "Enhance guest experience with personalized digital services.",
      "Simplify bookings and reservations across platforms.",
      "Improve operational efficiency in housekeeping and F&B.",
      "Leverage CRM for loyalty and targeted promotions.",
      "Digitize room service and guest feedback systems.",
      "Automate inventory for kitchen and housekeeping.",
    ],
  },
  "life-science": {
    title: "Life Science",
    image: lifescienceImg,
    points: [
      "Support R&D with secure and scalable data platforms.",
      "Enable regulatory compliance in clinical and lab operations.",
      "Facilitate real-time monitoring of trials and quality.",
      "Accelerate go-to-market through digital enablement.",
      "Use AI for drug discovery and modeling.",
      "Enable remote monitoring in clinical trials."
    ],
  },
  "high-tech": {
    title: "High Tech",
    image: hightechImg,
    points: [
      "Accelerate innovation and reduce time-to-market.",
      "Enable global product lifecycle management.",
      "Optimize engineering collaboration and IP security.",
      "Scale operations with cloud-native technologies.",
      "Enable smart prototyping with digital twins.",
      "Integrate CI/CD for continuous delivery.",
    ],
  },
  construction: {
    title: "Construction",
    image: constructionImg,
    points: [
      "Improve project planning, tracking, and cost control.",
      "Digitize resource scheduling and material handling.",
      "Enable safety and compliance through smart tools.",
      "Use analytics for real-time progress monitoring.",
      "Automate compliance checks on safety standards.",
      "Enable mobile inspection and reporting tools."
    ],
  },
  insurance: {
    title: "Insurance",
    image: insuranceImg,
    points: [
      "Automate policy management and claims processing.",
      "Personalize policy offerings using analytics.",
      "Enhance customer experience through self-service portals.",
      "Ensure compliance and audit-readiness.",
      "Use AI to detect fraudulent claims in real-time.",
      "Provide personalized policy recommendations.",
    ],
  },
  renewable: {
    title: "Renewable",
    image: renewableImg,
    points: [
      "Support asset performance and uptime optimization.",
      "Enable real-time monitoring of renewable energy systems.",
      "Track sustainability metrics and compliance goals.",
      "Leverage data for predictive maintenance and planning.",
      "Streamline compliance with green certifications.",
      "Enable investor dashboards for ESG performance."
    ],
  },
  retail: {
    title: "Retail",
    image: retailImg,
    points: [
      "Improve inventory and supply chain visibility.",
      "Personalize customer journeys with analytics.",
      "Enable seamless omnichannel commerce.",
      "Boost sales with targeted promotions and loyalty programs.",
      "Integrate real-time stock updates across channels.",
      "Enable AR-based product try-ons and previews.",
    ],
  },
  utilities: {
    title: "Utilities",
    image: utilityImg,
    points: [
      "Manage grid assets and smart metering infrastructure.",
      "Reduce outages through predictive analytics.",
      "Engage customers with digital self-service portals.",
      "Ensure compliance with regulatory frameworks.",
      "Automate outage notifications and customer alerts.",
      "Enable smart billing based on usage patterns.",
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
                <div className="industry-layout">
                  <div className="text">{industry?.points ? (
                    <ul className="list">{industry.points.map((point, index) => (
                    <li key={index}><p>{point}</p></li>
                    ))}
                    </ul>
                    ) : (
                    <p>Sorry, no details available for this industry.</p>
                    )}
                    </div>
                    {industry?.image && (
                      <div className="img-box">
                        <img className="industry-img" src={industry.image} alt={industry.title} />
                        </div>
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

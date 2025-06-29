import TopBar from '../TopBar';
import LowerBar from '../LowerBar';
import Footer from '../Footer';
import FeatureSection from '../FeatureSection';
import CallBack from '../CallBack';
import bannerImg from '../../../assets/ourservice.jpg'; 
import './industries.css';

const Services = () => {
  return (
    <>
      <TopBar />
      <LowerBar />
      {/* Banner */}
      <div
        className="about-bg centered"
        style={{ backgroundImage: `url(${bannerImg})` }}
      />

      {/* Breadcrumb */}
      <div className="NavBar">
        <div className="container">
          <div className="text">
            <a href="/">Home</a> <i className="fa fa-angle-right"></i> Services
          </div>
        </div>
      </div>

      <FeatureSection />
      <CallBack />
      <Footer />
    </>
  );
};

export default Services;

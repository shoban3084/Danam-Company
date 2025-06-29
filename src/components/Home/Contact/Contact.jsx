import LowerBar from "../LowerBar";
import TopBar from "../TopBar";
import Footer from "../Footer";
import "./Contact.css";
import bannerImg from "../../../assets/contact.avif";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicIcon from '@mui/icons-material/Public';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  return (
    <>
      <TopBar />
      <LowerBar />

      {/* Banner */}
      <div
        className="Contact-bg centered"
        style={{ backgroundImage: `url(${bannerImg})` }}
      ></div>

      {/* Breadcrumb */}
      <div className="contact-breadcrumb">
        <div className="container">
          <div className="text">
            <a href="/">Home</a> <i className="fa fa-angle-right"></i> Contact Us
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container contact-cards">
        <div className="card">
          <div className="icon"><PublicIcon sx={{ fontSize: 36, color: '#f6b129' }} /></div>
          <h3>Global Head Quarters</h3>
          <p>
            Danam Consulting Inc.,<br />
            340 S Branch Rd,<br />
            Hillsborough Township, NJ 08844, USA
          </p>
        </div>
        <div className="card">
          <div className="icon"><LocationOnIcon sx={{ fontSize: 36, color: '#f6b129' }} /></div>
          <h3>India</h3>
          <p>
            Danam Infotech Private Limited,<br />
            13, Manimegalai Street, Ullagaram,<br />
            Madipakkam, Chennai, Tamil Nadu 600091
          </p>
        </div>
        <div className="card">
          <div className="icon"><PhoneIcon sx={{ fontSize: 36, color: '#f6b129' }} /></div>
          <h3>Phone</h3>
          <p>
            <strong>USA:</strong> 6096729356 <br />
            <strong>India:</strong> +91 44 42156668 <br />
            +91 44 48562332
          </p>
        </div>
      </div>

      {/* Form & Map Section */}
      <div className="form-map-section">
        <div className="contact-form">
          <h2>Get in <span>Touch</span></h2>
          <p>Kindly fill in your details in the below form, our representative will contact you shortly.</p>
          <div className="divider"></div>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea rows="5" placeholder="Message"></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.0118874344457!2d80.19307466955814!3d12.968809199209163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525de6d06c0989%3A0xa30b0a928e506571!2s13%2C%20Manimegalai%20Street%2C%20Ullagaram%2C%20Madipakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600091!5e0!3m2!1sen!2sin!4v1750834986015!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="Danam Infotech Location"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;

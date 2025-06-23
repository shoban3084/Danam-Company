import React from "react";
import "./CallBack.css";
import rightImage from "../../assets/image3.jpg"; 

export default function CallBack() {
  return (
    <section className="call-back">
      <div className="callback-container">
        <div className="form-section">
          <div className="call-back-title">
            <h2>
              Request A <span>Call Back</span>
            </h2>
            <p>
              Kindly fill in your details in the below form, our representative
              will contact you shortly.
            </p>
            <div className="underline2" />
          </div>

          <form className="form-area">
            <div className="form-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Phone" />
              <select>
                <option>Select a Topic</option>
                <option>SAP Project</option>
                <option>Financial</option>
                <option>SAP GRC</option>
                <option>Testing Practice</option>
              </select>
            </div>
            <button className="btn-one">Send Request</button>
          </form>
        </div>

        <div className="image-section">
          <img src={rightImage} alt="Callback Visual" />
        </div>
      </div>
    </section>
  );
}
import React from "react";
import hrt from "./asset/media/svg/heartbeat-2.svg";
import loc from "./asset/media/svg/location-icon.svg";
import opd from "./asset/media/svg/opd.svg";
import emg from "./asset/media/svg/emergency-icon.svg";
import { Link } from "react-router-dom";
import amub from "./asset/media/svg/ambulance.svg";
import email from "./asset/media/svg/email.svg";
export default function Contact() {
  return (
    <>
      <section id="banner-section">
        <div className="container">
          <div className="heading-description">
            <h2>Contact-Us</h2>
            <div className="banner-breadcrum">
              <Link to="/">home</Link>
              <i className="fas fa-angle-double-right"></i>
              <a to="">Contact- Us</a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-us-section">
        <div className="container">
          <div className="section-title">
            <h2>
              Inquire Now
              <div className="element">
                <img src={hrt} alt="" />
              </div>
            </h2>
            <div className="heading-description">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis itaque, culpa deleniti corporis incidunt iure sed, odit
                libero reprehenderit vitae illum quam. Aut dolorem laborum
                laudantium atque architecto repellendus harum!
              </p>
            </div>
          </div>
          <div className="row gy-3">
            <div className="col-lg-7">
              <div className="contact-info-wrapper">
                <a to="#">
                  <div className="info-wrapper">
                    <div className="icon-name-wrapper">
                      <img src={opd} alt="" />
                    </div>
                    <div className="icon-name-wrapper">
                      <p>OPD Inquire</p>
                    </div>
                    <div className="number-wrapper">
                      <p>+91 1234-567890</p>
                    </div>
                  </div>
                </a>
                <a to="#">
                  <div className="info-wrapper">
                    <div className="icon-name-wrapper">
                      <img src={emg} alt="" />
                    </div>
                    <div className="icon-name-wrapper">
                      <p>emergency</p>
                    </div>
                    <div className="number-wrapper">
                      <p>+91 1234-567890</p>
                    </div>
                  </div>
                </a>
                <a to="#">
                  <div className="info-wrapper">
                    <div className="icon-name-wrapper">
                      <img src={amub} alt="" />
                    </div>
                    <div className="icon-name-wrapper">
                      <p>Ambluance</p>
                    </div>
                    <div className="number-wrapper">
                      <p>+91 1234-567890</p>
                    </div>
                  </div>
                </a>
                <a to="mailto:srmhospital@gmail.com">
                  <div className="info-wrapper">
                    <div className="icon-name-wrapper">
                      <img src={email} alt="" />
                    </div>
                    <div className="icon-name-wrapper">
                      <p>Email</p>
                    </div>
                    <div className="number-wrapper">
                      <p>srmhospital@gmail.com</p>
                    </div>
                  </div>
                </a>
                <a to="#">
                  <div className="info-wrapper">
                    <div className="icon-name-wrapper">
                      <img src={loc} alt="" />
                    </div>
                    <div className="icon-name-wrapper">
                      <p>Location</p>
                    </div>
                    <div className="number-wrapper">
                      <p>Kelwa - Amet Rd, Amet, Rajasthan</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 my-auto">
              <div className="contact-form-wrapper">
                <form action="" method="post">
                  <div className="d-flex gap-lg-3">
                    <div className="input-field">
                      <input type="text" placeholder="Enter Name" required />
                    </div>
                  </div>
                  <div className="d-flex gap-lg-3">
                    <div className="input-field">
                      <input type="text" placeholder="Mobile Number" required />
                    </div>
                  </div>
                  <div className="input-field">
                    <select name="" id="" required>
                      <option value="--Please Choose an Option--">
                        --Please Choose an Option--
                      </option>
                      <option value="Select Service">Select Service</option>
                      <option value="Anaesthesiology">Anaesthesiology</option>
                      <option value="Dental">Dental</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Eye Care">Eye Care</option>
                    </select>
                  </div>
                  <div className="text-center form-submit-btn">
                    <input type="submit" value="submit" className="web-btn" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="map-section" className="py-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.534909846589!2d73.91452767596209!3d25.286226328087874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968468cb58004b9%3A0x7449a785814dfd09!2sSHREE%20RAMCHANDRA%20MEMORIAL%20HOSPITAL!5e0!3m2!1sen!2sin!4v1712833336398!5m2!1sen!2sin"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}

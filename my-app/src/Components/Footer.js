import React from "react";
import loc from "./asset/media/svg/location.svg";
import mail from "./asset/media/svg/mail.svg";
import call from "./asset/media/svg/call.svg";
import logo from "./asset/media/Images/logo.png";
import fb from "./asset/media/Images/facebook.png";
import insta from "./asset/media/Images/instagram.png";
import twit from "./asset/media/Images/twitter.png";
import link from "./asset/media/Images/linkedin.png";

export default function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row gy-3 justify-content-center">
            <div className="col-lg-2 col-md-6">
              <div className="footer-colunm-wrapper">
                <h3>QUICK LINKS</h3>
                <ul>
                  <li>
                    <a to="#">Book An Appointment</a>
                  </li>
                  <li>
                    <a to="#">OPD Centers</a>
                  </li>
                  <li>
                    <a to="#">Feedback</a>
                  </li>
                  <li>
                    <a to="#">Book a Video Consultation</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-colunm-wrapper">
                <h3>Contatc Us</h3>
                <ul>
                  <li>
                    <a to="">
                      <img src={loc} alt="" />
                      Kelwa - Amet Rd, Amet, Rajasthan
                    </a>
                  </li>
                  <li>
                    <a to="mailto:srcmh1008@gmail.com">
                      <img src={mail} alt="" />
                      srcmh1008@gmail.com
                    </a>
                  </li>
                  <li>
                    <a to="tel:+91 8209258285">
                      <img src={call} className="img-fluid" alt="" />
                      +91 8209258285
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-colunm-wrapper">
                <h3>Important</h3>
                <ul>
                  <li>
                    <a to="">Doctors</a>
                  </li>
                  <li>
                    <a to="">Patient Speaks</a>
                  </li>
                  <li>
                    <a to="">Women & Child Care</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mx-auto">
              <div className="footer-colunm-wrapper">
                <h3>Follow Us</h3>
                <ul>
                  <li>
                    <a to="">
                      <img src={fb} className="pe-2" alt="" />
                      facebook
                    </a>
                  </li>
                  <li>
                    <a to="">
                      <img src={insta} className="pe-2" alt="" />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a to="">
                      <img src={twit} className="pe-2" alt="" />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a to="">
                      <img src={link} className="pe-2" alt="" />
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-colunm-wrapper d-flex justify-content-center align-items-center flex-column">
                <img src={logo} className="footer-logo" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusmod.Lorem ipsum dolor sit amet, consec tetur adipiscing
                  elit, sed do eiusmod.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-rights-wrapper">
          <h6>
            Copyright © 2024 SRMH. All Right Reserved | Conceived By Digi-Maa
          </h6>
        </div>
      </footer>
    </>
  );
}

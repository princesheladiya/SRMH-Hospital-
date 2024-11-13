import React from "react";
import { Link } from "react-router-dom";
import heart from "./asset/media/svg/heartbeat-2.svg";
import img54 from "./asset/media/Images/image-54.png";
import img53 from "./asset/media/Images/image-53.png";
import img52 from "./asset/media/Images/image-52.png";

export default function Doctor() {
  return (
    <>
      <section id="banner-section">
        <div className="container">
          <div className="heading-description">
            <h2>Our Doctor</h2>
            <div className="banner-breadcrum">
              <Link to="/">home</Link>
              <i className="fas fa-angle-double-right"></i>
              <a to="">Our Doctor</a>
            </div>
          </div>
        </div>
      </section>

      <section id="our-doctor-section">
        <div className="container">
          <div className="section-title mb-5">
            <h2>
              Meet Our Doctor
              <div className="element">
                <img src={heart} alt="" />
              </div>
            </h2>
          </div>

          <div className="row justify-contant-center gy-5 gx-lg-5">
            <div className="col-lg-6 col-md-6">
              <div className="team-mamber-wrapper">
                <div className="card">
                  <div className="row justify-contant-center gx-0 gy-4">
                    <div className="col-lg-6">
                      <div className="image-wrapper">
                        <img src={img54} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 my-auto">
                      <div className="info-wrap">
                        <div className="name">
                          <p>
                            <strong>Dr. Ramanand Dadhich (Owner)</strong>
                          </p>
                          <span>BAMS, MD</span>
                        </div>
                        <div className="description">
                          <p>Director, Joint Replacement Surgeries</p>
                        </div>
                        <div className="speciality-description text-center">
                          <h5>Specialization</h5>
                          <p>Book Appointment</p>
                        </div>
                        <div className="btn-wrapper text-center mt-4">
                          <a to="" className="web-btn">
                            Total arterial bypass
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="team-mamber-wrapper">
                <div className="card">
                  <div className="row justify-contant-center gx-0 gy-4">
                    <div className="col-lg-6">
                      <div className="image-wrapper">
                        <img src={img53} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 my-auto">
                      <div className="info-wrap">
                        <div className="name">
                          <p>
                            <strong>Dr. Neha Sharma</strong>
                          </p>
                          <span>MBBS,DGO(gold Medalist),DMAS</span>
                        </div>
                        <div className="description">
                          <p>Obs & Gyne</p>
                        </div>
                        <div className="speciality-description text-center">
                          <h5>Specialization</h5>
                          <p></p>
                        </div>
                        <div className="btn-wrapper text-center mt-4">
                          <a to="" className="web-btn">
                            {" "}
                            Book Appointment{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 offset-lg-3">
              <div className="team-mamber-wrapper d-flex align-item-center">
                <div className="card">
                  <div className="row justify-contant-center gx-0 gy-4">
                    <div className="col-lg-6">
                      <div className="image-wrapper">
                        <img src={img52} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 my-auto">
                      <div className="info-wrap">
                        <div className="name">
                          <p>
                            <strong>Dr. Darpan Dadheech</strong>
                          </p>
                          <span>
                            MBBS RNT, MS(General Surgeon), FMAS, FIAGES,
                            FALS(Hernia)
                          </span>
                        </div>
                        <div className="description">
                          <p>General Surgeon</p>
                        </div>
                        <div className="speciality-description text-center">
                          <h5>Specialization</h5>
                          <p></p>
                        </div>
                        <div className="btn-wrapper text-center mt-4">
                          <a to="" className="web-btn">
                            Book Appointment
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

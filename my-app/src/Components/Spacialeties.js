import React from "react";
import heart from "./asset/media/svg/heartbeat-2.svg";
import inje from "./asset/media/Images/injection.png";
import dental from "./asset/media/Images/dental.png";
import hart from "./asset/media/Images/heart.png";
import cancer from "./asset/media/Images/cancer.png";
import sur from "./asset/media/Images/bariatric-surgery.png";
import { Link } from "react-router-dom";

export default function Spacialeties() {
  return (
    <>
      <section id="banner-section">
        <div className="container">
          <div className="heading-description">
            <h2>Specialites</h2>
            <div className="banner-breadcrum">
              <Link to="/">home</Link>
              <i className="fas fa-angle-double-right"></i>
              <a to="javascript:void(0);">Specialites</a>
            </div>
          </div>
        </div>
      </section>

      <section id="specialites-section">
        <div className="section-title m-5">
          <h2>
            Specialites
            <div className="element">
              <img src={heart} className="img-fluid" alt="" />
            </div>
          </h2>
        </div>
        <div className="container-fluid">
          <div className="cnt-wrapper">
            <h3>Call Us Now</h3>
            <a to="">
              <span className="material-icons">call</span>
              +91 1234567890
            </a>
          </div>
        </div>
        <div className="container">
          <div className="row justify-contant-center">
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <a to="#">
                <div className="specialites-wrapper">
                  <div className="icon-wrapper">
                    <img src={inje} alt="" />
                  </div>
                  <h4>Anaesthesiology</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <a to="#">
                <div className="specialites-wrapper">
                  <div className="icon-wrapper">
                    <img src={dental} alt="" />
                  </div>
                  <h4>Dental</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <a to="">
                <div className="specialites-wrapper">
                  <div className="icon-wrapper">
                    <img src={hart} alt="" />
                  </div>
                  <h4>Cardiology</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <a to="">
                <div className="specialites-wrapper">
                  <div className="icon-wrapper">
                    <img src={cancer} alt="" />
                  </div>
                  <h4>Cancer</h4>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mx-auto m-auto">
              <a to="">
                <div className="specialites-wrapper mb-4">
                  <div className="icon-wrapper">
                    <img src={sur} alt="" />
                  </div>
                  <h4>Bariatric Surgery</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";
import what from "./asset/media/svg/WASocial.svg";
import hr from "./asset/media/svg/24hrs.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <section id="top-header">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 d-flex flex-wrap justify-content-center gap-2 gap-lg-3 justify-content-lg-start">
              <div className="cont-wrap">
                <Link to="tel:+91 1234567890">
                  <img src={hr} alt="" />
                  +91 1234567890
                </Link>
              </div>
              <div className="cont-wrap">
                <Link to="/">
                  <img src={what} alt="" />
                  +91 1234567890
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cont-wrap">
                <Link to="">
                  <span className="material-icons">location_on</span>
                  Kelwa - Amet Rd,Amet,Rajasthan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

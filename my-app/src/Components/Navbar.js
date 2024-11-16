import React, { useEffect } from "react";
import logo from "./asset/media/Images/logo.png";
import { Link, useLocation } from "react-router-dom";
// import PropTypes from "prop-types";

export default function Navbar(props) {
  var location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  });
  return (
    <>
      <section id="header">
        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
          <div className="container">
            <Link className="navbar-brand py-0 logo" to="/">
              <img src={logo} className="" alt="" />
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"> </span>
            </button>
            <div
              className="collapse navbar-collapse mt-3 mt-lg-0"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link"
                    style={{
                      color: props.mode === "dark" ? "white" : "",
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link"
                    style={{
                      color: props.mode === "dark" ? "white" : "",
                    }}
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/camp"
                    className="nav-link"
                    style={{
                      color: props.mode === "dark" ? "white" : "",
                    }}
                  >
                    Upcoming Camp
                  </Link>
                </li>
                <li className="nva-item">
                  <Link
                    to="/spac"
                    className="nav-link"
                    style={{
                      color: props.mode === "dark" ? "white" : "",
                    }}
                  >
                    Specialities
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/gallery"
                    className="nav-link"
                    style={{
                      color: props.mode === "dark" ? "white" : "",
                    }}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/doc"
                    className="nav-link"
                    style={{
                      color: props.mode === "dark" ? "white" : "",
                    }}
                  >
                    Our Doctors
                  </Link>
                </li>
                <li className="web-btn nav-item">
                  <Link
                    to="/contact"
                    className="nav-link"
                    style={{
                      color: props.mode === "dark" ? "white" : "",
                      border: props.mode === "dark" ? "2px solid white" : "",
                    }}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onClick={props.togglemode}
                />
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
// Navbar.defaultProps = {
//   Home: "set title",
// };

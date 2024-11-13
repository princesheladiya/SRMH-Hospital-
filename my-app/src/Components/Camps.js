import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import hert from "./asset/media/svg/heartbeat-2.svg";
import cal from "./asset/media/svg/calender.svg";
import schedual from "./asset/media/svg/schedual.svg";
import eye from "./asset/media/Images/eye-camp-img-1.jpg";

export default function Camps() {
  var setting = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autospeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 526,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="banner-section">
        <div className="container">
          <div className="heading-description">
            <h2>Upcoming Camps</h2>
            <div className="banner-breadcrum">
              <Link to="/">home</Link>
              <i className="fas fa-angle-double-right"></i>
              <a to="/">Upcoming Camp</a>
            </div>
          </div>
        </div>
      </section>

      <section id="camp-section">
        <div className="container">
          <div className="section-title">
            <h2>
              Eye Check up camp
              <div className="element">
                <img src={hert} alt="" />
              </div>
            </h2>
          </div>
          <div className="camp-wrapper">
            <div className="row gy-3 gx-0">
              <div className="col-lg-6">
                <div className="date-time-camp">
                  <ul>
                    <li>
                      <p>
                        <img src={cal} alt="" />
                        24 April, 2024
                      </p>
                    </li>
                    <li>
                      <p>
                        <img src={schedual} alt="" />
                        From 10 AM to 2 PM
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="material-icons">location_on</span>
                        At SRM Hospital
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    {/* <button
                      type="button"
                      data-role="none"
                      className="slick-prev slick-arrow"
                      aria-label="Previous"
                      role="button"
                      >
                      Previous
                      </button> */}
                    <Slider {...setting}>
                      <div className="camp-image-slider mb-3">
                        <div className="image-wrapper">
                          <img src={eye} className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="camp-image-slider mb-3">
                        <div className="image-wrapper">
                          <img src={eye} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Slider>
                    {/* <button
                    type="button"
                    data-role="none"
                    className="slick-next slick-arrow"
                    aria-label="Next"
                    role="button"
                  >
                    Next
                  </button> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 my-lg-auto">
                <div className="description">
                  <p>
                    <strong>Dr. Gandhi</strong>
                    &nbsp;( MBBS, MD) (General Medicine) (Consultant Physician
                    &amp; Diabetologist) is a practicing general physician and
                    diabetologist know for offering excellent patient care and
                    also she is specializes in providing thyroid care and
                    treating other emergencies. She has an experience of 4
                    years.
                  </p>
                  <div className="service-camp">
                    <h5>Services In Camp</h5>
                    <ul>
                      <li>
                        <span className="material-icons">check</span>
                        Comprehensive Diabetic Control & Diet Management
                      </li>
                      <li>
                        <span className="material-icons">check</span>
                        Blood Pressure (Hypertension)
                      </li>
                      <li>
                        <span className="material-icons">check</span>
                        Thyroid Disorder
                      </li>
                      <li>
                        <span className="material-icons">check</span>
                        Unexplained Fever
                      </li>
                      <li>
                        <span className="material-icons">check</span>
                        Joint Pains
                      </li>
                      <li>
                        <span className="material-icons">check</span>
                        Asthma
                      </li>
                      <li>
                        <span className="material-icons">check</span>
                        Migraine
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-title mt-5">
            <h2>
              Free Madical Camp
              <div className="element">
                <img src={hert} alt="" />
              </div>
            </h2>
          </div>
          <div className="camp-wrapper">
            <div className="row gy-3 gx-0">
              <div className="col-lg-5 my-lg-auto order-2 order-lg-1">
                <div className="description">
                  <p>
                    <strong>Dr. Gandhi</strong>
                    &nbsp;( MBBS, MD) (General Medicine) (Consultant Physician
                    &amp; Diabetologist) is a practicing general physician and
                    diabetologist know for offering excellent patient care and
                    also she is specializes in providing thyroid care and
                    treating other emergencies. She has an experience of 4
                    years.
                  </p>
                  <div className="service-camp">
                    <h5>Services In Camp</h5>
                    <ul>
                      <li>
                        <span className="material-icons">check</span>
                        Comprehensive Diabetic Control & Diet Management
                      </li>
                      <li>
                        <span className="material-icons">check</span>
                        Blood Pressure (Hypertension)
                      </li>
                      <li>
                        <span className="material-icons">check</span>
                        Thyroid Disorder
                      </li>
                      <li>
                        <span className="material-icons">check</span>
                        Unexplained Fever
                      </li>
                      <li>
                        <span className="material-icons">check</span>
                        Joint Pains
                      </li>
                      <li>
                        <span className="material-icons">check</span>
                        Asthma
                      </li>
                      <li>
                        <span className="material-icons">check</span>
                        Migraine
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 order-1 order-lg-2">
                <div className="date-time-camp">
                  <ul>
                    <li>
                      <p>
                        <img src={cal} alt="" />
                        24 April, 2024
                      </p>
                    </li>
                    <li>
                      <p>
                        <img src={schedual} alt="" />
                        From 10 AM to 2 PM
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="material-icons">location_on</span>
                        At SRM Hospital
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Slider {...setting}>
                      <div className="camp-image-slider mb-3">
                        <div className="image-wrapper">
                          <img src={eye} className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="camp-image-slider mb-3">
                        <div className="image-wrapper">
                          <img src={eye} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Slider>
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

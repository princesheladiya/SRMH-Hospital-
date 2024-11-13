import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chairman from "./asset/media/Images/chairman.png";
import hertbeat from "./asset/media/svg/heartbeat-2.svg";
import vision from "./asset/media/Images/vision.png";
import mission from "./asset/media/Images/mission.png";
import img3 from "./asset/media/Images/ab-gallery-img-3 (1).jpg";
import img4 from "./asset/media/Images/ab-gallery-img-4.jpg";
import { Link } from "react-router-dom";

export default function About() {
  var setting = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
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
            <h2>About- Us</h2>
            <div className="banner-breadcrum">
              <Link to="/">home</Link>
              <i className="fas fa-angle-double-right"></i>
              <a to="">About- Us</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about-director-section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="image-wrapper">
                <img src={chairman} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 my-lg-auto">
              <div className="description">
                <div className="section-title mb-5">
                  <h2>
                    Dr.Gopichand Mannam
                    <div className="element">
                      <img src={hertbeat} className="img-fluid" alt="" />
                    </div>
                  </h2>
                  <div className="heading-description text-center mt-4">
                    <p>Managing Director, SRM Hospitals</p>
                  </div>
                </div>
                <p>
                  At STAR Hospitals, we are dedicated to upholding our tradition
                  of high standards of team excellence in patient-centered care,
                  teaching, and research. Our expert team of physicians, nurses,
                  and healthcare professionals work tirelessly to provide the
                  highest standards of medical treatment to our patients.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section id="vision-mission-section">
          <div className="container">
            <div className="row justify-content-center gy-3 mx-auto">
              <div className="col-lg-4 offset-lg-2">
                <div className="vision-mission-wrapper vision-bg">
                  <div className="icon-wrapper text-center">
                    <img src={vision} className="img-fluid" alt="" />
                  </div>
                  <div className="description">
                    <h4>vision</h4>
                    <p>
                      To achieve excellence in Health Care delivery system
                      through our hard work and human touches.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="vision-mission-wrapper vision-bg">
                  <div className="icon-wrapper text-center">
                    <img src={mission} className="img-fluid" alt="" />
                  </div>
                  <div className="description">
                    <h4>mission</h4>
                    <p>
                      Our mission is to become health care delivery Organization
                      guide by quality, excellence,technology & complete patient
                      care. SRM hospital is committed to providing world class
                      health care services at the most affordable cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section id="gallery-section">
        <div className="container">
          <div className="section-title">
            <h2>
              Photo Gallery
              <div className="element">
                <img src={hertbeat} className="img-fluid" alt="" />
              </div>
            </h2>
          </div>
          <div className="row align-items-center gy-3">
            <div className="col-lg-12">
              <div className="slider">
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
                  <div className="gallery-image-wrapper mb-3 pe-3">
                    <img src={img3} className="img-fluid" alt="" />
                  </div>
                  <div className="gallery-image-wrapper mb-3 pe-3">
                    <img src={img4} className="img-fluid" alt="" />
                  </div>
                  <div className="gallery-image-wrapper mb-3 pe-3">
                    <img src={img3} className="img-fluid" alt="" />
                  </div>
                  <div className="gallery-image-wrapper mb-3 pe-3">
                    <img src={img4} className="img-fluid" alt="" />
                  </div>
                  <div className="gallery-image-wrapper mb-3 pe-3">
                    <img src={img3} className="img-fluid" alt="" />
                  </div>
                  <div className="gallery-image-wrapper mb-3 pe-3">
                    <img src={img4} className="img-fluid" alt="" />
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
        </div>
      </section>
    </>
  );
}

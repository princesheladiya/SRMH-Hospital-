import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import hert from "./asset/media/svg/heartbeat-2.svg";
import img3 from "./asset/media/Images/ab-gallery-img-3 (1).jpg";
import img4 from "./asset/media/Images/ab-gallery-img-4.jpg";

export default function Gallery() {
  var setting = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autospeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 11,
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
            <h2>Gallery</h2>
            <div className="banner-breadcrum">
              <Link to="/">home</Link>
              <i className="fas fa-angle-double-right"></i>
              <a to="">Gallery</a>
            </div>
          </div>
        </div>
      </section>

      <section id="hospital-gallery-section">
        <div className="container">
          <div className="section-title">
            <h2>
              Hospital Gallery
              <div className="element">
                <img src={hert} alt="" />
              </div>
            </h2>
          </div>
          <div className="row align-item-center gy-3">
            <div className="col-lg-12">
              <div id="hospital-slide">
                <Slider {...setting}>
                  <div className="slider pe-5">
                    <div className="d-flex align-items-center image mb-3 mt-3">
                      <img
                        src={img3}
                        className="img-fluid avatar avatar-50 job-icon me-10px d-inline-block"
                        loading="lazy"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="slider pe-5">
                    <div className="d-flex align-items-center image mb-3 mt-3">
                      <img
                        src={img4}
                        className="img-fluid avatar avatar-50 job-icon me-10px d-inline-block"
                        loading="lazy"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="slider pe-5">
                    <div className="d-flex align-items-center image mb-3 mt-3">
                      <img
                        src={img3}
                        className="img-fluid avatar avatar-50 job-icon me-10px d-inline-block"
                        loading="lazy"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="slider pe-5">
                    <div className="d-flex align-items-center image mb-3 mt-3">
                      <img
                        src={img4}
                        className="img-fluid avatar avatar-50 job-icon me-10px d-inline-block"
                        loading="lazy"
                        alt="img"
                      />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hospital-gallery-section">
        <div className="container">
          <div className="section-title">
            <h2>
              Patient Gallery
              <div className="element">
                <img src={hert} alt="" />
              </div>
            </h2>
          </div>
          <div className="row align-item-center gy-3">
            <div className="col-lg-12">
              <div id="hospital-slide">
                <Slider {...setting}>
                  <div className="slider pe-5">
                    <div className="d-flex align-items-center image mb-3 mt-3">
                      <img
                        src={img3}
                        className="img-fluid avatar avatar-50 job-icon me-10px d-inline-block"
                        loading="lazy"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="slider pe-5">
                    <div className="d-flex align-items-center image mb-3 mt-3">
                      <img
                        src={img4}
                        className="img-fluid avatar avatar-50 job-icon me-10px d-inline-block"
                        loading="lazy"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="slider pe-5">
                    <div className="d-flex align-items-center image mb-3 mt-3">
                      <img
                        src={img3}
                        className="img-fluid avatar avatar-50 job-icon me-10px d-inline-block"
                        loading="lazy"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="slider pe-5">
                    <div className="d-flex align-items-center image mb-3 mt-3">
                      <img
                        src={img4}
                        className="img-fluid avatar avatar-50 job-icon me-10px d-inline-block"
                        loading="lazy"
                        alt="img"
                      />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hospital-gallery-section">
        <div className="container">
          <div className="section-title">
            <h2>
              Doctor Team Gallery
              <div className="element">
                <img src={hert} alt="" />
              </div>
            </h2>
          </div>
          <div className="row align-item-center gy-3">
            <div className="col-lg-12">
              <div id="hospital-slide">
                <Slider {...setting}>
                  <div className="slider pe-5">
                    <div className="d-flex align-items-center image mb-3 mt-3">
                      <img
                        src={img3}
                        className="img-fluid avatar avatar-50 job-icon me-10px d-inline-block"
                        loading="lazy"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="slider pe-5">
                    <div className="d-flex align-items-center image mb-3 mt-3">
                      <img
                        src={img4}
                        className="img-fluid avatar avatar-50 job-icon me-10px d-inline-block"
                        loading="lazy"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="slider pe-5">
                    <div className="d-flex align-items-center image mb-3 mt-3">
                      <img
                        src={img3}
                        className="img-fluid avatar avatar-50 job-icon me-10px d-inline-block"
                        loading="lazy"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="slider pe-5">
                    <div className="d-flex align-items-center image mb-3 mt-3">
                      <img
                        src={img4}
                        className="img-fluid avatar avatar-50 job-icon me-10px d-inline-block"
                        loading="lazy"
                        alt="img"
                      />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

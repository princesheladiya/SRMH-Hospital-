import React, { useContext, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "./asset/media/Images/banner.png";
import nabh from "./asset/media/Images/NABH-nursing-service.png";
import acci from "./asset/media/Images/AACI.png";
import nabh2 from "./asset/media/Images/NABH-MC-3264.png";
import what from "./asset/media/svg/WASocial.svg";
import hert from "./asset/media/svg/heartbeat-2.svg";
import hsptl from "./asset/media/Images/hospital-img.png";
import doc from "./asset/media/Images/doctor-icon.png";
import boold from "./asset/media/Images/bloodtype.png";
import emergency from "./asset/media/Images/emergency-about.png";
import medication from "./asset/media/Images/medication.png";
import local from "./asset/media/Images/local_hospital.png";
import hsbed from "./asset/media/Images/hospital-bed.png";
import icu from "./asset/media/Images/icu.png";
import diagnostic from "./asset/media/Images/Diagnostic.png";
import cta from "./asset/media/Images/cta-doctor-2.png";
import img54 from "./asset/media/Images/image-54.png";
import img53 from "./asset/media/Images/image-53.png";
import img52 from "./asset/media/Images/image-52.png";
import ctadoc from "./asset/media/Images/cta-doctor.jpg";
import NoteContext from "../Context/NotContext";
import { Link } from "react-router-dom";

export default function Home() {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
  });
  var setting = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
  var slick = {
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
  var track = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
      <section id="here-section" className="hero-section">
        <div className="container-fluid px-0">
          <div className="hero-section-slider" id="here-section-slider">
            <Slider {...setting}>
              <div className="image-wrapper">
                <img src={banner} className="img-fluid w-100" alt="" />
              </div>
              <div className="image-wrapper">
                <img src={banner} className="img-fluid w-100" alt="" />
              </div>
              <div className="image-wrapper">
                <img src={banner} className="img-fluid w-100" alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section id="hospital-certificates-section">
        <div className="container">
          <div className="logo-wrapper d-flex justify-content-center align-items-center  flex-wrap gap-3">
            <div className="image">
              <img src={nabh} className="img-fluid" alt="" />
            </div>
            <div className="image">
              <img src={acci} className="img-fluid" alt="" />
            </div>
            <div className="image">
              <img src={nabh2} className="img-fluid" alt="" />
            </div>
            <div className="image">
              <img src={nabh} className="img-fluid" alt="" />
            </div>
            <div className="image">
              <img src={acci} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="about-us-section">
        <div className="container">
          <div className="section-title mb-3">
            <h2>
              {a.state.title}
              <div className="element">
                <img src={hert} className="img-fluid" alt="" />
              </div>
            </h2>

            <div className="heading-description">
              <p>
                Lorem ipsum dolor sit, amat consectetur adipisicing elit.
                Facilis itaque, culpa deleniti corporis incidunt iure sed, odit
                libero reprehenderit vitae illum quam. Aut dolorem laborum
                laudantium atque architecto repellendus harum!
              </p>
            </div>
          </div>
          <div className="row gy-3">
            <div className="col-lg-6 my-auto">
              <div className="hospital-image-slider-warpper">
                <div
                  id="hospital-slider-wrapper"
                  className="hospital-slider-wrapper slick-slider slick-intialized"
                >
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
                    <div className="image-wrapper">
                      <img src={hsptl} className="img-fluid" alt="" />
                    </div>
                    <div className="image-wrapper">
                      <img src={hsptl} className="img-fluid" alt="" />
                    </div>
                    <div className="image-wrapper">
                      <img src={hsptl} className="img-fluid" alt="" />
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
                <ul>
                  <li>
                    <p>
                      <img src={boold} className="img-fluid" alt="" />
                      Lorem ipsum dolor adipisicing elit.
                    </p>
                  </li>
                  <li>
                    <p>
                      <img src={emergency} alt="" />
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </li>
                  <li>
                    <p>
                      <img src={local} alt="" />
                      Recusandae iure sapiente eum nostrum.
                    </p>
                  </li>
                  <li>
                    <p>
                      <img src={medication} alt="" />
                      Aut dolorem laborum laudantium atque architecto.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="row justify-content-center gy-0">
                <div className="col-lg-4 col-md-6  col-6 col-sm-6">
                  <div className="static-wrapper">
                    <div className="icon">
                      <div className="icon-wrapper">
                        <img src={hsbed} className="img-fluid" alt="" />
                      </div>
                      <div className="title">
                        <h5>Beds Capacity</h5>
                      </div>
                      <div className="num d-flex ">
                        <p className="count">30</p>
                        <p>+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                  <div className="static-wrapper">
                    <div className="icon">
                      <div className="icon-wrapper">
                        <img src={doc} alt="" />
                      </div>
                      <div className="title">
                        <h5>Docters</h5>
                      </div>
                      <div className="num">
                        <p className="count">35</p>
                        <p>+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center text-center gap-3 flex-wrap mt-5">
                  <Link to="tel:+91 8209258285" className="web-btn">
                    Contact Us
                  </Link>
                  <div>
                    <Link to="https://wa.me/+91 9521651535" className="web-btn">
                      <img src={what} width="28px" alt="" />
                      Whatsapp
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-services-section">
        <div className="container">
          <div className="section-title mb-5">
            <h2>
              Our Service
              <div className="element">
                <img src={hert} alt="" />
              </div>
            </h2>
          </div>

          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="service-wrapper">
                <div className="image-wrapper">
                  <img src={icu} className="img-fluid" alt="" />
                </div>
                <div className="service-name">
                  <h5>General and Laparoscopic Surgery</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="service-wrapper">
                <div className="image-wrapper">
                  <img src={icu} className="img-fluid" alt="" />
                </div>
                <div className="service-name">
                  <h5>Obs and Gyne</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="service-wrapper">
                <div className="image-wrapper">
                  <img src={diagnostic} className="img-fluid" alt="" />
                </div>
                <div className="service-name">
                  <h5>Ortho</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="service-wrapper">
                <div className="image-wrapper">
                  <img src={icu} className="img-fluid" alt="" />
                </div>
                <div className="service-name">
                  <h5>Uro</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="service-wrapper">
                <div className="image-wrapper">
                  <img src={diagnostic} className="img-fluid" alt="" />
                </div>
                <div className="service-name">
                  <h5>Ayurveda</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta-section">
        <div className="container">
          <div className="row justify-content-center gy-4">
            <div className="col-lg-7 order-2 order-lg-1 my-lg-auto">
              <div className="section-title d-flex  justify-content-center align-items-center">
                <h2>Take A Second Opinion From The Leading Specialist</h2>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <div className="btn-wrapper text-center">
                  <Link to="tel:+91 1234567890" className="web-btn">
                    <i className="fa fa-phone"></i>
                    Contact Us
                  </Link>
                </div>
                <div className="btn-wrapper text-center">
                  <a to="tel:+91 1234567890" className="web-btn">
                    <img src={what} className="img-fluid" alt="" />
                    Whatsapp
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5  order-1 order-lg-2">
              <div className="image-wrapper">
                <img src={cta} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-team-section">
        <div className="container">
          <div className="section-title">
            <h2>
              Meet Our Expert
              <div className="element">
                <img src={hert} alt="" />
              </div>
            </h2>
          </div>
          <div className="row align-item-center gy-3">
            <div className="col-lg-12 slider">
              <Slider {...slick}>
                <div className="card hover">
                  <div className="card-body">
                    <div className="row justify-content-center gx-0 gy-4">
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
                          <div className="specialites-description text-center">
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
                <div className="card hover">
                  <div className="card-body">
                    <div className="row justify-content-center gx-0 gy-4">
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
                          <div className="specialites-description text-center">
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
                <div className="card hover">
                  <div className="card-body">
                    <div className="row justify-content-center gx-0 gy-4">
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
                              MBBS RNT, MS(General Surgeon), FMAS,
                              FIAGES,FALS(Hernia)
                            </span>
                          </div>
                          <div className="description">
                            <p>General Surgeon</p>
                          </div>
                          <div className="specialites-description text-center">
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
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial-section">
        <div className="container p-5">
          <div className="section-title">
            <h2>
              Testimonial
              <div className="element">
                <img src={hert} className="img-fluid" alt="" />
              </div>
            </h2>
          </div>
          <div className="row justify-content-center ">
            <div className="col-lg-12">
              <div id="testimonial-slider">
                <Slider {...track}>
                  <div className="slider-track me-5">
                    <div className="slider-wrapper">
                      <div className="image-wrapper">
                        <img src={ctadoc} alt="" />
                      </div>
                      <div className="title">
                        <h4>Rajesh Sharma</h4>
                        <p>Retired </p>
                      </div>
                      <div className="review-description">
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit.Lorem ipsum dolor sit, amet consectetur
                          adipisicing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="slider-track me-5">
                    <div className="slider-wrapper">
                      <div className="image-wrapper">
                        <img src={ctadoc} alt="" />
                      </div>
                      <div className="title">
                        <h4>Mukesh Marwadi</h4>
                        <p>Professor </p>
                      </div>
                      <div className="review-description">
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit.Lorem ipsum dolor sit, amet consectetur
                          adipisicing elit.Lorem ipsum dolor sit, amet
                          consectetur adipisicing elit.Lorem ipsum dolor sit,
                          amet consectetur adipisicing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="slider-track me-5">
                    <div className="slider-wrapper">
                      <div className="image-wrapper">
                        <img src={ctadoc} alt="" />
                      </div>
                      <div className="title">
                        <h4>Riya Kulkarni</h4>
                        <p>IT Professional</p>
                      </div>
                      <div className="review-description">
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit.Lorem ipsum dolor sit, amet consectetur
                          adipisicing elit.Lorem ipsum dolor sit, amet
                          consectetur adipisicing elit.Lorem ipsum dolor sit,
                          amet consectetur adipisicing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="slider-track me-5">
                    <div className="slider-wrapper">
                      <div className="image-wrapper">
                        <img src={ctadoc} alt="" />
                      </div>
                      <div className="title">
                        <h4>Priya Zaa</h4>
                        <p></p>
                      </div>
                      <div className="review-description">
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit.Lorem ipsum dolor sit, amet consectetur
                          adipisicing elit.
                        </p>
                      </div>
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

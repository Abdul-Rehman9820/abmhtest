
"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Cardiology = () => {


  useEffect(() => {



    // for Our Team slider start =======

    const customSlider = document.querySelector(".custom-slider");
    const customSlides = document.querySelectorAll(".custom-slide");
    const customPrevButton = document.getElementById("custom-prevButton");
    const customNextButton = document.getElementById("custom-nextButton");
    const customSliderDots = document.querySelector(".custom-slider-dots");

    let customCurrentSlide = 0;
    const customSlidesToShow = 4; // Number of slides to show at a time
    const customSlideWidth = 100 / customSlidesToShow;
    const customSlideCount = customSlides.length;

    function customShowSlide() {
      const translateX = -customCurrentSlide * customSlideWidth;
      customSlider.style.transform = `translateX(${translateX}%)`;
      customUpdateDots();
    }

    function customGoToNextSlide() {
      customCurrentSlide = (customCurrentSlide + 1) % customSlideCount;
      customShowSlide();
    }

    function customGoToPrevSlide() {
      customCurrentSlide = (customCurrentSlide - 1 + customSlideCount) % customSlideCount;
      customShowSlide();
    }

    function customCreateDots() {
      for (let i = 0; i < customSlideCount; i++) {
        const customDot = document.createElement("span");
        customDot.className = "custom-slider-dot";
        customDot.addEventListener("click", () => {
          customCurrentSlide = i;
          customShowSlide();
        });
        customSliderDots.appendChild(customDot);
      }
    }

    function customUpdateDots() {
      const customDots = document.querySelectorAll(".custom-slider-dot");
      customDots.forEach((customDot, i) => {
        if (i === customCurrentSlide) {
          customDot.classList.add("active");
        } else {
          customDot.classList.remove("active");
        }
      });
    }

    customCreateDots();
    customShowSlide();

    // Auto-slide
    let customAutoSlideInterval = setInterval(customGoToNextSlide, 5000); // Change slide every 3 seconds

    // Pause auto-slide on mouse hover
    customSlider.addEventListener("mouseenter", () => {
      clearInterval(customAutoSlideInterval);
    });

    // Resume auto-slide when the mouse leaves the carousel
    customSlider.addEventListener("mouseleave", () => {
      customAutoSlideInterval = setInterval(customGoToNextSlide, 3000);
    });

    customNextButton.addEventListener("click", customGoToNextSlide);
    customPrevButton.addEventListener("click", customGoToPrevSlide);

    // for Our Team slider end =======
    

  }, []);




  return (


    <>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Cardiology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* common heading div end*/}
      {/* common heading banner start */}
      <div className="mainheadingbanner">
        <div className="mainheadingbandiv"></div>
      </div>
      {/* common heading banner end */}
      {/* specialties  start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">
            <div className="spectitle">
              <h1 className="spetileh1">Cardiology</h1>
            </div>
            <div className="spectitleimgbox">
              <div className="spectitleimgbox1">
                <img src="/specialityviewimag/cardiospeimg.png" alt="img" />
              </div>
              <div className="spectitleimgbox2">
                <p className="specilpara">
                  <b>Aditya Birla Memorial Hospital</b> boasts a best cardiology
                  hospital in India at the forefront of delivering exceptional
                  patient care and advanced cardiac disease treatments in Pune.
                </p>
                <p className="specilpara">
                  Our commitment to comprehensive care spans across all age groups,
                  from infants to seniors. With a dedicated team of experienced
                  Aditya Birla hospital cardiologists on staff full-time, we offer
                  expert consultations and thorough patient assessments.
                </p>
                <p className="specilpara">
                  Supported by state-of-the-art diagnostic and treatment
                  methodologies, the hospital offers a wide range of services to
                  ensure effective and comprehensive cardiac care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parentcontainerwhi specipgGRY">
        <div className="customcontainer">
          <div className="specsingleparnGra">
            <div className="spectitlegrcont">
              <div className="spectitlegrcont1">
                <div className="Specialtiesheadgr">
                  <h2 className="spetileh1gr">Infrastructure</h2>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  Our hospital is fortified with noninvasive laboratories which have{" "}
                  <b>Treadmill Test (stress test) machines and 2D echo machines</b>{" "}
                  (departmental and portable versions).
                </p>
                <p className="specilpara">
                  The department also has Holter monitoring systems (5 channel and
                  12 lead), in addition to Ambulatory BP monitoring systems. We are
                  also well equipped with a Cardiac Catheterization laboratory where
                  invasive procedures are conducted and have a dedicated
                  electrophysiology system and RF laboratory.
                </p>
                <p className="specilpara">
                  Our department of Cardiac Sciences is responsible for successfully
                  implanting the First MRI compatible pacemaker in the Pimpri
                  Chinchwad Municipal Corporation area and also undertaking the
                  first 3D mapping and RF ablation at our premises.
                </p>
              </div>
              <div className="spectitlegrcont2">
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <img src="/specialityviewimag/spegryimg.png" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">
                      Treadmill Test <br />
                      (stress test)
                    </p>
                  </div>
                </div>
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <img src="/specialityviewimag/spegryimg.png" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">
                      2D echo
                      <br /> machines
                    </p>
                  </div>
                </div>
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <img src="/specialityviewimag/spegryimg.png" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">
                      Ambulatory BP
                      <br /> monitoring systems
                    </p>
                  </div>
                </div>
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <img src="/specialityviewimag/spegryimg.png" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">
                      Ambulatory BP
                      <br /> monitoring systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleDoclist">
            <div className="Specialtiesheadgr">
              <h2 className="spetileh1gr">Our Team Of Experts</h2>
              <span className="headbordergr" />
            </div>
            <div className="ourteampar">
              <div className="ourteamslidepar">
                <div className="custom-slider-wrapper">
                  <div className="custom-slider">
                    <div className="custom-slide">
                      <div className="ourteamslidchilbo">
                        <div className="ourteamslidebox">
                          <div className="ourteambox1">
                            <div className="ourteamimg">
                              <img src="/homeimg/OurTeamExperts1.png" alt="img" />
                            </div>
                            <div className="ourteamname">
                              <h2>Dr Khushboo P.</h2>
                            </div>
                            <div className="ourteamspec">
                              <h2>Cardiologist</h2>
                            </div>
                            <div className="ourteamexpi">
                              <h2>40+ years of experience </h2>
                            </div>
                          </div>
                          <div className="ourteambox2">
                            <div className="ourteambox2flex">
                              <a className="bookappoteam" href="#">
                                View Profile
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-slide">
                      <div className="ourteamslidchilbo">
                        <div className="ourteamslidebox">
                          <div className="ourteambox1">
                            <div className="ourteamimg">
                              <img src="/homeimg/OurTeamExperts2.png" alt="img" />
                            </div>
                            <div className="ourteamname">
                              <h2>Dr Pooja H.</h2>
                            </div>
                            <div className="ourteamspec">
                              <h2>Physiotherapist</h2>
                            </div>
                            <div className="ourteamexpi">
                              <h2>37+ years experience</h2>
                            </div>
                          </div>
                          <div className="ourteambox2">
                            <div className="ourteambox2flex">
                              <a className="bookappoteam" href="#">
                                View Profile
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-slide">
                      <div className="ourteamslidchilbo">
                        <div className="ourteamslidebox">
                          <div className="ourteambox1">
                            <div className="ourteamimg">
                              <img src="/homeimg/OurTeamExperts3.png" alt="img" />
                            </div>
                            <div className="ourteamname">
                              <h2>Dr Vishal M.</h2>
                            </div>
                            <div className="ourteamspec">
                              <h2>ENT</h2>
                            </div>
                            <div className="ourteamexpi">
                              <h2>29+ years experience</h2>
                            </div>
                          </div>
                          <div className="ourteambox2">
                            <div className="ourteambox2flex">
                              <a className="bookappoteam" href="#">
                                View Profile
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-slide">
                      <div className="ourteamslidchilbo">
                        <div className="ourteamslidebox">
                          <div className="ourteambox1">
                            <div className="ourteamimg">
                              <img src="/homeimg/OurTeamExperts2.png" alt="img" />
                            </div>
                            <div className="ourteamname">
                              <h2>Dr Khushboo K.</h2>
                            </div>
                            <div className="ourteamspec">
                              <h2>Cardiologist</h2>
                            </div>
                            <div className="ourteamexpi">
                              <h2>40+ years of experience&nbsp;</h2>
                            </div>
                          </div>
                          <div className="ourteambox2">
                            <div className="ourteambox2flex">
                              <a className="bookappoteam" href="#">
                                View Profile
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-slide">
                      <div className="ourteamslidchilbo">
                        <div className="ourteamslidebox">
                          <div className="ourteambox1">
                            <div className="ourteamimg">
                              <img src="/homeimg/OurTeamExperts3.png" alt="img" />
                            </div>
                            <div className="ourteamname">
                              <h2>Dr Vishal M.</h2>
                            </div>
                            <div className="ourteamspec">
                              <h2>ENT</h2>
                            </div>
                            <div className="ourteamexpi">
                              <h2>29+ years experience</h2>
                            </div>
                          </div>
                          <div className="ourteambox2">
                            <div className="ourteambox2flex">
                              <a className="bookappoteam" href="#">
                                View Profile
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Add more slides here */}
                  </div>
                </div>
                <div className="custom-slider-dots"></div>
                <div className="customslidebth">
                  <button id="custom-prevButton">
                    <img src="/homeimg/nextleft.png" alt="img" />
                  </button>
                  <button id="custom-nextButton">
                    <img src="/homeimg/nextright.png" alt="img" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* specialties end*/}
    </>




  );


};



export default Cardiology;

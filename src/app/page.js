

"use client";

import { useEffect } from 'react';
import $ from 'jquery';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';


import './styles/commonglobalstyle.css'
import './styles/mainstyle.css'





export default function Home() {


  useEffect(() => {


    // for banner slider start ==============
    var index = 0;
    var slides = document.getElementsByClassName("slides");
    var nextArrow = document.getElementById("next");
    var previousArrow = document.getElementById("previous");
    var dotsContainer = document.getElementById("dotsContainer");
    var dotArray = document.getElementsByClassName("dots");

    createDots();
    showSlides(index);

    function createDots() {
      for (var i = 0; i < slides.length; i++) {
        var dot = document.createElement("span");
        dot.className = "dots";
        dotsContainer.appendChild(dot);
      }
    }

    function showSlides(x) {
      if (x > slides.length - 1) {
        index = 0;
      }
      if (x < 0) {
        index = slides.length - 1;
      }
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dotArray[i].className = "dots";
      }

      slides[index].style.display = "block";
      dotArray[index].className += " activeDot";
    }

    nextArrow.onclick = function () {
      index += 1;
      showSlides(index);
    };

    previousArrow.onclick = function () {
      index -= 1;
      showSlides(index);
    };

    for (var i = 0; i < dotArray.length; i++) {
      dotArray[i].onclick = (function (i) {
        return function () {
          showSlides(i);
        };
      })(i);
    }
    // for banner slider end =======


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



    // for Why Choose slider start =======

    const newSlider = document.querySelector(".new-slider");
    const newSlides = document.querySelectorAll(".new-slide");
    const newPrevButton = document.getElementById("new-prevButton");
    const newNextButton = document.getElementById("new-nextButton");
    const newSliderDots = document.querySelector(".new-slider-dots");

    let newCurrentSlide = 0;
    const newSlidesToShow = 3; // Number of slides to show at a time
    const newSlideWidth = 100 / newSlidesToShow;
    const newSlideCount = newSlides.length;

    function newShowSlide() {
      const translateX = -newCurrentSlide * newSlideWidth;
      newSlider.style.transform = `translateX(${translateX}%)`;
      newUpdateDots();
    }

    function newGoToNextSlide() {
      newCurrentSlide = (newCurrentSlide + 1) % newSlideCount;
      newShowSlide();
    }

    function newGoToPrevSlide() {
      newCurrentSlide = (newCurrentSlide - 1 + newSlideCount) % newSlideCount;
      newShowSlide();
    }

    function newCreateDots() {
      for (let i = 0; i < newSlideCount; i++) {
        const newDot = document.createElement("span");
        newDot.className = "new-slider-dot";
        newDot.addEventListener("click", () => {
          newCurrentSlide = i;
          newShowSlide();
        });
        newSliderDots.appendChild(newDot);
      }
    }

    function newUpdateDots() {
      const newDots = document.querySelectorAll(".new-slider-dot");
      newDots.forEach((newDot, i) => {
        if (i === newCurrentSlide) {
          newDot.classList.add("active");
        } else {
          newDot.classList.remove("active");
        }
      });
    }

    newCreateDots();
    newShowSlide();

    // Auto-slide
    let newAutoSlideInterval = setInterval(newGoToNextSlide, 5000); // Change slide every 3 seconds

    // Pause auto-slide on mouse hover
    newSlider.addEventListener("mouseenter", () => {
      clearInterval(newAutoSlideInterval);
    });

    // Resume auto-slide when the mouse leaves the carousel
    newSlider.addEventListener("mouseleave", () => {
      newAutoSlideInterval = setInterval(newGoToNextSlide, 3000);
    });

    newNextButton.addEventListener("click", newGoToNextSlide);
    newPrevButton.addEventListener("click", newGoToPrevSlide);


    // for Why Choose slider end =======


  }, []);



  return (


    <>




      {/* slider*/}
      <div className="mainslider">
        <div id="window">
          <div id="slide-container">
            <div className="slides">
              <Image width={1000} height={1000}
                className="slide deckstophead"
                src="/homeimg/web-bannerHome1.png"
                alt=""
              />
              <Image width={1000} height={1000}
                className="slide mobilehead"
                src="/homeimg/Mobile-banner1-mob.png"
                alt=""
              />
            </div>
            <div className="slides">
              <Image width={1000} height={1000}
                className="slide deckstophead"
                src="/homeimg/web-bannerHome1.png"
                alt=""
              />
              <Image width={1000} height={1000}
                className="slide mobilehead"
                src="/homeimg/Mobile-banner1-mob.png"
                alt=""
              />
            </div>
            <div className="slides">
              <Image width={1000} height={1000}
                className="slide deckstophead"
                src="/homeimg/web-bannerHome1.png"
                alt=""
              />
              <Image width={1000} height={1000}
                className="slide mobilehead"
                src="/homeimg/Mobile-banner1-mob.png"
                alt=""
              />
            </div>
            <div className="slides">
              <Image width={1000} height={1000}
                className="slide deckstophead"
                src="/homeimg/web-bannerHome1.png"
                alt=""
              />
              <Image width={1000} height={1000}
                className="slide mobilehead"
                src="/homeimg/Mobile-banner1-mob.png"
                alt=""
              />
            </div>
            <a id="previous" className="arrow">
              ❮
            </a>
            <a id="next" className="arrow">
              ❯
            </a>
          </div>
          <div id="dotsContainer" />
        </div>
      </div>
      {/* slider*/}
      {/* appoin btn */}
      <div className="parentcontainerwhi animatigm">
        <div className="customcontainer">
          {/* mainstart */}
          <div className="appobarflexbox">
            <div className="appobarflexboxcol2">
              <div className="appobtnpar">
                <div className="appobtnchil">
                  <div className="appbtnmainbox">
                    <div className="appmainboxBG">
                      <Image width={1000} height={1000} src="/homeimg/newdecsbookdr.png" alt="img" />
                    </div>
                    <div className="appmainHea">

                      <Link href="/serchher">
                        <p>Find a Doctor</p>
                      </Link>

                    </div>
                  </div>
                </div>
                <div className="appobtnchil">
                  <div className="appbtnmainbox">
                    <div className="appmainboxBG">
                      <Image width={1000} height={1000} src="/homeimg/medical-app.png" alt="img" />
                    </div>
                    <div className="appmainHea">
                      <Link href="/serchher">
                        <p>Online Consultation</p>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="appobtnchil">
                  <div className="appbtnmainbox">
                    <div className="appmainboxBG">
                      <Image width={1000} height={1000} src="/homeimg/heart.png" alt="img" />
                    </div>
                    <div className="appmainHea">
                      <Link href="/serchher">
                        <p>Wellness Packages</p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="appobtnchil fournone">
                  <div className="appbtnmainbox">
                    <div className="appmainboxBG">
                      <Image width={1000} height={1000} src="/homeimg/Group.png" alt="img" />
                    </div>
                    <div className="appmainHea">
                      <Link href="/serchher">
                        {" "}
                        <p>ABMH International</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mainclose */}
        </div>
      </div>
      {/* appoin btn */}
      {/* Speciality start  for deckstop*/}
      <div className="parentcontainercos deckstophead">
        <div className="customcontainer">
          {/* mainstart */}
          <div className="OurSpecialties">
            <div className="Specialtiespart">
              <div className="Specialtieshead">
                {/* <h2>OUR</h2> */}
                <h2 className="oursepper">Our Specialties</h2>
                <span className="headborder" />
              </div>
              <div className="Specilizationhead">
                <h3>50+</h3>
                <h2>Specialization&nbsp;</h2>
              </div>
            </div>
            <div className="speforcolpar">
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgColicon">
                    <div className="spefColiconCont">
                      <Image width={1000} height={1000} src="/homeimg/Cardiology.png" alt="icon" />
                    </div>
                  </div>
                  <div className="speforwhitbgCol1">
                    <h2>Cardiology</h2>
                  </div>
                  <div className="specdiv" />
                  <div className="speforwhitbgCol2">
                    <h2>
                      High blood pressure | Abnormally fast or slow heart rate |
                      Dizziness or fainting.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgColicon">
                    <div className="spefColiconCont">
                      <Image width={1000} height={1000} src="/homeimg/Urology.png" alt="icon" />
                    </div>
                  </div>
                  <div className="speforwhitbgCol1">
                    <h2>Urology</h2>
                  </div>
                  <div className="specdiv" />
                  <div className="speforwhitbgCol2">
                    <h2>
                      Blood in the urine | Pain when you urinate | Frequent need to
                      urinate.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgColicon">
                    <div className="spefColiconCont">
                      <Image width={1000} height={1000} src="/homeimg/Neurology.png" alt="icon" />
                    </div>
                  </div>
                  <div className="speforwhitbgCol1">
                    <h2>Neurology</h2>
                  </div>
                  <div className="specdiv" />
                  <div className="speforwhitbgCol2">
                    <h2>
                      Muscle weakness | Poor coordination | Seizures | confusion
                    </h2>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgColicon">
                    <div className="spefColiconCont">
                      <Image width={1000} height={1000} src="/homeimg/Diabetology.png" alt="icon" />
                    </div>
                  </div>
                  <div className="speforwhitbgCol1">
                    <h2>Diabetology</h2>
                  </div>
                  <div className="specdiv" />
                  <div className="speforwhitbgCol2">
                    <h2>
                      Losing weight without trying | Urinating often | Feeling tired
                      and weak.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgColicon">
                    <div className="spefColiconCont">
                      <Image width={1000} height={1000} src="/homeimg/Gastroenterology.png" alt="icon" />
                    </div>
                  </div>
                  <div className="speforwhitbgCol1">
                    <h2>Gastroenterology</h2>
                  </div>
                  <div className="specdiv" />
                  <div className="speforwhitbgCol2">
                    <h2>
                      Unusual abdominal or gas pains | Bloating | Constipation
                      and/or diarrhea
                    </h2>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgColicon">
                    <div className="spefColiconCont">
                      <Image width={1000} height={1000} src="/homeimg/Pediatrics.png" alt="icon" />
                    </div>
                  </div>
                  <div className="speforwhitbgCol1">
                    <h2>Pediatrics</h2>
                  </div>
                  <div className="specdiv" />
                  <div className="speforwhitbgCol2">
                    <h2>
                      Diarrhea | Fever | Constipation | Cough | Teething Pain |
                      Gassiness
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="combtndiv">
              <button className="combtn">
                <Link href="/serchher">
                  All Specialties
                  <span className="specicon">
                    <Image width={1000} height={1000} src="/homeimg/right-arrow.png" alt="img" />
                  </span>
                </Link>
              </button>
            </div>
          </div>
          {/* mainclose */}
        </div>
      </div>
      {/* Speciality end deckstop*/}
      {/* Speciality start  for mobile*/}
      <div className="parentcontainercos mobilehead">
        <div className="customcontainer">
          {/* mainstart */}
          <div className="OurSpecialties">
            <h2>Our Specialties</h2>
            <div className="speforcolpar">
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgCol1">
                    <Image width={1000} height={1000} src="/homeimg/Cardiologymo.png" alt="img" />
                  </div>
                  <div className="speforwhitbgCol2">
                    <h2>Cardiology</h2>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgCol1">
                    <Image width={1000} height={1000} src="/homeimg/Urologymo.png" alt="img" />
                  </div>
                  <div className="speforwhitbgCol2">
                    <h2>Urology</h2>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgCol1">
                    <Image width={1000} height={1000} src="/homeimg/Neurologymo.png" alt="img" />
                  </div>
                  <div className="speforwhitbgCol2">
                    <h2>Neurology</h2>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgCol1">
                    <Image width={1000} height={1000} src="/homeimg/Diabetologymo.png" alt="img" />
                  </div>
                  <div className="speforwhitbgCol2">
                    <h2>Diabetology</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="combtndiv">
              <button className="combtn">
                <Link href="/serchher">
                  All Specialties{" "}
                  <span className="specicon">
                    <Image width={1000} height={1000} src="/homeimg/right-arrow.png" alt="img" />
                  </span>
                </Link>
              </button>
            </div>
          </div>
          {/* mainclose */}
        </div>
      </div>
      {/* Speciality end mobile*/}
      {/* our team*/}
      <div className="parentcontainerwhi toppading">
        <div className="customcontainer">
          <div className="ourteamparpart">
            <div className="Specialtieshead">
              <h2>Our Team of Experts</h2>
              <span className="headborder" />
            </div>
            <div className="Teamilizationhead">
              <Link href="/serchher">
                <h2>View All</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="parentcontainerwhi withbg">
        <div className="customcontainer">
          {/* mainstart */}
          <div className="ourteampar">
            <div className="ourteamslidepar">
              <div className="custom-slider-wrapper">
                <div className="custom-slider">
                  <div className="custom-slide">
                    <div className="ourteamslidchilbo">
                      <div className="ourteamslidebox">
                        <div className="ourteambox1">
                          <div className="ourteamimg">
                            <Image width={1000} height={1000} src="/homeimg/OurTeamExperts1.png" alt="img" />
                          </div>
                          <div className="ourteamname">
                            <h2>Dr Khushboo P.</h2>
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
                            <Link className="bookappoteam" href="/serchher">
                              View Profile
                            </Link>
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
                            <Image width={1000} height={1000} src="/homeimg/OurTeamExperts2.png" alt="img" />
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
                            <Link className="bookappoteam" href="/serchher">
                              View Profile
                            </Link>
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
                            <Image width={1000} height={1000} src="/homeimg/OurTeamExperts3.png" alt="img" />
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
                            <Link className="bookappoteam" href="/serchher">
                              View Profile
                            </Link>
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
                            <Image width={1000} height={1000} src="/homeimg/OurTeamExperts2.png" alt="img" />
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
                            <Link className="bookappoteam" href="/serchher">
                              View Profile
                            </Link>
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
                            <Image width={1000} height={1000} src="/homeimg/OurTeamExperts3.png" alt="img" />
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
                            <Link className="bookappoteam" href="/serchher">
                              View Profile
                            </Link>
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
                  <Image width={1000} height={1000} src="/homeimg/nextleft.png" alt="img" />
                </button>
                <button id="custom-nextButton">
                  <Image width={1000} height={1000} src="/homeimg/nextright.png" alt="img" />
                </button>
              </div>
            </div>
          </div>
          {/* mainclose */}
        </div>
      </div>
      {/* our team*/}
      {/* our work*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          {/* mainstart */}
          <div className="ourworkpar">
            <div className="Specialtiespart">
              <div className="outworkhead">
                <h2>Our Work, Their Words </h2>
                <span className="headborder" />
              </div>
              <div className="surgerhead">
                {/* <h3>1030+</h3>
                <h2>Specialization </h2> */}
              </div>
            </div>


            <div className="ourworkslidepar">
              <div
                id="carouselExampleIndicators"
                className="carousel slide carousel-fade"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="testislid">
                      <div className="testislidChil">
                        <div className="testislidChilcol1">
                          <div className="ourworkbox1">
                            <div className="ourworkmimg">
                              <Image width={1000} height={1000} src="/homeimg/youplayimg.png" alt="img" />
                            </div>
                          </div>
                        </div>
                        <div className="testislidChilcol2">
                          <div className="testislidChilcol2Para">
                            Outstanding care and recovery experience! The surgical
                            team and nursing staff were amazing.
                          </div>
                          <div className="ourworkname">
                            <h2>Karishma Garg</h2>
                          </div>
                          <div className="testispace" />
                          <div className="ourworkspec">
                            <h2>General Surgery</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testislid">
                      <div className="testislidChil">
                        <div className="testislidChilcol1">
                          <div className="ourworkbox1">
                            <div className="ourworkmimg">
                              <Image width={1000} height={1000} src="/homeimg/youplayimg.png" alt="img" />
                            </div>
                          </div>
                        </div>
                        <div className="testislidChilcol2">
                          <div className="testislidChilcol2Para">
                            Outstanding care and recovery experience! The surgical
                            team and nursing staff were amazing.
                          </div>
                          <div className="ourworkname">
                            <h2>Karishma Garg</h2>
                          </div>
                          <div className="testispace" />
                          <div className="ourworkspec">
                            <h2>General Surgery</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testislid">
                      <div className="testislidChil">
                        <div className="testislidChilcol1">
                          <div className="ourworkbox1">
                            <div className="ourworkmimg">
                              <Image width={1000} height={1000} src="/homeimg/youplayimg.png" alt="img" />
                            </div>
                          </div>
                        </div>
                        <div className="testislidChilcol2">
                          <div className="testislidChilcol2Para">
                            Outstanding care and recovery experience! The surgical
                            team and nursing staff were amazing.
                          </div>
                          <div className="ourworkname">
                            <h2>Karishma Garg</h2>
                          </div>
                          <div className="testispace" />
                          <div className="ourworkspec">
                            <h2>General Surgery</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true">
                    <Image width={1000} height={1000} src="/homeimg/nextleft.png" alt="" />
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true">
                    <Image width={1000} height={1000} src="/homeimg/nextright.png" alt="" />
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>


          </div>
          {/* mainclose */}
        </div>
      </div>
      {/* our work*/}
      {/* our work*/}
      <div className="parentcontainerwhi marginmin">
        <div className="customcontainer">
          {/* mainstart */}
          <div className="ourworkpar">
            <div className="Whyworkslidepar">
              <div className="Whyworkslideparchil">
                <div className="Whyworkslideparchilcol1">
                  <div className="Specialtiespart">
                    <div className="outworkhead">
                      <h2>Why Choose Us?</h2>
                      <span className="headborder" />
                      {/* <h2>US?</h2> */}
                    </div>
                  </div>
                </div>
                <div className="Whyworkslideparchilcol2">
                  <div className="ourteamslidepar">
                    <div className="new-slider-wrapper">
                      <div className="new-slider">
                        <div className="new-slide">
                          <div className="myovef">
                            <div className="whychochilbo">
                              <div className="whychoslidebox">
                                <div className="whychobox1">
                                  <div className="whychoimg">
                                    <Image width={1000} height={1000} src="/homeimg/Group-88.png" alt="img" />
                                  </div>
                                  <div className="whychoname">
                                    <h2>Medical Expertise</h2>
                                  </div>
                                  <div className="whychospec">
                                    <h2>
                                      Aditya Birla Memorial Hospital is known for
                                      its team of highly skilled and experienced
                                      medical professionals across various
                                      specialties.
                                    </h2>
                                  </div>
                                </div>
                                <div className="whychoimgbox2">
                                  <button className="whychocombtn">
                                    <Link href="/serchher">
                                      Read More
                                      <span className="specicon">
                                        <Image width={1000} height={1000}
                                          src="/homeimg/right-arrow.png"
                                          alt="img"
                                        />
                                      </span>
                                    </Link>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="new-slide">
                          <div className="myovef">
                            <div className="whychochilbo">
                              <div className="whychoslidebox">
                                <div className="whychobox1">
                                  <div className="whychoimg">
                                    <Image width={1000} height={1000} src="/homeimg/Group-89.png" alt="img" />
                                  </div>
                                  <div className="whychoname">
                                    <h2>Advanced Technology</h2>
                                  </div>
                                  <div className="whychospec">
                                    <h2>
                                      Aditya Birla Memorial Hospital is known for
                                      its team of highly skilled and experienced
                                      medical professionals across various
                                      specialties.
                                    </h2>
                                  </div>
                                </div>
                                <div className="whychoimgbox2">
                                  <button className="whychocombtn">
                                    <Link href="/serchher">
                                      Read More
                                      <span className="specicon">
                                        <Image width={1000} height={1000}
                                          src="/homeimg/right-arrow.png"
                                          alt="img"
                                        />
                                      </span>
                                    </Link>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="new-slide">
                          <div className="myovef">
                            <div className="whychochilbo">
                              <div className="whychoslidebox">
                                <div className="whychobox1">
                                  <div className="whychoimg">
                                    <Image width={1000} height={1000} src="/homeimg/Group-90.png" alt="img" />
                                  </div>
                                  <div className="whychoname">
                                    <h2>Patient Centric</h2>
                                  </div>
                                  <div className="whychospec">
                                    <h2>
                                      Aditya Birla Memorial Hospital is known for
                                      its team of highly skilled and experienced
                                      medical professionals across various
                                      specialties.
                                    </h2>
                                  </div>
                                </div>
                                <div className="whychoimgbox2">
                                  <button className="whychocombtn">
                                    <Link href="/serchher">
                                      Read More
                                      <span className="specicon">
                                        <Image width={1000} height={1000}
                                          src="/homeimg/right-arrow.png"
                                          alt="img"
                                        />
                                      </span>
                                    </Link>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="new-slide">
                          <div className="myovef">
                            <div className="whychochilbo">
                              <div className="whychoslidebox">
                                <div className="whychobox1">
                                  <div className="whychoimg">
                                    <Image width={1000} height={1000} src="/homeimg/Group-90.png" alt="img" />
                                  </div>
                                  <div className="whychoname">
                                    <h2>Patient Centric</h2>
                                  </div>
                                  <div className="whychospec">
                                    <h2>
                                      Aditya Birla Memorial Hospital is known for
                                      its team of highly skilled and experienced
                                      medical professionals across various
                                      specialties.
                                    </h2>
                                  </div>
                                </div>
                                <div className="whychoimgbox2">
                                  <button className="whychocombtn">
                                    <Link href="/serchher">
                                      Read More
                                      <span className="specicon">
                                        <Image width={1000} height={1000}
                                          src="/homeimg/right-arrow.png"
                                          alt="img"
                                        />
                                      </span>
                                    </Link>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Add more slides here */}
                      </div>
                    </div>
                    <div className="new-slider-dots">
                      {/* Dots will be added dynamically using JavaScript */}
                    </div>
                    <div className="new-sliderbtn">
                      <button id="new-prevButton">
                        <Image width={1000} height={1000} src="/homeimg/nextleft.png" alt="img" />
                      </button>
                      <button id="new-nextButton">
                        <Image width={1000} height={1000} src="/homeimg/nextright.png" alt="img" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mainclose */}
        </div>
      </div>
      {/* Why end*/}
      {/* footer start*/}
      <div className="parentcontainerwhi footer deckstophead">
        <div className="customcontainer">
          {/* mainstart */}
          <div className="footermain">
            <div className="footermaincol1">
              <div className="footerlogo">
                <Image width={1000} height={1000} src="/homeimg/footmainlogo.png" alt="" />
              </div>
              <div className="footerlogopara">
                <p>
                  ADITYA BIRLA MEMORIAL HOSPITAL, ADITYA BIRLA MARG, CHINCHWAD, PUNE
                  - 411033, MAHARASHTRA , INDIA.
                </p>
              </div>
              <div className="footergetdirect">
                <Link href="/serchher">
                  {" "}
                  <Image width={1000} height={1000} src="/homeimg/getdireimg.png" alt="" />
                </Link>
              </div>
              <div className="footersocial">
                <div className="footersocialbox">
                  <div className="footersocialboximg">
                    <Link href="/serchher">
                      <Image width={1000} height={1000} src="/homeimg/footersoiconint.png" alt="" />
                    </Link>
                  </div>
                  <div className="footersocialboximg">
                    <Link href="/serchher">
                      <Image width={1000} height={1000} src="/homeimg/footersoiconface.png" alt="" />
                    </Link>
                  </div>
                  <div className="footersocialboximg">
                    <Link href="/serchher">
                      <Image width={1000} height={1000} src="/homeimg/footersoiconyout.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footermaincol2">
              <div className="linkbox">
                <h2>CONTACT US</h2>
                <div className="linkfootdiv">
                  <div className="linkfoolist">
                    <Image width={1000} height={1000} className="fooimg" src="/homeimg/fooiconmob.png" alt="" />
                    <Link href="/serchher">+91 9881123006 </Link>
                  </div>
                  <div className="linkfoolist">
                    <Image width={1000} height={1000} className="fooimg" src="/homeimg/fooiconmail.png" alt="" />
                    <Link href="/serchher">abc@gmail.com </Link>
                  </div>
                </div>
              </div>
              <div className="linkbox exmargin">
                <h2>MEDIA ROOM</h2>
                <div className="linkfootdiv">
                  <div className="linkfoolist">
                    <Link href="/serchher">ABMH in News </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footermaincol3">
              <div className="linkbox">
                <h2>QUICK LINKS</h2>
                <div className="linkfootdiv">
                  <div className="linkfoolist">
                    <Link href="/serchher">Specialities </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Doctors </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Feedback </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Life @ ABMH </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Work With Us </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Corporate Inquiries </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Privacy Policy </Link>
                  </div>
                  <div className="linkfoolist exmarginlink">
                    <Link href="/serchher">Site Map </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mainclose */}
        </div>
      </div>
      <div className="parentcontainerwhi footer footerbelow deckstophead">
        <div className="customcontainer">
          {/* mainstart */}
          <div className="footermain footermainbelw">
            <div className="footermainbelw1">
              <div className="linkbox ">
                <h2>Emergency Service</h2>
                <div className="linkfootdiv">
                  <div className="linkfoolist">
                    <Link href="/serchher">+91 9881165006 </Link>
                  </div>
                </div>
              </div>
              <div className="linkbox ">
                <h2>Ambulance Service</h2>
                <div className="linkfootdiv">
                  <div className="linkfoolist">
                    <Link href="/serchher">+91 9881165006 </Link>
                  </div>
                </div>
              </div>
              <div className="linkbox ">
                <h2>ABMH Assist</h2>
                <div className="linkfootdiv">
                  <div className="linkfoolist">
                    <Link href="/serchher">+91 9881165006 </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footermainbelw2">{/* just for space */}</div>
            <div className="footermainbelw3">
              <div className="linkbox">
                <div className="linkfootdiv">
                  {/* <div class="linkfoolist"><Link href="/serchher">Site Map </Link> </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* mainclose */}
        </div>
      </div>
      <div className="parentcontainerwhi copyright deckstophead">
        <div className="customcontainer">
          {/* mainstart */}
          <div className="copyrightmain">
            <div className="copyrightmaincol1">
              <h3>
                COPYRIGHT © 2021 | ADITYA BIRLA HEALTH SERVICES LTD. | ALL RIGHTS
                RESERVED | DESIGNED &amp; POWERED BY MIND FRAME INDIA
              </h3>
            </div>
            <div className="copyrightmaincol2">
              <p>Legal Disclaimer</p>
            </div>
          </div>
          {/* mainclose */}
        </div>
      </div>
      {/* footer end*/}
      {/* footer mobile start*/}
      <div className="parentcontainerwhi footer mobilehead">
        <div className="customcontainer">
          {/* mainstart */}
          <div className="footermain">
            <div className="footermaincol1">
              <div className="footerlogo">
                <Image width={1000} height={1000} src="/homeimg/footmainlogo.png" alt="" />
              </div>
              <div className="footerlogopara">
                <p>
                  ADITYA BIRLA MEMORIAL HOSPITAL, ADITYA BIRLA MARG, CHINCHWAD, PUNE
                  - 411033, MAHARASHTRA , INDIA.
                </p>
              </div>
              <div className="footergetdirect">
                <Link href="/serchher">
                  {" "}
                  <Image width={1000} height={1000} src="/homeimg/getdireimg.png" alt="" />
                </Link>
              </div>
              <div className="footersocial">
                <div className="footersocialbox">
                  <div className="footersocialboximg">
                    <Link href="/serchher">
                      <Image width={1000} height={1000} src="/homeimg/footersoiconint.png" alt="" />
                    </Link>
                  </div>
                  <div className="footersocialboximg">
                    <Link href="/serchher">
                      <Image width={1000} height={1000} src="/homeimg/footersoiconface.png" alt="" />
                    </Link>
                  </div>
                  <div className="footersocialboximg">
                    <Link href="/serchher">
                      <Image width={1000} height={1000} src="/homeimg/footersoiconyout.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mobilesub">
                <div className="linkbox">
                  <h2>CONTACT US</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Image width={1000} height={1000} className="fooimg" src="/homeimg/fooiconmob.png" alt="" />
                      <Link href="/serchher">+91 9881123006 </Link>
                    </div>
                    <div className="linkfoolist">
                      <Image width={1000} height={1000}
                        className="fooimg"
                        src="/homeimg/fooiconmail.png"
                        alt=""
                      />
                      <Link href="/serchher">abc@gmail.com </Link>
                    </div>
                  </div>
                </div>
                <div className="linkbox">
                  <h2>MEDIA ROOM</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Link href="/serchher">ABMH in News </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footermaincol2">{/* only for space */}</div>
            <div className="footermaincol3">
              <div className="linkbox">
                <h2>QUICK LINKS</h2>
                <div className="linkfootdiv">
                  <div className="linkfoolist">
                    <Link href="/serchher">Specialities </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Doctors </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Feedback </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Life @ ABMH </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Work With Us </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Corporate Inquiries </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Privacy Policy </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Site Map </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mainclose */}
        </div>
      </div>
      <div className="parentcontainerwhi footer footerbelow mobilehead">
        <div className="customcontainer">
          {/* mainstart */}
          <div className="footermain footermainbelw">
            <div className="footermainbelw1">
              <div className="linkbox ">
                <h2>Emergency Service</h2>
                <div className="linkfootdiv">
                  <div className="linkfoolist">
                    <Link href="/serchher">+91 9881165006 </Link>
                  </div>
                </div>
              </div>
              <div className="linkbox ">
                <h2>Ambulance Service</h2>
                <div className="linkfootdiv">
                  <div className="linkfoolist">
                    <Link href="/serchher">+91 9881165006 </Link>
                  </div>
                </div>
              </div>
              <div className="linkbox ">
                <h2>ABMH Assist</h2>
                <div className="linkfootdiv">
                  <div className="linkfoolist">
                    <Link href="/serchher">+91 9881165006 </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mainclose */}
        </div>
      </div>
      <div className="parentcontainerwhi copyright mobilehead">
        <div className="customcontainer">
          {/* mainstart */}
          <div className="copyrightmain">
            <div className="copyrightmaincol1">
              <h3>
                COPYRIGHT © 2021 | ADITYA BIRLA HEALTH SERVICES LTD. | ALL RIGHTS
                RESERVED | DESIGNED &amp; POWERED BY MIND FRAME INDIA
              </h3>
            </div>
            <div className="copyrightmaincol2">
              <p>Legal Disclaimer</p>
            </div>
          </div>
          {/* mainclose */}
        </div>
      </div>
      {/* footer mobile end*/}


      {/* footer mobile end*/}
      {/* Bootstrap 5 JavaScript Bundle with Popper */}





    </>


  )
}

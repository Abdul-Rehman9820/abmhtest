

"use client";

import { useEffect } from 'react';
import $ from 'jquery';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';


import './styles/commonglobalstyle.css'
import './styles/homepstyle.css'


export default function Home() {


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


    
    $(document).ready(function() {
      // Your code here
      $("#showPopup1").click(function(e) {
        e.stopPropagation();
        $(".popup").toggle();
      });

      $("body").click(function() {
        $(".popup").hide();
        var video = $("#player").attr("src");
        $("#player").attr("src", "");
        $("#player").attr("src", video);
      });

    });

    $(document).ready(function() {
      // Your code here
      $("#showPopup2").click(function(e) {
        e.stopPropagation();
        $(".popup2").toggle();
      });

      $("body").click(function() {
        $(".popup2").hide();
        var video = $("#player2").attr("src");
        $("#player2").attr("src", "");
        $("#player2").attr("src", video);
      });

    });



  }, []);




  return (


    <>


      <title>Hospital in Chinchwad Pune | Aditya Birla Best Multispeciality Hospital</title>

      {/* slider*/}
      <div className="mainslider">


        <div className="newnexthomeslide">
          <div id="carouselExampleIndicators" className="carousel slide carousel-fade">
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
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={3}
                aria-label="Slide 4"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="mynewslides">
                  <Link href="/doctors">
                    <Image width={1700} height={400} className="deckstophead" src="/homeimg/web-bannerHome1.png" alt='slide' />
                    <Image width={400} height={400} className="mobilehead" src="/homeimg/Mobile-banner1-mob.png" alt='slide' />
                    <h2 className="forSEOslide">hellow world</h2>
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <div className="mynewslides">
                  <Link href="/doctors">
                    <Image width={1700} height={400} className="deckstophead" src="/homeimg/web-bannerHome2.jpg" alt='slide' />
                    <Image width={400} height={400} className="mobilehead" src="/homeimg/Mobile-banner2-mob.jpg" alt='slide' />
                    <h2 className="forSEOslide">hellow world</h2>
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <div className="mynewslides">
                  <Link href="/doctors">
                    <Image width={1700} height={400} className="deckstophead" src="/homeimg/web-bannerHome3.jpg" alt='slide' />
                    <Image width={400} height={400} className="mobilehead" src="/homeimg/Mobile-banner3-mob.jpg" alt='slide' />
                    <h2 className="forSEOslide">hellow world</h2>
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <div className="mynewslides">
                  <Link href="/doctors">
                    <Image width={1700} height={400} className="deckstophead" src="/homeimg/web-bannerHome4.jpg" alt='slide' />
                    <Image width={400} height={400} className="mobilehead" src="/homeimg/Mobile-banner4-mob.jpg" alt='slide' />
                    <h2 className="forSEOslide">hellow world</h2>
                  </Link>
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
                <Image width={400} height={400} src="/homeimg/nextleft.png" alt="img" />
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
                <Image width={400} height={400} src="/homeimg/nextright.png" alt="img" />
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
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
                      <Image width={400} height={400} src="/homeimg/newdecsbookdr.png" alt="img" />
                    </div>
                    <div className="appmainHea">

                      <Link href="/doctors">
                        <p>Find a Doctor</p>
                      </Link>

                    </div>
                  </div>
                </div>
                <div className="appobtnchil">
                  <div className="appbtnmainbox">
                    <div className="appmainboxBG">
                      <Image width={400} height={400} src="/homeimg/medical-app.png" alt="img" />
                    </div>
                    <div className="appmainHea">
                      <Link href="/serchher">
                        <p>Online Consultation</p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="appobtnchil">
                  <div className="appbtnmainbox">
                    <div className="appmainboxBG">
                      <Image width={400} height={400} src="/homeimg/heart.png" alt="img" />
                    </div>
                    <div className="appmainHea">
                      <Link href="/wellness-packages">
                        <p>Wellness Packages</p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="appobtnchil fournone">
                  <div className="appbtnmainbox">
                    <div className="appmainboxBG">
                      <Image width={400} height={400} src="/homeimg/Group.png" alt="img" />
                    </div>
                    <div className="appmainHea">
                      <Link href="/serchher">

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
                      <Image width={400} height={400} src="/homeimg/Cardiology.png" alt="icon" />
                    </div>
                  </div>
                  <div className="speforwhitbgCol1">
                    <Link href="/specialties/Cardiology">
                      <h2>Cardiology</h2>
                    </Link>
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
                      <Image width={400} height={400} src="/homeimg/Urology.png" alt="icon" />
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
                      <Image width={400} height={400} src="/homeimg/Neurology.png" alt="icon" />
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
                      <Image width={400} height={400} src="/homeimg/Diabetology.png" alt="icon" />
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
                      <Image width={400} height={400} src="/homeimg/Gastroenterology.png" alt="icon" />
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
                      <Image width={400} height={400} src="/homeimg/Pediatrics.png" alt="icon" />
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
                <Link href="/specialties">
                  All Specialties
                  <span className="specicon">
                    <Image width={400} height={400} src="/homeimg/right-arrow.png" alt="img" />
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
                    <Image width={400} height={400} src="/homeimg/Cardiologymo.png" alt="img" />
                  </div>
                  <div className="speforwhitbgCol2">
                    <h2>Cardiology</h2>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgCol1">
                    <Image width={400} height={400} src="/homeimg/Urologymo.png" alt="img" />
                  </div>
                  <div className="speforwhitbgCol2">
                    <h2>Urology</h2>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgCol1">
                    <Image width={400} height={400} src="/homeimg/Neurologymo.png" alt="img" />
                  </div>
                  <div className="speforwhitbgCol2">
                    <h2>Neurology</h2>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgCol1">
                    <Image width={400} height={400} src="/homeimg/Diabetologymo.png" alt="img" />
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
                  All Specialties
                  <span className="specicon">
                    <Image width={400} height={400} src="/homeimg/right-arrow.png" alt="img" />
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
              <Link href="/doctors">
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
                            <Image width={400} height={400} src="/homeimg/OurTeamExperts1.png" alt="img" />
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
                            <Image width={400} height={400} src="/homeimg/OurTeamExperts2.png" alt="img" />
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
                            <Image width={400} height={400} src="/homeimg/OurTeamExperts3.png" alt="img" />
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
                            <Image width={400} height={400} src="/homeimg/OurTeamExperts2.png" alt="img" />
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
                            <Image width={400} height={400} src="/homeimg/OurTeamExperts3.png" alt="img" />
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
                  <Image width={400} height={400} src="/homeimg/nextleft.png" alt="img" />
                </button>
                <button id="custom-nextButton">
                  <Image width={400} height={400} src="/homeimg/nextright.png" alt="img" />
                </button>
              </div>
            </div>
          </div>
          {/* mainclose */}
        </div>
      </div>
      {/* our team*/}

      {/* <!-- youtube ifram 1--> */}
      <div className="popup">
      <iframe id="player" className="test3_1" src="https://www.youtube.com/embed/S7otT-fc52I"  frameBorder="0"  allowFullScreen></iframe>
      </div>
      {/* <!-- youtube ifram 1--> */}

      {/* <!-- youtube ifram 2--> */}
      <div className="popup2">
      <iframe id="player2" className="test3_2" src="https://www.youtube.com/embed/Y-DzxcH1EEs"  frameBorder="0"  allowFullScreen></iframe>
      </div>
      {/* <!-- youtube ifram 2--> */}


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
                id="carouselExampleIndicators1"
                className="carousel slide carousel-fade"
              >
                <div className="carousel-indicators">

                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators1"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators1"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
         

                </div>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="testislid">
                      <div className="testislidChil">
                        <div className="testislidChilcol1">
                          <div className="ourworkbox1">
                            <div className="ourworkmimg">
                              <Image width={700} height={400} src="/homeimg/youplayimg.jpg" alt="img" />
                              <div className="imgcerl1" id="showPopup1"> <Image width={50} height={50} className='palybtn' src="/homeimg/play-button.png" alt="img" /></div>
                            </div>
                          </div>
                        </div>
                        <div className="testislidChilcol2">
                          <div className="testislidChilcol2Para">
                          Mrs. Shantaben Patenkar had visited Aditya Birla Memorial Hospital just a few days ago with a complaint of severe pain in her left leg, she was immediately consulted and advised to get a surgery. 
                          The surgery was successful and she was able to recover sooner. Hear what she has to say.							
                          </div>
                          <div className="ourworkname">
                            <h2>Patient's Feedback</h2>
                          </div>
                          <div className="testispace" />
                          <div className="ourworkspec">
                            <h2>Leg Surgery | Aditya Birla Memorial Hospital </h2>
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
                              <Image width={700} height={400} src="/homeimg/youplayimg.jpg" alt="img" />
                              <div className="imgcerl2" id="showPopup2"><Image width={50} height={50} className='palybtn' src="/homeimg/play-button.png" alt="img" /></div>
                            </div>
                          </div>
                        </div>
                        <div className="testislidChilcol2">
                          <div className="testislidChilcol2Para">
                             One of our patients,Mrs. Kumudini D. Ghodke, sharing feedback about her journey stay, diagnosis, and treatment at ABMH. We wish her a speedy recovery. 
                          </div>
                          <div className="ourworkname">
                            <h2>Mrs. Kumudini D. Ghodke</h2>
                          </div>
                          <div className="testispace" />
                          <div className="ourworkspec">
                            <h2>Sharing feedback about her journey stay, diagnosis, and treatment at ABMH.</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators1"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true">
                    <Image width={400} height={400} src="/homeimg/nextleft.png" alt="" />
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators1"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true">
                    <Image width={400} height={400} src="/homeimg/nextright.png" alt="" />
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



                  <div className="ourteamslideparnew deckstophead">
                    <div
                      id="carouselExampleIndicators44"
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
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="mynewslidesforhomwtesti">
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-88.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Medical Expertise</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                      Our dedicated team of skilled healthcare professionals stays current on the latest medical 
                                      advancements and utilizes cutting-edge technologies to ensure the highest quality care for our patients.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    <button className="whychocombtnn">
                                      <a href="#">
                                        Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </a>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-89.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Advanced Technology</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                      Our commitment to technological advancement ensures that we are always at the forefront of medical innovative medical technology, which allows us to provide more accurate diagnoses, 
                                      more effective treatments, and a more personalized patient experience.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    <button className="whychocombtnn">
                                      <a href="#">
                                        Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </a>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-90.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Patient Centric approach</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                      Committed to patient-centered care, we tailor our approach to individual needs, 
                                      emphasizing open communication and collaboration between patients and healthcare providers for optimal health outcomes.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    <button className="whychocombtnn">
                                      <a href="#">
                                       Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </a>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="mynewslidesforhomwtesti">
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-91.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Compassionate Care</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                      Our team of compassionate caregivers is dedicated to providing emotional support and comfort to our patients and their families. 
                                      We firmly believe that empathy and understanding are essential components of holistic healthcare.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    <button className="whychocombtnn">
                                      <a href="#">
                                       Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </a>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-92.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Accessibility and Convenience</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                      We are committed to making healthcare accessible and convenient for all our patients. 
                                      We offer convenient appointment times and locations to make it easy for our patients to receive the care they need.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    <button className="whychocombtnn">
                                      <a href="#">
                                       Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </a>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                      
                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators44"
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true">
                          <Image width={100} height={100} src="/homeimg/nextleft.png" alt="img" />
                        </span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators44"
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true">
                          <Image width={100} height={100} src="/homeimg/nextright.png" alt="img" />
                        </span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  <div className="ourteamslideparnew mobilehead">
                    <div
                      id="carouselExampleIndicators55"
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
                          aria-label="Slide 2"
                        />
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={3}
                          aria-label="Slide 2"
                        />
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={4}
                          aria-label="Slide 2"
                        />
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="mynewslidesforhomwtesti">
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-88.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Medical Expertise</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                      Our dedicated team of skilled healthcare professionals stays current on the latest medical advancements and 
                                      utilizes cutting-edge technologies to ensure the highest quality care for our patients.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    <button className="whychocombtnn">
                                      <a href="#">
                                        Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </a>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="mynewslidesforhomwtesti">
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-89.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Advanced Technology</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                      Our commitment to technological advancement ensures that we are always at the forefront of medical innovative medical technology, 
                                      which allows us to provide more accurate diagnoses, more effective treatments, and a more personalized patient experience.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    <button className="whychocombtnn">
                                      <a href="#">
                                         Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </a>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="mynewslidesforhomwtesti">
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-90.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Patient Centric approach</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                      Committed to patient-centered care, we tailor our approach to individual needs, 
                                      emphasizing open communication and collaboration between patients and healthcare providers for optimal health outcomes.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    <button className="whychocombtnn">
                                      <a href="#">
                                         Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </a>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="mynewslidesforhomwtesti">
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-91.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Compassionate Care</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                      Our team of compassionate caregivers is dedicated to providing emotional support and comfort to our patients and their families. 
                                      We firmly believe that empathy and understanding are essential components of holistic healthcare.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    <button className="whychocombtnn">
                                      <a href="#">
                                         Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </a>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="mynewslidesforhomwtesti">
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-92.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Accessibility and Convenience</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                      We are committed to making healthcare accessible and convenient for all our patients. 
                                      We offer convenient appointment times and locations to make it easy for our patients to receive the care they need.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    <button className="whychocombtnn">
                                      <a href="#">
                                        Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </a>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators55"
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true">
                          <Image width={100} height={100} src="/homeimg/nextleft.png" alt="img" />
                        </span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators55"
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true">
                          <Image width={100} height={100} src="/homeimg/nextright.png" alt="img" />
                        </span>
                        <span className="visually-hidden">Next</span>
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



    </>


  )
}

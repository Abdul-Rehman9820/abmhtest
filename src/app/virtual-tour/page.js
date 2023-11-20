

"use client";

import {  useEffect , useState } from "react";
import Image from 'next/image';

import './virtual-tour.css'


const Virtualtour = () => {



  useEffect(() => {


    // testi slider


    const newSlider = document.querySelector(".new-slider");
    const newSlides = document.querySelectorAll(".new-slidet");
    const newPrevButton = document.getElementById("new-prevButton");
    const newNextButton = document.getElementById("new-nextButton");
    const newSliderDots = document.querySelector(".new-slider-dots");

    let newCurrentSlide = 0;
    const newSlidesToShow = 2; // Number of slides to show at a time
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


    // testi slider



        // for FAQ script

        var acc = document.getElementsByClassName("accordion");
        var i;
    
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function () {
            this.classList.toggle("activeFAQ");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          });
        }
    
        // for FAQ script



 


  })


  return (

    <>
    <title>Virtual Tour</title>
    {/* common heading div start*/}
    <div className="parentcontainerwhi">
      <div className="customcontainer">
        <div className="commonheaddiv">
          <div className="commonheadcontainer">
            <div className="breadcrumbs">
              <div className="breadcrumbsdata">
                Home / Patient Care /
                <span className="breadcrumbsactive">Virtual Tour</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* common heading div end*/}
    {/* common heading banner start */}
    <div className="mainheadingbanner">
      <div className="mainheadingbandiv">
          <Image width={2000} height={400} src="/commonimages/virtual-tour-banner.jpg" alt="icon" />
      </div>
    </div>
    {/* common heading banner end */}
    {/* Hospirtal tour start*/}
    <div className="parentcontainerwhi">
      <div className="customcontainer">
        <div className="Hospirtaltour">
          <div className="commonheadingCont">
            <div className="commonheadinghead">
              <h2>Hospital Tour Guide</h2>
              <span className="Commheadborder" />
            </div>
          </div>
          <div className="turevideo">
            <iframe
              className="turevidiframe"
              src="https://www.youtube.com/embed/s7mRRpj6buM"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </div>
    {/* Hospirtal tour  end*/}
    {/* Hospirtal testimonials  start*/}
    <div className="parentcontainerwhi withtestBG">
      <div className="customcontainer">
        <div className="Hospirtaltourtestim">
          <div className="commonheadingCont">
            <div className="commonheadinghead">
              <h2>Patients Testimonials</h2>
              <span className="Commheadborder" />
            </div>
          </div>
          <div className="taltourtestimslidcont">
            <div className="new-slider-wrapper">
              <div className="new-slider">

                <div className="new-slidet">
                  <div className="myovefts">
                    <div className="whychochilbo">
                      <div className="whychoslideboxts">
                        <div className="whychobox1ts">
                          <div className="whychospects">
                            <h2>
                              Aditya Birla Hospital boasts a team of highly professional doctors. 
                              Their expertise and compassionate care were instrumental in my speedy recovery. Highly recommended.
                            </h2>
                          </div>
                        </div>
                        <div className="whychoimgbox2ts">
                          <div className="whychoimgbox2col1ts">
                            <div className="whychoimgts">
                              <Image width={400} height={400} src="/virtualtour/innertesti.png" alt="img" />
                            </div>
                          </div>
                          <div className="whychoimgbox2col2ts">
                            <div className="whychonamejustyts">
                              <div className="whychonamets">
                                <h2>Preeti Singh</h2>
                              </div>
                              <div className="whychonameforts">
                                <h2>Patient&apos;s Testimonial</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="new-slidet">
                  <div className="myovefts">
                    <div className="whychochilbo">
                      <div className="whychoslideboxts">
                        <div className="whychobox1ts">
                          <div className="whychospects">
                            <h2>
                            Impressed by Aditya Birla Hospital&apos;s staff, their dedication, and their friendly demeanour. 
                            The nurses and support team made my stay comfortable and stress-free.
                            </h2>
                          </div>
                        </div>
                        <div className="whychoimgbox2ts">
                          <div className="whychoimgbox2col1ts">
                            <div className="whychoimgts">
                              <Image width={400} height={400} src="/virtualtour/innertesti.png" alt="img" />
                            </div>
                          </div>
                          <div className="whychoimgbox2col2ts">
                            <div className="whychonamejustyts">
                              <div className="whychonamets">
                                <h2>James</h2>
                              </div>
                              <div className="whychonameforts">
                                <h2>Patient&apos;s Testimonial</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="new-slidet">
                  <div className="myovefts">
                    <div className="whychochilbo">
                      <div className="whychoslideboxts">
                        <div className="whychobox1ts">
                          <div className="whychospects">
                            <h2>
                            I Was admitted to Aditya Birla Hospital For Typhoid treatment.
                            The Medical team&apos;s prompt diagnosis and efficient care helped me recover quickly. 
                            The Hospital&apos;s cleanliness and patient-friendly environment were impressive.
                            </h2>
                          </div>
                        </div>
                        <div className="whychoimgbox2ts">
                          <div className="whychoimgbox2col1ts">
                            <div className="whychoimgts">
                              <Image width={400} height={400} src="/virtualtour/innertesti.png" alt="img" />
                            </div>
                          </div>
                          <div className="whychoimgbox2col2ts">
                            <div className="whychonamejustyts">
                              <div className="whychonamets">
                                <h2>David Wardson</h2>
                              </div>
                              <div className="whychonameforts">
                                <h2>Patient&apos;s Testimonial</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="new-slidet">
                  <div className="myovefts">
                    <div className="whychochilbo">
                      <div className="whychoslideboxts">
                        <div className="whychobox1ts">
                          <div className="whychospects">
                            <h2>
                            My experience at Aditya Birla Hospital during my battle with dengue fever was outstanding. 
                            The medical team demonstrated a high level of expertise in diagnosing and managing my condition.  
                            I would highly recommend Aditya Birla Hospital for anyone seeking top-notch medical care.
                            </h2>
                          </div>
                        </div>
                        <div className="whychoimgbox2ts">
                          <div className="whychoimgbox2col1ts">
                            <div className="whychoimgts">
                              <Image width={400} height={400} src="/virtualtour/innertesti.png" alt="img" />
                            </div>
                          </div>
                          <div className="whychoimgbox2col2ts">
                            <div className="whychonamejustyts">
                              <div className="whychonamets">
                                <h2>Tanu Jaiswal</h2>
                              </div>
                              <div className="whychonameforts">
                                <h2>Patient&apos;s Testimonial</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="new-slidet">
                  <div className="myovefts">
                    <div className="whychochilbo">
                      <div className="whychoslideboxts">
                        <div className="whychobox1ts">
                          <div className="whychospects">
                            <h2>
                            I recently had an emergency appendix surgery at Aditya Birla Hospital, and I can&apos;t thank the medical team enough for their prompt and expert care. 
                            They truly live up to their reputation as the best hospital in the city. 
                            I highly recommend Aditya Birla Hospital to anyone seeking top-notch medical care in Pune.
                            </h2>
                          </div>
                        </div>
                        <div className="whychoimgbox2ts">
                          <div className="whychoimgbox2col1ts">
                            <div className="whychoimgts">
                              <Image width={400} height={400} src="/virtualtour/innertesti.png" alt="img" />
                            </div>
                          </div>
                          <div className="whychoimgbox2col2ts">
                            <div className="whychonamejustyts">
                              <div className="whychonamets">
                                <h2>Rudransh Singh</h2>
                              </div>
                              <div className="whychonameforts">
                                <h2>Patient&apos;s Testimonial</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="new-slidet">
                  <div className="myovefts">
                    <div className="whychochilbo">
                      <div className="whychoslideboxts">
                        <div className="whychobox1ts">
                          <div className="whychospects">
                            <h2>
                            My uncle had his knee surgery at this hospital. The facilities provided by the hospital were great. 
                            Thanks to the expert surgeons now he&apos;s able to walk properly.
                            </h2>
                          </div>
                        </div>
                        <div className="whychoimgbox2ts">
                          <div className="whychoimgbox2col1ts">
                            <div className="whychoimgts">
                              <Image width={400} height={400} src="/virtualtour/innertesti.png" alt="img" />
                            </div>
                          </div>
                          <div className="whychoimgbox2col2ts">
                            <div className="whychonamejustyts">
                              <div className="whychonamets">
                                <h2>Sahil Mansoori</h2>
                              </div>
                              <div className="whychonameforts">
                                <h2>Patient&apos;s Testimonial</h2>
                              </div>
                            </div>
                          </div>
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
                <Image width={400} height={400} src="/virtualtour/nextleft.png" alt="img" />
              </button>
              <button id="new-nextButton">
                <Image width={400} height={400} src="/virtualtour/nextright.png" alt="img" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Hospirtal testimonials   end*/}
    {/* FAQ for wellness  start*/}


    {/* <div className="parentcontainerwhi">
      <div className="customcontainer">
        <div className="wellnessFAQ">
          <div className="commonheadingCont">
            <div className="commonheadinghead">
              <h2>FAQs : Common Questions</h2>
              <span className="Commheadborder" />
            </div>
          </div>
          <div className="wellfaqCol">
            <div className="wellfaqcontainer">
              <button className="accordion">
                What is a Third-Party Administrator (TPA)?
              </button>
              <div className="panel">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </p>
              </div>
              <button className="accordion">
                What Services Do TPAs Provide?
              </button>
              <div className="panel">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <button className="accordion">
                Why Would a Company Use a TPA?
              </button>
              <div className="panel">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <button className="accordion">
                What is the procedure for availing TPA service?
              </button>
              <div className="panel">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}


    {/*  FAQ for wellness  end*/}
  </>
  


  );


};



export default Virtualtour;

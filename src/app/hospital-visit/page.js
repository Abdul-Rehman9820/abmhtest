

"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

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


  })


  return (

    <>
      <title>Hospital Visit</title>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <Link className="breadcrumbsNotactive" href="">Patient Care </Link> / <span className="breadcrumbsactive">Hospital Visit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* common heading div end*/}
      {/* common heading banner start */}
      <div className="mainheadingbanner">
        <div className="mainheadingbandiv">
          <Image width={2000} height={400} src="/commonimages/commvirtulnewban.jpg" alt="icon" />
        </div>
      </div>
      <div id="PatientsTestimonials"></div>
      {/* common heading banner end */}
      {/* Hospirtal tour start*/}

      {/* <div className="parentcontainerwhi">
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
                src="https://www.youtube.com/embed/XXlMVY5A7xQ"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </div> */}

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


            <div className="taltourtestimslidcont deckstophead">
              <div className="new-slider-wrapper">
                <div className="new-slider">


                  <div className="new-slidet">
                    <div className="myovefts">
                      <div className="whychochilbo">
                        <div className="whychoslideboxts">
                          <div className="whychobox1ts">
                            <div className="whychospects">
                              <h2>
                                Delighted mother, Mrs. Radha Gaikwad, praises Aditya Birla Memorial Hospital. Under Dr. Molshri Misra&apos;s care, she appreciates the skilled medical attention and supportive staff, expressing sincere gratitude for a positive experience during the child birth.
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
                                  <h2>Mrs. Radha Anirudh Gaikwad </h2>
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
                                Bhaskar Bange praises Aditya Birla Memorial Hospital for impeccable cleanliness and unwavering focus on sanitization. Enduring Dialysis since July 2015, he lauds the hospital&apos;s commitment to infection control,  outstanding staff, service and infrastructure.
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
                                  <h2>Bhaskar Panduram Bange</h2>
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
                                Cancer survivor Mrs. Aruna Hiwarkar thanks Aditya Birla Memorial Hospital for Dr. Wategaonkar&apos;s expertise and the supportive team. Regular check-ups reflect her well-being, emphasizing the hospital&apos;s responsive care and advanced facilities.
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
                                  <h2> Mrs. Aruna Ramdas Hiwarkar</h2>
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
                                Kudos to Mr. Dharmendra Pashine, a resilient patient who underwent painless Robotic Surgery for Umbilical Hernia at Aditya Birla Memorial Hospital. Dr. Suprashant Kulkarni&apos;s skilled hands ensured the quick recovery of Mr. Pashine. He&apos;s grateful to the hospital staff and advancements.
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
                                  <h2>Mr. Dharmendra Pashine </h2>
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
                                Mrs. Asha Gupta commends Aditya Birla Memorial Hospital for efficient Pneumonia treatment. Grateful for Dr. Rahul Baste&apos;s exceptional care, she applauds the staff&apos;s support, resulting in a swift recovery and discharge in just a week.
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
                                  <h2> Mrs. Asha Gupta</h2>
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
                                Aniket Todkar expresses gratitude to Aditya Birla Memorial Hospital for the right care. His father, with a serious rib cage fracture, received prompt treatment & recovered. He appreciates the unwavering support of the dedicated doctors & staff.
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
                                  <h2>Dattatreya Laxman Todkar </h2>
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


            <div className="newmobiletist-cont mobilehead">

              <div id="carouselExampleIndicatornewtisti" className="carousel slide" data-bs-ride="carousel">


                <div className="carousel-inner">


                  <div className="carousel-item active">
                    <div>
                      <div className="newtesti-Para">
                      Delighted mother, Mrs. Radha Gaikwad, praises Aditya Birla Memorial Hospital. Under Dr. Molshri Misra&apos;s care, she appreciates the skilled medical attention and supportive staff, expressing sincere gratitude for a positive experience during the child birth.
                      </div>
                      <div className="newtesti-Parawhychoimgts">
                        <Image width={400} height={400} src="/virtualtour/innertesti.png" alt="img" />
                      </div>
                      <div>
                        <h2 className="newtesti-name">Mrs. Radha Anirudh Gaikwad</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont">Patient&apos;s Testimonial</h2>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                      Bhaskar Bange praises Aditya Birla Memorial Hospital for impeccable cleanliness and unwavering focus on sanitization. Enduring Dialysis since July 2015, he lauds the hospital&apos;s commitment to infection control,  outstanding staff, service and infrastructure.
                      </div>
                      <div className="newtesti-Parawhychoimgts">
                        <Image width={400} height={400} src="/virtualtour/innertesti.png" alt="img" />
                      </div>
                      <div>
                        <h2 className="newtesti-name">Bhaskar Panduram Bange</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont">Patient&apos;s Testimonial</h2>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                      Cancer survivor Mrs. Aruna Hiwarkar thanks Aditya Birla Memorial Hospital for Dr. Wategaonkar&apos;s expertise and the supportive team. Regular check-ups reflect her well-being, emphasizing the hospital&apos;s responsive care and advanced facilities.
                      </div>
                      <div className="newtesti-Parawhychoimgts">
                        <Image width={400} height={400} src="/virtualtour/innertesti.png" alt="img" />
                      </div>
                      <div>
                        <h2 className="newtesti-name">Mrs. Aruna Ramdas Hiwarkar</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont">Patient&apos;s Testimonial</h2>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                      Kudos to Mr. Dharmendra Pashine, a resilient patient who underwent painless Robotic Surgery for Umbilical Hernia at Aditya Birla Memorial Hospital. Dr. Suprashant Kulkarni&apos;s skilled hands ensured the quick recovery of Mr. Pashine. He&apos;s grateful to the hospital staff and advancements. 
                      </div>
                      <div className="newtesti-Parawhychoimgts">
                        <Image width={400} height={400} src="/virtualtour/innertesti.png" alt="img" />
                      </div>
                      <div>
                        <h2 className="newtesti-name">Mr. Dharmendra Pashine</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont">Patient&apos;s Testimonial</h2>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                      Mrs. Asha Gupta commends Aditya Birla Memorial Hospital for efficient Pneumonia treatment. Grateful for Dr. Rahul Baste&apos;s exceptional care, she applauds the staff&apos;s support, resulting in a swift recovery and discharge in just a week.
                      </div>
                      <div className="newtesti-Parawhychoimgts">
                        <Image width={400} height={400} src="/virtualtour/innertesti.png" alt="img" />
                      </div>
                      <div>
                        <h2 className="newtesti-name">Mrs. Asha Gupta</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont">Patient&apos;s Testimonial</h2>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                      Aniket Todkar expresses gratitude to Aditya Birla Memorial Hospital for the right care. His father, with a serious rib cage fracture, received prompt treatment & recovered. He appreciates the unwavering support of the dedicated doctors & staff.
                      </div>
                      <div className="newtesti-Parawhychoimgts">
                        <Image width={400} height={400} src="/virtualtour/innertesti.png" alt="img" />
                      </div>
                      <div>
                        <h2 className="newtesti-name">Mr. Dattatreya Laxman Todkar</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont">Patient&apos;s Testimonial</h2>
                      </div>
                    </div>
                  </div>






                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicatornewtisti"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true">

                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicatornewtisti"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true">

                  </span>
                  <span className="visually-hidden">Next</span>
                </button>

              </div>



            </div>


          </div>
        </div>
      </div>
      {/* Hospirtal testimonials   end*/}

    </>



  );


};



export default Virtualtour;

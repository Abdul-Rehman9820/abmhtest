"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import "./virtual-tour.css";
import "./hospital-room-tab.css";

const Virtualtour = () => {
  return (
    <>
      <title>Hospital Visit</title>
      <link
        rel="canonical"
        href="https://adityabirlahospital.com/hospital-visit"
      />
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <Link className="breadcrumbsNotactive" href="">
                  Patient Care{" "}
                </Link>{" "}
                / <span className="breadcrumbsactive">Hospital Visit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* common heading div end*/}
      {/* common heading banner start */}
      <div className="mainheadingbanner">
        <div className="mainheadingbandiv">
          <Image
            width={2000}
            height={400}
            src="/commonimages/commvirtulnewban.jpg"
            alt="icon"
          />
        </div>
      </div>

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

      {/* Room and infra tab  start*/}

      <div className="parentcontainerwhi mb-5 mt-2">
        <div className="customcontainer">
          <div className="RoomInfrloop">
            <div className="commonheadingCont">
              <div className="commonheadinghead">
                <h2>Rooms</h2>
                <span className="Commheadborder" />
              </div>
            </div>
            <div className="room-main-tabsec">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#Diamond-Suite-Ward"
                    type="button"
                  >
                    Diamond Suite Ward
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#Nuro-ICU"
                    type="button"
                  >
                    Neuro ICU
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#PICU"
                    type="button"
                  >
                    PICU
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#Nicu"
                    type="button"
                  >
                    NICU
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#Daycare"
                    type="button"
                  >
                    Day Care
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#Wellness"
                    type="button"
                  >
                    Wellness
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#AandE"
                    type="button"
                  >
                    A&E
                  </button>
                </div>
              </nav>

              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="Diamond-Suite-Ward"
                >
                  <div className="roominfraImagecont">
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Diamond Suite Ward1.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Diamond Suite Ward2.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Diamond Suite Ward3.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Diamond Suite Ward4.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Diamond Suite Ward5.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Diamond Suite Ward6.jpg"
                      alt="abmh room image"
                    />
                  </div>
                </div>

                <div className="tab-pane fade show" id="Nuro-ICU">
                  <div className="roominfraImagecont">
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Nuro ICU1.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Nuro ICU2.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Nuro ICU3.jpg"
                      alt="abmh room image"
                    />
                  </div>
                </div>

                <div className="tab-pane fade show" id="PICU">
                  <div className="roominfraImagecont">
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/PICU1.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/PICU2.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/PICU3.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/PICU4.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/PICU5.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/PICU6.jpg"
                      alt="abmh room image"
                    />
                  </div>
                </div>

                <div className="tab-pane fade show" id="Daycare">
                  <div className="roominfraImagecont">
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Daycare1.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Daycare2.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Daycare3.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Daycare4.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Daycare5.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Daycare6.jpg"
                      alt="abmh room image"
                    />
                  </div>
                </div>

                <div className="tab-pane fade show" id="Nicu">
                  <div className="roominfraImagecont">
                    {/* <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Nicu1.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Nicu2.jpg"
                      alt="abmh room image"
                    /> */}
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Nicu3.jpg"
                      alt="abmh room image"
                    />
                  </div>
                </div>

                <div className="tab-pane fade show" id="Wellness">
                  <div className="roominfraImagecont">
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Wellness1.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Wellness2.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/Wellness3.jpg"
                      alt="abmh room image"
                    />
                  </div>
                </div>

                <div className="tab-pane fade show" id="AandE">
                  <div className="roominfraImagecont">
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/AandE1.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/AandE2.jpg"
                      alt="abmh room image"
                    />
                    <Image
                      width={400}
                      height={100}
                      className="roominfraimg"
                      src="/rooms_infra/AandE3.jpg"
                      alt="abmh room image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Room and infra tab  end*/}

      {/* +++++++++++++++++++++++++++++++++++++++++++++=======================+++++++++++++++++++++++++++++++ */}
      {/* +++++++++++++++++++++++++++++++++++++++++++++=======================+++++++++++++++++++++++++++++++ */}

      {/* +++++++++++++++++++++++++++++++++++++++++++++=======================+++++++++++++++++++++++++++++++ */}
      {/* +++++++++++++++++++++++++++++++++++++++++++++=======================+++++++++++++++++++++++++++++++ */}

      {/*  Hospirtal testimonials  start*/}

      <div id="PatientsTestimonials"></div>

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
              <div
                id="carouselfordeckstophead"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="testinewflex">
                      <div className="myovefts">
                        <div className="whychochinewlbo">
                          <div className="whychoslideboxts">
                            <div className="whychobox1ts">
                              <div className="whychospects">
                                <h2>
                                  Mrs. Sushila Sawant expresses heartfelt
                                  gratitude to Aditya Birla Memorial Hospital
                                  for the exceptional care she received during
                                  her gastric-related surgery. After a thorough
                                  evaluation of her condition, Dr. (Major) Kumar
                                  Raushan conducted a successful surgery. She
                                  deeply appreciates the warm and supportive
                                  service from Dr. Raushan and his team, who
                                  helped her recover swiftly.
                                </h2>
                              </div>
                            </div>
                            <div className="whychoimgbox2ts">
                              <div className="whychoimgbox2col1ts">
                                <div className="whychoimgts">
                                  <Image
                                    width={400}
                                    height={400}
                                    src="/virtualtour/innertesti.png"
                                    alt="img"
                                  />
                                </div>
                              </div>
                              <div className="whychoimgbox2col2ts">
                                <div className="whychonamejustyts">
                                  <div className="whychonamets">
                                    <h2>Mrs. Sushila Sawant</h2>
                                  </div>
                                  <div className="whychonameforts">
                                    <h2></h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myovefts">
                        <div className="whychochinewlbo">
                          <div className="whychoslideboxts">
                            <div className="whychobox1ts">
                              <div className="whychospects">
                                <h2>
                                  Mrs. Vijaymala Name's son expresses heartfelt
                                  gratitude to Aditya Birla Memorial Hospital
                                  for the exceptional care his mother received
                                  during an emergency. He deeply appreciates Dr.
                                  Kailas M Jorule's expertise in her successful
                                  orthopedic surgery and the supportive staff
                                  who made them feel comfortable and assisted
                                  with every detail with utmost compassion and
                                  care.
                                </h2>
                              </div>
                            </div>
                            <div className="whychoimgbox2ts">
                              <div className="whychoimgbox2col1ts">
                                <div className="whychoimgts">
                                  <Image
                                    width={400}
                                    height={400}
                                    src="/virtualtour/innertesti.png"
                                    alt="img"
                                  />
                                </div>
                              </div>
                              <div className="whychoimgbox2col2ts">
                                <div className="whychonamejustyts">
                                  <div className="whychonamets">
                                    <h2>Mrs. Vijaymala Name</h2>
                                  </div>
                                  <div className="whychonameforts">
                                    <h2></h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="testinewflex">
                      <div className="myovefts">
                        <div className="whychochinewlbo">
                          <div className="whychoslideboxts">
                            <div className="whychobox1ts">
                              <div className="whychospects">
                                <h2>
                                  Mr. Sudam Pinjan expresses heartfelt gratitude
                                  to Aditya Birla Memorial Hospital for the
                                  exceptional dental care he received. Thanks to
                                  Dr. Nikhil Dayama, he successfully regained
                                  his smile.
                                </h2>
                              </div>
                            </div>
                            <div className="whychoimgbox2ts">
                              <div className="whychoimgbox2col1ts">
                                <div className="whychoimgts">
                                  <Image
                                    width={400}
                                    height={400}
                                    src="/virtualtour/innertesti.png"
                                    alt="img"
                                  />
                                </div>
                              </div>
                              <div className="whychoimgbox2col2ts">
                                <div className="whychonamejustyts">
                                  <div className="whychonamets">
                                    <h2>Mr. Sudam Pinjan</h2>
                                  </div>
                                  <div className="whychonameforts">
                                    <h2></h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myovefts">
                        <div className="whychochinewlbo">
                          <div className="whychoslideboxts">
                            <div className="whychobox1ts">
                              <div className="whychospects">
                                <h2>
                                  Mr. Arvind Kumar expresses heartfelt gratitude
                                  to Aditya Birla Memorial Hospital for the
                                  exceptional care he received during his Hernia
                                  surgery. Under the guidance of Dr. Suprashant
                                  D Kulkarni, he underwent successful robotic
                                  surgery, which facilitated a faster recovery.
                                  He deeply appreciates the warm and supportive
                                  service from the hospital staff and is pleased
                                  to report that he is now fully fit.
                                </h2>
                              </div>
                            </div>
                            <div className="whychoimgbox2ts">
                              <div className="whychoimgbox2col1ts">
                                <div className="whychoimgts">
                                  <Image
                                    width={400}
                                    height={400}
                                    src="/virtualtour/innertesti.png"
                                    alt="img"
                                  />
                                </div>
                              </div>
                              <div className="whychoimgbox2col2ts">
                                <div className="whychonamejustyts">
                                  <div className="whychonamets">
                                    <h2>Mr. Arvind Kumar </h2>
                                  </div>
                                  <div className="whychonameforts">
                                    <h2></h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="testinewflex">
                      <div className="myovefts">
                        <div className="whychochinewlbo">
                          <div className="whychoslideboxts">
                            <div className="whychobox1ts">
                              <div className="whychospects">
                                <h2>
                                  Mr. Wadekar expresses heartfelt gratitude to
                                  Aditya Birla Memorial Hospital for the
                                  exceptional care provided to his daughter, Ms.
                                  Aditi Wadekar. Thanks to Dr. Prateek Agarwal's
                                  expertise in treating her gastroenterological
                                  issues, Aditi has shown significant
                                  improvements in her health and is now doing
                                  absolutely fine. He also appreciates the warm
                                  and supportive service from the hospital staff
                                  throughout their stay.
                                </h2>
                              </div>
                            </div>
                            <div className="whychoimgbox2ts">
                              <div className="whychoimgbox2col1ts">
                                <div className="whychoimgts">
                                  <Image
                                    width={400}
                                    height={400}
                                    src="/virtualtour/innertesti.png"
                                    alt="img"
                                  />
                                </div>
                              </div>
                              <div className="whychoimgbox2col2ts">
                                <div className="whychonamejustyts">
                                  <div className="whychonamets">
                                    <h2>Aditi Sandeep Wadekar</h2>
                                  </div>
                                  <div className="whychonameforts">
                                    <h2></h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myovefts">
                        <div className="whychochinewlbo">
                          <div className="whychoslideboxts">
                            <div className="whychobox1ts">
                              <div className="whychospects">
                                <h2>
                                  Moumita Mondal expresses heartfelt gratitude
                                  to Aditya Birla Memorial Hospital for the care
                                  given for her dermatology needs. Thanks to Dr.
                                  Snehal Pardeshi's expertise and the right
                                  medication. She is happy with the warm and
                                  supportive service from the hospital staff
                                  throughout her treatment.
                                </h2>
                              </div>
                            </div>
                            <div className="whychoimgbox2ts">
                              <div className="whychoimgbox2col1ts">
                                <div className="whychoimgts">
                                  <Image
                                    width={400}
                                    height={400}
                                    src="/virtualtour/innertesti.png"
                                    alt="img"
                                  />
                                </div>
                              </div>
                              <div className="whychoimgbox2col2ts">
                                <div className="whychonamejustyts">
                                  <div className="whychonamets">
                                    <h2>Ms. Moumita Monda</h2>
                                  </div>
                                  <div className="whychonameforts">
                                    <h2></h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="testinewflex">
                      <div className="myovefts">
                        <div className="whychochinewlbo">
                          <div className="whychoslideboxts">
                            <div className="whychobox1ts">
                              <div className="whychospects">
                                <h2>
                                  Rohit Saboo expresses heartfelt gratitude to
                                  Aditya Birla Memorial Hospital for the care
                                  given to his mother, Mrs. Santosh Saboo.
                                  Thanks to Dr. Avinash Munde's expertise and
                                  the swift response during her emergency. He
                                  also appreciates the warm and supportive
                                  service from the hospital staff throughout
                                  their stay.
                                </h2>
                              </div>
                            </div>
                            <div className="whychoimgbox2ts">
                              <div className="whychoimgbox2col1ts">
                                <div className="whychoimgts">
                                  <Image
                                    width={400}
                                    height={400}
                                    src="/virtualtour/innertesti.png"
                                    alt="img"
                                  />
                                </div>
                              </div>
                              <div className="whychoimgbox2col2ts">
                                <div className="whychonamejustyts">
                                  <div className="whychonamets">
                                    <h2>Mrs. Santosh Saboo</h2>
                                  </div>
                                  <div className="whychonameforts">
                                    <h2></h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myovefts">
                        <div className="whychochinewlbo">
                          <div className="whychoslideboxts">
                            <div className="whychobox1ts">
                              <div className="whychospects">
                                <h2>
                                  Mrs. Asha Kawade expresses heartfelt gratitude
                                  to Aditya Birla Memorial Hospital. Following a
                                  successful hernia operation conducted by Dr.
                                  Manish Srivastava, she commends the hospital
                                  staff, including the cleaning and nursing
                                  teams, for their unwavering support. With a
                                  renewed lease on life, she extends her deepest
                                  thanks to Dr. Srivastava for his expertise and
                                  care, enabling her to embark on a journey of
                                  renewed health and vitality.
                                </h2>
                              </div>
                            </div>
                            <div className="whychoimgbox2ts">
                              <div className="whychoimgbox2col1ts">
                                <div className="whychoimgts">
                                  <Image
                                    width={400}
                                    height={400}
                                    src="/virtualtour/innertesti.png"
                                    alt="img"
                                  />
                                </div>
                              </div>
                              <div className="whychoimgbox2col2ts">
                                <div className="whychonamejustyts">
                                  <div className="whychonamets">
                                    <h2>Mrs. Asha Kawade</h2>
                                  </div>
                                  <div className="whychonameforts">
                                    <h2></h2>
                                  </div>
                                </div>
                              </div>
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
                  data-bs-target="#carouselfordeckstophead"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselfordeckstophead"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="newmobiletist-cont mobilehead">
              <div
                id="carouselExampleIndicatornewtisti"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div>
                      <div className="newtesti-Para">
                        Mrs. Sushila Sawant expresses heartfelt gratitude to
                        Aditya Birla Memorial Hospital for the exceptional care
                        she received during her gastric-related surgery. After a
                        thorough evaluation of her condition, Dr. (Major) Kumar
                        Raushan conducted a successful surgery. She deeply
                        appreciates the warm and supportive service from Dr.
                        Raushan and his team, who helped her recover swiftly.
                      </div>
                      <div className="newtesti-Parawhychoimgts">
                        <Image
                          width={400}
                          height={400}
                          src="/virtualtour/innertesti.png"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h2 className="newtesti-name">Mrs. Sushila Sawant</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont"></h2>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                        Mrs. Vijaymala Name's son expresses heartfelt gratitude
                        to Aditya Birla Memorial Hospital for the exceptional
                        care his mother received during an emergency. He deeply
                        appreciates Dr. Kailas M Jorule's expertise in her
                        successful orthopedic surgery and the supportive staff
                        who made them feel comfortable and assisted with every
                        detail with utmost compassion and care.
                      </div>
                      <div className="newtesti-Parawhychoimgts">
                        <Image
                          width={400}
                          height={400}
                          src="/virtualtour/innertesti.png"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h2 className="newtesti-name">Mrs. Vijaymala Name</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont"></h2>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                        Mr. Sudam Pinjan expresses heartfelt gratitude to Aditya
                        Birla Memorial Hospital for the exceptional dental care
                        he received. Thanks to Dr. Nikhil Dayama, he
                        successfully regained his smile.
                      </div>
                      <div className="newtesti-Parawhychoimgts">
                        <Image
                          width={400}
                          height={400}
                          src="/virtualtour/innertesti.png"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h2 className="newtesti-name">Mr. Sudam Pinjan</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont"></h2>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                        Mr. Arvind Kumar expresses heartfelt gratitude to Aditya
                        Birla Memorial Hospital for the exceptional care he
                        received during his Hernia surgery. Under the guidance
                        of Dr. Suprashant D Kulkarni, he underwent successful
                        robotic surgery, which facilitated a faster recovery. He
                        deeply appreciates the warm and supportive service from
                        the hospital staff and is pleased to report that he is
                        now fully fit.
                      </div>
                      <div className="newtesti-Parawhychoimgts">
                        <Image
                          width={400}
                          height={400}
                          src="/virtualtour/innertesti.png"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h2 className="newtesti-name">Mr. Arvind Kumar</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont"></h2>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                        Mr. Wadekar expresses heartfelt gratitude to Aditya
                        Birla Memorial Hospital for the exceptional care
                        provided to his daughter, Ms. Aditi Wadekar. Thanks to
                        Dr. Prateek Agarwal's expertise in treating her
                        gastroenterological issues, Aditi has shown significant
                        improvements in her health and is now doing absolutely
                        fine. He also appreciates the warm and supportive
                        service from the hospital staff throughout their stay.
                      </div>
                      <div className="newtesti-Parawhychoimgts">
                        <Image
                          width={400}
                          height={400}
                          src="/virtualtour/innertesti.png"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h2 className="newtesti-name">Aditi Sandeep Wadekar</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont"></h2>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                        Moumita Mondal expresses heartfelt gratitude to Aditya
                        Birla Memorial Hospital for the care given for her
                        dermatology needs. Thanks to Dr. Snehal Pardeshi's
                        expertise and the right medication. She is happy with
                        the warm and supportive service from the hospital staff
                        throughout her treatment.
                      </div>
                      <div className="newtesti-Parawhychoimgts">
                        <Image
                          width={400}
                          height={400}
                          src="/virtualtour/innertesti.png"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h2 className="newtesti-name">Ms. Moumita Monda</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont"></h2>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                        Rohit Saboo expresses heartfelt gratitude to Aditya
                        Birla Memorial Hospital for the care given to his
                        mother, Mrs. Santosh Saboo. Thanks to Dr. Avinash
                        Munde's expertise and the swift response during her
                        emergency. He also appreciates the warm and supportive
                        service from the hospital staff throughout their stay.
                      </div>
                      <div className="newtesti-Parawhychoimgts">
                        <Image
                          width={400}
                          height={400}
                          src="/virtualtour/innertesti.png"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h2 className="newtesti-name">Mrs. Santosh Saboo</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont"></h2>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                        Mrs. Asha Kawade expresses heartfelt gratitude to Aditya
                        Birla Memorial Hospital. Following a successful hernia
                        operation conducted by Dr. Manish Srivastava, she
                        commends the hospital staff, including the cleaning and
                        nursing teams, for their unwavering support. With a
                        renewed lease on life, she extends her deepest thanks to
                        Dr. Srivastava for his expertise and care, enabling her
                        to embark on a journey of renewed health and vitality.
                      </div>
                      <div className="newtesti-Parawhychoimgts">
                        <Image
                          width={400}
                          height={400}
                          src="/virtualtour/innertesti.png"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h2 className="newtesti-name">Mrs. Asha Kawade </h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont"></h2>
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
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicatornewtisti"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
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

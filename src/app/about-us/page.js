

"use client";

import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './about-us.css'


const Aboutus = () => {


  return (


    <>
    <title>About Us</title>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / <span className="breadcrumbsactive">About Us</span>
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
      {/* about us pg start*/}
      <div className="fullwithcont">
        <div className="customcontainer2">
          <div className="aboutuscont">
            <h1 className="onemandreamhead">One man’s dream, every man’s hope!</h1>
            <div className="aboutslider">
              <div
                id="carouselExampleIndicators60"
                className="carousel slide carousel-fade"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators60"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators60"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators60"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="aboutslidercontloop bgslidegray">
                      <div className="aboutslidercontloop1">
                        <div className="abouttopslidehead">
                          <h2>About shri late Aditya Vikram Birla</h2>
                        </div>
                        <div className="abouttopslidepara">
                          <p>
                            Aditya Birla Memorial Hospital is a homage and tribute
                            to late Shri Aditya Vikram Birla. He had envisioned a
                            world-class hospital in India. His vision has taken
                            shape in the form of a medicity sprawled over 16 acres
                            of land.
                          </p>
                          <p>
                            This medicity is a super specialty healthcare facility
                            to cater to the needs of all sections of society. The
                            hospital’s mission: Compassionate Quality Healthcare.
                          </p>
                        </div>
                      </div>
                      <div className="aboutslidercontloop2">
                        <Image width={400} height={400}
                          src="/aboutusimg/abouttopslide1.png"
                          className="abouttopslide"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="aboutslidercontloop bgslideRed">
                      <div className="aboutslidercontloop1">
                        <div className="abouttopslidehead">
                          <h2>About shri late Aditya Vikram Birla</h2>
                        </div>
                        <div className="abouttopslidepara">
                          <p>
                            Aditya Birla Memorial Hospital is a homage and tribute
                            to late Shri Aditya Vikram Birla. He had envisioned a
                            world-class hospital in India. His vision has taken
                            shape in the form of a medicity sprawled over 16 acres
                            of land.
                          </p>
                          <p>
                            This medicity is a super specialty healthcare facility
                            to cater to the needs of all sections of society. The
                            hospital’s mission: Compassionate Quality Healthcare.
                          </p>
                        </div>
                      </div>
                      <div className="aboutslidercontloop2">
                        <Image width={400} height={400}
                          src="/aboutusimg/abouttopslide1.png"
                          className="abouttopslide"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="aboutslidercontloop bgslideOrange">
                      <div className="aboutslidercontloop1">
                        <div className="abouttopslidehead">
                          <h2>About shri late Aditya Vikram Birla</h2>
                        </div>
                        <div className="abouttopslidepara">
                          <p>
                            Aditya Birla Memorial Hospital is a homage and tribute
                            to late Shri Aditya Vikram Birla. He had envisioned a
                            world-class hospital in India. His vision has taken
                            shape in the form of a medicity sprawled over 16 acres
                            of land.
                          </p>
                          <p>
                            This medicity is a super specialty healthcare facility
                            to cater to the needs of all sections of society. The
                            hospital’s mission: Compassionate Quality Healthcare.
                          </p>
                        </div>
                      </div>
                      <div className="aboutslidercontloop2">
                        <Image width={400} height={400}
                          src="/aboutusimg/abouttopslide1.png"
                          className="abouttopslide"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators60"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true">
                    <Image width={400} height={400} src="/aboutusimg/nextleft.png" alt="img" />
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators60"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true">
                    <Image width={400} height={400} src="/aboutusimg/nextright.png" alt="img" />
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="visionmissparn">
            <div className="visionmiss">
              <div className="visionstylehead">
                <div className="Specialtiesheaddum">
                  <h2>Vision &amp; Mission</h2>
                  <span className="headbordervision" />
                </div>
              </div>
              <div className="vissionandmission">
                <div className="vissionandmission1">
                  <div className="vismiscon">
                    <div className="vismisconhead">
                      <Image width={400} height={400} src="/aboutusimg/vissionarrow.png" alt="img" />
                      <span className="vismiheadimg">Our Vision</span>
                    </div>
                    <div className="vismispara">
                      <p>
                        The hospital is committed to maintain the highest standard
                        of care and respond to the needs of the community in a
                        compassionate manner.
                      </p>
                      <p>
                        To provide state-of-the-art, high quality and cost-effective
                        healthcare services and latest information to improve and
                        maintain health for the well-being of the community.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="vissionandmission2">
                  <Image width={400} height={400} src="/aboutusimg/vissionmissionlogo.png" alt="img" />
                </div>
                <div className="vissionandmission3">
                  <div className="vismiscon">
                    <div className="vismisconhead">
                      <Image width={400} height={400} src="/aboutusimg/missionear.png" alt="img" />
                      <span className="vismiheadimg">Our Mission</span>
                    </div>
                    <div className="vismispara">
                      <p>
                        To unrelentingly pursue the creation of value for our
                        customers, shareholders, employees and society at large.
                      </p>
                      <p>
                        To foster a therapeutic relationship based on compassion
                        that is felt, quality that is measurable and cost that is
                        affordable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parentcontainerwhi bodofdirredbg">
        <div className="customcontainer">
          <div className="BoardofDirectors">
            <div className="Specialtiespartbof">
              <div className="Specialtiesheadbof">
                <h2 className="oursepperbof">Our Specialties</h2>
                <span className="headborderbof" />
              </div>
            </div>
            <div className="bodofdirdata">
              <div className="bodofdirdata1">
                <p className="bodpar">
                  Aditya Birla Health Services Ltd is under the stewardship of a
                  distinguished Board of Directors, led by Chairperson Smt.
                  Rajashree Birla and Director Shri Ashkaran Agarwal.Aditya Birla
                  Health Services Ltd is under the stewardship of a distinguished
                  Board of Directors, led by Chairperson Smt. Rajashree Birla and
                  Director Shri Ashkaran Agarwal.Aditya Birla Health Services Ltd is
                  under the stewardship of a distinguished Board of Directors, led
                  by Chairperson Smt. Rajashree Birla and Director Shri Ashkaran
                  Agarwal.
                </p>
              </div>
              <div className="bodofdirdata2">
                <div className="bodprofilbox">
                  <div className="bodprofiloop">
                    <Image width={400} height={400}
                      className="bodprofileimg"
                      src="/aboutusimg/Smt-Rajashree-Birla.png"
                      alt="img"
                    />
                    <div className="bodname">Smt. Rajashree Birla</div>
                    <div className="boddesignam">Chairperson</div>
                    <a className="bodnowmorebtn" href="">
                      Know more
                    </a>
                  </div>
                  <div className="bodprofiloop">
                    <Image width={400} height={400}
                      className="bodprofileimg"
                      src="/aboutusimg/Shri-Ashkaran-Agarwal.png"
                      alt="img"
                    />
                    <div className="bodname">Shri Ashkaran Agarwal</div>
                    <div className="boddesignam">Director</div>
                    <a className="bodnowmorebtn" href="">
                      Know more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="BoardofDirectors">
            <div className="Specialtiespartbof">
              <div className="Specialtiesheadbof">
                <h2 className="oursepperbofbalc">Executive Management</h2>
                <span className="headborderbof" />
              </div>
            </div>
            <div className="bodofdirdatanew">
              <div className="bodofdirdat2anew">
                <div className="bodprofilbox">
                  <div className="bodprofiloop">
                    <Image width={400} height={400}
                      className="bodprofileimg"
                      src="/aboutusimg/Rekha-Dubey.png"
                      alt="img"
                    />
                    <div className="bodname">Rekha Dubey</div>
                    <div className="boddesignam">Chief Executive Officer</div>
                    <a className="bodnowmorebtn" href="">
                      Know more
                    </a>
                  </div>
                  <div className="bodprofiloop">
                    <Image width={400} height={400}
                      className="bodprofileimg"
                      src="/aboutusimg/Dr-Rajshekhar-Iyer.png"
                      alt="img"
                    />
                    <div className="bodname">Dr. Rajshekhar Iyer</div>
                    <div className="boddesignam">Medical Advisor</div>
                    <a className="bodnowmorebtn" href="">
                      Know more
                    </a>
                  </div>
                  <div className="bodprofiloop">
                    <Image width={400} height={400}
                      className="bodprofileimg"
                      src="/aboutusimg/Dr-Ashutosh-Srivastava.png"
                      alt="img"
                    />
                    <div className="bodname">Dr. Ashutosh Srivastava</div>
                    <div className="boddesignam">Medical Director</div>
                    <a className="bodnowmorebtn" href="">
                      Know more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parentcontainerwhi bodofdirredbg">
        <div className="customcontainer">
          <div className="BoardofDirectors">
            <div className="Specialtiespartbof">
              <div className="Specialtiesheadbof">
                <h2 className="oursepperbof">Awards &amp; Accreditations</h2>
                <span className="headborderbof" />
              </div>
            </div>
            <div className="bodofdirdatasliderpara">
              <p>
                Aditya Birla Memorial Hospital is the first hospital in India to be
                accredited the ISO 22000:2005, HACCP. Committed to compassionate,
                quality healthcare at an affordable cost, the hospital has been
                certified and awarded by several industrial bodies.
              </p>
            </div>
            <div className="awarslider">
              <div
                id="carouselExampleIndicators61"
                className="carousel slide carousel-fade"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators61"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators61"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators61"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="awarsliderbox">
                      <Image width={400} height={400}
                        className="awarandaccimg"
                        src="/aboutusimg/awardandacclogo1.png"
                        alt="img"
                      />
                      <div className="awadandacchead">
                        The Australian Council on Healthcare Standards (ACHS )2
                      </div>
                      <div className="awadandaccpara">
                        Aditya Birla Memorial Hospital is the first hospital to
                        achieve accreditation from Australian Council on Healthcare
                        Standards (ACHS) with extensive achievement under Equip7
                        program with advanced Person Centred Systems
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="awarsliderbox">
                      <Image width={400} height={400}
                        className="awarandaccimg"
                        src="/aboutusimg/awardandacclogo1.png"
                        alt="img"
                      />
                      <div className="awadandacchead">
                        The Australian Council on Healthcare Standards (ACHS )
                      </div>
                      <div className="awadandaccpara">
                        Aditya Birla Memorial Hospital is the first hospital to
                        achieve accreditation from Australian Council on Healthcare
                        Standards (ACHS) with extensive achievement under Equip7
                        program with advanced Person Centred Systems
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="awarsliderbox">
                      <Image width={400} height={400}
                        className="awarandaccimg"
                        src="/aboutusimg/awardandacclogo1.png"
                        alt="img"
                      />
                      <div className="awadandacchead">
                        The Australian Council on Healthcare Standards (ACHS )
                      </div>
                      <div className="awadandaccpara">
                        Aditya Birla Memorial Hospital is the first hospital to
                        achieve accreditation from Australian Council on Healthcare
                        Standards (ACHS) with extensive achievement under Equip7
                        program with advanced Person Centred Systems
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators61"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true">
                    <Image width={400} height={400} src="/aboutusimg/nextleft.png" alt="img" />
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators61"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true">
                    <Image width={400} height={400} src="/aboutusimg/nextright.png" alt="img" />
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>




  );


};



export default Aboutus;

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import "./virtual-tour.css";

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

            {/* for deckstop slider start */}
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
                                  I am glad to have met Dr Anand Vijay in Aditya
                                  Birla for my mother&apos;s treatment. She was
                                  suffering from ILD and was in a very serious
                                  condition when we admitted her. Dr. Vijay not
                                  only helped her from the life-threatening
                                  situation but now it&apos;s been 3 years since
                                  discharge and she has been really recovering
                                  well. Thanks to the doctor and Birla for
                                  everything!
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
                                    <h2>Suraj Nair </h2>
                                  </div>
                                  <div className="whychonameforts">
                                    <h2>Practo</h2>
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
                                  The doctor is very cool and calm. Explains the
                                  treatment to be given to patients and
                                  relatives very politely. Keep up with your
                                  good job sir. All the best for your future
                                  sir.
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
                                    <h2>Vijay Divate </h2>
                                  </div>
                                  <div className="whychonameforts">
                                    <h2>Practo</h2>
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
                                  Dr. Prateek Agarwal and the Aditya Birla
                                  Hospital team successfully rescued Dhanraj
                                  Pawar from the brink of death and subsequently
                                  cured him. I extend heartfelt gratitude to
                                  everyone for their exceptional cooperation.
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
                                    <h2>Lalit Pawar </h2>
                                  </div>
                                  <div className="whychonameforts">
                                    <h2> Google </h2>
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
                                  One of the best hospitals in India. They
                                  provide the best Doctor treatment with quality
                                  service. I had a very good experience when I
                                  admitted my both daughter&apos;s last days. All
                                  staff are very supportive and solved our
                                  doubts and all queries.
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
                                    <h2>Anil Singh </h2>
                                  </div>
                                  <div className="whychonameforts">
                                    <h2>Google </h2>
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
                                  The dental treatment, carried out by
                                  specialist doctors, was done with extreme care
                                  and precision. Quality was maintained in every
                                  aspect integrally. The pathological tests,
                                  other test areas and staff work were carried
                                  out with careful nature and highness
                                  maintained. Thanks to the doctors and all
                                  concerned staff for their dedication.
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
                                    <h2>Milind Vaidya </h2>
                                  </div>
                                  <div className="whychonameforts">
                                    <h2>Google </h2>
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
                                  I&apos;ve been spending quite a bit of time at
                                  Aditya Birla Memorial Hospital lately due to
                                  my nephew&apos;s stomach surgery, and I must say,
                                  it&apos;s been quite a positive experience. The
                                  staff members are incredibly friendly, and the
                                  facilities are top-notch. The doctors handle
                                  every situation with grace and are always
                                  respectful towards their patients.
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
                                    <h2>Ashish Singh </h2>
                                  </div>
                                  <div className="whychonameforts">
                                    <h2>Google </h2>
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
                                  It was a wonderful experience at the wellness
                                  department, staff were excellent throughout
                                  the health checkup process. Must recommend my
                                  family relatives and friends for health
                                  checkups. World-class facilities under the
                                  same department with brilliant and
                                  hard-working teams.
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
                                    <h2>Akshay </h2>
                                  </div>
                                  <div className="whychonameforts">
                                    <h2>Google</h2>
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
                                  This is one of the best hospitals in Pune,
                                  ideal for treating several different types of
                                  problems. My father underwent nose surgery
                                  here. Doctors here performed the procedure
                                  perfectly. It is one of a kind because of the
                                  cleanliness of the hospital and the
                                  courteousness of the staff. I highly recommend
                                  it to everyone.
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
                                    <h2>Prince Maantech </h2>
                                  </div>
                                  <div className="whychonameforts">
                                    <h2>Google </h2>
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
            {/* for deckstop slider end */}

            {/* for mobile slider start */}
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
                        I am glad to have met Dr Anand Vijay in Aditya Birla for
                        my mother&apos;s treatment. She was suffering from ILD and
                        was in a very serious condition when we admitted her.
                        Dr. Vijay not only helped her from the life-threatening
                        situation but now it&apos;s been 3 years since discharge and
                        she has been really recovering well. Thanks to the
                        doctor and Birla for everything!
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
                        <h2 className="newtesti-name">Suraj Nair</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont">Practo</h2>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                        The doctor is very cool and calm. Explains the treatment
                        to be given to patients and relatives very politely.
                        Keep up with your good job sir. All the best for your
                        future sir.
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
                        <h2 className="newtesti-name">Vijay Divate</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont">Practo</h2>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                        Dr. Prateek Agarwal and the Aditya Birla Hospital team
                        successfully rescued Dhanraj Pawar from the brink of
                        death and subsequently cured him. I extend heartfelt
                        gratitude to everyone for their exceptional cooperation.
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
                        <h2 className="newtesti-name">Lalit Pawar</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont">Google</h2>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                        One of the best hospitals in India. They provide the
                        best Doctor treatment with quality service. I had a very
                        good experience when I admitted my both daughter&apos;s last
                        days. All staff are very supportive and solved our
                        doubts and all queries.
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
                        <h2 className="newtesti-name">Anil Singh</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont">Google</h2>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                        The dental treatment, carried out by specialist doctors,
                        was done with extreme care and precision. Quality was
                        maintained in every aspect integrally. The pathological
                        tests, other test areas and staff work were carried out
                        with careful nature and highness maintained. Thanks to
                        the doctors and all concerned staff for their
                        dedication.
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
                        <h2 className="newtesti-name">Milind Vaidya</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont">Google</h2>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                        I&apos;ve been spending quite a bit of time at Aditya Birla
                        Memorial Hospital lately due to my nephew&apos;s stomach
                        surgery, and I must say, it&apos;s been quite a positive
                        experience. The staff members are incredibly friendly,
                        and the facilities are top-notch. The doctors handle
                        every situation with grace and are always respectful
                        towards their patients.
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
                        <h2 className="newtesti-name">Ashish Singh</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont">Google</h2>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                        It was a wonderful experience at the wellness
                        department, staff were excellent throughout the health
                        checkup process. Must recommend my family relatives and
                        friends for health checkups. World-class facilities
                        under the same department with brilliant and
                        hard-working teams.
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
                        <h2 className="newtesti-name">Akshay</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont">Google</h2>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div>
                      <div className="newtesti-Para">
                        This is one of the best hospitals in Pune, ideal for
                        treating several different types of problems. My father
                        underwent nose surgery here. Doctors here performed the
                        procedure perfectly. It is one of a kind because of the
                        cleanliness of the hospital and the courteousness of the
                        staff. I highly recommend it to everyone.
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
                        <h2 className="newtesti-name">Prince Maantech</h2>
                      </div>
                      <div>
                        <h2 className="newtesti-cont">Google</h2>
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
            {/* for mobile slider end */}
          </div>
        </div>
      </div>
      {/* Hospirtal testimonials   end*/}
    </>
  );
};

export default Virtualtour;

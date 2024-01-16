

"use client";

import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './achiv-accre.css'


const Accreditations = () => {


  useEffect(() => {


    // window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll

  }, []);



  return (


    <>
      <title>Accreditations & Certifications</title>
      <meta name="description" content="" />
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  About Us / <span className="breadcrumbsactive">Accreditations & Certifications</span>
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
          <Image width={2000} height={400} src="/commonimages/commdummybanner.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}
      {/* about us pg start*/}


      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="AchiveandAcrre">
            <div className="Specialtiespartbof">
              <div className="Specialtiesheadbof">
                <h1 className="oursepperbof">Accreditations & Certifications</h1>
                <span className="headborderbof" />
              </div>
            </div>
            <div className="AchiveandAcrrepara mt-3 mb-2">
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
                        src="/aboutusimg/NABH-Logo_new-1.png"
                        alt="img"
                      />
                      <div className="awadandacchead">
                        National Accreditation Board for Hospitals & Healthcare Providers (NABH)
                      </div>
                      <div className="awadandaccpara">
                        The board while being supported by all stakeholders including industry, consumers, government, have full functional autonomy in its operation.
                      </div>
                      <div className="awadandaccpara">
                        For more information on NABH accreditation, log onto:&nbsp;<a href="https://nabh.co/" target="_blank" rel="noopener noreferrer">www.nabh.co</a>
                      </div>

                    </div>
                  </div>

                  <div className="carousel-item ">
                    <div className="awarsliderbox">
                      <Image width={400} height={400}
                        className="awarandaccimg"
                        src="/aboutusimg/HACCP.png"
                        alt="img"
                      />
                      <div className="awadandacchead">
                        ISO 22000 & 2005: HACCP (Hazard Analysis and Critical Control Point) by BSI
                      </div>
                      <div className="awadandaccpara">
                        Aditya Birla Memorial Hospital has become the&nbsp;<strong>first hospital in INDIA</strong>&nbsp;to have got certified by&nbsp;<strong>ISO 22000 &amp; 2005</strong>: HACCP.
                        ISO 22000:2005 specifies requirements for a food safety management system where an organization in the food chain needs to demonstrate its ability to control food safety hazards in order to ensure that food is safe at the time of human consumption.
                        The ISO 22000: 2005 Food Safety Management system is a structured, preventive approach to food safety that optimizes efforts to provide the consumer with safe food.
                      </div>


                      <div className="collapse" id="collapseExample">
                        <div className="">

                          <div className="awadandaccpara">
                            HACCP (Hazard Analysis and Critical Control Point) is a systematic approach in identifying, evaluating and controlling food safety hazards. Food safety hazards are biological, chemical or physical agents that are reasonably likely to cause illness or injury in the absence of their control. A HACCP system is a preventive system of hazard control rather than a reactive one. HACCP systems are designed to prevent the occurrence of potential food safety problems. This is achieved by assessing the inherent hazards attributable to a product or a process, determining the necessary steps that will control the identified hazards, and implementing active managerial control practices to ensure that the hazards are eliminated or minimized.
                          </div>
                          <div className="awadandaccpara">
                            HACCP principles were developed by Codex Alimentarius of the World Health Organization. The certification process involved audits conducted by British Standards International (BSI,) Assurance UK Limited. The certification ensures that protocol for managing food safety is being adhered to in order to ensure safe food.
                          </div>
                          <div className="awadandaccpara">
                            For more information on ISO 22000 &amp; 2005: HACCP accreditation, log on to&nbsp;<a href="http://www.iso.org/" target="_blank" rel="noopener noreferrer">www.iso.org</a>&nbsp;and&nbsp;<a href="http://www.fda.gov/" target="_blank" rel="noopener noreferrer">www.fda.gov</a>
                          </div>

                        </div>
                      </div>



                      <button className="accredreadmorbtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Read More
                      </button>

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


      {/* <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="AchiveandAcrre">
            <div className="Specialtiespartbof">
              <div className="Specialtiesheadbof">
                <h1 className="oursepperbof">Awards - A tribute to team work and commitment</h1>
                <span className="headborderbof" />
              </div>
            </div>
            <div className="AchiveandAcrrepara mt-3 mb-2">
              <p>
                1. Best Trauma Care Hospital - World Safety Organization: National Office For India State Level OHS&E Awards
              </p>
              <p>
                2. Pune Times Mirror Achievers Award (Pimpri-Chinchwad)
              </p>
              <p>
                3. AHPI Award - Patient Friendly Hospital
              </p>
              <p>
                4. World Safety Organization - Digital India Contributor Award
              </p>
              <p>
                5. World Safety Organization - Service Excellence Award
              </p>
              <p>
                6. Healthcare Award - Best Hospital: Obstetrics & Gynaecology(Obgyn)
              </p>
            </div>



          </div>
        </div>
      </div> */}




      {/*hide for approval*/}

      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="AchiveandAcrre">
            <div className="Specialtiespartbof">
              <div className="Specialtiesheadbof">
                <h1 className="oursepperbof">Awards - A tribute to team work and commitment</h1>
                <span className="headborderbof" />
              </div>
            </div>

            <div className="AchiveandAcrrepara mt-3 mb-2">


              <div className="abmhAwardSlide">


                <div
                  id="carouselExampleIndicatorsAW"
                  className="carousel slide carousel-fade"
                >

                  <div className="carousel-inner">


                    <div className="carousel-item active">
                      <div className="abmhAwardSlidebox">
                        <Image width={400} height={400}
                          className="abmhAwardSlideimg"
                          src="/aboutusimg/AWARDS1.jpg"
                          alt="img"
                        />
                        <div className="abmhAwardSlidehead">
                          1. Best Trauma Care Hospital - World Safety Organization: National Office For India State Level OHS&E Awards
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="abmhAwardSlidebox">
                        <Image width={400} height={400}
                          className="abmhAwardSlideimg"
                          src="/aboutusimg/AWARDS2.jpg"
                          alt="img"
                        />
                        <div className="abmhAwardSlidehead">
                          2. Pune Times Mirror Achievers Award (Pimpri-Chinchwad)
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="abmhAwardSlidebox">
                        <Image width={400} height={400}
                          className="abmhAwardSlideimg"
                          src="/aboutusimg/AWARDS3.jpg"
                          alt="img"
                        />
                        <div className="abmhAwardSlidehead">
                          3. AHPI Award - Patient Friendly Hospital
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="abmhAwardSlidebox">
                        <Image width={400} height={400}
                          className="abmhAwardSlideimg"
                          src="/aboutusimg/AWARDS4.jpg"
                          alt="img"
                        />
                        <div className="abmhAwardSlidehead">
                          4. World Safety Organization - Digital India Contributor Award
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="abmhAwardSlidebox">
                        <Image width={400} height={400}
                          className="abmhAwardSlideimg"
                          src="/aboutusimg/AWARDS5.jpg"
                          alt="img"
                        />
                        <div className="abmhAwardSlidehead">
                          5. World Safety Organization - Service Excellence Award
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="abmhAwardSlidebox">
                        <Image width={400} height={400}
                          className="abmhAwardSlideimg"
                          src="/aboutusimg/AWARDS6.jpg"
                          alt="img"
                        />
                        <div className="abmhAwardSlidehead">
                          6. Healthcare Award - Best Hospital: Obstetrics & Gynaecology(Obgyn)
                        </div>
                      </div>
                    </div>


                  </div>


                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicatorsAW"
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
                    data-bs-target="#carouselExampleIndicatorsAW"
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
      </div>


    </>




  );


};



export default Accreditations;

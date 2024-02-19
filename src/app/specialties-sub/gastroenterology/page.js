
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Dentistry = () => {


  // store data here
  const [data, setData] = useState(['']);

  // for profile late loading
  const [isLoading, setIsLoading] = useState(true); // Declare the isLoading variable

  //---- for api data


  useEffect(() => {

    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll
    
    // api for profile


    async function fetchData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_Web_Domin}/api/profilebyspecilitypage`, {
          method: "POST",
          body: JSON.stringify({
            usersearch: "38",
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        // Wait for API response to return before initializing the slider
        // await new Promise((resolve) => setTimeout(resolve, 500));

        setData(result.data);
        setIsLoading(false);
        console.log(result.data);
      } catch (error) {
        console.error(error);
      }
    }


    fetchData();


    // api for profile



  }, []);

  // Group profiles into sets of three
  const groupedProfiles = data.reduce((accumulator, profile, index) => {
    if (index % 3 === 0) {
      accumulator.push([profile]);
    } else {
      accumulator[accumulator.length - 1].push(profile);
    }
    return accumulator;
  }, []);


  return (


    <>
      <title>Specialty</title>

      {/* common heading div start*/}
      {/* <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Dentistry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* common heading div end*/}
      {/* common heading banner start */}
      {/* <div className="mainheadingbanner">
        <div className="mainheadingbandiv">
          <Image width={2000} height={400} src="/specialityviewimag/Multi-specialities-banner.jpg" alt="icon" />
        </div>
      </div> */}
      {/* common heading banner end */}


      {/* team of expert slider start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleDoclist">
            <div className="Specialtiesheadgr">
              <h2 className="spetileh1gr">Our Team Of Experts</h2>
              <span className="headbordergr" />
            </div>


            <div className="ourteamparsingle">

              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >

                <div className="carousel-inner">


                  {isLoading ? (
                    <div className="loading-message">Loading doctors...</div>
                  ) : data.length === 0 ? (
                    <div className="empty-message">No doctors found</div>
                  ) : (
                    groupedProfiles.map((item, index) => (
                      <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <div className="row mycentr">
                          {item.map((profile, profileIndex) => (


                            <div className="ourteamslidchilbosingle" key={profileIndex}>

                              <Link href={`/doctor-profile?doc=${profile.DoctorNameSlug}`}>
                                <div className="ourteamslidebox">
                                  <div className="ourteambox1single">
                                    <div className="ourteamimg">
                                      <Image width={400} height={400} src={`/DoctorsProfileimages/${profile.DoctorProfileImage}`} alt="img" />
                                    </div>
                                    <div className="ourteamnamesing">
                                      <h2>Dr. {profile.DoctorFName} {profile.DoctorLName}</h2>
                                    </div>
                                    <div className="ourteamspec">
                                      <h2>{profile.DoctorDesignation}</h2>
                                    </div>
                                    <div className="ourteamexpi">
                                      <h2>{profile.DoctorExperience}</h2>
                                    </div>
                                  </div>
                                  <div className="ourteambox2">
                                    <div className="ourteambox2flex">

                                      <Link className="bookappoteam" href={`/doctor-profile?doc=${profile.DoctorNameSlug}`}>
                                        View Profile
                                      </Link>

                                    </div>
                                  </div>
                                </div>
                              </Link>

                            </div>


                          ))}
                        </div>
                      </div>
                    ))
                  )}




                </div>



                {data.length > 3 && (
                  <>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span className="carousel-control-prev-icon smallimg" aria-hidden="true">
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
                      <span className="carousel-control-next-icon smallimg" aria-hidden="true">
                        <Image width={400} height={400} src="/homeimg/nextright.png" alt="img" />
                      </span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </>
                )}



              </div>





            </div>

          </div>
        </div>
      </div>
      {/* team of expert slider end*/}


      {/* specialties  start*/}



      {/* hide for apporval*/}

      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">

            <div className="spectitleimgbox">

              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Gastroenterology</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  The Gastroenterology Department at Aditya Birla Memorial Hospital features modern infrastructure and cutting-edge equipment. Our dedicated team of gastroenterologists specializes in diagnosing and treating a broad spectrum of gastrointestinal disorders, ensuring comprehensive care for digestive well-being in both children and adults.
                </p>
              </div>
              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h2 className="spetileh2gr">Procedures & treatment</h2>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  1)	Interventional Gastroenterology:
                </p>
                <ul>
                  <li>Endoscopic Retrograde Cholangiopancreatography (ERCP): Diagnosis and treatment of bile and pancreatic duct disorders.</li>
                  <li>Endoscopic Ultrasound (EUS): Advanced imaging for diagnostic and therapeutic purposes.</li>
                </ul>
                <p className="specilpara">
                  2) Bariatric Endoscopy:
                </p>
                <ul>
                  <li>Intragastric Balloon Placement: Non-surgical weight loss procedure involving the placement of a balloon in the stomach.</li>
                </ul>
                <p className="specilpara">
                  3)	Diagnostic Procedures:
                </p>
                <ul>
                  <li>Endoscopy: Upper endoscopy (EGD) and colonoscopy for visual examination of the upper and lower gastrointestinal tract.</li>
                  <li>Capsule Endoscopy: Swallowable capsule cameras to capture images of the small intestine.</li>
                </ul>
                <p className="specilpara">
                  4)	Preventive Care:
                </p>
                <ul>
                  <li>Colorectal Cancer Screening: Colonoscopies and other screening methods to detect and prevent colorectal cancer.</li>
                  <li>Liver Disease Screening: Evaluation and management of liver diseases, including viral hepatitis and fatty liver disease.</li>
                </ul>
                <p className="specilpara">5) Treatment of Gastrointestinal Conditions:</p>
                <ul>
                  <li>Inflammatory Bowel Disease (IBD) Management: Comprehensive care for conditions like Crohn&apos;s disease and ulcerative colitis.</li>
                  <li>Irritable Bowel Syndrome (IBS) Management: Diagnosis and treatment of IBS symptoms to improve quality of life.</li>
                  <li>Gastroesophageal Reflux Disease (GERD) Management: Treatment of chronic acid reflux and related conditions.</li>
                </ul>
                <p className="specilpara">6) Liver Disease Management:</p>
                <ul>
                  <li>Hepatitis Treatment: Diagnosis and management of viral hepatitis (Hepatitis B and C).</li>
                  <li>Cirrhosis Management: Multidisciplinary care for patients with advanced liver disease.</li>
                </ul>
                <p className="specilpara">7) Gallbladder and Pancreatic Care:</p>
                <ul>
                  <li>Gallstone Management: Diagnosis and treatment of gallstones, including surgical options.</li>
                  <li>Pancreatitis Management: Evaluation and management of inflammation of the pancreas.</li>
                </ul>
                <p className="specilpara">8) Motility Disorders:</p>
                <ul>
                  <li>Esophageal Motility Studies: Assessment and treatment of disorders affecting the movement of the esophagus.</li>
                  <li>Small Bowel Motility Studies: Evaluation of small bowel movement disorders, like gastro paresis.</li>
                </ul>

              </div>
              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Advanced Technology & Facilities</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  <b>Nutritional Counseling</b> Our dieticians play a crucial role in gastroenterology care, providing comprehensive nutritional assessments. They identify malnutrition, plan dietary interventions, manage symptoms, support treatment, and monitor response, optimizing patient outcomes and improving the quality of life for those with gastrointestinal disorders
                </p>
              </div>

            </div>


          </div>
        </div>
      </div>


      {/* specialties end*/}
    </>




  );


};



export default Dentistry;


"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Genetics = () => {


  // store data here
  const [data, setData] = useState(['']);

  // for profile late loading
  const [isLoading, setIsLoading] = useState(true); // Declare the isLoading variable

  //---- for api data


  useEffect(() => {


    // api for profile


    async function fetchData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_Web_Domin}/api/profilebyspecilitypage`, {
          method: "POST",
          body: JSON.stringify({
            usersearch: "cardiology",
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
      <title>Genetics</title>

      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Genetics</span>
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
          <Image width={2000} height={400} src="/specialityviewimag/Multi-specialities-banner.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}


      {/* specialties  start*/}


      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">
            <div className="spectitle">
              <h1 className="spetileh1">Genetics</h1>
            </div>
            <div className="spectitleimgbox">
              <div className="spectitleimgbox1">
                <Image width={400} height={400} src="/specialityviewimag/cardiospeimg.png" alt="img" />
              </div>
              <div className="spectitleimgbox2">
                <p className="specilpara">
                  <b>Dummy- The Aditya Birla Memorial Hospital</b> department of
                  Anesthesiology boasts of trained academicians who conduct DNB/CPS
                  courses in Anaesthesiology, in addition to being skilled
                  anesthesiologist.
                </p>
                <p className="specilpara">
                  Anesthesia is the administration of general anesthetic agents that
                  make a person unconscious and unable to feel pain – often used
                  during operative procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="parentcontainerwhi specipgGRY">
          <div className="customcontainer">
            <div className="spectitlepara">
              <div className="spectitle Specialtiesheadgr">
                <h1 className="spetileh2gr">Do You Need Genetic Counseling?</h1>
                <span className="headbordergr" />
              </div>
              <p className="specilpara">
                <b>PRECONCEPTION OR IN EARLY PREGNANCY</b> –
                <br />
                Infertility, multiple abortions, still births, previous child with
                intellectual disability/ short stature or learning disability, with
                suspected genetic disorder, advanced maternal age, pregnancy with
                positive triple/ quadruple test, fetus diagnosed with congenital
                malformation, marriage in blood relatives or couple being known
                carriers for genetic disorder i.e. thalassemia.
              </p>
              <p className="specilpara">
                <b>IN PAEDIATRIC AGE GROUP</b> –
                <br />
                Developmental delay, intellectual disability, autism, congenital
                malformations (congenital heart disease, cleft lip and /or palate),
                short stature etc.
              </p>
              <p className="specilpara">
                <b>IN ADULTS</b> –
                <br />
                Familial or early onset of cancer, multiple family members affected
                similar type of symptoms etc.
                <br />
                Timely diagnosis and intervention may help to prevent future
                recurrences in the family.
                <br />
                In cases of cancers, it might help you in deciding prophylactic and
                treatment options.
                <br />
                Consultation with a medical geneticist should be done in a timely
                manner, so that appropriate genetic work-up may be planned.
              </p>
              <p className="specilpara">
                <b>Dr. Meenal Agarwal</b>
                <br />
                <b>MD (Obstetrics and Gynecology), DM (Medical Genetics)</b>
                <br />
                <b>Consultant Medical Geneticist</b>
                <br />
                <b>Genetics Clinic, Every Saturday 10:00 am to 12:00 pm</b>
                <br />
                <b>Call on – 9881123006</b>
                <br />
                <br />
                <b>Dr. Chaitanya Datar : Honorary Consultant</b>
              </p>
            </div>
          </div>
        </div>
      </div>






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
                className="carousel slide carousel-fade"
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
                              <div className="ourteamslidebox">
                                <div className="ourteambox1single">
                                  <div className="ourteamimg">
                                    <Image width={400} height={400} src={`/DoctorsProfileimages/${profile.DoctorProfileImage}`} alt="img" />
                                  </div>
                                  <div className="ourteamnamesing">
                                    <h2>{profile.DoctorFName} {profile.DoctorLName}</h2>
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


      {/* specialties end*/}
    </>




  );


};



export default Genetics;

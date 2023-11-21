
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Plasticsurgerycosmetology = () => {


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
            usersearch: "50",
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
      <title>Physiotheraphy & Rehabilitation</title>

      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Physiotheraphy & Rehabilitation</span>
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


      <>
  <div className="parentcontainerwhi">
    <div className="customcontainer">
      <div className="specsingleparn">
        <div className="spectitle">
          <h1 className="spetileh1">Physiotheraphy & Rehabilitation</h1>
        </div>
        <div className="spectitleimgbox">
          <div className="spectitleimgbox1">
            <Image width={400} height={400}
              src="/specialityviewimag/Physiotheraphy & Rehabilitation.jpg"
              alt="img"
            />
          </div>
          <div className="spectitleimgbox2">
            <p className="specilpara">
              Physiotherapy is a branch of treatment that uses physical means to
              relieve pain, regain a range of movements, restore muscle strength
              and return patients to normal activities of daily living. It is a
              healthcare profession, which focuses on human movement as
              precursor to the prevention and maintenance of health and
              well-being of individuals.
            </p>
            <p className="specilpara">
              At Aditya Birla Memorial Hospital (ABMH) the Department of
              Physiotherapy &amp; Rehabilitation comprises of a comprehensive
              team of experienced therapists who design rehabilitation programs
              to meet the specific needs of individual patients, provide quality
              care for complex conditions, help people live more comfortably and
              improve the quality of life and maximize the potential recovery of
              our patients.{" "}
            </p>
            <p className="specilpara">
              Our Physiotherapists help and treat people of all ages with
              physical problems caused by illness, accident or ageing. The core
              skills used by physiotherapists include exercise therapy,
              electrotherapy modalities and specialized hands on manual therapy
              keeping in mind the psychological, cultural and social factors,
              which in turn influence the patient.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="parentcontainerwhi specipgGRY">
    <div className="customcontainer">
      <div className="specsingleparnGra">
        <div className="spectitlegrcont">
          <div className="spectitlegrcont1">
            <div className="Specialtiesheadgr">
              <h2 className="spetileh1gr">Infrastructure</h2>
              <span className="headbordergr" />
            </div>
            <p className="specilpara">
              The Department of Physiotherapy &amp; Rehabilitation also boasts
              of a dedicated Gymnasium for the complete execution of
              rehabilitation protocols.
            </p>
          </div>
          <div className="spectitlegrcont2">
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Orthopedic Conditions & Rehab.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">
                  Physiotherapy for Musculoskeletal and Orthopedic Conditions
                  &amp; Rehab
                </p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Neurosurgical Conditions & Rehab.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">
                  Physiotherapy for Neurological and Neurosurgical Conditions
                  &amp; Rehab
                </p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Physiotherapy for CardiacPulmonary Conditions & Rehab.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">
                  Physiotherapy for Cardiac/Pulmonary Conditions &amp; Rehab
                </p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Physiotherapy for CardiacPulmonary Conditions & Rehab.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">
                  Physiotherapy for Pediatric Conditions: Pediatric Rehab
                </p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Physiotherapy for Women's Health.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">
                  Physiotherapy for Women&apos;s Health (Antenatal Care, Postnatal
                  Care)
                </p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/ErgonomicsOccupational Health Service.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">
                  Ergonomics/Occupational Health Service
                </p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Occupational Therapy.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Occupational Therapy</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400} src="/specialityviewimag/Yoga Therapy.jpg" alt="img" />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Yoga Therapy</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400} src="/specialityviewimag/Hydro Therapy.jpg" alt="img" />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Hydro Therapy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

   



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



export default Plasticsurgerycosmetology;

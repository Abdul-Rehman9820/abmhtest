
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Orthopedicsjointreplacement = () => {


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
            usersearch: "47",
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
      <title>Orthopedics & Joint Replacement</title>

      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Orthopedics & Joint Replacement</span>
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
          <h1 className="spetileh1">Orthopedics & Joint Replacement</h1>
        </div>
        <div className="spectitleimgbox">
          <div className="spectitleimgbox1">
            <Image width={400} height={400}
              src="/specialityviewimag/Deformity Corrections & Advanced Spine Surgeries.jpg"
              alt="img"
            />
          </div>
          <div className="spectitleimgbox2">
            <p className="specilpara">
              Aditya Birla hospital is the only hospital in Pune which have full
              time Consultants providing specialized and advanced care in the
              area of Orthopaedics – the branch of surgery which deals with any
              injury or damage to the bones, joints, ligaments, muscles or
              tendon.
            </p>
            <p className="specilpara">
              Our highly experienced team has performed a huge number of complex
              Orthopaedic surgeries and our Trauma Unit – Advanced Trauma Life
              Support (ATLS) team provides 24 hours accident and trauma
              services.
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
              The hospital is equipped with a state of the art imaging system in
              order to perform image guided procedures with smaller incisions.
            </p>
            <ul>
              <li>Trauma unit on ATLS guidelines.</li>
              <li>Arthroscopy (Key hole surgery) Sets.</li>
              <li>
                Personal protection systems for Arthritis and Joint Replacement
                surgery.
              </li>
              <li>Modular Operation tables and theater equipments.</li>
              <li>
                State of the art Orthopedic instrumentations including AO
                (Swiss) sets, Stryker advanced systems and Codman
                instrumentations.
              </li>
            </ul>
            <p className="specilpara">
              Our infrastructure also enables &apos;Research&apos; in this area. Our team
              has published their research in national and international
              journals such as JBJS (Am &amp; Br), CORR, J. of Arthroplasty etc.
              Our Orthopedic team regularly presents their working national and
              international meetings additionally, our doctors are honorary
              faculty members at various international workshops and training
              courses.
            </p>
          </div>
          <div className="spectitlegrcont2">
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Advanced Arthroscopy & Sports Injuries.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">
                  Advanced Arthroscopy &amp; Sports Injuries
                </p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Orthopedics & Joint Replacement.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">
                  Spine Trauma, Deformity Corrections &amp; Advanced Spine
                  Surgeries
                </p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Foot & Ankle Surgery.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Foot &amp; Ankle Surgery</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Hand & Upper Extremities.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Hand &amp; Upper Extremities</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400} src="/specialityviewimag/Osteoporosis.jpg" alt="img" />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Osteoporosis</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400} src="/specialityviewimag/Knee Implant.jpg" alt="img" />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Knee Implant</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Pediatric Orthopaedic Trauma.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">
                  Pediatric Orthopaedic Trauma &amp; Deformity Surgeries
                </p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Adult Reconstructive Joint Replacement Surgeries.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">
                  Adult Reconstructive Joint Replacement Surgeries
                </p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Limb Deformity Correction Surgeries.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">
                  Complex Orthopedic Trauma &amp; Limb Deformity Correction
                  Surgeries
                </p>
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



export default Orthopedicsjointreplacement;

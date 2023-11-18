
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Interventionalradiology = () => {


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
      <title>Internal Medicine</title>

      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Internal Medicine</span>
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
                <h1 className="spetileh1">Interventional Radiology</h1>
              </div>
              <div className="spectitleimgbox">
                <div className="spectitleimgbox1">
                  <img src="/specialityviewimag/radiology.jpg" alt="img" />
                </div>
                <div className="spectitleimgbox2">
                  <p className="specilpara">
                    The interventional Radiology Department at{" "}
                    <b>Aditya Birla Memorial Hospital</b> is equipped with modern
                    state of the art equipments that ensure timely conduct of
                    procedures and accurate reporting to assist in patient care. This
                    is backed by competent and compassionate staff that would assist
                    patient during their visit to the department.
                  </p>
                  <p className="specilpara">
                    We provides services 24☓7 to its inpatient and emergency
                    department and from 8am to 8pm to outpatient department. The
                    department is located besides the accident and emergency
                    department of Aditya Birla Memorial Hospital which helps in quick
                    and easy access to emergency patient ensuring timely conduct of
                    imaging investigations which assist further patient care.
                  </p>
                  <p className="specilpara">
                    The radiology department is equipped to provide services of USG
                    and CT guided diagnostic and therapeutic procedures. The hospital
                    has a state of the art CATH lab where Digital Subtraction
                    Angiography is performed where central and peripheral vascular
                    interventions are performed.
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
                    The Interventional Radiology Department at{" "}
                    <b>Aditya Birla Memorial Hospital</b> is equipped with modern
                    state of the art equipments that ensure timely conduct of
                    procedures and accurate reporting to assist in patient care.
                  </p>
                  <p className="specilpara">
                    This is backed by competent and compassionate staff that would
                    assist patient during their visit to the department. The
                    Interventional Radiology Department at Aditya Birla Memorial
                    Hospital provides services 24☓7 to its inpatient andemergency
                    department and from 8am to 8pm to outpatient department.
                  </p>
                  <p className="specilpara">
                    The department is located besides the accident and emergency
                    department of Aditya Birla Memorial Hospital which helps in quick
                    and easy access to emergency patient ensuring timely conduct of
                    imaging investigations which assist further patient care.
                  </p>
                  <p className="specilpara">
                    The radiology department is equipped to provide services of USG
                    and CT guided diagnostic andtherapeutic procedures. The hospital
                    has a state of the art CATH lab where Digital Subtraction
                    Angiography is performed where central and peripheral vascular
                    interventions are performed.
                  </p>
                </div>
                <div className="spectitlegrcont2">
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <img
                        src="/specialityviewimag/Vascular Interventional Radiology.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">
                        Vascular Interventional Radiology
                      </p>
                    </div>
                  </div>
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <img
                        src="/specialityviewimag/USG-Guided Procedures.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">USG-Guided Procedures</p>
                    </div>
                  </div>
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <img
                        src="/specialityviewimag/CT-Guided procedures.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">CT-Guided procedures</p>
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



export default Interventionalradiology;

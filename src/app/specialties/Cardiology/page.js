
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Cardiology = () => {


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
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Cardiology</span>
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
      {/* specialties  start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">
            <div className="spectitle">
              <h1 className="spetileh1">Cardiology</h1>
            </div>
            <div className="spectitleimgbox">
              <div className="spectitleimgbox1">
                <Image width={400} height={400} src="/specialityviewimag/cardiospeimg.png" alt="img" />
              </div>
              <div className="spectitleimgbox2">
                <p className="specilpara">
                  <b>Aditya Birla Memorial Hospital</b> boasts a best cardiology
                  hospital in India at the forefront of delivering exceptional
                  patient care and advanced cardiac disease treatments in Pune.
                </p>
                <p className="specilpara">
                  Our commitment to comprehensive care spans across all age groups,
                  from infants to seniors. With a dedicated team of experienced
                  Aditya Birla hospital cardiologists on staff full-time, we offer
                  expert consultations and thorough patient assessments.
                </p>
                <p className="specilpara">
                  Supported by state-of-the-art diagnostic and treatment
                  methodologies, the hospital offers a wide range of services to
                  ensure effective and comprehensive cardiac care.
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
                  Our hospital is fortified with noninvasive laboratories which have{" "}
                  <b>Treadmill Test (stress test) machines and 2D echo machines</b>{" "}
                  (departmental and portable versions).
                </p>
                <p className="specilpara">
                  The department also has Holter monitoring systems (5 channel and
                  12 lead), in addition to Ambulatory BP monitoring systems. We are
                  also well equipped with a Cardiac Catheterization laboratory where
                  invasive procedures are conducted and have a dedicated
                  electrophysiology system and RF laboratory.
                </p>
                <p className="specilpara">
                  Our department of Cardiac Sciences is responsible for successfully
                  implanting the First MRI compatible pacemaker in the Pimpri
                  Chinchwad Municipal Corporation area and also undertaking the
                  first 3D mapping and RF ablation at our premises.
                </p>
              </div>
              <div className="spectitlegrcont2">
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <Image width={400} height={400} src="/specialityviewimag/spegryimg.png" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">
                      Treadmill Test <br />
                      (stress test)
                    </p>
                  </div>
                </div>
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <Image width={400} height={400} src="/specialityviewimag/spegryimg.png" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">
                      2D echo
                      <br /> machines
                    </p>
                  </div>
                </div>
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <Image width={400} height={400} src="/specialityviewimag/spegryimg.png" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">
                      Ambulatory BP
                      <br /> monitoring systems
                    </p>
                  </div>
                </div>
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <Image width={400} height={400} src="/specialityviewimag/spegryimg.png" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">
                      Ambulatory BP
                      <br /> monitoring systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


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
                                    <h2>{profile.specialty_name}</h2>
                                  </div>
                                  <div className="ourteamexpi">
                                    <h2>{profile.DoctorExperience} years of experience</h2>
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

              </div>





            </div>
          </div>
        </div>
      </div>
      {/* specialties end*/}
    </>




  );


};



export default Cardiology;

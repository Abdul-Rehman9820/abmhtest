
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Accidentandemergency = () => {


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
            usersearch: "1",
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
      <title>Accident and Emergency</title>

      {/* common heading div start*/}
      {/* <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Accident and Emergency</span>
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


      {/* specialties  start*/}

      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">
            <div className="spectitle">
              <h1 className="spetileh1">Accident and Emergency</h1>
            </div>
            <div className="spectitleimgbox">
              <div className="spectitleimgbox1">
                <Image width={400} height={400} src="/specialityviewimag/accident.jpg" alt="img" />
              </div>
              <div className="spectitleimgbox2">
                <p className="specilpara">
                  <b>Aditya Birla Memorial Hospital</b> provides the best EMS
                  facility in Pune. Our world class, fully equipped Accident and
                  Emergency (A&amp;E) department is fully prepared with full time
                  consultants providing specialized and advanced medical care for
                  all kinds of accidents and emergencies, 24X7.
                </p>
                <p className="specilpara">
                  Our A&amp;E department is supported by in house doctors. A&amp;E
                  is based on knowledge and skills required for prevention,
                  diagnosis and management of acute and urgent aspects of illness
                  and injury affecting patient of all age groups and with a full
                  spectrum of undifferentiated physical and behavioral disease.
                  Emergency medicine treats conditions that pose a threat to life,
                  limb or have a significant risk of morbidity. Our center is
                  equipped with a total of 12 beds for priority care.
                </p>
                <p className="specilpara">
                  Our highly experienced team is even trained and equipped to
                  council family members and friends to deal with accidents and
                  emergencies. Additionally, our internal pharmacy is fully stocked
                  with supplies to deal with disaster and mass casualties and can
                  offer treatment for up to 20 patients at a time without delay.
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
                  As Emergency medicine encompasses a large amount of general
                  medicine and surgery including surgical sub-speciality and
                  physicians dealing with emergency require a broad field of
                  knowledge and advanced procedural skills including surgical
                  procedure, trauma resuscitation, advanced cardiac life support and
                  advanced airway management.
                </p>
                <p className="specilpara">
                  It involves primary management, transportation
                  (ambulance),packaging, triage, lifesaving majors as per ACLs and
                  ITLS guidelines, of complex trauma and limb/deformity
                  reconstruction, spine, hand and foot/anklesurgery and pediatric
                  orthopedics.
                </p>
                <p className="specilpara">
                  We also provide ambulance services equivalent to an ICU on wheels.
                </p>
              </div>
              <div className="spectitlegrcont2">
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <Image width={400} height={400} src="/specialityviewimag/Internal Services.jpg" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">Internal Services</p>
                  </div>
                </div>
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <Image width={400} height={400} src="/specialityviewimag/External Services.jpg" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">External Services</p>
                  </div>
                </div>
 
              </div>
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



export default Accidentandemergency;

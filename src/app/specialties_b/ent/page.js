
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Ent = () => {


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
            usersearch: "18",
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
      <title>ENT</title>

      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">ENT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                                    <h2>Dr {profile.DoctorFName} {profile.DoctorLName}</h2>
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




      <>
  <div className="parentcontainerwhi">
    <div className="customcontainer">
      <div className="specsingleparn">
        <div className="spectitle">
          <h1 className="spetileh1">ENT (Ear, Nose, Throat)</h1>
        </div>
        <div className="spectitleimgbox">
          <div className="spectitleimgbox1">
            <Image width={400} height={400} src="/specialityviewimag/ent.jpg" alt="img" />
          </div>
          <div className="spectitleimgbox2">
            <p className="specilpara">
              <b> Aditya Birla Memorial Hospital (ABMH)</b> has a world class
              department of ENT equipped with latest technology and experienced
              staff.ENT Specialists are especially trained to understand case
              related to these organs.
            </p>
            <p className="specilpara">
              ENT is a branch of medicine which deals with various ailments of
              the ear, nose, throat and neck in children as well as adult.
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
              The OPD setup is one of the best in Pune. Our ENT OPD boasts of
              the latest Zeiss Microscope, Nasal endoscopes, 70% and 90%
              laryngoscope, Flexible Nasopharyngolaryngoscope and 0% and 30%
              Otoendoscopes.
            </p>
            <p className="specilpara">
              This makes it possible to perform diagnostic and small therapeutic
              procedures in the OPD itself. The department also has a very good
              Audiological setup.
            </p>
          </div>
          <div className="spectitlegrcont2">
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400} src="/specialityviewimag/Otology.jpg" alt="img" />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Otology</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400} src="/specialityviewimag/Rhinology.jpg" alt="img" />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Rhinology</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400} src="/specialityviewimag/Laryngology.jpg" alt="img" />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Laryngology</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400} src="/specialityviewimag/Neck Condition.jpg" alt="img" />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Neck Condition</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Pediatric Otorhinolaryngology.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Pediatric Otorhinolaryngology</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Audiology and Speech Pathology.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Audiology and Speech Pathology</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/ENT-related procedures.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">ENT-related procedures</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Speciality Clinics.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Speciality Clinics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>








      {/* specialties end*/}
    </>




  );


};



export default Ent;

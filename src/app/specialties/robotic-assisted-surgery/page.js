
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

    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll
    
    // api for profile


    async function fetchData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_Web_Domin}/api/profilebyspecilitypage`, {
          method: "POST",
          body: JSON.stringify({
            usersearch: "135",
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
      <title>Robotic Assisted Surgery</title>

      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Robotic Assisted Surgery</span>
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


      {/* sub specialties start*/}
      <div className="parentcontainerwhi specipgGRY">
        <div className="customcontainer">
          <div className="specsingleparnGra">
            <div className="spectitlegrcont">
              <div className="spectitlegrcont2">




                <div className="testimgboxcont">
                  <Link href="/specialties-sub/gynec-onco">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/newspecilitymainimage/sub_specilityimages/Gyne Oncology.png" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Gynec Onco</p>
                    </div>
                  </Link>
                </div>
                <div className="testimgboxcont">
                  <Link href="/specialties-sub/oncology">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Internal Services.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Oncology</p>
                    </div>
                  </Link>
                </div>
                <div className="testimgboxcont">
                  <Link href="/specialties-sub/uro-onco">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/newspecilitymainimage/sub_specilityimages/Uro Onco.png" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Uro Onco</p>
                    </div>
                  </Link>
                </div>
                <div className="testimgboxcont">
                  <Link href="/specialties-sub/gi-onco">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/newspecilitymainimage/sub_specilityimages/GI Onco.png" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">GI Onco</p>
                    </div>
                  </Link>
                </div>
                <div className="testimgboxcont">
                  <Link href="/specialties-sub/general-surgery">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/newspecilitymainimage/sub_specilityimages/General Surgery.png" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">General Surgery</p>
                    </div>
                  </Link>
                </div>
                {/* <div className="testimgboxcont">
                  <Link href="/specialties-sub/urology">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Internal Services.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Urology</p>
                    </div>
                  </Link>
                </div> */}



              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sub specialties end*/}


      {/*hide for approval*/}

      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">

            <div className="spectitleimgbox">
              <div className="spectitleimgbox1">
                <Image width={400} height={400} src="/ABMH-machinery/DaVinchiXRobot2.jpg" alt="img" />
              </div>
              <div className="spectitleimgbox2">

                <p className="specilpara">
                  Step into the forefront of advanced robotic surgery at Aditya Birla Memorial Hospital, where we take pride in harnessing the cutting-edge capabilities of the Da Vinci X robot to transform our approach to surgical procedures. The utilization of robotic surgery, facilitated by the state-of-the-art Da Vinci X system, signifies a groundbreaking leap in medical technology.
                </p>
                <p className="specilpara">
                  Our proficient surgeons leverage this minimally invasive technique to execute intricate surgeries with unmatched precision, superior visualization, and decreased invasiveness compared to conventional methods.
                </p>
                <p className="specilpara">
                  The Da Vinci X robot empowers surgeons by offering a magnified, high-definition 3D perspective of the surgical site, accompanied by robotic arms that replicate the surgeon&apos;s hand movements with exceptional dexterity. This innovation translates to minimized trauma to adjacent tissues, smaller incisions, swifter recovery periods, and heightened positive outcomes for our patients.
                </p>

              </div>
            </div>


            {/* <div className="spectitleimgbox mt-3">

              <div className="spectitleimgbox1">
                <Image width={400} height={400} src="/ABMH-machinery/DaVinchiXRobot1.jpg" alt="Da Vinchi X Robot" />
              </div>
              <div className="spectitleimgbox2">
                <div className="spectitle Specialtiesheadgr">
                  <h2 className="spetileh2gr">Da Vinchi X Robot</h2>
                  <span className="headbordergr" />
                </div>

                <p className="specilpara">

                </p>

              </div>
            </div> */}

          </div>
        </div>
      </div>





      {/* specialties end*/}
    </>




  );


};



export default Accidentandemergency;

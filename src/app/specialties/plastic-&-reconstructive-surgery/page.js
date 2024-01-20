
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
            usersearch: "109",
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
      <title>Plastic & Reconstructive Surgery</title>

      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Plastic & Reconstructive Surgery</span>
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


      {/* sub specialties start*/}
      <div className="parentcontainerwhi specipgGRY">
        <div className="customcontainer">
          <div className="specsingleparnGra">
            <div className="spectitlegrcont">
              <div className="spectitlegrcont2">




                <div className="testimgboxcont">
                  <Link href="/specialties-sub/minimal-invasive-&-reconstructive-surgery">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Internal Services.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Minimal Invasive & Reconstructive Surgery</p>
                    </div>
                  </Link>
                </div>



              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sub specialties end*/}


      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">
            <div className="spectitleimgbox">
              <div className="">

                <p className="specilpara">
                Plastic and Reconstructive Surgery services at ABMH cover Minimal Invasive & Reconstructive Surgery. Our plastic surgeons specialize in both aesthetic and reconstructive procedures, ensuring comprehensive care for various conditions.
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



export default Accidentandemergency;

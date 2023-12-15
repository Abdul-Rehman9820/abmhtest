
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
            usersearch: "64",
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
      <title>Plastic Surgery & Cosmetology</title>

      {/* common heading div start*/}
      {/* <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Plastic Surgery & Cosmetology</span>
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



      <>
  <div className="parentcontainerwhi">
    <div className="customcontainer">
      <div className="specsingleparn">
        <div className="spectitle">
          <h1 className="spetileh1">Plastic Surgery & Cosmetology</h1>
        </div>
        <div className="spectitleimgbox">
          <div className="spectitleimgbox1">
            <Image width={400} height={400}
              src="/specialityviewimag/Plastic Surgery & Cosmetology.jpg"
              alt="img"
            />
          </div>
          <div className="spectitleimgbox2">
            <p className="specilpara">
              Aditya Birla Memorial Hospital has a world class Department of
              Plastic &amp; Reconstructive surgery with highly experienced
              surgeons backed by the latest technology. The department deals
              with all types of reconstructive procedures, cosmetic surgeries,
              hand and maxillo-facial trauma. Though cosmetic or aesthetic
              surgery is the best-known kind of plastic surgery, it includes
              many types of Reconstructive surgery, Hand surgery, Microsurgery,
              Maxillofacial trauma surgery and the treatment of Burns.
            </p>
            <p className="specilpara">
              Today plastic surgery is the need of the hour for managing variety
              of Hand problems, Trauma, Diabetic foot related problems in
              addition to Cosmetic &amp; Reconstructive Surgery.
            </p>
            <p className="specilpara">
              The department has successfully catered to the large magnitude of
              road traffic and industrial trauma accidents in the form of
              re-joining of amputated parts, various reconstructive surgeries
              and maxillofacial (face) and hand trauma. Its cosmetic wing has
              added a new feather in the cap for exclusive body contouring and
              all types of cosmetic surgeries under one roof.
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
              The hospital boasts of a well-equipped Cosmetic wing with latest
              world class LASER machines and Liposuction/Body contouring
              equipment that encircle both surgical &amp; non-surgical aesthetic
              surgery.{" "}
            </p>
          </div>
          <div className="spectitlegrcont2">
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/female-patient-with-cap.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Reconstructive Surgery</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400} src="/specialityviewimag/Cosmetic Surgery.jpg" alt="img" />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Cosmetic Surgery</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Other Basis Procedures.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Other Basis Procedures</p>
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



export default Plasticsurgerycosmetology;

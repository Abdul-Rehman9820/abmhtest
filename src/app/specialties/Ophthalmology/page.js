
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Ophthalmology = () => {


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
      <title>Ophthalmology</title>

      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Ophthalmology</span>
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
                <h1 className="spetileh1">Ophthalmology</h1>
              </div>
              <div className="spectitleimgbox">
                <div className="spectitleimgbox1">
                  <img
                    src="/specialityviewimag/ophthalmology Surgries.jpg"
                    alt="img"
                  />
                </div>
                <div className="spectitleimgbox2">
                  <p className="specilpara">
                    Aditya Birla Memorial Hospital has a world class Institute of
                    Ophthalmology with highly experienced staff, backed by the latest
                    technology. The institute provides comprehensive eye care and
                    services for all eye and vision problems under one roof. Today,
                    eye surgeries are done on a day care basis; not requiring
                    hospitalization.{" "}
                  </p>
                  <p className="specilpara">
                    At Aditya Birla Memorial Hospital, we have exclusive clinics for
                    Refractive error and contact lenses, Cataract, Glaucoma, Cornea,
                    Paediatric Ophthalmology, Vitreo-Retina, Diabetic Retinopathy,
                    ROP, ARMD, Oculoplasty, Ocular Oncology, Ocular trauma, Uveitis,
                    Neuro-ophthalmology, Computer vision syndrome etc.
                  </p>
                  <p className="specilpara">
                    Our team is committed to providing the highest quality of eye care
                    and our services are dedicated to the diagnosis and treatment of
                    all kind of ocular diseases. The Aditya Birla Memorial Hospital,
                    institute of Ophthalmology is the first eye bank in
                    Pimpri-Chinchwad Municipal Corporation area-PCMC, operating under
                    the banner ‘Aditya Jyot’, since 2010.
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
                    Our hospital uses contemporary technology to assist doctors to
                    better serve our <br />
                    patients. With the help of modern machinery we are able to make
                    the treatment <br />
                    process as painless as possible, with minimum waste of time and
                    maximum comfort.
                  </p>
                </div>
                <div className="spectitlegrcont2">
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <img src="/specialityviewimag/Treatment.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Treatment</p>
                    </div>
                  </div>
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <img src="/specialityviewimag/Surgeries.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Surgeries</p>
                    </div>
                  </div>
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <img
                        src="/specialityviewimag/Opt Special Clinics.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Special Clinics</p>
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



export default Ophthalmology;

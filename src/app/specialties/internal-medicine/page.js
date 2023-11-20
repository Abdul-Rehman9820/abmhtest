
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Internalmedicine = () => {


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
                <h1 className="spetileh1">Internal Medicine</h1>
              </div>
              <div className="spectitleimgbox">
                <div className="spectitleimgbox1">
                  <Image width={400} height={400} src="/specialityviewimag/internal medicine.jpg" alt="img" />
                </div>
                <div className="spectitleimgbox2">
                  <p className="specilpara">
                    Internal Medicine is known as ‘Mother of Medical Science’. It
                    deals with vast number of diseases but mainly those of internal
                    organs of the human body. Aditya Birla Memorial Hospital is a
                    world class Institute that is equipped with the latest technology
                    and experienced staff.
                  </p>
                  <p className="specilpara">
                    In today’s medical practice, physicians play the role of
                    consultant as well as primary care physician and deal mainly with
                    infectious diseases like Dengue fever, Malaria, Swine Flu, Typhoid
                    fever, etc. The other main area which keeps physicians occupied
                    iscases of Septicemia because of infections of the different
                    etiologies.
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
                    The hospital has a well-equipped Intensive Care Unit which is very
                    important need of medicine patients where,patients of
                    septicemia,snake bites,poisoning, respiratory tract infections
                    requiring ventilators are well taken care of.
                  </p>
                  <p className="specilpara">
                    Our isolation facilities serve well, especially for those
                    suffering from swine flu pneumonias etc.We also have a
                    well-equipped blood bank which plays a crucial role in cases of
                    dengue hemorrhagic fever. In case of platelet transfusions.
                  </p>
                  <p className="specilpara">
                    Our prompt and accurate pathology and microbiology laboratories
                    help identify infection at early stages, thus, enabling us to
                    effectively treat all kinds of diseases.
                  </p>
                </div>
                <div className="spectitlegrcont2">
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400}
                        src="/specialityviewimag/Infectious Diseases.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Infectious Diseases</p>
                    </div>
                  </div>
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Geriatric Care.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Geriatric Care</p>
                    </div>
                  </div>
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400}
                        src="/specialityviewimag/Preventive Medicine & Vaccinations.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">
                        Preventive Medicine &amp; Vaccinations
                      </p>
                    </div>
                  </div>
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400}
                        src="/specialityviewimag/HIV Counselling & Treatment.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">HIV Counselling &amp; Treatment</p>
                    </div>
                  </div>
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400}
                        src="/specialityviewimag/Hypertension Clinic.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Hypertension Clinic</p>
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



export default Internalmedicine;

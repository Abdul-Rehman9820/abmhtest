
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
            usersearch: "150",
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
      <div className="parentcontainerwhi">
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




      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">

            <div className="spectitleimgbox">

              <div className="">
                <p className="specilpara">
                Our Accident & Emergency Department, where your well-being is our foremost priority. Our dedicated team of highly proficient healthcare professionals is unwaveringly committed to providing exceptional emergency care 24/7. With cutting-edge technology and a comprehensive array of medical resources, our department is well-equipped to address a broad spectrum of medical emergencies, ranging from critical injuries to sudden illnesses.
                </p>
                <p className="specilpara">
                At our Accident & Emergency Department, we take pride in delivering swift and efficient care. Our expert staff, which includes specialized physicians, nurses, and support personnel, collaborates seamlessly to ensure prompt assessment, accurate diagnosis, and timely treatment. Whether you&apos;re facing a traumatic incident or a sudden health crisis, rest assured that our compassionate and competent team is here to guide you through every stage of the emergency care process. Your safety and well-being are of paramount importance to us, and we are dedicated to upholding the highest standards of emergency medical services for our community.
                </p>
              </div>

              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h2 className="spetileh2gr">We Offer 24/7 Healthcare Services:</h2>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                Our comprehensive Accident & Emergency Department (A&E) provides patient care supported by a well-coordinated road evacuation service accessible through a dedicated entrance.
                </p>               
              </div>

              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h2 className="spetileh2gr">Ambulance Service:</h2>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                The Accident & Emergency unit offers an exclusive Emergency Medical Ambulance Service, encompassing both Advanced Cardiac Life Support (ACLS) and Basic Life Support (BLS) ambulance requests. These fully equipped emergency vehicles are ready to handle a diverse array of medical, surgical, and traumatic situations.
                </p>               
                <p className="specilpara">
                <b>Ambulance No :</b>  +91 9881123033 / 020 30717788
                </p>               
                <p className="specilpara">
                <b>Emergency department No :</b> 020 30717777 / 020 40707777
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

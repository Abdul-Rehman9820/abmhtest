
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Dentistry = () => {


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
            usersearch: "40",
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
      <title>Specialty</title>

      {/* common heading div start*/}
      {/* <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Dentistry</span>
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





      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">

            <div className="spectitleimgbox">
              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">General Surgery</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  General Surgery under the Robotic-Assisted Surgery umbrella covers a broad spectrum of surgical procedures using robotic technology. Our expert general surgeons employ robotic platforms for procedures ranging from hernia repairs to gallbladder surgeries, ensuring minimally invasive approaches and optimal outcomes for patients.
                </p>
                <p className="specilpara">
                  Aditya Birla Memorial Hospital&apos;`s commitment to Robotic-Assisted Surgery and its associated subservices reflects our dedication to providing patients with the latest advancements in surgical technology. The integration of robotic platforms enhances our ability to deliver precise, personalized, and effective surgical interventions across diverse medical specialties.
                </p>

              </div>
            </div>
            <div className="spectitleimgbox">
              <div className="">

                <ul className="specULbullet">

                  <li>
                    <p className="specilpara">
                      <b>Robotic Cholecystectomy:</b> Experience the future of gallbladder surgery with our Robotic Cholecystectomy. Minimize scarring, reduce recovery time, and enhance precision in the removal of gallstones, ensuring a smoother patient experience.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Robotic Hernia Repair:</b> Elevate hernia surgery with our Robotic Hernia Repair, combining advanced robotic technology with surgical expertise. Enjoy faster recovery and reduced postoperative discomfort while benefiting from the precision of robotic-assisted techniques.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Robotic Colorectal Surgery:</b> Revolutionize colorectal procedures with our Robotic Colorectal Surgery. This minimally invasive approach ensures precise tumor removal and improved outcomes for conditions such as colorectal cancer, promoting quicker recovery and minimal scarring.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Robotic Gastrectomy:</b> Transform your journey with Robotic Gastrectomy for stomach-related conditions. Our skilled surgeons utilize robotic precision to remove parts of the stomach, offering enhanced accuracy and faster recovery times for patients.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Robotic Adrenalectomy:</b> Discover the advantages of Robotic Adrenalectomy for adrenal gland surgery. Our robotic-assisted approach ensures meticulous removal of tumors, reducing postoperative discomfort and promoting a quicker return to daily activities.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Robotic Splenectomy:</b> Elevate spleen surgery with our Robotic Splenectomy. Benefit from the precision of robotic assistance in spleen removal, reducing the impact on surrounding tissues and facilitating a more efficient recovery process.
                    </p>
                  </li>

                </ul>


              </div>
            </div>


          </div>
        </div>
      </div>



      {/* specialties end*/}
    </>




  );


};



export default Dentistry;

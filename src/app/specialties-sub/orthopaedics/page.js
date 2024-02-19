
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
            usersearch: "82",
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



      {/* hide for apporval */}

      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">

            <div className="spectitleimgbox">

              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Orthopaedics</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  Orthopedics and Joint Replacement Center at Aditya Birla Memorial Hospital, focuses on delivering comprehensive orthopedic care and employing cutting-edge joint replacement procedures. Our team comprises highly experienced orthopedic surgeons committed to offering personalized and advanced solutions for musculoskeletal conditions. From intricate joint replacements to non-surgical orthopedic treatments, our approach is grounded in precision and patient well-being.
                </p>
                <p className="specilpara">
                  At Aditya Birla Memorial Hospital, our commitment to excellence spans from diagnosis to rehabilitation, ensuring optimal outcomes and an enhanced quality of life for our patients. Trust in the expertise of our seasoned doctors as we guide you to the pinnacle of orthopedic care, where medical proficiency intertwines with compassionate support, fostering a future of improved mobility and overall well-being.
                </p>
              </div>


              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Treatment & Surgeries</h1>
                  <span className="headbordergr" />
                </div>

                <ul className="specULbullet">

                  <li>
                    <p className="specilpara">
                      <b>Total Hip Replacement:</b> Restoring mobility and relieving pain by replacing a damaged hip joint with an artificial implant.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Total Knee Replacement:</b> Alleviating knee pain and improving function through the replacement of damaged knee joint surfaces with prosthetic components.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Total Shoulder Replacement:</b> Easing shoulder pain and enhancing joint function by replacing damaged parts of the shoulder with artificial components.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Arthroscopic Knee Surgery:</b> Minimally invasive procedure using a small camera to diagnose and treat knee joint issues, reducing recovery time.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Arthroscopic Shoulder Surgery:</b> Addressing shoulder problems through tiny incisions, enabling precise visualization and treatment with minimal tissue disruption.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Arthroscopic Ankle Surgery:</b> Minimally invasive ankle procedures to diagnose and treat various conditions, promoting quicker recovery and reduced scarring.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Spine surgeries: Lumbar Discectomy:</b> Surgical removal of herniated disc material in the spine to relieve pressure on nerves and reduce pain.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Spinal Fusion:</b> Joining two or more vertebrae to stabilize the spine, often recommended for conditions like spinal instability or degenerative disc disease.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Herniated Disc Surgery:</b> Surgical intervention to address a herniated disc, relieving pressure on spinal nerves and improving symptoms.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Open Reduction Internal Fixation (ORIF):</b> Surgically aligning and stabilizing fractured bones using internal hardware like screws and plates for optimal healing.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Closed Reduction Internal Fixation (CRIF):</b> Non-invasive realignment and stabilization of fractured bones using internal hardware for effective fracture healing.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Tendon Repair:</b> Surgical restoration of damaged tendons to promote proper function and prevent long-term disability.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Ligament Reconstruction:</b> Surgical procedure to repair or replace damaged ligaments, often performed for sports-related injuries.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Orthopedic Trauma Surgery:</b> Urgent surgical intervention to treat fractures, dislocations, and other orthopedic injuries resulting from trauma.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Carpal Tunnel Release:</b> Surgical procedure to alleviate pressure on the median nerve in the wrist, relieving symptoms of carpal tunnel syndrome.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Bunion Surgery (Bunionectomy):</b> Corrective surgical procedure to remove a bunion and realign the joint of the big toe for improved comfort and function.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Achilles Tendon Repair:</b> Surgical procedure to address a ruptured or damaged Achilles tendon, restoring strength and function.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Limb-Sparing Surgery for Bone Tumors:</b> Surgical removal of bone tumors while preserving the limb&apos;s function and appearance.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Soft Tissue Sarcoma Resection:</b> Surgical removal of soft tissue sarcomas, often followed by reconstructive procedures to restore function and aesthetics.
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


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
            usersearch: "137",
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








      {/*hide for approval*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">

            <div className="spectitleimgbox">
              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Oncology</h1>
                  <span className="headbordergr" />
                </div>


                <ul className="specULbullet">

                  <li>
                    <p className="specilpara">
                      <b>Robotic Prostatectomy Surgery:</b> Precision removal of the prostate gland, a common procedure for treating prostate cancer, utilizing robotic technology for enhanced accuracy and minimal invasiveness.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Robotic Colectomy Surgery:</b> Surgical removal of part or the entire colon through robotic assistance, typically conducted for cases of colorectal cancer, ensuring precise and effective treatment.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Robotic Pancreatectomy Surgery:</b> Utilizing robotic technology for the removal of all or a portion of the pancreas, this surgery is often performed to address pancreatic cancer with improved precision and reduced invasiveness.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Robotic Gastrectomy Surgery:</b> A minimally invasive approach to removing part or all of the stomach, commonly recommended for stomach cancer cases, with robotic assistance for enhanced surgical precision.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Robotic Thyroidectomy Surgery:</b> Precision removal of part or the entire thyroid gland using robotic technology, a procedure commonly employed for the treatment of thyroid cancer, ensuring accuracy and minimal impact.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Robotic Esophagectomy Surgery:</b> Surgical removal of part or the entire esophagus, frequently undertaken for esophageal cancer cases, employing robotic assistance to enhance precision and minimize the impact on surrounding tissues.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Robotic Radical Cystectomy:</b> Precise removal of the bladder, often performed using robotic assistance, particularly in cases of bladder cancer, ensuring accuracy and reduced postoperative recovery time.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Robotic Rectal Cancer Partial Nephrectomy:</b> A robotic-assisted procedure for partial removal of the rectum, commonly indicated for rectal cancer cases, offering enhanced precision and reduced recovery time.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Robotic Radical Hysterectomy:</b> Utilizing robotic technology for a comprehensive removal of the uterus and surrounding tissues, often recommended for cases of uterine or cervical cancer, ensuring precision and minimal invasiveness.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Robotic Lung Cancer Surgery:</b> A precise and minimally invasive approach to lung cancer treatment, employing robotic assistance for surgical procedures on the lungs, contributing to improved outcomes and reduced recovery times.
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

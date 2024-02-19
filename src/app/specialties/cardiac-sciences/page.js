
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Andrologyandsexualmedicine = () => {


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
            usersearch: "151",
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
      <title>Cardiac Sciences</title>

      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Cardiac Sciences</span>
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




                {/* <div className="testimgboxcont">
                  <Link href="/specialties-sub/cath-lab">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Internal Services.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Cath Lab</p>
                    </div>
                  </Link>
                </div> */}
                {/* <div className="testimgboxcont">
                  <Link href="/specialties-sub/electrophysiology-&-ablation">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Internal Services.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Electrophysiology & Ablation</p>
                    </div>
                  </Link>
                </div> */}
                <div className="testimgboxcont">
                  <Link href="/specialties-sub/cardiology">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Internal Services.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Cardiology</p>
                    </div>
                  </Link>
                </div>
                <div className="testimgboxcont">
                  <Link href="/specialties-sub/cardiothoracic-surgery">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Internal Services.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Cardiothoracic Surgery</p>
                    </div>
                  </Link>
                </div>
                <div className="testimgboxcont">
                  <Link href="/specialties-sub/cardiac-care-program">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Internal Services.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Cardiac Care Program</p>
                    </div>
                  </Link>
                </div>
                {/* <div className="testimgboxcont">
                  <Link href="/specialties-sub/paediatric-cardiothoracic-surgery">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Internal Services.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Paediatric Cardiothoracic Surgery</p>
                    </div>
                  </Link>
                </div> */}
                {/* <div className="testimgboxcont">
                  <Link href="/specialties-sub/paediatric-cardiologist">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Internal Services.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Paediatric Cardiologist</p>
                    </div>
                  </Link>
                </div> */}
                {/* <div className="testimgboxcont">
                  <Link href="/specialties-sub/non-invasive-lab">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Internal Services.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Non-Invasive Lab</p>
                    </div>
                  </Link>
                </div> */}



              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sub specialties end*/}


      {/* <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">
            <div className="spectitleimgbox">
              <div className="">


                <p className="specilpara">

                  Cardiac Sciences at Aditya Birla Memorial Hospital encompasses a comprehensive range of services dedicated to the diagnosis, treatment, and care of cardiovascular conditions. Our multidisciplinary team of experts collaborates to provide cutting-edge and personalized cardiac care, ensuring optimal outcomes for patients.
                  Subservices under Cardiac Sciences:

                </p>


              </div>
            </div>
          </div>
        </div>
      </div> */}


      {/*hide for approval*/}

      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">
            <div className="spectitleimgbox">
              <div className="">


                <p className="specilpara">
                The Cardiac Sciences department stands as a distinguished Centre of Excellence within Aditya Birla Memorial Hospital. Carefully selected, our outstanding team of doctors represents the pinnacle of expertise in the healthcare industry, ensuring that our seamlessly refined processes operate in harmonious collaboration to provide top-notch cardiac care on a global scale. Our state-of-the-art technologies, infrastructure, and systems are on par with the most exceptional standards in their respective classes.
                </p>
                <p className="specilpara">
                Within our center, we offer comprehensive services covering Cardiology, Interventional Cardiology, Cardiothoracic Vascular Surgery, Cardiac Surgery, and Cardiac Rehabilitation for both adults and children. 
                </p>
                <p className="specilpara">
                Our hospitals extend their expertise to over 300,000 adults and children, addressing a spectrum of conditions, including complex or rare cases.
                </p>
                <p className="specilpara">
                We offer profound expertise in a wide range of advanced medical and surgical interventions. Our specialties are intricately interconnected, ensuring a cohesive and seamless experience for our patients.
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



export default Andrologyandsexualmedicine;

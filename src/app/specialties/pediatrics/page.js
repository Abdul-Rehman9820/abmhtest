
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Pediatrics = () => {


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
            usersearch: "98",
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
      <title>Paediatrics</title>

      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Paediatrics</span>
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
                  <Link href="/specialties-sub/general-paediatrics">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/newspecilitymainimage/sub_specilityimages/General Pediatric.png" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">General Paediatrics</p>
                    </div>
                  </Link>
                </div>
                <div className="testimgboxcont">
                  <Link href="/specialties-sub/child-&-development">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Internal Services.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Child & Development</p>
                    </div>
                  </Link>
                </div>
                <div className="testimgboxcont">
                  <Link href="/specialties-sub/paediatric-critical-care">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Internal Services.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Paediatric Critical Care</p>
                    </div>
                  </Link>
                </div>
                <div className="testimgboxcont">
                  <Link href="/specialties-sub/paediatric-pulmonology">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/newspecilitymainimage/sub_specilityimages/Paediatric Pulmonology.png" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Paediatric Pulmonology</p>
                    </div>
                  </Link>
                </div>
                <div className="testimgboxcont">
                  <Link href="/specialties-sub/paediatric-cardiology">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/newspecilitymainimage/sub_specilityimages/Pediatric Cardiology.png" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Paediatric Cardiology</p>
                    </div>
                  </Link>
                </div>
                <div className="testimgboxcont">
                  <Link href="/specialties-sub/paediatric-cardiothoracic-surgery">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Internal Services.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Paediatric Cardiothoracic Surgery</p>
                    </div>
                  </Link>
                </div>
                <div className="testimgboxcont">
                  <Link href="/specialties-sub/paediatric-gastroenterology">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/newspecilitymainimage/sub_specilityimages/Paediatric Gastroenterology.png" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Paediatric Gastroenterology</p>
                    </div>
                  </Link>
                </div>
                <div className="testimgboxcont">
                  <Link href="/specialties-sub/paediatric-nephrology">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/newspecilitymainimage/sub_specilityimages/Paediatric Nephrology.png" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Paediatric Nephrology</p>
                    </div>
                  </Link>
                </div>
                <div className="testimgboxcont">
                  <Link href="/specialties-sub/paediatric-neurology">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Internal Services.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Paediatric Neurology</p>
                    </div>
                  </Link>
                </div>
                <div className="testimgboxcont">
                  <Link href="/specialties-sub/neonatology">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Internal Services.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Neonatology</p>
                    </div>
                  </Link>
                </div>
                <div className="testimgboxcont">
                  <Link href="/specialties-sub/paediatric-surgery">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Internal Services.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Paediatric Surgery</p>
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
               Pediatric department  where our distinguished team of pediatric specialists is dedicated to providing unparalleled integrated care across a broad spectrum of pediatric specialties. With a steadfast commitment to excellence and unwavering standards of patient care, we ensure the highest quality healthcare services for children from the neonatal period through adolescence.
                </p>
                <p className="specilpara">
                Our Pediatric Department offers a comprehensive array of services designed to cater to the unique needs of children and adolescents. These include Pediatric Emergency and Intensive Care, Neonatal Intensive Care, Pediatric Neurology and Child Development,Pediatric Immunology and Rheumatology Services, Pediatric Infectious Disease Services, Pediatric Hematology, Pediatric Hepatology and Gastroenterology Services, Pediatric Allergy, Pediatric Nephro-Uro, and Pediatric Cardiac Services.
                </p>
                <p className="specilpara">
                At Aditya Birla Memorial Hospital, we take pride in our state-of-the-art Pediatric Intensive Care Unit (PICU) and dedicated Neonatal Intensive Care Unit (NICU) equipped with advanced technology and ventilators to ensure optimal treatment methodologies for pediatric care. Our facility offers a complete range of organ transplant procedures, providing comprehensive medical solutions for children with specific needs.
                </p>
                <p className="specilpara">
                Our team of highly dedicated pediatric doctors is committed to delivering the highest quality of care. Trained in specialized pediatric procedures at some of the world&apos;s premier institutes, our consultants are widely respected in their respective fields across the country. Our skilled doctors and paramedics are not only experts in their fields but also compassionate caregivers, standing by your family at every step of your child&apos;s treatment journey.
                </p>
                <p className="specilpara">
                Experience unparalleled pediatric care at Aditya Birla Memorial Hospital, where the health and well-being of your child is our top priority.
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



export default Pediatrics;

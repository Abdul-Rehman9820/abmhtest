
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
            usersearch: "108",
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





      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">

            <div className="spectitleimgbox">
              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Paediatric Surgery</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                Explore Exceptional Pediatric Surgical Care at Aditya Birla Memorial Hospital
                </p>
                <p className="specilpara">
                Pediatric surgery at Aditya Birla Memorial Hospital, where our Department of Pediatric Surgery stands at the forefront of advanced healthcare. Our specialized care encompasses a wide range of services, including general pediatric surgery, neonatal surgery, pediatric urology, thoracic surgery, gastrointestinal surgery, minimal invasive surgery, and endoscopy, tailored for patients up to the age of 18 years.
                </p>
                <p className="specilpara">
                Caring for pediatric surgical patients demands a unique blend of tenderness, delicate skills, and meticulous follow-up. From newborns and toddlers to adolescents and mature adults, our pediatric surgeons are dedicated to providing compassionate care at every stage of growth. We draw resilience and inspiration from the children we serve, considering it a privilege to contribute to their well-being. Our surgical team is led by seasoned and experienced Consultants, who have undergone training in prestigious hospitals both in India and overseas.
                </p>
                <p className="specilpara">
                Your child&apos;s health and comfort are our top priorities
                </p>
              </div>
            </div>


            <div className="spectitleimgbox mt-3">

              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Common problem treated by pediatric Surgery : </h1>
                  <span className="headbordergr" />
                </div>

                <ul className="specULbullet">


                  <li>
                    <p className="specilpara">
                      <b>Appendicitis: </b> Inflammation of the appendix often requiring surgical intervention.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Hernias: </b> Commonly seen in infants and children, hernias involve the protrusion of an organ or tissue through a weakened area in the abdominal wall.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Hydrocele and Inguinal Hernia: </b> Fluid-filled sacs around the testicles or the protrusion of abdominal contents into the inguinal canal.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Congenital Anomalies: </b> Surgical correction of birth defects such as cleft lip and palate, imperforate anus, and esophageal atresia.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Pediatric Tumors: </b> Surgical removal of tumors affecting various organs, including kidneys, liver, and soft tissues.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Gastrointestinal Disorders: </b> Treatment of conditions like intestinal obstruction, gastroesophageal reflux disease (GERD), and inflammatory bowel disease (IBD).
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Pediatric Urological Conditions: </b> Management of issues such as hypospadias, vesicoureteral reflux (VUR), and other congenital urological anomalies.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Thoracic Surgery: </b> Addressing congenital or acquired conditions affecting the chest and lungs.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Gallbladder and Biliary Tract Disorders: </b> Surgical intervention for pediatric gallstones, gallbladder inflammation, and biliary tract issues.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Minimally Invasive Surgery (Laparoscopic/Endoscopic): </b> Utilizing advanced techniques for various procedures, resulting in smaller incisions and faster recovery times.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Trauma and Emergency Surgery: </b> Providing immediate surgical care for pediatric injuries and emergencies. 
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

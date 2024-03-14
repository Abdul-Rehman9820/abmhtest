
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
            usersearch: "102",
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
                  <h1 className="spetileh2gr">Paediatric Pulmonology</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                Pediatric pulmonology is a subspecialty of pediatrics focused on the diagnosis, treatment, and management of respiratory and lung-related conditions in children, ranging from infancy to adolescence. Pediatric pulmonologists are specially trained to address a wide range of respiratory issues unique to the pediatric population.
                </p>
              </div>
            </div>


            <div className="spectitleimgbox mt-3">

              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Services:</h1>
                  <span className="headbordergr" />
                </div>

                <ul className="specULbullet">


                  <li>
                    <p className="specilpara">
                      <b>Asthma Management:</b>  Diagnosis, treatment, and ongoing management of asthma in children, including personalized asthma action plans.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Chronic Respiratory Conditions:</b>  Comprehensive care for chronic respiratory conditions such as cystic fibrosis, bronchopulmonary dysplasia (BPD), and bronchiectasis.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Respiratory Infections:</b>  Evaluation and treatment of common respiratory infections, such as pneumonia, bronchitis, and recurrent respiratory infections.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Congenital and Acquired Airway Disorders:</b>  Diagnosis and management of congenital and acquired airway disorders, including congenital malformations and vascular rings.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Sleep-Related Breathing Disorders:</b>  Assessment and treatment of sleep-disordered breathing, including obstructive sleep apnea in children.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Neuromuscular Respiratory Conditions:</b>  Care for children with neuromuscular disorders affecting the respiratory system, such as muscular dystrophy.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Chest Wall Deformities:</b>  Evaluation and management of chest wall deformities, such as pectus excavatum and pectus carinatum.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Interstitial Lung Diseases:</b>  Diagnosis and treatment of rare pediatric interstitial lung diseases that affect the lung tissue.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Pulmonary Function Testing:</b>  Assessment of lung function through various pulmonary function tests to aid in diagnosis and treatment planning.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Ciliary Dyskinesia and Primary Ciliary Dyskinesia (PCD):</b>  Evaluation and management of conditions affecting ciliary function in the respiratory tract.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Allergic and Immunologic Respiratory Disorders:</b>  Identification and treatment of allergic and immunologic conditions contributing to respiratory symptoms.
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

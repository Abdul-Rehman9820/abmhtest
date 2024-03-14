
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
            usersearch: "106",
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
                  <h1 className="spetileh2gr">Paediatric Neurology</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                Pediatric neurology is a specialized field of medicine that focuses on the diagnosis, treatment, and management of neurological disorders in infants, children, and adolescents. Pediatric neurologists are specially trained to address a wide range of neurological conditions unique to the pediatric population.
                </p>          
              </div>
            </div>


            <div className="spectitleimgbox mt-3">

              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">key aspects of pediatric neurology services:</h1>
                  <span className="headbordergr" />
                </div>

                <ul className="specULbullet">


                  <li>
                    <p className="specilpara">
                      <b>Epilepsy and Seizure Disorders:</b> Diagnosis, treatment, and management of epilepsy and other seizure disorders in children.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Neuromuscular Disorders:</b> Evaluation and care for conditions affecting the nerves and muscles, including muscular dystrophy and neuropathies.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Headaches and Migraines:</b> Assessment and management of headaches and migraines in pediatric patients.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Neurogenetic Disorders:</b> Diagnosis and counseling for children with genetic disorders affecting the nervous system.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Movement Disorders:</b> Evaluation and treatment of conditions causing abnormal movements, such as tics, tremors, and dystonia.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Cerebral Palsy and Motor Disorders:</b> Comprehensive care for children with cerebral palsy and other motor coordination disorders.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Autism Spectrum Disorder (ASD) and Developmental Disorders:</b> Assessment and management of neurological aspects associated with ASD and developmental delays.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Neurocutaneous Syndromes:</b> Diagnosis and care for syndromes affecting both the nervous system and the skin, such as neurofibromatosis.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Neuroinflammatory Disorders:</b> Treatment of conditions involving inflammation of the nervous system, including multiple sclerosis in children.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Pediatric Stroke:</b> Evaluation and management of stroke and vascular disorders affecting the brain in children.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Neurological Effects of Metabolic Disorders:</b> Care for neurological manifestations of metabolic disorders, such as mitochondrial disorders.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Neuro-Oncology:</b> Collaborative care for children with brain tumors, involving neurosurgeons, oncologists, and radiation oncologists.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Neuropsychological Evaluation:</b> Assessment of cognitive and behavioral functions to aid in diagnosis and treatment planning.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Electroencephalogram (EEG) and Electromyography (EMG):</b> Diagnostic testing to measure electrical activity in the brain (EEG) and muscles (EMG).
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Sleep Disorders:</b> Evaluation and management of sleep-related disorders, including sleep apnea and insomnia.
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

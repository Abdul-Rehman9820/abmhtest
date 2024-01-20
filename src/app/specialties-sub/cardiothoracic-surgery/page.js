
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
            usersearch: "8",
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





      {/* <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">

            <div className="spectitleimgbox">
              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Cardiothoracic Surgery</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  Cardiothoracic Surgery specializes in surgical procedures related to the heart and thoracic (chest) region. Our cardiothoracic surgeons perform a variety of surgeries, including coronary artery bypass grafting (CABG) and valve replacement, ensuring comprehensive and effective cardiac interventions.
                </p>

              </div>
            </div>


          </div>
        </div>
      </div> */}


      {/*Hide for approval*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">


            <div className="spectitleimgbox">

              <div className="">

                <div className="spectitleimgbox">

                  <div className="spectitleimgbox1">
                    <Image width={400} height={400} src="/ABMH-machinery/ABMH-OT.jpg" alt="ABMH OT" />
                  </div>
                  <div className="spectitleimgbox2">
                    <div className="spectitle Specialtiesheadgr">
                      <h2 className="spetileh2gr">Cardiothoracic Surgery</h2>
                      <span className="headbordergr" />
                    </div>

                    <p className="specilpara">
                      Welcome to our Cardiovascular Thoracic Surgery department, where innovation meets expertise in the realm of heart and chest surgeries. Our highly skilledsurgical  teamspecialized in advanced procedures to address complex cardiovascular and thoracic conditions. From coronary artery surgeries to aortic aneurysm repairs, our surgeons ,with state-of-the-art technology and a patient-centric approach, we deliver the highest quality of care, ensuring optimal outcomes for each patient.
                    </p>

                  </div>
                </div>


              </div>

            </div>

            <div className="spectitleimgbox mt-4">

              <div className="">

                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Surgeries</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  <b>Open Heart Surgery:</b> Surgical interventions for congenital heart defects, including repairs of heart structures and vessels viz
                </p>
                <p className="specilpara">
                  <b>Coronary Artery Bypass Grafting (CABG):</b> Surgically rerouting blood flow around blocked coronary arteries to improve blood supply to the heart muscle.
                </p>
                <p className="specilpara">
                  <b>Valve Replacement or Repair:</b> Repairing or replacing dysfunctional heart valves, either with prosthetic ( Mechanical and biological ) valves or by preserving the existing ones.
                </p>
                <p className="specilpara">
                  <b>Minimally Invasive Cardiac Surgery:</b> Performing cardiac surgeries through small incisions, reducing trauma.blood loss and promoting quicker recovery in terms of quality of life.
                </p>
                <p className="specilpara">
                  <b>Septal Defect Closure:</b> Closing holes in the heart&apos;s septum (walls) using devices or surgical interventions esp. ASD and VSD
                </p>
                <p className="specilpara">
                  <b>Fontan Procedure/B D Glenn/ BT shunt/ ICR/Sennings procedure etc:</b> A surgical procedure to redirect blood flow in individuals with simple and complex congenital heart defects.
                </p>
                <p className="specilpara">
                  <b>Aortic Aneurysm Repair:</b> Surgical interventions to repair or replace weakened sections of the aorta, preventing the risk of rupture.
                </p>
                <p className="specilpara">
                  <b>Vascular Surgery:</b> Addressing conditions affecting blood vessels outside the heart, such as aortic dissections or peripheral vascular disease
                </p>
                <p className="specilpara">
                  <b>Thoracic Aortic Surgery:</b> Addressing conditions affecting the thoracic aorta, such as aneurysms or dissections, through surgical interventions.
                </p>
                <p className="specilpara">
                  <b>Pericardiectomy:</b> Surgical removal of the pericardium, the sac surrounding the heart, to treat conditions like constrictive pericarditis.
                </p>
                <p className="specilpara">
                  <b>Lung surgeries:</b> surgical treatment of lungs like removing a part or the entire lung to treat conditions like infections, tumors and others.
                </p>
                <p className="specilpara">
                  <b>Mediastinal surgeries:</b> Removing thymus (Thymectomy) for Myesthenia gravis and tumors located in the mediastinum.
                </p>
                <p className="specilpara">
                  <b>Esophageal Surgery:</b> Surgical interventions to address conditions affecting the esophagus, including cancer.
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



export default Dentistry;

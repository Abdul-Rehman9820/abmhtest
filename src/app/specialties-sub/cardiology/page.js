
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
            usersearch: "7",
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
                  <h1 className="spetileh2gr">Cardiology</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  Our Cardiology services involve the diagnosis and management of a wide range of cardiovascular conditions. Experienced cardiologists conduct thorough evaluations, recommend appropriate interventions, and provide ongoing care to patients with heart-related issues.
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
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Cardiology</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  Delivering unparalleled cardiac care for both adults and children, our Cardiology department at Aditya Birla Memorial Hospital, stands at the forefront of excellence. Our team of highly skilled cardiologists provides comprehensive and compassionate services to patients of all ages.
                </p>
              </div>

            </div>

            <div className="spectitleimgbox">

              <div className="">

                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Advanced Technology & Facilities</h1>
                  <span className="headbordergr" />
                </div>


                <div className="spectitleimgbox mt-3">

                  <div className="spectitleimgbox1">
                    <Image width={400} height={400} src="/ABMH-machinery/Cathlab.jpg" alt="Cathlab" />
                  </div>
                  <div className="spectitleimgbox2">
                    <div className="spectitle Specialtiesheadgr">
                      <h2 className="spetileh2gr">Cath lab</h2>
                      <span className="headbordergr" />
                    </div>

                    <p className="specilpara">
                      Experience the future of interventional medicine in our Flat Panel Cath Lab, equipped with a cutting-edge 55-inch flat panel display for unparalleled visualization. Our commitment to superior imaging is evident with Stent Boost Technology, enhancing precision in stent placement and providing clinicians with enhanced clarity during procedures.
                    </p>

                  </div>
                </div>

                <div className="spectitleimgbox mt-5">

                  <div className="spectitleimgbox1">
                    <Image width={400} height={400} src="/ABMH-machinery/Hybrid-Cath-Lab.jpg" alt="Hybrid Cath Lab" />
                  </div>
                  <div className="spectitleimgbox2">
                    <div className="spectitle Specialtiesheadgr">
                      <h2 className="spetileh2gr">Hybrid Cath Lab</h2>
                      <span className="headbordergr" />
                    </div>

                    <p className="specilpara">
                      Our state-of-the-art Hybrid Catheterization Laboratory where cutting-edge technology converges with advanced medical expertise to redefine interventional procedures. The Hybrid Cath Lab seamlessly combines the capabilities of a traditional catheterization lab with those of a surgical operating room, providing a versatile environment for a wide spectrum of procedures. Equipped with advanced imaging systems and precision tools, our facility allows our multidisciplinary team of cardiologists, radiologists, and surgeons to collaborate seamlessly in performing intricate interventions.
                    </p>

                  </div>
                </div>


              </div>

            </div>




            <div className="spectitleimgbox">

              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Procedures</h1>
                  <span className="headbordergr" />
                </div>

                <p className="specilpara">
                  <b>Electrophysiology Studies (EP study) and Ablation:</b> Procedures to diagnose and treat abnormal heart rhythms, often involving the use of catheters and radiofrequency energy.
                </p>
                <p className="specilpara">
                  <b>Pacemaker Implantation:</b> Surgical placement of a pacemaker to regulate and support the heart&apos;s electrical activity, ensuring proper heart rhythm.
                </p>
                <p className="specilpara">
                  <b>Cardiac Resynchronization Therapy (CRT):</b> A treatment involving the implantation of devices to improve the coordination of heart contractions in patients with heart failure.
                </p>
                <p className="specilpara">
                  <b>Heart Valve Repair or Replacement:</b> Surgical interventions to address malfunctioning heart valves or chocked up valves, either repairing them or replacing with artificial valves.
                </p>
                <p className="specilpara">
                  <b>Coronary Artery Bypass Grafting (CABG):</b> A surgical procedure to bypass blocked coronary arteries, restoring proper blood flow to the heart.
                </p>
                <p className="specilpara">
                  <b>Transcatheter Aortic Valve Replacement / Implantation (TAVR / TAVI):</b> A minimally invasive procedure to replace a damaged aortic valve without open-heart surgery.
                </p>
                <p className="specilpara">
                  <b>Vascular Interventions:</b> Procedures to address peripheral artery disease, including angioplasty, stent placement, and atherectomy using latest techniques with use of IVUS (Intravascular Ultrasonography) and OCT (Optical Coherence Tomography).
                </p>
                <p className="specilpara">
                  <b>Diagnostic Imaging:</b> Utilization of advanced imaging techniques such as echocardiography, cardiac MRI, CT angiography with 128 slice state of art CT scan and nuclear imaging for structural, functional assessment and diagnosis.
                </p>
                <p className="specilpara">
                  <b>Echocardiography:</b> Using 2D/3D and 4D ultrasound to create detailed imaging of the heart, helps to structural and functional abnormalities in heart.
                </p>
                <p className="specilpara">
                  <b>Electrocardiography (ECG or EKG):</b> Recording the electrical activity of the heart to evaluate heart rhythm and identify abnormalities.
                </p>
                <p className="specilpara">
                  <b>Holter Monitoring:</b> Continuous monitoring of the heart&apos;s electrical activity over 24 to 48 hours, aiding in the diagnosis of intermittent issues.
                </p>
                <p className="specilpara">
                  <b>Exercise Stress Testing:</b> Evaluating the heart&apos;s response to physical activity to identify any abnormalities or exercise-induced issues.
                </p>
                <p className="specilpara">
                  <b>Dobutamine Stress Echocardiography (DSE):</b> Facility for patients who cannot physically exert due to skeletal ailment in routine stress test.
                </p>
                <p className="specilpara">
                  <b>Balloon Valvuloplasty:</b> Using a balloon-tipped catheter to open narrowed heart valves, addressing congenital or acquired stenosis.
                </p>
                <p className="specilpara">
                  <b>Arrhythmia Management:</b> Including electrophysiology studies and ablation procedures to address irregular heart rhythms in children and adult.
                </p>
                <p className="specilpara">
                  <b>Fetal Echocardiography:</b> Assessing the heart of a developing fetus to detect congenital heart defects before birth. Our experts provide counseling about fetal heart, probability for surgery and other related issues.
                </p>
                <p className="specilpara">
                  <b>Cardiac Catheterization:</b> A minimally invasive procedure involving the insertion of a catheter to diagnose and treat certain heart conditions.
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

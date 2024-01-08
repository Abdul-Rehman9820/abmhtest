
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


    // api for profile


    async function fetchData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_Web_Domin}/api/profilebyspecilitypage`, {
          method: "POST",
          body: JSON.stringify({
            usersearch: "62",
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
                  <h1 className="spetileh2gr">Neurology</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  Neurology services focus on the diagnosis and management of neurological disorders, including conditions affecting the brain, spinal cord, and peripheral nerves. Our neurologists employ advanced diagnostic tools and therapeutic interventions to ensure optimal care.
                </p>

              </div>
            </div>


          </div>
        </div>
      </div>


      {/* hide for approval*/}

      {/* <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">

            <div className="spectitleimgbox">
              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Neurology</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  The Neurology Department at Aditya Birla Memorial Hospital brings together a team of specialists in neurology, neuropsychology, and psychiatry dedicated to diagnosing and treating intricate neurological issues. We boast an extensive clinical background in addressing a wide spectrum of neurological conditions, including strokes, brain traumas, epilepsy, Parkinson's disease, multiple sclerosis, and neck and spine disorders.
                </p>
                <p className="specilpara">
                  Utilizing state-of-the-art diagnostics and cutting-edge treatment options, our experts have a proven track record of delivering healthcare solutions to restore the intricate organ that is the brain, enabling patients to reclaim the life they cherish. Collaborating closely with other departments within the hospital, our neurologists aim to deliver comprehensive and personalized care, emphasizing patient education and support throughout their healthcare journey.
                </p>
              </div>
            </div>


            <div className="">
              <div className="spectitle Specialtiesheadgr">
                <h1 className="spetileh2gr">Infrastructure / Technology</h1>
                <span className="headbordergr" />
              </div>

              <div className="spectitleimgbox">
                <div className="spectitleimgbox1">
                  <Image width={400} height={400} src="/ABMH-machinery/NEURO-ICU.jpg" alt="NEURO ICU" />
                </div>
                <div className="spectitleimgbox2">
                  <div className="spectitle Specialtiesheadgr">
                    <h2 className="spetileh2gr">NEURO ICU</h2>
                    <span className="headbordergr" />
                  </div>

                  <p className="specilpara">
                    The Neuro Intensive Care Unit (ICU) within the department integrates the expertise of ICU personnel with advanced critical care training and technological proficiency. This enables continuous, 24/7 close monitoring and individualized care for patients.
                  </p>

                </div>
              </div>

              <div className="spectitleimgbox mt-4">
                <div className="spectitleimgbox1">
                  <Image width={400} height={400} src="/ABMH-machinery/CT-SCAN.jpg" alt="CT SCAN" />
                </div>
                <div className="spectitleimgbox2">
                  <div className="spectitle Specialtiesheadgr">
                    <h2 className="spetileh2gr">CT SCAN</h2>
                    <span className="headbordergr" />
                  </div>

                  <p className="specilpara">
                    A CT scan, or computed tomography scan, uses X-rays to create detailed cross-sectional images of the body's interior. It aids in diagnosing and treating various medical conditions by providing comprehensive views of bones, organs, and tissues.
                  </p>

                </div>
              </div>

              <div className="spectitleimgbox mt-4">
                <div className="spectitleimgbox1">
                  <Image width={400} height={400} src="/ABMH-machinery/MRI.jpg" alt="MRI" />
                </div>
                <div className="spectitleimgbox2">
                  <div className="spectitle Specialtiesheadgr">
                    <h2 className="spetileh2gr">MRI</h2>
                    <span className="headbordergr" />
                  </div>

                  <p className="specilpara">
                    MRI, or magnetic resonance imaging, utilizes strong magnets and radio waves to produce detailed images of internal body structures. It's crucial for diagnosing and assessing medical conditions, offering high-resolution views of organs and tissues.
                  </p>

                </div>
              </div>

            </div>


            <div className="spectitleimgbox mt-3">

              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Treatment & Procedure</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  <b>Chronic Headache:</b> Chronic headaches are persistent, recurring head pain that happens 15 or more days a month for at least three consecutive months. They encompass different types, such as tension-type headaches, migraines, and cluster headaches, each requiring specific management.
                </p>
                <p className="specilpara">
                  <b>Dementia:</b> The assessment, identification, and treatment of individuals experiencing memory-related conditions such as Alzheimer's and dementia.
                </p>
                <p className="specilpara">
                  <b>Parkinson's and Movement Disorders:</b> Parkinson's disease is a neurological disorder causing tremors, stiffness, and challenges in walking, balance, and coordination. Symptoms typically emerge gradually and worsen as the condition advances. Individuals may face increasing difficulties with both mobility and speech as the disease progresses.
                </p>
                <p className="specilpara">
                  <b>Multiple Sclerosis:</b> Multiple sclerosis (MS) is a chronic autoimmune disease affecting the central nervous system. It occurs when the immune system attacks the protective myelin covering nerve fibers, leading to diverse symptoms such as fatigue, numbness, and vision problems. While there's no cure, treatment options aim to manage symptoms and improve quality of life.
                </p>
                <p className="specilpara">
                  <b>Seizers & Epilepsy:</b>  A seizure is an abrupt, uncontrolled electrical disturbance in the brain, causing symptoms like convulsions. Epilepsy is a neurological disorder marked by recurrent seizures, managed with treatments like medication. The most advanced treatments for those suffering from disorders such as seizures and epilepsy for both adults and children
                </p>
                <p className="specilpara">
                  <b>Alzheimer:</b> is a progressive disorder that causes brain cells to waste away (degenerate) and die. Alzheimer's disease is the most common cause of dementia — a continuous decline in thinking, behavioural and social skills that disrupts a person's ability to function independently.
                </p>
                <p className="specilpara">
                  <b>Stroke:</b> Efficient care and surgical procedures for the treatment and recovery of medical emergencies, such as strokes.
                </p>
                <p className="specilpara">
                  <b>Neuromuscular disorders:</b> Neuromuscular disorders affect the peripheral nervous system, causing progressive muscle weakness. These conditions involve the motor and sensory nerves connecting the brain and spinal cord to the body.
                </p>
                <p className="specilpara">
                  <b>Electroencephalogram (EEG):</b> Our neurologists use EEG to record and analyze electrical activity in the brain, aiding in the diagnosis of conditions such as epilepsy, seizures, and other neurological disorders.
                </p>
                <p className="specilpara">
                  <b>Electromyography (EMG) and Nerve Conduction Studies (NCS):</b> These tests evaluate the health of muscles and the nerves that control them. EMG/NCS is crucial in diagnosing conditions like peripheral neuropathy, muscle disorders, and radiculopathies.
                </p>
                <p className="specilpara">
                  <b>Lumbar Puncture (Spinal Tap):</b> This procedure involves collecting cerebrospinal fluid from the spinal canal to help diagnose conditions like infections, multiple sclerosis, and certain neurological disorders.
                </p>
                <p className="specilpara">
                  <b>Botox Injections for Neurological Disorders:</b> Our department offers Botox injections as a therapeutic option for conditions such as chronic migraines, cervical dystonia, and spasticity.
                </p>

              </div>

            </div>




          </div>
        </div>
      </div> */}



      {/* specialties end*/}
    </>




  );


};



export default Dentistry;

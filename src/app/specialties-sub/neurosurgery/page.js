
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
            usersearch: "64",
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





      {/* <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">

            <div className="spectitleimgbox">
              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Neurosurgery</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  Neurosurgery services involve surgical interventions for conditions affecting the brain, spinal cord, and peripheral nerves. Our neurosurgeons utilize advanced techniques to provide precise and effective treatments.
                </p>

              </div>
            </div>


          </div>
        </div>
      </div> */}



      {/* hide for approval*/}

      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">

            <div className="spectitleimgbox">
              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Neurosurgery</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  Welcome to Aditya Birla Memorial Hospital&apos;s Neurosurgery Department. Our highly skilled neurosurgeons specialize in advanced techniques, treating conditions like brain and spinal tumors, vascular malformations, and traumatic brain injuries. Prioritizing patient well-being, we offer comprehensive, collaborative care for optimal outcomes, utilizing the latest medical advancements.
                </p>
                <p className="specilpara">
                  Our neurosurgeons collaborate closely with other medical professionals, including neurologists, radiologists, and rehabilitation specialists, to ensure comprehensive care before, during, and after surgery. From intricate brain surgeries to complex spinal procedures, our neurosurgery team is committed to utilizing the latest advancements in medical science to provide the highest standard of surgical care.
                </p>
              </div>
            </div>


            <div className="spectitleimgbox">
              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Surgeries</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  Our expert neurosurgeons utilize advanced techniques and state-of-the-art technology to provide optimal care. Here are some key surgeries performed by our Neurosurgery Department:
                </p>

                <ul className="specULbullet">


                  <li>
                    <p className="specilpara">
                      <b>Craniotomy:</b> A surgical procedure involving the removal of part of the skull to access and treat brain conditions, such as tumors, aneurysms, or traumatic injuries.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Spinal Fusion:</b> A procedure that joins two or more vertebrae in the spine to stabilize and alleviate pain caused by conditions like degenerative disc disease or spinal instability.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Microvascular Decompression (MVD):</b> A surgery to relieve pressure on cranial nerves, often used to treat trigeminal neuralgia or hemifacial spasm caused by blood vessels compressing nerves.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Brain Tumor Resection:</b> Surgical removal of brain tumors, which may involve partial or complete removal, depending on the tumor type, size, and location.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Laminectomy:</b> A procedure to remove part of the vertebral bone called the lamina to relieve pressure on the spinal cord or nerves, commonly performed for conditions like spinal stenosis.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Cerebrovascular Surgery:</b> Surgical interventions for conditions affecting blood vessels in the brain, including aneurysm repair, arteriovenous malformation (AVM) treatment, and carotid endarterectomy.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Peripheral Nerve Surgery:</b> Surgical interventions to address issues with peripheral nerves, such as nerve repair, nerve grafting, or release procedures for nerve compression.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Neuroendoscopic Procedures:</b> Minimally invasive surgeries using endoscopes to treat conditions within the ventricles of the brain or the spinal canal, reducing the need for open surgery.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Deep Brain Stimulation (DBS):</b> Implantation of electrodes into specific areas of the brain to modulate abnormal neural activity, providing therapeutic benefits for movement disorders such as Parkinson&apos;s disease, essential tremor, and dystonia.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Gamma Knife Radiosurgery:</b> Precise and non-invasive treatment using focused gamma radiation to target specific areas of the brain, commonly employed for conditions like essential tremor and certain types of brain tumors.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Vagus Nerve Stimulation (VNS):</b> Implantation of a device that stimulates the vagus nerve to alleviate seizures in patients with epilepsy who do not respond well to medication.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Responsive Neurostimulation (RNS):</b> Implantation of a device that monitors brain activity and delivers electrical stimulation in response to detected abnormal patterns, aiming to reduce the frequency of epileptic seizures.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Motor Cortex Stimulation:</b> Placement of electrodes on the motor cortex to modulate neural activity and manage chronic pain conditions, such as neuropathic pain or central pain syndromes.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Selective Dorsal Rhizotomy (SDR):</b> Surgical procedure involving the selective cutting of certain sensory nerve fibers in the spinal cord to reduce spasticity in conditions like cerebral palsy.
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

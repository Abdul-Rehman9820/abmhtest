
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Criticalcare = () => {


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
            usersearch: "12",
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
      <title>Critical Care</title>

      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Critical Care</span>
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


      {/* specialties  start*/}





      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">
            <div className="spectitle">
              <h1 className="spetileh1">Critical Care</h1>
            </div>
            <div className="spectitleimgbox">
              <div className="spectitleimgbox1">
                <Image width={400} height={400} src="/specialityviewimag/critical_care.jpg" alt="img" />
              </div>
              <div className="spectitleimgbox2">
                <p className="specilpara">
                  <b>Aditya Birla Memorial Hospital</b> - The multi super speciality
                  hospital is a center of excellence in the management of critically
                  ill patients.
                </p>
                <p className="specilpara">
                  Critical care medicine encompasses the diagnosis and treatment of
                  a wide variety of clinical problems representing the extreme of
                  human disease. Critically ill patients require intensive care by a
                  qualified team of intensive care consultant.
                </p>
                <p className="specilpara">
                  The Department of Critical Care medicine is dedicated to the best
                  comprehensive and holistic tertiary/quaternary care of the patient
                  at par with international standards.
                </p>
                <p className="specilpara">
                  We have one of the state of the art leading Intensive Care Units
                  in India, admitting around 3500 patients every year that is manned
                  24 hours by a team of full time consultants. Following specialty
                  patients are treated at our Critical Care Unit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parentcontainerwhi specipgGRY">
        <div className="customcontainer">
          <div className="specsingleparnGra">
            <div className="spectitlegrcont">
              <div className="spectitlegrcont1">
                <div className="Specialtiesheadgr">
                  <h2 className="spetileh1gr">Infrastructure</h2>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  Our Critical Care department is currently equipped with 55
                  critical care beds, which are operational in the MICU, SICU,
                  TRAUMA and HDU with a capacity to expand up to 125 beds, with a
                  24x7 back up of a wide range of super specialty services such as
                  state-of-the-art NABL accredited laboratory services, imaging
                  services, transfusion medicine, physiotherapy, dietetics,
                  para-medical staff and medical social worker for taking care of
                  the patient and counselling patient relatives.
                </p>
                <p className="specilpara">
                  Critical Care is provided by full time internationally qualified
                  consultants backed by an experienced team of intensivists. The
                  nursing staff in our ICU is trained in managing critically ill
                  patient.
                </p>
                <p className="specilpara">
                  At Aditya Birla Memorial Hospital we believe in multidisciplinary
                  approach to the management of critically ill patients.
                </p>
              </div>
              <div className="spectitlegrcont2">
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <Image width={400} height={400} src="/specialityviewimag/General Medicine.jpg" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">General Medicine</p>
                  </div>
                </div>
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <Image width={400} height={400}
                      src="/specialityviewimag/Respiratory Medicine.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">Respiratory Medicine</p>
                  </div>
                </div>
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <Image width={400} height={400} src="/specialityviewimag/Renal Transplants.jpg" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">Renal Transplants</p>
                  </div>
                </div>
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <Image width={400} height={400} src="/specialityviewimag/(GI) surgery.jpg" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">General &amp; Upper GI surgery</p>
                  </div>
                </div>
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <Image width={400} height={400} src="/specialityviewimag/head_surgery.jpg" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">Head &amp; Neck Surgery</p>
                  </div>
                </div>
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <Image width={400} height={400} src="/specialityviewimag/ent_surgery.jpg" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">Ent Surgery</p>
                  </div>
                </div>
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <Image width={400} height={400} src="/specialityviewimag/Neurosurgery.jpg" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">Neurology &amp; Neurosurgery</p>
                  </div>
                </div>
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <Image width={400} height={400} src="/specialityviewimag/Vascular Surgery.jpg" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">Vascular Surgery</p>
                  </div>
                </div>
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <Image width={400} height={400} src="/specialityviewimag/orthopaedics.jpg" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">Trauma &amp; Orthopaedics</p>
                  </div>
                </div>
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <Image width={400} height={400}
                      src="/specialityviewimag/Gynecology_Obstetrics.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">Gynecology and Obstetrics</p>
                  </div>
                </div>
                <div className="testimgboxcont">
                  <div className="testimgboxcot1">
                    <Image width={400} height={400} src="/specialityviewimag/Maxillofacial.jpg" alt="img" />
                  </div>
                  <div className="testimgboxcot2">
                    <p className="testimgtitle">
                      Maxillofacial &amp; Plastic Reconstructive Surgery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>








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


      {/* specialties end*/}
    </>




  );


};



export default Criticalcare;

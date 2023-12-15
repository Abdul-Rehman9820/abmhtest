
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Laboratorymedicine = () => {


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
            usersearch: "37",
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
      <title>Laboratory Medicine</title>

      {/* common heading div start*/}
      {/* <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Laboratory Medicine</span>
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


      {/* specialties  start*/}



      <>
        <div className="parentcontainerwhi">
          <div className="customcontainer">
            <div className="specsingleparn">
              <div className="spectitle">
                <h1 className="spetileh1">Laboratory Medicine</h1>
              </div>
              <div className="spectitleimgbox">
                <div className="spectitleimgbox1">
                  <Image width={400} height={400} src="/specialityviewimag/laboratory medicine.jpg" alt="img" />
                </div>
                <div className="spectitleimgbox2">
                  <p className="specilpara">
                    Laboratory Services are among the most important and pervasive
                    aspects of modern medicine. A majority of health care decisions
                    are derived at after clinical laboratory tests. Laboratory tests
                    provide doctors with the information needed for making diagnosis,
                    select therapy and monitor prognosis. The large test menu covers
                    biochemistry, hematology, histopathology &amp; cytopathology,
                    clinical pathology and microbiology amongst others.
                  </p>
                  <p className="specilpara">
                    The Aditya Birla Memorial Hospital laboratory is a NABL accredited
                    medical diagnostic laboratory that offers a full range of
                    laboratory services, following strict norms and international
                    guideline for laboratory procedures. The department of laboratory
                    services is the first in India to use the pneumatic chute for
                    transporting samples from sample collection to processing
                    laboratory, in order to avoid contamination, save time.
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
                    Our laboratory is equipped with state of the art apparatus and
                    technology for quick and accurate reporting. This is backed by
                    equally experienced and dedicated staff that helps improve the
                    clinical outcome of patients.
                  </p>
                  <p className="specilpara">
                    The laboratory information system (LIS) is used for digitally
                    receiving samples, validation and authorization of the results.
                    The test values/reports can be digitally viewed from various
                    wards, OPDs or ICU workstations as soon as they are authorized,
                    thus effectively saving valuable time in early management of
                    patients. Our laboratory works 24x7 for patient services. Urgent
                    (STAT) samples are processed on priority and reported immediately.
                  </p>
                </div>
                <div className="spectitlegrcont2">
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Biochemistry.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Biochemistry</p>
                    </div>
                  </div>
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400}
                        src="/specialityviewimag/Clinical Pathology.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Clinical Pathology</p>
                    </div>
                  </div>
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Cytology.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Cytology</p>
                    </div>
                  </div>
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Hematology.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Hematology</p>
                    </div>
                  </div>
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Histopathology.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Histopathology</p>
                    </div>
                  </div>
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400}
                        src="/specialityviewimag/Immuno-histochemistry.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Immuno-histochemistry</p>
                    </div>
                  </div>
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Immunology.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Immunology</p>
                    </div>
                  </div>
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Microbiology.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Microbiology</p>
                    </div>
                  </div>
                  <div className="testimgboxcont">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/specialityviewimag/Serology.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Serology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>







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
                                    <h2>{profile.DoctorFName} {profile.DoctorLName}</h2>
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



export default Laboratorymedicine;

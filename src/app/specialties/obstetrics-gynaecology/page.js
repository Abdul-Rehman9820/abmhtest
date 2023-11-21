
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Obstetricsgynaecology = () => {


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
            usersearch: "48",
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
      <title>Obstetrics & Gynaecology</title>

      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Obstetrics & Gynaecology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* common heading div end*/}
      {/* common heading banner start */}
      <div className="mainheadingbanner">
        <div className="mainheadingbandiv">
          <Image width={2000} height={400} src="/specialityviewimag/Multi-specialities-banner.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}


      {/* specialties  start*/}




      <>
  <div className="parentcontainerwhi">
    <div className="customcontainer">
      <div className="specsingleparn">
        <div className="spectitle">
          <h1 className="spetileh1">Obstetrics & Gynaecology</h1>
        </div>
        <div className="Specialtiesheadgr">
          <h2 className="spetileh1gr">
            Best Pregnancy and Child Care Hospital in India.
          </h2>
          <span className="headbordergr" />
        </div>
        <div className="spectitleimgbox">
          <div className="spectitleimgbox1">
            <Image width={400} height={400}
              src="/specialityviewimag/youtube_video_thumbnail_3.png"
              alt="img"
            />
          </div>
          <div className="spectitleimgbox2">
            <p className="specilpara">
              At Aditya Birla Memorial Hospital we have a world class Institute
              of Mother &amp; Child, equipped with the latest technology and
              experienced staff our Mother &amp; Child wing is dedicated to the
              welfare of both the mother and child. We offer services of
              Obstetrics and Gynecology that deals with the care of women from
              puberty to menopause; it covers all conditions of reproductive
              system from the birth of girl child onwards to problems of
              puberty, conception and delivery, contraception and family
              planning services. The gynecologist is primary care doctor for
              women of all age groups.
            </p>
            <p className="specilpara">
              Our Obstetrics, Gynecology and Reproductive Medicine consultants
              deal with several sub specialities such as high risk obstetrics
              for pregnancies complicated with high blood pressure or diabetes
              and Assisted Reproductive Technologies (ART) for difficult cases
              of infertility. Our in house Gynecologists manage precancerous
              cases and cancers of uterus, ovaries and cervix. Fetal medicine
              deals with complicated twin deliveries and inherited conditions.
              Geriatric Gynecology is a new field that renders care of women
              beyond menopause.
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
              The Mother and Child facility is ably supported by experienced
              Paediatric staff backed by modern neonatal intensive care and
              Paediatric surgical carefacilities. Our center is equipped with
              four independent and fully furnished labor suites, connected to a
              dedicated Gynaec operation theatre, where patients receives
              individual care from the pediatricians,doctors and the nursing
              staff;both pre and post pregnancy.{" "}
            </p>
            <p className="specilpara">
              Additionally, the mother and child is supported by trained
              gyneacologists with facilities to detect cancer in the OPD itself,
              offering Gyne-Oncology and Urogynecology services for highly
              specialized care of patients with cancer and urinary problems.
            </p>
          </div>
          <div className="spectitlegrcont2">
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400} src="/specialityviewimag/Andrology.jpg" alt="img" />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Andrology</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400} src="/specialityviewimag/IVF.jpg" alt="img" />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">IVF</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Paediatric Services.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Paediatric Services</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400} src="/specialityviewimag/Neonatal Services.jpg" alt="img" />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle"> Neonatal Services</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400} src="/specialityviewimag/Antenatal Classes.jpg" alt="img" />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Antenatal Classes</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/The Acute Care Transport Service.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">
                  Acute Care Child Transport Services
                </p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Adolescent Medicine.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Adolescent Medicine</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400} src="/specialityviewimag/Immunization.jpg" alt="img" />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Immunization</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400} src="/specialityviewimag/Nutrition Support.jpg" alt="img" />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Nutrition Support</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400} src="/specialityviewimag/Colposcopy Clinic.jpg" alt="img" />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Colposcopy Clinic</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/High-Risk Obstetrics.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">High-Risk Obstetrics</p>
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
                className="carousel slide carousel-fade"
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



export default Obstetricsgynaecology;

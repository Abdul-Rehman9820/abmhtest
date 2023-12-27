
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Andrologyandsexualmedicine = () => {


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
            usersearch: "19",
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
      <title>Endocrine Surgery</title>

      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Endocrine Surgery</span>
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

            {/* team of expert slider start*/}
            <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleDoclist">
            <div className="Specialtiesheadgr">
              <h2 className="spetileh2gr">Our Team Of Experts</h2>
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


      {/* specialties  start*/}



      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">
            <div className="spectitle">
              <h1 className="spetileh1">Endocrine Surgery</h1>
            </div>
            <div className="spectitleimgbox">
              <div className="spectitleimgbox1">
                <Image width={400} height={400} src="/specialityviewimag/endocrine_surgerytopimg.jpg" alt="img" />
              </div>
              <div className="spectitleimgbox2">
                <div className="spectitle Specialtiesheadgr">
                  <h2 className="spetileh2gr">Thyroidectomy</h2>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  A surgical procedure to remove all or part of the thyroid gland, often performed in cases of thyroid cancer, nodules, or hyperthyroidism. It aims to restore hormonal balance and prevent the spread of malignancy.
                </p>
                <div className="spectitle Specialtiesheadgr">
                  <h2 className="spetileh2gr">Parathyroidectomy</h2>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  Removal of one or more parathyroid glands to treat hyperparathyroidism, a condition causing excess production of parathyroid hormone (PTH). This surgery aims to restore calcium and phosphorus balance.
                </p>
              </div>
            </div>


            <div className="spectitlepara">
              <div className="spectitle Specialtiesheadgr">
                <h2 className="spetileh2gr">Adrenalectomy </h2>
                <span className="headbordergr" />
              </div>
              <p className="specilpara">
                Surgical removal of one or both adrenal glands, commonly performed to treat adrenal tumors or overproduction of adrenal hormones. It restores hormonal balance and addresses conditions like Cushing&apos;s syndrome.
              </p>
            </div>
            <div className="spectitlepara">
              <div className="spectitle Specialtiesheadgr">
                <h2 className="spetileh2gr">Pancreatectomy </h2>
                <span className="headbordergr" />
              </div>
              <p className="specilpara">
                Partial or complete removal of the pancreas, often performed for tumors or chronic pancreatitis. This surgery helps manage insulin production and digestive enzyme secretion.
              </p>
            </div>
            <div className="spectitlepara">
              <div className="spectitle Specialtiesheadgr">
                <h2 className="spetileh2gr">Hypophysectomy </h2>
                <span className="headbordergr" />
              </div>
              <p className="specilpara">
                Removal of the pituitary gland, usually through the nasal cavity. It&apos;s employed to address tumors affecting the pituitary, regulate hormone production, and alleviate symptoms such as headaches and vision problems.
              </p>
            </div>
            <div className="spectitlepara">
              <div className="spectitle Specialtiesheadgr">
                <h2 className="spetileh2gr">Testicular Surgery </h2>
                <span className="headbordergr" />
              </div>
              <p className="specilpara">

                Surgical procedures on the testicles may involve removal of tumors, correction of testicular torsion, or addressing conditions like hydrocele. These surgeries aim to preserve reproductive function and hormonal balance.
              </p>
            </div>
            <div className="spectitlepara">
              <div className="spectitle Specialtiesheadgr">
                <h2 className="spetileh2gr">Oophorectomy </h2>
                <span className="headbordergr" />
              </div>
              <p className="specilpara">
                Removal of one or both ovaries, often performed to treat ovarian cancer, cysts, or hormonal disorders. It can help manage hormone levels and prevent the spread of malignancies.
              </p>
            </div>
            <div className="spectitlepara">
              <div className="spectitle Specialtiesheadgr">
                <h2 className="spetileh2gr">Laparoscopic Surgery for Endocrine Conditions</h2>
                <span className="headbordergr" />
              </div>
              <p className="specilpara">
                Minimally invasive procedures using small incisions and specialized instruments to perform various endocrine surgeries. This approach often results in quicker recovery times and reduced postoperative discomfort.
                These endocrine surgery types encompass a range of procedures addressing conditions affecting glands and organs responsible for hormone production and regulation. Each type is tailored to specific medical situations, contributing to the overall well-being of patients.
              </p>
            </div>




          </div>
        </div>
      </div>






      {/* specialties end*/}
    </>




  );


};



export default Andrologyandsexualmedicine;

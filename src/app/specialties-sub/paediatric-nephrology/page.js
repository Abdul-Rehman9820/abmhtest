
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
            usersearch: "105",
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
                  <h1 className="spetileh2gr">Paediatric Nephrology</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                Pediatric nephrology is a specialized branch of medicine that focuses on the diagnosis, treatment, and management of kidney-related disorders in infants, children, and adolescents. Pediatric nephrologists are specially trained to address a wide range of kidney conditions unique to the pediatric population.
                </p>             
              </div>
            </div>


            <div className="spectitleimgbox mt-3">

              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Key pediatric nephrology services:</h1>
                  <span className="headbordergr" />
                </div>

                <ul className="specULbullet">


                  <li>
                    <p className="specilpara">
                      <b>Congenital Kidney Abnormalities:</b> Diagnosis and management of congenital kidney anomalies, including polycystic kidney disease, renal dysplasia, and structural abnormalities.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Acute Kidney Injury (AKI):</b> Evaluation and treatment of sudden and severe kidney dysfunction, often resulting from infections, dehydration, or other acute conditions.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Chronic Kidney Disease (CKD):</b> Management of chronic kidney diseases, which can be congenital or acquired, and may progress to end-stage renal disease (ESRD).
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Hematuria and Proteinuria:</b> Evaluation and management of conditions causing blood or protein in the urine, such as glomerulonephritis or nephrotic syndrome.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Urinary Tract Infections (UTIs):</b> Diagnosis and treatment of UTIs, which are common in children and can sometimes lead to kidney involvement.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Fluid and Electrolyte Disorders:</b> Assessment and management of imbalances in fluids and electrolytes, crucial for overall kidney health.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Renal Tubular Disorders:</b> Diagnosis and treatment of disorders affecting the renal tubules, which can impact electrolyte balance and acid-base equilibrium.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Nephrolithiasis (Kidney Stones):</b> Evaluation and management of kidney stones, which can occur in children and lead to recurrent urinary tract issues.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Hypertension (High Blood Pressure):</b> Diagnosis and treatment of hypertension related to kidney disorders or other underlying conditions.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Hereditary Kidney Diseases:</b> Management of hereditary kidney diseases, such as Alport syndrome or autosomal recessive polycystic kidney disease.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Renal Transplantation:</b> Evaluation and pre-transplant care for children requiring kidney transplantation, as well as post-transplant follow-up.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Pediatric Dialysis:</b> Management of children requiring dialysis for the treatment of ESRD, including peritoneal dialysis and hemodialysis.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Genetic Counseling:</b> Counseling families about the genetic aspects of kidney disorders and the risk of recurrence.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Renal Biopsy:</b> Performance and interpretation of renal biopsies to aid in the diagnosis of certain kidney conditions.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Growth and Development Monitoring:</b> Regular monitoring of growth and development in children with kidney disorders, ensuring appropriate interventions.
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


"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import './OurSpecialties.css'



const Specialties = () => {


  const filterFunction = () => {


    var input, filter, div, divItems, i, txtValue;
    input = document.getElementById("myInputsp");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdownsp");
    divItems = div.getElementsByClassName("myhrefsp");
    for (i = 0; i < divItems.length; i++) {
      txtValue = divItems[i].textContent || divItems[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        divItems[i].style.display = "";
      } else {
        divItems[i].style.display = "none";
      }
    }

  };



  useEffect(() => {


    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll


  }, []);




  return (


    <>

      <title>Medical Specialties | Expert Healthcare Services in Pune - Aditya Birla Hospital</title>
      <meta name="description" content="Explore diverse medical specialties at Aditya Birla Hospital, Pune. Our expert healthcare services encompass a range of specialized treatments and care for your well-being." />


      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / <span className="breadcrumbsactive">Our Specialties</span>
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
          <Image width={2000} height={400} src="/commonimages/Multi-specialities-banner.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}
      {/* specialties  start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specialParentcont">

            <div className="specialityserchcont" id="newbysir">
              <div className="serachboxstar">
                <div id="myDropdownsp">

                  <div className="specflex">
                    <input type="text" placeholder="Search Specialty ..." id="myInputsp" onKeyUp={filterFunction} />
                    <i className="fa fa-search"></i>
                  </div>



                  <form id="colorFormsp">

                    <div className="checkboxcontsp">


                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/accident-and-emergency">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Accident-&-Emergency.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/accident-and-emergency">
                                <h2>Accident & Emergency</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>



                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/anesthesiology">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Anaesthesiology.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/anesthesiology">
                                <h2>Anesthesiology</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/andrology-and-sexual-medicine">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Andrology-and-Sexual-Medicine.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/andrology-and-sexual-medicine">
                                <h2>Andrology & Sexual Medicine</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/bariatric-and-metabolic-surgery">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Bariatric-&-Metabolic-Surgery.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/bariatric-and-metabolic-surgery">
                                <h2>Bariatric & Metabolic Surgery</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/cardiac-sciences">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Cardiac-Sciences.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/cardiac-sciences">
                                <h2>Cardiac Sciences</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/clinical-hematology">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Clinical-Haematology.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/clinical-hematology">
                                <h2>Clinical Hematology</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/critical-care-unit">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Critical-Care-Unit.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/critical-care-unit">
                                <h2>Critical Care  Unit</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>




                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/dentistry">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Dentistry.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/dentistry">
                                <h2>Dentistry</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/dermatology-&-cosmetology">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Dermatology-&-Cosmetology.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/dermatology-&-cosmetology">
                                <h2>Dermatology & Cosmetology</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/dietetics-&-nutrition-lifestyle">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Dietetics-&-Nutrition-(Lifestyle).jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/dietetics-&-nutrition-lifestyle">
                                <h2>Dietetics & Nutrition (Lifestyle)</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/endocrinology-&-diabetology">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Endocrinology-&-Diabetology.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/endocrinology-&-diabetology">
                                <h2>Endocrinology & Diabetology</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/fetal-&-genetic-medicine">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Fetal-&-Genetic-Medicine.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/fetal-&-genetic-medicine">
                                <h2>Fetal & Genetic Medicine</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/gastroscience">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Gastroscience.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/gastroscience">
                                <h2>Gastroscience</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/general-surgery">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/General-Surgery.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/general-surgery">
                                <h2>General Surgery</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/gi-surgery">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/GI-SURGERY.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/gi-surgery">
                                <h2>GI Surgery</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/heamatology">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Heamatology.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/heamatology">
                                <h2>Heamatology</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/hepatology-and-liver-transplantation">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Hepatology-and-Liver-transplantation.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/hepatology-and-liver-transplantation">
                                <h2>Hepatology and Liver transplantation </h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/interventional-radiology">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Interventional-Radiology.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/interventional-radiology">
                                <h2>Interventional Radiology</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/internal-medicine">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Internal-Medicine.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/internal-medicine">
                                <h2>Internal Medicine</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/infectious-disease">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Infectious-Disease.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/infectious-disease">
                                <h2>Infectious Disease</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/medical-oncology">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Medical-Oncology.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/medical-oncology">
                                <h2>Medical Oncology</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/nephrology-&-renal-transplant">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Nephrology-&-Renal-transplant.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/nephrology-&-renal-transplant">
                                <h2>Nephrology & Renal transplant</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/neuroscience">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Neuroscience.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/neuroscience">
                                <h2>Neuroscience</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/nuclear-medicine">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Nuclear-Medicine.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/nuclear-medicine">
                                <h2>Nuclear Medicine</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/obs-&-gynae">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Obs-&-Gynae.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/obs-&-gynae">
                                <h2>Obstetrics & Gynae</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/Ophthalmology">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Opthamology.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/Ophthalmology">
                                <h2>Ophthalmology</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/oral-&-maxillofacial">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Oral-and-Maxillofacial.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/oral-&-maxillofacial">
                                <h2>Oral & Maxillofacial</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/organ-transplant">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Organ-Transplant.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/organ-transplant">
                                <h2>Organ Transplant</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/orthopaedic">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Orthopaedic.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/orthopaedic">
                                <h2>Orthopaedic</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/otolaryngology-ent">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Otolaryngology-(ENT).jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/otolaryngology-ent">
                                <h2>Otolaryngology (ENT)</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/physiotherapy-rehab">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Physiotherapy-&-Rehabilitative-Medicine.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/physiotherapy-rehab">
                                <h2>Physiotherapy & Rehabilitative Medicine</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/physiotherapy-&-rehabilitation">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Physiotherapy-&-Rehabilitation.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/physiotherapy-&-rehabilitation">
                                <h2>Physiotherapy & Rehabilitation</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/plastic-&-reconstructive-surgery">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Plastic-and-Reconstructive-Surgery.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/plastic-&-reconstructive-surgery">
                                <h2>Plastic & Reconstructive Surgery</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/psychiatry">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Psychiatry.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/psychiatry">
                                <h2>Psychiatry</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/pediatrics">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Paediatrics.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/pediatrics">
                                <h2>Paediatrics</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/pulmonary-medicine">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Pulmonory-Medicine.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/pulmonary-medicine">
                                <h2>Pulmonory Medicine</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/pain-management">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Pain-Management.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/pain-management">
                                <h2>Pain Management</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/robotic-assisted-surgery">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Robotic-Assisted-Surgery.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/robotic-assisted-surgery">
                                <h2>Robotic Assisted Surgery</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/radiation-oncology">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Radiation-Oncology.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/radiation-oncology">
                                <h2>Radiation Oncology</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/reproductive-medicine">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Reproductive-Medicine.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/reproductive-medicine">
                                <h2>Reproductive Medicine</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/rheumatology-&-immunology">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Rheumatology-&-Immunology.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/rheumatology-&-immunology">
                                <h2>Rheumatology & Immunology</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/surgical-oncology">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Surgical-Oncology.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/surgical-oncology">
                                <h2>Surgical Oncology</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/transfusion-medicine">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Transfusion-Medicine.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/transfusion-medicine">
                                <h2>Transfusion Medicine</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/urology">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Urology.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/urology">
                                <h2>Urology</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/vascular-surgery">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Vascular-Surgery.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/vascular-surgery">
                                <h2>Vascular Surgery</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="myhrefsp">
                        <div className="spaccontsearch">
                          <div className="speforwhitbgsearch">
                            <Link href="/specialties/wellness">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/newspecilitymainimage/Wellness.jpg"
                                  alt="img"
                                />
                              </div>
                            </Link>
                            <div className="speforwhitbgCol1spsearch">
                              <Link href="/specialties/wellness">
                                <h2>Wellness</h2>
                              </Link>
                              <h2 className="diparmenthideORkeywords">
                                deparment name or key words for search
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>

                  </form>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      {/* specialties end*/}
    </>




  );


};



export default Specialties;

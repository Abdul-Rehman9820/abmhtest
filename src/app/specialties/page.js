
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
                          <input type="text" placeholder="Search Specialty ..."  id="myInputsp" onKeyUp={filterFunction}/>
                          <i class="fa fa-search"></i>
                      </div>



                    <form id="colorFormsp">

                      <div className="checkboxcontsp">


                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Accident & Emergency.jpg"
                                  alt="img"
                                />
                              </div>
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
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Anesthesiology.jpg"
                                  alt="img"
                                />
                              </div>
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
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Andrology & Sexual Medicine.jpg"
                                  alt="img"
                                />
                              </div>
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
                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Breast Onco Surgery.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/breast-onco-surgery">
                                  <h2>Breast Onco Surgery</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Bariatric & Metabolic Surgery.jpg"
                                  alt="img"
                                />
                              </div>
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
                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Brachial Plexus Injury and Hand Surgery.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/brachial-plexus-injury-and-hand-surgery">
                                  <h2>Brachial Plexus Injury and Hand Surgery</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/dummy.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties">
                                  <h2>Cardiac Sciences</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Cardiac Anesthesiology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/cardiac-anesthesiology">
                                  <h2>Cardiac Anesthesiology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Cardiology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/Cardiology">
                                  <h2>Cardiology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Cardiovascular and Thoracic Surgery.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/cardiovascular-and-thoracic-surgery">
                                  <h2>Cardiovascular and Thoracic Surgery</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}


                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Clinical Hematology.jpg"
                                  alt="img"
                                />
                              </div>
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

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Clinical Psychology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/clinical-psychology">
                                  <h2>Clinical Psychology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}


                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Critical Care.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/critical-care">
                                  <h2>Critical Care  Unit</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>


                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Child Psychology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/child-psychology">
                                  <h2>Child Psychology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Clinical Pharmacology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/clinical-pharmacology">
                                  <h2>Clinical Pharmacology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        
                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Dermatology & Aesthetics.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dermatology-aesthetics">
                                  <h2>Dermatology & Aesthetics</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Dentistry.jpg"
                                  alt="img"
                                />
                              </div>
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
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Diabetology & Endocrinology.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties">
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
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Diabetology & Endocrinology.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties">
                                  <h2>Dietetics & Nutrition (Lifestyle)</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Diabetology & Endocrinology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/diabetology-and-endocrinology">
                                  <h2>Diabetology & Endocrinology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}


                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/ENT (Ear, Nose, Throat).jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/ent">
                                  <h2>Endocrinology & Diabetology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>


                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/ENT (Ear, Nose, Throat).jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/ent">
                                  <h2>ENT (Ear, Nose, Throat)</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}


                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Endocrine Surgery.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/endocrine-surgery">
                                  <h2>Endocrine Surgery</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Epilepsy Surgery.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/epilepsy-surgery">
                                  <h2>Epilepsy Surgery</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}


                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Foetal Medicine.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/">
                                  <h2>Fetal & Genetic Medicine</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>


                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Foetal Medicine.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/foetal-medicine">
                                  <h2>Foetal Medicine</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Foot & Ankle Surgery.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/foot-and-ankle-surgery">
                                  <h2>Foot & Ankle Surgery</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}


                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Gastroenterology.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties">
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
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Gastroenterology.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/">
                                  <h2>General Surgery </h2>
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
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Gastroenterology.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/">
                                  <h2>GI SURGERY</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>


                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Gastroenterology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/gastroenterology">
                                  <h2>Gastroenterology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}


                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Gastrointestinal Surgery.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/gastrointestinal-surgery">
                                  <h2>Gastrointestinal Surgery</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/General Surgery & Minimal Invasive.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/general-surgery-and-minimal-invasive">
                                  <h2>General Surgery & Minimal Invasive</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Gynae Oncology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/gynae-oncology">
                                  <h2>Gynae Oncology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Genetics.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/genetics">
                                  <h2>Genetics</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Genito Urinary.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/genito-urinary">
                                  <h2>Genito Urinary</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Hepatology.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties">
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
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Hepatology.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties">
                                  <h2>Hepatology and Liver transplantation </h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>


                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Hepatology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/hepatology">
                                  <h2>Hepatology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Hepatobiliary Surgery.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/hepatobiliary-surgery">
                                  <h2>Hepatobiliary Surgery</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Hair Transplant.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/hair-transplant">
                                  <h2>Hair Transplant</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}


                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Interventional Radiology.jpg"
                                  alt="img"
                                />
                              </div>
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
                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/IVF & Reproductive Medicine.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/ivf-and-reproductive-medicine">
                                  <h2>IVF & Reproductive Medicine</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Intensivist.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/intensivist">
                                  <h2>Intensivist</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Internal Medicine.jpg"
                                  alt="img"
                                />
                              </div>
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
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Infectious Disease.jpg"
                                  alt="img"
                                />
                              </div>
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

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Liver Transplant.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/liver-transplant">
                                  <h2>Liver Transplant</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Laboratory Medicine.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/laboratory-medicine">
                                  <h2>Laboratory Medicine</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Lactation.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/lactation">
                                  <h2>Lactation</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Maxillofacial.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/maxillofacial">
                                  <h2>Maxillofacial</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Medical Oncology.jpg"
                                  alt="img"
                                />
                              </div>
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
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Nuclear Medicine.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties">
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
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Nuclear Medicine.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties">
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
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Nuclear Medicine.jpg"
                                  alt="img"
                                />
                              </div>
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





                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Nutrition and Dietetics.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/nutrition-dietetics">
                                  <h2>Nutrition and Dietetics</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Nephrology & Kidney Transplant.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/nephrology-and-kidney-transplant">
                                  <h2>Nephrology & Kidney Transplant</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Neuro surgery.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/neuro-surgery">
                                  <h2>Neuro surgery</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Neurology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/neurology">
                                  <h2>Neurology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Neonatology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/neonatology">
                                  <h2>Neonatology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Orthopedics & Joint Replacement.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/orthopedics-joint-replacement">
                                  <h2>Orthopedics & Joint Replacement</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Oncology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/oncology">
                                  <h2>Oncology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Obstetrics & Gynaecology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/obstetrics-gynaecology">
                                  <h2>Obstetrics & Gynaecology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Ophthalmology.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/">
                                  <h2>Obs & Gynae</h2>
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
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Ophthalmology.jpg"
                                  alt="img"
                                />
                              </div>
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
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Ophthalmology.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/">
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
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Ophthalmology.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/">
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
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Ophthalmology.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/">
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
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Ophthalmology.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/">
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
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Physiotherapy & Rehab.jpg"
                                  alt="img"
                                />
                              </div>
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
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Physiotherapy & Rehab.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/">
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
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Psychiatry.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/">
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
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Psychiatry.jpg"
                                  alt="img"
                                />
                              </div>
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
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Pediatrics.jpg"
                                  alt="img"
                                />
                              </div>
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


                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Pediatrics Cardiology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/pediatrics-cardiology">
                                  <h2>Pediatrics Cardiology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Pediatric Dentistry.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/pediatric-dentistry">
                                  <h2>Pediatric Dentistry</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Pediatric Endocrinology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/pediatric-endocrinology">
                                  <h2>Pediatric Endocrinology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Pediatrics Gastroenterology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/pediatrics-gastroenterology">
                                  <h2>Pediatrics Gastroenterology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}


                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Pediatrics Neurology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/pediatrics-neurology">
                                  <h2>Pediatrics Neurology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}


                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Pediatrics Orthopedics.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/pediatrics-orthopedics">
                                  <h2>Pediatrics Orthopedics</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Pediatrics Spine Surgery.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/pediatrics-spine-surgery">
                                  <h2>Pediatrics Spine Surgery</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Pediatrics Pulmonology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/pediatrics-pulmonology">
                                  <h2>Pediatrics Pulmonology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Pediatrics Surgery.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/pediatrics-surgery">
                                  <h2>Pediatrics Surgery</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Pediatrics Nephorology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/pediatrics-nephrology">
                                  <h2>Pediatrics Nephorology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Pediatric Intensivist.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/pediatric-intensivist">
                                  <h2>Pediatric Intensivist</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Plastic Surgery & Cosmetology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/plastic-surgery-cosmetology">
                                  <h2>Plastic Surgery & Cosmetology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        
                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Pulmonary Medicine.jpg"
                                  alt="img"
                                />
                              </div>
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

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Proctology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/proctology">
                                  <h2>Proctology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Pain Management.jpg"
                                  alt="img"
                                />
                              </div>
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

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Radiology & Imaging.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/radiology-and-imaging">
                                  <h2>Radiology & Imaging</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Robotic Surgery.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/robotic-surgery">
                                  <h2>Robotic Surgery</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}


                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Robotic Surgery.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties">
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
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Radiation Oncology.jpg"
                                  alt="img"
                                />
                              </div>
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
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Radiation Oncology.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/">
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
                              <div className="spefColiconContspsearch">
                                {/* <Image width={500} height={500}
                                  src="/specialtiesimg/Radiation Oncology.jpg"
                                  alt="img"
                                /> */}
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/">
                                  <h2>Rheumatology & Immunology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Rheumatology.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/rheumatology">
                                  <h2>Rheumatology</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Spine Surgery.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/spine-surgery">
                                  <h2>Spine Surgery</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Surgical Oncology.jpg"
                                  alt="img"
                                />
                              </div>
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
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Transfusion Medicine.jpg"
                                  alt="img"
                                />
                              </div>
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

                        {/* <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Trauma Surgery.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/trauma-surgery">
                                  <h2>Trauma Surgery</h2>
                                </Link>
                                <h2 className="diparmenthideORkeywords">
                                  deparment name or key words for search
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Urology.jpg"
                                  alt="img"
                                />
                              </div>
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
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Vascular Surgery.jpg"
                                  alt="img"
                                />
                              </div>
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
                              <div className="spefColiconContspsearch">
                                <Image width={500} height={500}
                                  src="/specialtiesimg/Wellness.jpg"
                                  alt="img"
                                />
                              </div>
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

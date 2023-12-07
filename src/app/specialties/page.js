
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




  function OpenCity(evt, cityName) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active1", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active1";

  }


  useEffect(() => {


    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();


  }, []);




  return (


    <>

      <title> Our Specialties</title>


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
            <div className="tab">

              <button className="tablinks orangecolor" id="defaultOpen" onClick={() => OpenCity(event, 'Paris')} >
                Search Specialties
              </button>
              <button className="tablinks redcolor" onClick={() => OpenCity(event, 'London')} >
                All Specialties
              </button>

            </div>
            <div id="London" className="tabcontent">
              {/* static specialty*/}
              <div className="specialityStaticcont">
                <div className="specialmaincont backgColorYellow">
                  <div className="specboxes">
                    <div className="speboxhead">
                      <h2 className="colorstyleblack">Medical Specialties</h2>
                    </div>
                    <div className="speboxloopcon">
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <Link href="/specialties/Cardiology">
                              <h2>Cardiology</h2>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <Link href="/specialties">
                              <h2>Diabetology</h2>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <Link href="/specialties">
                              <h2>Diabetology</h2>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <Link href="/specialties">
                              <h2>Diabetology</h2>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="specialmaincont backgColorGry">
                  <div className="specboxes">
                    <div className="speboxhead">
                      <h2 className="colorstyleRED">Surgical Specialties</h2>
                    </div>
                    <div className="speboxloopcon">
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <Link href="/specialties">
                              <h2>Diabetology</h2>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <Link href="/specialties">
                              <h2>Diabetology</h2>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <Link href="/specialties">
                              <h2>Diabetology</h2>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <Link href="/specialties">
                              <h2>Diabetology</h2>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="specialmaincont backgColorRED">
                  <div className="specboxes">
                    <div className="speboxhead">
                      <h2 className="colorstyleWHITE">Pediatric Specialties</h2>
                    </div>
                    <div className="speboxloopcon">
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <Link href="/specialties">
                              <h2>Diabetology</h2>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <Link href="/specialties">
                              <h2>Diabetology</h2>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <Link href="/specialties">
                              <h2>Diabetology</h2>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <Link href="/specialties">
                              <h2>Diabetology</h2>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* static specialty*/}
            </div>
            <div id="Paris" className="tabcontent">
              {/* search specialty*/}
              <div className="specialityserchcont">
                <div className="serachboxstar">
                  <div id="myDropdownsp">
                    <input
                      type="text"
                      placeholder="SEARCH SPECIALTY ......."
                      id="myInputsp"
                      onKeyUp={filterFunction}
                    />
                    <form id="colorFormsp">
                      <div className="checkboxcontsp">



                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
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
                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
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
                        </div>
                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/baritric-and-metabolic-surgery">
                                  <h2>Baritric & Metabolic Surgery</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
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
                        </div>

                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/cardic-anesthesiology">
                                  <h2>Cardic Anesthesiology</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
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
                        </div>
                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
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
                        </div>
                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
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
                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
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
                        </div>
                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/critical-care">
                                  <h2>Critical Care</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
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
                        </div>
                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
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
                        </div>
                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
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
                        </div>
                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
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
                        </div>


                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
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
                        </div>


                        <div className="myhrefsp">
                          <div className="spaccontsearch">
                            <div className="speforwhitbgsearch">
                              <div className="spefColiconContspsearch">
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Endocrine Surgery</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Epilepsy Surgery</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Foetal Medicine</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Foot & Ankle Surgery</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Gastroenterology</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Gastrointestinal Surgery</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>General Surgery & Minimal Invasive</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Gynae Oncology</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Genetics</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Genito Urinary</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Hepatology</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Hepatobiliary Surgery</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Hair Transplant</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
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
                              <div className="spefColiconContspsearch">
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>IVF & Reproductive Medicine</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Intensivist</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
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
                              <div className="spefColiconContspsearch">
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Liver Transplant</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Laboratory Medicine</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Lactation</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Maxillofacial</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
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
                              <div className="spefColiconContspsearch">
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Nutrition and Dietetics</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Nephrology & Kidney Transplant</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Neuro surgery</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Neurology</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Neonatology</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Orthopedics & Joint Replacement</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Oncology</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Obstetrics & Gynaecology</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Physiotherapy & Rehab</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Pediatrics</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Pediatrics Cardiology</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Pediatric Dentistry</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Pediatric Endocrinology</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Pediatrics Gastroenterology</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Pediatrics Neurology</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Pediatrics Orthopedics</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Pediatrics Spine Surgery</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Pediatrics Pulmonology</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Pediatrics Surgery</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Pediatrics Nephorology</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Pediatric Intensivist</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Plastic Surgery & Cosmetology</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Pulmonary Medicine</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Proctology</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
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
                              <div className="spefColiconContspsearch">
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Radiology & Imaging</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Robotic Surgery</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Rheumatology</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Spine Surgery</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
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
                              <div className="spefColiconContspsearch">
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
                                  <h2>Trauma Surgery</h2>
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
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
                                <Image width={100} height={100}
                                  src="/specialtiesimg/newsicon.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <Link href="/specialties/dummy">
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
              {/* search specialty*/}
            </div>
          </div>
        </div>
      </div>
      {/* specialties end*/}
    </>




  );


};



export default Specialties;

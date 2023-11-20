
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
              <button
                className="tablinks redcolor"
                onClick={() => OpenCity(event, 'London')}
                id="defaultOpen"
              >
                All Specialties
              </button>
              <button className="tablinks orangecolor"
                 onClick={() => OpenCity(event, 'Paris')}
              >
                Search Specialties
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
                            <Image width={100} height={100} src="/specialtiesimg/Cardiology.png" alt="img" />
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
                            <Image width={100} height={100} src="/specialtiesimg/Cardiology.png" alt="img" />
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
                            <Image width={100} height={100} src="/specialtiesimg/Cardiology.png" alt="img" />
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
                            <Image width={100} height={100} src="/specialtiesimg/Cardiology.png" alt="img" />
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
                            <Image width={100} height={100} src="/specialtiesimg/Cardiology.png" alt="img" />
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
                            <Image width={100} height={100} src="/specialtiesimg/Cardiology.png" alt="img" />
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
                            <Image width={100} height={100} src="/specialtiesimg/Cardiology.png" alt="img" />
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
                            <Image width={100} height={100} src="/specialtiesimg/Cardiology.png" alt="img" />
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
                            <Image width={100} height={100} src="/specialtiesimg/Cardiology.png" alt="img" />
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
                            <Image width={100} height={100} src="/specialtiesimg/Cardiology.png" alt="img" />
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
                            <Image width={100} height={100} src="/specialtiesimg/Cardiology.png" alt="img" />
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
                            <Image width={100} height={100} src="/specialtiesimg/Cardiology.png" alt="img" />
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
                                  <h2>Brachial Plexus Injury & Hand Surgery</h2>
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
                                  <h2>Peadiatrics</h2>
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
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
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                               <Link href="/specialties">
                                  <h2>Vascular Surgery</h2>
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

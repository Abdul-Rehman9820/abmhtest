
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
        <div className="mainheadingbandiv"></div>
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
                            <Image width={400} height={400} src="/specialtiesimg/Cardiology.png" alt="img" />
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
                            <Image width={400} height={400} src="/specialtiesimg/Cardiology.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <a href="">
                              <h2>Diabetology</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={400} height={400} src="/specialtiesimg/Cardiology.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <a href="">
                              <h2>Diabetology</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={400} height={400} src="/specialtiesimg/Cardiology.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <a href="">
                              <h2>Diabetology</h2>
                            </a>
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
                            <Image width={400} height={400} src="/specialtiesimg/Cardiology.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <a href="">
                              <h2>Diabetology</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={400} height={400} src="/specialtiesimg/Cardiology.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <a href="">
                              <h2>Diabetology</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={400} height={400} src="/specialtiesimg/Cardiology.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <a href="">
                              <h2>Diabetology</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={400} height={400} src="/specialtiesimg/Cardiology.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <a href="">
                              <h2>Diabetology</h2>
                            </a>
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
                            <Image width={400} height={400} src="/specialtiesimg/Cardiology.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <a href="">
                              <h2>Diabetology</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={400} height={400} src="/specialtiesimg/Cardiology.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <a href="">
                              <h2>Diabetology</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={400} height={400} src="/specialtiesimg/Cardiology.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <a href="">
                              <h2>Diabetology</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="spaccont">
                        <div className="speforwhitbgsp">
                          <div className="spefColiconContsp">
                            <Image width={400} height={400} src="/specialtiesimg/Cardiology.png" alt="img" />
                          </div>
                          <div className="speforwhitbgCol1sp">
                            <a href="">
                              <h2>Diabetology</h2>
                            </a>
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
                                <Image width={400} height={400}
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <a href="">
                                  <h2>Lactation</h2>
                                </a>
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
                                <Image width={400} height={400}
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <a href="">

                                  <h2>Accident &amp; Emergency</h2>
                                </a>
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
                                <Image width={400} height={400}
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <a href="">

                                  <h2>Clinical Hematology</h2>{" "}
                                </a>
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
                                <Image width={400} height={400}
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <a href="">

                                  <h2>Dentistry</h2>{" "}
                                </a>
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
                                <Image width={400} height={400}
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <a href="">
                                  <h2>Lactation</h2>
                                </a>
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
                                <Image width={400} height={400}
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <a href="">

                                  <h2>Accident &amp; Emergency</h2>
                                </a>
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
                                <Image width={400} height={400}
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <a href="">

                                  <h2>Clinical Hematology</h2>{" "}
                                </a>
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
                                <Image width={400} height={400}
                                  src="/specialtiesimg/Cardiology.png"
                                  alt="img"
                                />
                              </div>
                              <div className="speforwhitbgCol1spsearch">
                                <a href="">

                                  <h2>Dentistry</h2>{" "}
                                </a>
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

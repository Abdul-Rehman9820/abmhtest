

"use client";

import { useEffect } from 'react';
import $ from 'jquery';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';


import './styles/commonglobalstyle.css'
import './styles/homepstyle.css'


export default function Home() {


  useEffect(() => {


    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll


    $(document).ready(function () {
      // Your code here
      $("#showPopup1").click(function (e) {
        e.stopPropagation();
        $(".popup").toggle();
      });

      $("body").click(function () {
        $(".popup").hide();
        var video = $("#player").attr("src");
        $("#player").attr("src", "");
        $("#player").attr("src", video);
      });

    });

    $(document).ready(function () {
      // Your code here
      $("#showPopup2").click(function (e) {
        e.stopPropagation();
        $(".popup2").toggle();
      });

      $("body").click(function () {
        $(".popup2").hide();
        var video = $("#player2").attr("src");
        $("#player2").attr("src", "");
        $("#player2").attr("src", video);
      });

    });



  }, []);




  return (


    <>


      <title>Best Multispeciality Hospital in Pune | Expert Maternity, Neurology</title>
      <meta name="description" content="Best Multispeciality Hospital near you! Aditya Birla Hospital in Pune excels in maternity, neurology, & knee replacement." />


      <meta property="og:title" content="Best Multispeciality Hospital in Pune | Expert Maternity, Neurology" />
      <meta property="og:site_name" content="Aditya Birla Hospital" />
      <meta property="og:url" content="https://adityabirlahospital.com" />
      <meta property="og:description" content="Best Multispeciality Hospital near you! Aditya Birla Hospital in Pune excels in maternity, neurology, & knee replacement." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://adityabirlahospital.com/_next/image?url=%2Fhomeimg%2FW-Banner-1.jpg&w=1920&q=75" />


      <link rel="canonical" href="https://adityabirlahospital.com" />

      {/* slider*/}
      <div className="mainslider">


        <div className="newnexthomeslide">
          <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={3}
                aria-label="Slide 4"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={4}
                aria-label="Slide 4"
              />
            </div>


            <div className="carousel-inner">

              <div className="carousel-item active">
                <div className="mynewslides">
                  <Link href="/">
                    <Image width={1700} height={400} className="deckstophead" src="/homeimg/W-Banner-1.jpg" alt='slide' />
                    <Image width={400} height={400} className="mobilehead" src="/homeimg/M-ban-1.jpg" alt='slide' />
                    <h2 className="forSEOslide">hellow world</h2>
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <div className="mynewslides">
                  <Link href="/">
                    <Image width={1700} height={400} className="deckstophead" src="/homeimg/W-Banner-2.jpg" alt='slide' />
                    <Image width={400} height={400} className="mobilehead" src="/homeimg/M-ban-2.jpg" alt='slide' />
                    <h2 className="forSEOslide">hellow world</h2>
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <div className="mynewslides">
                  <Link href="/">
                    <Image width={1700} height={400} className="deckstophead" src="/homeimg/W-Banner-3.jpg" alt='slide' />
                    <Image width={400} height={400} className="mobilehead" src="/homeimg/M-ban-3.jpg" alt='slide' />
                    <h2 className="forSEOslide">hellow world</h2>
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <div className="mynewslides">
                  <Link href="/">
                    <Image width={1700} height={400} className="deckstophead" src="/homeimg/W-Banner-4.jpg" alt='slide' />
                    <Image width={400} height={400} className="mobilehead" src="/homeimg/M-ban-4.jpg" alt='slide' />
                    <h2 className="forSEOslide">hellow world</h2>
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <div className="mynewslides">
                  <Link href="/">
                    <Image width={1700} height={400} className="deckstophead" src="/homeimg/W-Banner-5.jpg" alt='slide' />
                    <Image width={400} height={400} className="mobilehead" src="/homeimg/M-ban-5.jpg" alt='slide' />
                    <h2 className="forSEOslide">hellow world</h2>
                  </Link>
                </div>
              </div>


            </div>


            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true">
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
              <span className="carousel-control-next-icon" aria-hidden="true">
                <Image width={400} height={400} src="/homeimg/nextright.png" alt="img" />
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>



      </div>
      {/* slider*/}
      {/* appoin btn */}
      <div className="parentcontainerwhi animatigm">
        <div className="customcontainer">
          {/* mainstart */}

          <div className='homediv'>

            <div className="homeh1part">
              <div className="homeh1head">
                <h1 className='homeh1'>Book Your Appointment Online</h1>
                <span className="headborder"></span>
              </div>
            </div>


          </div>


          <div className="appobarflexbox">
            <div className="appobarflexboxcol2">
              <div className="appobtnpar">


                <div className="appobtnchil">
                  <Link href="https://portal.abmhslp.com/AbmhPortal/#/login">
                    <div className="appbtnmainbox">
                      <div className="appmainboxBG">
                        <Image width={400} height={400} src="/homeimg/book_appointment.png" alt="img" />
                      </div>
                      <div className="appmainHea">
                        <p>Book an Appointment</p>
                      </div>
                    </div>
                  </Link>
                </div>


                {/* <div className="appobtnchil">
                  <Link href="https://portal.abmhslp.com/AbmhPortal/#/login">
                    <div className="appbtnmainbox">
                      <div className="appmainboxBG">
                        <Image width={400} height={400} src="/homeimg/medical-app.png" alt="img" />
                      </div>
                      <div className="appmainHea">
                        <p>Online Consultation</p>
                      </div>
                    </div>
                  </Link>
                </div> */}

                <div className="appobtnchil">
                  <Link href="/diagnostic-services">
                    <div className="appbtnmainbox">
                      <div className="appmainboxBG">
                        <Image width={400} height={400} src="/homeimg/dignosticlab.png" alt="img" />
                      </div>
                      <div className="appmainHea">
                        <p>Diagnostic Services</p>
                      </div>
                    </div>
                  </Link>
                </div>


                <div className="appobtnchil">
                  <Link href="/wellness-packages">
                    <div className="appbtnmainbox">
                      <div className="appmainboxBG">
                        <Image width={400} height={400} src="/homeimg/heart.png" alt="img" />
                      </div>
                      <div className="appmainHea">
                        <p>Wellness Packages</p>
                      </div>
                    </div>
                  </Link>
                </div>


                <div className="appobtnchil fournone">
                  <Link href="/abmh-international">
                    <div className="appbtnmainbox">
                      <div className="appmainboxBG">
                        <Image width={400} height={400} src="/homeimg/Group.png" alt="img" />
                      </div>
                      <div className="appmainHea">
                        <p>International Patients</p>
                      </div>
                    </div>
                  </Link>
                </div>



              </div>
            </div>
          </div>
          {/* mainclose */}
        </div>
      </div>
      {/* appoin btn */}
      {/* Speciality start  for deckstop*/}
      <div className="parentcontainercos deckstophead">
        <div className="customcontainer">
          {/* mainstart */}
          <div className="OurSpecialties">
            <div className="Specialtiespart">
              <div className="Specialtieshead">
                {/* <h2>OUR</h2> */}
                <h2 className="oursepper">Our Specialties</h2>
                <span className="headborder" />
              </div>
              <div className="Specilizationhead">
                {/* <h3>50+</h3>
                <h2>Specialization&nbsp;</h2> */}
              </div>
            </div>
            <div className="speforcolpar">
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgColicon">
                    <div className="spefColiconCont">
                      <Image width={400} height={400} src="/homeimg/cardiac_science.png" alt="icon" />
                    </div>
                  </div>
                  <div className="speforwhitbgCol1">
                    <Link href="/specialties/cardiac-sciences">
                      <h2>Cardiac Sciences</h2>
                    </Link>
                  </div>
                  <div className="specdiv" />
                  <div className="speforwhitbgCol2">
                    <h2>
                       Complete cardiac care, diagnostics, surgery, and interventions for optimal heart health and function.
                    </h2>
                    <Link className='viewspehovebtn' href="/specialties/cardiac-sciences">View Speciality</Link>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgColicon">
                    <div className="spefColiconCont">
                      <Image width={400} height={400} src="/homeimg/neuroscience.png" alt="icon" />
                    </div>
                  </div>
                  <div className="speforwhitbgCol1">
                    <Link href="/specialties/neuroscience">
                      <h2>Neuro Sciences</h2>
                    </Link>
                  </div>
                  <div className="specdiv" />
                  <div className="speforwhitbgCol2">
                    <h2>
                       Expert care for nervous system disorders, diagnosis, treatment, and research to enhance brain and nervous system health.
                    </h2>
                    <Link className='viewspehovebtn' href="/specialties/neuroscience">View Speciality</Link>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgColicon">
                    <div className="spefColiconCont">
                      <Image width={400} height={400} src="/homeimg/robotic_surgery.png" alt="icon" />
                    </div>
                  </div>
                  <div className="speforwhitbgCol1">
                    <Link href="/specialties/robotic-assisted-surgery">
                      <h2>Robotic Surgery</h2>
                    </Link>
                  </div>
                  <div className="specdiv" />
                  <div className="speforwhitbgCol2">
                    <h2>
                    Advanced robotic surgery with precision, minimally invasive procedures, enhancing outcomes, and expediting patient recovery.
                    </h2>
                    <Link className='viewspehovebtn' href="/specialties/robotic-assisted-surgery">View Speciality</Link>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgColicon">
                    <div className="spefColiconCont">
                      <Image width={400} height={400} src="/homeimg/mother_&_child.png" alt="icon" />
                    </div>
                  </div>
                  <div className="speforwhitbgCol1">
                    <Link href="/specialties/pediatrics">
                      <h2>Mother & Child</h2>
                    </Link>
                  </div>
                  <div className="specdiv" />
                  <div className="speforwhitbgCol2">
                    <h2>
                    Holistic healthcare for women and children, encompassing prenatal, maternal, and pediatric services, prioritizing the well-being of mothers and children.
                    </h2>
                    <Link className='viewspehovebtn' href="/specialties/pediatrics">View Speciality</Link>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgColicon">
                    <div className="spefColiconCont">
                      <Image width={400} height={400} src="/homeimg/orthopedic_&_joint_replacement.png" alt="icon" />
                    </div>
                  </div>
                  <div className="speforwhitbgCol1">
                    <Link href="/specialties-sub/orthopaedics">
                      <h2>Orthopedic</h2>
                    </Link>
                  </div>
                  <div className="specdiv" />
                  <div className="speforwhitbgCol2">
                    <h2>
                    Cutting-edge orthopedic care for a pain-free life. Skilled specialists, advanced treatments, and personalized solutions for every patient.
                    </h2>
                    <Link className='viewspehovebtn' href="/specialties-sub/orthopaedics">View Speciality</Link>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgColicon">
                    <div className="spefColiconCont">
                      <Image width={400} height={400} src="/homeimg/gastroenterology_&_hepatology.png" alt="icon" />
                    </div>
                  </div>
                  <div className="speforwhitbgCol1">
                    <Link href="/specialties-sub/gastroenterology">
                      <h2>Gastroenterology</h2>
                    </Link>
                  </div>
                  <div className="specdiv" />
                  <div className="speforwhitbgCol2">
                    <h2>
                    Specialized in gastrointestinal health, providing diagnostics, treatments, and interventions for digestive disorders, ensuring optimal well-being and function.
                    </h2>
                    <Link className='viewspehovebtn' href="/specialties-sub/gastroenterology">View Speciality</Link>
                  </div>
                </div>
              </div>


            </div>
            <div className="combtndiv">
              <button className="combtn">
                <Link href="/specialties">
                  All Specialties
                  <span className="specicon">
                    <Image width={400} height={400} src="/homeimg/right-arrow.png" alt="img" />
                  </span>
                </Link>
              </button>
            </div>
          </div>
          {/* mainclose */}
        </div>
      </div>
      {/* Speciality end deckstop*/}
      {/* Speciality start  for mobile*/}
      <div className="parentcontainercos mobilehead">
        <div className="customcontainer">
          {/* mainstart */}
          <div className="OurSpecialties">
            <h2>Our Specialties</h2>
            <div className="speforcolpar">
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgCol1">
                    <Image width={400} height={400} src="/homeimg/cardiac_science.png" alt="img" />
                  </div>
                  <div className="speforwhitbgCol2">
                    <Link href="/specialties/cardiac-sciences">
                      <h2>Cardiac Sciences</h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgCol1">
                    <Image width={400} height={400} src="/homeimg/orthopedic_&_joint_replacement.png" alt="img" />
                  </div>
                  <div className="speforwhitbgCol2">
                    <Link href="/specialties-sub/orthopaedics">
                      <h2>Orthopedic</h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgCol1">
                    <Image width={400} height={400} src="/homeimg/mother_&_child.png" alt="img" />
                  </div>
                  <div className="speforwhitbgCol2">
                    <Link href="/specialties/pediatrics">
                      <h2>Mother & Child</h2>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="speforcolchil">
                <div className="speforwhitbg">
                  <div className="speforwhitbgCol1">
                    <Image width={400} height={400} src="/homeimg/robotic_surgery.png" alt="img" />
                  </div>
                  <div className="speforwhitbgCol2">
                    <Link href="/specialties/robotic-assisted-surgery">
                      <h2>Robotic Surgery</h2>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="combtndiv">
              <button className="combtn">
                <Link href="/specialties">
                  All Specialties
                  <span className="specicon">
                    <Image width={400} height={400} src="/homeimg/right-arrow.png" alt="img" />
                  </span>
                </Link>
              </button>
            </div>
          </div>
          {/* mainclose */}
        </div>
      </div>
      {/* Speciality end mobile*/}
      {/* our team*/}




      <div className="parentcontainerwhi toppading">
        <div className="customcontainer">
          <div className="ourteamparpart">
            <div className="Specialtieshead">
              <h2>Our Team of Experts</h2>
              <span className="headborder" />
            </div>
            <div className="Teamilizationhead">
              <Link href="/doctors">
                <h2>View All</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="parentcontainerwhi withbg">
        <div className="customcontainer">
          {/* mainstart */}
          <div className="ourteampar">
            <div className="ourteamslidepar">


              <div
                id="carouselExampleIndicatorsteam"
                className="carousel slide"
                data-bs-ride="carousel"
              >


                {/* <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicatorsteam"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicatorsteam"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                </div> */}


                <div className="carousel-inner">

                  <div className="carousel-item active">

                    <div className="mynewslidesforDoctor">

                      <div className="ourteamslidchilbo">
                        <div className="ourteamslidebox">
                          <div className="ourteambox1">
                            <div className="ourteamimg">
                              <Image width={400} height={400} src="/DoctorsProfileimages/dr-rajiv-sethi.jpg" alt="img" />
                            </div>
                            <div className="ourteamname">
                              <h2>Dr. Rajiv Bundashah Sethi</h2>
                            </div>
                            <div className="ourteamspec">
                              <h2>Sr. Consultant Interventional Cardiology</h2>
                            </div>
                            <div className="ourteamexpi">
                              {/* <h2>ABMH Doctors</h2> */}
                            </div>
                          </div>
                          <div className="ourteambox2">
                            <div className="ourteambox2flex">
                              <Link className="bookappoteam" href="/doctor-profile?doc=dr-rajiv-bundashah-sethi">
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ourteamslidchilbo">
                        <div className="ourteamslidebox">
                          <div className="ourteambox1">
                            <div className="ourteamimg">
                              <Image width={400} height={400} src="/DoctorsProfileimages/dr-rakesh-ranjan.jpg" alt="img" />
                            </div>
                            <div className="ourteamname">
                              <h2>Dr. Rakesh Ranjan</h2>
                            </div>
                            <div className="ourteamspec">
                              <h2>Associate Director Neuro Surgery</h2>
                            </div>
                            <div className="ourteamexpi">
                              {/* <h2>ABMH Doctors</h2> */}
                            </div>
                          </div>
                          <div className="ourteambox2">
                            <div className="ourteambox2flex">
                              <Link className="bookappoteam" href="/doctor-profile?doc=dr-rakesh-ranjan">
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ourteamslidchilbo">
                        <div className="ourteamslidebox">
                          <div className="ourteambox1">
                            <div className="ourteamimg">
                              <Image width={400} height={400} src="/DoctorsProfileimages/dr-nikhil-parwate.jpg" alt="img" />
                            </div>
                            <div className="ourteamname">
                              <h2>Dr. Nikhil Sadanand Parwate</h2>
                            </div>
                            <div className="ourteamspec">
                              <h2>Consultant - Gynae Onco Surgeon</h2>
                            </div>
                            <div className="ourteamexpi">
                              {/* <h2>ABMH Doctors</h2> */}
                            </div>
                          </div>
                          <div className="ourteambox2">
                            <div className="ourteambox2flex">
                              <Link className="bookappoteam" href="/doctor-profile?doc=dr-nikhil-sadanand-parwate">
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>


                  <div className="carousel-item ">

                    <div className="mynewslidesforDoctor">

                      <div className="ourteamslidchilbo">
                        <div className="ourteamslidebox">
                          <div className="ourteambox1">
                            <div className="ourteamimg">
                              <Image width={400} height={400} src="/DoctorsProfileimages/dr-j-c-purohit.jpg" alt="img" />
                            </div>
                            <div className="ourteamname">
                              <h2>Dr. Jagdish Chander Purohit</h2>
                            </div>
                            <div className="ourteamspec">
                              <h2>Director Orthopaedics</h2>
                            </div>
                            <div className="ourteamexpi">
                              {/* <h2>ABMH Doctors</h2> */}
                            </div>
                          </div>
                          <div className="ourteambox2">
                            <div className="ourteambox2flex">
                              <Link className="bookappoteam" href="/doctor-profile?doc=dr-jagdish-chander-purohit">
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ourteamslidchilbo">
                        <div className="ourteamslidebox">
                          <div className="ourteambox1">
                            <div className="ourteamimg">
                              <Image width={400} height={400} src="/DoctorsProfileimages/dr-mrunmaya-panda.jpg" alt="img" />
                            </div>
                            <div className="ourteamname">
                              <h2>Dr. Mrunmaya Bijoy Panda</h2>
                            </div>
                            <div className="ourteamspec">
                              <h2>Gastroenterologist</h2>
                            </div>
                            <div className="ourteamexpi">
                              {/* <h2>ABMH Doctors</h2> */}
                            </div>
                          </div>
                          <div className="ourteambox2">
                            <div className="ourteambox2flex">
                              <Link className="bookappoteam" href="/doctor-profile?doc=dr-mrunmaya-bijoy-panda">
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ourteamslidchilbo">
                        <div className="ourteamslidebox">
                          <div className="ourteambox1">
                            <div className="ourteamimg">
                              <Image width={400} height={400} src="/DoctorsProfileimages/dr-rahul-kalliyanpur.jpg" alt="img" />
                            </div>
                            <div className="ourteamname">
                              <h2>Dr. Rahul Suresh Kallianpur</h2>
                            </div>
                            <div className="ourteamspec">
                              <h2>Associate Director Neonatologist & Pediatric</h2>
                            </div>
                            <div className="ourteamexpi">
                              {/* <h2>ABMH Doctors</h2> */}
                            </div>
                          </div>
                          <div className="ourteambox2">
                            <div className="ourteambox2flex">
                              <Link className="bookappoteam" href="/doctor-profile?doc=dr-rahul-suresh-kallianpur">
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>

                  </div>


                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicatorsteam"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true">
                    <Image width={100} height={100} src="/homeimg/nextleft.png" alt="img" />
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicatorsteam"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true">
                    <Image width={100} height={100} src="/homeimg/nextright.png" alt="img" />
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>



            </div>
          </div>
          {/* mainclose */}
        </div>
      </div>
      {/* our team*/}

      {/* <!-- youtube ifram 1--> */}
      <div className="popup">
        <iframe id="player" className="test3_1" src="https://www.youtube.com/embed/j2ln72yonvY" frameBorder="0" allowFullScreen></iframe>
      </div>
      {/* <!-- youtube ifram 1--> */}

      {/* <!-- youtube ifram 2--> */}
      <div className="popup2">
        <iframe id="player2" className="test3_2" src="https://www.youtube.com/embed/5lBI-aWSNsA" frameBorder="0" allowFullScreen></iframe>
      </div>
      {/* <!-- youtube ifram 2--> */}


      {/* our work*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          {/* mainstart */}
          <div className="ourworkpar">
            <div className="Specialtiespart">
              <div className="outworkhead">
                <h2>Hear What Our Patients Are Speaking</h2>
                <span className="headborder" />
              </div>
              <div className="surgerhead">
                {/* <h3>1030+</h3> */}
                <Link href="/hospital-visit#PatientsTestimonials">
                  <h2>View All</h2>
                </Link>

              </div>
            </div>


            <div className="ourworkslidepar">
              <div
                id="carouselExampleIndicators1"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">

                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators1"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators1"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />


                </div>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="testislid">
                      <div className="testislidChil">
                        <div className="testislidChilcol1">
                          <div className="ourworkbox1">
                            <div className="ourworkmimg">
                              <Image width={700} height={400} src="/homeimg/youplayimg.png" alt="img" />
                              <div className="imgcerl1" id="showPopup1"> <Image width={50} height={50} className='palybtn' src="/homeimg/play-button.png" alt="img" /></div>
                            </div>
                          </div>
                        </div>
                        <div className="testislidChilcol2">
                          <div className="testislidChilcol2Para">
                          Mrs. Archana Balasaheb Sabale extends heartfelt thanks to Aditya Birla Memorial Hospital for their exceptional care during her breast cancer treatment. Grateful for the skilled doctors and supportive staff who renewed her hope and confidence.
                          </div>
                          <div className="ourworkname">
                            <h2>Patient&apos;s Feedback</h2>
                          </div>
                          <div className="testispace" />
                          <div className="ourworkspec">
                            <h2>Mrs. Archana Balasaheb Sabale </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="testislid">
                      <div className="testislidChil">
                        <div className="testislidChilcol1">
                          <div className="ourworkbox1">
                            <div className="ourworkmimg">
                              <Image width={700} height={400} src="/homeimg/youplayimg.png" alt="img" />
                              <div className="imgcerl2" id="showPopup2"><Image width={50} height={50} className='palybtn' src="/homeimg/play-button.png" alt="img" /></div>
                            </div>
                          </div>
                        </div>
                        <div className="testislidChilcol2">
                          <div className="testislidChilcol2Para">
                            Dr. Pooja Jadhav praises Aditya Birla Memorial Hospital for outstanding care during her mother&apos;s Radiation Therapy. Thanking Dr. Ajita Kendre for expert guidance and the medical staff for invaluable cooperation. She&apos;s grateful for seamless healthcare services.
                          </div>
                          <div className="ourworkname">
                            <h2>Patient&apos;s Feedback</h2>
                          </div>
                          <div className="testispace" />
                          <div className="ourworkspec">
                            <h2>Padmini Raut</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators1"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true">
                    <Image width={400} height={400} src="/homeimg/nextleft.png" alt="" />
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators1"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true">
                    <Image width={400} height={400} src="/homeimg/nextright.png" alt="" />
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>


          </div>
          {/* mainclose */}
        </div>
      </div>
      {/* our work*/}
      {/* our work*/}
      <div className="parentcontainerwhi marginmin">
        <div className="customcontainer">
          {/* mainstart */}
          <div className="ourworkpar">
            <div className="Whyworkslidepar">
              <div className="Whyworkslideparchil">
                <div className="Whyworkslideparchilcol1">
                  <div className="Specialtiespart">
                    <div className="outworkhead">
                      <h2>Why We Stand Out?</h2>
                      <span className="headborder" />
                      {/* <h2>US?</h2> */}
                    </div>
                  </div>
                </div>
                <div className="Whyworkslideparchilcol2">



                  <div className="ourteamslideparnew deckstophead">


                    <div
                      id="carouselExampleIndicators44"
                      className="carousel slide "
                      data-bs-ride="carousel"
                    >


                      {/* <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={0}
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        />
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={1}
                          aria-label="Slide 2"
                        />
                      </div> */}


                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="mynewslidesforhomwtesti">
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-88.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>World Class Doctors</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                        Our dedicated team of skilled healthcare professionals stays current on the latest medical
                                        advancements and utilizes cutting-edge technologies to ensure the highest quality care for our patients.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    {/* <button className="whychocombtnn">
                                      <Link href="/contact-us">
                                        Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </Link>
                                    </button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-89.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Advance Technology</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                        Our commitment to technological advancement ensures that we are always at the forefront of medical innovative medical technology, which allows us to provide more accurate diagnoses,
                                        more effective treatments, and a more personalized patient experience.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    {/* <button className="whychocombtnn">
                                      <Link href="/contact-us">
                                        Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </Link>
                                    </button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-90.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Patient Centric approach</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                        Committed to patient-centered care, we tailor our approach to individual needs,
                                        emphasizing open communication and collaboration between patients and healthcare providers for optimal health outcomes.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    {/* <button className="whychocombtnn">
                                      <Link href="/contact-us">
                                        Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </Link>
                                    </button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="mynewslidesforhomwtesti">
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-91.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Compassionate Care</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                        Our team of compassionate caregivers is dedicated to providing emotional support and comfort to our patients and their families.
                                        We firmly believe that empathy and understanding are essential components of holistic healthcare.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    {/* <button className="whychocombtnn">
                                      <Link href="/contact-us">
                                        Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </Link>
                                    </button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-92.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Accessible Healthcare</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                        We are committed to making healthcare accessible and convenient for all our patients.
                                        We offer convenient appointment times and locations to make it easy for our patients to receive the care they need.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    {/* <button className="whychocombtnn">
                                      <Link href="/contact-us">
                                        Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </Link>
                                    </button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-93.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Holistic Wellness Programs</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                        We prioritize the holistic well-being of our patients through a range of wellness packages,
                                        including preventive healthcare, comprehensive health checkups, packages tailored for seniors, well-woman checkups, and basic packages.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    {/* <button className="whychocombtnn">
                                      <Link href="/contact-us">
                                        Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </Link>
                                    </button> */}
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators44"
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true">
                          <Image width={100} height={100} src="/homeimg/nextleft.png" alt="img" />
                        </span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators44"
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true">
                          <Image width={100} height={100} src="/homeimg/nextright.png" alt="img" />
                        </span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>


                  </div>
                  <div className="ourteamslideparnew mobilehead">
                    <div
                      id="carouselExampleIndicators55"
                      className="carousel slide carousel-fade"
                      data-bs-ride="carousel"
                    >

                      {/* <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={0}
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        />
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={1}
                          aria-label="Slide 2"
                        />
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={2}
                          aria-label="Slide 2"
                        />
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={3}
                          aria-label="Slide 2"
                        />
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={4}
                          aria-label="Slide 2"
                        />
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={5}
                          aria-label="Slide 2"
                        />
                      </div> */}


                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="mynewslidesforhomwtesti">
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-88.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>World Class Doctors</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                        Our dedicated team of skilled healthcare professionals stays current on the latest medical advancements and
                                        utilizes cutting-edge technologies to ensure the highest quality care for our patients.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    {/* <button className="whychocombtnn">
                                      <Link href="/contact-us">
                                        Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </Link>
                                    </button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="mynewslidesforhomwtesti">
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-89.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Advance Technology</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                        Our commitment to technological advancement ensures that we are always at the forefront of medical innovative medical technology,
                                        which allows us to provide more accurate diagnoses, more effective treatments, and a more personalized patient experience.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    {/* <button className="whychocombtnn">
                                      <Link href="/contact-us">
                                        Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </Link>
                                    </button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="mynewslidesforhomwtesti">
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-90.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Patient Centric approach</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                        Committed to patient-centered care, we tailor our approach to individual needs,
                                        emphasizing open communication and collaboration between patients and healthcare providers for optimal health outcomes.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    {/* <button className="whychocombtnn">
                                      <Link href="/contact-us">
                                        Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </Link>
                                    </button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="mynewslidesforhomwtesti">
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-91.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Compassionate Care</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                        Our team of compassionate caregivers is dedicated to providing emotional support and comfort to our patients and their families.
                                        We firmly believe that empathy and understanding are essential components of holistic healthcare.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    {/* <button className="whychocombtnn">
                                      <Link href="/contact-us">
                                        Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </Link>
                                    </button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="mynewslidesforhomwtesti">
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-92.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Accessible Healthcare</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                        We are committed to making healthcare accessible and convenient for all our patients.
                                        We offer convenient appointment times and locations to make it easy for our patients to receive the care they need.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    {/* <button className="whychocombtnn">
                                      <Link href="/contact-us">
                                        Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </Link>
                                    </button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="mynewslidesforhomwtesti">
                            <div className="myovefn">
                              <div className="whychochilbon">
                                <div className="whychoslideboxn">
                                  <div className="whychobox1n">
                                    <div className="whychoimgn">
                                      <Image width={100} height={100} src="/homeimg/Group-93.png" alt="img" />
                                    </div>
                                    <div className="whychonamen">
                                      <h2>Holistic Wellness Programs</h2>
                                    </div>
                                    <div className="whychospecn">
                                      <h2>
                                        We prioritize the holistic well-being of our patients through a range of wellness packages, including preventive healthcare, comprehensive health checkups,
                                        packages tailored for seniors, well-woman checkups, and basic packages.
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="whychoimgbox2n">
                                    {/* <button className="whychocombtnn">
                                      <Link href="/contact-us">
                                        Know More
                                        <span className="speciconn">
                                          <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                        </span>
                                      </Link>
                                    </button> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators55"
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true">
                          <Image width={100} height={100} src="/homeimg/nextleft.png" alt="img" />
                        </span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators55"
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true">
                          <Image width={100} height={100} src="/homeimg/nextright.png" alt="img" />
                        </span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>





                </div>
              </div>
            </div>
          </div>
          {/* mainclose */}
        </div>
      </div>
      {/* Why end*/}



    </>


  )
}

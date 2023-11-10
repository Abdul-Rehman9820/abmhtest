"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'


import $ from 'jquery';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';


import './doctorspage.css'


const Doctors = () => {



        //---- for search bar on page

        const [searchQuery, setSearchQuery] = useState("");

        //---- for search bar on page



       //---- for api data
        const searchParams = useSearchParams()

        var search = "";

        if (searchParams.has('doc')) {
          search = searchParams.get('doc') // get from url
        } else {
          search = ""; // Set the default value if 'doc' is not present
        }


        // store data here
        const [data, setData] = useState(['']);

        //---- for api data



  useEffect(() => {


    // api for profile

    async function fetchData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_Web_Domin}/api/mysql`, {
          method: "POST",
          body: JSON.stringify({
            usersearch: search,
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        setData(result.data);

        console.log(result.data);

      } catch (error) {
        console.error(error);
      }
    }


    fetchData();


    // api for profile


    // for FAQ script

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("activeFAQ");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    // for FAQ script



  }, [data]);


  return (


    <>


    <title>Doctors of Aditya Birla Best Multispeciality Hospital</title>


      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / <span className="breadcrumbsactive">Our Doctors</span>
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
      {/* Doctors list  start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="DoctorslistCont">
            <div className="DoctorslistSearch">
              <div className="DoctorslistSearchbox">
                <div className="DoctorslistSearchbox1">
                  <div className="drlistsearch-container">
                  
                      <div className="drlistformflex">
                        <div className="drlistformflex1">
                          <input
                            type="text"
                            className="drlistsearchinput"
                            placeholder="Find a doctor by doctors by name, specialty"

                            name="search"
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}

                            data-tribute="true"
                            required=""
                          />
                        </div>
                        <div className="drlistformflex2">
                          <button className="drlistsearchinputBTN" type="submit">
                            <Link href={`/doctors?doc=${searchQuery}`}>
                                <i className="fa fa-search" />
                            </Link>
                            </button>
                        </div>
                      </div>
              
                  </div>
                </div>
                <div className="DoctorslistSearchbox2">
                  <button>Filter</button>
                </div>
              </div>
            </div>
            <div className="drlistloopbox">
              <ul id="paginated-list" data-current-page={1} aria-live="polite">

              {data.map((item, index) => (

                  <li className="myli" key={index} id={index}>
                    <div className="ourteamslidchilbo">
                      <div className="ourteamslidebox">
                        <div className="ourteambox1">
                          <div className="ourteamimg">
                            <img src={`DoctorsProfileimages/${item.DoctorProfileImage}`} alt="img" />
                          </div>
                          <div className="ourteamname">
                            <h2>{item.DoctorFName} {item.DoctorLName}</h2>
                          </div>
                          <div className="ourteamspec">
                            <h2>{item.DoctorSpeciality}</h2>
                          </div>
                          <div className="ourteamexpi">
                            <h2>{item.DoctorExperience} years of experience&nbsp;</h2>
                          </div>
                        </div>
                        <div className="ourteambox2">
                          <div className="ourteambox2flex">
                            <a className="bookappoteam" href="#">
                              View Profile
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

              ))}


              </ul>
              <nav className="pagination-container">
                <button
                  className="pagination-button"
                  id="prev-button"
                  aria-label="Previous page"
                  title="Previous page"
                >
                  &lt;
                </button>
                <div id="pagination-numbers"></div>
                <button
                  className="pagination-button"
                  id="next-button"
                  aria-label="Next page"
                  title="Next page"
                >
                  &gt;
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Doctors list end*/}


      {/* FAQ for wellness  start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="wellnessFAQ">
            <div className="commonheadingCont">
              <div className="commonheadinghead">
                <h2>FAQs : Common Questions</h2>
                <span className="Commheadborder" />
              </div>
            </div>
            <div className="wellfaqCol">
              <div className="wellfaqcontainer">
                <button className="accordion">
                  What is a Third-Party Administrator (TPA)?
                </button>
                <div className="panel">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </p>
                </div>
                <button className="accordion">
                  What Services Do TPAs Provide?
                </button>
                <div className="panel">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <button className="accordion">
                  Why Would a Company Use a TPA?
                </button>
                <div className="panel">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <button className="accordion">
                  What is the procedure for availing TPA service?
                </button>
                <div className="panel">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  FAQ for wellness  end*/}




    </>



  );


};



export default Doctors;

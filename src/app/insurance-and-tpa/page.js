

"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';

import './insurance-and-tpa.css'


const Virtualtour = () => {



  useEffect(() => {


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


  })


  return (

    <>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Patient Care /{" "}
                  <span className="breadcrumbsactive">Insurance & TPAs</span>
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

      {/* Hospirtal testimonials  start*/}
      <div className="parentcontainerwhi withtestBG">
        <div className="customcontainer">
          <div className="divinsoandtpa">


            <div className="insurance_list">

              <div className="sectionheading">
                <h2>List of Insurance &amp; TPAs</h2>
                <span className="headborder" />
              </div>
              <div className="tpa_sec">
                <div className="tpa_sec_para">
                  Please verify the name of your Third-Party Administrator (TPA) from the
                  provided list and
                  <b>ensure to print it out.</b> Please be aware that the submission of
                  completed pre-authorization forms, along with the necessary documents, is
                  exclusively accepted at the TPA counter situated on the{" "}
                  <b>Ground Floor</b> of the Hospital, operating from{" "}
                  <b>Monday to Saturday (10 am to 6 pm).</b>
                </div>
              </div>

              <div className="img-sec">

                <div className="row img_padding">


                  <div className=" card card-3">
                    <img className="img_size" src="TPA_img/4.png" />
                    <span className="img-text">Alankit Health Care Limited</span>
                  </div>
                  <div className=" card card-3">
                    <img className="img_size" src="TPA_img/1.png" />
                    <span className="img-text">
                      Dedicated Health Services TPA India Pvt Ltd
                    </span>
                  </div>
                  <div className=" card card-3">
                    <img className="img_size" src="TPA_img/3.png" />
                    <span className="img-text">
                      Family Health Plan Insurance TPA Limited
                    </span>
                  </div>
                  <div className=" card card-3">
                    <img className="img_size" src="TPA_img/2.png" />
                    <span className="img-text">Genins India TPA Ltd</span>
                  </div>
                  <div className=" card card-3">
                    <img className="img_size" src="TPA_img/2.png" />
                    <span className="img-text">Genins India TPA Ltd</span>
                  </div>


                </div>

              


              </div>

            </div>


          </div>
        </div>
      </div>
      {/* Hospirtal testimonials   end*/}
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



export default Virtualtour;

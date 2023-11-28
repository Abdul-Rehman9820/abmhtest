

"use client";

import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './abmh-news.css'


const Abmhnews = () => {


  useEffect(() => {


    // Get the modal
    var modal = document.getElementById("myModal");

    // Get all images with class="myImg"
    var images = document.getElementsByClassName("myImg");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Get the modal image and caption elements
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    // Zoom controls
    var zoomInBtn = document.getElementById("zoomInBtn");
    var zoomOutBtn = document.getElementById("zoomOutBtn");
    var currentScale = 1;

    // Loop through each image and add the click event
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', showModal);
    }

    function showModal() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        currentScale = 1; // Reset the scale when showing a new image
        applyZoom();
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Zoom in button click event
    zoomInBtn.onclick = function () {
        currentScale += 0.1;
        applyZoom();
    };

    // Zoom out button click event
    zoomOutBtn.onclick = function () {
        if (currentScale > 0.2) {
            currentScale -= 0.1;
            applyZoom();
        }
    };

    // Apply the current zoom scale
    function applyZoom() {
        modalImg.style.transform = "scale(" + currentScale + ")";
    }



    }, []);



  return (

    <>
    <title>ABMH in the News</title>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / <span className="breadcrumbsactive">ABMH in the News</span>
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
      {/* news pg start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="abmhnew">
            <div className="newslidehead">
              <div className="newslideheadbof">
                <h2 className="newslideheadbalc">Career Breaking Cases</h2>
                <span className="newslideheadborder" />
              </div>
            </div>
            <div className="abmhnewslider">
              <div id="carouselExampleIndicatorsABnews" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicatorsABnews"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicatorsABnews"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="abmhnewslidcont">
                      <div className="newpappimgcont">
                        <Image width={2000} height={400}
                          className="newboximage myImg"
                          src="/abmh-newimg/abmhnewslideimg1.png"
                          alt="ABMH in the News"
                        />
                      </div>
                      <div className="newurlbg">
                        <a href="#">
                          <h2 className="newparahead">
                            Aditya Birla Memorial Hospital Successfully Performs A
                            Complicated High-Risk Eye Ball Surgery On Five &amp; A
                            Half Year Old Child.
                          </h2>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="abmhnewslidcont">
                      <div className="newpappimgcont">
                        <Image width={2000} height={400}
                          className="newboximage myImg"
                          src="/abmh-newimg/abmhnewslideimg2.png"
                          alt="ABMH in the News"
                        />
                      </div>
                      <div className="newurlbg">
                        <a href="#">
                          <h2 className="newparahead">
                            Aditya Birla Memorial Hospital an 8 hours long complex
                            surgery was performed on a 58 year old patient suffering
                            from stage 4 cervical cancer.
                          </h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicatorsABnews"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true">
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicatorsABnews"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true">
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* The Modal */}
      <div id="myModal" className="modal">
        <span className="close">×</span>
        <div className="zoom-controls">
          <button className="zoom-btn" id="zoomInBtn">
            Zoom In
          </button>
          <button className="zoom-btn" id="zoomOutBtn">
            Zoom Out
          </button>
        </div>
        <Image width={2000} height={400} src="" className="modal-content" id="img01" alt="img"/>
        <div id="caption" />
      </div>
      {/* The Modal */}


      {/* news pg end*/}
    </>



  );


};



export default Abmhnews;

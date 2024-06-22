

"use client";

import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './work-with-us.css'


const Workwithus = () => {


  useEffect(() => {


    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll

  }, []);


  return (


    <>

      <title>Careers - Work With Us</title>
      <link rel="canonical" href="https://adityabirlahospital.com/work-with-us" />

      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <Link className="breadcrumbsNotactive" href="/">Home</Link> / <span className="breadcrumbsactive">Work With US</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* common heading div end*/}
      {/* common heading banner start */}
      <div className="mainheadingbanner">
        <div className="mainheadingbandiv">
          <Image width={2000} height={400} src="/commonimages/commworkwithus.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}
      {/* specialties  start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">


          {/* comment if no opening*/}

          {/* <div className="workwithuscont">

            <h4>There are no current openings</h4>

          </div> */}

          {/* comment if no opening*/}

          


          <div className="workwithuscont">


            <div className="accordion" id="accordionExample">

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Current Openings
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      <table className="myperstable">
                        <thead>
                          <tr>
                            <th>Department</th>
                            <th>Position</th>
                            <th>Experience</th>
                            <th>Job Description</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>


                          <tr>
                            <td>IT & Networking</td>
                            <td>IT Manager</td>
                            <td>10-12 Years</td>
                            <td>
                              <div className="applybtn">
                                <span className="downpdg">
                                  <Link href="/JobPDF/JD-IT-22-6-24.pdf" target="_blank" >
                                    <Image width={100} height={100}
                                      src="/commonimages/download-pdf.png"
                                      className="donwpdfimg"
                                      alt="pdg"
                                    />
                                  </Link>
                                </span>

                              </div>
                            </td>
                            <td>
                              <div className="applybtn">

                                <span>
                                  <Link className="donwpdftext" href="/work-with-us-form">
                                    APPLY
                                  </Link>
                                </span>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>Marketing</td>
                            <td>Business Development Officer</td>
                            <td>1-5 years</td>
                            <td>
                              <div className="applybtn">
                                <span className="downpdg">
                                  <Link href="/JobPDF/JD-Referral-Mark-22-6-24.pdf" target="_blank" >
                                    <Image width={100} height={100}
                                      src="/commonimages/download-pdf.png"
                                      className="donwpdfimg"
                                      alt="pdg"
                                    />
                                  </Link>
                                </span>

                              </div>
                            </td>
                            <td>
                              <div className="applybtn">

                                <span>
                                  <Link className="donwpdftext" href="/work-with-us-form">
                                    APPLY
                                  </Link>
                                </span>
                              </div>
                            </td>
                          </tr>
                

                        </tbody>
                      </table>
                    </div>
                  </div>
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



export default Workwithus;

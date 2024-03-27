

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

          <div className="workwithuscont">

            <h4>There are no current openings</h4>

          </div>

          {/* comment if no opening*/}

          {/* <div className="workwithuscont">


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
                    Medical Staff
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
                            <th>Position</th>
                            <th>Experience Required</th>
                            <th>Last Date</th>
                            <th>Job Description</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Medical Officer</td>
                            <td>2+ Years</td>
                            <td>20 November, 2023</td>
                            <td>
                              <div className="applybtn">
                                <span className="downpdg">
                                  <Link href="">
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
                            <td>Medical Officer</td>
                            <td>2+ Years</td>
                            <td>20 November, 2023</td>
                            <td>
                              <div className="applybtn">
                                <span className="downpdg">
                                  <Link href="">
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

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Nursing
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      <table className="myperstable">
                        <thead>
                          <tr>
                            <th>Position</th>
                            <th>Experience Required</th>
                            <th>Last Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Nursing</td>
                            <td>2+ Years</td>
                            <td>20 November, 2023</td>
                            <td>
                              <div className="applybtn">
                                <span className="downpdg">
                                  <Link href="">
                                    <Image width={100} height={100}
                                      src="/commonimages/download-pdf.png"
                                      className="donwpdfimg"
                                      alt="pdg"
                                    />
                                  </Link>
                                </span>
                                <span>
                                  <Link className="donwpdftext" href="/work-with-us-form">
                                    APPLY
                                  </Link>
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>Nursing</td>
                            <td>2+ Years</td>
                            <td>20 November, 2023</td>
                            <td>
                              <div className="applybtn">
                                <span className="downpdg">
                                  <Link href="">
                                    <Image width={100} height={100}
                                      src="/commonimages/download-pdf.png"
                                      className="donwpdfimg"
                                      alt="pdg"
                                    />
                                  </Link>
                                </span>
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


          </div> */}



          {/* <div className="workwithuscont">


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
                            <th>Position</th>
                            <th>Last Date To Apply</th>
                            <th>Job Description</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>


                          <tr>
                            <td>AGM Finance Application</td>
                            <td> --- </td>
                            <td>
                              <div className="applybtn">
                                <span className="downpdg">
                                  <Link href="/JobPDF/JD-AGM Finance Application-17-2-24.pdf" target="_blank" >
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
                            <td>Team Leader Position- Nursing </td>
                            <td> --- </td>
                            <td>
                              <div className="applybtn">
                                <span className="downpdg">
                                  <Link href="/JobPDF/JD-TL Position Nursing-17-02-24.pdf" target="_blank" >
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


          </div> */}


        </div>
      </div>
      {/* specialties end*/}
    </>



  );


};



export default Workwithus;

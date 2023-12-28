

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

      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">Home / <span className="breadcrumbsactive">Work With US</span></div>
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


                  <h4>There are no current opening</h4>

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
                    Medical Staff -04 Vacancies
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
                    Nursing -03 Vacancies
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
              
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingfour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefour"
                    aria-expanded="false"
                    aria-controls="collapsefour"
                  >
                    Technical Support - 05 Vacancies
                  </button>
                </h2>
                <div
                  id="collapsefour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingfour"
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

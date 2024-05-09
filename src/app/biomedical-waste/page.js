"use client";

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';



import './biomedical-waste-management.css'


const WellnessPack = () => {



  useEffect(() => {


    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll

  }, []);


  return (


    <>
      <title>Biomedical Waste Report</title>
      <link rel="canonical" href="https://adityabirlahospital.com/biomedical-waste" />
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <Link className="breadcrumbsNotactive" href="/">Home</Link> / <span className="breadcrumbsactive">Biomedical Waste Report</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* common heading div end*/}
      {/* common heading banner start */}
      <div className="mainheadingbanner">
        <div className="mainheadingbandiv">
          <Image width={2000} height={400} src="/commonimages/Bio-Medical-banner.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}

      {/* Wellbeing Packages start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">



          <div className="biomedicalcontainer mt-5 mb-5">



            {/*Main accordion start*/}
            <div className="accordion" id="accordionExample">


              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2024"
                    aria-expanded="true"
                  >
                    Biomedical Waste Report 2024
                  </button>
                </h2>
                <div
                  id="collapse2024"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="newfdata">


                      {/* inner sub accour */}


                      <div className="accordion" id="accordionSub2024">



                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse2024Mar"
                              aria-expanded="true"
                            >
                              Biomedical Waste Report March 2024
                            </button>
                          </h2>
                          <div
                            id="collapse2024Mar"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionSub2024"
                          >
                            <div className="accordion-body">
                              <div className="newfdata">


                                <div className="bioimg">

                                  <Image width={2000} height={2000} src="/biomedical-waste-pdf-img/bio-m-2024-march1.jpg" alt="Biomedical Waste Report" />
                                  <Image width={2000} height={2000} src="/biomedical-waste-pdf-img/bio-m-2024-march2.jpg" alt="Biomedical Waste Report" />

                                </div>


                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse2024Feb"
                              aria-expanded="true"
                            >
                              Biomedical Waste Report February 2024
                            </button>
                          </h2>
                          <div
                            id="collapse2024Feb"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionSub2024"
                          >
                            <div className="accordion-body">
                              <div className="newfdata">

                                <div className="bioimg">

                                  <Image width={2000} height={2000} src="/biomedical-waste-pdf-img/bio-m-2024-feb1.jpg" alt="Biomedical Waste Report" />
                                  <Image width={2000} height={2000} src="/biomedical-waste-pdf-img/bio-m-2024-feb2.jpg" alt="Biomedical Waste Report" />

                                </div>

                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse2024Jan"
                              aria-expanded="true"
                            >
                              Biomedical Waste Report January 2024
                            </button>
                          </h2>
                          <div
                            id="collapse2024Jan"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionSub2024"
                          >
                            <div className="accordion-body">
                              <div className="newfdata">


                                <div className="bioimg">

                                  <Image width={2000} height={2000} src="/biomedical-waste-pdf-img/bio-m-2024-jan1.jpg" alt="Biomedical Waste Report" />
                                  <Image width={2000} height={2000} src="/biomedical-waste-pdf-img/bio-m-2024-jan2.jpg" alt="Biomedical Waste Report" />

                                </div>


                              </div>
                            </div>
                          </div>
                        </div>



                      </div>


                      {/* inner sub accour */}


                    </div>
                  </div>
                </div>
              </div>


              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2023"
                    aria-expanded="true"
                  >
                    Biomedical Waste Report 2023
                  </button>
                </h2>
                <div
                  id="collapse2023"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="newfdata">

                      <div className="bioimg">

                        <Image width={2000} height={2000} src="/biomedical-waste-pdf-img/ABMH_BMW-Collection_Non-Covid_Year- revised.jpg" alt="Biomedical Waste Report" />

                      </div>

                    </div>
                  </div>
                </div>
              </div>


            </div>
            {/*Main accordion end*/}



          </div>


        </div>
      </div>
      {/* Wellbeing Packages  end*/}

    </>



  );


};



export default WellnessPack;

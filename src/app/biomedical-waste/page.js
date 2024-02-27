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
            <div className="accordion" id="accordionExample">


              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded="true"
                  >
                    Biomedical Waste Report
                  </button>
                </h2>
                <div
                  id="collapse1"
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
          </div>


        </div>
      </div>
      {/* Wellbeing Packages  end*/}

    </>



  );


};



export default WellnessPack;

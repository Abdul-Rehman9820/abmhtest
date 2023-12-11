

"use client";

import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './about-csr.css'


const Aboutcsr = () => {


  useEffect(() => {


    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll

  }, []);



  return (


    <>
      <title>Training Programs</title>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  ABMH International / <span className="breadcrumbsactive">Training Programs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* common heading div end*/}
      {/* common heading banner start */}
      <div className="mainheadingbanner">
        <div className="mainheadingbandiv">
          <Image width={2000} height={400} src="/commonimages/commabminternatnew.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}
      {/* CSR start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="Csrpolmain abintvisa">
            <div className="crepolpara">

            </div>
            <div className="CSRpolyhead">
              <div className="CSRpolyheadbof">
                <h2 className="CSRpolyheadbalc">
                  Training Programs
                </h2>
                <span className="CSRpolyheadborder" />
              </div>
            </div>
            <div className="crepolpara">

              <p className="crepolparadata">
                Aditya Birla Memorial Hospital offers a variety of courses for careers in health care. These include medical courses, nursing education & paramedical courses.
                Our specially designed observer programs provide an in-depth insight in to various new age technologies employed for efficient patient care at our hospital.
                At ABMH we are committed to achieve and maintain excellence in medical education & research. Our Training Programs have been specifically designed
                to ensure effective transfer of knowledge to our international
                attendees – doctors and paramedics – and create a difference to the healthcare systems back in their home countries.
              </p>

            </div>
            <div className="forcoloumdata">
              <div className="forcoloumdataboxcont">

                <div className="forcoloumdataboxdetail">
                  <h2 className="detailhead">Some of the training programs provided at or hospital include:</h2>
                  <div className="scrdetailpara">
                    Yellow fever vaccination for all except infants under six months and polio vac/IPV for all residents, except third country foreign nationals, are compulsory for travelling to india.
                  </div>
                  <div className="scrdetailpara">

                    <ul>
                      <li>Cardiology & Emergency Medicine</li>
                      <li>Nephrology & Urology – New Age Procedures</li>
                      <li>General Surgery</li>
                      <li>Gastroenterology & GI Surgery</li>
                      <li>Emergency Medicine & Life Support Systems</li>
                      <li>Nursing Care</li>
                    </ul>

                  </div>
                </div>
                <div className="forcoloumdataboxdetail">
                  <h2 className="detailhead">Special features of Training Programs at Aditya Birla Memorial Hospital:</h2>
                  <div className="scrdetailpara">

                    <ul>
                      <li>Customized Programs with respect to duration and requirements to ensure that participating professionals are able to acquire the desired knowledge and expertise</li>
                      <li>Highly personalized approach to training with a dedicated mentor during the program</li>
                      <li>Effective combination of lectures, seminars, and on-site observation</li>
                      <li>Certified by the Medical Committee of Aditya Birla Memorial Hospital</li>
                      <li>Provision of subsidized accommodation at our service apartments opposite the hospital</li>
                    </ul>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* CSR end*/}
    </>





  );


};



export default Aboutcsr;

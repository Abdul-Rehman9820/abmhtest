

"use client";

import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './quality-and-ethics.css'


const Qualityandethics = () => {


  return (


    <>
    <title>Quality Policy & Ethics Committee</title>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  About Us / <span className="breadcrumbsactive">Quality Policy & Ethics Committee</span>
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
           <Image width={2000} height={400} src="/commonimages/commqulitynew.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}
      {/* ethics start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="qualitypolmain">
            <div className="commqulityhead">
              <div className="commqulityheadbof">
                <h2 className="commqulityheadbalc">Quality Policy</h2>
                <span className="qualityheadborder" />
              </div>
            </div>
          </div>
          <div className="qualitypoldata">
            <div className="qualitypoldata1">
              <div className="paraqlflex">
                <div className="paraqlflex1">
                  <span className="qlitdot" />
                </div>
                <div className="paraqlflex2">
                  <p className="qullitdotpara">
                    We, at <b>Aditya Birla Memorial Hospital</b>, a multi super
                    speciality institute, are committed to serve our users and
                    society at large.
                  </p>
                </div>
              </div>
              <div className="paraqlflex">
                <div className="paraqlflex1">
                  <span className="qlitdot" />
                </div>
                <div className="paraqlflex2">
                  <p className="qullitdotpara">
                    Our endeavor is to achieve utmost satisfaction of our users by
                    delivering compassionate, affordable quality services on a
                    sustainable basis. Our focus is on continuous improved patient
                    care, aligning ourselves with technological advances in medical
                    field.
                  </p>
                </div>
              </div>
              <div className="paraqlflex">
                <div className="paraqlflex1">
                  <span className="qlitdot" />
                </div>
                <div className="paraqlflex2">
                  <p className="qullitdotpara">
                    All efforts are made, and will continue to be made, to put
                    medical practices in place to comply with National and
                    International Standards like ISO, NABL to maintain excellence.
                  </p>
                </div>
              </div>
              <div className="paraqlflex">
                <div className="paraqlflex1">
                  <span className="qlitdot" />
                </div>
                <div className="paraqlflex2">
                  <p className="qullitdotpara">
                    We are committed to abide by ethical codes of practices and are
                    responsive to the safety, welfare and needs of all our
                    stakeholders.
                  </p>
                </div>
              </div>
            </div>
            <div className="qualitypoldata2">
              <Image width={400} height={400}
                src="/commonimages/doctors-taking-care-patient.png"
                className="qulitimg"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="ethiccommmain">
            <div className="qualitypolmain">
              <div className="commqulityhead">
                <div className="commqulityheadbof">
                  <h2 className="commqulityheadbalc">Ethics Committee</h2>
                  <span className="qualityheadborder" />
                </div>
              </div>
            </div>
            <div className="ethiccommmaindata">
              <div className="ethiccommmaindatabox ethicborRight">
                <div className="ethicboxhead">
                  <h2>ECR/779/Inst/MH/2015/RR-18</h2>
                  <h2>Registration Number</h2>
                </div>
                <p className="ethicboxpara">
                  The Aditya Birla Memorial Hospital Ethics Committee functions
                  according to Schedule ‘Y’ and Good Clinical Practice Guidelines
                  for Clinical Trials in India and other regulatory requirements for
                  safeguarding the rights, safety and wellbeing of the trial
                  subjects. Our Ethics Committee is registered with the Central
                  Drugs Standard Control Organization (CDSCO), New Delhi, as per the
                  provisions of rule 122DD of the Drugs and Cosmetics Rules, 1945.
                </p>
                <p className="ethicboxpara">
                  We conduct quarterly meeting or as and when required in
                  between.Proposals for clinical trials need to be submitted 15 days
                  before the date of scheduled meeting. (3rd Friday of every month)
                </p>
              </div>
              <div className="ethiccommmaindatabox ethicborLeft">
                <div className="ethicboxhead">
                  <h2>Charges of Ethics Committee</h2>
                </div>
                <p className="ethicboxpara">
                  a. INR 25000/- for routine / normal review. <br />
                  b. INR 50000/- for expedited review.
                  <br />
                  c. The EC review fees for ABMH’s investigator initiated / ABMH
                  research projects / Collaborative projects can be waived off at
                  the discretion of EC.
                  <br />
                  d. EC review fees for other institute’s investigator initiated
                  projects will be INR 10000/-.
                  <br />
                  e. Review of Amendments to EC approved projects will be INR
                  10000/-. <br />
                  f. Review of Sub-study of EC approved projects will be INR
                  10000/-. <br />
                  g. Expedited review of Amendments to EC approved projects will be
                  INR 20000/-. <br />
                  h. Expedited review of Sub-study of EC approved projects will be
                  INR 20000/-. <br />
                  i. Fees for annual review of EC approved projects will be INR
                  10000/-.
                  <br />
                </p>
              </div>
              <div className="ethiccommmaindatabox ethicborRight">
                <div className="ethicboxhead">
                  <h2>Archival Facility</h2>
                </div>
                <p className="ethicboxpara">
                  We have a Fire, Water and Pest Proof, fully equipped archival
                  facility to house clinical trial documents.
                </p>
                <p className="ethicboxpara">
                  Charges for Document Archival:
                  <br />
                  a. 5 years - INR 30000/-.
                  <br />
                  b. 10 years - INR 60000/-.
                  <br />
                  c. 15 years - INR 90000/-
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ethics end*/}
    </>





  );


};



export default Qualityandethics;

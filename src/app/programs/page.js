

"use client";

import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './programs.css'


const Programs = () => {


  useEffect(() => {

    
    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll

  }, []);


  return (



    <>
      <title>Programs</title>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Patient Care /
                  <span className="breadcrumbsactive">Programs</span>
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
      {/* HomeCareSolutions  start*/}
      <div className="parentcontainerwhi progintroBG ">
        <div className="customcontainer">
          <div className="programs_pagehead">
            <div className="homwcareparacol1">
              <p className="homwcareparadataint">
                Aditya Birla Memorial Hospital offers a variety of courses for
                careers in health care. These include medical courses, nursing
                education &amp; paramedical courses. Our academic programs provide
                opportunities for medical aspirants in Postgraduate education in
                various board specialties &amp; super specialties.
                <br />
                <br />
                At ABMH we are committed to achieving and maintaining excellence in
                medical education &amp; research. The medical education program aims
                at developing a pool of competent Human Resources in the field of
                Medicine.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="parentcontainerwhi ">
        <div className="customcontainer">
          <div className="academiccourseint">
            <div className="academiccourseinthead">
              <h2>Academic Courses at ABMH</h2>
              <span className="headborder" />
            </div>
          </div>
          <table className="table table-hover table-bordered intertable coursetable">
            <thead>
              <tr>
                <th scope="col">1. NBEMS COURSES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Diploma</td>
              </tr>
              <tr>
                <td>Broad Specialty</td>
              </tr>
              <tr>
                <td>Super Specialty</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th scope="col">2. ISCCM COURSES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Indian Diploma in Critical Care Medicine (IDCCM)</td>
              </tr>
              <tr>
                <td>ISCCM Diploma in Critical Care Nursing (IDCCN)</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th scope="col">3. CPS COURSES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pathology (DPB)</td>
              </tr>
              <tr>
                <td>ENT (DORL)</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th scope="col">4. MUHS COURSES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fellowship in Trauma Care (FCTC)</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th scope="col">
                  5. ROYAL COLLEGE, UK CLINICAL PREMIERE TRAINING PROGRAMS IN
                  ASSOCIATION WITH TEXILA AMERICAN UNIVERSITY
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Obstetrics &amp; Gynecology</td>
              </tr>
              <tr>
                <td>General Medicine</td>
              </tr>
              <tr>
                <td>General Surgery</td>
              </tr>
              <tr>
                <td>Pediatrics</td>
              </tr>
              <tr>
                <td>Radiology</td>
              </tr>
            </tbody>
          </table>
          <div className="academiccourseint">
            <div className="academiccourseinthead">
              <h2>NATIONAL BOARD OF EXAMINATIONS IN MEDICAL SCIENCES (NBEMS)</h2>
              <span className="headborder" />
            </div>
          </div>
          <div className="homwcareparacol1">
            <p className="homwcareparadataint">
              The diplomate qualification awarded by the National Board of
              Examinations has been equated with the Postgraduate&amp;
              Post-doctorate degrees awarded by other Indian Universities. The
              holders of Board classification awarded after an examination (DNB) are
              eligible to be considered for specialists post for any hospital
              including training or teaching Institutes.
            </p>
          </div>
          <div className="intertime">
            <h2>NBEMS Accredited Specialty</h2>
          </div>
          <table className="table table-hover table-bordered intertable coursetable">
            <thead>
              <tr>
                <th scope="col">1. DNB DIPLOMA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Accreditation Validity :- January 2022 to December 2026</td>
              </tr>
              <tr>
                <td>Duration of the Course :- 2 years</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-hover table-bordered intertable">
            <tbody>
              <tr>
                <td>1)</td>
                <td>ENT (DLO)</td>
                <td>Accredited Seat – 02</td>
              </tr>
              <tr>
                <td>2)</td>
                <td>Obstetrics &amp; Gynecology (DGO)</td>
                <td>Accredited Seat – 02</td>
              </tr>
              <tr>
                <td>3)</td>
                <td>Ophthalmology (DO)</td>
                <td>Accredited Seat – 04</td>
              </tr>
              <tr>
                <td>4)</td>
                <td>Radio Diagnosis (DMRE)</td>
                <td>Awaited</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-hover table-bordered intertable coursetable">
            <thead>
              <tr>
                <th scope="col">2. DNB BROAD SPECIALTY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Accreditation Validity :- January 2023 to December 2027</td>
              </tr>
              <tr>
                <td>Duration of the Course :- 3 years</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-hover table-bordered intertable">
            <tbody>
              <tr>
                <td>1)</td>
                <td>Anesthesiology</td>
                <td>
                  Accredited Post MBBS
                  <br />
                  Seat – 02 / Accredited
                  <br />
                  Post Diploma Seat – 01
                </td>
              </tr>
              <tr>
                <td>2)</td>
                <td>General Medicine</td>
                <td>
                  Accredited Post MBBS
                  <br />
                  Seat – 02
                </td>
              </tr>
              <tr>
                <td>3)</td>
                <td>Family Medicine</td>
                <td>Accredited Seat – 02</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-hover table-bordered intertable coursetable">
            <thead>
              <tr>
                <th scope="col">3. DNB SUPERSPECIALITY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Accreditation Validity : July 2023 to June 2028</td>
              </tr>
              <tr>
                <td>Duration of the Course : 3 years</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-hover table-bordered intertable">
            <tbody>
              <tr>
                <td>1)</td>
                <td>Nephrology</td>
                <td>Accredited Seat – 02</td>
              </tr>
              <tr>
                <td>2)</td>
                <td>Cardiology</td>
                <td>Accredited Seat – 02</td>
              </tr>
              <tr>
                <td>3)</td>
                <td>Medical Oncology</td>
                <td>Accredited Seat – 02</td>
              </tr>
            </tbody>
          </table>
          <div className="homwcareparacol1">
            <p className="homwcareparadataint">
              Email:-
              <a href="mailto:academics@adityabirlahospital.com">

                academics@adityabirlahospital.com
              </a>
              &amp;
              <a href="mailto:manager.academics@adityabirlahospital.com">

                manager.academics@adityabirlahospital.com
              </a>
              <br />
              Contact:- <a href="tel:02030717672">02030717672</a> &amp;
              <a href="tel:02030717816">02030717816</a>
              <br />
              Mobile:- <a href="tel:9011081036">9011081036</a>
            </p>
          </div>
        </div>
      </div>
      {/* HomeCare Solutions  end*/}
      {/* FAQ for wellness  start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="wellnessFAQ">
            <div className="wellfaqCol">
              <div className="wellfaqcontainer">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                        aria-expanded="true"
                      >
                        1. INDIAN SOCIETY OF CRITICAL CARE MEDICINE (ISCCM)
                      </button>
                    </h2>
                    <div
                      id="collapse1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="faqdata">
                          <p>
                            <b>Website:-</b>
                            <span className="faqhyper">
                              <a href="mailto:https://isccm.org">

                                https://isccm.org
                              </a>
                              <br />
                            </span>
                          </p>
                          <ul>
                            <li>
                              <b>
                                Indian Diploma In Critical Care Medicine (IDCCM)
                              </b>
                            </li>
                          </ul>
                          Accreditation Validity –November 2024
                          <br />
                          Duration of the Course: 1 year
                          <br />
                          No. of Accredited Seats: 4 Seats
                          <br />
                          <br />
                          <ul>
                            <li>
                              <b>ISCCM Diploma in Critical Care Nursing (IDCCN)</b>
                            </li>
                          </ul>
                          Accreditation Validity –November 2024
                          <br />
                          Duration of the Course: 1 year
                          <br />
                          No. of Accredited Seats: 8 Seats
                          <p />
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
                        data-bs-target="#collapse2"
                        aria-expanded="false"
                      >
                        2. COLLEGE OF PHYSICIANS &amp; SURGEONS OF MUMBAI (CPS)
                      </button>
                    </h2>
                    <div
                      id="collapse2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="faqdata">
                          <p>
                            <b>Website:-</b>
                            <span className="faqhyper">
                              <a href="mailto:https://www.cpsmumbai.org">

                                https://www.cpsmumbai.org
                              </a>
                              <br />
                            </span>
                          </p>
                          <ul>
                            <li>
                              <b>Pathology (DPB)</b>
                            </li>
                          </ul>
                          Accreditation Validity – <br />
                          Duration of the Course: 2 year
                          <br />
                          No. of Accredited Seats: 2 Seats
                          <br />
                          <br />
                          <ul>
                            <li>
                              <b>ENT (DORL)</b>
                            </li>
                          </ul>
                          Accreditation Validity – <br />
                          Duration of the Course: 2 year
                          <br />
                          No. of Accredited Seats: 2 Seats
                          <p />
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
                        data-bs-target="#collapse3"
                        aria-expanded="false"
                      >
                        3. MUHS FELLOWSHIPS (*Affiliated to Maharashtra University
                        of Health Sciences, Nashik)
                      </button>
                    </h2>
                    <div
                      id="collapse3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="faqdata">
                          <p>
                            <b>Website:-</b>
                            <span className="faqhyper">
                              <a href="mailto:https://www.muhs.ac.in">

                                https://www.muhs.ac.in
                              </a>
                              <br />
                              (Admission for the Academic Year: 2023 -2024)
                              <br />
                            </span>
                          </p>
                          <ul>
                            <li>
                              <b>
                                Fellowship in Emergency Medical &amp; Trauma Care
                                (FCTC)
                              </b>
                            </li>
                          </ul>
                          Accreditation Validity – 1 year
                          <br />
                          Duration of the Course: 1 year
                          <br />
                          No. of Accredited Seats: 2 Seats
                          <br />
                          <br />
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
                        data-bs-target="#collapse4"
                        aria-expanded="false"
                      >
                        4. Royal College, UK clinical premiere training programs in
                        association with Texila American University
                      </button>
                    </h2>
                    <div
                      id="collapse4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="faqdata">
                          <p>
                            <b>Website:-</b>
                            <span className="faqhyper">
                              <a href="mailto:http://www.tauedu.org">

                                http://www.tauedu.org
                              </a>
                              <br />
                              Accreditation Validity – November 2022 to November
                              2027
                              <br />
                              Duration of the Course: 3 year
                              <br />
                            </span>
                          </p>
                          <ul>
                            <li>
                              <b>Obstetrics &amp; Gynecology :</b> of Accredited
                              Seats: 2 Seats
                            </li>
                            <li>
                              <b>General Medicine :</b> of Accredited Seats: 2 Seats
                            </li>
                            <li>
                              <b>General Surgery :</b> of Accredited Seats: 2 Seats
                            </li>
                            <li>
                              <b>Pediatrics :</b> of Accredited Seats: 2 Seats
                            </li>
                            <li>
                              <b>Radiology :</b> of Accredited Seats: 2 Seats
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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



export default Programs;



"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './diagnostic-services.css'


const Contactus = () => {


  useEffect(() => {


    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll

  }, []);




  return (


    <>

      <title>Premier Diagnostic Centre in Pune | Accurate & Advanced Medical Tests</title>
      <meta name="description" content="Discover the finest diagnostic services at Aditya Birla Memorial Hospital, Pune. Our advanced medical tests ensure accuracy and reliability, making us the best diagnostic center in Pune." />
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / <span className="breadcrumbsactive">Diagnostic Services</span>
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
          <Image width={2000} height={400} src="/commonimages/commbanDiagnostic-Services.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}


      {/* Diagnostic Services pg start*/}


      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="diagnosloop">
            <div className="diagnospart">
              <div className="diagnoshead">
                <h2>Diagnostic Services</h2>
                <span className="headborder" />
              </div>
            </div>
            <div className="main-tabsec">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#Radio-diagnosis"
                    type="button"
      
                  >
                    Radio-diagnosis &amp; Imaging Services
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#laboratory-medicine"
                    type="button"

                  >
                    Laboratory Medicine
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#nuclear-medicine"
                    type="button"

                  >
                    Nuclear Medicine
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#pulmonory-medicine"
                    type="button"

                  >
                    Pulmonory Medicine
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#gastroscience"
                    type="button"

                  >
                    Gastroscience
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#dentistry"
                    type="button"

                  >
                    Dentistry
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#home-care "
                    type="button"

                  >
                    Home Care
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#noninvasive-cardiac-diagnostics"
                    type="button"

                  >
                    NonInvasive Cardiac Diagnostics
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#neuroscience"
                    type="button"

                  >
                    Neuroscience
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#otolaryngology-ent"
                    type="button"

                  >
                    Otolaryngology (ENT)
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#urology"
                    type="button"

                  >
                    Urology
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#physiotheraphy"
                    type="button"

                  >
                    Physiotheraphy{" "}
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#cath-lab"
                    type="button"

                  >
                    Cath Lab
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#ambulance-services"
                    type="button"

                  >
                    Ambulance Services
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#clinical-pharmacy"
                    type="button"

                  >
                    Clinical Pharmacy
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#pharmacy"
                    type="button"

                  >
                    Pharmacy
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#anaesthesiology"
                    type="button"

                  >
                    Anaesthesiology
                  </button>
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#transfusion-medicine"
                    type="button"

                  >
                    Transfusion Medicine
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="Radio-diagnosis">
                  <div className="diagnoscont">
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>CT Scan</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>MRI</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Mammography</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Ultrasound</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Colour Doppler</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Bone Densitometry</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>X-Ray &amp; Fluoroscopy</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="laboratory-medicine">
                  <div className="diagnoscont">
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Microbiology</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Histopathology</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Onco Histopathology</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Biochemistry</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Haematology</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Microbiology &amp; Serology</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Pathology &amp; Cyto-pathology</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Molecular Biology</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nuclear-medicine">
                  <div className="diagnoscont">
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>GAMMA CAMERA</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>PET - CT</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pulmonory-medicine">
                  <div className="diagnoscont">
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Bronchoscopy</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Spirometery</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Pulmonary Function Test</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Sleep Test - OSA Test</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Allergy Test</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>EBUS (Endoscopic Bronchial Ultrasound)</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="gastroscience">
                  <div className="diagnoscont">
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Endoscopy</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>ERCP</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>EUS (Endoscopic Ultrasound)</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="dentistry">
                  <div className="diagnoscont">
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>CBCT</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>OPG</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Dental Prothesis</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="home-care">
                  <div className="diagnoscont">
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Sample Collection</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Medicine Delivery</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Nursing Care</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Physio Care</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Home Dialysis</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="noninvasive-cardiac-diagnostics">
                  <div className="diagnoscont">
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>ECG</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>2D/3D ECHO Cardiography</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>TMT / Stress Test</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Holter Monitor</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>TEE</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>EP</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Dobutamine Stress Echo</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>HULT Head Up Tilt Test</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="neuroscience">
                  <div className="diagnoscont">
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>EEG / EMG / NCV</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Video EEG</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="otolaryngology-ent">
                  <div className="diagnoscont">
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Audiometry / Speech Therapy / ERA</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="urology">
                  <div className="diagnoscont">
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Urodynamic Studies</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="physiotheraphy">
                  <div className="diagnoscont">
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Occupational Therapy</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Physiotherapy</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Speech and language therapy</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Cardiac rehabilitation</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Hydrotherapy</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Neuro Rehabilitation</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="cath-lab">
                  <div className="diagnoscont">
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Cath Lab</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="ambulance-services">
                  <div className="diagnoscont">
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Ambulance Services</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="clinical-pharmacy">
                  <div className="diagnoscont">
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Clinical Pharmacy</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pharmacy">
                  <div className="diagnoscont">
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Pharmacy</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="anaesthesiology">
                  <div className="diagnoscont">
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>General Anesthesia</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Cardiac Anesthsia</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Liver Anesthesia</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Peadiatirc Anesthesia</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Neuro Anesthesia</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="transfusion-medicine">
                  <div className="diagnoscont">
                    <div className="diagnosloopbox">
                      <div className="pardigcon">
                        <div className="lablebox">
                          <h2>Blood Centre</h2>
                        </div>
                        <div className="labchoimgbox2">
                          <button className="labchocombtn">
                            <Link href="/diagnostic-book">
                              Book Now
                              <span className="labspecicon">
                                <Image width={100} height={100}
                                  src="/wellnesspageimg/right-arrow-wellness.png"
                                  alt="img"
                                />
                              </span>
                            </Link>
                          </button>
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







      {/* Diagnostic Services pg end*/}
    </>



  );


};



export default Contactus;

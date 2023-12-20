"use client";

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';



import './wellness-packages.css'


const WellnessPack = () => {


  return (


    <>
      <title>Wellness Packages</title>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Patient Care /{" "}
                  <span className="breadcrumbsactive">Wellness Packages</span>
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
          <Image width={2000} height={400} src="/commonimages/wellness-packages-banner.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}
      {/* Wellbeing Packages start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="packagesloop">
            <div className="Packagespart">
              <div className="Packageshead">
                <h2>Wellbeing : Preventive Health Check Packages</h2>
                <span className="headborder" />
              </div>
            </div>
            <div className="packagesloopboxconatainer">
              <div className="packagesloopbox">
                <div className="lableboxflex">
                  <div className="lablebox1">
                    <h2>Coronary Risk</h2>
                    <div className='welpacprice'>₹ 10200</div>
                  </div>
                  <div className="lablebox2">
                    <div className="lablestyle">
                      <div className="lablenumber">21</div>
                      <div className="labelhead">TESTS</div>
                    </div>
                  </div>
                </div>
                <div className="lableseemore">
                  <h2>ECG</h2>
                  <h2>Stress test/2D Echo </h2>
                  <h2> Colour Doppler</h2>
                  <h2>Ambulatory BP</h2>
                  <h2>
                    Physical Evaluation <span className="seeactive"> <button type="button" className="mybotwellpopup" data-bs-toggle="modal" data-bs-target="#CoronaryRisk">+ 16 more</button> </span>
                  </h2>

                </div>
                <div className="labchoimgbox2">
                  <button className="labchocombtn">
                    <a href="">
                      Book Now
                      <span className="labspecicon">
                        <Image width={400} height={400}
                          src="/wellnesspageimg/right-arrow-wellness.png"
                          alt="img"
                        />
                      </span>
                    </a>
                  </button>
                </div>

              </div>

              <>
                {/* Modal  Coronary Risk */}
                <div
                  className="modal fade"
                  id="CoronaryRisk"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">

                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Coronary Risk
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className='willpoopban'>
                        <Image width={500} height={300} className='willpoopbanimg' src="/wellnesspageimg/Coronary Risk.jpg" alt="img" />
                      </div>
                      <div className="modal-body">

                        <div className="wellnepacktogel">

                          <div className="accordion" id="accorCoronaryRisk">

                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  CARDIAC
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accorCoronaryRisk"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>ECG</li>
                                    <li>Stress test/2D Echo</li>
                                    <li>Colour Doppler</li>
                                    <li>Ambulatory BP</li>
                                  </ul>

                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  CONSULTANCY
                                </button>
                              </h2>
                              <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorCoronaryRisk"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Physical Evaluation</li>
                                    <li>Cardiology</li>
                                    <li>Ophthalmic</li>
                                    <li>Diet & Life Style</li>
                                  </ul>

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
                                  aria-controls="collapse3"
                                >
                                  RADIOLOGY
                                </button>
                              </h2>
                              <div
                                id="collapse3"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorCoronaryRisk"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>X-Ray Chest</li>
                                  </ul>

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
                                  aria-controls="collapse4"
                                >
                                  PATHOLOGY
                                </button>
                              </h2>
                              <div
                                id="collapse4"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorCoronaryRisk"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Urine Routine</li>
                                    <li>Haemogram with ESR</li>
                                    <li>Blood Glucose (F)</li>
                                    <li>Lipid Profile</li>
                                    <li>Apolipoprotein A1</li>
                                    <li>Apolipoprotein B</li>
                                    <li>Creatinine</li>
                                    <li>Uric Acid</li>
                                    <li>Sr. Calcium</li>
                                    <li>Electrolytes</li>
                                    <li>Vit. B12</li>
                                    <li>HbAIC</li>
                                  </ul>

                                </div>
                              </div>
                            </div>

                          </div>


                        </div>

                      </div>

                      <div class="modal-footer d-flex flex-wrap justify-content-between">
                        <button type="button" class="welpopleftprice">₹ 10200</button>
                        <button type="button" class="mybookpopupbtn"><a href="">Book Now</a></button>
                      </div>

                    </div>
                  </div>
                </div>
              </>



              <div className="packagesloopbox">
                <div className="lableboxflex">
                  <div className="lablebox1">
                    <h2>
                      Executive Health
                    </h2>
                    <div className='welpacprice'>₹ 10000</div>
                  </div>
                  <div className="lablebox2">
                    <div className="lablestyle">
                      <div className="lablenumber">27</div>
                      <div className="labelhead">TESTS</div>
                    </div>
                  </div>
                </div>
                <div className="lableseemore">
                  <h2>ECG</h2>
                  <h2>Stress test/2D Echo </h2>
                  <h2>DET</h2>
                  <h2>ENT</h2>
                  <h2>
                    Ophthalmic <span className="seeactive"><button type="button" className="mybotwellpopup" data-bs-toggle="modal" data-bs-target="#ExecutiveHealth">+ 22 more</button></span>
                  </h2>
                </div>
                <div className="labchoimgbox2">
                  <button className="labchocombtn">
                    <a href="">
                      Book Now
                      <span className="labspecicon">
                        <Image width={400} height={400}
                          src="/wellnesspageimg/right-arrow-wellness.png"
                          alt="img"
                        />
                      </span>
                    </a>
                  </button>
                </div>
              </div>

              <>
                {/* Modal  ExecutiveHealth */}
                <div
                  className="modal fade"
                  id="ExecutiveHealth"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">

                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Executive Health
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className='willpoopban'>
                        <Image width={500} height={300} className='willpoopbanimg' src="/wellnesspageimg/Executive Health.jpg" alt="img" />
                      </div>
                      <div className="modal-body">

                        <div className="wellnepacktogel">

                          <div className="accordion" id="accorExecutiveHealth">

                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  CARDIO THORASIC EVALUATION
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accorExecutiveHealth"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>ECG</li>
                                    <li>Stress test/2D Echo</li>
                                    <li>PFT</li>
                                  </ul>

                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  CONSULTANCY
                                </button>
                              </h2>
                              <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorExecutiveHealth"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Physical Evaluation</li>
                                    <li>ENT</li>
                                    <li>Ophthalmic</li>
                                    <li>Dental</li>
                                    <li>Diet & Life Style Session</li>
                                  </ul>

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
                                  aria-controls="collapse3"
                                >
                                  RADIOLOGY
                                </button>
                              </h2>
                              <div
                                id="collapse3"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorExecutiveHealth"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>USG Pelvis with Abdomen</li>
                                    <li>X-Ray Chest</li>
                                  </ul>

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
                                  aria-controls="collapse4"
                                >
                                  PATHOLOGY
                                </button>
                              </h2>
                              <div
                                id="collapse4"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorExecutiveHealth"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Urine Routine</li>
                                    <li>A/G Ratio</li>
                                    <li>Haemogram</li>
                                    <li>Australia Antigen (HbsAg)</li>
                                    <li>Alkaline Phosphatase</li>
                                    <li>Lipid Profile</li>
                                    <li>Sr. Creatinine</li>
                                    <li>Uric Acid</li>
                                    <li>Bilirubin</li>
                                    <li>Sr. Calcium</li>
                                    <li>SGPT</li>
                                    <li>PSA</li>
                                    <li>SGOT</li>
                                    <li>Gamma GT</li>
                                    <li>HbA1C</li>
                                    <li>Total Protein</li>
                                    <li>Albumin</li>
                                  </ul>

                                </div>
                              </div>
                            </div>

                          </div>


                        </div>

                      </div>

                      <div class="modal-footer d-flex flex-wrap justify-content-between">
                        <button type="button" class="welpopleftprice">₹ 10000</button>
                        <button type="button" class="mybookpopupbtn"><a href="">Book Now</a></button>
                      </div>

                    </div>
                  </div>
                </div>
              </>



              <div className="packagesloopbox">
                <div className="lableboxflex">
                  <div className="lablebox1">
                    <h2>
                    Male Senior Citizen (60+)
                    </h2>
                    <div className='welpacprice'>₹ 9500</div>
                  </div>
                  <div className="lablebox2">
                    <div className="lablestyle">
                      <div className="lablenumber">28</div>
                      <div className="labelhead">TESTS</div>
                    </div>
                  </div>
                </div>
                <div className="lableseemore">
                  <h2>ECG</h2>
                  <h2>Stress test/2D Echo </h2>
                  <h2>PFT </h2>
                  <h2>Diet & Life Style</h2>
                  <h2>
                    Orthopedic <span className="seeactive"><button type="button" className="mybotwellpopup" data-bs-toggle="modal" data-bs-target="#SeniorCitizenMale">+ 23 more</button></span>
                  </h2>
                </div>
                <div className="labchoimgbox2">
                  <button className="labchocombtn">
                    <a href="">
                      Book Now
                      <span className="labspecicon">
                        <Image width={400} height={400}
                          src="/wellnesspageimg/right-arrow-wellness.png"
                          alt="img"
                        />
                      </span>
                    </a>
                  </button>
                </div>
              </div>

              <>
                {/* Modal  SeniorCitizen Male */}
                <div
                  className="modal fade"
                  id="SeniorCitizenMale"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">

                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                           Male Senior Citizen (60+)
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className='willpoopban'>
                        <Image width={500} height={300} className='willpoopbanimg' src="/wellnesspageimg/Senior Citizen (60+) Male.jpg" alt="img" />
                      </div>
                      <div className="modal-body">

                        <div className="wellnepacktogel">

                          <div className="accordion" id="accorSeniorCitizenMale">

                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  CARDIO THORASIC EVALUATION
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accorSeniorCitizenMale"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>ECG</li>
                                    <li>Stress test/2D Echo</li>
                                    <li>PFT</li>
                                  </ul>

                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  CONSULTANCY
                                </button>
                              </h2>
                              <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorSeniorCitizenMale"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Physical Evaluation</li>
                                    <li>ENT</li>
                                    <li>Ophthalmic</li>
                                    <li>Dental</li>
                                    <li>Diet & Life Style</li>
                                    <li>Orthopedic</li>
                                  </ul>

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
                                  aria-controls="collapse3"
                                >
                                  RADIOLOGY
                                </button>
                              </h2>
                              <div
                                id="collapse3"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorSeniorCitizenMale"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Pelvis with Abdomen</li>
                                    <li>X-Ray Chest</li>
                                  </ul>

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
                                  aria-controls="collapse4"
                                >
                                  PATHOLOGY
                                </button>
                              </h2>
                              <div
                                id="collapse4"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorSeniorCitizenMale"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Urine Routine</li>
                                    <li>Haemogram</li>
                                    <li>Australia Antigen (HbsAg)</li>
                                    <li>Lipid Profile</li>
                                    <li>Bilirubin</li>
                                    <li>SGPT</li>
                                    <li>SGOT</li>
                                    <li>Gamma GT</li>
                                    <li>Total Protein</li>
                                    <li>Albumin</li>
                                    <li>A/G Ratio</li>
                                    <li>Alkaline Phosphatase</li>
                                    <li>Sr. Creatinine</li>
                                    <li>Uric Acid</li>
                                    <li>Sr. Calcium</li>
                                    <li>PSA</li>
                                    <li>HbA1C</li>
                                  </ul>

                                </div>
                              </div>
                            </div>

                          </div>


                        </div>

                      </div>

                      <div class="modal-footer d-flex flex-wrap justify-content-between">
                        <button type="button" class="welpopleftprice">₹ 9500</button>
                        <button type="button" class="mybookpopupbtn"><a href="">Book Now</a></button>
                      </div>

                    </div>
                  </div>
                </div>
              </>



              <div className="packagesloopbox">
                <div className="lableboxflex">
                  <div className="lablebox1">
                    <h2>
                    Female Senior Citizen (60+)
                    </h2>
                    <div className='welpacprice'>₹ 9000</div>
                  </div>
                  <div className="lablebox2">
                    <div className="lablestyle">
                      <div className="lablenumber">29</div>
                      <div className="labelhead">TESTS</div>
                    </div>
                  </div>
                </div>
                <div className="lableseemore">
                  <h2>ECG</h2>
                  <h2>Stress test/2D Echo </h2>
                  <h2>PFT </h2>
                  <h2>Diet & Life Style</h2>
                  <h2>
                    Orthopedic <span className="seeactive"><button type="button" className="mybotwellpopup" data-bs-toggle="modal" data-bs-target="#SeniorCitizenFemale">+ 24 more</button></span>
                  </h2>
                </div>
                <div className="labchoimgbox2">
                  <button className="labchocombtn">
                    <a href="">
                      Book Now
                      <span className="labspecicon">
                        <Image width={400} height={400}
                          src="/wellnesspageimg/right-arrow-wellness.png"
                          alt="img"
                        />
                      </span>
                    </a>
                  </button>
                </div>
              </div>

              <>
                {/* Modal  SeniorCitizen Male */}
                <div
                  className="modal fade"
                  id="SeniorCitizenFemale"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">

                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Female Senior Citizen (60+)
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className='willpoopban'>
                        <Image width={500} height={300} className='willpoopbanimg' src="/wellnesspageimg/Senior Citizen (60+) Female.jpg" alt="img" />
                      </div>
                      <div className="modal-body">

                        <div className="wellnepacktogel">

                          <div className="accordion" id="accorSeniorCitizenFemale">

                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  CARDIO THORASIC EVALUATION
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accorSeniorCitizenFemale"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>ECG</li>
                                    <li>Stress test/2D Echo</li>
                                    <li>PFT</li>
                                  </ul>

                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  CONSULTANCY
                                </button>
                              </h2>
                              <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorSeniorCitizenFemale"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Physical Evaluation</li>
                                    <li>ENT</li>
                                    <li>Ophthalmic</li>
                                    <li>Dental</li>
                                    <li>Diet & Life Style</li>
                                    <li>Orthopedic</li>
                                    <li>Gynecology</li>
                                  </ul>

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
                                  aria-controls="collapse3"
                                >
                                  RADIOLOGY
                                </button>
                              </h2>
                              <div
                                id="collapse3"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorSeniorCitizenFemale"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>USG Pelvis with Abdomen</li>
                                    <li>X-Ray Chest</li>
                                    <li>Mammography</li>
                                  </ul>

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
                                  aria-controls="collapse4"
                                >
                                  PATHOLOGY
                                </button>
                              </h2>
                              <div
                                id="collapse4"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorSeniorCitizenFemale"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Urine Routine</li>
                                    <li>Haemogram</li>
                                    <li>Australia Antigen (HbsAg)</li>
                                    <li>Lipid Profile</li>
                                    <li>Bilirubin</li>
                                    <li>SGPT</li>
                                    <li>SGOT</li>
                                    <li>Gamma GT</li>
                                    <li>Total Protein</li>
                                    <li>A/G Ratio</li>
                                    <li>Alkaline Phosphatase</li>
                                    <li>Sr. Creatinine</li>
                                    <li>Uric Acid</li>
                                    <li>Sr. Calcium</li>
                                    <li>HbA1C</li>
                                    <li>Albumin</li>
                                  </ul>

                                </div>
                              </div>
                            </div>

                          </div>


                        </div>

                      </div>

                      <div class="modal-footer d-flex flex-wrap justify-content-between">
                        <button type="button" class="welpopleftprice">₹ 9000</button>
                        <button type="button" class="mybookpopupbtn"><a href="">Book Now</a></button>
                      </div>

                    </div>
                  </div>
                </div>
              </>


              <div className="packagesloopbox">
                <div className="lableboxflex">
                  <div className="lablebox1">
                    <h2>
                      Well Woman Check-up
                    </h2>
                    <div className='welpacprice'>₹ 6600</div>
                  </div>
                  <div className="lablebox2">
                    <div className="lablestyle">
                      <div className="lablenumber">12</div>
                      <div className="labelhead">TESTS</div>
                    </div>
                  </div>
                </div>
                <div className="lableseemore">
                  <h2>Haemogram</h2>
                  <h2>Urine Routine </h2>
                  <h2>Lipid Profile </h2>
                  <h2>Sr. Creatinine</h2>
                  <h2>
                    Sr. Calcium<span className="seeactive"><button type="button" className="mybotwellpopup" data-bs-toggle="modal" data-bs-target="#Well-Woman-Check-up">+ 7 more</button></span>
                  </h2>
                </div>
                <div className="labchoimgbox2">
                  <button className="labchocombtn">
                    <a href="">
                      Book Now
                      <span className="labspecicon">
                        <Image width={400} height={400}
                          src="/wellnesspageimg/right-arrow-wellness.png"
                          alt="img"
                        />
                      </span>
                    </a>
                  </button>
                </div>
              </div>

              <>
                {/* Modal  Well-Woman-Check-up */}
                <div
                  className="modal fade"
                  id="Well-Woman-Check-up"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">

                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Well Woman Check-up
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className='willpoopban'>
                        <Image width={500} height={300} className='willpoopbanimg' src="/wellnesspageimg/well-women.jpg" alt="img" />
                      </div>
                      <div className="modal-body">

                        <div className="wellnepacktogel">

                          <div className="accordion" id="accorWellWomanCheckup">

                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  CARDIO THORASIC EVALUATION
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accorWellWomanCheckup"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>USG Pelvis with Abdomen</li>
                                    <li>X-Ray Chest</li>
                                    <li>Mammography</li>
                                  </ul>

                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  CONSULTANCY
                                </button>
                              </h2>
                              <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorWellWomanCheckup"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Physical Evaluation</li>
                                    <li>Gynaecology</li>
                                    <li>Diet & Life Style</li>
                                  </ul>

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
                                  aria-controls="collapse3"
                                >
                                  PATHOLOGY
                                </button>
                              </h2>
                              <div
                                id="collapse3"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorWellWomanCheckup"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Haemogram</li>
                                    <li>Urine Routine</li>
                                    <li>Lipid Profile</li>
                                    <li>Sr. Creatinine</li>
                                    <li>Sr. Calcium</li>
                                    <li>PAP Smear</li>
                                  </ul>

                                </div>
                              </div>
                            </div>


                          </div>


                        </div>

                      </div>

                      <div class="modal-footer d-flex flex-wrap justify-content-between">
                        <button type="button" class="welpopleftprice">₹ 6600</button>
                        <button type="button" class="mybookpopupbtn"><a href="">Book Now</a></button>
                      </div>

                    </div>
                  </div>
                </div>
              </>


              <div className="packagesloopbox">
                <div className="lableboxflex">
                  <div className="lablebox1">
                    <h2>
                      Pre-Employment Check-up
                    </h2>
                    <div className='welpacprice'>₹ 4000</div>
                  </div>
                  <div className="lablebox2">
                    <div className="lablestyle">
                      <div className="lablenumber">9</div>
                      <div className="labelhead">TESTS</div>
                    </div>
                  </div>
                </div>
                <div className="lableseemore">
                  <h2>Haemogram with ESR</h2>
                  <h2>Urine Routine </h2>
                  <h2>Blood Group </h2>
                  <h2>Blood Glucose (R)</h2>
                  <h2>
                    HIV <span className="seeactive"><button type="button" className="mybotwellpopup" data-bs-toggle="modal" data-bs-target="#Pre-Employment-Check-up">+ 4 more</button></span>
                  </h2>
                </div>
                <div className="labchoimgbox2">
                  <button className="labchocombtn">
                    <a href="">
                      Book Now
                      <span className="labspecicon">
                        <Image width={400} height={400}
                          src="/wellnesspageimg/right-arrow-wellness.png"
                          alt="img"
                        />
                      </span>
                    </a>
                  </button>
                </div>
              </div>

              <>
                {/* Modal  Pre-Employment-Check-up */}
                <div
                  className="modal fade"
                  id="Pre-Employment-Check-up"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">

                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Pre-Employment Check-up
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className='willpoopban'>
                        <Image width={500} height={300} className='willpoopbanimg' src="/wellnesspageimg/pre-employment.jpg" alt="img" />
                      </div>
                      <div className="modal-body">

                        <div className="wellnepacktogel">

                          <div className="accordion" id="accorPre-EmploymentCheck-up">

                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  CARDIO THORASIC EVALUATION
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accorPre-EmploymentCheck-up"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>ECG</li>
                                  </ul>

                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  RADIOLOGY
                                </button>
                              </h2>
                              <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorPre-EmploymentCheck-up"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>X-Ray Chest</li>
                                  </ul>

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
                                  aria-controls="collapse3"
                                >
                                  CONSULTANCY
                                </button>
                              </h2>
                              <div
                                id="collapse3"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorPre-EmploymentCheck-up"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Physical Evaluation</li>
                                    <li>Ophthalmic</li>
                                  </ul>

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
                                  aria-controls="collapse4"
                                >
                                  PATHOLOGY
                                </button>
                              </h2>
                              <div
                                id="collapse4"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorPre-EmploymentCheck-up"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Haemogram with ESR</li>
                                    <li>Urine Routine</li>
                                    <li>Blood Group</li>
                                    <li>Blood Glucose (R)</li>
                                    <li>HIV</li>
                                  </ul>

                                </div>
                              </div>
                            </div>

                          </div>


                        </div>

                      </div>

                      <div class="modal-footer d-flex flex-wrap justify-content-between">
                        <button type="button" class="welpopleftprice">₹ 4000</button>
                        <button type="button" class="mybookpopupbtn"><a href="">Book Now</a></button>
                      </div>

                    </div>
                  </div>
                </div>
              </>


              <div className="packagesloopbox">
                <div className="lableboxflex">
                  <div className="lablebox1">
                    <h2>
                      ABMH IT
                    </h2>
                    <div className='welpacprice'>₹ 10200</div>
                  </div>
                  <div className="lablebox2">
                    <div className="lablestyle">
                      <div className="lablenumber">20</div>
                      <div className="labelhead">TESTS</div>
                    </div>
                  </div>
                </div>
                <div className="lableseemore">
                  <h2>Urine Routine</h2>
                  <h2>Haemogram </h2>
                  <h2>Blood Glucose (F) </h2>
                  <h2>Lipid Profile</h2>
                  <h2>
                    GGT <span className="seeactive"><button type="button" className="mybotwellpopup" data-bs-toggle="modal" data-bs-target="#ABMH-IT">+ 15 more</button></span>
                  </h2>
                </div>
                <div className="labchoimgbox2">
                  <button className="labchocombtn">
                    <a href="">
                      Book Now
                      <span className="labspecicon">
                        <Image width={400} height={400}
                          src="/wellnesspageimg/right-arrow-wellness.png"
                          alt="img"
                        />
                      </span>
                    </a>
                  </button>
                </div>
              </div>

              <>
                {/* Modal  ABMH-IT */}
                <div
                  className="modal fade"
                  id="ABMH-IT"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">

                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          ABMH IT
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className='willpoopban'>
                        <Image width={500} height={300} className='willpoopbanimg' src="/wellnesspageimg/ABMH IT.jpg" alt="img" />
                      </div>
                      <div className="modal-body">

                        <div className="wellnepacktogel">

                          <div className="accordion" id="accorABMHIT">

                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  CARDIO THORASIC EVALUATION
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accorABMHIT"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>ECG</li>
                                    <li>Stress test/2D Echo</li>
                                  </ul>

                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  CONSULTANCY
                                </button>
                              </h2>
                              <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorABMHIT"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Physical Evaluation</li>
                                    <li>ENT</li>
                                    <li>Ophthalmic</li>
                                    <li>Dental</li>
                                    <li>Diet & Life Style</li>
                                  </ul>

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
                                  aria-controls="collapse3"
                                >
                                  RADIOLOGY
                                </button>
                              </h2>
                              <div
                                id="collapse3"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorABMHIT"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>USG Pelvis with Abdomen</li>
                                    <li>X-Ray Chest</li>
                                  </ul>

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
                                  aria-controls="collapse4"
                                >
                                  PATHOLOGY
                                </button>
                              </h2>
                              <div
                                id="collapse4"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorABMHIT"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Urine Routine</li>
                                    <li>Haemogram</li>
                                    <li>Blood Glucose (F)</li>
                                    <li>Lipid Profile</li>
                                    <li>GGT</li>
                                    <li>Sr. Creatinine</li>
                                    <li>Uric Acid</li>
                                    <li>Sr. Calcium</li>
                                    <li>Blood Group</li>
                                    <li>Liver Profile</li>
                                    <li>HbA1C</li>
                                  </ul>

                                </div>
                              </div>
                            </div>

                          </div>


                        </div>

                      </div>

                      <div class="modal-footer d-flex flex-wrap justify-content-between">
                        <button type="button" class="welpopleftprice">₹ 10200</button>
                        <button type="button" class="mybookpopupbtn"><a href="">Book Now</a></button>
                      </div>

                    </div>
                  </div>
                </div>
              </>



              <div className="packagesloopbox">
                <div className="lableboxflex">
                  <div className="lablebox1">
                    <h2>
                      Hypertension
                    </h2>
                    <div className='welpacprice'>₹ 8500</div>
                  </div>
                  <div className="lablebox2">
                    <div className="lablestyle">
                      <div className="lablenumber">12</div>
                      <div className="labelhead">TESTS</div>
                    </div>
                  </div>
                </div>
                <div className="lableseemore">
                  <h2>Physical Evaluation</h2>
                  <h2>Neurology</h2>
                  <h2>Ophthalmic</h2>
                  <h2>Electrolytes</h2>
                  <h2>
                     Lipid Profile <span className="seeactive"><button type="button" className="mybotwellpopup" data-bs-toggle="modal" data-bs-target="#Hypertension">+ 7 more</button></span>
                  </h2>
                </div>
                <div className="labchoimgbox2">
                  <button className="labchocombtn">
                    <a href="">
                      Book Now
                      <span className="labspecicon">
                        <Image width={400} height={400}
                          src="/wellnesspageimg/right-arrow-wellness.png"
                          alt="img"
                        />
                      </span>
                    </a>
                  </button>
                </div>
              </div>

              <>
                {/* Modal  Hypertension */}
                <div
                  className="modal fade"
                  id="Hypertension"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">

                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                           Hypertension
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className='willpoopban'>
                        <Image width={500} height={300} className='willpoopbanimg' src="/wellnesspageimg/Hypertension.jpg" alt="img" />
                      </div>
                      <div className="modal-body">

                        <div className="wellnepacktogel">

                          <div className="accordion" id="accorHypertension">

                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  CARDIO THORASIC EVALUATION
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accorHypertension"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>ECG</li>
                                    <li>Colour Doppler</li>
                                    <li>Ambulatory</li>
                                  </ul>

                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  CONSULTANCY
                                </button>
                              </h2>
                              <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorHypertension"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Physical Evaluation</li>
                                    <li>Neurology</li>
                                    <li>Ophthalmic</li>
                                    <li>Diet & Life Style</li>
                                  </ul>

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
                                  aria-controls="collapse3"
                                >
                                  PATHOLOGY
                                </button>
                              </h2>
                              <div
                                id="collapse3"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorHypertension"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Haemogram with ESR</li>
                                    <li>Blood Glucose (F)</li>
                                    <li>Lipid Profile</li>
                                    <li>Sr. Creatinine</li>
                                    <li>Electrolytes</li>
                                  </ul>

                                </div>
                              </div>
                            </div>


                          </div>


                        </div>

                      </div>

                      <div class="modal-footer d-flex flex-wrap justify-content-between">
                        <button type="button" class="welpopleftprice">₹ 8500</button>
                        <button type="button" class="mybookpopupbtn"><a href="">Book Now</a></button>
                      </div>

                    </div>
                  </div>
                </div>
              </>



              <div className="packagesloopbox">
                <div className="lableboxflex">
                  <div className="lablebox1">
                    <h2>
                       Basic Package
                    </h2>
                    <div className='welpacprice'>₹ 6600</div>
                  </div>
                  <div className="lablebox2">
                    <div className="lablestyle">
                      <div className="lablenumber">9</div>
                      <div className="labelhead">TESTS</div>
                    </div>
                  </div>
                </div>
                <div className="lableseemore">
                  <h2>Haemogram with ESR</h2>
                  <h2>Urine Routine</h2>
                  <h2>Blood Group</h2>
                  <h2>Blood Glucose (R)</h2>
                  <h2>
                     HIV <span className="seeactive"><button type="button" className="mybotwellpopup" data-bs-toggle="modal" data-bs-target="#BasicPackage">+ 4 more</button></span>
                  </h2>
                </div>
                <div className="labchoimgbox2">
                  <button className="labchocombtn">
                    <a href="">
                      Book Now
                      <span className="labspecicon">
                        <Image width={400} height={400}
                          src="/wellnesspageimg/right-arrow-wellness.png"
                          alt="img"
                        />
                      </span>
                    </a>
                  </button>
                </div>
              </div>

              <>
                {/* Modal  Basic Package */}
                <div
                  className="modal fade"
                  id="BasicPackage"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">

                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                           Basic Package
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className='willpoopban'>
                        <Image width={500} height={300} className='willpoopbanimg' src="/wellnesspageimg/basic _package.jpg" alt="img" />
                      </div>
                      <div className="modal-body">

                        <div className="wellnepacktogel">

                          <div className="accordion" id="accorBasicPackage">

                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  CARDIAC
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accorBasicPackage"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>ECG</li>
                                  </ul>

                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  RADIOLOGY
                                </button>
                              </h2>
                              <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorBasicPackage"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>X-Ray Chest</li>
                                  </ul>

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
                                  aria-controls="collapse3"
                                >
                                  CONSULTANCY
                                </button>
                              </h2>
                              <div
                                id="collapse3"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorBasicPackage"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Physical Evaluation</li>
                                    <li>Ophthalmic</li>
                                  </ul>

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
                                  aria-controls="collapse4"
                                >
                                  PATHOLOGY
                                </button>
                              </h2>
                              <div
                                id="collapse4"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accorBasicPackage"
                              >
                                <div className="accordion-body">

                                  <ul className='wellpackpopparaul'>
                                    <li>Haemogram with ESR</li>
                                    <li>Urine Routine</li>
                                    <li>Blood Group</li>
                                    <li>Blood Glucose (R)</li>
                                    <li>HIV</li>
                                  </ul>

                                </div>
                              </div>
                            </div>


                          </div>


                        </div>

                      </div>

                      <div class="modal-footer d-flex flex-wrap justify-content-between">
                        <button type="button" class="welpopleftprice">₹ 6600</button>
                        <button type="button" class="mybookpopupbtn"><a href="">Book Now</a></button>
                      </div>

                    </div>
                  </div>
                </div>
              </>


            </div>
          </div>
        </div>
      </div>
      {/* Wellbeing Packages  end*/}
      {/* HomeCareSolutions  start*/}
      <div className="parentcontainerwhi HomeCareSolutionsBG" id='homecare-solutions'>
        <div className="customcontainer">
          <div className="HomeCareSolutionsmain">
            <div className="HomeCareSolutionspart">
              <div className="HomeCareSolutionshead">
                <h2>HomeCare Solutions</h2>
                <span className="headborder" />
              </div>
            </div>
            <div className="HomeCareSolutionsPraimg">
              <div className="homwcareparacol1">
                <p className="homwcareparadata">
                  HomeCare Solutions by Aditya Birla Memorial Hospital (ABMH) is a
                  comprehensive and compassionate approach to providing healthcare
                  services in the comfort of your own home. With a team of highly
                  skilled and dedicated healthcare professionals, ABMH ensures that
                  patients receive personalized care tailored to their specific
                  needs. From skilled nursing care to physiotherapy, medication
                  management, and specialized services like wound care and
                  palliative care, ABMH&lsquo;s HomeCare Solutions cover a wide spectrum
                  of medical requirements. The program also emphasizes patient
                  education and support, empowering individuals and their families
                  to actively participate in the healing process. With a commitment
                  to quality and a deep understanding of the importance of
                  home-based care, ABMH&lsquo;s HomeCare Solutions strive to enhance the
                  overall well-being and quality of life for those in need of
                  medical assistance in their own familiar environment.
                </p>
              </div>
              <div className="homwcareparacol2">
                <div className="homwcareparacol2img1">
                  <Image width={400} height={400} src="/wellnesspageimg/wellhomecare.jpg" alt="img" />
                  <div className="homwcarechoimgbox2">
                    <button className="homwcarechocombtn">
                      <a href="">
                        HOME SAMPLE COLLECTION
                        <span className="homwcarespecicon">
                          <Image width={400} height={400}
                            src="/wellnesspageimg/right-arrow-wellness.png"
                            alt="img"
                          />
                        </span>
                      </a>
                    </button>
                  </div>
                </div>
                <div className="homecartwoimg">
                  <div className="homecartwoimgcol1">
                    <div className="homwcareparacol2img1">
                      <Image width={400} height={400} src="/wellnesspageimg/NURSINGCARE.png" alt="img" />
                      <div className="homwcarechoimgbox2">
                        <button className="homwcarechocombtn">
                          <a href="">
                            NURSING CARE
                            <span className="homwcarespecicon">
                              <Image width={400} height={400}
                                src="/wellnesspageimg/right-arrow-wellness.png"
                                alt="img"
                              />
                            </span>
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="homecartwoimgcol2">
                    <div className="homwcareparacol2img1">
                      <Image width={400} height={400}
                        src="/wellnesspageimg/PHYSIOTHERAPYhomecare.png"
                        alt="img"
                      />
                      <div className="homwcarechoimgbox2">
                        <button className="homwcarechocombtn">
                          <a href="">
                            PHYSIOTHERAPY
                            <span className="homwcarespecicon">
                              <Image width={400} height={400}
                                src="/wellnesspageimg/right-arrow-wellness.png"
                                alt="img"
                              />
                            </span>
                          </a>
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
      {/* HomeCare Solutions  end*/}
      {/* FAQ for wellness  start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="wellnessFAQ">
            <div className="wellnessFAQpart">
              <div className="wellnessFAQhead">
                <h2>FAQs : Common Questions</h2>
                <span className="headborder" />
              </div>
            </div>

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
                        What is included in your wellness packages?
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
                            Our wellness packages are carefully curated to include a combination of services and resources tailored to enhance your well-being.
                          </p>
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
                        How do I choose the right wellness package for me?
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
                            To help you choose the most suitable package, consider your specific wellness goals, preferences, and any health considerations.
                            Our Experts can also guide you in selecting the package that aligns with your needs.
                          </p>
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
                        Are your wellness packages customizable?
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
                            Yes, many of our packages are customizable to accommodate individual preferences and needs.
                          </p>
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
                        Are there any hidden fees associated with the wellness packages?
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
                            No, we are committed to transparency. All fees associated with our wellness packages are clearly outlined during the purchase process. There are no hidden fees.
                          </p>
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
                        data-bs-target="#collapse5"
                        aria-expanded="false"
                      >
                        How do I book the services included in my wellness package?
                      </button>
                    </h2>
                    <div
                      id="collapse5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="faqdata">
                          <p>
                            Booking details are provided upon purchase. Typically, you can schedule services through our website or call our customer care on 98811 23006.
                          </p>
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



export default WellnessPack;

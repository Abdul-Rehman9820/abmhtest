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
                    <h2>
                      Coronary<br />
                      Risk
                    </h2>
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
                    Physical Evaluation + <span className="seeactive">16 more</span>
                  </h2>
                </div>
                <div className="labchoimgbox2">
                  <button className="labchocombtn">
                    <a href="">
                      BUY NOW FOR ₹ 10200
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
              <div className="packagesloopbox">
                <div className="lableboxflex">
                  <div className="lablebox1">
                    <h2>
                      Executive <br />
                      Health
                    </h2>
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
                    Ophthalmic + <span className="seeactive">17 more</span>
                  </h2>
                </div>
                <div className="labchoimgbox2">
                  <button className="labchocombtn">
                    <a href="">
                      BUY NOW FOR ₹ 10000
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
              <div className="packagesloopbox">
                <div className="lableboxflex">
                  <div className="lablebox1">
                    <h2>
                      Senior <br />
                      Citizen (60+)
                    </h2>
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
                    Orthopedic + <span className="seeactive">22 more</span>
                  </h2>
                </div>
                <div className="labchoimgbox2">
                  <button className="labchocombtn">
                    <a href="">
                      BUY NOW FOR ₹ 9500
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
              <div className="packagesloopbox">
                <div className="lableboxflex">
                  <div className="lablebox1">
                    <h2>
                      Well Woman<br />
                      Check-up
                    </h2>
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
                    Sr. Calcium Test + <span className="seeactive">7 more</span>
                  </h2>
                </div>
                <div className="labchoimgbox2">
                  <button className="labchocombtn">
                    <a href="">
                      BUY NOW FOR ₹ 6600
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
              <div className="packagesloopbox">
                <div className="lableboxflex">
                  <div className="lablebox1">
                    <h2>
                      Pre-Employment<br />
                      Check-up
                    </h2>
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
                    HIV Test + <span className="seeactive">4 more</span>
                  </h2>
                </div>
                <div className="labchoimgbox2">
                  <button className="labchocombtn">
                    <a href="">
                      BUY NOW FOR ₹ 4000
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
              <div className="packagesloopbox">
                <div className="lableboxflex">
                  <div className="lablebox1">
                    <h2>
                      ABMH <br />
                      IT
                    </h2>
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
                    GGT Test + <span className="seeactive">15 more</span>
                  </h2>
                </div>
                <div className="labchoimgbox2">
                  <button className="labchocombtn">
                    <a href="">
                      BUY NOW FOR ₹ 10200
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

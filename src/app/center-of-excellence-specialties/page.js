
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import './OurSpecialties.css'



const Specialties = () => {


  useEffect(() => {

    // window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll

  }, []);



  return (


    <>

      <title>Center Of Excellence Specialties  | Expert Healthcare Services in Pune - Aditya Birla Hospital</title>
      <meta name="description" content="Explore diverse medical specialties at Aditya Birla Hospital, Pune. Our expert healthcare services encompass a range of specialized treatments and care for your well-being." />


      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / <span className="breadcrumbsactive">Center Of Excellence Specialties</span>
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
          <Image width={2000} height={400} src="/commonimages/Multi-specialities-banner.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}
      {/* specialties  start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specialParentcont">


            <div className="specialityStaticcont">


              <div className="specialmaincont backgColorYellow">
                <div className="specboxes">
                  <div className="speboxhead">
                    <h2 className="colorstyleblack" id="Cardiac-Science">Cardiac Science</h2>
                  </div>
                  <div className="speboxloopcon">

                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/Cardiology">
                            <h2>Cardiology</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/pediatrics-cardiology">
                            <h2>Pediatric Cardiology</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/cardiovascular-and-thoracic-surgery">
                            <h2>Cardiovascular Thoracic Surgery</h2>
                          </Link>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>


              <div className="specialmaincont backgColorGry">
                <div className="specboxes">
                  <div className="speboxhead">
                    <h2 className="colorstyleRED" id="Neuroscience">Neuroscience</h2>
                  </div>
                  <div className="speboxloopcon">

                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/neurology">
                            <h2>Neurology</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/neuro-surgery">
                            <h2>Neuro Surgery</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/neuro-surgery">
                            <h2>Functional Neuro Surgeon</h2>
                          </Link>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>


              <div className="specialmaincont backgColorRED">
                <div className="specboxes">
                  <div className="speboxhead">
                    <h2 className="colorstyleWHITE" id="Robotic-Surgery">Robotic Surgery</h2>
                  </div>
                  <div className="speboxloopcon">

                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/gynae-oncology">
                            <h2>Gynecologic Oncology</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/oncology">
                            <h2>Oncology</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* <div className="spaccont">
        <div className="speforwhitbgsp">
          <div className="spefColiconContsp">
            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
          </div>
          <div className="speforwhitbgCol1sp">
            <Link href="/specialties/dummy">
              <h2>Uro Oncology</h2>
            </Link>
          </div>
        </div>
      </div> */}
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/gastrointestinal-surgery">
                            <h2>Gastrointestinal</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/general-surgery-and-minimal-invasive">
                            <h2>General Surgery</h2>
                          </Link>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>


              <div className="specialmaincont backgColorYellow">
                <div className="specboxes">
                  <div className="speboxhead">
                    <h2 className="colorstyleblack" id="Organ-Transplant-Center">Organ Transplant Center</h2>
                  </div>
                  <div className="speboxloopcon">

                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/liver-transplant">
                            <h2>Liver Transplant</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/nephrology-and-kidney-transplant">
                            <h2>Kidney Transplant</h2>
                          </Link>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>


              {/* <div className="specialmaincont backgColorGry">
  <div className="specboxes">
    <div className="speboxhead">
      <h2 className="colorstyleblack">Organ Transplant Center</h2>
    </div>
    <div className="speboxloopcon">

      <div className="spaccont">
        <div className="speforwhitbgsp">
          <div className="spefColiconContsp">
            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
          </div>
          <div className="speforwhitbgCol1sp">
            <Link href="/specialties/dummy">
              <h2>Kidney Transplant</h2>
            </Link>
          </div>
        </div>
      </div>
      <div className="spaccont">
        <div className="speforwhitbgsp">
          <div className="spefColiconContsp">
            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
          </div>
          <div className="speforwhitbgCol1sp">
            <Link href="/specialties/dummy">
              <h2>Kidney Transplant</h2>
            </Link>
          </div>
        </div>
      </div>
      

    </div>
  </div>
</div> */}


              {/* <div className="specialmaincont backgColorRED">
  <div className="specboxes">
    <div className="speboxhead">
      <h2 className="colorstyleWHITE">Tissue Transplant</h2>
    </div>
    <div className="speboxloopcon">

      <div className="spaccont">
        <div className="speforwhitbgsp">
          <div className="spefColiconContsp">
            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
          </div>
          <div className="speforwhitbgCol1sp">
            <Link href="/specialties/dummy">
              <h2>Cornea Transplant & Eye Bank</h2>
            </Link>
          </div>
        </div>
      </div>
      <div className="spaccont">
        <div className="speforwhitbgsp">
          <div className="spefColiconContsp">
            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
          </div>
          <div className="speforwhitbgCol1sp">
            <Link href="/specialties/dummy">
              <h2>Bone Marrow Transplant</h2>
            </Link>
          </div>
        </div>
      </div>
      

    </div>
  </div>
</div> */}


              <div className="specialmaincont backgColorGry">
                <div className="specboxes">
                  <div className="speboxhead">
                    <h2 className="colorstyleblack" id="Orthopedic-Joint-Replacement">Orthopedic & Joint Replacement</h2>
                  </div>
                  <div className="speboxloopcon">

                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/orthopedics-joint-replacement">
                            <h2>Joint Replacement</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/orthopedics-joint-replacement">
                            <h2>Orthopedic, Trauma & Paediatric Surgeon</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* <div className="spaccont">
        <div className="speforwhitbgsp">
          <div className="spefColiconContsp">
            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
          </div>
          <div className="speforwhitbgCol1sp">
            <Link href="/specialties/dummy">
              <h2>Conventional Orthopedic</h2>
            </Link>
          </div>
        </div>
      </div> */}
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/orthopedics-joint-replacement">
                            <h2>Foot & Ankle</h2>
                          </Link>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>


              <div className="specialmaincont backgColorYellow">
                <div className="specboxes">
                  <div className="speboxhead">
                    <h2 className="colorstyleblack" id="Mother-and-Child">Mother & Child</h2>
                  </div>
                  <div className="speboxloopcon">

                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/obstetrics-gynaecology">
                            <h2>Obstetrics & Gynaecology</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/foetal-medicine">
                            <h2>Foetal Medicine</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/ivf-and-reproductive-medicine">
                            <h2>IVF & Reproductive Medicine</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/genetics">
                            <h2>Genetics</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/lactation">
                            <h2>Lactation</h2>
                          </Link>
                        </div>
                      </div>
                    </div>



                  </div>
                </div>
              </div>


              <div className="specialmaincont backgColorRED">
                <div className="specboxes">
                  <div className="speboxhead">
                    <h2 className="colorstyleWHITE" id="Pediatric">Pediatric</h2>
                  </div>
                  <div className="speboxloopcon">

                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/pediatrics">
                            <h2>Pediatric</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/pediatrics-cardiology">
                            <h2>Pediatric Cardiology</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/pediatric-dentistry">
                            <h2>Pediatric Dentistry</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/pediatric-endocrinology">
                            <h2>Pediatric Endocrinology</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/pediatrics-gastroenterology">
                            <h2>Pediatric Gastroenterology</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/pediatrics-neurology">
                            <h2>Pediatric Neurology</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/pediatrics-orthopedics">
                            <h2>Pediatric Orthopedics</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/pediatrics-pulmonology">
                            <h2>Pediatric Pulmonology</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/pediatrics-surgery">
                            <h2>Pediatric Surgery</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* <div className="spaccont">
        <div className="speforwhitbgsp">
          <div className="spefColiconContsp">
            <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
          </div>
          <div className="speforwhitbgCol1sp">
            <Link href="/specialties/dummy">
              <h2>Pediatric Nephrology</h2>
            </Link>
          </div>
        </div>
      </div> */}
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/pediatric-intensivist">
                            <h2>Pediatric Intensivist</h2>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="spaccont">
                      <div className="speforwhitbgsp">
                        <div className="spefColiconContsp">
                          <Image width={100} height={100} src="/specialtiesimg/newsicon.png" alt="img" />
                        </div>
                        <div className="speforwhitbgCol1sp">
                          <Link href="/specialties/neonatology">
                            <h2>Neonatology</h2>
                          </Link>
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
      {/* specialties end*/}
    </>




  );


};



export default Specialties;

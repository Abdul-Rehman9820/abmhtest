

"use client";

import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './abmh-international.css'


const Abmhinterna = () => {

  useEffect(() => {

    
    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll

  }, []);
  


  return (


    <>

    <title>ABMH International</title>
          
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata"> Home / <span className="breadcrumbsactive">ABMH International</span></div>
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
      {/* International start*/}
      <div className="parentcontainerwhi abmhinternanGrybg">
        <div className="customcontainer">
          <div className="abinernanmaincon">
            <div className="inernanparbox">
              <div className="internhead">
                <h1 className="interpagehead">
                  Aditya Birla Memorial Hospital – International
                </h1>
              </div>
              <div className="inernanparboxpara">
                <p>
                  <span className="styleforA">A</span>ditya Birla Memorial Hospital
                  (ABMH) is a multi-specialty medical centre located in the city of
                  Pune in the west Indian state of Maharashtra. The quaternary
                  healthcare centre provides high quality and cost-effective medical
                  services. A tribute to the visionary founder of the Aditya Birla
                  Group, the hospital fulfills the late Mr. Aditya Vikram Birla’s
                  dream of building a world-class healthcare facility in India.{" "}
                </p>
                <p>
                  The 500-bed hospital functions in a film-less and paperless
                  digital environment, backed by cutting edge medical technology and
                  IT resources. The aim is to create a centre of life where elements
                  of nature augment the healing environment and offer holistic
                  healthcare under one roof.
                </p>
              </div>
            </div>
            <div className="internaticonbox">
              <div className="internatipartbof">
                <div className="internatisheadbof">
                  <h2 className="internatibofbalc">Our Services</h2>
                  <span className="internatiborderbof" />
                </div>
              </div>
              <div className="internationaliconloopbox">
                <div className="interboxicon">
                  <Image width={400} height={400} src="/abmh-intern-img/intericon0.png" alt="img" />
                  <Link href="/abmh-international/general-services">
                    <div className="inntericonhead">General Services</div>
                  </Link>
                </div>
                <div className="interboxicon">
                  <Image width={400} height={400} src="/abmh-intern-img/intericon1.png" alt="img" />
                  <Link href="/abmh-international/patient-services">
                    <div className="inntericonhead">Patient Services</div>
                  </Link>
                </div>
                <div className="interboxicon">
                  <Image width={400} height={400} src="/abmh-intern-img/intericon2.png" alt="img" />
                  <Link href="/abmh-international/plan-your-treatment">
                    <div className="inntericonhead">Plan your Treatment</div>
                  </Link>
                </div>
                <div className="interboxicon">
                  <Image width={400} height={400} src="/abmh-intern-img/intericon3.png" alt="img" />
                  <Link href="/abmh-international/visa-information">
                    <div className="inntericonhead">Visa Information</div>
                  </Link>
                </div>
                <div className="interboxicon">
                  <Image width={400} height={400} src="/abmh-intern-img/intericon4.png" alt="img" />
                  <Link href="/abmh-international/consular-information">
                    <div className="inntericonhead">Consular Information</div>
                  </Link>
                </div>
                <div className="interboxicon">
                  <Image width={400} height={400} src="/abmh-intern-img/intericon5.png" alt="img" />
                  <Link href="/abmh-international/training-programs">
                    <div className="inntericonhead">Training Programs</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="internaticonboxforslid">
            <div className="internatipartbof">
              <div className="internatisheadbof">
                <h2 className="internatibofbalc">Hear from them</h2>
                <span className="internatiborderbof" />
              </div>
            </div>
            <div className="abmhintertestimo">
              <div id="carouselExampleIndicatorsintern" className="carousel slide">
              
                {/* <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicatorsintern"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicatorsintern"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  ></button>
                </div> */}

                <div className="carousel-inner">


                  <div className="carousel-item active">
                    <div className="interntestislid">
                      <div className="interntestislidChil">
                        <div className="interntestislidChilcol1">
                          <div className="ourworkbox1">
                            <div className="intertestvideo">
                              <iframe
                                className="interslidevideo"
                                src="https://www.youtube.com/embed/JVhoUCsUou8"
                                frameBorder={0}
                                allowFullScreen=""
                              ></iframe>
                            </div>
                          </div>
                        </div>
                        <div className="interntestislidChilcol2">
                          <div className="interntestislidChilcol2Para">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum 
                              laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                          </div>
                          <div className="interourworkname">
                            <h2>Michael Nkubito</h2>
                          </div>
                          <div className="intertestispace" />
                          <div className="interourworkspec">
                            <h2>Ugandan</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="interntestislid">
                      <div className="interntestislidChil">
                        <div className="interntestislidChilcol1">
                          <div className="ourworkbox1">
                            <div className="intertestvideo">
                              <iframe
                                className="interslidevideo"
                                src="https://www.youtube.com/embed/29vP93VLGbc"
                                frameBorder={0}
                                allowFullScreen=""
                              ></iframe>
                            </div>
                          </div>
                        </div>
                        <div className="interntestislidChilcol2">
                          <div className="interntestislidChilcol2Para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum 
                            laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                          </div>
                          <div className="interourworkname">
                            <h2>Grace Olumuji</h2>
                          </div>
                          <div className="intertestispace" />
                          <div className="interourworkspec">
                            <h2>Nigeria</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="interntestislid">
                      <div className="interntestislidChil">
                        <div className="interntestislidChilcol1">
                          <div className="ourworkbox1">
                            <div className="intertestvideo">
                              <iframe
                                className="interslidevideo"
                                src="https://www.youtube.com/embed/X6RPreZLwHg"
                                frameBorder={0}
                                allowFullScreen=""
                              ></iframe>
                            </div>
                          </div>
                        </div>
                        <div className="interntestislidChilcol2">
                          <div className="interntestislidChilcol2Para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum 
                            laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                          </div>
                          <div className="interourworkname">
                            <h2>Mr. Kang Weike</h2>
                          </div>
                          <div className="intertestispace" />
                          <div className="interourworkspec">
                            <h2>China</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="interntestislid">
                      <div className="interntestislidChil">
                        <div className="interntestislidChilcol1">
                          <div className="ourworkbox1">
                            <div className="intertestvideo">
                              <iframe
                                className="interslidevideo"
                                src="https://www.youtube.com/embed/8KqsSC7OSts"
                                frameBorder={0}
                                allowFullScreen=""
                              ></iframe>
                            </div>
                          </div>
                        </div>
                        <div className="interntestislidChilcol2">
                          <div className="interntestislidChilcol2Para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum 
                            laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                          </div>
                          <div className="interourworkname">
                            <h2>Ms. Teriba</h2>
                          </div>
                          <div className="intertestispace" />
                          <div className="interourworkspec">
                            <h2>Nigeria</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="interntestislid">
                      <div className="interntestislidChil">
                        <div className="interntestislidChilcol1">
                          <div className="ourworkbox1">
                            <div className="intertestvideo">
                              <iframe
                                className="interslidevideo"
                                src="https://www.youtube.com/embed/yAwjj-bkWic"
                                frameBorder={0}
                                allowFullScreen=""
                              ></iframe>
                            </div>
                          </div>
                        </div>
                        <div className="interntestislidChilcol2">
                          <div className="interntestislidChilcol2Para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum 
                            laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                          </div>
                          <div className="interourworkname">
                            <h2>Omani Patient</h2>
                          </div>
                          <div className="intertestispace" />
                          <div className="interourworkspec">
                            <h2>Oman</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
                
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicatorsintern"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true">
                 
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicatorsintern"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true">
                 
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* International end*/}
    </>




  );


};



export default Abmhinterna;

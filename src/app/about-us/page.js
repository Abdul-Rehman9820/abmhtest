

"use client";

import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './about-us.css'


const Aboutus = () => {


  return (


    <>
      <title>About Us</title>
      <meta name="description" content="Learn about the pioneering healthcare services offered at Aditya Birla Memorial Hospital, one of the premier hospitals in Pune. Discover our commitment to excellence and compassionate care." />
      <link rel="canonical" href="https://adityabirlahospital.com/about-us" />
      
      <meta property="og:title" content="Aditya Birla Hospital: About Us" />
      <meta property="og:description" content="Learn about the pioneering healthcare services offered at Aditya Birla Memorial Hospital, one of the premier hospitals in Pune. Discover our commitment to excellence and compassionate care." />
      <meta property="og:image" content="https://adityabirlahospital.com/_next/image?url=%2Fhomeimg%2FW-Banner-1.jpg&w=1920&q=75" />
      
      
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div id="aboutus"></div>
              <div className="breadcrumbs">
                  <Link className="breadcrumbsNotactive" href="/">Home</Link> / <span className="breadcrumbsactive">About Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* common heading div end*/}
      {/* common heading banner start */}
      <div className="mainheadingbanner">
        <div className="mainheadingbandiv">
          <Image width={2000} height={400} src="/commonimages/commaboutusnew.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}
      {/* about us pg start*/}

      <div className="parentcontainerwhi bodofdirredbg mt-5">
        <div className="customcontainer">
          <div className="BoardofDirectors">


            <div className="bodofdirdata aboutmobflex">


              <div className="topbodofdirdata1">

                <div className="Specialtiespartbof">
                  <div className="Specialtiesheadbof">
                    <h2 className="oursepperbof">About Shri Late Aditya Vikram Birla</h2>
                    <span className="headborderbof" />
                  </div>
                </div>

                <p className="bodpar mt-4">
                  Mr. Aditya Birla, a visionary in Indian industry, embarked on the journey of building a global business empire at the young age of 24. In 1969, long before globalization became a buzzword in India, he put Indian business on the world map,
                  setting up world-class production bases in vibrant South East Asian countries.<br></br><br></br>

                  Anticipating the winds of change, he staked the future of his business on a competitive, free market-driven economic order. Under his leadership, the Aditya Birla Group became the world‘s largest producer of viscose staple fibre, the largest refiner of palm oil,
                  and achieved significant milestones in various sectors, both in India and globally.<br></br><br></br>

                  Mr. Birla believed in a unique form of globalization, where a business could be global while being rooted in India. His relentless efforts positioned his companies as industry leaders, earning respect as one of India‘s
                  finest business houses and the first India-based international Group.
                </p>
                <div id="vision-mission"></div>


                <div className="collapse" id="collapseExample">
                  <div className="">

                    <p className="bodpar">
                      At the time of his untimely demise in 1995, the Group‘s global revenues had crossed Rs.8,000 crore, with assets exceeding Rs.9,000 crore. The legacy he left behind included 55 benchmark quality plants, an employee strength of 75,000, and a shareholder community of 600,000.
                      His companies not only created enormous wealth for the nation but also garnered respect for Indian entrepreneurship in South East Asia.<br></br><br></br>

                      Mr. Aditya Birla‘s dream of India attaining a respectable rank among developed nations remains an enduring inspiration. He took pride in being an Indian and, through his unmatched success, left an indelible mark on Indian industry,
                      forever remembered as a pioneer and a true visionary.
                    </p>

                  </div>
                </div>

                <button className="aboutreadmorbtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  Read More
                </button>

              </div>
              <div className="topbodofdirdata2 latshriimg">

                <Image width={400} height={400} className="abouttopslide mt-4" src="/aboutusimg/abouttopslide2.jpg" alt="img" />

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parentcontainerwhi vision-mission">
        <div className="customcontainer">
          <div className="visionmissparn">
            <div className="visionmiss">
              <div className="visionstylehead">
                {/* <div className="Specialtiesheaddum">
                  <h2>Vision &amp; Mission</h2>
                  <span className="headbordervision" />
                </div> */}
              </div>

              <div className="vissionandmission">
                <div className="vissionandmission1">
                  <div className="vismiscon">
                    <div className="vismisconhead">
                      <Image width={400} height={400} src="/aboutusimg/vissionarrow.png" alt="img" />
                      <span className="vismiheadimg">Our Vision</span>
                    </div>
                    <div className="vismispara">
                      <p>
                      Excellence First and Always
                      </p>

                    </div>
                  </div>
                </div>

                <div className="vissionandmission3 mt-3">
                  <div className="vismiscon">
                    <div className="vismisconhead">
                      <Image width={400} height={400} src="/aboutusimg/missionear.png" alt="img" />
                      <span className="vismiheadimg">Our Mission</span>
                    </div>
                    <div className="vismispara">
                      <p>
                       Compassionate Quality Healthcare
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="parentcontainerwhi bodofdirredbg">
        <div className="customcontainer">
          <div className="BoardofDirectors">
            <div className="Specialtiespartbof">
              <div className="Specialtiesheadbof">
                <h2 className="oursepperbof">Board of Directors</h2>
                <span className="headborderbof" />
              </div>
            </div>
            <div className="bodofdirdata">
              <div className="bodofdirdata1">
                <p className="bodpar">
                  Aditya Birla Health Services Ltd is under the stewardship of a
                  distinguished Board of Directors, led by Chairperson Smt.
                  Rajashree Birla and Director Shri Ashkaran Agarwal.
                </p>
              </div>
              <div className="bodofdirdata2">
                <div className="bodprofilbox">
                  <div className="bodprofiloop">
                    <Image width={400} height={400}
                      className="bodprofileimg"
                      src="/aboutusimg/Smt-Rajashree-Birla.png"
                      alt="img"
                    />
                    <div className="bodname">Smt. Rajashree Birla</div>
                    <div className="boddesignam">Chairperson</div>
                    <Link className="bodnowmorebtn" href="/abmh-management#Smt-Rajashree-Birla">
                      Know more
                    </Link>
                  </div>
                  <div className="bodprofiloop">
                    <Image width={400} height={400}
                      className="bodprofileimg"
                      src="/aboutusimg/Shri-Ashkaran-Agarwal.png"
                      alt="img"
                    />
                    <div className="bodname">Shri Ashkaran Agarwal</div>
                    <div className="boddesignam">Director</div>
                    <Link className="bodnowmorebtn" href="/abmh-management#Shri-Ashkaran-Agarwal">
                      Know more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="BoardofDirectors">
            <div className="Specialtiespartbof">
              <div className="Specialtiesheadbof">
                <h2 className="oursepperbofbalc">Executive Management</h2>
                <span className="headborderbof" />
              </div>
            </div>
            <div className="bodofdirdatanew">
              <div className="bodofdirdat2anew">
                <div className="bodprofilbox">


                  <div className="bodprofiloop">
                    <Image width={400} height={400}
                      className="bodprofileimg"
                      src="/aboutusimg/Mr-Pamesh-Gupta.png"
                      alt="img"
                    />
                    <div className="bodname">Mr. Pamesh Gupta</div>
                    <div className="boddesignam">CEO</div>
                    <Link className="bodnowmorebtn" href="/abmh-management#Mr-Pamesh-Gupta">
                      Know more
                    </Link>
                  </div>
                  <div className="bodprofiloop">
                    <Image width={400} height={400}
                      className="bodprofileimg"
                      src="/aboutusimg/Dr-Rajshekhar-Iyer.png"
                      alt="img"
                    />
                    <div className="bodname">Dr. Rajshekhar Iyer</div>
                    <div className="boddesignam">Medical Advisor</div>
                    <Link className="bodnowmorebtn" href="/abmh-management#Dr-Rajshekhar-Iyer">
                      Know more
                    </Link>
                  </div>
                  <div className="bodprofiloop">
                    <Image width={400} height={400}
                      className="bodprofileimg"
                      src="/aboutusimg/Dr-Ashutosh-Srivastava.png"
                      alt="img"
                    />
                    <div className="bodname">Dr. Ashutosh Srivastava</div>
                    <div className="boddesignam">Medical Director</div>
                    <Link className="bodnowmorebtn" href="/abmh-management#Dr-Ashutosh-Srivastava">
                      Know more
                    </Link>
                  </div>
                  <div className="bodprofiloop">
                    <Image width={400} height={400}
                      className="bodprofileimg"
                      src="/aboutusimg/Dr-Nitin-Mahantshetty.png"
                      alt="img"
                    />
                    <div className="bodname">Dr. Nitin Mahantshetty</div>
                    <div className="boddesignam">Dy. Medical Director</div>
                    <Link className="bodnowmorebtn" href="/abmh-management#Dr-Nitin-Mahantshetty">
                      Know more
                    </Link>
                  </div>
                  <div className="bodprofiloop">
                    <Image width={400} height={400}
                      className="bodprofileimg"
                      src="/aboutusimg/Mr-Pankaj-Kumar-Jain.png"
                      alt="img"
                    />
                    <div className="bodname">Mr. Pankaj Kumar Jain</div>
                    <div className="boddesignam">Chief Financial Officer</div>
                    <Link className="bodnowmorebtn" href="/abmh-management#Mr-Pankaj-Kumar-Jain">
                      Know more
                    </Link>
                  </div>
                  <div className="bodprofiloop">
                    <Image width={400} height={400}
                      className="bodprofileimg"
                      src="/aboutusimg/Mr-Vijay-Gole.png"
                      alt="img"
                    />
                    <div className="bodname">Mr. Vijay Gole</div>
                    <div className="boddesignam">Head - HR & General Administration</div>
                    <Link className="bodnowmorebtn" href="/abmh-management#Mr-Vijay-Gole">
                      Know more
                    </Link>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>




  );


};



export default Aboutus;



"use client";

import { useState, useEffect } from 'react';
import $ from 'jquery';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';


import '../styles/commonglobalstyle.css'
import '../styles/footer.css'



const Footer = () => {



  return (


    <>

      <footer>

        {/* footer start*/}
        <div className="parentcontainerwhi footer deckstophead">
          <div className="customcontainer">
            {/* mainstart */}
            <div className="footermain">
              <div className="footermaincol1">
                <div className="footerlogo">
                  <Image width={1000} height={400} src="/homeimg/footmainlogo.png" alt="img" />
                </div>
                <div className="footerlogopara">
                  <p>
                    ADITYA BIRLA MEMORIAL HOSPITAL, ADITYA BIRLA MARG, CHINCHWAD, PUNE
                    - 411033, MAHARASHTRA , INDIA.
                  </p>
                </div>

                <div className="linkbox">
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Image width={400} height={400} className="fooimg" src="/homeimg/fooiconmob.png" alt="img" />
                      <Link href="/">+91 9881123006 </Link>
                    </div>
                    <div className="linkfoolist fomail">
                      <Image width={400} height={400} className="fooimg" src="/homeimg/fooiconmail.png" alt="img" />
                      <Link href="mailto:corporate.desk@adityabirla.com">corporate.desk@adityabirla.com</Link>
                    </div>
                  </div>
                </div>
                <div className="footergetdirect">
                  <Link href="https://maps.app.goo.gl/Ni7DcGdRRGAReJw7A">
                    <Image width={400} height={400} src="/homeimg/getdireimg.png" alt="img" />
                  </Link>
                </div>
                <div className="footersocial">
                  <div className="footersocialbox">
                    <div className="footersocialboximg">
                      <Link href="https://www.instagram.com/aditya_birla_memorial_hospital/?igshid=12cbmsde7tye3">
                        <Image width={400} height={400} src="/homeimg/footersoiconint.png" alt="img" />
                      </Link>
                    </div>
                    <div className="footersocialboximg">
                      <Link href="https://www.facebook.com/ABMHPune">
                        <Image width={400} height={400} src="/homeimg/footersoiconface.png" alt="img" />
                      </Link>
                    </div>
                    <div className="footersocialboximg">
                      <Link href="https://www.linkedin.com/company/aditya-birla-memorial-hospital/">
                        <Image width={400} height={400} src="/homeimg/footersoiconlinked.png" alt="img" />
                      </Link>
                    </div>
                    <div className="footersocialboximg">
                      <Link href="https://twitter.com/abmhpune_">
                        <Image width={400} height={400} src="/homeimg/footersoicontwit.png" alt="img" />
                      </Link>
                    </div>
                    <div className="footersocialboximg">
                      <Link href="https://www.youtube.com/channel/UCXVvGvIc-xT6B7q1KwOFQUw">
                        <Image width={400} height={400} src="/homeimg/footersoiconyout.png" alt="img" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footermaincol2">

                <div className="linkbox">
                  <h2>QUICK LINKS</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Link href="/doctors">Find a Doctor</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="https://portal.abmhslp.com/AbmhPortal/#/login">Book An Appointment</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/leave-a-feedback-form">Leave A feedback</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/work-with-us">Career</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/insurance-and-tpa">Insurance & TPA</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/abmh-international">International Patient</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/about-csr">CSR Initiate</Link>
                    </div>
                    {/* <div className="linkfoolist exmarginlink">
                      <Link href="/serchher">Site Map </Link>
                    </div> */}
                  </div>
                </div>


              </div>
              <div className="footermaincol3">

                <div className="linkbox">
                  <h2>CENTER OF EXCELLENCE</h2>
                  <div className="linkfootdiv">

                    {/* <div className="linkfoolist">
                      <Link href="/specialties#">Cancer Center</Link>
                    </div> */}

                    <div className="linkfoolist">
                      <Link href="/specialties/cardiac-sciences">Cardiac Sciences</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/specialties/neuroscience">Neuro Sciences</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/specialties-sub/oncology">Oncology</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/specialties/pediatrics">Mother & Child</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/specialties/robotic-assisted-surgery">Robotic Assisted Surgery</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/specialties/gastroscience">Gastro Sciences</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/specialties-sub/nephrology">Nephro Sciences</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/specialties/accident-and-emergency">Emergency & Critical Care</Link>
                    </div>

                  </div>
                </div>

              </div>
            </div>
            {/* mainclose */}
          </div>
        </div>

        <div ></div>


        <div className="parentcontainerwhi footer footerbelow deckstophead">
          <div className="customcontainer">
            {/* mainstart */}
            <div className="footermain footermainbelw">
              <div className="footermainbelw1">
                <div className="linkbox ">
                  <h2>Emergency No</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Link href="tel:+919881123033">+91 9881123033</Link>
                    </div>
                  </div>
                </div>
                <div className="linkbox ">
                  <h2>Emergency No</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Link href="tel:02040707777">020 30717777</Link> <Link href="tel:02040707777">/020 40707777</Link>
                    </div>
                  </div>
                </div>
                <div className="linkbox ">
                  <h2>Appointment No</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Link href="tel: +919881123006">+91 9881123006</Link>
                    </div>
                  </div>
                </div>

              </div>
              <div className="footermainbelw2">

                <div className="awardandimgbox">

                  <div className="awardandimg ms-4">
                    <Image width={200} height={200} src="/homeimg/ACHSfooter.png" alt="img" />
                  </div>
                  <div className="awardandimg ms-2">
                    <Image width={200} height={200} src="/homeimg/HACCPfooter.png" alt="img" />
                  </div>

                </div>

              </div>

              <div className="footermainbelw3">



              </div>

            </div>
            {/* mainclose */}
          </div>
        </div>
        <div className="parentcontainerwhi copyright deckstophead">
          <div className="customcontainer">
            {/* mainstart */}
            <div className="copyrightmain">
              <div className="copyrightmaincol1">
                <h3>
                  COPYRIGHT © 2023 | ADITYA BIRLA HEALTH SERVICES LTD. | ALL RIGHTS
                  RESERVED | DESIGNED &amp; POWERED BY <a className='poweredbyhref' href="https://www.mindframeindia.com/" target="_blank">MIND FRAME INDIA</a>
                </h3>
              </div>
              <div className="copyrightmaincol2">
                {/* <p>Legal Disclaimer</p> */}
              </div>
            </div>
            {/* mainclose */}
          </div>
        </div>
        {/* footer end*/}
        {/* footer mobile start*/}
        <div className="parentcontainerwhi footer mobilehead">
          <div className="customcontainer">
            {/* mainstart */}

            <div className="footermain">
              <div className="footermaincol1">
                <div className="footerlogo">
                  <Image width={400} height={400} src="/homeimg/footmainlogo.png" alt="img" />
                </div>
                <div className="footerlogopara">
                  <p>
                    ADITYA BIRLA MEMORIAL HOSPITAL, ADITYA BIRLA MARG, CHINCHWAD, PUNE
                    - 411033, MAHARASHTRA , INDIA.
                  </p>
                </div>
                <div className="footergetdirect">
                  <Link href="#">
                    <Image width={400} height={400} src="/homeimg/getdireimg.png" alt="img" />
                  </Link>
                </div>
                <div className="footersocial">
                  <div className="footersocialbox">
                    <div className="footersocialboximg">
                      <Link href="https://www.instagram.com/aditya_birla_memorial_hospital/?igshid=12cbmsde7tye3">
                        <Image width={400} height={400} src="/homeimg/footersoiconint.png" alt="img" />
                      </Link>
                    </div>
                    <div className="footersocialboximg">
                      <Link href="https://www.facebook.com/ABMHPune">
                        <Image width={400} height={400} src="/homeimg/footersoiconface.png" alt="img" />
                      </Link>
                    </div>
                    <div className="footersocialboximg">
                      <Link href="https://www.linkedin.com/company/aditya-birla-memorial-hospital/">
                        <Image width={400} height={400} src="/homeimg/footersoiconlinked.png" alt="img" />
                      </Link>
                    </div>
                    <div className="footersocialboximg">
                      <Link href="https://twitter.com/abmhpune_">
                        <Image width={400} height={400} src="/homeimg/footersoicontwit.png" alt="img" />
                      </Link>
                    </div>
                    <div className="footersocialboximg">
                      <Link href="https://www.youtube.com/channel/UCXVvGvIc-xT6B7q1KwOFQUw">
                        <Image width={400} height={400} src="/homeimg/footersoiconyout.png" alt="img" />
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
              <div className="footermaincol2">{/* only for space */}</div>
              <div className="footermaincol3">
                <div className="linkbox">
                  <h2>QUICK LINKS</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Link href="/doctors">Find a Doctor</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="https://portal.abmhslp.com/AbmhPortal/#/login">Book An Appointment</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/leave-a-feedback-form">Leave A feedback</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/work-with-us">Career</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/insurance-and-tpa">Insurance & TPA</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/abmh-international">International Patient</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/about-csr">CSR Initiate</Link>
                    </div>
                    {/* <div className="linkfoolist exmarginlink">
                      <Link href="/serchher">Site Map </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="footermain flexawarand">


              <div className="mobilesub">
                <div className="linkbox">
                  <h2>CONTACT US</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Image width={400} height={400} className="fooimg" src="/homeimg/fooiconmob.png" alt="img" />
                      <Link href="/">+91 98811 23006</Link>
                    </div>
                    <div className="linkfoolist">
                      <Image width={400} height={400} className="fooimg" src="/homeimg/fooiconmail.png" alt="img" />
                      <Link href="mailto:corporate.desk@adityabirla.com">corporate.desk@adityabirla.com</Link>
                    </div>
                  </div>
                </div>
                {/* <div className="linkbox">
                  <h2>MEDIA ROOM</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Link href="/serchher">ABMH in News </Link>
                    </div>
                  </div>
                </div> */}
              </div>

              <div className="awardandimgbox">

                <div className="awardandimg">
                  <Image width={200} height={200} src="/homeimg/ACHSfooter.png" alt="img" />
                </div>
                <div className="awardandimg ms-2">
                  <Image width={200} height={200} src="/homeimg/HACCPfooter.png" alt="img" />
                </div>

              </div>


            </div>


            {/* mainclose */}
          </div>
        </div>
        <div className="parentcontainerwhi footer footerbelow mobilehead">
          <div className="customcontainer">
            {/* mainstart */}
            <div className="footermain footermainbelw">
              <div className="footermainbelw1">
                <div className="linkbox ">
                  <h2>Emergency No</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Link href="tel: +9120307175003">+91 9881123033</Link>
                    </div>
                  </div>
                </div>
                <div className="linkbox">
                  <h2>Emergency No</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Link href="tel:02040707777">020 30717777</Link>
                    </div>
                  </div>
                </div>
                <div className="linkbox ">
                  <h2>Appointment No</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Link href="tel: +919881123006">+91 9881123006</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* mainclose */}
          </div>
        </div>
        <div className="parentcontainerwhi copyright mobilehead">
          <div className="customcontainer">
            {/* mainstart */}
            <div className="copyrightmain">
              <div className="copyrightmaincol1">
                <h3>
                  COPYRIGHT © 2023 | ADITYA BIRLA HEALTH SERVICES LTD. | ALL RIGHTS
                  RESERVED | DESIGNED &amp; POWERED BY <a className='poweredbyhref' href="https://www.mindframeindia.com/" target="_blank">MIND FRAME INDIA</a>
                </h3>
              </div>
              <div className="copyrightmaincol2">
                {/* <p>Legal Disclaimer</p> */}
              </div>
            </div>
            {/* mainclose */}
          </div>
        </div>
        {/* footer mobile end*/}

      </footer>


    </>



  );
};

export default Footer;
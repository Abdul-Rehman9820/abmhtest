

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
                      <Link href="/">doctorshealthcare@adityabirla.com</Link>
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
                      <Link href="https://twitter.com/abmh_pune">
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
                      <Link href="https://portal.abmhslp.com/rhis/patient/login.jsf">Book An Appointment</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/contact-us">Leave A feedback</Link>
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
                      <Link href="/about-csr">ABMH CSR Initiate</Link>
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
                    <div className="linkfoolist">
                      <Link href="/specialties#Cardiac-Science">Cardiac Science</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/specialties#Neuroscience">Neuroscience</Link>
                    </div>
                    {/* <div className="linkfoolist">
                      <Link href="/specialties#">Cancer Center</Link>
                    </div> */}
                    <div className="linkfoolist">
                      <Link href="/specialties#Robotic-Surgery">Robotic Surgery</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/specialties#Mother-and-Child">Mother & Child</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/specialties#Organ-Transplant-Center">Organ Transplant Center</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/specialties#Orthopedic-Joint-Replacement">Orthopedic & Joint Replacement</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/specialties/gastroenterology">Gastroenterology & Hepatology</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/specialties/accident-and-emergency">Accident & Emergency Care</Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* mainclose */}
          </div>
        </div>
        <div className="parentcontainerwhi footer footerbelow deckstophead">
          <div className="customcontainer">
            {/* mainstart */}
            <div className="footermain footermainbelw">
              <div className="footermainbelw1">
                <div className="linkbox ">
                  <h2>Emergency Service</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Link href="/">+91-20-3071 7500-3</Link>
                    </div>
                  </div>
                </div>
                <div className="linkbox ">
                  <h2>Ambulance Service</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Link href="/">+91-20-40707777/30717777</Link>
                    </div>
                  </div>
                </div>
                <div className="linkbox ">
                  <h2>ABMH Assist</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Link href="/">+91 98811 23006</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footermainbelw2">{/* just for space */}</div>
              <div className="footermainbelw3">
                <div className="linkbox">
                  <div className="linkfootdiv">
                    {/* <div class="linkfoolist"><Link href="/serchher">Site Map </Link> </div> */}
                  </div>
                </div>
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
                      <Link href="https://twitter.com/abmh_pune">
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
                      <Link href="https://portal.abmhslp.com/rhis/patient/login.jsf">Book An Appointment</Link>
                    </div>
                    <div className="linkfoolist">
                      <Link href="/contact-us">Leave A feedback</Link>
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
                      <Link href="/about-csr">ABMH CSR Initiate</Link>
                    </div>
                    {/* <div className="linkfoolist exmarginlink">
                      <Link href="/serchher">Site Map </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="footermain">


              <div className="mobilesub">
                <div className="linkbox">
                  <h2>CONTACT US</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Image width={400} height={400} className="fooimg" src="/homeimg/fooiconmob.png" alt="img" />
                      <Link href="/">+91 98811 23006</Link>
                    </div>
                    <div className="linkfoolist">
                      <Image width={400} height={400}className="fooimg" src="/homeimg/fooiconmail.png" alt="img" />
                       <Link href="/">doctorshealthcare@adityabirla.com</Link>
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
                  <h2>Emergency Service</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Link href="">+91-20-3071 7500-3</Link>
                    </div>
                  </div>
                </div>
                <div className="linkbox ">
                  <h2>Ambulance Service</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Link href="">+91-20-40707777/30717777</Link>
                    </div>
                  </div>
                </div>
                <div className="linkbox ">
                  <h2>ABMH Assist</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Link href="">+91 98811 23006</Link>
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
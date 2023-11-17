

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
                <Image width={1000} height={400} src="/homeimg/footmainlogo.png" alt="" />
              </div>
              <div className="footerlogopara">
                <p>
                  ADITYA BIRLA MEMORIAL HOSPITAL, ADITYA BIRLA MARG, CHINCHWAD, PUNE
                  - 411033, MAHARASHTRA , INDIA.
                </p>
              </div>
              <div className="footergetdirect">
                <Link href="https://maps.app.goo.gl/Ni7DcGdRRGAReJw7A">
                  <Image width={400} height={400} src="/homeimg/getdireimg.png" alt="" />
                </Link>
              </div>
              <div className="footersocial">
                <div className="footersocialbox">
                  <div className="footersocialboximg">
                    <Link href="https://www.instagram.com/aditya_birla_memorial_hospital/?igshid=12cbmsde7tye3">
                      <Image width={400} height={400} src="/homeimg/footersoiconint.png" alt="" />
                    </Link>
                  </div>
                  <div className="footersocialboximg">
                    <Link href="https://www.facebook.com/ABMHPune">
                      <Image width={400} height={400} src="/homeimg/footersoiconface.png" alt="" />
                    </Link>
                  </div>
                  <div className="footersocialboximg">
                    <Link href="https://www.youtube.com/channel/UCXVvGvIc-xT6B7q1KwOFQUw">
                      <Image width={400} height={400} src="/homeimg/footersoiconyout.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footermaincol2">
              <div className="linkbox">
                <h2>CONTACT US</h2>
                <div className="linkfootdiv">
                  <div className="linkfoolist">
                    <Image width={400} height={400} className="fooimg" src="/homeimg/fooiconmob.png" alt="" />
                    <Link href="/serchher">+91 9881123006 </Link>
                  </div>
                  <div className="linkfoolist fomail">
                    <Image width={400} height={400} className="fooimg" src="/homeimg/fooiconmail.png" alt="" />
                    <Link href="/serchher">doctorshealthcare@adityabirla.com</Link>
                  </div>
                </div>
              </div>
              <div className="linkbox exmargin">
                <h2>MEDIA ROOM</h2>
                <div className="linkfootdiv">
                  <div className="linkfoolist">
                    <Link href="/serchher">ABMH in News </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footermaincol3">
              <div className="linkbox">
                <h2>QUICK LINKS</h2>
                <div className="linkfootdiv">
                  <div className="linkfoolist">
                    <Link href="/serchher">Specialities </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Doctors </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Feedback </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Life @ ABMH </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Work With Us </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Corporate Inquiries </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Privacy Policy </Link>
                  </div>
                  <div className="linkfoolist exmarginlink">
                    <Link href="/serchher">Site Map </Link>
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
                    <Link href="/serchher">+91 9881165006 </Link>
                  </div>
                </div>
              </div>
              <div className="linkbox ">
                <h2>Ambulance Service</h2>
                <div className="linkfootdiv">
                  <div className="linkfoolist">
                    <Link href="/serchher">+91 9881165006 </Link>
                  </div>
                </div>
              </div>
              <div className="linkbox ">
                <h2>ABMH Assist</h2>
                <div className="linkfootdiv">
                  <div className="linkfoolist">
                    <Link href="/serchher">+91 9881165006 </Link>
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
                COPYRIGHT © 2021 | ADITYA BIRLA HEALTH SERVICES LTD. | ALL RIGHTS
                RESERVED | DESIGNED &amp; POWERED BY MIND FRAME INDIA
              </h3>
            </div>
            <div className="copyrightmaincol2">
              <p>Legal Disclaimer</p>
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
                <Image width={400} height={400} src="/homeimg/footmainlogo.png" alt="" />
              </div>
              <div className="footerlogopara">
                <p>
                  ADITYA BIRLA MEMORIAL HOSPITAL, ADITYA BIRLA MARG, CHINCHWAD, PUNE
                  - 411033, MAHARASHTRA , INDIA.
                </p>
              </div>
              <div className="footergetdirect">
                <Link href="#">
                  <Image width={400} height={400} src="/homeimg/getdireimg.png" alt="" />
                </Link>
              </div>
              <div className="footersocial">
                <div className="footersocialbox">
                  <div className="footersocialboximg">
                    <Link href="/serchher">
                      <Image width={400} height={400} src="/homeimg/footersoiconint.png" alt="" />
                    </Link>
                  </div>
                  <div className="footersocialboximg">
                    <Link href="/serchher">
                      <Image width={400} height={400} src="/homeimg/footersoiconface.png" alt="" />
                    </Link>
                  </div>
                  <div className="footersocialboximg">
                    <Link href="/serchher">
                      <Image width={400} height={400} src="/homeimg/footersoiconyout.png" alt="" />
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
                    <Link href="/serchher">Specialities </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Doctors </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Feedback </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Life @ ABMH </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Work With Us </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Corporate Inquiries </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Privacy Policy </Link>
                  </div>
                  <div className="linkfoolist">
                    <Link href="/serchher">Site Map </Link>
                  </div>
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
                      <Image width={400} height={400} className="fooimg" src="/homeimg/fooiconmob.png" alt="" />
                      <Link href="/serchher">+91 9881123006 </Link>
                    </div>
                    <div className="linkfoolist">
                      <Image width={400} height={400}
                        className="fooimg"
                        src="/homeimg/fooiconmail.png"
                        alt=""
                      />
                      <Link href="/serchher">doctorshealthcare@adityabirla.com</Link>
                    </div>
                  </div>
                </div>
                <div className="linkbox">
                  <h2>MEDIA ROOM</h2>
                  <div className="linkfootdiv">
                    <div className="linkfoolist">
                      <Link href="/serchher">ABMH in News </Link>
                    </div>
                  </div>
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
                <h2>Emergency Service</h2>
                <div className="linkfootdiv">
                  <div className="linkfoolist">
                    <Link href="/serchher">+91 9881165006 </Link>
                  </div>
                </div>
              </div>
              <div className="linkbox ">
                <h2>Ambulance Service</h2>
                <div className="linkfootdiv">
                  <div className="linkfoolist">
                    <Link href="/serchher">+91 9881165006 </Link>
                  </div>
                </div>
              </div>
              <div className="linkbox ">
                <h2>ABMH Assist</h2>
                <div className="linkfootdiv">
                  <div className="linkfoolist">
                    <Link href="/serchher">+91 9881165006 </Link>
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
                COPYRIGHT © 2021 | ADITYA BIRLA HEALTH SERVICES LTD. | ALL RIGHTS
                RESERVED | DESIGNED &amp; POWERED BY MIND FRAME INDIA
              </h3>
            </div>
            <div className="copyrightmaincol2">
              <p>Legal Disclaimer</p>
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
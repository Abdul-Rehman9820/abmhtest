

"use client";

import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './abmh-management.css'


const Abmanagement = () => {


  return (


    <>
    <title>ABMH Management</title>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  About Us /
                  <span className="breadcrumbsactive">ABMH Management</span>
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
      {/* CSR start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="Csrpolmain2">
            <div className="CSRpolyhead">
              <div className="CSRpolyheadbof">
                <h2 className="CSRpolyheadbalc">Board of Directors</h2>
                <span className="CSRpolyheadborder" />
              </div>
            </div>
            <div className="cstbloglayot">
              <div className="cstbloglayot1">
                <Image width={400} height={400} src="/bodimg/Smt-Rajashree-Birla.png" id="Smt-Rajashree-Birla" alt="img" />
              </div>
              <div className="cstbloglayot2">
                <div className="cstbloglayothead">Smt. Rajashree Birla</div>
                <div className="cstbloglayothead2">Chairperson</div>
                <div className="cstbloglayotpara">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </div>
                <div className="cstbloglayotpara">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </div>
              </div>
            </div>
            <div className="cstbloglayot revercelayout">
              <div className="cstbloglayot1">
                <Image width={400} height={400} src="/bodimg/Shri-Ashkaran-Agarwal.png" id="Shri-Ashkaran-Agarwal" alt="img" />
              </div>
              <div className="cstbloglayot2">
                <div className="cstbloglayothead">Shri Ashkaran Agarwal</div>
                <div className="cstbloglayothead2">Director</div>
                <div className="cstbloglayotpara">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </div>
                <div className="cstbloglayotpara">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </div>
              </div>
            </div>
            <div className="CSRpolyhead">
              <div className="CSRpolyheadbof">
                <h2 className="CSRpolyheadbalc">Executive Management</h2>
                <span className="CSRpolyheadborder" />
              </div>
            </div>
            <div className="cstbloglayot">
              <div className="cstbloglayot1">
                <Image width={400} height={400} src="/bodimg/Rekha.png" id="chief-executive-rekha-dubey" alt="img" />
              </div>
              <div className="cstbloglayot2">
                <div className="cstbloglayothead">Rekha Dubey</div>
                <div className="cstbloglayothead2">Chief Executive Officer</div>
                <div className="cstbloglayotpara">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </div>
                <div className="cstbloglayotpara">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </div>
              </div>
            </div>
            <div className="cstbloglayot revercelayout">
              <div className="cstbloglayot1">
                <Image width={400} height={400} src="/bodimg/Dr-Rajshekhar-Iyer.png" id="Dr-Rajshekhar-Iyer" alt="img" />
              </div>
              <div className="cstbloglayot2">
                <div className="cstbloglayothead">Dr. Rajshekhar Iyer</div>
                <div className="cstbloglayothead2">Medical Advisor</div>
                <div className="cstbloglayotpara">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </div>
                <div className="cstbloglayotpara">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </div>
              </div>
            </div>
            <div className="cstbloglayot">
              <div className="cstbloglayot1">
                <Image width={400} height={400} src="/bodimg/Dr-Ashutosh-Srivastava.png" id="Dr-Ashutosh-Srivastava" alt="img" />
              </div>
              <div className="cstbloglayot2">
                <div className="cstbloglayothead">Dr. Ashutosh Srivastava</div>
                <div className="cstbloglayothead2">Medical Director</div>
                <div className="cstbloglayotpara">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </div>
                <div className="cstbloglayotpara">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </div>
                <div className="cstbloglayotpara">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CSR end*/}
    </>



  );


};



export default Abmanagement;

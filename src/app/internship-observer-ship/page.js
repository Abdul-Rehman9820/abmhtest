

"use client";

import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './internship-observer-ship.css'


const Interobserv = () => {


  useEffect(() => {

    
    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll

  }, []);



  return (


    <>
    <title>Internship & Observer-ship Opportunities | Learn at Aditya Birla Hospital</title>
    <meta name="description" content="Explore enriching internship and observer-ship programs at Aditya Birla Hospital. Gain hands-on experience and learn from industry experts in a premier healthcare environment." />
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Academics /
                  <span className="breadcrumbsactive">
                    Internship &amp; Observership
                  </span>
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
             <Image width={2000} height={400} src="/commonimages/commbanInternship.png" alt="icon" />
      </div>
    </div>

      {/* common heading banner end */}
      {/* inter / obser pg start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="intershimain">
            <div className="inttpa_sec">
              <div className="inttpa_sec_para">
                <div className="interspar">
                  <b>Internship / Observership timings:</b> 9:00 am to 5:30 pm
                </div>
                <div className="interspar">
                  <b>Weekly off-</b> Sundays
                </div>
                <div className="interspar">
                  <b>Benefit-</b> Certificate of Internship / Observership from ABMH
                </div>
                <div className="interspar">
                  <b>Email:</b> manager.academics@adityabirlahospital.com
                </div>
                <div className="interspar">
                  <b>Contact:</b> 02030717816 &amp; 9011081036
                </div>
              </div>
            </div>
            <div className="intertime">
              <h2>Minimum or Maximum duration-</h2>
            </div>
            <table className="table table-hover table-bordered intertable">
              <thead>
                <tr>
                  <th scope="col">INTERNSHIP</th>
                  <th scope="col">OBSERVERSHIP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>From 01 Month to 12 Months</td>
                  <td>From 01 Week to 12 Months</td>
                </tr>
                <tr>
                  <td>INR 5000/- Per Month</td>
                  <td>INR 5000/- Per Month</td>
                </tr>
                <tr>
                  <td>INR 6500/- Per Month for NRI/Foreign Candidate</td>
                  <td>INR 6500/- Per Month for NRI/Foreign Candidate</td>
                </tr>
                <tr>
                  <td>
                    INR 10000/- Per Month for MBBS/MD/Super-Specially/Fellowship
                    Candidates
                  </td>
                  <td>
                    INR 10000/- Per Month for MBBS/MD/Super-Specially/Fellowship
                    Candidates
                  </td>
                </tr>
                <tr>
                  <td>
                    INR 13000/- Per Month for MBBS/MD/Super-Specially/Fellowship -
                    NRI/Foreign Candidate
                  </td>
                  <td>
                    INR 13000/- Per Month for MBBS/MD/Super-Specially/Fellowship -
                    NRI/Foreign Candidate
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* inter / obser pg end*/}
    </>



  );


};



export default Interobserv;

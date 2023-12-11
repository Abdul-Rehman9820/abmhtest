

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
      <title>Patient Services</title>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  ABMH International / <span className="breadcrumbsactive">Patient Services</span>
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
          <Image width={2000} height={400} src="/commonimages/commabminternatnew.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}
      {/* inter / obser pg start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="intershimain">

            <div className="intertime mt-4">
              <h2>
                Patient Services : Services @ ABMH International</h2>
            </div>
            <table className="table table-hover table-bordered intertable bgseryellow">
              <thead>

              </thead>

              <tbody>

                <tr>
                  <td>Assistance with Treatment Opinion</td>
                </tr>
                <tr>
                  <td>Remote Consultations</td>
                </tr>
                <tr>
                  <td>Scheduling Appointments</td>
                </tr>
                <tr>
                  <td>Cost Estimates</td>
                </tr>
                <tr>
                  <td>Assistance with Accommodation</td>
                </tr>
                <tr>
                  <td>Daily Treatment Updates</td>
                </tr>
                <tr>
                  <td>Language Interpretation Services</td>
                </tr>
                <tr>
                  <td>Local Sight-Seeing Tours</td>
                </tr>
                <tr>
                  <td>Special Care for Disabled</td>
                </tr>
                <tr>
                  <td>Post-Operative Rehabilitation</td>
                </tr>
                <tr>
                  <td>Multi-Lingual Library Movies</td>
                </tr>
                <tr>
                  <td>Assistance with Treatment Opinion</td>
                </tr>
                <tr>
                  <td>Dedicated Concierge Service</td>
                </tr>
                <tr>
                  <td>Airport Pick Up</td>
                </tr>
                <tr>
                  <td>Multiple Payment Options</td>
                </tr>
                <tr>
                  <td>End-to-End Services</td>
                </tr>
                <tr>
                  <td>Legal Registration Procedures</td>
                </tr>
                <tr>
                  <td>Assistance with Shopping</td>
                </tr>
                <tr>
                  <td>Foreign Currency Exchange</td>
                </tr>
                <tr>
                  <td>Home Delivery of Medicines</td>
                </tr>
                <tr>
                  <td>Internet Services</td>
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

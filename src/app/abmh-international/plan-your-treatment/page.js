

"use client";

import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './work-with-us.css'


const Workwithus = () => {


  useEffect(() => {


    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll

  }, []);


  return (


    <>

      <title>Plan Your Treatment</title>

      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">ABMH International / <span className="breadcrumbsactive">Plan Your Treatment</span></div>
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
      {/* specialties  start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">


          {/* comment if no opening*/}
          {/* <div class="workwithuscont">


        <h4>There are no current opening</h4>

        </div> */}


          {/* comment if no opening*/}
          <div className="workwithuscont withgenralserve">


            <div className="accordion" id="accordionExample">

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Step 1: Send us a patient query
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      You can begin the process of travelling abroad for medical treatment by emailing us your queries at info@abmhinternational.com or alternatively use the online enquiry form.

                      Wherever possible, please mention complete details of your recent reports. A note from your treating doctor would be very helpful.

                      We shall respond to you within one working day with the appropriate specialist doctor’s opinion including treatment plan, cost estimates, and length of stay in hospital and in India.

                      We will also set up phone or teleconference call with the patient, if needed to discuss further on any concerns of questions that you may have.
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
                    aria-controls="collapse2"
                  >
                    Step 2: Medical Visa formalities
                  </button>
                </h2>
                <div
                  id="collapse2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">

                      Once you have confirmed to proceed with the treatment at our hospital, kindly email us the passport scanned copy of the patient and all accompanying passengers.

                      We shall email a scanned copy of the Medical Visa invitation letter directly to the Indian Embassy/High Commission in your respective country, requesting priority medical visa for patient and medical attendants.<br></br>

                      You also need to take a print copy of this Invitation Letter to be submitted to the Indian Embassy/High Commission in your country at the time of Visa Processing.
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
                    aria-expanded="true"
                    aria-controls="collapse2"
                  >
                    Step 3: Documentation and Finances
                  </button>
                </h2>
                <div
                  id="collapse4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      Upon receiving the Medical Visa, you need to start preparing for your Medical Travel.<br></br>

                      - Make sure you carry all the necessary travel documents including identification proofs as required for International Travel<br></br>
                      - Make sure you carry all the necessary medical diagnostic reports and doctor’s notes<br></br>
                      - The patient can make payments towards their treatment in cash, by bank transfer, using international credit cards or via international accredited insurance companies.<br></br>
                      For further details, kindly mail us the modality of payment being considered along with the queries regarding the same.
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
                    aria-expanded="true"
                    aria-controls="collapse2"
                  >
                    Step 4: Travel and Airport Pick-up
                  </button>
                </h2>
                <div
                  id="collapse5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      Upon getting your travel plans finalized, you need to inform us about your flight details including,
                      <ul>
                        <li>Airline Name: [Insert Airline Name]</li>
                        <li>Airline Number: [Insert Airline Number]</li>
                        <li>Date and Time of Arrival at Mumbai Chhatrapati Shivaji International Airport: [Insert Date and Time]</li>
                        <li>Total Number of Passengers: [Insert Total Number]</li>
                        <li>If patient requires Cardiac/Non-cardiac ambulance for transfer to the Hospital: [Insert Response]</li>
                      </ul>
                      We provide free pick-up and drop-off facility from Mumbai International Airport to our hospital. Post receipt of the flight / travel details from the patient, a confirmation will be provided to you, with details of the Patient Relationship Executive assigned to receive the patient at the airport.
                      In case of any concerns post arrival, the patient can contact our executive for assistance
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
                    aria-expanded="true"
                    aria-controls="collapse2"
                  >
                    Step 5: Assistance during the stay at the Hospital
                  </button>
                </h2>
                <div
                  id="collapse3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      Every patient will be assigned with a Patient Relationship Executive who will assist you during your stay at our Hospital with:

                      <ul>
                        <li>Pre-Admission Accommodation</li>
                        <li>Scheduling of Doctor Consultations / Executive Health Check-ups</li>
                        <li>Registration Admission</li>
                        <li>Legal Registrations and Formalities</li>
                        <li>Treatment Updates</li>
                        <li>Local Sight-Seeing</li>
                        <li>Concierge Services (foreign currency exchange, local cellular SIM cards, purchase of groceries, and other daily use sundries)</li>
                        <li>Accompanying the Patient back to Mumbai International Airport at the Time of Their Departure</li>
                      </ul>

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



export default Workwithus;

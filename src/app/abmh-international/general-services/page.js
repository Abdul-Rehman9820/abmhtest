

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

      <title>Careers - Work With Us</title>

      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">ABMH International / <span className="breadcrumbsactive">General Services</span></div>
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
                    aria-expanded="ture"
                    aria-controls="collapseOne"
                  >
                    Assistance with Treatment Details
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapsed show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      Prior to finalizing your travel, we will provide you with the opinion of our consultants based on the clinical details and reports as shared by you via email / fax / courier.
                    </div>
                  </div>
                </div>
              </div>

              

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    Remote Consultations via Tele / Video Conference
                  </button>
                </h2>
                <div
                  id="collapse2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      A remote consultation can be organized with our consultants to discuss at length the nature of treatment required, the complexities involved, the duration of stay needed, possible costs for the entire treatment and various other queries that may need prior discussions
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
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    Assistance with Visa and Travel Documents
                  </button>
                </h2>
                <div
                  id="collapse3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      Our team will provide complete assistance with the necessary visa formalities required to travel to India for the required treatment. Once the treatment is confirmed, we will mail a visa invitation letter to the respective Indian Embassy with a copy to the patient, making mention of the name as on passport, passport number and the modality of suggested treatment with the duration of stay advised
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
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    Airport Transfers
                  </button>
                </h2>
                <div
                  id="collapse4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      Our Patient Relationship Executive will receive the patient at the airport on arrival and organize their travel to our hospital. Post receipt of the flight / travel details from the patient, a confirmation will be provided with details of the executive present to receive the patient at the airport. In case of any concerns post arrival, the patient can contact our executive for assistance.
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
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    Pre-Admission Accommodation
                  </button>
                </h2>
                <div
                  id="collapse5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      We will assist with pre-admission accommodation for the patient and his family, if required. Aditya Birla Memorial Hospital has its well appointed service apartments opposite the hospital to provide its patients with comfortable stay at subsidized costs. The apartments are equipped with a kitchen to allow the patient / relatives prepare their own meals as per the local flavor, thereby enhancing the experience of their stay while providing a homely environment.
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
                    data-bs-target="#collapse6"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    Scheduling of Consultations
                  </button>
                </h2>
                <div
                  id="collapse6"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      Post arrival of the patient, the Patient Relationship Executive will schedule appointments with the concerned specialists for consultations and investigations, based on the patient’s complaints and reports, as received via email prior to the patient’s arrival.
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
                    data-bs-target="#collapse7"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    Registration & Admission
                  </button>
                </h2>
                <div
                  id="collapse7"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      The Patient Relationship Executive will have the patient registered and process the admission of the patient, if advised by the treating consultant. Post completion of all formalities, the patient will be directly wheeled in to his room. All efforts are made to ensure that the patient receives maximum care and is not inconvenienced by any pre-required paper or administrative work.
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
                    data-bs-target="#collapse8"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    Legal Registrations
                  </button>
                </h2>
                <div
                  id="collapse8"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      As per the laws of India, every international patient has to get registered with the local FRRO (Foreigners Regional Registration Office) within 14 days of arrival and apply for a Residence Permit (‘A’ Form). The Patient Relationship Executive will organize and process all documents required for this application. The patient is advised to bring along 10 passport sized photographs, as the same are required for the above procedures.
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
                    data-bs-target="#collapse9"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    Payment Options
                  </button>
                </h2>
                <div
                  id="collapse9"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      The patient can make payments towards his treatment in cash, by bank transfer, using international credit cards or via international accredited insurance companies. For further details, kindly mail us the modality of payment being considered along with the queries regarding the same.
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
                    data-bs-target="#collapse10"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    Language Interpretation Services
                  </button>
                </h2>
                <div
                  id="collapse10"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      Complete assistance with language interpretation is provided to all our patients to ensure that they face no difficulty in communicating their concerns to our doctors. Interpreters for Arabic, Kurdish, French, Amharic and other international languages provide their services at our hospital to international patients.
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
                    data-bs-target="#collapse11"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    Treatment Updates
                  </button>
                </h2>
                <div
                  id="collapse11"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      Our Patient Relationship Executive in-charge of the patient provides daily updates to the patient’s relatives back in their home country via email, phone calls and video-conferencing. The relatives back home are explained in detail the treatment being provided to the patient along with the progress made by the patient post arrival. The patient can chose and nominate the relatives who need to be provided with these updates.
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
                    data-bs-target="#collapse12"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    Local Sight-Seeing
                  </button>
                </h2>
                <div
                  id="collapse12"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      Local sightseeing tours are organized for patients and their relatives, as requested. A tour guide is provided to accompany the patient / relatives for such tours to ensure that they are comfortable and enjoy the local culture and shopping experiences.
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
                    data-bs-target="#collapse13"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    Concierge Services
                  </button>
                </h2>
                <div
                  id="collapse13"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="mytabdata">
                      The patients are provided with a dedicated manager to attend to all their requirements and queries. Assistance is provided for requirements ranging from foreign currency exchange, local cellular SIM cards to purchase of grocery and other daily use sundries.
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

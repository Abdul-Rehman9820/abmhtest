

"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';

import './insurance-and-tpa.css'


const Virtualtour = () => {


  return (

    <>
      <title>Insurance & TPAs</title>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Patient Care /
                  <span className="breadcrumbsactive">Insurance & TPAs</span>
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
          <Image width={2000} height={400} src="/commonimages/insurance-and-TPA-banner.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}

      {/* Hospirtal testimonials  start*/}
      <div className="parentcontainerwhi withtestBG">
        <div className="customcontainer">
          <div className="divinsoandtpa">


            <div className="insurance_list">

              <div className="sectionheading">
                <h2>List of Insurance &amp; TPAs</h2>
                <span className="headborder" />
              </div>
              <div className="tpa_sec">
                <div className="tpa_sec_para">
                  Please verify the name of your Third-Party Administrator (TPA) from the
                  provided list and <b>ensure to print it out.</b> Please be aware that the submission of
                  completed pre-authorization forms, along with the necessary documents, is
                  exclusively accepted at the TPA counter situated on the <b>Ground Floor</b> of the Hospital, operating from <b>Monday to Saturday (10 am to 6 pm).</b>
                </div>
              </div>

              <div className="img-sec">

                <div className="row img_padding">


                  <div className=" card card-3">
                    <Image width={400} height={400} className="img_size" src="/TPA_img/4.png" alt="img" />
                    <span className="img-text">Alankit Health Care Limited</span>
                  </div>
                  <div className=" card card-3">
                    <Image width={400} height={400} className="img_size" src="/TPA_img/1.png" alt="img" />
                    <span className="img-text">
                      Dedicated Health Services TPA India Pvt Ltd
                    </span>
                  </div>
                  <div className=" card card-3">
                    <Image width={400} height={400} className="img_size" src="/TPA_img/3.png" alt="img" />
                    <span className="img-text">
                      Family Health Plan Insurance TPA Limited
                    </span>
                  </div>
                  <div className=" card card-3">
                    <Image width={400} height={400} className="img_size" src="/TPA_img/2.png" alt="img" />
                    <span className="img-text">Genins India TPA Ltd</span>
                  </div>
                  <div className=" card card-3">
                    <Image width={400} height={400} className="img_size" src="/TPA_img/2.png" alt="img" />
                    <span className="img-text">Genins India TPA Ltd</span>
                  </div>


                </div>




              </div>

            </div>


          </div>
        </div>
      </div>
      {/* Hospirtal testimonials   end*/}
      {/* FAQ for wellness  start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="wellnessFAQ">
            <div className="commonheadingCont">
              <div className="commonheadinghead">
                <h2>FAQs : Common Questions</h2>
                <span className="Commheadborder" />
              </div>
            </div>
            <div className="wellfaqCol">


              <div className="wellfaqcontainer">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                        aria-expanded="true"
                      >
                        What is TPA?
                      </button>
                    </h2>
                    <div
                      id="collapse1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="faqdata">
                          <p>
                            The Third Party Administrator is a service through which a policy
                            holder can seek cashless facility from Aditya Birla Memorial
                            Hospital.
                          </p>
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
                      >
                        What are the documents required for the cashless process?
                      </button>
                    </h2>
                    <div
                      id="collapse2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="faqdata">
                          <p>
                            Please get the photocopies of the following documents for your
                            convenience:
                          </p>
                          <ul className="mt-2">
                            <li>TPA E-card or Policy</li>
                            <li>PAN Card</li>
                            <li>Aadhar Card</li>
                            <li>Latest passport size photograph</li>
                            <li>Doctor’s Consultation Paper</li>
                            <li>Relevant Investigation Reports</li>
                            <li>Employee Id (If corporate policy)</li>
                          </ul>
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
                      >
                        What to expect out of the cashless facility?
                      </button>
                    </h2>
                    <div
                      id="collapse3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="faqdata">
                          <ul className="mt-2">
                            <li>
                              In case of a planned admission, a prior approval from your TPA
                              is a must to avail the cashless facility.
                            </li>
                            <li>
                              In case of emergency/unplanned admission, the patient will need
                              to pay the requisite deposit amount and then seek approval from
                              the TPA.
                            </li>
                            <li>
                              Please note the cashless facility is subject to the terms and
                              conditions applicable in the policy.
                            </li>
                            <li>
                              The hospital is not responsible for the refusal/denial/partial
                              approval on the part of the TPA for cashless/reimbursement of
                              claims made by the patient.
                            </li>
                          </ul>
                          <p className="mt-2">
                            Patient hereby would have to clear all the hospital bills (before
                            discharge):
                          </p>
                          <ul className="mt-2">
                            <li>
                              a. In the event that the insurance claim i.e. the cashless
                              facility is fully denied
                            </li>
                            <li>
                              b. If partial payment approval is received from the insurance
                              company
                            </li>
                            <li>c. For the payment of non-medical items</li>
                            <li>
                              d. For the higher package voluntarily opted by the
                              patient/patient relative
                            </li>
                            <li>
                              e. For equipment charges/consumables not covered by the
                              insurance company
                            </li>
                          </ul>
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
                      >
                        What is the procedure for availing TPA service?
                      </button>
                    </h2>
                    <div
                      id="collapse4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="faqdata">
                          <table className="table">
                            <thead className="thead-light">
                              <tr>
                                <th>SR. No.</th>
                                <th>List of Insurance Companies</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Aditya Birla Health Insurance Co. Ltd.</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Bajaj Allianz General Insurance Co. Ltd.</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Bharti Axa General Insurance Co. Ltd.</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Future Generali India Insurance Co. Ltd.</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>HDFC ERGO General Insurance Co. Ltd.</td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>IFFCO Tokio General Insurance Co. Ltd.</td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>Liberty General Insurance Co. Ltd.</td>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>Magma HDI General Insurance Co. Ltd.</td>
                              </tr>
                              <tr>
                                <td>9</td>
                                <td>Max (Niva) Bupa Health Insurance Co. Ltd.</td>
                              </tr>
                              <tr>
                                <td>10</td>
                                <td>Reliance General /Helath Insurance Co. Ltd.</td>
                              </tr>
                              <tr>
                                <td>11</td>
                                <td>
                                  Care Health Insurance Limited (formerly known as Religare
                                  Health Insurance Co. Ltd)
                                </td>
                              </tr>
                              <tr>
                                <td>12</td>
                                <td>Royal Sundaram Alliance Insurance Co. Ltd.</td>
                              </tr>
                              <tr>
                                <td>13</td>
                                <td>Universal Sompo General Insurance Co. Ltd.</td>
                              </tr>
                              <tr>
                                <td>14</td>
                                <td />
                              </tr>
                              <tr>
                                <td>15</td>
                                <td>ICICI Prudential Life Insurance</td>
                              </tr>
                              <tr>
                                <td>16</td>
                                <td>National Insurance Co. Ltd.</td>
                              </tr>
                              <tr>
                                <td>17</td>
                                <td>The New India Assurance Co. Ltd.</td>
                              </tr>
                              <tr>
                                <td>18</td>
                                <td>The Oriental Insurance Co. Ltd.</td>
                              </tr>
                              <tr>
                                <td>19</td>
                                <td>United India Insurance Co. Ltd.</td>
                              </tr>
                              <tr>
                                <td>20</td>
                                <td>Cholamandalam MS General Insurance</td>
                              </tr>
                              <tr>
                                <td>21</td>
                                <td>ICICI LOMBARD GENERAL INSURANCE COMPANY LTD</td>
                              </tr>
                              <tr>
                                <td>22</td>
                                <td>
                                  ManipalCigna Health Insurance Company Limited (Formerly
                                  known as Cigna TTK Health Insurance Co. Ltd)
                                </td>
                              </tr>
                              <tr>
                                <td>23</td>
                                <td>Tata AIG General Insurance Company Limited</td>
                              </tr>
                              <tr>
                                <td>24</td>
                                <td>
                                  Navi General Insurance Limited (Formerly known as DHFL
                                  General Insurance Limited)
                                </td>
                              </tr>
                              <tr>
                                <td>25</td>
                                <td>Star Health and Allied Insurance</td>
                              </tr>
                              <tr>
                                <td>26</td>
                                <td>SBI General Insurance Co. Ltd.</td>
                              </tr>
                              <tr>
                                <td>27</td>
                                <td>Edelweiss General Insurance Co.Ltd.</td>
                              </tr>
                            </tbody>
                          </table>
                          <table className="table">
                            <thead className="thead-light">
                              <tr>
                                <th>Sr. No.</th>
                                <th>TPA</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>ALANKIT HEALTH CARE LIMITED</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Family Health Plan (TPA) Limited</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>East West Assist Insurance TPA Private Limited</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Genins India Insurance TPA Ltd.</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>HEALTH INDIA TPA SERVICES PVT LTD</td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>HEALTH INSURANCE TPA INDIA LTD</td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>HERITAGE HEALTH INSURANCE TPA PVT LTD</td>
                              </tr>
                              <tr>
                                <td>8</td>
                                <td>I - CARE GOOD HEALTH Insurance TPA Limited</td>
                              </tr>
                              <tr>
                                <td>9</td>
                                <td>MDIndia Health Insurance TPA Pvt. Ltd</td>
                              </tr>
                              <tr>
                                <td>10</td>
                                <td>Medi Assist India Pvt. Ltd.</td>
                              </tr>
                              <tr>
                                <td>11</td>
                                <td>MEDICARE TPA SERVICE PVT LTD</td>
                              </tr>
                              <tr>
                                <td>12</td>
                                <td>MEDSAVE HEALTH CARE TPA</td>
                              </tr>
                              <tr>
                                <td>13</td>
                                <td>Paramount Health Services &amp; Insurance Tpa Pvt Ltd</td>
                              </tr>
                              <tr>
                                <td>14</td>
                                <td>
                                  Parekh Health Management Pvt Ltd (UnitedHealthcare Parekh)
                                </td>
                              </tr>
                              <tr>
                                <td>15</td>
                                <td>Park Mediclaim Insurance TPA</td>
                              </tr>
                              <tr>
                                <td>16</td>
                                <td>Raksha Health Insurance TPA Pvt. Ltd.</td>
                              </tr>
                              <tr>
                                <td>17</td>
                                <td>
                                  Vidal Health Insurance TPA Pvt Ltd (Vipul MedCorp Insurance
                                  TPA Pvt Ltd is now merged with Vidal Health Insurance TPA)
                                </td>
                              </tr>
                              <tr>
                                <td>18</td>
                                <td>ERICSON INSURANCE TPA PVT. LTD.</td>
                              </tr>
                              <tr>
                                <td>19</td>
                                <td>Safeway Insurance TPA Private Limited</td>
                              </tr>
                              <tr>
                                <td>20</td>
                                <td>Rothshield Insurance TPA Limited</td>
                              </tr>
                            </tbody>
                          </table>
                          <p className="mt-4">Before Admission:</p>
                          <ul className="mt-4">
                            <li>
                              Pre -Authorization - The patient/relative needs to get the
                              pre-authorization form filled by the treating doctor.
                            </li>
                            <li>
                              The documents and the duly filled pre-authorization form are to
                              be submitted to the TPA via email. On receipt of the details,
                              the TPA sends either an approval or a query is raised.
                            </li>
                            <li>
                              Once the approval is received, the patient/relative is informed
                              about the same. In case of a query – The TPA desk helps the
                              patient to respond to the query with the help of doctors and get
                              the case approved.
                            </li>
                            <li>
                              In case where part approval is received or certain conditions
                              are highlighted by the TPA, the same is conveyed/explained to
                              the patient/relative.
                            </li>
                          </ul>
                          <p className="mt-4">On Admission:</p>
                          <ul className="mt-4">
                            <li>
                              The patient gets admitted by paying a security deposit and the
                              balance deposit amount (in case where partial approval is
                              received).
                            </li>
                            <li>
                              In case where the patient declares the insurance status at the
                              time of admission, the admission is done by collecting the
                              deposit amount, and the patient is directed to the TPA desk to
                              complete the TPA formalities. This process can be done by the
                              relative. On receipt of the approval, the same is applied to the
                              patient’s “In-patient account”.
                            </li>
                            <li>
                              In a situation where the patient has applied for the TPA
                              approval, however, no reply/approval has been received by the
                              hospital, then the patient gets admitted by paying the full
                              requisite deposit.
                            </li>
                            <li>
                              Interim Approvals: For long-stay patients - Interim bills are
                              forwarded to the TPA for enhancement. The response received from
                              the TPA in the form of Approval or Query is then applied or
                              responded back.
                            </li>
                          </ul>
                          <p className="mt-4">At Discharge:</p>
                          <ul className="mt-4">
                            <li>
                              The final bill and the discharge summary are forwarded to the
                              TPA for the final approval once the patient is ready for
                              discharge.
                            </li>
                            <li>
                              There can be a query at the time of discharge because of which
                              the discharge can get delayed.
                            </li>
                            <li>
                              The time taken for the final approval to be received by the
                              hospital may be in the range of 1 to 5 hours (approx) depending
                              on the case. In case the patient wishes to take discharge before
                              the approval arrives, the same can be done by settling the bill.
                              The patient could then claim from the TPA directly. The patient
                              must wait for the final approval even if the sum insured is
                              exhausted.
                            </li>
                            <li>
                              TPA formalities cannot be started on the day of discharge.
                            </li>
                          </ul>
                          <p className="mt-4">Some More information:</p>
                          <p className="mt-4">
                            1. Non-medical expenditures, room rent capping &amp; copayment
                            apply to certain cases. Kindly understand the same before the
                            admission.
                          </p>
                          <p>
                            2. Room rent is applicable on the day of discharge. Up to 6 hours
                            is counted as half a day. 6 hours &amp; above up to 24 hours is
                            counted as one day.
                          </p>
                          <p>
                            3. The deposit amount (if any) paid by the patient will be
                            refunded within one week after discharge.
                          </p>
                          <p>
                            4. The hospital is not responsible for the refusal/denial on the
                            part of the TPA for reimbursement of claims made by the patient.
                          </p>
                          <p>
                            5. The original reports and the discharge summary will be handed
                            over to the TPA/Insurance Company.
                          </p>
                          <p>
                            6. Admission in the hospital is subject to the availability of the
                            bed.
                          </p>
                          <p>
                            7. The hospital authority is entitled to share data/records
                            related to admission with representatives/agents from the
                            Insurance Company, TPA, or employer.
                          </p>
                          <p className="mt-4">
                            Kindly contact us on: 020 30717977 (9 am to 8.00 pm) Email:
                            abmh.tpa@adityabirla.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
      {/*  FAQ for wellness  end*/}
    </>



  );


};



export default Virtualtour;

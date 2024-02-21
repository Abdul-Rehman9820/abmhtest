

"use client";

import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './about-csr.css'


const Aboutcsr = () => {


  useEffect(() => {


    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll

  }, []);



  return (


    <>
      <title>Visa Information</title>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                <Link className="breadcrumbsNotactive" href="/abmh-international">ABMH International</Link> / <span className="breadcrumbsactive">Visa Information</span>
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
      {/* CSR start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="Csrpolmain abintvisa">
            <div className="crepolpara">
              <p className="crepolparadata">
                A medical visa (MED Visa) is granted to a foreigner whose sole purpose of visiting India is to seek medical treatment in specialized /recognized/ established Hospitals/treatment centres in India.
              </p>
            </div>
            <div className="CSRpolyhead">
              <div className="CSRpolyheadbof">
                <h2 className="CSRpolyheadbalc">
                  Documents Needed for Medical Visa Application:
                </h2>
                <span className="CSRpolyheadborder" />
              </div>
            </div>
            <div className="crepolpara">

              <p className="crepolparadata">
                1- Original passport valid for a minimum of 6 months (or for the validity requested, if greater)
              </p>
              <p className="crepolparadata">
                2- A photocopy of the data page of the passport
              </p>
              <p className="crepolparadata">
                3- Two (2) photographs of the size of 50mm X 50mm i.e. 2 inch x 2 inch with light background. Photos should be glued on your forms in the box provided on pages 1 and 2 of the online form.(Check the Photo Specification details below)
              </p>
              <p className="crepolparadata">
                4- Visa application form duly filled in online Your form should be signed in the box under the photograph on page 1 and at the end of page-2. Your signatures should match with the signature printed on your passport.
              </p>
              <p className="crepolparadata">
                5- Applicant must provide his/her own contact details including E-mail ID. If found somebody else’s/false, visa may be refused.
              </p>
              <p className="crepolparadata">
                6- Typed Referral letter in original on letterhead with contact details, duly stamped and signed from a well reputed hospital/medical institute after examination of the patient’s condition specifying the nature of the patient’s illness and the reason for referring the patient for medical treatment to the established/specialized/recognised medical Institute/hospital concerned in India.
              </p>
              <p className="crepolparadata">
                7- Typed Admission letter on letterhead, duly stamped and signed with contact details, from the hospital/medical Institute in India, which must also be e-mailed by the hospital authorities to High Commission with a copy to the applicant, specifying the nature of the medical treatment to be undertaken along with the start and end date of this treatment.
              </p>
              <p className="crepolparadata">
                8- A certified bank statement of last three months/guarantee letter issued by the bank in the name of the applicant, testifying his/her ability to meet expenses to cover medical and living expenses in India for the duration of the medical treatment. In case of sponsorship, an affidavit from the sponsor along with a copy of his/her Identity Card/Passport copy is to be attached.
              </p>


              <p className="crepolparadata">
                <b>NOTE:</b> Additional documents may also be required of you at the time of interview at the discretion of the Consular Officer.
              </p>


            </div>
            <div className="forcoloumdata">
              <div className="forcoloumdataboxcont">
                <div className="forcoloumdataboxdetail">
                  <h2 className="detailhead">Important Notice:</h2>
                  <div className="scrdetailpara">
                    Yellow fever vaccination for all except infants under six months and polio vac/IPV for all residents, except third country foreign nationals, are compulsory for travelling to india.
                  </div>
                  <div className="scrdetailpara">
                    Oral polio vaccination/IPV only for residents of seven polio-affected countries (Afghanistan, Ethiopia, Kenya, Nigeria, Pakistan, Syria, and Somalia) is a mandatory requirement for visiting India from 01/03/2014. OPV/IPV certificate to be carried along is valid for one year from the date of administering it.
                  </div>
                </div>
                <div className="forcoloumdataboxdetail">
                  <h2 className="detailhead">Photo Specifications:</h2>
                  <div className="scrdetailpara">
                    The main objective of ABHSL’s CSR policy is to lay down guidelines for the community centric activities taken up by ABHSL for the sustainable development of the society and the environment around it.
                    In alignment with vision of the company, ABHSL, through its CSR initiatives, will strive to enhance value to the society and the environment through continuous initiatives.
                    ABHSL will directly or indirectly take up projects in and around its operational locations in keeping with the laid out guidelines.
                  </div>
                </div>
                <div className="forcoloumdataboxdetail">
                  <h2 className="detailhead">Size Of Photographs :</h2>
                  <div className="scrdetailpara">
                    <ul>
                      <li>It is obligatory that your photo is square and measures 50mm X 50mm i.e. 2 inch x 2 inch.</li>
                      <li>Photos should date less than 6 months and should perfectly resemble the applicant on the day of application.</li>
                      <li>Colour: Photos should be in colour with a white background. Black and white photos will not be accepted.</li>
                      <li>Quality: Scanned or bad quality photos will be refused. Photos should be clean, not torn or creased and printed on standard photo paper.</li>
                      <li>Background: Background should be white. Photos with a coloured or fantasy background will be refused.</li>
                      <li>Framing: Photos should be taken showing the head and shoulders. The face should be centred in the frame and not turned to one side, taken between 70% and 80% of the height of the photo.</li>
                      <li>Expression: Subjects should have a neutral expression, with a closed mouth.</li>
                      <li>Hair: Hair should not cover the face.</li>
                      <li>Eyes: Subjects should be looking forward, with their eyes open. Glasses frames should be subtle and not block the eyes. Photos showing tinted glasses or red eyes will be refused.</li>
                      <li>Head coverings: Head coverings will not be accepted. The Indian Government will accept any accessories worn for religious, ethnic beliefs or antecedents provided that the face remains entirely visible.</li>
                    </ul>

                  </div>
                </div>
                <div className="forcoloumdataboxdetail">
                  <h2 className="detailhead">Intructions On Using The Photos :</h2>
                  <div className="scrdetailpara">
                    Your first photo should be glued on the form in the box provided on page 1 of your application form. This photo will be scanned and will appear on your visa.
                  </div>
                  <div className="scrdetailpara">
                    Your second photo should be glued on the bottom right hand corner of page 2 of your application form.
                  </div>
                  <div className="scrdetailpara">
                    At least two photos will be required: all photos provided must be identical.
                  </div>
                </div>
              </div>
              {/* <div className="csrpolycenterimg">
                <Image width={400} height={400}
                  className="csrpolycenterimgclas"
                  src="/commonimages/csrployboxlogo.png"
                  alt="img"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
  
      {/* CSR end*/}
    </>





  );


};



export default Aboutcsr;

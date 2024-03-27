

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
    <title>CSR</title>
    <link rel="canonical" href="https://adityabirlahospital.com/about-csr" />
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <Link className="breadcrumbsNotactive" href="/about-us">About Us</Link> / <span className="breadcrumbsactive">CSR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* common heading div end*/}
      {/* common heading banner start */}
      <div className="mainheadingbanner">
        <div className="mainheadingbandiv">
           <Image width={2000} height={400} src="/commonimages/commcsrnew.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}
      {/* CSR start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="Csrpolmain">
            <div className="CSRpolyhead">
              <div className="CSRpolyheadbof">
                <h2 className="CSRpolyheadbalc">
                  Corporate Social Responsibility (CSR Policy)
                </h2>
                <span className="CSRpolyheadborder" />
              </div>
            </div>
            <div className="crepolpara">

              <p className="crepolparadata">
                <b>Aditya Birla Memorial Hospital (ABMH)</b> is a multi-specialty
                tertiary hospital located at Pimpri-Chinchwad, Pune in the western <b>
                  College of American Pathologists (CAP) and National Accreditations
                  Board for Laboratory (NABL)
                </b> accredited hospital, and also India&apos;s <b>First HACCP and ISO: 22000:2005</b> certified hospital
              </p>


              {/* <p className="crepolparadata">
                Corporate social responsibility is recent and an evolving concept
                for the business Organizations in the country. It addresses the well
                being of all the stakeholders of the society at large and sustaining
                the environment for future generations. With the recent development
                of corporate social responsibility provisions under the realms of
                Companies Act 2013, Indian companies are now expected to discharge
                their responsibility by acting in socially responsible manner,
                thereby taking care of people, planet and profit.
              </p>
              <p className="crepolparadata">
                ABMH is a corporate entity committed to serving the people by
                provision of healthcare in line with our mission statement:
                Compassionate, Quality, and Healthcare. Our strategic Corporate
                Social Responsibility (CSR) initiatives are based on social and
                environmental consequences and at the same time, due consideration
                is given to the interests of its stakeholders including
                shareholders, customers, employees, suppliers, business partners,
                local communities, and other organizations. CSR is ingrained in our
                DNA since we are modeled as a Social Enterprise rather than a
                typical Corporate. ABSHL CSR policy is a set of basic principles and
                guidelines to direct focus and influence our actions and decision
                making towards providing necessary care and assistance to the needy.
              </p>
              <p className="crepolparadata">
                Responsibility Policy (Policy) in accordance with section 135 of the
                Companies Act 2013 and the rules made there under.
              </p> */}


            </div>


            {/* <div className="forcoloumdata">
              <div className="forcoloumdataboxcont">
                <div className="forcoloumdataboxdetail">
                  <h2 className="detailhead">CSR Vision Statement</h2>
                  <div className="scrdetailpara">
                    Our vision is &apos;To actively contribute to the social-economic-
                    environment of the communities in which we operate. In so doing
                    build a better, sustainable way of life for the weaker sections
                    of society and raise the country&apos;s human development index&apos;.
                    <b>- Mrs. Rajashree Birla</b>
                  </div>
                  <div className="scrdetailpara">
                    Our CSR Vision is to have a hand in the socio-economic-
                    environmental development of the society and creating wellness
                    for the society.
                  </div>
                </div>
                <div className="forcoloumdataboxdetail">
                  <h2 className="detailhead">CSR Mission Statement</h2>
                  <div className="scrdetailpara">
                    Our CSR Mission is to involve ourselves in contributing to the
                    society by planning and taking part in the activities that help
                    in sustainability of environment and also to indulge in the
                    social- economic-environment development of the society. Also
                    focus on Extending Comprehensive Integrated Healthcare Services
                    to the community.
                  </div>
                </div>
                <div className="forcoloumdataboxdetail">
                  <h2 className="detailhead">Our CSR Objectives</h2>
                  <div className="scrdetailpara">
                    The main objective of ABHSL&apos;s CSR policy is to lay down
                    guidelines for the community centric activities taken up by
                    ABHSL for the sustainable development of the society and the
                    environment around it. In alignment with vision of the company,
                    ABHSL, through its CSR initiatives, will strive to enhance value
                    to the society and the environment through continuous
                    initiatives.
                  </div>
                  <div className="scrdetailpara">
                    ABHSL will directly or indirectly take up projects in and around
                    its operational locations in keeping with the laid out
                    guidelines.
                  </div>
                </div>
                <div className="forcoloumdataboxdetail">
                  <h2 className="detailhead">Validity Of CSR Policy</h2>
                  <div className="scrdetailpara">
                    The Board may amend the CSR policy as may be required from time
                    to time. The Board of Directors on its own and/or as per the
                    recommendations of CSR Committee can amend this Policy, as and
                    when required as deemed fit. Any or all provisions of the CSR
                    Policy would be subject to revision/ amendment in accordance
                    with the Regulations on the subject as may be issued from
                    relevant statutory authorities, from time to time.
                  </div>
                </div>
              </div>
              <div className="csrpolycenterimg">
                <Image width={400} height={400}
                  className="csrpolycenterimgclas"
                  src="/commonimages/csrployboxlogo.png"
                  alt="img"
                />
              </div>
            </div> */}


          </div>
        </div>
      </div>


      {/* <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="Csrpolmain2">
            <div className="CSRpolyhead">
              <div className="CSRpolyheadbof">
                <h2 className="CSRpolyheadbalc">CSR Programmes Area</h2>
                <span className="CSRpolyheadborder" />
              </div>
            </div>
            <div className="crepolpara">
              <p className="crepolparadata">
                ABHSL will directly or indirectly take up projects in and around its
                operational locations in keeping with the laid out guidelines.
              </p>
              <p className="crepolparadata">
                The Company proposed to focus primarily on the following programmes:
              </p>
            </div>
            <div className="cstbloglayot">
              <div className="cstbloglayot1">
                <Image width={400} height={400} src="/commonimages/csrbolglayoutimg1.png" alt="img" />
              </div>
              <div className="cstbloglayot2">
                <div className="cstbloglayothead">Rural Development</div>
                <div className="cstbloglayotpara">
                  The Company aims to create a meaningful and lasting impact on the
                  communities in remote areas by helping them transcend barriers of
                  socio-economic development
                </div>
                <div className="cstbloglayotpara">
                  A Model of Integrated Healthcare Service will be established to
                  improve the health of communities through:
                </div>
                <div className="cstbloglayotpara">
                  <ul>
                    <li>Access to quality education for youth and child.</li>
                    <li>Promotion of Research in Healthcare</li>
                    <li>Promotion of healthy lifestyles</li>
                    <li>Access to Drinking Water</li>
                    <li>Access to Sanitation</li>
                    <li>
                      Developing infrastructure facilities for socio-economic
                      development
                    </li>
                    <li>Elderly care.</li>
                    <li>
                      The program will bridge the gap by uniting the Governmental
                      Efforts with the Industry and Peoples Participation.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="cstbloglayot revercelayout">
              <div className="cstbloglayot1">
                <Image width={400} height={400} src="/commonimages/csrhealcare.png" alt="img" />
              </div>
              <div className="cstbloglayot2">
                <div className="cstbloglayothead">Healthcare</div>
                <div className="cstbloglayotpara">
                  The Company intends to touch a billion lives by reaching out to
                  people from every walk of life to help them stay healthy. The
                  objective is to promote wellness and not treatment.
                </div>
                <div className="cstbloglayotpara">
                  In line with this, under its CSR focus the company will aim to
                  promote preventive healthcare in the most remote corners of the
                  country with the aim of making quality healthcare accessible &amp;
                  affordable for all. To do this the Company will:
                </div>
                <div className="cstbloglayotpara">
                  <ul>
                    <li>
                      Promote preventive healthcare through awareness campaigns in
                      rural as well as urban areas.
                    </li>
                    <li>
                      Conduct free screening and diagnostics camps as part of
                      promotion of preventive healthcare
                    </li>
                    <li>
                      Provide free treatment including emergency care, ambulance
                      support, consultation, investigation and pharmacy at
                      identified locations and camps for the benefit of marginalized
                      and disadvantaged
                    </li>
                    <li>
                      Committee of experts will accept, review and approve the
                      applications for free treatment with predefined criteria.
                    </li>
                  </ul>
                </div>
                <div className="cstbloglayotpara">
                  The selection criteria can include:- <br />
                  Below Poverty Line OR Antyodaya card holder <br />
                  Patients under palliative care <br />
                  Natural calamity affected citizen <br />
                  Differently abled individuals <br />
                  Patients needing emergency healthcare <br />
                </div>
              </div>
            </div>
            <div className="cstbloglayot">
              <div className="cstbloglayot1">
                <Image width={400} height={400} src="/commonimages/csreducationimg.png" alt="img" />
              </div>
              <div className="cstbloglayot2">
                <div className="cstbloglayothead">
                  Education And Skills Development
                </div>
                <div className="cstbloglayotpara">
                  The Company will develop the skills of the youth through high
                  quality Education in Paramedical and Allied Services and Research
                  in Healthcare.
                </div>
                <div className="cstbloglayotpara">
                  High quality Education in Paramedical and Allied Services will be
                  provided by setting up educational institutions, improving
                  infrastructure of the existing institutes and providing
                  scholarships to the meritorious students from underprivileged and
                  economically weaker communities.
                </div>
              </div>
            </div>
            <div className="cstbloglayot revercelayout">
              <div className="cstbloglayot1">
                <Image width={400} height={400} src="/commonimages/csrsintisimg.png" alt="img" />
              </div>
              <div className="cstbloglayot2">
                <div className="cstbloglayothead">
                  Promote Research In Healthcare
                </div>
                <div className="cstbloglayotpara">
                  The Company will promote Research and disseminate information on
                  latest technology and trends in Healthcare sector. Promoting
                  research in healthcare is essential for advancing medical
                  knowledge, improving patient outcomes, and addressing the evolving
                  challenges in the field. Research plays a pivotal role in
                  uncovering new treatment modalities, understanding the intricacies
                  of diseases, and developing innovative technologies that enhance
                  diagnostic accuracy and therapeutic efficacy.
                </div>
                <div className="cstbloglayotpara">
                  By investing in healthcare research, we empower scientists,
                  clinicians, and healthcare professionals to explore novel avenues
                  for disease prevention, early detection, and effective
                  intervention. Robust research initiatives contribute to
                  evidence-based medicine, ensuring that healthcare practices are
                  grounded in the latest scientific discoveries. Additionally,
                  fostering a culture of inquiry and discovery in healthcare
                  institutions encourages collaboration, interdisciplinary
                  approaches, and the sharing of insights globally.
                </div>
              </div>
            </div>
            <div className="cstbloglayot">
              <div className="cstbloglayot1">
                <Image width={400} height={400} src="/commonimages/csrtreeimg.png" alt="img" />
              </div>
              <div className="cstbloglayot2">
                <div className="cstbloglayothead">Other Area Developments</div>
                <div className="cstbloglayotpara">
                  Ensuring environmental sustainability by plantation of trees in
                  hospital premises and other areas in general and protect various
                  species of flora.
                </div>
                <div className="cstbloglayotpara">
                  Ensuring environmental sustainability, ecological balance,
                  protection of flora &amp; fauna, animal welfare, agro forestry,
                  conservation of natural resources &amp; maintaining quality of
                  soil, air &amp; water.
                </div>
                <div className="cstbloglayotpara">
                  Empowering women especially in rural areas either by creating self
                  help groups or by any other means and improves adult female
                  literacy inculcate hygiene and educate its benefits.
                </div>
                <div className="cstbloglayotpara">
                  Educate various sections of society on the hazardous diseases and
                  various preventive measures.
                </div>
                <div className="cstbloglayotpara">
                  Promotion of bio diversity and alternate energy sources.
                </div>
                <div className="cstbloglayotpara">
                  Practice and promote conservation of natural resources
                </div>
                <div className="cstbloglayotpara">
                  Contribution to the Prime Minister&apos;s National Relief Fund or any
                  other fund set up by the Central Government for socio- economic
                  development &amp; relief &amp; welfare of the Scheduled Castes,
                  the Scheduled Tribes, other backward classes, minorities &amp;
                  women
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      {/* CSR end*/}
    </>





  );


};



export default Aboutcsr;


"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'



const Dentistry = () => {


  // store data here
  const [data, setData] = useState(['']);

  // for profile late loading
  const [isLoading, setIsLoading] = useState(true); // Declare the isLoading variable

  //---- for api data


  useEffect(() => {


    // api for profile


    async function fetchData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_Web_Domin}/api/profilebyspecilitypage`, {
          method: "POST",
          body: JSON.stringify({
            usersearch: "16",
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        // Wait for API response to return before initializing the slider
        // await new Promise((resolve) => setTimeout(resolve, 500));

        setData(result.data);
        setIsLoading(false);
        console.log(result.data);
      } catch (error) {
        console.error(error);
      }
    }


    fetchData();


    // api for profile



  }, []);

  // Group profiles into sets of three
  const groupedProfiles = data.reduce((accumulator, profile, index) => {
    if (index % 3 === 0) {
      accumulator.push([profile]);
    } else {
      accumulator[accumulator.length - 1].push(profile);
    }
    return accumulator;
  }, []);


  return (


    <>
      <title>Dentistry</title>

      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Our Specialties / <span className="breadcrumbsactive">Dentistry</span>
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
          <Image width={2000} height={400} src="/specialityviewimag/Multi-specialities-banner.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}


      {/* specialties  start*/}





  <div className="parentcontainerwhi">
    <div className="customcontainer">
      <div className="specsingleparn">
        <div className="spectitle">
          <h1 className="spetileh1">Dentistry</h1>
        </div>
        <div className="spectitleimgbox">
          <div className="spectitleimgbox1">
            <Image width={400} height={400} src="/specialityviewimag/dentistry.jpg" alt="img" />
          </div>
          <div className="spectitleimgbox2">
            <div className="spectitle Specialtiesheadgr">
              <h1 className="spetileh2gr">OMF Surgery</h1>
              <span className="headbordergr" />
            </div>
            <p className="specilpara">
              Oral &amp; Maxillo facial Surgery is the bridge between medicine
              and dentistry, treating diseases, injuries and defects in the
              head, neck, face, jaws and the hard and soft tissues of
              maxillofacial region. Broad scope of OMFS includes:
            </p>
            <ul>
              <li>
                Surgical extraction of tooth including impacted 3rd molars under
                local anesthesia or general anesthesia as per indication.
              </li>
              <li>Cyst &amp; Tumors in the orofacial region.</li>
              <li>Treatment of Temporo-Mandibular Joint Disorders.</li>
              <li>Maxillofacial Trauma.</li>
              <li>
                Diseases of the Salivary glands, Orofacial infections causing
                facial swellings.
              </li>
              <li>
                Special emphasis given on detection, prevention &amp; management
                of Oral Cancers &amp; Pre-Cancerous lesions, conditions such as
                leukoplakia, submucous fibrosis etc.
              </li>
              <li>
                Correction of facial defects, facial asymmetry with Orthognathic
                Surgeries.
              </li>
              <li>Dental Implants (surgical aspect)</li>
            </ul>
          </div>
        </div>
        <div className="spectitlepara">
          <div className="spectitle Specialtiesheadgr">
            <h1 className="spetileh2gr">Cosmetic Dentistry</h1>
            <span className="headbordergr" />
          </div>
          <p className="specilpara">
            Deals with correction of maligned teeth, disproportionate jaw
            relationship or combination of both, improper bite, along with
            controlling and treatment of various aspects of facial growth. The
            scope of Orthodontic Treatment includes:
          </p>
          <ul>
            <li>Correction of irregular and forwardly placed teeth.</li>
            <li>Spaced dentition.</li>
            <li>
              Correction of habits such as tongue thrust, mouth breathing, thumb
              sucking etc.
            </li>
            <li>
              Correction of mal oral function involving speech, mastication,
              respiration etc.
            </li>
            <li>Treatment of deep bite, open bite.</li>
            <li>
              Correction of facial asymmetry, severe jaw discrepancies with
              Orthognathic surgeries.
            </li>
            <li>
              Treatment of Cleft lip and Cleft palate patient with
              multidisciplinary approach.
            </li>
            <li>
              Improve and maintenance of the long-term health of gums and teeth.
            </li>
            <li>To prevent long-term excessive wear or trauma of the teeth.</li>
          </ul>
        </div>
        <div className="spectitlepara">
          <div className="spectitle Specialtiesheadgr">
            <h1 className="spetileh2gr">Oral Surgical Procedures</h1>
            <span className="headbordergr" />
          </div>
          <p className="specilpara">
            Prosthodontics is the area of dentistry pertaining to the diagnosis,
            treatment planning, rehabilitation, and maintenance of the oral
            functions, esthetics, and health of patients with clinical
            conditions associated with missing teeth, deficient teeth, and/or
            compromised maxillo-facial tissues using biocompatible substitutes.
            The scope of prosthodontic treatment includes:
          </p>
          <ul>
            <li>
              Restoring or replacing teeth through implants, Veneers, Crowns
              &amp; Bridges.
            </li>
            <li>Traditional and Implant supported Dentures.</li>
            <li>
              Post Root Canal Treatment rehabilitation, which includes Post and
              Core preparation.Prosthetic rehabilitation of patients who have
              undergone surgery for cancerous lesions.
            </li>
          </ul>
        </div>
        <div className="spectitlepara">
          <div className="spectitle Specialtiesheadgr">
            <h1 className="spetileh2gr">Orthodontic Treatment</h1>
            <span className="headbordergr" />
          </div>
          <p className="specilpara">
            Paedodontics or Pediatric Dentistry is the branch of dentistry which
            specializes in diagnosis, treatment and prevention of dental
            problems starting from infants to children who are under the age of
            sixteen. This is because early oral examination aids in the
            detection of the early stages of tooth decay.
          </p>
          <p className="specilpara">
            Early detection is essential to maintain oral health, modify
            aberrant habits, and treat as needed and as simply as possible.
            Additionally, parents are given a program of preventative home care
            (brushing/flossing/fluorides), a caries risk assessment, information
            on finger, thumb, and pacifier habits, advice on preventing injuries
            to the mouth and teeth of children, diet counseling, and information
            on overall growth and development of teeth and Jaws.
          </p>
        </div>
        <div className="spectitlepara">
          <div className="spectitle Specialtiesheadgr">
            <h1 className="spetileh2gr">Paediatric Dentistry</h1>
            <span className="headbordergr" />
          </div>
          <p className="specilpara">
            Conservative Dentistry is the branch of dentistry which is concerned
            with the conservation of teeth in the mouth. It embraces the
            practice of Operative Dentistry and Endodontics. The scope of
            Conservative Dentistry and Endodontics includes:
          </p>
          <ul>
            <li>Various kinds of direct and indirect restorations of teeth.</li>
            <li>Root canal treatment.</li>
            <li>Surgical endodontics.</li>
            <li>Bleaching.</li>
            <li>Management of traumatized teeth.</li>
          </ul>
          <p className="specilpara">
            The aim is to bring back the teeth to full function &amp; appearance
            in an aesthetically pleasing manner with as little loss of healthy
            tooth structure as possible.
          </p>
        </div>
        <div className="spectitlepara">
          <div className="spectitle Specialtiesheadgr">
            <h1 className="spetileh2gr">Routine Dentistry</h1>
            <span className="headbordergr" />
          </div>
          <ul>
            <li>Diagnosis &amp; Management.</li>
            <li>Restorations.</li>
            <li>Scaling &amp; Polishing.</li>
            <li>Normal extraction.</li>
            <li>Normal Root canal treatment.</li>
            <li>Complete &amp; Partial Dentures.</li>
          </ul>
        </div>
        <div className="spectitlepara">
          <div className="spectitle Specialtiesheadgr">
            <h1 className="spetileh2gr">Cosmetic Surgery</h1>
            <span className="headbordergr" />
          </div>
          <ul>
            <li>Composite Restorations</li>
            <li>
              Crown and Bridges (Including full metal, metal ceramic and full
              ceramic)
            </li>
            <li>Dental Laminates (ceramic and composite)</li>
            <li>Smile Designing</li>
            <li>Teeth whitening</li>
          </ul>
        </div>
        <div className="spectitlepara">
          <div className="spectitle Specialtiesheadgr">
            <h1 className="spetileh2gr">Specialized Treatments</h1>
            <span className="headbordergr" />
          </div>
          <p className="specilpara">
            This branch of dentistry is concerned with the structures
            surrounding and supporting the teeth ie basically Gums, Periodontal
            ligaments and surrounding bone. Scope of periodontics includes
            prevention, diagnosis and treatment of periodontal/ gum diseases.
            Normally the procedures include:
          </p>
          <ul>
            <li>Scaling ( removal of tartar deposits).</li>
            <li>
              Subgingival scaling and root planning (in which the infected
              surface of the root is cleaned).
            </li>
            <li>
              Treatment of patients with severe gum problems using a range of
              surgical procedures such as Flap surgery, Gingivectomy,etc.
            </li>
            <li>
              Additionally, periodontists are specially trained in the placement
              and repair of dental implants.
            </li>
            <li>Laser Dentistry</li>
            <li>
              Advanced Gum Surgery both by Traditional and Laser method/li&gt;
            </li>
            <li>Full Mouth Rehabilitation</li>
            <li>Post Trauma and Post Cancer Prosthetic Rehabilitation</li>
            <li>Dental Implants</li>
            <li>Cleft lip and Cleft Palate management</li>
            <li>Diagnosis, Treatment &amp; Management of Oral Cancer</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="parentcontainerwhi specipgGRY">
    <div className="customcontainer">
      <div className="specsingleparnGra">
        <div className="spectitlegrcont">
          <div className="spectitlegrcont1">
            <div className="Specialtiesheadgr">
              <h2 className="spetileh1gr">Infrastructure</h2>
              <span className="headbordergr" />
            </div>
            <p className="specilpara">
              Our dental department is fortified with state-of-the-art equipment
              which includes, Fully Digital Dental Units, Digital X&apos;Ray
              facility, IntraOral Camera, In house autoclaving over and above
              Central Sterilization System of the hospital.
            </p>
            <p className="specilpara">
              Latest World class materials and instruments are used to provide
              skillful dental treatment. At Aditya Birla Memorial Hospital, we
              lay great emphasis on the highest quality of Infection Control.
            </p>
            <p className="specilpara">
              A highly experienced and competent team is available to provide
              complete range of Dental Treatment under one roof.
            </p>
          </div>
          <div className="spectitlegrcont2">
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Oral & Maxillofacial Surgery.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">
                  Oral &amp; Maxillofacial Surgery (OMF)
                </p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Cosmetic Dentistry.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Cosmetic Dentistry</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Oral Surgical Procedures.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Oral Surgical Procedures</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Orthodontic Treatment.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Orthodontic Treatment</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Paediatric Dentistry.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Paediatric Dentistry</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Dental Cosmetic Surgery.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Cosmetic Surgery</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Routine Dental Procedures.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Routine Dental Procedures</p>
              </div>
            </div>
            <div className="testimgboxcont">
              <div className="testimgboxcot1">
                <Image width={400} height={400}
                  src="/specialityviewimag/Specialized Dental Treatment.jpg"
                  alt="img"
                />
              </div>
              <div className="testimgboxcot2">
                <p className="testimgtitle">Specialized Dental Treatment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>






      {/* team of expert slider start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleDoclist">
            <div className="Specialtiesheadgr">
              <h2 className="spetileh1gr">Our Team Of Experts</h2>
              <span className="headbordergr" />
            </div>


            <div className="ourteamparsingle">

              <div
                id="carouselExampleIndicators"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >

                <div className="carousel-inner">


                  {isLoading ? (
                    <div className="loading-message">Loading doctors...</div>
                  ) : data.length === 0 ? (
                    <div className="empty-message">No doctors found</div>
                  ) : (
                    groupedProfiles.map((item, index) => (
                      <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <div className="row mycentr">
                          {item.map((profile, profileIndex) => (


                            <div className="ourteamslidchilbosingle" key={profileIndex}>
                              <div className="ourteamslidebox">
                                <div className="ourteambox1single">
                                  <div className="ourteamimg">
                                    <Image width={400} height={400} src={`/DoctorsProfileimages/${profile.DoctorProfileImage}`} alt="img" />
                                  </div>
                                  <div className="ourteamnamesing">
                                    <h2>{profile.DoctorFName} {profile.DoctorLName}</h2>
                                  </div>
                                  <div className="ourteamspec">
                                    <h2>{profile.DoctorDesignation}</h2>
                                  </div>
                                  <div className="ourteamexpi">
                                    <h2>{profile.DoctorExperience}</h2>
                                  </div>
                                </div>
                                <div className="ourteambox2">
                                  <div className="ourteambox2flex">

                                    <Link className="bookappoteam" href={`/doctor-profile?doc=${profile.DoctorNameSlug}`}>
                                      View Profile
                                    </Link>

                                  </div>
                                </div>
                              </div>
                            </div>


                          ))}
                        </div>
                      </div>
                    ))
                  )}




                </div>



                {data.length > 3 && (
                  <>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span className="carousel-control-prev-icon smallimg" aria-hidden="true">
                        <Image width={400} height={400} src="/homeimg/nextleft.png" alt="img" />
                      </span>
                      <span className="visually-hidden">Previous</span>
                    </button>

                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span className="carousel-control-next-icon smallimg" aria-hidden="true">
                        <Image width={400} height={400} src="/homeimg/nextright.png" alt="img" />
                      </span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </>
                )}



              </div>





            </div>

          </div>
        </div>
      </div>
      {/* team of expert slider end*/}


      {/* specialties end*/}
    </>




  );


};



export default Dentistry;

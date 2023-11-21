"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'


import $ from 'jquery';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';


import './doctor-profile.css'


const Doctorprofile = () => {


  //---- for api data

  const searchParams = useSearchParams()

  var search = "";

  if (searchParams.has('doc')) {
    search = searchParams.get('doc') // get from url
  } else {
    search = ""; // Set the default value if 'doc' is not present
  }
  //---- for api data


  // store data here
  const [data, setData] = useState(['']);


  // for profile late loading
  const [isLoading, setIsLoading] = useState(true); // Declare the isLoading variable

  //---- for api data



  useEffect(() => {


    // api for profile

    async function fetchData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_Web_Domin}/api/doctorsingleprofileview`, {
          method: "POST",
          body: JSON.stringify({
            usersearch: search,
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        setData(result.data);
        setIsLoading(false);

        // console.log(result.data);

      } catch (error) {
        console.error(error);
      }
    }


    fetchData();


    // api for profile




  }, [data]);


  return (


    <>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">



          {isLoading ? (

            <div className="loading-message mt-4 mb-4">
              <div className="loader"></div>
              <p>Loading Profile...</p>
            </div>

          ) : (

            data.length === 0 ? (
              <div className="empty-message mt-4 mb-4">No doctor found</div>
            ) : (

              data.map((item, index) => (


                <div className="doctorviewprofile" key={index} >
                  <div className="commonheadcontainer">
                    <div className="breadcrumbs">
                      {/* try to dynamic */}

                      <title>{item.DoctorFName + " " + item.DoctorLName}</title>

                      <div className="breadcrumbsdata">
                        Home / <span className="breadcrumbsactive">{item.DoctorFName} {item.DoctorLName}</span>
                      </div>
                    </div>
                    <div className="doctrodatcont">
                      <div className="proimgsection">
                        <div className="profilebox">
                          <div className="profileimg">
                            <Image width={400} height={400}
                              src={`/DoctorsProfileimages/${item.DoctorProfileImage}`}
                              alt="img"
                            />
                          </div>
                          <div className="profilename">
                            <h1>{item.DoctorFName} {item.DoctorLName}</h1>
                          </div>
                          <div className="profileSpeciality">
                            <h2>{item.DoctorDesignation}</h2>
                          </div>
                          <div className="profileborder">
                            <span />
                          </div>
                          <div className="profileexpe">
                            <h2>{item.DoctorExperience}</h2>
                          </div>
                          <div className="profilebutton">
                            <a href="#">Book an Appointment</a>
                          </div>
                        </div>
                      </div>
                      <div className="prodatasection">
                        <div className="mynewtab">
                          <ul
                            className="nav nav-pills mb-3"
                            id="pills-tab"
                            role="tablist"
                          >

                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active"
                                id="pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                              >
                                Profile Overview
                              </button>
                            </li>

                            {item.DoctorMemberships || item.DoctorCertifications ? (
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link"
                                  id="pills-profile-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-profile"
                                  type="button"
                                  role="tab"
                                  aria-controls="pills-profile"
                                  aria-selected="false"
                                >
                                  Memberships & Certifications
                                </button>
                              </li>
                            ) : null}

                            {item.DoctorPublications ? (
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link"
                                  id="pills-contact-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-contact"
                                  type="button"
                                  role="tab"
                                  aria-controls="pills-contact"
                                  aria-selected="false"
                                >
                                  Publications
                                </button>
                              </li>
                            ) : null}


                          </ul>
                          <div className="tab-content" id="pills-tabContent">
                            <div
                              className="tab-pane fade show active"
                              id="pills-home"
                              role="tabpanel"
                              aria-labelledby="pills-home-tab"
                            >
                              <div className="dbdata">
                                <div className="prodataDIV">


                                  {item.specialty_name && (

                                    <>
                                      <h3 className="datadivhiading">Medical Department</h3>
                                      <p className="datadivpara">{item.specialty_name}</p>
                                    </>

                                  )}


                                </div>
                                <div className="prodataDIV">


                                  {item.DoctorSpecialies && (

                                    <>
                                      <h3 className="datadivhiading">Specialties</h3>
                                      <div className="redanimatedloopbox">
                                        {item.DoctorSpecialies.split('||').map((experience, expIndex) => (
                                          <div key={expIndex} className="animatedheading">
                                            <span className="roundred" />
                                            {experience}
                                          </div>
                                        ))}
                                      </div>
                                    </>

                                  )}


                                </div>
                                <div className="prodataDIV">


                                  {item.DoctoAboutme && (

                                    <>
                                      <h3 className="datadivhiading">About Me</h3>
                                      <p className="datadivpara">{item.DoctoAboutme}</p>
                                    </>

                                  )}


                                </div>
                                <div className="prodataDIV">

                                  {item.DoctorExperienceField && (

                                    <>
                                      <h3 className="datadivhiading">Experience</h3>
                                      <div className="redanimatedloopbox">
                                        {item.DoctorExperienceField.split('||').map((experience, expIndex) => (
                                          <div key={expIndex} className="animatedheading">
                                            <span className="roundred" />
                                            {experience}
                                          </div>
                                        ))}
                                      </div>
                                    </>

                                  )}

                                </div>

                                <div className="prodataDIV">


                                  {item.DoctorFellowshipsAssociations && (

                                    <>
                                      <h3 className="datadivhiading">Fellowships / Associations</h3>
                                      <div className="redanimatedloopbox">
                                        {item.DoctorFellowshipsAssociations.split('||').map((experience, expIndex) => (
                                          <div key={expIndex} className="animatedheading">
                                            <span className="roundred" />
                                            {experience}
                                          </div>
                                        ))}
                                      </div>
                                    </>

                                  )}


                                </div>


                                <div className="prodataDIV">


                                  {item.DoctorQualification && (

                                    <>
                                      <h3 className="datadivhiading">Qualification</h3>
                                      <div className="redanimatedloopbox">
                                        {item.DoctorQualification.split('||').map((experience, expIndex) => (
                                          <div key={expIndex} className="animatedheading">
                                            <span className="roundred" />
                                            {experience}
                                          </div>
                                        ))}
                                      </div>
                                    </>

                                  )}


                                </div>


                                <div className="prodataDIV">


                                  {item.DoctorIPDOPDtime && (

                                    <>
                                      <h3 className="datadivhiading">Timing:</h3>
                                      <div className="redanimatedloopbox">
                                        {item.DoctorIPDOPDtime.split('||').map((experience, expIndex) => (
                                          <div key={expIndex} className="animatedheading">
                                            <span className="roundred" />
                                            {experience}
                                          </div>
                                        ))}
                                      </div>
                                    </>

                                  )}


                                </div>
                                

                                <div className="prodataDIV">


                                  {item.DoctorLanguagesSpoken && (

                                    <>
                                      <h3 className="datadivhiading">Languages Spoken:</h3>
                                      <p className="datadivpara">{item.DoctorLanguagesSpoken}</p>
                                    </>

                                  )}


                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-profile"
                              role="tabpanel"
                              aria-labelledby="pills-profile-tab"
                            >
                              <div className="dbdata">
                                <div className="prodataDIV">


                                  {item.DoctorMemberships && (

                                    <>
                                      <h3 className="datadivhiading">Memberships</h3>
                                      <div className="redanimatedloopbox">
                                        {item.DoctorMemberships.split('||').map((experience, expIndex) => (
                                          <div key={expIndex} className="animatedheading">
                                            <span className="roundred" />
                                            {experience}
                                          </div>
                                        ))}
                                      </div>
                                    </>

                                  )}


                                </div>
                                <div className="prodataDIV">


                                  {item.DoctorCertifications && (

                                    <>
                                      <h3 className="datadivhiading">Certifications</h3>
                                      <div className="redanimatedloopbox">
                                        {item.DoctorCertifications.split('||').map((experience, expIndex) => (
                                          <div key={expIndex} className="animatedheading">
                                            <span className="roundred" />
                                            {experience}
                                          </div>
                                        ))}
                                      </div>
                                    </>

                                  )}


                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-contact"
                              role="tabpanel"
                              aria-labelledby="pills-contact-tab"
                            >
                              <div className="dbdata">
                                <div className="prodataDIV">


                                  {item.DoctorPublications && (

                                    <>
                                      <h3 className="datadivhiading">Publications</h3>
                                      <div className="redanimatedloopbox">
                                        {item.DoctorPublications.split('||').map((experience, expIndex) => (
                                          <div key={expIndex} className="animatedheading">
                                            <span className="roundred" />
                                            {experience}
                                          </div>
                                        ))}
                                      </div>
                                    </>

                                  )}


                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



              ))

            )

          )}




        </div>
      </div>
      {/* common heading div end*/}
    </>



  );


};



export default Doctorprofile;

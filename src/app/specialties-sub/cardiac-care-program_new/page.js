
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import '../specialityviewpagecommon.css'
import './cardiac-seprfile.css'



const Dentistry = () => {



  //---- for api data


  useEffect(() => {

    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll

    // api for profile





    // api for profile



  }, []);




  return (


    <>
      <title>Specialty</title>

      {/* common heading div start*/}
      {/* <div className="parentcontainerwhi">
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
      </div> */}
      {/* common heading div end*/}
      {/* common heading banner start */}
      <div className="mainheadingbanner">
        <div className="mainheadingbandiv">
          <Image width={2000} height={400} src="/commonimages/cardiac-care-program.jpeg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}



      {/* specialties  start*/}





      {/* <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">

            <div className="spectitleimgbox">
              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Cardiology</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  Our Cardiology services involve the diagnosis and management of a wide range of cardiovascular conditions. Experienced cardiologists conduct thorough evaluations, recommend appropriate interventions, and provide ongoing care to patients with heart-related issues.
                </p>

              </div>
            </div>


          </div>
        </div>
      </div> */}



      {/*Hide for approval*/}

      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">


            <div className="spectitleimgbox">

              <div className="">
                <div className="spectitle Specialtiesheadgr">
                  <h1 className="spetileh2gr">Cardiac Excellence, Personalized Care</h1>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  Join our Cardiac Care Program for a life-changing experience. Prioritize your heart health and embrace vitality.
                </p>
              </div>

            </div>

            <div className="spectitleimgbox">

              <div className="">

                <div className="spectitle Specialtiesheadgr">
                  <h2 className="spetileh2gr">UNDERSTANDING THE CARDIAC CARE PROGRAM</h2>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  The Cardiac Care Program, is a thoughtfully crafted cardiovascular initiative aimed at improving heart health and overall well-being. This program seamlessly integrates tailored exercises, informative educational sessions, and supportive counseling. Our goal is to empower you to rebuild your strength, mitigate risk factors, and elevate your overall sense of well-being.
                </p>


              </div>

            </div>



          </div>
        </div>
      </div>



      {/* sub specialties start*/}
      <div className="parentcontainerwhi specipgGRY">
        <div className="customcontainer">
          <div className="specsingleparnGra">
            <div className="spectitlegrcont">

              <div>

                <p className="specilpara">
                  <b> Cardiac Care Program offers two specialized tracks:</b>
                </p>


              </div>

              <div className="spectitlegrcont2">


                <div className="testimgboxcont" id="CardiacWellness">
                  <Link href="/specialties-sub/cardiac-care-program#CardiacWellness">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/cardic_programimg/Cardiac Wellness.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Cardiac Wellness</p>
                    </div>
                  </Link>
                </div>
                <div className="testimgboxcont">
                  <Link href="/specialties-sub/cardiac-care-program#CardiacRehabilitation">
                    <div className="testimgboxcot1">
                      <Image width={400} height={400} src="/cardic_programimg/Cardiac rehabilitation.jpg" alt="img" />
                    </div>
                    <div className="testimgboxcot2">
                      <p className="testimgtitle">Cardiac Rehabilitation</p>
                    </div>
                  </Link>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sub specialties end*/}




      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">


            <div className="spectitleimgbox">

              <div className="">

                <div className="spectitle Specialtiesheadgr">
                  <h2 className="spetileh2gr">Cardiac Wellness</h2>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  <b>Who can benefit from this program?</b>
                </p>
                <p className="specilpara">
                  This program is suitable for individual with:
                </p>

              </div>

            </div>


          </div>
        </div>
      </div>



      {/* sub specialties start*/}
      <div className="parentcontainerwhi specipgGRY">
        <div className="customcontainer">
          <div className="specsingleparnGra">
            <div className="spectitlegrcont">


              <div className="spectitlegrcont2">


                <div className="cardicproicon">



                  <div className="cardicproiconbox">
                    <div className="cardicproiconboxbg">
                      <div className="cardicproiconimg">
                        <Image width={400} height={400} src="/cardic_programimg/Hypertension.png" alt="icon" />
                      </div>
                      <h2 className="cardicproiconhead">Hypertension</h2>
                    </div>
                  </div>
                  <div className="cardicproiconbox">
                    <div className="cardicproiconboxbg">
                      <div className="cardicproiconimg">
                        <Image width={400} height={400} src="/cardic_programimg/Obesity.png" alt="icon" />
                      </div>
                      <h2 className="cardicproiconhead">Obesity</h2>
                    </div>
                  </div>
                  <div className="cardicproiconbox">
                    <div className="cardicproiconboxbg">
                      <div className="cardicproiconimg">
                        <Image width={400} height={400} src="/cardic_programimg/Diabetics.png" alt="icon" />
                      </div>
                      <h2 className="cardicproiconhead">Diabetes</h2>
                    </div>
                  </div>
                  <div className="cardicproiconbox">
                    <div className="cardicproiconboxbg">
                      <div className="cardicproiconimg">
                        <Image width={400} height={400} src="/cardic_programimg/High cholestrol.png" alt="icon" />
                      </div>
                      <h2 className="cardicproiconhead">High Cholesterol</h2>
                    </div>
                  </div>
                  <div className="cardicproiconbox">
                    <div className="cardicproiconboxbg">
                      <div className="cardicproiconimg">
                        <Image width={400} height={400} src="/cardic_programimg/Family-history.png" alt="icon" />
                      </div>
                      <h2 className="cardicproiconhead">Family History of Cardiac Diseases</h2>
                    </div>
                  </div>



                </div>



              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sub specialties end*/}

      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">



            <div className="spectitleimgbox">

              <div className="">


                <p className="specilpara mt-2">
                  <b>Why Choose this Program?</b>
                </p>

                <ol className="specULbullet">

                  <li>
                    <p className="specilpara">
                      <b>Reduced Risk of Cardiovascular Diseases:</b> Lowers the risk of developing cardiovascular diseases like heart attacks and strokes.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Lower Blood Pressure:</b> Contribute to maintaining optimal blood pressure levels, reducing the strain on the heart and lowering the risk of hypertension-related complications.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Improved Cholesterol Levels:</b> Positively impact cholesterol levels, lowering the risk of plaque buildup in arteries and improving overall heart function.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Weight Management:</b> Reduce the risk of obesity-related heart issues. Maintaining a healthy weight is crucial for heart health.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Enhanced Blood Sugar Control:</b> Reduce the risk of diabetes related heart complications.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara" id="CardiacRehabilitation">
                      <b>Promotion of Healthy Eating Habits:</b> Choosing nutrient-rich foods and limiting the intake of unhealthy fats and sugars supports heart health and overall well-being.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Increased Physical Activity:</b> Regular exercise strengthens the heart, improves circulation, and helps maintain a healthy weight. It also contributes to better overall cardiovascular fitness.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Stress Management:</b> Managing stress positively affects heart health, as chronic stress is linked to cardio vascular issues.
                    </p>
                  </li>

                </ol>


              </div>

            </div>


            <div className="spectitleimgbox">

              <div className="">

                <div className="spectitle Specialtiesheadgr">
                  <h2 className="spetileh2gr">Cardiac Rehabilitation</h2>
                  <span className="headbordergr" />
                </div>
                <p className="specilpara">
                  <b>Who can benefit from this program?</b>
                </p>
                <p className="specilpara">
                  People with following conditions are eligible to enroll for this program:
                </p>


              </div>

            </div>



          </div>
        </div>
      </div>



      {/* sub specialties start*/}
      <div className="parentcontainerwhi specipgGRY">
        <div className="customcontainer">
          <div className="specsingleparnGra">
            <div className="spectitlegrcont">


              <div className="spectitlegrcont2">


                <div className="cardicproicon">



                  <div className="cardicproiconbox">
                    <div className="cardicproiconboxbg">
                      <div className="cardicproiconimg">
                        <Image width={400} height={400} src="/homeimg/cardiac_science.png" alt="icon" />
                      </div>
                      <h2 className="cardicproiconhead">Heart Attack</h2>
                    </div>
                  </div>
                  <div className="cardicproiconbox">
                    <div className="cardicproiconboxbg">
                      <div className="cardicproiconimg">
                        <Image width={400} height={400} src="/homeimg/cardiac_science.png" alt="icon" />
                      </div>
                      <h2 className="cardicproiconhead">Valve Surgery</h2>
                    </div>
                  </div>
                  <div className="cardicproiconbox">
                    <div className="cardicproiconboxbg">
                      <div className="cardicproiconimg">
                        <Image width={400} height={400} src="/cardic_programimg/Coronary Angioplasty.png" alt="icon" />
                      </div>
                      <h2 className="cardicproiconhead">Coronary Angioplasty</h2>
                    </div>
                  </div>
                  <div className="cardicproiconbox">
                    <div className="cardicproiconboxbg">
                      <div className="cardicproiconimg">
                        <Image width={400} height={400} src="/homeimg/cardiac_science.png" alt="icon" />
                      </div>
                      <h2 className="cardicproiconhead">Coronary Artery Bypass Surgery</h2>
                    </div>
                  </div>
            


                </div>



              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sub specialties end*/}



      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="specsingleparn">




            <div className="spectitleimgbox">

              <div className="">

                <p className="specilpara">
                  <b>Why Choose this Program?</b>
                </p>

                <ol className="specULbullet">

                  <li>
                    <p className="specilpara">
                      <b>Strengthening Your Heart and Body:</b> Engaging in cardiac rehabilitation helps enhance the strength of your heart and body, aiding in recovery after a heart attack.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Building Healthier Habits:</b> Adopting heart-friendly habits, including increased physical activity, quitting smoking, and following a nutritious diet
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Stress Management:</b> Cardiac rehabilitation provides tools and strategies to manage stress, supporting your heart health.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Boosting Energy and Strength:</b> Gradual increases in energy and strength through rehabilitation make daily activities like carrying groceries or climbing stairs easier.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Medication Adherence:</b> Cardiac rehab encourages consistent use of prescribed medications, lowering the risk of future heart problems.
                    </p>
                  </li>
                  <li>
                    <p className="specilpara">
                      <b>Preventing Future Complication:</b> Studies indicate that partici-pating in cardiac rehabilitation significantly reduces the likelihood of death in the 5 years following a heart attack or bypass surgery by about 35%.
                    </p>
                  </li>

                </ol>

              </div>

            </div>


            <div className="spectitleimgbox">

              <div className="">

                <div className="spectitle Specialtiesheadgr">
                  <h2 className="spetileh2gr">EXPLORE THE OFFERINGS OF THE 5-WEEK PROGRAM (WITH 2 SESSIONS WEEKLY)</h2>
                  <span className="headbordergr" />
                </div>

                <p className="specilpara">
                  This program is tailored to the individual needs and health status of each participant. Medical professionals assess the patient&apos;s condition, risk factors, and goals to create a personalized rehabilitation plan. This ensures that the program is suitable and effective for each participant. It includes:
                </p>


              </div>

            </div>


            <div className="spectitleimgbox mt-2">

              <div className="">


                <div className="spectitleimgbox">
                  <div className="spectitleimgbox1">
                    <Image width={400} height={400} src="/cardic_programimg/Experts Consultation.jpg" alt="Cathlab" />
                  </div>
                  <div className="spectitleimgbox2">
                    <div className="spectitle Specialtiesheadgr">
                      <h2 className="spetileh2gr">Experts Consultation</h2>
                      <span className="headbordergr" />
                    </div>

                    <p className="specilpara">
                      Experience a personalized, one-on-one session with a Cardiologist and a Cardiac Rehab Specialist.
                    </p>

                  </div>
                </div>


                <div className="spectitleimgbox mt-5">
                  <div className="spectitleimgbox1">
                    <Image width={400} height={400} src="/cardic_programimg/Workout Session.jpg" alt="Cathlab" />
                  </div>
                  <div className="spectitleimgbox2">
                    <div className="spectitle Specialtiesheadgr">
                      <h2 className="spetileh2gr">Workout Sessions</h2>
                      <span className="headbordergr" />
                    </div>

                    <p className="specilpara">
                      (No. of Sessions: 10) Enhance your well-being with our 30-40 minute exercise sessions. We begin with a warm-up, followed by a mix of muscle and heart-targeted exercises. The session concludes with a gradual cool down and relaxation activities such as deep breathing and gentle stretches for a holistic and enjoyable experience.
                    </p>

                  </div>
                </div>


                <div className="spectitleimgbox mt-5">
                  <div className="spectitleimgbox1">
                    <Image width={400} height={400} src="/cardic_programimg/Education Session.jpg" alt="Cathlab" />
                  </div>
                  <div className="spectitleimgbox2">
                    <div className="spectitle Specialtiesheadgr">
                      <h2 className="spetileh2gr">Education Sessions</h2>
                      <span className="headbordergr" />
                    </div>

                    <p className="specilpara">
                      (No. of Sessions: 10) Gain Insights, Tips, and Strategies on Risk Management, Healthy Diets, and Stress Management in Our Educational Session.
                    </p>

                    <ul>

                      <li>
                        <p className="specilpara">
                          <b>Risk Management</b> After workout session, dedicate 30 minutes in learning about heart risks-hypertension, diabetes, and physical inactivity.
                        </p>
                      </li>

                      <li>
                        <p className="specilpara">
                          <b>Dietetics & Nutrition</b>  These sessions empower you with skills for a heart-healthy diet, covering food choices, salt control, and balanced meals, promoting long-term cardiovascular well-being.
                        </p>
                      </li>

                      <li>
                        <p className="specilpara">
                          <b>Stress Management</b>  Learn effective stress management strategies for your cardiac wellness journey through our educational sessions.
                        </p>
                      </li>

                    </ul>


                  </div>
                </div>


                {/* <div className="spectitleimgbox mt-5">
                  <div className="spectitleimgbox1">
                    <Image width={400} height={400} src="/cardic_programimg/Risk Management.jpg" alt="Cathlab" />
                  </div>
                  <div className="spectitleimgbox2">
                    <div className="spectitle Specialtiesheadgr">
                      <h2 className="spetileh2gr">Risk Management</h2>
                      <span className="headbordergr" />
                    </div>

                    <p className="specilpara">
                      After workout session, dedicate 30 minutes in learning about heart risks-hypertension, diabetes, and physical inactivity.
                    </p>

                  </div>
                </div>

                <div className="spectitleimgbox mt-5">
                  <div className="spectitleimgbox1">
                    <Image width={400} height={400} src="/cardic_programimg/Diabetics and nutrition.jpg" alt="Cathlab" />
                  </div>
                  <div className="spectitleimgbox2">
                    <div className="spectitle Specialtiesheadgr">
                      <h2 className="spetileh2gr">Dietetics & Nutrition</h2>
                      <span className="headbordergr" />
                    </div>

                    <p className="specilpara">
                      These sessions empower you with skills for a heart-healthy diet, covering food choices, salt control, and balanced meals, promoting long-term cardiovascular well-being.
                    </p>

                  </div>
                </div>

                <div className="spectitleimgbox mt-5">
                  <div className="spectitleimgbox1">
                    <Image width={400} height={400} src="/cardic_programimg/Stress management.jpg" alt="Cathlab" />
                  </div>
                  <div className="spectitleimgbox2">
                    <div className="spectitle Specialtiesheadgr">
                      <h2 className="spetileh2gr">Stress Management</h2>
                      <span className="headbordergr" />
                    </div>

                    <p className="specilpara">
                      Learn effective stress management strategies for your cardiac wellness journey through our educational sessions.
                    </p>

                  </div>
                </div> */}



              </div>

            </div>





            <div className="mt-5">


              <p className="specilpara">
                Experience personalized care and guidance throughout the program to enhance heart health and overall well-being.
              </p>
              <p className="specilpara">
                To enroll or get details about cardiac wellness rehabilitation, consult your cardiologist / consultant for eligibility assessment and necessary referrals.
              </p>
              <p className="specilpara">
                To Know More about Cardiac Care Program & Registration Call On <span><Link className="cardiac-care-programCTA" href="tel:+919075001165">+91 90750 01165</Link></span>
              </p>


            </div>



          </div>
        </div>
      </div>




      {/* specialties end*/}
    </>




  );


};



export default Dentistry;

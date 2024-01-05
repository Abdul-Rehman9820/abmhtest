

"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './leave-a-feedback-form.css'


const Feedbackform = () => {



  const [uname, setUname] = useState("");
  const [uphone, setPhone] = useState("");
  const [uemail, setUemail] = useState("");
  const [ulocation, setLocation] = useState("");
  const [umessage, setMessage] = useState("");

  const [userdate, setDate] = useState("");

  const [selecteSubject, setSelectedSubject] = useState("");
  const [selecteTopic, setSelectedTopic] = useState("");

  const [prescription, setPrescription] = useState("");

  const [apiResponse, setApiResponse] = useState('');


  const handleChange = (event) => {

    const { name, value } = event.target;
    if (name === "username") {
      setUname(value);
    } else if (name === "userPhone") {
      setPhone(value);
    } else if (name === "usermail") {
      setUemail(value);
    } else if (name === "userlocation") {
      setLocation(value);
    } else if (name === "usermessage") {
      setMessage(value);
    }else if (name === "userdate") {
      setDate(value);
    } else if (name === "subject") {
      setSelectedSubject(value);
    } else if (name === "topic") {
      setSelectedTopic(value);
    }

  };


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPrescription(file);
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(uname);
    console.log(uphone);
    console.log(uemail);
    console.log(ulocation);
    console.log(umessage);
    console.log(userdate);
    console.log(selecteSubject);
    console.log(selecteTopic);
    console.log(prescription);

    // Prepare form data
    const formData = new FormData();
    formData.append('username', uname);
    formData.append('userPhone', uphone);
    formData.append('usermail', uemail);
    formData.append('userlocation', ulocation);
    formData.append('usermessage', umessage);
    formData.append('userdate', userdate);
    formData.append('selecteSubject', selecteSubject);
    formData.append('selecteTopic', selecteTopic);
    formData.append('prescription', prescription);

    // API request
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_Web_Domin}/api/sendDiagnosticBook`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        setApiResponse('Something went wrong');
      } else {
        const result = await response.json();
        console.log(result);

        if (result.message === 'mail send') {
          setApiResponse('Mail sent successfully');
          // Clear form fields on successful submission
          setUname('');
          setPhone('');
          setUemail('');
          setLocation('');
          setMessage('');
          setDate('');
        } else {
          setApiResponse('Something went wrong');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setApiResponse('Something went wrong');
    }
  };

  useEffect(() => {

    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll


    var subjectObject = {

      "Radiodiagnosis & Imaging Services": {
        "CT Scan": [],
        "MRI": [],
        "Mammography": [],
        "Ultrasound": [],
        "Colour Doppler": [],
        "Bone Densitometry": [],
        "X-Ray & Fluoroscopy": [],
      },
      "Laboratory Medicine": {
        "Microbiology": [],
        "Histopathology": [],
        "Onco Histopathology": [],
        "Biochemistry": [],
        "Haematology": [],
        "Microbiology & Serology": [],
        "Pathology & Cyto-pathology": [],
        "Molecular Biology": [],
      },
      "Nuclear Medicine": {
        "GAMMA CAMERA": [],
        "PET - CT": [],
      },
      "Pulmonory Medicine": {
        "Bronchoscopy": [],
        "Spirometery": [],
        "Pulmonary Function Test": [],
        "Sleep Test - OSA Test": [],
        "Allergy Test": [],
        "EBUS": [],
      },
      "Gastroscience": {
        "Endoscopy": [],
        "ERCP": [],
        "EUS (Endoscopic Ultrasound)": [],
      },
      "Dentistry": {
        "CBCT": [],
        "OPG": [],
        "Dental Prothesis": [],
      },
      "Home Care": {
        "Sample Collection": [],
        "Medicine Delivery": [],
        "Nursing Care": [],
        "Physio Care": [],
        "Home Dialysis": [],
      },
      "NonInvasive Cardiac Diagnostics": {
        "ECG": [],
        "2D/3D ECHO Cardiography": [],
        "TMT / Stress Test": [],
        "Holter Monitor": [],
        "TEE": [],
        "EP": [],
        "Dobutamine Stress Echo": [],
        "HULT Head Up Tilt Test": [],
      },
      "Neuroscience": {
        "EEG / EMG / NCV": [],
        "Video EEG": [],
      },
      "Otolaryngology (ENT)": {
        "Audiometry / Speech Therapy / ERA": [],
      },
      "Urology": {
        "Urodynamic Studies": [],
      },
      "Physiotheraphy": {
        "Occupational Therapy": [],
        "Physiotherapy": [],
        "Speech and Language Therapy": [],
        "Cardiac Rehabilitation": [],
        "Hydrotherapy": [],
        "Neuro Rehabilitation": [],
      },
      "Cath Lab": {
        "Cath Lab": [],
      },
      "Ambulance Services": {
        "Ambulance Services": [],
      },
      "Clinical Pharmacy": {
        "Clinical Pharmacy": [],
      },
      "Pharmacy": {
        "Pharmacy": [],
      },
      "Anaesthesiology": {
        "General Anesthesia": [],
        "Cardiac Anesthesia": [],
        "Liver Anesthesia": [],
        "Pediatric Anesthesia": [],
        "Neuro Anesthesia": []
      },
      "Transfusion Medicine": {
        "Blood Centre": [],
      }



    }

    var subjectSel = document.getElementById("subject");
    var topicSel = document.getElementById("topic");

    for (var x in subjectObject) {
      subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }

    subjectSel.onchange = function () {
      topicSel.length = 1; // Reset Topics dropdown
      for (var y in subjectObject[this.value]) {
        topicSel.options[topicSel.options.length] = new Option(y, y);
      }
    }



  }, []);




  return (


    <>
      <title>Book Diagnostic Services</title>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / Diagnostic Services / <span className="breadcrumbsactive">Book Diagnostic Services</span>
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
          <Image width={2000} height={400} src="/commonimages/commbanDiagnostic-Services.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}
      {/* contact us pg start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="contactuscont">
            <section className="Book_Wellness_Packages">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="well-book-contact_field">
                      <h3 className="well-book-head">Book Diagnostic Services</h3>

                      <form name="form1" id="form1" onSubmit={handleSubmit}>
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          placeholder="Your Name"
                          value={uname}
                          onChange={handleChange}
                          required
                        />
                        <input
                          type="text"
                          className="form-control"
                          name="userPhone"
                          placeholder="Your Phone"
                          value={uphone}
                          onChange={handleChange}
                          required
                        />
                        <input
                          type="email"
                          className="form-control"
                          name="usermail"
                          placeholder="Your Email"
                          value={uemail}
                          onChange={handleChange}
                          required
                        />
                        <input
                          type="text"
                          className="form-control"
                          name="userlocation"
                          placeholder="Your Location"
                          value={ulocation}
                          onChange={handleChange}
                          required
                        />
                        <textarea
                          name="usermessage"
                          className="form-control"
                          placeholder="Your Message"
                          value={umessage}
                          onChange={handleChange}
                          required
                        />
                        <input
                            type="date"
                            className="form-control"
                            name="userdate"
                            placeholder="Your Date"
                            value={userdate}
                            onChange={handleChange}
                            required
                          />

                        <select name="subject" id="subject" className="form-control" onChange={handleChange} required>
                          <option value="" selected="selected">
                            Select Diagnostic Category
                          </option>
                        </select>

                        <select name="topic" id="topic" className="form-control" onChange={handleChange} required>
                          <option value="" selected="selected">
                            Select Diagnostic Service
                          </option>
                        </select>

                        <div className="form-group mt-2">
                          <label className="digplaceho" htmlFor="Prescription">Upload Prescription:</label>
                          <input
                            type="file"
                            className="form-control form-group lessmargin"
                            name="Prescription"
                            accept=".pdf, .jpg, .png"
                            onChange={handleFileChange}
                
                          />
                        </div>

                        <button type="submit" id="submitbtb" className="contact_form_submit">Submit</button>

                      </form>


                      <div id="apirespose" className="mt-2">{apiResponse}</div>


                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
      {/* contact us pg end*/}
    </>



  );


};



export default Feedbackform;

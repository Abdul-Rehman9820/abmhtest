

"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './work-with-us-form.css'


const Workcontactus = () => {



  const [uname, setUname] = useState("");
  const [uphone, setPhone] = useState("");
  const [uemail, setUemail] = useState("");
  const [ulocation, setLocation] = useState("");
  const [umessage, setMessage] = useState("");
  const [resume, setResume] = useState(null);


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
    }

  };


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setResume(file);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(uname);
    console.log(uphone);
    console.log(uemail);
    console.log(ulocation);
    console.log(umessage);
    console.log(resume);

    // Prepare form data
    const formData = new FormData();
    formData.append('username', uname);
    formData.append('userPhone', uphone);
    formData.append('usermail', uemail);
    formData.append('userlocation', ulocation);
    formData.append('usermessage', umessage);
    formData.append('resume', resume);

    // API request
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_Web_Domin}/api/mail_apis/sendmailworkwithus`,
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
          setResume(null);
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

  }, []);



  return (


    <>
      <title>Work with Us</title>
      <link rel="canonical" href="https://adityabirlahospital.com/work-with-us-form" />
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <Link className="breadcrumbsNotactive" href="/">Home</Link> / <span className="breadcrumbsactive">Work with US</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* common heading div end*/}
      {/* common heading banner start */}
      <div className="mainheadingbanner">
        <div className="mainheadingbandiv">
          <Image width={2000} height={400} src="/commonimages/commworkwithus.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}
      {/* contact us pg start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="contactforwork">
            <section className="contact_us">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="contact_inner">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="contact_form_inner">
                            <div className="contact_fieldforwork">
                              <h3 className="mb-4">Work with Us</h3>


                              <form onSubmit={handleSubmit}>
                                <input
                                  type="text"
                                  className="form-control form-group"
                                  name="username"
                                  placeholder="Name"
                                  value={uname}
                                  onChange={handleChange}
                                  required
                                />
                                <input
                                  type="text"
                                  className="form-control form-group"
                                  name="userPhone"
                                  placeholder="Phone"
                                  value={uphone}
                                  onChange={handleChange}
                                  required
                                />
                                <input
                                  type="email"
                                  className="form-control form-group"
                                  name="usermail"
                                  placeholder="Email"
                                  value={uemail}
                                  onChange={handleChange}
                                  required
                                />
                                <input
                                  type="text"
                                  className="form-control form-group"
                                  name="userlocation"
                                  placeholder="Location"
                                  value={ulocation}
                                  onChange={handleChange}
                                  required
                                />
                            
                                <div className="form-group mt-2">
                                  <label className="" htmlFor="">Upload Resume:</label>
                                  <input
                                    type="file"
                                    className="form-control form-group"
                                    name="resume"
                                    accept=".pdf, .jpg, .png"
                                    onChange={handleFileChange}
                                    required
                                  />
                                </div>

                                <textarea
                                  name="usermessage"
                                  className="form-control form-group"
                                  placeholder="Message"
                                  value={umessage}
                                  onChange={handleChange}                             
                                />


                                <button type="submit" id="submitbtb" className="contact_form_submit">Submit</button>
                              </form>

                              <div id="apirespose">{apiResponse}</div>


                            </div>
                          </div>
                        </div>

                      </div>

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



export default Workcontactus;

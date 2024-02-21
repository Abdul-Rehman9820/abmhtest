

"use client";

import {  useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './contact-us.css'


const Contactus = () => {



  const [uname, setUname] = useState("");
  const [uphone, setPhone] = useState("");
  const [uemail, setUemail] = useState("");
  const [ulocation, setLocation] = useState("");
  const [umessage, setMessage] = useState("");


  const [apiResponse, setApiResponse] = useState('');



  const handleChange = (event) => {

      const { name, value } = event.target;
      if (name === "username") {
          setUname(value);
      } else if (name === "userPhone") {
          setPhone(value);
      }else if (name === "usermail") {
          setUemail(value);
      }else if (name === "userlocation") {
          setLocation(value);
      }else if (name === "usermessage") {
          setMessage(value);
      }

  };

  const handleSubmit = async (event) => {
      event.preventDefault();


     var submitbutton = document.getElementById('submitbtb');


     submitbutton.disabled = true ; // hide button to duble click
  

      console.log(uname);
      console.log(uphone);
      console.log(uemail);
      console.log(ulocation);
      console.log(umessage);


   // api level code 
      const response = await fetch(`${process.env.NEXT_PUBLIC_Web_Domin}/api/sendmail`, {
          method: "POST",
          body: JSON.stringify({
              username: uname,
              userPhone: uphone,
              usermail: uemail,
              userlocation: ulocation,
              usermessage: umessage,
          }),
        });


        if (!response.ok) {

          // throw new Error("Network response was not ok");

          setApiResponse('Something went wrong');

          submitbutton.disabled = false ;

        }else{

                  const result = await response.json();
      
                  console.log(result);
      
                  if(result.message == "mail send"){


                      setUname("");
                      setPhone("");
                      setUemail("");
                      setLocation("");
                      setMessage("");  
                      
                      
      
                  submitbutton.disabled = false ;

                  setApiResponse('Mail sent successfully');
      
                  }else{
      
                  submitbutton.disabled = false ;

                  setApiResponse('Something went wrong');
      
                  }
      

        }
     // api level code 


  
  };


  useEffect(() => {

    
    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll

  }, []);




  return (


    <>
   <title>Contact Us</title>
    {/* common heading div start*/}
    <div className="parentcontainerwhi">
      <div className="customcontainer">
        <div className="commonheaddiv">
          <div className="commonheadcontainer">
            <div className="breadcrumbs">
              <Link className="breadcrumbsNotactive" href="/">Home</Link> / <span className="breadcrumbsactive">Contact Us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* common heading div end*/}
    {/* common heading banner start */}
    <div className="mainheadingbanner">
      <div className="mainheadingbandiv">
             <Image width={2000} height={400} src="/commonimages/commcontacusnew.jpg" alt="icon" />
      </div>
    </div>
    {/* common heading banner end */}
    {/* contact us pg start*/}
    <div className="parentcontainerwhi">
      <div className="customcontainer">
        <div className="contactuscont">
          <section className="contact_us">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="contact_inner">
                    <div className="row">
                      <div className="col-md-10">
                        <div className="contact_form_inner">
                          <div className="contact_field">
                            <h3>Contact Us</h3>
                            <p>
                              Feel Free to contact us any time. We will get back
                              to you as soon as we can!.
                            </p>
                            

                            <form onSubmit={handleSubmit}>
                                  <input
                                      type="text"
                                      className="form-control form-group"
                                      name="username"
                                      placeholder="Your Name"
                                      value={uname}
                                      onChange={handleChange}
                                      required
                                  />
                                  <input
                                      type="text"
                                      className="form-control form-group"
                                      name="userPhone"
                                      placeholder="Your Phone"
                                      value={uphone}
                                      onChange={handleChange}
                                      required
                                  />
                                  <input
                                      type="email"
                                      className="form-control form-group"
                                      name="usermail"
                                      placeholder="Your Email"
                                      value={uemail}
                                      onChange={handleChange}
                                      required
                                  />
                                  <input
                                      type="text"
                                      className="form-control form-group"
                                      name="userlocation"
                                      placeholder="Your Location"
                                      value={ulocation}
                                      onChange={handleChange}
                                      required
                                  />
                                  <textarea
                                      name="usermessage"
                                      className="form-control form-group"
                                      placeholder="Your Message"
                                      value={umessage}
                                      onChange={handleChange}
                                      required
                                  />
                                  <button type="submit" id="submitbtb" className="contact_form_submit">Submit</button>
                            </form>

                            <div id="apirespose" className="mt-2">{apiResponse}</div>

                            
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="right_conatct_social_icon d-flex align-items-end"></div>
                      </div>
                    </div>
                    <div className="contact_info_sec">
                      <h4>Contact Info</h4>
                      <div className="d-flex info_single align-items-center">
                        <Image width={400} height={400} src="/contactus/phone-icon.png" className="conticon" alt="img" />
                        <span>+91 98811 23006</span>
                      </div>
                      <div className="d-flex info_single align-items-center">
                        <Image width={400} height={400} src="/contactus/email-icon.png" className="conticon" alt="img" />
                        <span>corporate.desk@adityabirla.com</span>
                      </div>
                      <div className="d-flex info_single align-items-center">
                        <Image width={400} height={400} src="/contactus/addr-icon.png" className="conticon" alt="img" />
                        <span>
                          ADITYA BIRLA MEMORIAL HOSPITAL, ADITYA BIRLA MARG,
                          CHINCHWAD, PUNE - 411033, MAHARASHTRA , INDIA.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="map_sec">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="map_inner">
                    <div className="map_bind">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3780.8522098433677!2d73.774776!3d18.625716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b99df46ea253%3A0xe83013cd8eda1fc1!2sAditya%20Birla%20Memorial%20Hospital!5e0!3m2!1sen!2sin!4v1699617306386!5m2!1sen!2sin"
                        width="100%"
                        height={450}
                        frameBorder={0}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex={0}
                      />
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



export default Contactus;

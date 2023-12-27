

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

  const handleSubmit = async (event) => {
    event.preventDefault();


    var messagebox = document.getElementById('apirespose');
    var submitbutton = document.getElementById('submitbtb');


    submitbutton.disabled = true; // hide button to duble click
    messagebox.innerHTML = '';  // do empty for resubmit

    console.log(uname);
    console.log(uphone);
    console.log(uemail);
    console.log(ulocation);
    console.log(umessage);



    // api level code 
    const response = await fetch(`${process.env.NEXT_PUBLIC_Web_Domin}/api/sendmailfeedbackform`, {
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

      messagebox.innerHTML = 'Something went wrong';

      submitbutton.disabled = false;

    } else {

      const result = await response.json();

      console.log(result);

      if (result.message == "mail send") {


        setUname("");
        setPhone("");
        setUemail("");
        setLocation("");
        setMessage("");



        submitbutton.disabled = false;

        messagebox.innerHTML = 'Mail send successfully';

      } else {

        submitbutton.disabled = false;

        messagebox.innerHTML = 'Something went wrong';

      }


    }
    // api level code 



  };


  useEffect(() => {


    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll

  }, []);




  return (


    <>
      <title>Leave A Feedback</title>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                   Leave A Feedback
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
          <Image width={2000} height={400} src="/commonimages/commdummybanner.jpg" alt="icon" />
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
                      <h3 className="well-book-head">Leave A Feedback</h3>
                      
                      <form onSubmit={handleSubmit}>
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

                        <button type="submit" id="submitbtb" className="contact_form_submit">Submit</button>
                      </form>

                      <div id="apirespose"></div>


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

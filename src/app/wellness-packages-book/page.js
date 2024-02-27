

"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './wellness-packages-book.css'


const Contactus = () => {



  const [uname, setUname] = useState("");
  const [uphone, setPhone] = useState("");
  const [uemail, setUemail] = useState("");
  const [ulocation, setLocation] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  const [userdate, setDate] = useState("");

  const [umessage, setMessage] = useState("");

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
    } else if (name === "userdate") {
      setDate(value);
    } else if (name === "userSelect") {
      setSelectedOption(value);
    }

  };

  const handleSubmit = async (event) => {
    event.preventDefault();



    var submitbutton = document.getElementById('submitbtb');


    submitbutton.disabled = true; // hide button to duble click


    console.log(uname);
    console.log(uphone);
    console.log(uemail);
    console.log(ulocation);
    console.log(ulocation);
    console.log(userdate);
    console.log(selectedOption);


    // api level code 
    const response = await fetch(`${process.env.NEXT_PUBLIC_Web_Domin}/api/mail_apis/SendBookWellnessApi`, {
      method: "POST",
      body: JSON.stringify({
        username: uname,
        userPhone: uphone,
        usermail: uemail,
        userlocation: ulocation,
        usermessage: umessage,
        userdate: userdate,
        selectedOption: selectedOption,
      }),
    });


    if (!response.ok) {

      // throw new Error("Network response was not ok");

      setApiResponse('Something went wrong');

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
        setDate("");



        submitbutton.disabled = false;

        setApiResponse('Mail sent successfully');

      } else {

        submitbutton.disabled = false;

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
      <title>Book Wellness Packages</title>
      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <Link className="breadcrumbsNotactive" href="">Patient Care </Link> / <span className="breadcrumbsactive">Book Wellness Packages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* common heading div end*/}
      {/* common heading banner start */}
      {/* <div className="mainheadingbanner">
        <div className="mainheadingbandiv">
          <Image width={2000} height={400} src="/commonimages/wellness-packages-banner.jpg" alt="icon" />
        </div>
      </div> */}
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
                      <h3 className="well-book-head">Book Wellness Packages</h3>

                      <form onSubmit={handleSubmit}>

                        <div className="flexinput">

                          <div className="inputboxflex">

                            <input
                              type="text"
                              className="form-control"
                              name="username"
                              placeholder="Name"
                              value={uname}
                              onChange={handleChange}
                              required
                            />

                          </div>

                          <div className="inputboxflex">

                            <input
                              type="text"
                              className="form-control"
                              name="userPhone"
                              placeholder="Phone"
                              value={uphone}
                              onChange={handleChange}
                              required
                            />

                          </div>

                        </div>

                        <div className="flexinput">

                          <div className="inputboxflex">

                            <input
                              type="email"
                              className="form-control"
                              name="usermail"
                              placeholder="Email"
                              value={uemail}
                              onChange={handleChange}
                              required
                            />

                          </div>

                          <div className="inputboxflex">

                            <input
                              type="text"
                              className="form-control"
                              name="userlocation"
                              placeholder="Location"
                              value={ulocation}
                              onChange={handleChange}
                              required
                            />

                          </div>

                        </div>



                        <input
                          type="date"
                          className="form-control"
                          name="userdate"
                          placeholder="Date"
                          value={userdate}
                          onChange={handleChange}
                          required
                        />

                        <div className="form-floating">
                          <select
                            className="form-select form-control"
                            id="floatingSelect"
                            aria-label="Floating label select example"
                            name="userSelect" // Add a name to the select element
                            value={selectedOption} // Set the value attribute to the state variable
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled selected>
                              Options
                            </option>
                            <option value="Coronary Risk">Coronary Risk</option>
                            <option value="Executive Health">Executive Health</option>
                            <option value="Male Senior Citizen (60+)">Male Senior Citizen (60+)</option>
                            <option value="Female Senior Citizen (60+)">Female Senior Citizen (60+)</option>
                            <option value="Well Woman Check-up">Well Woman Check-up</option>
                            <option value="Pre-Employment Check-up">Pre-Employment Check-up</option>
                            <option value="ABMH IT">ABMH IT</option>
                            <option value="Hypertension">Hypertension</option>
                            <option value="Basic Package">Basic Package</option>

                          </select>
                          <label htmlFor="floatingSelect">Select an Package</label>
                        </div>

                        <textarea
                          name="usermessage"
                          className="form-control"
                          placeholder="Message"
                          value={umessage}
                          onChange={handleChange}
                        />

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



export default Contactus;

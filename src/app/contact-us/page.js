


import './contact-us.css'


const Contactus = () => {


  return (


    <>
    {/* common heading div start*/}
    <div className="parentcontainerwhi">
      <div className="customcontainer">
        <div className="commonheaddiv">
          <div className="commonheadcontainer">
            <div className="breadcrumbs">
              <div className="breadcrumbsdata">
                Home / <span className="breadcrumbsactive">Contact Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* common heading div end*/}
    {/* common heading banner start */}
    <div className="mainheadingbanner">
      <div className="mainheadingbandiv"></div>
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
                            <h3>Contatc Us</h3>
                            <p>
                              Feel Free to contact us any time. We will get back
                              to you as soon as we can!.
                            </p>
                            <input
                              type="text"
                              className="form-control form-group"
                              placeholder="Name"
                            />
                            <input
                              type="text"
                              className="form-control form-group"
                              placeholder="Name"
                            />
                            <input
                              type="text"
                              className="form-control form-group"
                              placeholder="Name"
                            />
                            <input
                              type="text"
                              className="form-control form-group"
                              placeholder="Email"
                            />
                            <textarea
                              className="form-control form-group"
                              placeholder="Message"
                              defaultValue={""}
                            />
                            <button className="contact_form_submit">Send</button>
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
                        <i className="fas fa-headset" />
                        <span>+91 98811 23006</span>
                      </div>
                      <div className="d-flex info_single align-items-center">
                        <i className="fas fa-envelope-open-text" />
                        <span>doctorshealthcare@adityabirla.com</span>
                      </div>
                      <div className="d-flex info_single align-items-center">
                        <i className="fas fa-map-marked-alt" />
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

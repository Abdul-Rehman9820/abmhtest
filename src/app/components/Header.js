

"use client";

import { useState, useEffect } from 'react';
import $ from 'jquery';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';


import '../styles/header.css'
import '../styles/commonglobalstyle.css'




const Header = () => {



    const [uname, setUname] = useState("");
    const [uphone, setPhone] = useState("");
    const [uemail, setUemail] = useState("");
    const [uremarks, setremarks] = useState("");
    const [uReport, setReport] = useState(null);

    const [apiResponse, setApiResponse] = useState('');



    const handleChangeheader = (event) => {

        const { name, value } = event.target;
        if (name === "username") {
            setUname(value);
        } else if (name === "userPhone") {
            setPhone(value);
        } else if (name === "usermail") {
            setUemail(value);
        } else if (name === "userremarks") {
            setremarks(value);
        }

    };


    const handleFileChangeheader = (event) => {
        const file = event.target.files[0];
        setReport(file);
    };


    const handleSubmitheader = async (event) => {
        event.preventDefault();

        console.log(uname);
        console.log(uphone);
        console.log(uemail);
        console.log(uremarks);
        console.log(uReport);

        // Prepare form data
        const formData = new FormData();
        formData.append('username', uname);
        formData.append('userPhone', uphone);
        formData.append('usermail', uemail);
        formData.append('userremarks', uremarks);
        formData.append('uReport', uReport);

        // API request

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_Web_Domin}/api/SecondOpinionAPI`,
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
                    setremarks('');
                    setReport(null);

                } else {
                    setApiResponse('Something went wrong');
                }
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setApiResponse('Something went wrong');
        }


    };




    // == ?????
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {



        $(document).ready(function () {


            /* hamburger js  start*/
            $('.hamburger-menu').click(function () {
                $('.bar').toggleClass('animate');
                $('.mobile-menu').toggleClass('active');
                return false;
            });

            $('.has-children').click(function () {
                $(this).children('ul').slideToggle('slow', 'swing');
                $(this).find('.icon-arrow').toggleClass('open');
            });


            $('.closenav').click(function () {
                $('.bar').toggleClass('animate');
                $('.mobile-menu').removeClass('active');
                return false;
            });

            // hide hamb on click then send to next page
            $('.closeham').click(function () {
                $('.bar').toggleClass('animate');
                $('.mobile-menu').removeClass('active');
            });



            /* hamburger js start*/


            /* search bar  start*/

            $(".showsearchbox").click(function () {
                $(".commansearchbox").fadeIn();
            });

            $(".searchboxclose").click(function () {
                $(".commansearchbox").fadeOut();
            });

            $(".searchinputBTN").click(function () {
                $(".commansearchbox").fadeOut();
            });

            /* search bar  end*/

        });

    }, []);



    const [searchQuery, setSearchQuery] = useState("");




    return (


        <>


            {/* bootstrap CSS CDN */}

            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
                crossOrigin="anonymous"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;1,100;1,200&display=swap"
                rel="stylesheet"
            />

            {/* font awesome CSS */}

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" />

            {/* <Script type='text/javascript' src="/public/myjs/tawk.js" /> */}

            {/* <Script id="show-banner">
                {`
                                
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/5cb71cfdd6e05b735b430d40/default';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();
                
                `}
            </Script> */}


            {/* Modal second opi */}
            <>

                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title fs-5" id="exampleModalLabel">
                                    Get Second Opinion
                                </h2>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">

                                <form onSubmit={handleSubmitheader} >

                                    <div className="mb-2">
                                        <label htmlFor="username" className="form-label">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            placeholder="Enter Name"
                                            value={uname}
                                            onChange={handleChangeheader}
                                            required
                                        />
                                    </div>


                                    <div className="mb-2">
                                        <label htmlFor="userPhone" className="form-label">
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="userPhone"
                                            placeholder="Enter Phone Number"
                                            value={uphone}
                                            onChange={handleChangeheader}
                                            required
                                        />
                                    </div>


                                    <div className="mb-2">
                                        <label htmlFor="usermail" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="usermail"
                                            placeholder="Enter Email"
                                            value={uemail}
                                            onChange={handleChangeheader}
                                            required
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="userremarks" className="form-label">
                                            Remarks
                                        </label>
                                        <textarea
                                            name="userremarks"
                                            className="form-control"
                                            placeholder="Enter Remarks"
                                            value={uremarks}
                                            onChange={handleChangeheader}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="userlocation" className="form-label">
                                            Upload Report
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control form-group"
                                            name="report"
                                            accept=".pdf, .jpg, png"
                                            onChange={handleFileChangeheader}
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="contact_Second_Opinion_submit">Submit</button>

                                </form>

                                <div id="apirespose" className="mt-2">{apiResponse}</div>

                            </div>
                        </div>
                    </div>
                </div>

            </>
            {/* Modal second opi */}

            <header>
                {/* header deckstop start*/}
                <div className="parentcontainerwhi header deckstophead">
                    <div className="customcontainer">
                        {/* mainstart */}
                        <div className="headermain">
                            <div className="headerlogocont">
                                <div className="headerlogopart">
                                    <div className="logoimg">
                                        <Link href="/">
                                            <Image width={1000} height={1000} className='mydeckslogo' src="/homeimg/abmhmainlogo.png" alt="img" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="headerlogoBtnpart">

                                    <div className="headerawardandimgbox">

                                        <div className="headerawardandimg me-2">
                                            <Image width={200} height={200} src="/homeimg/ACHSfooter.png" alt="img" />
                                        </div>
                                        <div className="headerawardandimg me-2">
                                            <Image width={200} height={200} src="/homeimg/HACCPfooter.png" alt="img" />
                                        </div>

                                    </div>

                                    <div className="twobtnPar">
                                        <div className="twobtnChil">
                                            <div className="btnwidth">
                                                <span className="BookApimg">
                                                    <Image width={100} height={100} src="/homeimg/2nd-opinion.png" alt="img" />
                                                </span>
                                                <Link href="" data-bs-toggle="modal" data-bs-target="#exampleModal">Second Opinion</Link>
                                            </div>
                                        </div>
                                        <div className="twobtnChil twobtnChilorg">
                                            <div className="btnwidth">
                                                <span className="BookApimg">
                                                    <Image width={100} height={100} src="/homeimg/ourspe.png" alt="img" />
                                                </span>
                                                <Link href="/specialties">Our Specialties </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="headerNavbarcont">
                                <div className="headerNavbarcontrightforspace">

                                </div>
                                <div className="headerNavbarcontright">

                                    <div className="navbarmy">
                                        {/* <Link href="/"  className="navbarlinks" >Home </Link> */}
                                        <div className="dropdownmy navbarlinks">
                                            <button className="dropbtnmy">
                                                About Us
                                                <i className="fa fa-caret-down" />
                                            </button>
                                            <div className="dropdown-contentmy">
                                                <Link href="/about-us">About Us</Link>
                                                <Link href="/about-us#vision-mission">Vision & Mission</Link>
                                                <Link href="/accreditations">Accreditations & Certifications</Link>
                                                <Link href="/quality-policy-and-ethics-committee#quality-policy">Quality Policy</Link>
                                                <Link href="/quality-policy-and-ethics-committee#ethics-committee">Ethics Committee</Link>
                                                <Link href="/about-csr">CSR Initiatives</Link>
                                            </div>
                                        </div>
                                        <div className="dropdownmy navbarlinks">
                                            <button className="dropbtnmy">
                                                Patient Care
                                                <i className="fa fa-caret-down" />
                                            </button>
                                            <div className="dropdown-contentmy">
                                                <Link href="/doctors">Find a Doctor</Link>
                                                <Link href="https://portal.abmhslp.com/AbmhPortal/#/login">Book an Appointment</Link>
                                                <Link href="/wellness-packages">Wellness Packages</Link>
                                                <Link href="/diagnostic-services">Diagnostic Services</Link>
                                                <Link href="/insurance-and-tpa">Insurance & TPAs</Link>
                                                <Link href="https://portal.abmhslp.com/AbmhPortal/#/login">View Reports</Link>
                                                <Link href="/hospital-visit">Hospital Visit</Link>
                                                <Link href="/hospital-visit#PatientsTestimonials">Patient Testimonial</Link>
                                            </div>
                                        </div>
                                        <div className="dropdownmy navbarlinks">
                                            <button className="dropbtnmy">
                                                Services
                                                <i className="fa fa-caret-down" />
                                            </button>
                                            <div className="dropdown-contentmy">
                                                <Link href="/specialties">Specialties</Link>
                                                <Link href="/wellness-packages#homecare-solutions">Home Care Services</Link>
                                            </div>
                                        </div>
                                        <div className="dropdownmy navbarlinks">
                                            <button className="dropbtnmy">
                                                Academics
                                                <i className="fa fa-caret-down" />
                                            </button>
                                            <div className="dropdown-contentmy">
                                                <Link href="/programs">Programs</Link>
                                                <Link href="/internship-observer-ship">Internship & Observership</Link>
                                                <Link href="/students-gallery">Students Gallery</Link>
                                            </div>

                                        </div>
                                    </div>



                                </div>
                                <div className="headerNavbarcontleft">
                                    <div className="Navbarcontleftbox">
                                        <div className="Navbarcontleftboximg">
                                            <Image width={100} height={100}
                                                className="showsearchbox"
                                                src="/homeimg/abmhserchicon.png"
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="Navbarcontleftbox">
                                        <div className="Navbarcontleftboximg">
                                            <Link href="tel: +919881123033">
                                                <Image width={100} height={100} src="/homeimg/abmhsosimg.png" alt="img" />
                                            </Link>
                                        </div>
                                    </div> */}
                                    <div className="Navbarcontleftbox">
                                        <div className="Navbarcontleftboximg">
                                            <div className="hamburgerbG">
                                                <div className="hamburger-menu">
                                                    <div className="bar"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* mainclose */}
                    </div>
                </div>

                {/* header deckstop end*/}
                {/* header mobile end*/}
                <div className="parentcontainerwhi header mobilehead">
                    <div className="customcontainer">
                        {/* mainstart */}
                        <div className="headermain">
                            <div className="headerlogocont">
                                <div className="headerlogopart">
                                    <div className="logoimg">
                                        <Link href="/">
                                            <Image width={1000} height={1000} src="/homeimg/abmhmainlogo.png" alt="img" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="mobileheaderlogoBtnpart">
                                    <div className="Navbarcontleftbox">
                                        <div className="Navbarcontleftboximg">

                                            <Image width={100} height={100}
                                                className="showsearchbox"
                                                src="/homeimg/abmhserchicon.png"
                                                alt="img"
                                            />

                                        </div>
                                    </div>
                                    {/* <div className="Navbarcontleftbox">
                                        <div className="Navbarcontleftboximg">
                                            <Link href="tel: +919881123033">
                                                <Image width={100} height={100} src="/homeimg/abmhsosimg.png" alt="img" />
                                            </Link>
                                        </div>
                                    </div> */}
                                    <div className="Navbarcontleftbox">
                                        <div className="Navbarcontleftboximg">
                                            <div className="hamburgerbG">
                                                <div className="hamburger-menu">
                                                    <div className="bar" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="headerNavbarcont">
                                <div className="headerlogoBtnpart">
                                    <div className="twobtnPar">
                                        <div className="twobtnChil">
                                            <div className="btnwidth">
                                                <span className="BookApimg">
                                                    <Image width={100} height={100} src="/homeimg/2nd-opinion.png" alt="img" />
                                                </span>
                                                <Link href="" data-bs-toggle="modal" data-bs-target="#exampleModal">Second Opinion</Link>
                                            </div>
                                        </div>
                                        <div className="twobtnChil twobtnChilorg">
                                            <div className="btnwidth">
                                                <span className="BookApimg">
                                                    <Image width={100} height={100} src="/homeimg/ourspe.png" alt="img" />
                                                </span>
                                                <Link href="/specialties">Our Specialties</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* mainclose */}
                    </div>
                </div>
                {/* header mobile end*/}
                {/*! common nav bar for both */}
                <div className="parentcontainerwhi header  both-navbar">
                    <div className="customcontainer">
                        <nav className="mobile-menu">
                            <div className="closecont">
                                <div className="closenav">
                                    <i className="fa"></i>
                                </div>
                            </div>
                            <ul className="navul">
                                <li className="commhamstyle">
                                    <Link className='closeham' href="/">Home</Link>
                                </li>
                                <li className=" has-children">
                                    About Us
                                    <span className="icon-arrow" />
                                    <ul className="children">
                                        <li>
                                            <Link className='closeham' href="/about-us">About Us</Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="/about-us#vision-mission">Vision & Mission</Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="/accreditations">Accreditations & Certifications</Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="/quality-policy-and-ethics-committee#quality-policy">Quality Policy</Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="/quality-policy-and-ethics-committee#ethics-committee">Ethics Committee</Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="/about-csr">CSR Initiatives</Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className="has-children">
                                    Patient Care <span className="icon-arrow" />
                                    <ul className="children">
                                        <li>
                                            <Link className='closeham' href="/doctors">Find a Doctor</Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="https://portal.abmhslp.com/AbmhPortal/#/login">Book an Appointment</Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="/wellness-packages">Wellness Packages</Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="/diagnostic-services">Diagnostic Services</Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="/insurance-and-tpa">Insurance & TPAs</Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="https://portal.abmhslp.com/AbmhPortal/#/login">View Reports</Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="/hospital-visit">Hospital Visit</Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="/hospital-visit#PatientsTestimonials">Patient Testimonial</Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className=" has-children">
                                    Services
                                    <span className="icon-arrow" />
                                    <ul className="children">
                                        <li>
                                            <Link className='closeham' href="/specialties">Specialties</Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="/wellness-packages#homecare-solutions">Home Care Services</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className=" has-children">
                                    Academics
                                    <span className="icon-arrow" />
                                    <ul className="children">
                                        <li>
                                            <Link className='closeham' href="/programs">Programs</Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="/internship-observer-ship">Internship & Observership</Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="/students-gallery">Students Gallery</Link>
                                        </li>

                                    </ul>
                                </li>

                                <li className="commhamstyle">
                                    <Link className='closeham' href="/work-with-us">Work with Us </Link>
                                </li>

                                <li className="commhamstyle">
                                    <Link className='closeham' href="/abmh-international">International Patients</Link>
                                </li>
                                <li className="commhamstyle">
                                    <Link className='closeham' href="/abmh-news">ABMH in the News</Link>
                                </li>
                                <li className="commhamstyle">
                                    <Link className='closeham' href="/blogs">Blogs</Link>
                                </li>
                                <li className="commhamstyle">
                                    <Link className='closeham' href="/contact-us">Contact Us </Link>
                                </li>
                            </ul>
                            <div className="navbelow">
                                <div className="navbelowbox">
                                    <div className="navbelowbox1">
                                        <h3 className="feelhead">Feeling uncertain?</h3>
                                        <h3 className="letushead">Let us guide you.</h3>
                                    </div>
                                    <div className="navbelowbox2">
                                        <button className="combtnnav">
                                            <Link className='closeham' href="/contact-us">
                                                Request a call back
                                                <span className="specicon">
                                                    <Image width={100} height={100} src="/homeimg/right-arrow.png" alt="img" />
                                                </span>
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="commansearchbox">
                    <div className="commansearchboxcont">
                        <div className="serachboxform">
                            {/* <div className="navsearchboxlog">
                                <Link href="/">
                                    <Image width={1000} height={1000} className='poplogoimg' src="/homeimg/abmhmainlogo.png" alt="imgpop" />
                                </Link>
                            </div> */}
                            <div className="serachboxfclo1">
                                <div className="serachead"></div>
                                <div className="seraccloseicon">
                                    <div className="searchboxclose">
                                        <i className="fa"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="serachboxfclo2">
                                <div className="search-container">

                                    <div className="formflex">
                                        <div className="formflex1">
                                            <input
                                                type="text"
                                                className="searchinput"
                                                placeholder="Search by doctor's name or specialty ..."
                                                name="search"
                                                data-tribute="true"
                                                required=""
                                                onChange={(event) => setSearchQuery(event.target.value)}
                                            />
                                        </div>
                                        <div className="formflex2">
                                            <button className="searchinputBTN">
                                                <Link href={`/doctors?stype=search&doc=${searchQuery}`}>
                                                    <i className="fa fa-search" />
                                                </Link>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*! common nav bar for both */}
            </header>


        </>


    );
};

export default Header;
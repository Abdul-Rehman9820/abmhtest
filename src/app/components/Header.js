

"use client";

import { useState, useEffect } from 'react';
import $ from 'jquery';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';


import '../styles/commonglobalstyle.css'
import '../styles/header.css'



const Header = () => {


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
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />

            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" />




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
                                            <Image width={1000} height={1000} src="/homeimg/abmhmainlogo.png" alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="headerlogoBtnpart">
                                    <div className="twobtnPar">
                                        <div className="twobtnChil">
                                            <div className="btnwidth">
                                                <span className="BookApimg">
                                                    <Image width={1000} height={1000} src="/homeimg/bookapo.png" alt="img" />
                                                </span>
                                                <Link href="/doctors">Book an Appointment </Link>
                                            </div>
                                        </div>
                                        <div className="twobtnChil twobtnChilorg">
                                            <div className="btnwidth">
                                                <span className="BookApimg">
                                                    <Image width={1000} height={1000} src="/homeimg/ourspe.png" alt="img" />
                                                </span>
                                                <Link href="/specialties">Our Specialties </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="headerNavbarcont">
                                <div className="headerNavbarcontright">


                                    {/* <div className="naviconrigbox">
                        <div className="naviconrigboxhead">
                            <h2>About Us</h2>
                        </div>
                        <div className="naviconrigboximg">
                            <Image width={1000} height={1000} src="/homeimg/dropicon.png" alt="" />
                        </div>
                        </div>
                        <div className="naviconrigbox">
                        <div className="naviconrigboxhead">
                            <h2>Patient Care</h2>
                        </div>
                        <div className="naviconrigboximg">
                            <Image width={1000} height={1000} src="/homeimg/dropicon.png" alt="" />
                        </div>
                        </div>
                        <div className="naviconrigbox">
                        <div className="naviconrigboxhead">
                            <h2>Health Professionals</h2>
                        </div>
                        <div className="naviconrigboximg">
                            <Image width={1000} height={1000} src="/homeimg/dropicon.png" alt="" />
                        </div>
                        </div>
                        <div className="naviconrigbox">
                        <div className="naviconrigboxhead">
                            <h2>Academics</h2>
                        </div>
                        <div className="naviconrigboximg">
                            <Image width={1000} height={1000} src="/homeimg/dropicon.png" alt="" />
                        </div>
                        </div> */}

                                    <div className="navbarmy">
                                        <a href="#home">Home</a>
                                        <div className="dropdownmy">
                                            <button className="dropbtnmy">
                                                 About Us
                                                <i className="fa fa-caret-down" />
                                            </button>
                                            <div className="dropdown-contentmy">
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                        </div>
                                        <div className="dropdownmy">
                                            <button className="dropbtnmy">
                                                Patient Care
                                                <i className="fa fa-caret-down" />
                                            </button>
                                            <div className="dropdown-contentmy">
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                        </div>
                                        <div className="dropdownmy">
                                            <button className="dropbtnmy">
                                                Health Professionals
                                                <i className="fa fa-caret-down" />
                                            </button>
                                            <div className="dropdown-contentmy">
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                        </div>
                                        <div className="dropdownmy">
                                            <button className="dropbtnmy">
                                                 Academics
                                                <i className="fa fa-caret-down" />
                                            </button>
                                            <div className="dropdown-contentmy">
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                                <div className="headerNavbarcontleft">
                                    <div className="Navbarcontleftbox">
                                        <div className="Navbarcontleftboximg">
                                            <Image width={1000} height={1000}
                                                className="showsearchbox"
                                                src="/homeimg/abmhserchicon.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="Navbarcontleftbox">
                                        <div className="Navbarcontleftboximg">
                                            <Link href="/serchher">
                                                <Image width={1000} height={1000} src="/homeimg/abmhsosimg.png" alt="" />
                                            </Link>
                                        </div>
                                    </div>
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
                                        <Image width={1000} height={1000} src="/homeimg/abmhmainlogo.png" alt="" />
                                    </div>
                                </div>
                                <div className="mobileheaderlogoBtnpart">
                                    <div className="Navbarcontleftbox">
                                        <div className="Navbarcontleftboximg">
                                            <Link href="/serchher">
                                                <Image width={1000} height={1000}
                                                    className="showsearchbox"
                                                    src="/homeimg/abmhserchicon.png"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="Navbarcontleftbox">
                                        <div className="Navbarcontleftboximg">
                                            <Link href="/serchher">
                                                <Image width={1000} height={1000} src="/homeimg/abmhsosimg.png" alt="" />
                                            </Link>
                                        </div>
                                    </div>
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
                                                    <Image width={1000} height={1000} src="/homeimg/bookapo.png" alt="img" />
                                                </span>
                                                <Link href="/serchher">Book an Appointment </Link>
                                            </div>
                                        </div>
                                        <div className="twobtnChil twobtnChilorg">
                                            <div className="btnwidth">
                                                <span className="BookApimg">
                                                    <Image width={1000} height={1000} src="/homeimg/ourspe.png" alt="img" />
                                                </span>
                                                <Link href="/serchher">Our Specialties </Link>
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
                                    <Link className='closeham' href="/">Home </Link>
                                </li>
                                <li className=" has-children">
                                    Patient Care <span className="icon-arrow" />
                                    <ul className="children">
                                        <li>
                                            <Link className='closeham' href="/virtual-tour">Virtual Tour</Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="/wellness-packages">Wellness Packages</Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="/insurance-and-tpa">Insurance & TPAs</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className=" has-children">
                                    Health Professionals
                                    <span className="icon-arrow" />
                                    <ul className="children">
                                        <li>
                                            <Link className='closeham' href="/doctors">Doctors </Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="/specialties">Specialties</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="commhamstyle">
                                    <Link className='closeham' href="/serchher">Academics </Link>
                                </li>
                                <li className="commhamstyle">
                                    <Link className='closeham' href="/serchher">Work with Us </Link>
                                </li>
                                <li className=" has-children">
                                    About Us
                                    <span className="icon-arrow" />
                                    <ul className="children">
                                        <li>
                                            <Link className='closeham' href="/serchher">Submenu #1 </Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="/serchher">Submenu #2 </Link>
                                        </li>
                                        <li>
                                            <Link className='closeham' href="/serchher">Submenu #3 </Link>
                                        </li>
                                    </ul>
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
                                                    <Image width={1000} height={1000} src="/homeimg/right-arrow.png" alt="img" />
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
                            <div className="serachboxfclo1">
                                <div className="serachead">Search</div>
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
                                                placeholder="Search for doctors by name or specialty .."
                                                name="search"
                                                data-tribute="true"
                                                required=""
                                                onChange={(event) => setSearchQuery(event.target.value)}
                                            />
                                        </div>
                                        <div className="formflex2">
                                            <button className="searchinputBTN">
                                                <Link href={`/doctors?doc=${searchQuery}`}>
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
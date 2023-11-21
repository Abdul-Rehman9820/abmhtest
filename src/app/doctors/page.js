"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'

import ReactPaginate from 'react-paginate';


import Image from 'next/image';
import Link from 'next/link';

import './doctorspage.css'


const Doctors = () => {



  const filterFunction = () => {


    var input, filter, div, divItems, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    divItems = div.getElementsByClassName("myhref");
    for (i = 0; i < divItems.length; i++) {
      txtValue = divItems[i].textContent || divItems[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        divItems[i].style.display = "";
      } else {
        divItems[i].style.display = "none";
      }
    }

  };



  const hidshow = () => {

    document.getElementById("myDropdown").classList.toggle("show");


  };





  //---- for api data
  //---- for search bar on page

  const [searchQuery, setSearchQuery] = useState("");

  //---- for search bar on page


  const searchParams = useSearchParams()

  var search = "";

  if (searchParams.has('doc')) {
    search = searchParams.get('doc') // get from url
  } else {
    search = ""; // Set the default value if 'doc' is not present
  }

  var stype = "";

  if (searchParams.has('stype')) {
    stype = searchParams.get('stype') // get from url
  } else {
    stype = "search"; // Set the default value if 'doc' is not present
  }
  //---- for api data


  // store data here
  const [data, setData] = useState(['']);

  // for filter box
  const [sepeciality, setSepeciality] = useState(['']);

  // for dynamic link appen
  const [mydyno, setmydyno] = useState('');

  // for profile late loading
  const [isLoading, setIsLoading] = useState(true); // Declare the isLoading variable

  //---- for api data



  useEffect(() => {


    // api for profile

    async function fetchData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_Web_Domin}/api/mysql`, {
          method: "POST",
          body: JSON.stringify({
            usersearch: search,
            stype: stype,
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



    // api for speciality

    async function fetchSpeciality() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_Web_Domin}/api/fetchsepeciality`, {
          method: "POST",
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const resultsp = await response.json();

        setSepeciality(resultsp.data);

        // console.log(resultsp.data);

      } catch (error) {
        console.error(error);
      }
    }


    fetchSpeciality();


    // api for speciality


    // filter btn 

    var formyfucn = document.getElementById("formyfucn");


    formyfucn.onclick = function () {
      document.getElementById("myDropdown").classList.toggle("show");
    };


    const colorForm = document.getElementById('colorForm');
    const resultDiv = document.getElementById('resultDiv');


    colorForm.addEventListener('change', function () {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      const checkedColors = [];

      checkboxes.forEach(function (checkbox) {
        checkedColors.push(checkbox.id);
      });

      var mydynostring = checkedColors.join(',');

      setmydyno(mydynostring);


      // for user show heading in filter
      const checkedColorsname = [];
      checkboxes.forEach(function (checkbox) {
        checkedColorsname.push(checkbox.className);
      });


      // Append checked values to the resultDiv
      // resultDiv.innerHTML = '<h5 class="innerht">Selected Specialty :</h5>' + (checkedColors.length > 0 ? checkedColors.join(', ') : ' ');

      resultDiv.innerHTML = '<h5 class="innerht">Selected Specialty :</h5>' + (checkedColorsname.length > 0 ? checkedColorsname.join(', ') : ' ');
    });

    // filter btn 

    setCurrentPage(0);

  }, [search, stype]);



  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const itemsPerPage = 9; // Change this value according to your needs
  const offset = currentPage * itemsPerPage;

  const displayedData = data.slice(offset, offset + itemsPerPage);





  return (


    <>


      <title>Find A Doctor - Aditya Birla Memorial Hospital</title>


      {/* common heading div start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="commonheaddiv">
            <div className="commonheadcontainer">
              <div className="breadcrumbs">
                <div className="breadcrumbsdata">
                  Home / <span className="breadcrumbsactive">Our Doctors Filter</span>
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
          <Image width={2000} height={400} src="/commonimages/doctor-banner.jpg" alt="icon" />
        </div>
      </div>
      {/* common heading banner end */}
      {/* Doctors list  start*/}
      <div className="parentcontainerwhi">
        <div className="customcontainer">
          <div className="DoctorslistCont">
            <div className="DoctorslistSearch">

              <div className="DoctorslistSearchbox">
                <div className="DoctorslistSearchbox1">
                  <div className="drlistsearch-container">

                    <div className="drlistformflex">
                      <div className="drlistformflex1">
                        <input
                          type="text"
                          className="drlistsearchinput"
                          placeholder="Find a doctor by doctors by name, specialty"

                          name="search"
                          value={searchQuery}
                          onChange={(event) => setSearchQuery(event.target.value)}

                          data-tribute="true"
                          required=""
                        />
                      </div>
                      <div className="drlistformflex2">
                        <button className="drlistsearchinputBTN" type="submit">
                          <Link href={`/doctors?stype=search&doc=${searchQuery}`}>
                            <i className="fa fa-search" />
                          </Link>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="DoctorslistSearchbox2">

                </div>
              </div>


              <div className="fordrop">
                <div className="dropdown">
                  <button id="formyfucn" className="dropbtn">
                    <Image width={400} height={400} className="filimg" src="/commonimages/filterimg.png" alt="" />
                    FILTER
                  </button>
                  <div id="myDropdown" className="dropdown-content">
                    <div className="inputdiv">
                      <input
                        type="text"
                        placeholder="FILTER BY SPECIALTY ......."
                        id="myInput"
                        onKeyUp={filterFunction}

                      />
                    </div>

                    <div className="formmdiv">
                      <form id="colorForm">
                        <div className="checkboxcont">



                          {sepeciality && sepeciality.map((item, index) => (

                            <div className="myhref" key={index}>
                              <label>
                                {/* <input type="checkbox" id={item.specialty_slug} name="colors" /> {item.specialty_name} */}
                                <input type="checkbox" id={item.id} className={item.specialty_name} name="colors" /> {item.specialty_name}
                              </label>
                            </div>

                          ))}






                        </div>
                      </form>
                    </div>


                    <div id="resultDiv" />
                    <div className="mybtn">

                      <Link onClick={hidshow} id="dynamicLink" href={`/doctors?stype=filter&doc=${mydyno}`}>
                        APPLY FILTER
                      </Link>

                    </div>
                  </div>
                </div>
              </div>



            </div>

            <div className="drlistloopbox">


              {/* profile loop by api */}


              <ul id="paginated-list" data-current-page={currentPage + 1} aria-live="polite">

                {isLoading ? (

                  <div className="loading-message mt-4 mb-4">
                    <div className="loader"></div>
                    <p>Loading doctors...</p>
                  </div>

                ) : (
                  displayedData && displayedData.length === 0 ? (
                    <div className="empty-message mt-4 mb-4">No doctors found</div>
                  ) : (
                    displayedData && displayedData.map((item, index) => (
                      <li className="myli" key={index} id={index}>
                        <div className="ourteamslidchilbodr">
                          <div className="ourteamslideboxdr">
                            <div className="ourteambox1dr">
                              <div className="ourteamimgdr">
                                <Image width={400} height={400} src={`/DoctorsProfileimages/${item.DoctorProfileImage}`} alt="img" />
                              </div>
                              <div className="ourteamnamedr">
                                <h2>{item.DoctorFName} {item.DoctorLName}</h2>
                              </div>
                              <div className="ourteamspecdr">
                                <h2>{item.DoctorDesignation}</h2>
                              </div>
                              <div className="ourteamexpidr">
                                <h2>{item.DoctorExperience}ABMH Doctors</h2>
                              </div>
                            </div>
                            <div className="ourteambox2dr">
                              <div className="ourteambox2flexdr">

                                <Link className="bookappoteamdr" href={`/doctor-profile?doc=${item.DoctorNameSlug}`}>
                                  View Profile
                                </Link>

                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  )
                )}

              </ul>



              <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(data.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                forcePage={currentPage}
              />


              {/* profile loop by api */}



            </div>
          </div>
        </div>
      </div>
      {/* Doctors list end*/}




    </>



  );


};



export default Doctors;

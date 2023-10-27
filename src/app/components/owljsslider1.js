

"use client";

import { useEffect } from 'react';





const firstcomp = () => {


    useEffect(() => {



        // $(document).ready(function () {


            $('.owl-carousel-1').owlCarousel({
                loop: true,
                autoWidth: true,
                autoHeight: true,
                autoplay: true,
                nav: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive: {
                    600: {
                        items: 3
                    }
                }
            });
               
               
        // });

    
  
      }, []);


  return (
   

      <>

  
<div className="parentcontainerwhi toppading">
        <div className="customcontainer">
          <div className="ourteamparpart">
            <div className="Specialtieshead">
              <h2>Our Team of Experts</h2>
              <span className="headborder" />
            </div>
            <div className="Teamilizationhead">
              <a href="#">
                <h2>View All</h2>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="parentcontainerwhi withbg">
        <div className="customcontainer">
          {/* mainstart */}
          <div className="ourteampar">
            <div className="ourteamslidepar">
              <div className="owl-carousel owl-carousel-1">
                <div className="ourteamslidchilbo">
                  <div className="ourteamslidebox">
                    <div className="ourteambox1">
                      <div className="ourteamimg">
                        <img src="homeimg/OurTeamExperts1.png" alt="img" />
                      </div>
                      <div className="ourteamname">
                        <h2>Dr Khushboo P.</h2>
                      </div>
                      <div className="ourteamspec">
                        <h2>Cardiologist</h2>
                      </div>
                      <div className="ourteamexpi">
                        <h2>40+ years of experience&nbsp;</h2>
                      </div>
                    </div>
                    <div className="ourteambox2">
                      <div className="ourteambox2flex">
                        <a className="bookappoteam" href="#">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ourteamslidchilbo">
                  <div className="ourteamslidebox">
                    <div className="ourteambox1">
                      <div className="ourteamimg">
                        <img src="homeimg/OurTeamExperts2.png" alt="img" />
                      </div>
                      <div className="ourteamname">
                        <h2>Dr Pooja H.</h2>
                      </div>
                      <div className="ourteamspec">
                        <h2>Physiotherapist</h2>
                      </div>
                      <div className="ourteamexpi">
                        <h2>37+ years experience</h2>
                      </div>
                    </div>
                    <div className="ourteambox2">
                      <div className="ourteambox2flex">
                        <a className="bookappoteam" href="#">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ourteamslidchilbo">
                  <div className="ourteamslidebox">
                    <div className="ourteambox1">
                      <div className="ourteamimg">
                        <img src="homeimg/OurTeamExperts3.png" alt="img" />
                      </div>
                      <div className="ourteamname">
                        <h2>Dr Vishal M.</h2>
                      </div>
                      <div className="ourteamspec">
                        <h2>ENT</h2>
                      </div>
                      <div className="ourteamexpi">
                        <h2>29+ years experience</h2>
                      </div>
                    </div>
                    <div className="ourteambox2">
                      <div className="ourteambox2flex">
                        <a className="bookappoteam" href="#">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ourteamslidchilbo">
                  <div className="ourteamslidebox">
                    <div className="ourteambox1">
                      <div className="ourteamimg">
                        <img src="homeimg/OurTeamExperts2.png" alt="img" />
                      </div>
                      <div className="ourteamname">
                        <h2>Dr Khushboo K.</h2>
                      </div>
                      <div className="ourteamspec">
                        <h2>Cardiologist</h2>
                      </div>
                      <div className="ourteamexpi">
                        <h2>40+ years of experience&nbsp;</h2>
                      </div>
                    </div>
                    <div className="ourteambox2">
                      <div className="ourteambox2flex">
                        <a className="bookappoteam" href="#">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="combtndivteam">
                  <button class="combtnteam"><a href="#">SEE ALL SERVICES<span class="specicon"><img src="homeimg/specicon.png" alt="img"></span></a></button>
              </div> */}
          </div>
          {/* mainclose */}
        </div>
      </div>
      

      </>




  );
};

export default firstcomp;

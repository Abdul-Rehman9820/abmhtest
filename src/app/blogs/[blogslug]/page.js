

"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './blog.css'


const Blogsingle = ({ params }) => {


  // console.log(params.blogslug);

  var search = params.blogslug;


  // store data here
  const [data, setData] = useState(['']);


  // for profile late loading
  const [isLoading, setIsLoading] = useState(true); // Declare the isLoading variable

  //---- for api data



  useEffect(() => {


    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll


    // api for profile

    async function fetchData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_Web_Domin}/api/blogsabsingle`, {
          method: "POST",
          body: JSON.stringify({
            blogslug: search,
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        setData(result.data);
        setIsLoading(false);

        console.log(result.data);

      } catch (error) {
        console.error(error);
      }
    }


    fetchData();


    // api for profile




  }, []);






  return (

    <>
      {/* our work*/}

      <div className="parentcontainerwhi">
        <div className="customcontainer">



          {isLoading ? (

            <div className="mt-4 mb-4">
              <p className="h5">Loading data...</p>
            </div>

          ) : (

            data.length === 0 ? (
              <div className="empty-message mt-4 mb-4">No data found</div>
            ) : (

              data.map((item, index) => (

                <div key={index}>

                <title>{item.blogname}</title>

                  <div className="page_header">
                    <div className="customcontainer">
                      <div className="Pg_title">
                        Blogs / <span className="Pg_sub_title">{item.blogname}</span>
                      </div>
                    </div>
                  </div>

                  <div className="singlebolgdata">

                    <div className="singlebolgimage">
                      <Image className="singblogimg" width={2000} height={400} src={`/blogsimg/${item.blogbanner}`} alt="icon" />
                    </div>
                    <h1 className="singlblogh1">{item.blogname}</h1>

                    <div className="blogdeatails"><span className="bolgcat">{item.blogcategory}</span><span> | </span><span className="bolgdate">{item.blogreadable_date}</span></div>

                    <h2 className="blogfirstpara">
                      {item.blogtop_para}
                    </h2>

                    <div className="blogremaingdata" dangerouslySetInnerHTML={{ __html: item.blogBigData }} />

                  </div>

                </div>


              ))

            )

          )}







          {/* mainclose */}
        </div>
      </div>
      {/* our work*/}
    </>



  );


};



export default Blogsingle;

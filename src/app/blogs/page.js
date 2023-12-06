

"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';


import './blogs.css'


const Blogs = () => {

  // store data here
  const [data, setData] = useState(['']);

  // for profile late loading
  const [isLoading, setIsLoading] = useState(true); // Declare the isLoading variable



  useEffect(() => {


    window.document.scrollingElement?.scrollTo(0, 0);  // for top scroll


    // api for blogs

    async function fetchData() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_Web_Domin}/api/blogsab`, {
          method: "POST",
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


    // api for blogs







  }, []);



  return (

    <>
      {/* our work*/}
      <title>Blogs</title>
      <div className="parentcontainerwhi">
        <div className="page_header">
          <div className="customcontainer">
            <div className="Pg_title">
              Home / <span className="Pg_sub_title">Blogs</span>
            </div>
          </div>
        </div>
        {/* title img */}
        <div className="mainheadingbanner">
          <div className="mainheadingbandiv">
            <Image width={2000} height={400} src="/commonimages/commabmhblosgban.jpg" alt="icon" />
          </div>
        </div>
        {/* title img */}
        <div className="customcontainer">
          {/* tpa */}
          <div className="blog_page">
            <div className="sectionheading">
              <h2>Must Read Articles</h2>
              <span className="headborder" />
            </div>


            {


              isLoading ? (

                <div className=" mt-4 mb-4">
                  <p className="h5">Loading Data...</p>
                </div>

              ) : (


                data && data.length === 0 ? (
                  <div className="empty-message mt-4 mb-4">No data found</div>
                ) : (
                  data && data.map((item, index) => (


                    <div className="blog_sec" key={index} id={index}>
                      <div className="main_img">
                        <Image width={1800} height={400} src={`/blogsimg/${item.blogbanner}`} alt="blog img" />
                      </div>
                      <div className="content">
                        <div className="blog_para">
                          <h2>
                            {item.blogname}
                          </h2>
                          {item.blogtop_para && item.blogtop_para.length > 50 ? (
                            <p>{item.blogtop_para.substring(0, 400)}...</p>
                          ) : (
                            <p>{item.blogtop_para}</p>
                          )}
                        </div>
                        <div className="btm_txt">
                          <span className="read_more">
                            <Link href={`/blogs/${item.blogslug}`}>
                              Read More <i className="fa-solid fa-arrow-right-long" />
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>



                  ))
                )


              )



            }


          </div>
        </div>
        {/* mainclose */}
      </div>
      {/* our work*/}
    </>



  );


};



export default Blogs;

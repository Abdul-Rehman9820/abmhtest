"use client";

import { useState } from "react";

import Script from 'next/script';

import Link from 'next/link';

import '../styles/commonglobalstyle.css'




const SearchBar = async () => {



  const [searchQuery, setSearchQuery] = useState("");



  return (


    <>


      <Link href="/">
        <p>home</p>
      </Link>



      <div className="">
        <input
          type="text"
          name="doc"
          placeholder="Search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          required
        />
        <button>
          <Link href={`/serchdata?doc=${searchQuery}`}>
            <p>Search</p>
          </Link>
        </button>
      </div>



    </>




  );
};

export default SearchBar;

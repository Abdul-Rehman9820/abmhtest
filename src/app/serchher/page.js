"use client";

import { useState } from "react";

import Script from 'next/script';

import Link from 'next/link';

import '../styles/commonglobalstyle.css'



const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    // <form action={`/serchdata?doc=${searchQuery}`} method="get">

      <>

        <Link href="/">     
          <p>home</p>                              
        </Link> 


          <form action="serchdata" method="get">
            <input
              type="text"
              name="doc"
              placeholder="Search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              required
            />
            <button type="submit">Search</button>
          </form>

          <Script src="/myjs/searchpage.js" />

      </>




  );
};

export default SearchBar;

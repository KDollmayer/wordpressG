import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [pathList, setPathList] = useState([]);

  useEffect(() => {
    fetch("http://localhost/wp-json/wp/v2/pages")
      .then((res) => res.json())
      .then((data) => setPathList(data));
  }, [pathList]);

  return (
    <div>
      <ul>
        
      {pathList && <>
      <li>
        <Link href="/">
                <a>Home</a>
              </Link>
        </li>
        {pathList.map((path) => {
          return (
            <li key={path.id}>
              <Link href={`/${path.title.rendered.toLowerCase()}`}>
                <a>{path.title.rendered}</a>
              </Link>
            </li>
          );
        })}</>}</ul>
    </div>
  );
};

export default Navbar;

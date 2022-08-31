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
      {pathList &&
        pathList.map((path) => {
          return (
            <li>
              <Link href={`/${path.id}`}>
                <a>{path.title.rendered}</a>
              </Link>
            </li>
          );
        })}
    </div>
  );
};

export default Navbar;

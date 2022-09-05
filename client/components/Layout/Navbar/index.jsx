import React, { useState, useEffect } from "react";
import Link from "next/link";
import * as s from "./styles";

const Navbar = () => {
  const [pathList, setPathList] = useState(null);

  useEffect(() => {
    fetch(`http://localhost/wp-json/wp/v2/pages`)
      .then((res) => res.json())
      .then((data) => setPathList(data));
  }, []);

  return (
    <s.Container>
      <s.NavList>
        {pathList && (
          <>
            {pathList.map((path) => {
              return (
                <li key={path.id}>
                  <Link href={`/${path.title.rendered.toLowerCase()}`}>
                    <a>{path.title.rendered}</a>
                  </Link>
                </li>
              );
            })}
          </>
        )}
      </s.NavList>
    </s.Container>
  );
};

export default Navbar;

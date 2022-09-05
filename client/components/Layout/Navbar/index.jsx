import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.nav`
  position: relative;
  height: 10vh;
  width: 100%;
  background-color: black;
  color: white;
`;

const NavList = styled.ul`
  height: fit-content;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  li {
    margin-right: 30px;

    &:hover {
      text-decoration: solid underline white 2px;
    }
  }
`;

const Navbar = () => {
  const [pathList, setPathList] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8888/wp-json/wp/v2/pages`)
      .then((res) => res.json())
      .then((data) => setPathList(data));
  }, []);
// instead of http://localhost:8888/wp-json/wp/v2/pages
  
  // useEffect(() => {
  //   fetch(`http://localhost:8888/graphql`, {
  // method: 'POST',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  // body: JSON.stringify({
  //   query: `
  //       {
  //           pages {
  //               nodes {
  //                   id
  //                   title
  //               }
  //           }
  //       }
  //   `,
  // }),
  // })
  //   .then(res => res.json())
  //   .then((data) => setPathList(data))
  // }, []);


  return (
    <Container>
      <NavList>
        {
        /* {pathList && (
          <>
            {console.log(pathList)}
            {pathList.data.pages.nodes.map((path) => {
              return (
                <li key={path.id}>
                  <Link href={`/${path.title.toLowerCase()}`}>
                    <a>{path.title}</a>
                  </Link>
                </li>
              );
            })}
          </>
        )}  */
        }
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
      </NavList>
    </Container>
  );
};

export default Navbar;

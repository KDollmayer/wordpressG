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
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages`)
      .then((res) => res.json())
      .then((data) => setPathList(data));
  }, []);

  return (
    <Container>
      <NavList>
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

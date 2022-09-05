import styled from "styled-components";

export const Container = styled.nav`
  position: relative;
  height: 10vh;
  width: 100%;
  background-color: black;
  color: white;
`;

export const NavList = styled.ul`
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

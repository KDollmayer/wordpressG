import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import CustomHead from "./Head";
import Navbar from "./Navbar";

const Container = styled.div`
  background-color: aliceblue;
`;

const MainContainer = styled.div`
  background-color: white;
  color: black;
  
  width: 70%;
  max-width: 1200px;
  margin: auto;
`;

export default function Layout({ children }) {
  return (
    <>
      <CustomHead />
      <Container>
        <Navbar />
        <MainContainer>
          <main>{children}</main>
        </MainContainer>
        <Footer />
      </Container>
    </>
  );
}

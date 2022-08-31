import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import CustomHead from "./Head";
import Navbar from "./Navbar";

const Container = styled.div`
  background-color: black;
`;

const MainContainer = styled.div`
  background-color: white;
  color: black;
`;

export default function Layout({ children }) {
  return (
    <>
      <CustomHead />
      <Container>
        <Navbar />
        <Header />
        <MainContainer>
          <main>{children}</main>
        </MainContainer>
        <Footer />
      </Container>
    </>
  );
}

import React from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
import CustomHead from "./head";
import Navbar from "./navbar";

const Container = styled.div`
  background-color: white;
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

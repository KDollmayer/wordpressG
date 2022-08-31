import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import CustomHead from "./Head";
import Navbar from "./Navbar";

const Container = styled.div`
  background-color: black;
`;

export default function Layout({ children }) {
  return (
    <>
      <CustomHead />
      <Container>
        <Navbar />
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
}

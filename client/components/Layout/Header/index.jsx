import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30vh;
  width: auto;

  background-color: white;
`;

export default function Header() {
  const url = "http://localhost/wp-json/wp/v2/media/27";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <Container>{console.log(data)}</Container>;
}

import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
`;

const Item = styled.img`
  width: auto;
  max-height: 250px;
  height: 100%;
  margin: 10px;
`;

const GalleryGrid = ({ data }) => {
  const [imageList, setImageList] = useState(null);

  const getImage = async (image) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/media/${image}`);
    const imageData = await res.json();
    return imageData;
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const imageList = await Promise.all(data.map((image) => getImage(image)));

    setImageList(imageList);
  };

  return (
    <Container>
      {imageList &&
        imageList.map((image) => {
          console.log(image);
          return <Item key={image.id} src={image.source_url} />;
        })}
    </Container>
  );
};

export default GalleryGrid;

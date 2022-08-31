import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled, {css} from "styled-components";

const Container = styled.li`
  max-width: 350px;
  min-width: 250px;
  width: 33%;
  height: 450px;
  margin: 20px;
  box-shadow: 0px 5px 10px lightgrey;
  border-radius: 5px;
  overflow: hidden;
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-image: url(${props => props.bg ? css`${props.bg}`: "http://localhost/wp-content/uploads/2022/08/manja-vitolic-gKXKBY-C-Dk-unsplash-1.jpg"});
  background-size: cover;
  background-position: center;
`;

const TextContainer = styled.div`
  position: relative;
  padding: 5px 10px;
  height: 67%;
`;

const ShadowBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(rgba(255, 0, 0, 0), white);
  width: 100%;
  height: 250px;
  z-index: 1;
`;

const BlogPost = ({ data }) => {
  const [thumbnail, setThumbnail] = useState(null)


const renderMedia = async (media) => {
 const res = await fetch(`http://localhost/wp-json/wp/v2/media/${media}`)
 const data = await res.json()
 setThumbnail(data?.source_url)
}
  useEffect(() => {
    if (data?.featured_media > 0){renderMedia(data?.featured_media)}
  },[])
  return (
    <Container>
      <Link href={`/posts/${data.slug}`}>
        <a>
          <Thumbnail bg={thumbnail}/>
          <TextContainer>
            <h2>{data.title.rendered}</h2>
            <p dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}></p>
            <ShadowBox/>
          </TextContainer>
        </a>
      </Link>
    </Container>
  );
};

export default BlogPost;

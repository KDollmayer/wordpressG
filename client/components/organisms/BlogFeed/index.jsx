import React, { useEffect, useState } from "react";
import BlogPost from "../../molecules/blogPost";
import styled from "styled-components";

const BlogList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const BlogFeed = ({ limit = 100 }) => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?per_page=${limit}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h2>Blog</h2>
      <BlogList>
        {posts &&
          posts.map((post) => {
            return <BlogPost key={post.id} data={post} />;
          })}
      </BlogList>
    </div>
  );
};

export default BlogFeed;

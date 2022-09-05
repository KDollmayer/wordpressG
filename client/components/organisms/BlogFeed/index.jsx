import React, { useEffect, useState } from "react";
import BlogPost from "../../molecules/blogPost";
import * as s from './styles'

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
      <s.BlogList>
        {posts &&
          posts.map((post) => {
            return <BlogPost key={post.id} data={post} />;
          })}
      </s.BlogList>
    </div>
  );
};

export default BlogFeed;

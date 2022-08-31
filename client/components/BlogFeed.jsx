import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";

const BlogFeed = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
        <h1>Feed</h1>
      <ul>
        {posts &&
          posts.map((post) => {
            return <BlogPost key={post.id} data={post}/>;
          })}
      </ul>
    </div>
  );
};

export default BlogFeed;

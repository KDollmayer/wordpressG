import React from "react";
import Link from "next/link";

const BlogPost = ({ data }) => {
  return (
    <li>
      <Link href={`/posts/${data.slug}`}>
        <a>
          <h2>{data.title.rendered}</h2>
          <p dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}></p>
        </a>
      </Link>
    </li>
  );
};

export default BlogPost;

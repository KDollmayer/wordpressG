import React from "react";

const BlogPost = ({ data }) => {
    console.log("POST",data)
  return (
    <li>
      <h2>{data.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{__html:data.content.rendered}}></div>
    </li>
  );
};

export default BlogPost;

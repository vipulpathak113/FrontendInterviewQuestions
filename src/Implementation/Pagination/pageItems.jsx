import React from "react";

export default function PageItems({ posts }) {
  return (
    <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
      {posts.length > 0 &&
        posts.map((post) => <p key={post.id}>{post.title}</p>)}
    </div>
  );
}

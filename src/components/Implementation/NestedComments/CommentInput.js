import React, { useState } from "react";

export const CommentInput = ({ onComment }) => {
  const [body, setBody] = useState("");

  return (
    <div style={{ marginTop: "10px" }}>
      <input
        value={body}
        placeholder="What are your thoughts"
        onChange={(e) => setBody(e.target.value)}
      />
      <button
        onClick={() => {
          onComment({ body, comments: [] });
          setBody("");
        }}
      >
        Comment
      </button>
    </div>
  );
};

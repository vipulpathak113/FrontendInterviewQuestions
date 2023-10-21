import React, { useState } from "react";

export const CommentInput = ({ onComment }) => {
  const [body, setBody] = useState("");

  return (
    <div className="textInputWrapper">
      <input
        className="textInput"
        value={body}
        placeholder="What are your thoughts"
        onChange={(e) => setBody(e.target.value)}
      />
      <button
        className="button"
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

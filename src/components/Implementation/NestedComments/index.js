import React, { useState } from "react";
import { CommentItem } from "./CommentItem";
import { CommentInput } from "./CommentInput";

export const Nested = () => {
  const [comments, setComments] = useState([]);

  const onComment = (newComment) => {
    setComments([newComment, ...comments]);
  };

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ padding: "10px" }}>
        <CommentInput onComment={onComment} />
      </div>
      <div>
        {comments.map((comment, id) => (
          <CommentItem key={id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

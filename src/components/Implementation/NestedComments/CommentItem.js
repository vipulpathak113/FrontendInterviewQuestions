import React from "react";
import { CommentInput } from "./CommentInput";

export const CommentItem = ({ comment }) => {
  const [isReply, setIsReply] = React.useState(false);
  return (
    <div style={{ padding: "10px", border: "1px solid", marginTop: "10px" }}>
      <span>{comment.body}</span>
      <button style={{ display: "block" }}>Reply</button>
      {isReply && <CommentInput />}
    </div>
  );
};

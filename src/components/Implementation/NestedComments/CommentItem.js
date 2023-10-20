import React, { useState } from "react";
import { CommentInput } from "./CommentInput";

export const CommentItem = ({ comment }) => {
  const [comments, setComments] = useState(comment.comments);
  const [isReply, setIsReply] = React.useState(false);

  const onComment = (newcomm) => {
    setComments((prev) => [newcomm, ...prev]);
    setIsReply(false);
  };

  return (
    <div style={{ padding: "10px", border: "1px solid", marginTop: "10px" }}>
      <span>{comment.body}</span>
      <button style={{ display: "block" }} onClick={() => setIsReply(true)}>
        Reply
      </button>
      {isReply && <CommentInput onComment={onComment} />}
      <div>
        {comments?.map((comment, id) => (
          <CommentItem key={id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

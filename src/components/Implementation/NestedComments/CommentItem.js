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
    <div className="commentItem">
      <span>{comment.body}</span>
      {isReply && <CommentInput onComment={onComment} />}
      <div className="btn">
        {isReply ? (
          <button className="reply cancel" onClick={() => setIsReply(false)}>
            Cancel
          </button>
        ) : (
          <button className="reply" onClick={() => setIsReply(true)}>
            Reply
          </button>
        )}
      </div>

      <div>
        {comments?.map((comment, id) => (
          <CommentItem key={id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

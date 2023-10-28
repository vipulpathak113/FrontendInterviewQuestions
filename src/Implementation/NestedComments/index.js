import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CommentInput } from "./CommentInput";
import { CommentItem } from "./CommentItem";
import "./nested.css";

export const Nested = () => {
  const [comments, setComments] = useLocalStorage("comments", []);

  const onComment = (newComment) => {
    setComments([newComment, ...comments]);
  };

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ padding: "10px" }}>
        <CommentInput onComment={onComment} />
      </div>
      <div>
        {comments?.map((comment, id) => (
          <CommentItem key={id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

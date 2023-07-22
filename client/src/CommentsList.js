import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div>
      <p>{comments ? comments.length : 0} comments</p>
      <ul>
        {comments &&
          Object.entries(comments).map(([key, value]) => {
            let content =
              value.status === "approved"
                ? value.content
                : value.status === "pending"
                ? "this comment is awaiting moderation"
                : value.status === "rejected"
                ? "this comment rejected"
                : "";
            return <li key={key}>{content}</li>;
          })}
      </ul>
    </div>
  );
};

export default CommentList;

import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div>
      <p>{comments ? comments.length : 0} comments</p>
      <ul>
        {comments &&
          Object.entries(comments).map(([key, value]) => {
            return <li key={key}>{value.content}</li>;
          })}
      </ul>
    </div>
  );
};

export default CommentList;

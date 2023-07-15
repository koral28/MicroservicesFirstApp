import React, { useState } from "react";
import { AddPost } from "./Api";

const PostCreate = () => {
  const [title, setTitle] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    AddPost(title);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3 style={{ backgroundColor: "beige" }}>Create Post </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ height: "fit-content" }}>
          <p
            style={{
              backgroundColor: "papayawhip",
              textAlign: "center",
              height: "fit-cotent",
            }}
          >
            Title
          </p>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: "150px", margin: 0 }}
              type="text"
              name="title"
            />
            <button type="submit" style={{ margin: "5px", width: "100px" }}>
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostCreate;

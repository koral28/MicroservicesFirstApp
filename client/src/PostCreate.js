import React from "react";
//import { GetPosts } from "./Api";

const PostCreate = () => {
  const onSubmit = (e) => {
    //GetPosts();
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
          <input style={{ width: "150px", margin: 0 }} />
        </div>

        <button style={{ margin: "5px", width: "100px" }} onClick={onSubmit}>
          submit
        </button>
      </div>
    </div>
  );
};

export default PostCreate;

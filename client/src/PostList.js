import React, { useEffect, useState } from "react";
import { GetPosts } from "./Api";

const PostList = () => {
  const [posts, setPosts] = useState();

  const fetch = async () => {
    const postList = await GetPosts();
    setPosts(postList);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <ul className="postsList">
      {posts &&
        Object.entries(posts).map(([key, value]) => {
          return (
            <li key={key} className="postElement">
              <div>
                <p>My Post: {value.title}</p>
                <p>{value.title} comments</p>
                <ul>
                  {posts &&
                    Object.entries(posts).map(([key, value]) => {
                      return <li key={key}>Im a comment {value.title}</li>;
                    })}
                </ul>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p>Comment</p>
                  <input style={{ width: "200px" }} />
                  <button style={{ width: "100px" }}>submit</button>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default PostList;

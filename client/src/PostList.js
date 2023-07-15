import React, { useEffect, useState } from "react";
import { GetPosts, GetCommentsPerPost } from "./Api";

const PostList = () => {
  const [posts, setPosts] = useState();
  const [content, setContent] = useState();
  const [postId, setPostId] = useState();

  const fetch = async () => {
    //const commentsPerPost = GetCommentsPerPost("123")
    // const postList = await GetPosts();
    // setPosts(postList);
  };
  useEffect(() => {
    fetch();
  }, [posts]);

  const handleSubmit = (e) => {
    console.log(e.target.value);
  };

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
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="content"
                      style={{ width: "200px" }}
                      onChange={(e) => setContent(e.target.value)}
                    />
                    <button type="submit" style={{ width: "100px" }}>
                      submit
                    </button>
                  </form>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default PostList;

import React, { useEffect, useState } from "react";
import { GetPosts } from "./Api";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentsList";

const PostList = () => {
  const [posts, setPosts] = useState();

  const fetch = async () => {
    const postList = await GetPosts();
    setPosts(postList);
  };

  useEffect(() => {
    fetch();
  }, [posts]);

  return (
    <ul className="postsList">
      {posts &&
        Object.entries(posts).map(([key, value]) => {
          return (
            <li key={key} className="postElement">
              <div>
                <p>My Post: {value.title}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <CommentList postId = {key}/>
                  <CommentCreate postId = {key}/>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default PostList;

import axios from "axios";

export const GetPosts = async () => {
  try {
    const posts = await axios.get("http://localhost:4000/posts");
    return posts.data;
  } catch (err) {
    console.log(err);
  }
};

export const AddPost = async (title) => {
  try {
    const posts = await axios.post("http://localhost:4000/posts", { title });
    return posts.data;
  } catch (err) {
    console.log(err);
  }
};

export const GetCommentsPerPost = async (postId) => {
  try {
    const comments = await axios.get(
      `http://localhost:8080/posts/${postId}/comments`
    );
    return comments.data;
  } catch (err) {
    console.log(err);
  }
};

export const PostCommentPerPost = async (postId) => {
  try {
    const comments = await axios.post(
      `http://localhost:8080/posts/${postId}/comments`
    );
    return comments.data;
  } catch (err) {
    console.log(err);
  }
};

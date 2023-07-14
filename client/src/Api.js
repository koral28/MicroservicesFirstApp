import axios from "axios";

export const GetPosts = async () => {
  try {
    const posts = await axios.get("http://localhost:4000/posts");
    return posts.data;
  } catch (err) {
    console.log(err);
  }
};

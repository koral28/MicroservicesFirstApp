import React, { useState } from "react";
import { PostCommentPerPost } from "./Api";

const CommentCreate = (props) => {
    const [comment, setComment] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        PostCommentPerPost(comment.postId, comment.content);
    };

    return (
        <div>
            <p>Comment</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="content"
                    style={{ width: "200px" }}
                    onChange={(e) => setComment({ postId: props.postId, content: e.target.value })}
                />
                <button type="submit" style={{ width: "100px" }}>
                    submit
                </button>
            </form>
        </div>
    )
}

export default CommentCreate;
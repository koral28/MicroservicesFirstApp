import React, { useEffect, useState } from "react";
import { GetCommentsPerPost} from "./Api";

const CommentList = (props) => {
    const [comments, setComments] = useState();

    const fetch = async () => {
        const commentsListOfPost = await GetCommentsPerPost(props.postId);
        setComments(commentsListOfPost)
    }

    useEffect(() => {
        fetch();
    },[])

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
    )
}

export default CommentList;
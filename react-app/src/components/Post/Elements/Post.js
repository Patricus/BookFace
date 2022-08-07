import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../../store/comments";
import Comment from "../../Comment/Elements/Comment";
import CreateCommentForm from "../../Comment/Form/CreateCommentForm";
import PostDropdown from "./PostDropdown";
import "./post.css";

function Post({ postId }) {
    const dispatch = useDispatch();

    const post = useSelector(state => state.posts[postId]);
    const user = useSelector(state => state.session.user);

    useEffect(() => {
        if (post) dispatch(getComments(post.id));
    }, [dispatch, post]);

    return (
        <>
            {post && (
                <div className="post-container">
                    <div className="post">
                        {post.user_id === user.id && <PostDropdown post={post} />}
                        {post.image && <img src={post.image_link} alt="post" />}
                        <p>{post.text}</p>
                        <CreateCommentForm post_id={post.id} />
                    </div>
                    {post.comments &&
                        Object.values(post.comments).map(comment => (
                            <Comment key={comment.id} comment={comment} />
                        ))}
                </div>
            )}
        </>
    );
}

export default Post;

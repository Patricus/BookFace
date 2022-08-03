import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePost } from "../../../store/posts";
import Comment from "../../Comment/Elements/Comment";
import CreateCommentForm from "../../Comment/Form/CreateCommentForm";
import EditPostForm from "../Form/EditPostForm";

function Post({ postId }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showEditPost, setShowEditPost] = useState(false);

    const dispatch = useDispatch();

    const post = useSelector(state => state.session.user.posts[postId]);
    // const comments = useSelector(state => state.session.user.posts[postId].comments);

    const deletePost = () => {
        dispatch(removePost(post.id));
    };

    return (
        <>
            {showEditPost && <EditPostForm post={post} setShowEditPost={setShowEditPost} />}
            {post && (
                <>
                    <div>
                        <h4>Post</h4>
                        <div style={{ position: "relative" }}>
                            <button onClick={() => setShowDropdown(!showDropdown)}>...</button>
                            {showDropdown && (
                                <div style={{ position: "absolute" }} className="dropdown">
                                    <button onClick={() => setShowEditPost(true)}>Edit Post</button>
                                    <button onClick={deletePost}>Delete Post</button>
                                </div>
                            )}
                        </div>
                        {post.image && <img src={post.image_link} alt="post" />}
                        <p>{post.text}</p>

                        <CreateCommentForm post_id={post.id} />
                    </div>
                    {post.comments &&
                        Object.values(post.comments).map(comment => (
                            <Comment key={comment.id} comment={comment} />
                        ))}
                </>
            )}
        </>
    );
}

export default Post;

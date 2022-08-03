import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removePost } from "../../../store/posts";
import Comment from "../../Comment/Elements/Comment";
import CreateCommentForm from "../../Comment/Form/CreateCommentForm";
import EditPostForm from "../Form/EditPostForm";

function Post({ post }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showEditPost, setShowEditPost] = useState(false);

    const dispatch = useDispatch();

    const deletePost = () => {
        dispatch(removePost(post.id));
    };

    return (
        <>
            {showEditPost && <EditPostForm post={post} setShowEditPost={setShowEditPost} />}
            <div>
                Post
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
                Object.values(post.comments).map(comment => <Comment comment={comment} />)}
        </>
    );
}

export default Post;

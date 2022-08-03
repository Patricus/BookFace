import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removePost } from "../../../store/posts";
import EditPostForm from "../Form/EditPostForm";

function Post({ post }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const dispatch = useDispatch();

    const deletePost = () => {
        dispatch(removePost(post.id));
    };

    return (
        <div>
            Post
            {showDropdown ? (
                //Change to dropdown
                <EditPostForm post={post} />
            ) : (
                <>
                    <button onClick={() => setShowDropdown(true)}>...</button>
                    {post.image && <img src={post.image_link} alt="post" />}
                    <p>{post.text}</p>
                    <button onClick={deletePost}>Delete Post</button>
                </>
            )}
        </div>
    );
}

export default Post;

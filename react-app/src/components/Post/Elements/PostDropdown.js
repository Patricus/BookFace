import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removePost } from "../../../store/posts";
import EditPostForm from "../Form/EditPostForm";

function PostDropdown({ post }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showEditPost, setShowEditPost] = useState(false);
    const dispatch = useDispatch();

    const deletePost = () => {
        dispatch(removePost(post.id));
    };

    useEffect(() => {
        const clickCheck = e => {
            if (e.target.classList.contains("post-menu-button")) return;
            if (!e.target.classList.contains("dropdown")) setShowDropdown(false);
        };
        document.addEventListener("mousedown", clickCheck);
        return () => document.removeEventListener("mousedown", clickCheck);
    }, [showDropdown]);

    return (
        <>
            {showEditPost && <EditPostForm post={post} setShowEditPost={setShowEditPost} />}
            <div style={{ position: "relative" }}>
                <button className="post-menu-button" onClick={() => setShowDropdown(!showDropdown)}>
                    ...
                </button>
                {showDropdown && (
                    <div style={{ position: "absolute" }} className="dropdown">
                        <button
                            className="post-menu-button"
                            onClick={() => {
                                setShowEditPost(true);
                                setShowDropdown(false);
                            }}>
                            Edit Post
                        </button>
                        <button className="post-menu-button" onClick={deletePost}>
                            Delete Post
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default PostDropdown;

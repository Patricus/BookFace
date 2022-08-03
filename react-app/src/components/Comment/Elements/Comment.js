import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeComment } from "../../../store/comments";
import EditCommentForm from "../Form/EditCommentForm";

function Comment({ comment }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showEditComment, setShowEditComment] = useState(false);

    const dispatch = useDispatch();

    const deleteComment = () => {
        dispatch(removeComment(comment.id));
    };

    return (
        <>
            {showEditComment && (
                <EditCommentForm comment={comment} setShowEditComment={setShowEditComment} />
            )}
            <div>
                Comment
                <div style={{ position: "relative" }}>
                    <button onClick={() => setShowDropdown(!showDropdown)}>...</button>
                    {showDropdown && (
                        <div style={{ position: "absolute" }} className="dropdown">
                            <button onClick={() => setShowEditComment(true)}>Edit Comment</button>
                            <button onClick={deleteComment}>Delete Comment</button>
                        </div>
                    )}
                </div>
                <p>{comment.text}</p>
            </div>
        </>
    );
}

export default Comment;

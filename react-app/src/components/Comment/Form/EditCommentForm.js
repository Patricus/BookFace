import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editComment } from "../../../store/comments";

// Form used to Edit a comment
function EditCommentForm({ comment, setShowEditComment }) {
    const [text, setText] = useState(comment.text);
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    const submit = async e => {
        e.preventDefault();
        setErrors([]);

        const data = await dispatch(editComment(comment.post_id, comment.id, text));

        if (data) {
            //Show errors
            setErrors(data);
        } else {
            setText("");
            setErrors([]);
            setShowEditComment(false);
        }
    };

    return (
        <div className="comment-edit">
            <h2>Update Comment Form</h2>
            <div>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <form onSubmit={submit}>
                <textarea
                    name="text"
                    placeholder="Write a comment..."
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button>Comment</button>
            </form>
        </div>
    );
}

export default EditCommentForm;

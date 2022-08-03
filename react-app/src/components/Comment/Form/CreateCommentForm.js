import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeComment } from "../../../store/comments";

// Form used to create a comment
function CreateCommentForm({ post_id }) {
    const [text, setText] = useState("");
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    const submit = async e => {
        e.preventDefault();
        setErrors([]);

        const data = await dispatch(makeComment(post_id, text));

        if (data) {
            //Show errors
            setErrors(data);
        } else {
            setText("");
            setErrors([]);
        }
    };

    return (
        <div>
            <h4>Create Comment Form</h4>
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

export default CreateCommentForm;

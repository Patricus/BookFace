import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makePost } from "../../../store/posts";

// Form used to create a post
function CreatePostForm() {
    const [text, setText] = useState("");
    const [image, setImage] = useState("");
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    const submit = async e => {
        e.preventDefault();
        setErrors([]);

        const data = await dispatch(makePost(text, image));

        if (data) {
            //Show errors
            setErrors(data);
        } else {
            //Close modal
        }
    };

    return (
        <>
            <h2>CreatePostForm</h2>
            <div>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <form onSubmit={submit}>
                <textarea
                    name="text"
                    placeholder="What's on your mind?"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <input
                    name="image"
                    type="file"
                    accept="image/*"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                />
                <button>Post</button>
            </form>
        </>
    );
}

export default CreatePostForm;

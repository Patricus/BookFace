import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makePost } from "../../../store/post";

// Form used to create a post
function CreatePostForm() {
    const [text, setText] = useState("");
    const [image, setImage] = useState();
    const [errors, setErrors] = useState([]);

    dispatch = useDispatch();

    const submit = async e => {
        e.preventDefault();
        setErrors([]);

        data = await dispatch(makePost(text, image));

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
                <textarea name="text" placeholder="What's on your mind?" />
                <input name="image" type="file" accept="image/*" />
            </form>
        </>
    );
}

export default CreatePostForm;

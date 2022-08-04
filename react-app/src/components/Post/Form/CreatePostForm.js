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
        let image_link = "";

        const imageData = new FormData();
        imageData.append("image", image);

        const imageRes = await fetch(`/api/images/`, {
            method: "POST",
            body: imageData,
        });

        if (imageRes.ok) {
            image_link = await imageRes.json();
            image_link = image_link.url;
        } else if (imageRes.status < 500) {
            const data = await imageRes.json();
            if (data.errors) {
                return [data.errors];
            }
        } else {
            return ["An error occurred. Please try again."];
        }

        const data = await dispatch(makePost(text, image_link));

        if (data) {
            //Show errors
            setErrors(data);
        } else {
            //Close modal
            setText("");
            setImage("");
            setErrors([]);
        }
    };

    return (
        <>
            <h2>Create Post Form</h2>
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
                    onChange={e => setImage(e.target.files[0])}
                />
                <button>Post</button>
            </form>
        </>
    );
}

export default CreatePostForm;

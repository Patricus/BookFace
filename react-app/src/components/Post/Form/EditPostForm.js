import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../../../store/posts";

// Form used to edit a post
function CreatePostForm({ post, setShowEditPost }) {
    const [text, setText] = useState(post.text);
    const [image, setImage] = useState(post.image_link);
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    const submit = async e => {
        e.preventDefault();
        setErrors([]);

        const data = await dispatch(editPost(post.id, text, image));

        if (data) {
            //Show errors
            setErrors(data);
        } else {
            //Close modal
            setShowEditPost(false);
        }
    };

    return (
        <>
            <h2>EditPostForm</h2>
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

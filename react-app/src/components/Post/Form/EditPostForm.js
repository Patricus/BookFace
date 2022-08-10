import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../../../store/posts";
import { Modal } from "../../Modal";

// Form used to edit a post
function EditPostForm({ post, setShowEditPost }) {
    const [text, setText] = useState(post.text);
    const [image, setImage] = useState(post.image_link);
    const [errors, setErrors] = useState([]);
    const [textErrors, setTextErrors] = useState([]);
    const [imageErrors, setImageErrors] = useState([]);

    const dispatch = useDispatch();

    const submit = async e => {
        e.preventDefault();
        setErrors([]);

        const data = await dispatch(editPost(post.id, text, image));

        if (data) {
            //Show errors
            setErrors(data);
            return;
        } else {
            //Close modal
            setShowEditPost(false);
        }
    };

    useEffect(() => {
        const textErrs = [];
        const imageErrs = [];
        errors.forEach(error => {
            error = error.split(" : ");
            if (error[0] === "text") textErrs.push(error[1]);
            if (error[0] === "image") imageErrs.push(error[1]);
        });
        setTextErrors(textErrs);
        setImageErrors(imageErrs);
    }, [errors]);

    return (
        <Modal onClose={() => setShowEditPost(false)}>
            <h2>Edit profile</h2>
            <form className="post-form" onSubmit={submit}>
                {textErrors.length > 0 && (
                    <div className="errors">
                        {textErrors.map((error, ind) => (
                            <div className="error" key={ind}>
                                {error}
                            </div>
                        ))}
                    </div>
                )}
                <textarea
                    name="text"
                    placeholder="What's on your mind?"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                {imageErrors.length > 0 && (
                    <div className="post-errors">
                        {imageErrors.map((error, ind) => (
                            <div className="error" key={ind}>
                                {error}
                            </div>
                        ))}
                    </div>
                )}
                <label className="custom-file-upload">
                    <input
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={e => setImage(e.target.value)}
                    />
                    Upload Photo
                </label>
                <button>Update profile</button>
            </form>
        </Modal>
    );
}

export default EditPostForm;

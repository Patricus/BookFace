import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../../../store/posts";
import { Modal } from "../../Modal";

// Form used to edit a post
function EditPostForm({ post, setShowEditPost }) {
    const [text, setText] = useState(post.text);
    const [image, setImage] = useState();
    const [errors, setErrors] = useState([]);
    const [textErrors, setTextErrors] = useState([]);
    const [imageErrors, setImageErrors] = useState([]);

    const dispatch = useDispatch();

    const submit = async e => {
        e.preventDefault();
        setErrors([]);

        let image_link = "";
        if (image) {
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
        }

        const data = await dispatch(editPost(post.id, text, image_link));

        if (data) {
            //Show errors
            setErrors(data);
            return;
        } else {
            //Close modal
            setErrors([]);
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
            <h2>Edit post</h2>
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
                <div className="post-required"></div>
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
                        onChange={e => setImage(e.target.files[0])}
                    />
                    {image ? image.name : `Upload Photo`}
                </label>
                <button>Update post</button>
            </form>
        </Modal>
    );
}

export default EditPostForm;

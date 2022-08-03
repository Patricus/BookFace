import React from "react";

function Post({ post }) {
    return (
        <div>
            Post
            {post.image && <img src={post.image_link} alt="post" />}
            <p>{post.text}</p>
        </div>
    );
}

export default Post;

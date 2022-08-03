import React from "react";
import { useSelector } from "react-redux";
import CreatePostForm from "../../Post/Form/CreatePostForm";
import Post from "../../Post/Elements/Post";

function PostFeed() {
    const posts = useSelector(state => state.posts);
    return (
        <div>
            PostFeed
            <CreatePostForm />
            {posts &&
                Object.values(posts).map(post => {
                    return <Post key={post.id} post={post} />;
                })}
        </div>
    );
}

export default PostFeed;

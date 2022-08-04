import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatePostForm from "../../Post/Form/CreatePostForm";
import Post from "../../Post/Elements/Post";
import { getPosts } from "../../../store/posts";

function PostFeed() {
    const posts = useSelector(state => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <div>
            <CreatePostForm />
            {posts &&
                Object.values(posts).map(post => {
                    return <Post key={post.id} postId={post.id} />;
                })}
        </div>
    );
}

export default PostFeed;

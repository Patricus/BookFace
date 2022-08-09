import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatePostForm from "../../Post/Form/CreatePostForm";
import Post from "../../Post/Elements/Post";
import { getPosts } from "../../../store/posts";
import { getFriends } from "../../../store/friends";

function PostFeed() {
    const posts = useSelector(state => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFriends());
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div id="feed">
            <CreatePostForm />
            {posts &&
                Object.values(posts)
                    .sort((a, b) => {
                        return new Date(b.created_at) - new Date(a.created_at);
                    })
                    .map(post => {
                        return <Post key={post.id} post={post} />;
                    })}
        </div>
    );
}

export default PostFeed;

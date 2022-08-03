import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatePostForm from "../../Post/Form/CreatePostForm";
import Post from "../../Post/Elements/Post";
import { getPosts } from "../../../store/posts";

function PostFeed() {
    const my_posts = useSelector(state => state.session.user.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <div>
            <CreatePostForm />
            {my_posts &&
                Object.values(my_posts).map(post => {
                    return <Post key={post.id} post={post} />;
                })}
        </div>
    );
}

export default PostFeed;

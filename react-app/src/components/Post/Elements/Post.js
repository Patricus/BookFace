import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../../store/comments";
import Comment from "../../Comment/Elements/Comment";
import CreateCommentForm from "../../Comment/Form/CreateCommentForm";
import PostDropdown from "./PostDropdown";
import "./post.css";
import PosterInfo from "./PosterInfo";

function Post({ post }) {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const friends = useSelector(state => state.friends);
    const comments = Object.values(useSelector(state => state.posts[post.id].comments));

    useEffect(() => {
        if (post) dispatch(getComments(post.id));
    }, [dispatch, post]);

    const post_time = date => {
        // seconds
        let post_date = Math.abs(new Date() - new Date(date)) / 1000;
        if (post_date < 60) return Math.floor(post_date) + "s";
        // minutes
        post_date /= 60;
        if (post_date < 60) return Math.floor(post_date) + "m";
        // hours
        post_date /= 60;
        if (post_date < 24) return Math.floor(post_date) + "h";
        // days
        post_date /= 24;
        if (post_date < 7) return Math.floor(post_date) + "d";
        // more than a week
        return new Date(date).toLocaleDateString();
    };

    return (
        <>
            {post && friends && user && (
                <div className="post-container">
                    <div className="post">
                        {post.user_id === user.id && <PostDropdown post={post} />}
                        <div style={{ width: "100%" }}>
                            {post.user_id !== user.id ? (
                                <PosterInfo poster={friends[post.user_id]} />
                            ) : (
                                <PosterInfo poster={user} />
                            )}
                            <small>
                                {post_time(post.created_at)}
                                {post.created_at !== post.edited_at &&
                                    ` • Edited ${post_time(post.edited_at)}`}
                            </small>
                        </div>
                        <p>{post.text}</p>
                        {post.image_link && <img src={post.image_link} alt="post" />}
                    </div>
                    <div>
                        <span>{`Likes: ${post.likes}`}</span>
                        {comments ? (
                            <span>{`Comments: ${comments.length}`}</span>
                        ) : (
                            <span>Comments: 0</span>
                        )}
                    </div>
                    {comments &&
                        comments.map(comment => <Comment key={comment.id} comment={comment} />)}
                    <CreateCommentForm post_id={post.id} />
                </div>
            )}
        </>
    );
}

export default Post;

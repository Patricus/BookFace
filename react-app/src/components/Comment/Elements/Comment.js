import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EditCommentForm from "../Form/EditCommentForm";
import CommentDropdown from "./CommentDropdown";
import "./comment.css";
import defaultProfilePic from "../../images/default-profile.png";

function Comment({ comment }) {
    const [showEditComment, setShowEditComment] = useState(false);
    const [commenter, setCommenter] = useState(null);

    const user = useSelector(state => state.session.user);

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/users/${comment.user_id}/`);
            setCommenter(await res.json());
        })();
    }, [comment.user_id]);

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
            {showEditComment ? (
                <EditCommentForm comment={comment} setShowEditComment={setShowEditComment} />
            ) : (
                <div className="comment">
                    {commenter && (
                        <>
                            <img
                                src={
                                    commenter.profile_pic
                                        ? commenter.profile_pic
                                        : defaultProfilePic
                                }
                                alt="profile"
                            />
                            <div>
                                {user.id === comment.user_id && (
                                    <CommentDropdown
                                        comment={comment}
                                        setShowEditComment={setShowEditComment}
                                    />
                                )}
                                <small>
                                    {post_time(comment.created_at)}
                                    {comment.created_at !== comment.edited_at &&
                                        ` • Edited ${post_time(comment.edited_at)}`}
                                </small>
                                <div>
                                    <h4>{`${commenter.first_name} ${commenter.last_name}`}</h4>
                                    <p>{comment.text}</p>
                                </div>
                                <button>{`Likes: ${comment.likes}`}</button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
}

export default Comment;

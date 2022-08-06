import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFriend } from "../../../../store/friends";

function FriendCard({ friend }) {
    const user = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    const deleteFriend = () => {
        dispatch(removeFriend(user.id, friend.id));
    };
    return (
        <div className="friend-card">
            <div>
                <h4>{`${friend.first_name} ${friend.last_name}`}</h4>
            </div>
            <div>
                <button onClick={deleteFriend}>Unfriend</button>
            </div>
        </div>
    );
}

export default FriendCard;

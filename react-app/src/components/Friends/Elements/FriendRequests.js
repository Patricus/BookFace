import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acceptFriend } from "../../../store/friends";

function FriendRequests({ friend }) {
    const user = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    const acceptRequest = () => {
        dispatch(acceptFriend(user.id, friend.id));
    };
    return (
        <div>
            <div>{`${friend.first_name} ${friend.last_name}`}</div>
            <div>
                <button onClick={acceptRequest}>Add Friend</button>
            </div>
        </div>
    );
}

export default FriendRequests;

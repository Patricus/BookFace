import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestFriend } from "../../../../store/friends";

function UserCard({ friend }) {
    const user = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    const addFriend = () => {
        dispatch(requestFriend(user.id, friend.id));
    };
    return (
        <div>
            <div>{`${friend.first_name} ${friend.last_name}`}</div>
            <div>
                <button onClick={addFriend}>Add Friend</button>
            </div>
        </div>
    );
}

export default UserCard;

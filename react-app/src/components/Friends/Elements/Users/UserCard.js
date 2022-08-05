import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestFriend } from "../../../../store/sentRequests";
import { removeUser } from "../../../../store/users";

function UserCard({ friend }) {
    const user = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    const addFriend = async () => {
        await dispatch(requestFriend(user.id, friend.id));
        dispatch(removeUser(friend));
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

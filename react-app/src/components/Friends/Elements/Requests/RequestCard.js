import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { acceptFriend, removeFriend } from "../../../../store/friends";

function RequestCard({ request }) {
    const user = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    const acceptRequest = () => {
        dispatch(acceptFriend(user.id, request.id));
    };

    const deleteFriend = () => {
        dispatch(removeFriend(user.id, request.id));
    };

    return (
        <div>
            <div>{`${request.first_name} ${request.last_name}`}</div>
            <div>
                <button onClick={acceptRequest}>Accept Friend Request</button>
                <button onClick={deleteFriend}>Decline Friend Request</button>
            </div>
        </div>
    );
}

export default RequestCard;

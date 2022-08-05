import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { acceptFriend, removeFriend } from "../../../../store/friends";
import { deleteReceivedRequest } from "../../../../store/receivedRequests";

function RequestCard({ request }) {
    const user = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    const acceptRequest = async () => {
        console.log("user", user.id);
        console.log("request", request.id);
        await dispatch(acceptFriend(user.id, request.id));
        dispatch(deleteReceivedRequest(request));
    };

    const deleteFriend = async () => {
        await dispatch(removeFriend(user.id, request.id));
        dispatch(deleteReceivedRequest(request));
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

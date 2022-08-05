import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFriend } from "../../../../store/friends";

function RequestSentCard({ request }) {
    const user = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    const deleteFriend = () => {
        dispatch(removeFriend(user.id, request.id));
    };

    return (
        <div>
            <div>{`${request.first_name} ${request.last_name}`}</div>
            <div>
                <button onClick={deleteFriend}>Rescind Friend Request</button>
            </div>
        </div>
    );
}

export default RequestSentCard;

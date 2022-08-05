import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFriend } from "../../../../store/friends";
import { deleteSentRequest } from "../../../../store/sentRequests";

function RequestSentCard({ request }) {
    const user = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    const deleteFriend = async () => {
        await dispatch(removeFriend(user.id, request.id));
        dispatch(deleteSentRequest(request));
    };

    return (
        <div>
            {request && (
                <>
                    <div>{`${request.first_name} ${request.last_name}`}</div>
                    <div>
                        <button onClick={deleteFriend}>Rescind Friend Request</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default RequestSentCard;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequests } from "../../../../store/receivedRequests";
import { getSentRequests } from "../../../../store/sentRequests";
import RequestCard from "./RequestCard";
import SentRequests from "./SentRequests";

function Requests() {
    const [showSentRequests, setShowSentRequests] = useState(false);

    const requests = useSelector(state => state.requests);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRequests());
        dispatch(getSentRequests());
    }, [dispatch]);

    return (
        <div>
            {showSentRequests && (
                <SentRequests requests={requests.sent} setShowSentRequests={setShowSentRequests} />
            )}
            <div>
                <button onClick={() => setShowSentRequests(true)}>Sent Requests</button>
            </div>
            {requests &&
                Object.values(requests.received).map(request => (
                    <RequestCard key={request.id} request={request} />
                ))}
        </div>
    );
}

export default Requests;

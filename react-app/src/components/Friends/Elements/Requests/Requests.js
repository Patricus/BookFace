import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequests } from "../../../../store/receivedRequests";
import { getSentRequests } from "../../../../store/sentRequests";
import RequestCard from "./RequestCard";
import SentRequests from "./SentRequests";

function Requests({ requests }) {
    const [showSentRequests, setShowSentRequests] = useState(false);
    const dispatch = useDispatch();

    const sent = useSelector(state => state.requests.sent);

    useEffect(() => {
        dispatch(getRequests());
        dispatch(getSentRequests());
    }, [dispatch]);

    return (
        <div style={{ position: "relative" }}>
            {showSentRequests && (
                <SentRequests requests={sent} setShowSentRequests={setShowSentRequests} />
            )}
            <div>
                <button id="sent-requests-button" onClick={() => setShowSentRequests(true)}>
                    Sent Requests
                </button>
            </div>
            <div className="cardContainer">
                {requests &&
                    Object.values(requests).map(request => (
                        <RequestCard key={request.id} request={request} />
                    ))}
            </div>
        </div>
    );
}

export default Requests;

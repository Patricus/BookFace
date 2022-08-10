import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRequests } from "../../../../store/receivedRequests";
import { getSentRequests } from "../../../../store/sentRequests";
import RequestCard from "./RequestCard";

function Requests({ requests }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRequests());
        dispatch(getSentRequests());
    }, [dispatch]);

    return (
        <div className="cardContainer">
            {requests &&
                Object.values(requests).map(request => (
                    <RequestCard key={request.id} request={request} />
                ))}
        </div>
    );
}

export default Requests;

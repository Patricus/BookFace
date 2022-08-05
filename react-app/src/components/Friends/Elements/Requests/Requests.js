import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequests } from "../../../../store/requests";
import RequestCard from "./RequestCard";

function Requests() {
    const requests = useSelector(state => state.requests);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRequests());
    }, [dispatch]);

    return (
        <div>
            {requests &&
                Object.values(requests).map(request => (
                    <RequestCard key={request.id} request={request} />
                ))}
        </div>
    );
}

export default Requests;

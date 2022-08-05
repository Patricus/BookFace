import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequests } from "../../../../store/requests";
import UserCard from "../Users/UserCard";

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
                    <UserCard key={request.id} friend={request} />
                ))}
        </div>
    );
}

export default Requests;

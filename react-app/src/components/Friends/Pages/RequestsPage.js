import React from "react";
import { useSelector } from "react-redux";
import Requests from "../Elements/Requests/Requests";
import RequestSideBar from "../Elements/Requests/RequestSideBar";
import "./friendPage.css";

function RequestsPage() {
    const requests = useSelector(state => state.requests);

    return (
        <div className="friend-page">
            <div>
                <RequestSideBar requests={requests.sent} />
            </div>
            <div>
                <Requests requests={requests.received} />
            </div>
        </div>
    );
}

export default RequestsPage;
